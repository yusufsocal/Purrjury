// Purrjury web prototype. PUZZLES comes from puzzles.js (made by export.py),
// LESSONS (the "How to play" tutorial) from tutorial.js (made by tutorial.py).

// colors whose sprite has another name (same as SPRITE_COAT in purrjury/board/colors.py)
const SPRITE_COAT = { orange: "ginger", yellow: "golden" };

// the color of the name band on phones, one per cat color (light ones get dark text)
const COAT_BAND = { black: "#262626", white: "#e9e5dc", grey: "#9b9b9b", orange: "#e3893d", brown: "#7a5230", yellow: "#d4a52a" };
const LIGHT_COATS = new Set(["white", "yellow"]);

const MARKS = ["unknown", "honest", "liar"];   // tapping a cat goes through these in order
const LEVELS = ["easy", "medium", "hard", "tricky", "unrated"];   // menu order. "unrated": puzzles from before levels existed

// your own marks on a cat (with the pen button), shown as small chips on the card
const TAGS = [
  { id: "q", label: "?", title: "Not sure yet" },
  { id: "bang", label: "!", title: "Come back to this" },
  { id: "blue", label: "", title: "Blue group" },
  { id: "purple", label: "", title: "Purple group" },
];

// a fresh start for a puzzle: every cat unknown, except the one an easy puzzle gives you
function freshState(p) {
  return {
    marks: p.cats.map((_, i) => i === p.given ? (p.liars[i] ? "liar" : "honest") : "unknown"),
    used: p.cats.map(() => false),
    notes: p.cats.map(() => ""),   // your own note for every cat
    tags: p.cats.map(() => []),    // ids from TAGS
    checks: 0, wrongChecks: 0, hints: 0, seconds: 0, solved: false, revealed: false,
    tour: {},    // lesson 4: the tour steps you've done, e.g. { note: true }
    moves: 0,                         // how many marks you've made, to number them
    markedAt: p.cats.map(() => 0),    // the number of the move that set each cat's mark
    // feedback set: the rating card
    cardOpen: false, sent: false, sending: false, hard: 0, fun: 0, comment: "", error: "",
  };
}

// index.html?set=feedback: the playtest set. No Check, Reset or Reveal, a puzzle counts as solved
// once every mark is right, and players rate each puzzle (sent to the Google Sheet's Apps Script).
const FEEDBACK = new URLSearchParams(location.search).get("set") === "feedback";
const FEEDBACK_URL = "https://script.google.com/macros/s/AKfycbwG6leJIr5jJQl2he_iRZNn7rx9QDIgZJw_-lOy4A5Az_7xRO9C0F716GoIk4ce9djf/exec";
const PLAYER_KEY = "purrjury-player";   // in localStorage: a random id, so one player's ratings can be grouped

// The lessons are played like puzzles: they go after the real puzzles in one list.
// LESSONS is missing if an old cached page loads without tutorial.js, then there's just no tutorial.
const LESSON_LIST = typeof LESSONS !== "undefined" ? LESSONS : [];
const ALL_PUZZLES = PUZZLES.concat(LESSON_LIST.map(lesson => lesson.puzzle));
const FIRST_LESSON = PUZZLES.length;   // ALL_PUZZLES[FIRST_LESSON + k] is lesson k
const SEEN_KEY = "purrjury-tutorial-seen";   // in localStorage once the tutorial has been opened

// progress for every puzzle, so you can switch back and forth without losing it
const states = ALL_PUZZLES.map(freshState);

// Feedback set: progress is kept in localStorage, so a reload (or a phone dropping the tab
// after you switch apps) doesn't lose your marks, your time or which puzzles you've rated.
// Each puzzle is saved under its own id, so a changed puzzle list can't mix them up.
const SAVE_KEY = FEEDBACK ? "purrjury-progress-feedback" : null;
const SAVED_FIELDS = ["marks", "used", "notes", "tags", "checks", "wrongChecks", "hints", "seconds", "solved",
  "revealed", "tour", "moves", "markedAt", "cardOpen", "sent", "hard", "fun", "comment"];

function puzzleId(i) {
  return i >= FIRST_LESSON ? `lesson-${i - FIRST_LESSON}` : `${sizeOf(ALL_PUZZLES[i])}-${ALL_PUZZLES[i].seed}`;
}

function saveProgress() {
  if (!SAVE_KEY) return;
  const saved = {};
  states.forEach((s, i) => { saved[puzzleId(i)] = Object.fromEntries(SAVED_FIELDS.map(f => [f, s[f]])); });
  try { localStorage.setItem(SAVE_KEY, JSON.stringify(saved)); } catch {}   // storage can be blocked: then nothing is kept
}

function loadProgress() {
  if (!SAVE_KEY) return;
  let saved = {};
  try { saved = JSON.parse(localStorage.getItem(SAVE_KEY)) || {}; } catch {}
  states.forEach((s, i) => {
    const old = saved[puzzleId(i)];
    if (!old || old.marks?.length !== s.marks.length) return;   // nothing saved, or it doesn't fit this puzzle
    for (const f of SAVED_FIELDS) if (f in old) s[f] = old[f];
  });
}

loadProgress();

let list = [];               // indexes into PUZZLES of the size and level picked in the menu
let current = 0;             // position in list
let chosenSize = null;       // e.g. "3x3"
let highlight = null;        // index of the cat whose connections are shown, or null
let highlightMode = "by";    // "by": cats that talk about it, "about": cats it talks about
let lastRightClick = { index: null, time: 0 };   // to notice a double right click
let highlightTimer = null;   // clears the highlight after a few seconds
let hintCards = new Set();   // cards outlined by the last hint
let hintFinds = [];          // the cats that hint's clue finds, shown when you press Hint again
let hintFound = new Set();   // those cats, once they're shown
let editing = null;          // the cat whose notes and tags are open, or null
let pressTimer = null;       // for long-press on phones
let longPressed = false;     // true right after a long-press, so the tap after it doesn't change the mark
const HIGHLIGHT_SECONDS = 6;

const grid = document.getElementById("grid");
const info = document.getElementById("info");
const message = document.getElementById("message");
const timer = document.getElementById("timer");
const legend = document.getElementById("legend");
const menu = document.getElementById("menu");
const game = document.getElementById("game");
const sizeButtons = document.getElementById("sizes");
const levelButtons = document.getElementById("levels");
const lessonBox = document.getElementById("lesson");
const hintButton = document.getElementById("hint");


function puzzle() { return ALL_PUZZLES[list[current]]; }
function state() { return states[list[current]]; }
// the lesson being played, or null in a normal puzzle
function lesson() { return list[current] >= FIRST_LESSON ? LESSON_LIST[list[current] - FIRST_LESSON] : null; }
function sizeOf(p) { return `${p.rows}x${p.cols}`; }
function levelOf(p) { return p.level || "unrated"; }


// --- Menu ---

function showMenu() {
  clearConnections();
  clearHint();
  editing = null;
  game.hidden = true;
  menu.hidden = false;
  ratingBox.hidden = !general.open;   // a puzzle's rating card belongs to the game, not the menu
  document.body.classList.remove("playing");
  renderMenu();
}


function renderMenu() {
  // every size that has puzzles, in the order they appear
  const sizes = [...new Set(PUZZLES.map(sizeOf))];
  if (!sizes.includes(chosenSize)) chosenSize = sizes[0];

  sizeButtons.innerHTML = "";
  sizes.forEach(size => {
    const button = document.createElement("button");
    button.textContent = size;
    if (size === chosenSize) button.classList.add("selected");
    button.addEventListener("click", () => { chosenSize = size; renderMenu(); });
    sizeButtons.append(button);
  });

  // one button per level this size has, with how many of its puzzles you've solved
  levelButtons.innerHTML = "";
  LEVELS.forEach(level => {
    const indexes = PUZZLES.map((p, i) => i).filter(i => sizeOf(PUZZLES[i]) === chosenSize && levelOf(PUZZLES[i]) === level);
    if (indexes.length === 0) return;
    const solved = indexes.filter(i => states[i].solved).length;

    const button = document.createElement("button");
    button.className = "level level-" + level;
    button.innerHTML = `<span class="level-name"></span><span class="level-count"></span>`;
    button.querySelector(".level-name").textContent = level;
    button.querySelector(".level-count").textContent = FEEDBACK
      ? (indexes.every(i => states[i].sent) ? "Rated, thanks!" : "Not rated yet")
      : `${solved} / ${indexes.length} solved`;
    // the feedback set has one puzzle per level: play them all as one list, starting at this one
    button.addEventListener("click", () => FEEDBACK ? start(PUZZLES.map((_, i) => i), indexes[0]) : start(indexes));
    levelButtons.append(button);
  });
}


// start playing a list of puzzles, at puzzle `at` if given, else at the first one you haven't solved yet
function start(indexes, at) {
  list = indexes;
  const firstUnsolved = list.findIndex(i => !states[i].solved);
  if (at !== undefined) current = list.indexOf(at);
  else current = firstUnsolved === -1 ? 0 : firstUnsolved;
  menu.hidden = true;
  game.hidden = false;
  general.open = false;   // the menu's feedback card closes when you start playing
  document.body.classList.add("playing");   // phones hide the title while playing, so the grid gets the screen
  message.textContent = "";
  render();
}


// the "How to play" lessons, from the first one you haven't finished
function startTutorial() {
  try { localStorage.setItem(SEEN_KEY, "1"); } catch {}   // storage can be blocked, the tutorial still works
  start(LESSON_LIST.map((_, k) => FIRST_LESSON + k));
}


let lastSaid = "";   // what the guide said last time, so it only hops when that changes
let guidePoints = new Set();   // cats the guide points at ("start with Ash"), they pulse like a hint
let guidePoint = null;         // the tour step whose button (pen, ✓ or Hint) the guide points at

// the guide above a lesson's grid: a tuxedo cat (a coat no puzzle cat has) with a speech bubble
// that holds the title, what to do, the tools to try, and feedback on your marks
function renderLesson() {
  const l = lesson();
  guidePoints = new Set();
  guidePoint = null;
  hintButton.classList.remove("point");
  document.body.classList.toggle("in-lesson", l !== null);
  hintButton.textContent = l?.steps ? "Next step" : "Hint";
  lessonBox.hidden = l === null;
  if (!l) return;
  const s = state();

  lessonBox.innerHTML = "";
  const guide = document.createElement("img");
  guide.className = "guide";
  guide.src = `sprites/cat_tuxedo_${s.solved ? "happy" : "neutral"}.png`;   // happy once the lesson is solved
  guide.alt = "";
  const bubble = document.createElement("div");
  bubble.className = "bubble";
  lessonBox.append(guide, bubble);

  const title = document.createElement("h2");
  title.textContent = l.title;
  const intro = document.createElement("p");
  intro.textContent = l.intro;
  // the ending (and the last lesson's "something doesn't add up") take the intro's place, so the bubble needs less room
  const allMarked = s.marks.every(mark => mark !== "unknown");
  intro.hidden = s.solved || (l.steps !== undefined && allMarked);
  bubble.append(title, intro);

  // why a mark is wrong (lessons 1 to 4 explain it), the tour step you're on, or the lesson's ending once it's solved
  const feedback = document.createElement("p");
  feedback.className = "lesson-feedback";
  if (s.solved) {
    feedback.classList.add("solved");
    feedback.append(l.done, " ", nextButton(current === list.length - 1));
  } else {
    const p = puzzle();
    const right = cat => s.marks[cat] === (p.liars[cat] ? "liar" : "honest");
    // the cats this one's answer builds on (lesson.after) that aren't solved yet
    const unsolved = cat => (l.after?.[cat] ?? []).filter(c => !right(c));
    // a wrong mark you can already fix, then a mark (right or wrong) made before the cats it builds on
    const wrong = s.marks.findIndex((mark, i) => mark !== "unknown" && !right(i) && !unsolved(i).length);
    const early = s.marks.findIndex((mark, i) => mark !== "unknown" && unsolved(i).length);
    // a cat that's ready now: the cats it builds on are solved and it has no mark yet (lesson.next)
    const ready = Object.keys(l.next ?? {}).map(Number).find(cat => s.marks[cat] === "unknown" && !unsolved(cat).length);
    if (l.steps) {
      // the last lesson is a real puzzle: no word on single marks (that would let you guess your way through),
      // only once every cat is marked and something is off. Next step then finds the first mark that's off.
      if (allMarked) feedback.textContent = l.off;
    } else if (wrong !== -1) {
      feedback.classList.add("wrong");
      feedback.textContent = l.why?.[wrong] ?? `${p.cats[wrong].name}'s mark is wrong. Look at the clues again.`;
    } else if (early !== -1) {
      const first = unsolved(early);
      const names = first.map(cat => p.cats[cat].name).join(" and ");
      feedback.classList.add("wrong");
      feedback.textContent = `Start with ${names} first: ${p.cats[early].name}'s answer comes from ${names}'s clue.`;
      guidePoints = new Set(first);   // and those cats pulse
    } else if (ready !== undefined) {
      feedback.textContent = l.next[ready];
      guidePoints = new Set([ready]);
    } else if (tourStep(l, s)) {
      const step = tourStep(l, s);
      feedback.textContent = tourText(stepText(step));
      // the hint step points at Hint until it has shown the cat it finds
      guidePoint = step.point === "hint" && hintFound.size ? null : step;
      if (step.point === "card") guidePoints = new Set([step.cat]);
    }
  }
  hintButton.classList.toggle("point", guidePoint?.point === "hint");
  bubble.append(feedback);
  keepTallest(bubble, intro, feedback, l);

  // the cat hops when it says something new (a new lesson, a why line, the ending), not on every tap
  // (the guide and bubble are new elements on every render, so only the new ones get the animation class)
  const said = `${current} ${bubble.textContent}`;
  if (said !== lastSaid) {
    guide.classList.add("hop");
    bubble.classList.add("pop");
  }
  lastSaid = said;
}


// lesson 4's tour: the first step you haven't done yet. A step stays done once you've done it,
// and steps you do early count too, so the guide just skips them when it gets there.
function tourStep(l, s) {
  if (!l.tour) return null;
  l.tour.forEach(step => { if (stepDone(step, s)) s.tour[step.id] = true; });
  return l.tour.find(step => !s.tour[step.id]) ?? null;
}


function stepDone(step, s) {
  const done = step.done ?? {};   // the last step has none: it ends when the lesson is solved
  if ("note" in done) return s.notes[done.note].trim() !== "" && editing !== done.note;   // written and closed
  if ("connections" in done) return highlight === done.connections;
  if ("mark" in done) return s.marks[done.mark[0]] === done.mark[1];
  if ("used" in done) return s.used[done.used];
  return false;
}


// the hint step has three texts: before Hint, after one press, and after the second press shows the cat
function stepText(step) {
  if (step.point !== "hint") return step.text;
  if (hintFound.size) return step.found;
  return hintCards.size ? step.again : step.text;
}


// "{press}" in a tour text: right click on a computer, long-press on a phone
function tourText(text) {
  return text.replace("{press}", matchMedia("(hover: none)").matches ? "Long-press" : "Right click");
}


// The bubble starts as tall as it will ever get in this lesson, so the cards under it never move:
// it tries every feedback this lesson can show (each why line, the ending) and keeps the tallest height.
// This all happens before the browser draws, so you never see the tries.
function keepTallest(bubble, intro, feedback, l) {
  const real = [...feedback.childNodes];
  const realIntro = intro.hidden;
  const longestName = puzzle().cats.map(cat => cat.name).sort((a, b) => b.length - a.length)[0];
  const cats = puzzle().cats;
  const options = [
    ...Object.values(l.why ?? {}).map(text => [text]),
    ...Object.values(l.next ?? {}).map(text => [text]),
    ...(l.tour ?? []).flatMap(step => [step.text, step.again, step.found]).filter(Boolean).map(text => [tourText(text)]),
    ...Object.entries(l.after ?? {}).map(([cat, first]) => {
      const names = first.map(c => cats[c].name).join(" and ");
      return [`Start with ${names} first: ${cats[cat].name}'s answer comes from ${names}'s clue.`];
    }),
    // the last lesson never says a single mark is wrong (it has l.off instead, see below)
    ...(l.steps ? [] : [[`${longestName}'s mark is wrong. Look at the clues again.`]]),
  ];
  // these show in place of the intro: the ending with a real button ("Back to the menu" is the longer one), and l.off
  const instead = [[l.done, " ", nextButton(true)], ...(l.off ? [[l.off]] : [])];
  let tallest = 0;
  for (const [hidden, group] of [[false, [[], ...options]], [true, instead]]) {
    intro.hidden = hidden;
    for (const nodes of group) {
      feedback.replaceChildren(...nodes);
      tallest = Math.max(tallest, bubble.offsetHeight);
    }
  }
  intro.hidden = realIntro;
  feedback.replaceChildren(...real);
  bubble.style.minHeight = tallest + "px";
}


// the button after a solved lesson: on to the next one, or back to the menu after the last
function nextButton(last) {
  const button = document.createElement("button");
  button.textContent = last ? "Back to the menu" : "Next lesson →";
  button.addEventListener("click", () => last ? showMenu() : go(1));
  return button;
}


// in a lesson, the puzzle is solved as soon as every mark is right (no Check needed)
function checkLesson() {
  const p = puzzle();
  const s = state();
  if (!lesson() || s.solved || s.revealed) return;
  if (s.marks.every((mark, i) => (mark === "liar") === p.liars[i] && mark !== "unknown")) {
    s.solved = true;
    if (FEEDBACK && lastLesson()) s.cardOpen = !s.sent;   // feedback set: rate the tutorial
  }
}


// true in the tutorial's last lesson (the feedback set asks about the tutorial there)
function lastLesson() {
  return lesson() !== null && list[current] === FIRST_LESSON + LESSON_LIST.length - 1;
}


// --- Game ---


function render() {
  const p = puzzle();
  const s = state();

  const level = levelOf(p);
  info.textContent = lesson()
    ? `How to play · ${current + 1} / ${list.length}`
    : `${level[0].toUpperCase() + level.slice(1)} ${sizeOf(p)} · ${current + 1} / ${list.length}`;
  renderLesson();
  info.title = `seed ${p.seed}`;   // handy when someone reports a puzzle
  grid.dataset.cols = p.cols;   // lets the CSS shrink the clue text on narrow 4x4 cards
  grid.dataset.rows = p.rows;   // and give the lessons' one-row grids taller cards
  grid.style.setProperty("--cols", p.cols);
  grid.style.setProperty("--rows", p.rows);
  // on a computer the cards share the whole grid area (the CSS divides it into this many slots)
  grid.style.setProperty("--slots", Math.max(p.rows, p.cols));
  grid.innerHTML = "";

  // one card per cat
  p.cats.forEach((cat, i) => {
    const card = document.createElement("div");
    card.className = "card " + s.marks[i];
    card.style.setProperty("--coat", COAT_BAND[cat.color] || "#bbb");
    if (LIGHT_COATS.has(cat.color)) card.classList.add("light-coat");
    if (editing === i) card.classList.add("editing");
    if (i === p.given) card.classList.add("given");
    if (s.used[i]) card.classList.add("used");
    if (s.revealed) card.classList.add(p.liars[i] ? "answer-liar" : "answer-honest");

    // connections: the chosen cat, and either the cats that talk about it or the cats it talks about
    if (highlight !== null) {
      if (i === highlight) card.classList.add("focus");
      else if (highlightMode === "by" && cat.mentions.includes(highlight)) card.classList.add("talked-by");
      else if (highlightMode === "about" && p.cats[highlight].mentions.includes(i)) card.classList.add("talks-about");
    }
    if (hintCards.has(i) || guidePoints.has(i)) card.classList.add("hint");
    if (hintFound.has(i)) card.classList.add("hint-found");

    // header: the cat in the middle, its name and coat color under it, then a divider before the clue
    const top = document.createElement("div");
    top.className = "top";

    // the cat picture: its coat, with a face that matches what its clue says (angry for "X is a liar")
    const sprite = document.createElement("img");
    sprite.className = "sprite";
    sprite.src = `sprites/cat_${SPRITE_COAT[cat.color] || cat.color}_${cat.mood || "neutral"}.png`;
    sprite.alt = "";

    const name = document.createElement("span");
    name.className = "name";
    name.textContent = cat.name;

    const color = document.createElement("span");
    color.className = "color";
    color.textContent = cat.color;

    const nameLine = document.createElement("div");
    nameLine.className = "name-line";
    nameLine.append(name, color);

    top.append(sprite, nameLine);

    // honest / liar in the bottom corner (the card color shows it too), and a lock on the given cat
    const badge = document.createElement("span");
    badge.className = "badge";
    const markWord = document.createElement("span");
    markWord.className = "mark-word";
    markWord.textContent = s.marks[i] === "unknown" ? "" : s.marks[i];
    badge.append(markWord);
    if (i === p.given) {
      const lock = document.createElement("span");
      lock.className = "given-lock";
      lock.textContent = "🔒";
      lock.title = "Given: this cat is solved for you";
      badge.append(lock);
    }

    const text = document.createElement("p");
    text.className = cat.hidden ? "text gibberish" : "text";
    // the words go in a span, so fitText can measure them against the space the card has
    const words = document.createElement("span");
    words.textContent = cat.text;
    text.append(words);

    // small button to grey out a clue you're done with
    const usedToggle = document.createElement("button");
    usedToggle.className = "used-toggle";
    usedToggle.innerHTML = "&#10003;";
    usedToggle.title = "Grey out this clue";
    usedToggle.addEventListener("click", event => {
      event.stopPropagation();   // don't also change the mark
      s.used[i] = !s.used[i];
      render();
    });
    if (guidePoint?.point === "check" && guidePoint.cat === i) usedToggle.classList.add("point");

    // pen: open your notes and tags for this cat
    const pen = document.createElement("button");
    pen.className = "pen-toggle";
    if (s.notes[i] || s.tags[i].length) pen.classList.add("has-notes");
    pen.innerHTML = "&#9998;";
    pen.title = "Notes and tags";
    pen.addEventListener("click", event => {
      event.stopPropagation();   // don't also change the mark
      editing = editing === i ? null : i;
      render();
    });
    if (guidePoint?.point === "pen" && guidePoint.cat === i && editing !== i) pen.classList.add("point");

    // right click or long-press on these buttons does nothing: it shouldn't reach the card and show connections
    for (const button of [usedToggle, pen]) {
      button.addEventListener("contextmenu", event => { event.preventDefault(); event.stopPropagation(); });
      button.addEventListener("touchstart", event => event.stopPropagation(), { passive: true });
    }

    card.append(top, text, badge, usedToggle, pen);

    // your tags in a little row, and your note under the clue
    if (s.tags[i].length) {
      const chips = document.createElement("div");
      chips.className = "chips";
      TAGS.filter(tag => s.tags[i].includes(tag.id)).forEach(tag => chips.append(chip(tag)));
      card.append(chips);
    }
    if (editing === i) {
      card.append(noteEditor(i));
    } else if (s.notes[i]) {
      const note = document.createElement("p");
      note.className = "note";
      note.textContent = s.notes[i];
      card.append(note);
    }

    // hidden cats only meow, after Reveal we show what they really said
    if (cat.hidden && s.revealed) {
      const secret = document.createElement("p");
      secret.className = "secret";
      secret.textContent = "Really said: " + cat.secret;
      card.append(secret);
    }
    // tap: change the mark (tap twice quickly for liar). right click or long-press: show connections
    card.addEventListener("click", () => {
      if (longPressed) { longPressed = false; return; }
      clearConnections();   // a tap closes the highlight and still changes the mark
      cycleMark(i);
    });
    // right click: cats that talk about it. double right click: cats it talks about
    card.addEventListener("contextmenu", event => {
      event.preventDefault();   // no browser menu
      const now = Date.now();
      const isDouble = lastRightClick.index === i && now - lastRightClick.time < 400;
      lastRightClick = { index: i, time: now };
      showConnections(i, isDouble ? "about" : "by");
    });
    card.addEventListener("touchstart", () => {
      pressTimer = setTimeout(() => {
        longPressed = true;
        window.getSelection()?.removeAllRanges();   // in case the browser started selecting anyway
        navigator.vibrate?.(20);                    // a tiny buzz so you feel it worked (Android)
        showConnections(i);
      }, 500);
    }, { passive: true });
    card.addEventListener("touchend", () => clearTimeout(pressTimer));
    card.addEventListener("touchmove", () => clearTimeout(pressTimer));
    grid.append(card);
  });

  fitText();
  timer.textContent = formatTime(s.seconds);
  renderRating();
}


// --- Feedback set: the rating card ---

const ratingBox = document.getElementById("rating");
const stopButton = document.getElementById("stop");

// the Stop and rate button, and the card (open after Stop and rate, or once the puzzle is solved).
// The tutorial has no Stop and rate, just one card at the end of the last lesson.
function renderRating() {
  saveProgress();   // render() ends here, and so do paw taps and sending: a good moment to save
  if (!FEEDBACK || (lesson() && !lastLesson())) {
    ratingBox.hidden = true;
    stopButton.hidden = true;
    return;
  }
  const s = state();
  const tutorial = lesson() !== null;
  stopButton.hidden = tutorial;
  stopButton.disabled = s.sent || s.cardOpen;
  stopButton.textContent = s.sent ? "Rated ✓" : s.solved ? "Rate it" : "Stop and rate";

  ratingBox.hidden = !s.cardOpen;
  if (!s.cardOpen) return;
  ratingBox.innerHTML = "";

  const title = document.createElement("h3");
  ratingBox.append(title);

  // after Send: thanks, and where to go from here (nothing after this is recorded)
  if (s.sent) {
    title.textContent = "Thanks, it's sent! 🐾";
    const buttons = document.createElement("div");
    buttons.className = "rating-buttons";
    if (tutorial) {
      buttons.append(ratingButton("Close", () => { s.cardOpen = false; render(); }),
                     ratingButton("On to the puzzles →", () => { s.cardOpen = false; showMenu(); }, true));
      ratingBox.append(buttons);
      return;
    }
    buttons.append(ratingButton("Keep playing", () => { s.cardOpen = false; render(); }));
    if (!s.solved && !s.revealed) {
      buttons.append(ratingButton("Show answer", () => { s.cardOpen = false; reveal(); }));
    }
    const last = current === list.length - 1;
    buttons.append(ratingButton(last ? "Back to the menu" : "Next puzzle →", () => {
      s.cardOpen = false;
      last ? showMenu() : go(1);
    }, true));
    ratingBox.append(buttons);
    return;
  }

  title.textContent = tutorial ? "That's the tutorial! How was it?"
    : s.solved ? `Solved in ${formatTime(s.seconds)}! How was it?` : "How was this puzzle?";
  const help = document.createElement("p");
  help.className = "rating-help";
  // the tutorial asks how clear it was instead of how hard. It's kept in "hard", the sheet's hard column
  // (the puzzle column says "tutorial" on those rows)
  help.textContent = tutorial ? "More paws = clearer, or more fun." : "More paws = harder, or more fun.";
  ratingBox.append(help, pawRow(tutorial ? "Clear" : "Hard", "hard"), pawRow("Fun", "fun"));

  const comment = document.createElement("textarea");
  comment.rows = 2;
  comment.placeholder = "Anything else? Where it was fun, where you got stuck, the design, the cats...";
  comment.value = s.comment;
  comment.addEventListener("input", () => { s.comment = comment.value; });   // no render, it would lose the cursor
  ratingBox.append(comment);

  if (s.error) {
    const error = document.createElement("p");
    error.className = "rating-error";
    error.textContent = s.error;
    ratingBox.append(error);
  }

  const buttons = document.createElement("div");
  buttons.className = "rating-buttons";
  const send = ratingButton(s.sending ? "Sending…" : "Send", sendRating, true);
  send.disabled = s.sending;
  buttons.append(send);
  // no way back in the tutorial: it's finished, and with no Stop and rate button the card couldn't come back
  if (!tutorial) buttons.append(ratingButton("Back to puzzle", () => { s.cardOpen = false; s.error = ""; render(); }));
  ratingBox.append(buttons);
}


// one row of five paws for "hard" or "fun": tap a paw to give that many
function pawRow(label, field) {
  const s = state();
  const row = document.createElement("div");
  row.className = "paw-row";
  const name = document.createElement("span");
  name.className = "paw-label";
  name.textContent = label;
  row.append(name);
  for (let n = 1; n <= 5; n++) {
    const paw = document.createElement("button");
    paw.className = n <= s[field] ? "paw on" : "paw";
    paw.textContent = "🐾";
    paw.title = `${label}: ${n} of 5`;
    paw.setAttribute("aria-label", paw.title);
    paw.addEventListener("click", () => { s[field] = n; s.error = ""; renderRating(); });
    row.append(paw);
  }
  return row;
}


function ratingButton(text, onClick, main = false) {
  const button = document.createElement("button");
  button.textContent = text;
  if (main) button.className = "main";
  button.addEventListener("click", onClick);
  return button;
}


// Stop and rate: the timer stops and the card opens. "Back to puzzle" closes it and the timer goes on.
function stopAndRate() {
  const s = state();
  if (s.sent) return;
  clearHint();
  clearConnections();
  editing = null;
  s.cardOpen = true;
  render();
}


// send the rating to the Google Sheet. No Content-Type header: with "application/json" the browser
// would first ask the server for permission (a CORS preflight), and Apps Script doesn't answer that.
// Sent as plain text, doPost still gets the JSON string in e.postData.contents.
async function sendRating() {
  const p = puzzle();
  const s = state();
  if (s.sending) return;
  const tutorial = lesson() !== null;
  if (!s.hard || !s.fun) {
    s.error = `Pick some paws for ${tutorial ? "clear" : "hard"} and for fun first.`;
    return renderRating();
  }
  // the tutorial counts as one row: its time and hints added up over all lessons
  const lessonStates = LESSON_LIST.map((_, k) => states[FIRST_LESSON + k]);
  const total = field => lessonStates.reduce((sum, ls) => sum + ls[field], 0);
  const msg = {
    player: playerId(),
    puzzle: tutorial ? "tutorial" : `${sizeOf(p)} ${levelOf(p)}`,
    seed: tutorial ? "" : p.seed,
    seconds: tutorial ? total("seconds") : s.seconds,
    hints: tutorial ? total("hints") : s.hints,
    checks: s.checks,
    mistakes: s.wrongChecks,
    result: tutorial ? "finished" : s.solved ? "solved" : s.revealed ? "revealed" : "skipped",
    hard: s.hard,   // in the tutorial: how clear it was
    fun: s.fun,
    comment: s.comment.trim(),
  };
  await post(msg, s, () => { if (state() === s && !game.hidden) renderRating(); });   // only if you're still on this puzzle
}


// send one message to the sheet. `holder` keeps sending / sent / error for its card, `redraw` shows them.
async function post(msg, holder, redraw) {
  holder.sending = true;
  holder.error = "";
  redraw();
  try {
    const response = await fetch(FEEDBACK_URL, { method: "POST", body: JSON.stringify(msg) });
    if ((await response.text()) !== "ok") throw new Error("the script didn't say ok");
    holder.sent = true;
  } catch {
    holder.error = "Couldn't send it. Check your connection and try again.";
  }
  holder.sending = false;
  redraw();
}


// the menu's "Feedback on the whole game": just a comment, and it can be sent as often as you like
const general = { open: false, sending: false, sent: false, comment: "", error: "" };

function renderGeneral() {
  ratingBox.hidden = !general.open;
  if (!general.open) return;
  ratingBox.innerHTML = "";
  const title = document.createElement("h3");
  const buttons = document.createElement("div");
  buttons.className = "rating-buttons";
  const close = ratingButton("Close", () => { general.open = false; general.error = ""; renderGeneral(); });

  if (general.sent) {
    title.textContent = "Thanks, it's sent! 🐾";
    buttons.append(ratingButton("Write more", () => { general.sent = false; general.comment = ""; renderGeneral(); }), close);
    ratingBox.append(title, buttons);
    return;
  }

  title.textContent = "Feedback on the whole game";
  const help = document.createElement("p");
  help.className = "rating-help";
  help.textContent = "Anything you like: the rules, the puzzles, the look, the cats, ideas...";
  const comment = document.createElement("textarea");
  comment.rows = 4;
  comment.value = general.comment;
  comment.addEventListener("input", () => { general.comment = comment.value; general.error = ""; });
  ratingBox.append(title, help, comment);
  if (general.error) {
    const error = document.createElement("p");
    error.className = "rating-error";
    error.textContent = general.error;
    ratingBox.append(error);
  }
  const send = ratingButton(general.sending ? "Sending…" : "Send", sendGeneral, true);
  send.disabled = general.sending;
  buttons.append(send, close);
  ratingBox.append(buttons);
}


async function sendGeneral() {
  if (general.sending) return;
  if (!general.comment.trim()) {
    general.error = "Write something first.";
    return renderGeneral();
  }
  // only player and comment: the other columns stay empty on these rows
  const msg = {
    player: playerId(), puzzle: "general", seed: "", seconds: "", hints: "", checks: "", mistakes: "",
    result: "general", hard: "", fun: "", comment: general.comment.trim(),
  };
  await post(msg, general, () => { if (!menu.hidden) renderGeneral(); });   // only while the menu is still up
}


// this player's random id, made on the first rating and kept in localStorage
function playerId() {
  let id = null;
  try { id = localStorage.getItem(PLAYER_KEY); } catch {}
  if (!id) {
    id = Math.random().toString(36).slice(2, 10);
    try { localStorage.setItem(PLAYER_KEY, id); } catch {}   // storage can be blocked, then each rating gets a new id
  }
  return id;
}


// On a computer the grid is fitted to the screen, so a long clue may not fit its card.
// Shrink its font a little at a time until it does (never below MIN_TEXT_PX).
// On phones the cards just grow, so nothing overflows and nothing shrinks.
const MIN_TEXT_PX = 10;

function fitText() {
  for (const text of grid.querySelectorAll(".text")) {
    const words = text.firstChild;
    text.style.fontSize = "";
    let size = parseFloat(getComputedStyle(text).fontSize);
    while (words.getBoundingClientRect().height > text.clientHeight + 1 && size > MIN_TEXT_PX) {
      size -= 0.5;
      text.style.fontSize = size + "px";
    }
  }
}

// a lesson's bubble is measured for the window's width, so a resize measures it again (render also fits the text)
window.addEventListener("resize", () => {
  if (game.hidden) return;
  if (lesson()) render();
  else fitText();
});


// one small tag chip: "?" or "!" as text, the colors as a dot
function chip(tag) {
  const span = document.createElement("span");
  span.className = "chip chip-" + tag.id;
  span.textContent = tag.label;
  span.title = tag.title;
  return span;
}


// the box the pen opens: tag buttons and a note field
function noteEditor(i) {
  const s = state();
  const box = document.createElement("div");
  box.className = "note-editor";
  // taps and presses in here belong to the editor: no mark changes, no connections, normal paste menu
  for (const type of ["click", "contextmenu", "touchstart"]) {
    box.addEventListener(type, event => event.stopPropagation());
  }

  const tagRow = document.createElement("div");
  tagRow.className = "tag-row";
  TAGS.forEach(tag => {
    const button = document.createElement("button");
    button.className = "tag-toggle";
    if (s.tags[i].includes(tag.id)) button.classList.add("on");
    button.title = tag.title;
    button.append(chip(tag));
    button.addEventListener("click", () => {
      s.tags[i] = s.tags[i].includes(tag.id) ? s.tags[i].filter(id => id !== tag.id) : [...s.tags[i], tag.id];
      render();
    });
    tagRow.append(button);
  });

  const field = document.createElement("textarea");
  field.rows = 2;
  // lesson 4's tour suggests what to write on its cat
  field.placeholder = lesson()?.tour?.find(step => step.done?.note === i)?.placeholder ?? "Note, e.g. honest if Hazel is";
  field.value = s.notes[i];
  field.addEventListener("input", () => { s.notes[i] = field.value; });   // no render here, it would lose the cursor

  const done = document.createElement("button");
  done.className = "note-done";
  done.textContent = "Done";
  done.addEventListener("click", () => { editing = null; render(); });

  box.append(tagRow, field, done);
  return box;
}


function cycleMark(i) {
  const s = state();
  if (s.solved || s.revealed || i === puzzle().given) return;   // the given cat can't be changed
  if (s.cardOpen) return;   // the rating card is open: the puzzle is stopped
  const next = (MARKS.indexOf(s.marks[i]) + 1) % MARKS.length;
  s.marks[i] = MARKS[next];
  s.markedAt[i] = ++s.moves;
  message.textContent = "";
  clearHint();   // the hint was for the old marks
  checkLesson();
  if (FEEDBACK) checkFull();
  render();
}


// feedback set (no Check button): once every cat is marked, it's solved if all marks are right.
// If not, it counts as a wrong check and points at the cat you marked wrong first,
// since the marks you made after it may have come from it.
function checkFull() {
  const p = puzzle();
  const s = state();
  if (lesson() || s.marks.includes("unknown")) return;
  const wrong = p.cats.map((_, i) => i).filter(i => (s.marks[i] === "liar") !== p.liars[i]);
  if (wrong.length === 0) {
    s.solved = true;
    s.cardOpen = !s.sent;   // time to rate it (unless it's rated already)
    message.textContent = `Solved in ${formatTime(s.seconds)}! 🐾`;
    return;
  }
  s.checks++;
  s.wrongChecks++;
  const first = wrong.reduce((a, b) => s.markedAt[a] <= s.markedAt[b] ? a : b);
  hintCards = new Set([first]);
  showHintLabel(`${p.cats[first].name} is wrong. The cats you marked after it may be too.`);
}


function showConnections(i, mode = "by") {
  const cat = puzzle().cats[i];
  clearHint();
  highlight = i;
  highlightMode = mode;
  // small colored label so you know what the color means
  legend.innerHTML = "";
  const tag = document.createElement("span");
  tag.className = "tag tag-" + mode;
  tag.textContent = mode === "by" ? `cats that talk about ${cat.name}` : `cats ${cat.name} talks about`;
  legend.append(tag);
  clearTimeout(highlightTimer);
  highlightTimer = setTimeout(clearConnections, HIGHLIGHT_SECONDS * 1000);
  render();
}


function clearConnections() {
  if (highlight === null) return;
  highlight = null;
  legend.innerHTML = "";
  clearTimeout(highlightTimer);
  render();
}


function check() {
  const p = puzzle();
  const s = state();
  if (s.solved || s.revealed) return;

  // compare every mark with the answer, unknown cats don't count as wrong
  let wrong = 0;
  let unknown = 0;
  s.marks.forEach((mark, i) => {
    if (mark === "unknown") unknown++;
    else if ((mark === "liar") !== p.liars[i]) wrong++;
  });

  s.checks++;
  if (wrong > 0) {
    s.wrongChecks++;
    message.textContent = `${wrong} of your marks ${wrong === 1 ? "is" : "are"} wrong. (mistakes: ${s.wrongChecks})`;
  } else if (unknown > 0) {
    message.textContent = `All your marks are right so far. ${unknown} cat${unknown === 1 ? "" : "s"} left.`;
  } else {
    s.solved = true;
    const hints = s.hints ? ` and ${s.hints} hint${s.hints === 1 ? "" : "s"}` : "";
    message.textContent = `Solved in ${formatTime(s.seconds)} with ${s.wrongChecks} mistake${s.wrongChecks === 1 ? "" : "s"}${hints}! 🐾`;
  }
}


function reset() {
  states[list[current]] = freshState(puzzle());
  editing = null;
  message.textContent = "";
  clearHint();
  render();
}


function reveal() {
  state().revealed = true;
  clearHint();
  message.textContent = "The outlines show the answer: green is honest, red is a liar.";
  render();
}


function go(step) {
  // the lessons go in order: no wrapping around, and past the last one is the menu
  if (lesson() && current + step >= list.length) return showMenu();
  if (lesson() && current + step < 0) return;
  highlight = null;
  editing = null;
  clearHint();
  legend.innerHTML = "";
  current = (current + step + list.length) % list.length;
  message.textContent = "";
  render();
}


// --- Hints ---
// export.py gives every clue a table: which honest/liar combinations of its cats fit the clue.
// The hint does what solver.py does with them: try every combination of the unknown cats,
// and a cat that comes out the same in every combination that fits is forced.

const MAX_UNKNOWN = 12;   // same as in solver.py: groups about more unknown cats than this are skipped


// does the clue fit this world? (world[i] is true if cat i is a liar)
function clueFits(clue, world) {
  if (!clue.bits) clue.bits = Uint8Array.from(atob(clue.table), ch => ch.charCodeAt(0));   // decode once
  let k = 0;
  clue.cats.forEach((cat, j) => { if (world[cat]) k |= 1 << j; });
  return (clue.bits[k >> 3] >> (k & 7)) & 1;
}


// the unknown cats these clues force, given the known cats (a Map of cat index -> true if liar)
function forcedCats(clues, known) {
  const unknown = [...new Set(clues.flatMap(clue => clue.cats))].filter(cat => !known.has(cat));
  if (unknown.length === 0 || unknown.length > MAX_UNKNOWN) return [];

  const world = puzzle().cats.map((_, i) => known.get(i) ?? false);
  const seen = unknown.map(() => new Set());   // the values each unknown cat had in combinations that fit
  for (let combo = 0; combo < 1 << unknown.length; combo++) {
    unknown.forEach((cat, j) => { world[cat] = Boolean(combo >> j & 1); });
    if (clues.every(clue => clueFits(clue, world))) unknown.forEach((cat, j) => seen[j].add(world[cat]));
  }
  return unknown.filter((cat, j) => seen[j].size === 1);
}


// outline one clue that can find a new cat right now, or one pair of clues if no clue works alone
function hint() {
  const p = puzzle();
  const s = state();
  if (s.solved || s.revealed || s.cardOpen) return;
  clearConnections();
  if (lesson()?.steps) return nextStep();

  // only marks that are right count as known, so a wrong mark can't send the hint the wrong way
  const known = new Map();
  let wrong = 0;
  s.marks.forEach((mark, i) => {
    if (mark === "unknown") return;
    if ((mark === "liar") === p.liars[i]) known.set(i, p.liars[i]);
    else wrong++;
  });
  const wrongNote = wrong > 0 ? ` (${wrong} of your marks ${wrong === 1 ? "is" : "are"} wrong)` : "";

  // pressed again: also show the cat (or cats) that clue finds. After that there's nothing more to show.
  if (hintCards.size && hintFinds.length) {
    if (hintFound.size) return;
    s.hints++;
    hintFound = new Set(hintFinds);
    const names = hintFinds.map(cat => p.cats[cat].name).join(" and ");
    showHintLabel(`${hintCards.size === 1 ? "this clue finds" : "these two clues find"} ${names}${wrongNote}`);
    return render();
  }

  // just one hint: the first clue (in grid order) that finds a cat on its own,
  // or if none does, the first pair of clues that finds one together
  const clues = p.cats.map((cat, i) => ({ i, clue: cat.clue })).filter(c => c.clue);
  const single = clues.find(c => forcedCats([c.clue], known).length > 0);
  let useful = [];
  let label = "";
  if (single) {
    useful = [single.i];
    hintFinds = forcedCats([single.clue], known);
    label = "this clue can find a cat right now";
  } else {
    pairSearch:
    for (let a = 0; a < clues.length; a++) {
      for (let b = a + 1; b < clues.length; b++) {
        const found = forcedCats([clues[a].clue, clues[b].clue], known);
        if (found.length > 0) {
          useful = [clues[a].i, clues[b].i];
          hintFinds = found;
          break pairSearch;
        }
      }
    }
    label = "combine these two clues to find a cat";
  }

  s.hints++;
  hintCards = new Set(useful);
  showHintLabel(useful.length ? label + wrongNote : "no hint found");
  render();
}


// the hint's small label above the grid
function showHintLabel(text) {
  legend.innerHTML = "";
  const tag = document.createElement("span");
  tag.className = "tag tag-hint";
  tag.textContent = text;
  legend.append(tag);
}


// the last lesson has only one way through, so its help can name the clue and the cat it gives:
// the first step whose cat isn't marked right yet
function nextStep() {
  const p = puzzle();
  const s = state();
  const step = lesson().steps.find(st => (s.marks[st.cat] === "liar") !== p.liars[st.cat] || s.marks[st.cat] === "unknown");
  if (!step) return;
  s.hints++;
  hintCards = new Set([step.speaker]);
  showHintLabel(step.text);
  render();
}


function clearHint() {
  hintFinds = [];
  hintFound.clear();
  if (hintCards.size === 0) return;
  hintCards.clear();
  legend.innerHTML = "";
}


function formatTime(seconds) {
  const m = Math.floor(seconds / 60);
  const s = String(seconds % 60).padStart(2, "0");
  return `${m}:${s}`;
}


// the timer only runs while a puzzle is open and not finished
// (feedback set: it also stops while the rating card is open, and for good once the rating is sent)
setInterval(() => {
  saveProgress();   // also keeps typed notes and comments, which don't render
  if (game.hidden) return;
  const s = state();
  if (!s.solved && !s.revealed && !s.cardOpen && !s.sent) {
    s.seconds++;
    timer.textContent = formatTime(s.seconds);
  }
}, 1000);

document.getElementById("prev").addEventListener("click", () => go(-1));
document.getElementById("next").addEventListener("click", () => go(1));
document.getElementById("check").addEventListener("click", check);
document.getElementById("reset").addEventListener("click", reset);
document.getElementById("reveal").addEventListener("click", reveal);
document.getElementById("hint").addEventListener("click", hint);
document.getElementById("menu-button").addEventListener("click", showMenu);
document.getElementById("how-to-play").addEventListener("click", startTutorial);
stopButton.addEventListener("click", stopAndRate);
// switching apps on a phone: save right away, the tab may be closed in the background
document.addEventListener("visibilitychange", () => { if (document.hidden) saveProgress(); });

// the feedback set: only Hint and Stop and rate, and a note on the menu that you can stop any time
if (FEEDBACK) {
  for (const id of ["check", "reset", "reveal"]) document.getElementById(id).hidden = true;
  document.getElementById("feedback-note").hidden = false;
  document.getElementById("start-here").hidden = false;
  const generalButton = document.getElementById("general-feedback");
  generalButton.hidden = false;
  generalButton.addEventListener("click", () => { general.open = true; renderGeneral(); });
  document.body.classList.add("feedback");   // the CSS makes How to play stand out
}
document.addEventListener("keydown", event => {
  if (game.hidden) return;
  // while typing a note, the arrow keys move the cursor, and Escape closes the note
  if (event.target.tagName === "TEXTAREA") {
    if (event.key === "Escape") { editing = null; render(); }
    return;
  }
  if (event.key === "Escape" && editing !== null) { editing = null; render(); return; }
  if (event.key === "ArrowLeft") go(-1);
  if (event.key === "ArrowRight") go(1);
  if (event.key === "Escape") {
    if (highlight !== null) clearConnections();
    else showMenu();
  }
});

// when the puzzles were made (set in puzzles.js), so an old cached copy is easy to spot
const versionLine = document.getElementById("version");   // missing in an old cached index.html
if (versionLine && typeof PUZZLES_MADE !== "undefined") {
  versionLine.textContent = "Puzzles made " + PUZZLES_MADE;
}

// the first visit starts with the tutorial, after that it's behind the "How to play" button
let seenTutorial = true;
try { seenTutorial = localStorage.getItem(SEEN_KEY) === "1"; } catch {}
if (!seenTutorial && LESSON_LIST.length) startTutorial();
else showMenu();
