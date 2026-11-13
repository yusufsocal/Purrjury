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
    firstMarkAt: null,   // the puzzle's time when you made your first mark: how long finding a way in took
    playedOn: null,      // daily: the date you first marked a cat or used Hint (only days played on the day count for the streak)
  };
}

// Which page this is (index.html sets window.PAGE):
// "daily": the main page, one 3x3 and one 4x4 a day (see the Daily section below).
// "practice": every level from puzzles.js, with Check, Reset and Reveal (practice/).
// "feedback": the playtest set (feedback/). No Check, Reset or Reveal, a puzzle counts as solved
//   once every mark is right, and players rate each puzzle (sent to the Google Sheet's Apps Script).
const MODE = window.PAGE || "practice";
const DAILY_MODE = MODE === "daily";
const FEEDBACK = MODE === "feedback";
const FEEDBACK_URL = "https://script.google.com/macros/s/AKfycbwG6leJIr5jJQl2he_iRZNn7rx9QDIgZJw_-lOy4A5Az_7xRO9C0F716GoIk4ce9djf/exec";
const PLAYER_KEY = "purrjury-player";   // in localStorage: a random id, so one player's ratings can be grouped

// ?from=poster: where the player found the game (the /play link on the posters adds it).
// Kept in localStorage, so it stays with the player on a later visit without it. Goes into the extra column.
const FROM_KEY = "purrjury-from";
let cameFrom = new URLSearchParams(location.search).get("from")?.slice(0, 30) || null;
try {
  if (cameFrom) localStorage.setItem(FROM_KEY, cameFrom);
  else cameFrom = localStorage.getItem(FROM_KEY);
} catch {}

// The lessons are played like puzzles: they go after the real puzzles in one list.
// LESSONS is missing if an old cached page loads without tutorial.js, then there's just no tutorial.
// The daily page has no puzzles.js: its puzzles are added after the lessons as their month loads (addDailyPuzzle).
const SET = typeof PUZZLES !== "undefined" ? PUZZLES : [];
const LESSON_LIST = typeof LESSONS !== "undefined" ? LESSONS : [];
const ALL_PUZZLES = SET.concat(LESSON_LIST.map(lesson => lesson.puzzle));
const FIRST_LESSON = SET.length;   // ALL_PUZZLES[FIRST_LESSON + k] is lesson k
const SEEN_KEY = "purrjury-tutorial-seen";   // in localStorage once the tutorial has been opened

// progress for every puzzle, so you can switch back and forth without losing it
const states = ALL_PUZZLES.map(freshState);
const ids = [];   // ids[i]: the id a daily puzzle is saved under ("daily-2026-11-13-3x3"), see puzzleId

// Feedback set and daily: progress is kept in localStorage, so a reload (or a phone dropping the tab
// after you switch apps) doesn't lose your marks, your time or which puzzles you've rated.
// Each puzzle is saved under its own id, so a changed puzzle list can't mix them up.
// The daily's saved puzzles are also its history: the streak, past days and your times all come from them.
const SAVE_KEY = FEEDBACK ? "purrjury-progress-feedback" : DAILY_MODE ? "purrjury-progress-daily" : null;
const SAVED_FIELDS = ["marks", "used", "notes", "tags", "checks", "wrongChecks", "hints", "seconds", "solved",
  "revealed", "tour", "moves", "markedAt", "cardOpen", "sent", "hard", "fun", "comment", "firstMarkAt", "playedOn"];

function puzzleId(i) {
  if (ids[i]) return ids[i];
  return i >= FIRST_LESSON ? `lesson-${i - FIRST_LESSON}` : `${sizeOf(ALL_PUZZLES[i])}-${ALL_PUZZLES[i].seed}`;
}

// everything saved so far. On the daily page that's more than what's loaded (other months), so saving adds to it
function savedProgress() {
  if (!SAVE_KEY) return {};
  try { return JSON.parse(localStorage.getItem(SAVE_KEY)) || {}; } catch { return {}; }
}

function saveProgress() {
  if (!SAVE_KEY) return;
  const saved = savedProgress();
  states.forEach((s, i) => { saved[puzzleId(i)] = Object.fromEntries(SAVED_FIELDS.map(f => [f, s[f]])); });
  try { localStorage.setItem(SAVE_KEY, JSON.stringify(saved)); } catch {}   // storage can be blocked: then nothing is kept
}

// put puzzle i's saved progress back into its state
function loadState(i, saved) {
  const s = states[i];
  const old = saved[puzzleId(i)];
  if (!old || old.marks?.length !== s.marks.length) return;   // nothing saved, or it doesn't fit this puzzle
  for (const f of SAVED_FIELDS) if (f in old) s[f] = old[f];
}

function loadProgress() {
  const saved = savedProgress();
  states.forEach((_, i) => loadState(i, saved));
}

loadProgress();

let list = [];               // indexes into PUZZLES of the size and level picked in the menu
let current = 0;             // position in list
let chosenSize = null;       // e.g. "3x3"
let highlight = null;        // index of the cat whose connections are shown, or null
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
const home = document.getElementById("home");
const prevArrow = document.getElementById("prev");
const nextArrow = document.getElementById("next");
const past = document.getElementById("past");


function puzzle() { return ALL_PUZZLES[list[current]]; }
function state() { return states[list[current]]; }
// the lesson being played, or null in a normal puzzle (daily puzzles come after the lessons)
function lesson() {
  const k = list[current] - FIRST_LESSON;
  return k >= 0 && k < LESSON_LIST.length ? LESSON_LIST[k] : null;
}
function sizeOf(p) { return `${p.rows}x${p.cols}`; }
function levelOf(p) { return p.level || "unrated"; }


// --- Menu ---

function showMenu() {
  clearConnections();
  clearHint();
  editing = null;
  game.hidden = true;
  if (DAILY_MODE) return goHome();
  menu.hidden = false;
  ratingBox.hidden = !general.open;   // a puzzle's rating card belongs to the game, not the menu
  document.body.classList.remove("playing");
  renderMenu();
}


function renderMenu() {
  // every size that has puzzles, in the order they appear
  const sizes = [...new Set(SET.map(sizeOf))];
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
    const indexes = SET.map((p, i) => i).filter(i => sizeOf(SET[i]) === chosenSize && levelOf(SET[i]) === level);
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
    button.addEventListener("click", () => FEEDBACK ? start(SET.map((_, i) => i), indexes[0]) : start(indexes));
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
  home.hidden = true;
  past.hidden = true;
  game.hidden = false;
  general.open = false;   // the menu's feedback card closes when you start playing
  document.body.classList.add("playing");   // phones hide the title while playing, so the grid gets the screen
  message.textContent = "";
  render();
}


// the "How to play" lessons (the daily page goes there by its address, #how-to-play)
function startTutorial() {
  if (DAILY_MODE) return goTo("how-to-play");
  openTutorial();
}

// play the lessons, from the first one you haven't finished
function openTutorial() {
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
  button.textContent = !last ? "Next lesson →" : DAILY_MODE ? "On to today's puzzles →" : "Back to the menu";
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
    : DAILY_MODE ? `${dayLabel(dayOf[list[current]])} · ${sizeOf(p)}`   // the daily never shows a level
    : `${level[0].toUpperCase() + level.slice(1)} ${sizeOf(p)} · ${current + 1} / ${list.length}`;
  renderLesson();
  // the arrows: none on a daily puzzle (home has a tile for each), and no way back in the lessons
  prevArrow.hidden = lesson() !== null || dayOf[list[current]] !== undefined;
  nextArrow.hidden = lesson() === null && dayOf[list[current]] !== undefined;
  info.title = `seed ${p.seed}`;   // handy when someone reports a puzzle
  grid.dataset.cols = p.cols;   // lets the CSS shrink the clue text on narrow 4x4 cards
  grid.dataset.rows = p.rows;   // and give the lessons' one-row grids taller cards
  grid.style.setProperty("--cols", p.cols);
  grid.style.setProperty("--rows", p.rows);
  // on a computer the cards share the whole grid area (the CSS divides it into this many slots)
  grid.style.setProperty("--slots", Math.max(p.rows, p.cols));
  grid.innerHTML = "";
  grid.classList.toggle("connecting", highlight !== null);   // the CSS fades the cats that aren't involved

  // one card per cat
  p.cats.forEach((cat, i) => {
    const card = document.createElement("div");
    card.className = "card " + s.marks[i];
    card.style.setProperty("--coat", COAT_BAND[cat.color] || "#bbb");
    if (LIGHT_COATS.has(cat.color)) card.classList.add("light-coat");
    if (editing === i) card.classList.add("editing");
    // the bottom row's notes box opens upward on a computer, or Done would be below the screen
    if (editing === i && cat.row === p.rows - 1) card.classList.add("opens-up");
    if (i === p.given) card.classList.add("given");
    if (s.used[i]) card.classList.add("used");
    if (s.revealed) card.classList.add(p.liars[i] ? "answer-liar" : "answer-honest");

    // connections: the chosen cat, and either the cats that talk about it or the cats it talks about
    if (highlight !== null) {
      if (i === highlight) card.classList.add("focus");
      else if (cat.mentions.includes(highlight)) card.classList.add("talked-by");
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
    // right click: the cats that talk about it
    card.addEventListener("contextmenu", event => {
      event.preventDefault();   // no browser menu
      showConnections(i);
    });
    // long-press: the card sinks while you hold it, then the cats that talk about it
    card.addEventListener("touchstart", () => {
      card.classList.add("pressing");
      pressTimer = setTimeout(() => {
        longPressed = true;
        window.getSelection()?.removeAllRanges();   // in case the browser started selecting anyway
        navigator.vibrate?.(20);                    // a tiny buzz so you feel it worked (Android)
        showConnections(i);
      }, 500);
    }, { passive: true });
    const stopPress = () => { clearTimeout(pressTimer); card.classList.remove("pressing"); };
    card.addEventListener("touchend", stopPress);
    card.addEventListener("touchmove", stopPress);
    card.addEventListener("touchcancel", stopPress);
    grid.append(card);
  });

  fitText();
  // daily: the address follows the puzzle (switching to the 4x4 replaces it, so Back still goes home)
  if (dayOf[list[current]] && !game.hidden) {
    const address = `#${dayOf[list[current]]}/${sizeOf(p)}`;
    if (location.hash !== address) history.replaceState(history.state, "", address);
  }
  timer.textContent = formatTime(s.seconds);
  updateNudge();
  renderRating();
}


// Feedback set, puzzles with no cat shown from the start: reading every clue to find a way in
// is a lot, so a line points at Hint until your first mark, and after NUDGE_SECONDS Hint pulses too.
// Gone once you've marked a cat or used Hint.
const NUDGE_SECONDS = 30;

function updateNudge() {
  if (MODE === "practice") return;
  const p = puzzle();
  const s = state();
  const nudge = !lesson() && p.given == null && s.moves === 0 && s.hints === 0
    && !s.solved && !s.revealed && !s.cardOpen && !s.sent;
  const line = legend.querySelector(".tag-nudge");
  if (nudge && legend.children.length === 0) {   // only when no hint or connections label is showing
    showHintLabel("Not sure where to start? Try Hint");
    legend.firstChild.classList.add("tag-nudge");
  } else if (!nudge && line) {
    legend.innerHTML = "";
  }
  // the lessons have their own guide, which points at Hint itself in lesson 4
  if (!lesson()) hintButton.classList.toggle("point", nudge && s.seconds >= NUDGE_SECONDS);
}


// --- Daily ---
// export.py --daily makes one 3x3 and one 4x4 per date, a file per month (daily/2026-11.js sets DAILY["2026-11"]).
// days.js says which days exist (DAILY_FIRST to DAILY_LAST). The day flips at the player's own midnight.

const DAILY_SIZES = ["3x3", "4x4"];
const dayOf = {};          // dayOf[i]: the date of daily puzzle i ("2026-11-13")
const dayIndexes = {};     // dayIndexes["2026-11-13"]: [3x3 index, 4x4 index] into ALL_PUZZLES
let homeDay = null;        // the day the home screen shows, to notice midnight
let pastMonth = null;      // the month past days shows ("2026-11")
let pastPicked = null;     // the day tapped in past days
let copied = false;        // the Share button says "Copied!" for a moment

function dateKey(date) {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
}
function todayKey() { return dateKey(new Date()); }
// "2026-11-13" -> a Date at local noon (noon, so a clock change can't push it into the day before)
function parseDay(day) { const [y, m, d] = day.split("-").map(Number); return new Date(y, m - 1, d, 12); }
function addDays(day, n) { const date = parseDay(day); date.setDate(date.getDate() + n); return dateKey(date); }
function dayLabel(day) { return parseDay(day).toLocaleDateString("en-GB", { weekday: "short", day: "numeric", month: "short" }); }
function dailyExists(day) {
  return typeof DAILY_FIRST !== "undefined" && day >= DAILY_FIRST && day <= DAILY_LAST && day <= todayKey();
}

// load a month's file (if it isn't loaded yet), then call back. A missing file just leaves the month empty.
function loadMonth(month, callback) {
  if (typeof DAILY === "undefined" || DAILY[month]) return callback();
  const script = document.createElement("script");
  script.src = `daily/${month}.js?v=${typeof VERSION !== "undefined" ? VERSION : Date.now()}`;
  script.onload = script.onerror = () => callback();
  document.head.append(script);
}

// a day's two puzzles as indexes into ALL_PUZZLES, added on first use (with their saved progress), or null
function dayPuzzles(day) {
  if (dayIndexes[day]) return dayIndexes[day];
  const puzzles = typeof DAILY !== "undefined" && DAILY[day.slice(0, 7)]?.[day];
  if (!puzzles) return null;
  const saved = savedProgress();
  dayIndexes[day] = puzzles.map(p => {
    const i = ALL_PUZZLES.push(p) - 1;
    states.push(freshState(p));
    ids[i] = `daily-${day}-${sizeOf(p)}`;
    dayOf[i] = day;
    loadState(i, saved);
    return i;
  });
  return dayIndexes[day];
}

// what you did on a day's puzzle of a size, from the loaded state or else from what's saved (other months)
function dailyRecord(day, size, saved) {
  const i = dayIndexes[day]?.[DAILY_SIZES.indexOf(size)];
  return i !== undefined ? states[i] : saved[`daily-${day}-${size}`] ?? null;
}

// days in a row you played on the day itself, up to today (or up to yesterday, while today isn't played yet).
// Anything counts: a mark or a hint is enough.
function streak() {
  const saved = savedProgress();
  const playedOnDay = day => DAILY_SIZES.some(size => dailyRecord(day, size, saved)?.playedOn === day);
  let day = playedOnDay(todayKey()) ? todayKey() : addDays(todayKey(), -1);
  let count = 0;
  while (playedOnDay(day)) { count++; day = addDays(day, -1); }
  return count;
}

// play a day: its 3x3 first, or `size` if given
function playDay(day, size) {
  loadMonth(day.slice(0, 7), () => {
    const indexes = dayPuzzles(day);
    if (!indexes) return;
    start(indexes, size ? indexes[DAILY_SIZES.indexOf(size)] : undefined);
  });
}


// Every daily screen has its own address after the #, so the browser's Back button goes back a screen
// instead of leaving the site: none for home, #how-to-play, #past/2026-11 and #2026-11-13/3x3.
// (A # address because GitHub Pages only serves files that exist: reloading /2026-11-13/3x3 would be a 404.)
// history.state.depth counts the screens since home, so Home steps back to it instead of piling up history.

function goTo(address, replace = false) {
  const depth = address ? (history.state?.depth ?? 0) + (replace ? 0 : 1) : 0;
  const url = address ? "#" + address : location.pathname + location.search;
  if (replace) history.replaceState({ depth }, "", url);
  else history.pushState({ depth }, "", url);
  route();
}

function goHome() {
  const depth = history.state?.depth ?? 0;
  if (depth > 0) history.go(-depth);   // back to home's own entry; popstate then calls route
  else goTo("", true);
}

// show the screen the address asks for
function route() {
  leaveScreen();
  const address = decodeURIComponent(location.hash.slice(1));
  const puzzleAddress = address.match(/^(\d{4}-\d{2}-\d{2})\/(\d+x\d+)$/);
  if (address === "how-to-play") return openTutorial();
  if (address.startsWith("past")) {
    const month = /^past\/\d{4}-\d{2}$/.test(address) ? address.slice(5) : todayKey().slice(0, 7);
    return loadMonth(month, () => showPast(month));
  }
  if (puzzleAddress && dailyExists(puzzleAddress[1])) return playDay(puzzleAddress[1], puzzleAddress[2]);
  showHome();
}

// tidy up the screen you're leaving: a solved puzzle's card sends its time, hints and notes close
function leaveScreen() {
  if (!game.hidden && dayOf[list[current]] && state().cardOpen) {
    sendDaily(list[current]);
    state().cardOpen = false;
  }
  highlight = null;
  clearTimeout(highlightTimer);
  clearHint();
  legend.innerHTML = "";
  editing = null;
  message.textContent = "";
}


// the home screen: the date and your streak, a tile per puzzle, and the countdown to the next ones
function showHome() {
  game.hidden = true;
  menu.hidden = true;
  past.hidden = true;
  home.hidden = false;
  ratingBox.hidden = true;
  document.body.classList.remove("playing");
  renderHome();
}

function renderHome() {
  const today = todayKey();
  homeDay = today;
  const days = streak();
  document.getElementById("home-date").textContent = dayLabel(today) + (days ? ` · 🔥 ${days} day${days === 1 ? "" : "s"} in a row` : "");
  const tiles = document.getElementById("tiles");
  tiles.innerHTML = "";
  const indexes = dailyExists(today) ? dayPuzzles(today) : null;
  if (!indexes) {
    tiles.textContent = "No puzzles today. Come back soon!";
  } else {
    DAILY_SIZES.forEach((size, k) => tiles.append(puzzleTile(`Today's ${size}`, states[indexes[k]], () => goTo(`${today}/${size}`))));
  }
  updateCountdown();
}

// one tile: its name, and solved (with the time), going (time so far) or not started
function puzzleTile(title, s, onClick) {
  const tile = document.createElement("button");
  tile.className = "tile" + (s.solved ? " done" : "");
  const name = document.createElement("b");
  name.textContent = title;
  const time = document.createElement("span");
  time.className = "tile-time";
  time.textContent = s.solved ? `✓ ${formatTime(s.seconds)}` : s.seconds ? `${formatTime(s.seconds)} so far` : "";
  const status = document.createElement("span");
  status.className = "tile-status";
  status.textContent = s.solved ? (s.hints ? `Solved · ${s.hints} hint${s.hints === 1 ? "" : "s"}` : "Solved") : s.moves || s.hints ? "Continue" : "Play";
  tile.append(name, time, status);
  tile.addEventListener("click", onClick);
  return tile;
}

// "New puzzles in 10h 48m". Runs every second while home is up (see the timer at the bottom).
// When midnight comes the home screen shows the new day.
function updateCountdown() {
  if (todayKey() !== homeDay) return renderHome();
  const midnight = parseDay(addDays(todayKey(), 1));
  midnight.setHours(0, 0, 0, 0);
  const minutes = Math.ceil((midnight - new Date()) / 60000);
  const text = minutes >= 60 ? `${Math.floor(minutes / 60)}h ${minutes % 60}m` : `${minutes}m`;
  document.getElementById("countdown").textContent = `New puzzles in ${text}`;
}


// the card once a daily puzzle is solved: time, streak, two rows of paws, Share and on to the next one.
// It goes to the sheet once both paws are picked, or with no paws when you leave the card (leaveCard).
function renderDailyCard() {
  stopButton.hidden = true;
  const s = state();
  ratingBox.hidden = !s.cardOpen;
  if (!s.cardOpen) return;
  ratingBox.innerHTML = "";
  const i = list[current];
  const day = dayOf[i];

  const title = document.createElement("h3");
  title.textContent = `Solved in ${formatTime(s.seconds)}! 🐾`;
  const line = document.createElement("p");
  line.className = "rating-help";
  const days = streak();
  line.textContent = `${s.hints} hint${s.hints === 1 ? "" : "s"}` + (days ? ` · 🔥 ${days} day${days === 1 ? "" : "s"} in a row` : "");
  ratingBox.append(title, line);

  if (!s.sent) {
    const help = document.createElement("p");
    help.className = "rating-help";
    help.textContent = "How was it? More paws = harder, or more fun.";
    ratingBox.append(help, pawRow("Hard", "hard"), pawRow("Fun", "fun"));
  }
  const status = document.createElement("p");
  status.className = s.error ? "rating-error" : "rating-help";
  status.textContent = s.error || (s.sending ? "Sending…" : s.sent && s.hard ? "Thanks for rating! 🐾" : "");
  if (status.textContent) ratingBox.append(status);

  const buttons = document.createElement("div");
  buttons.className = "rating-buttons";
  buttons.append(ratingButton(copied ? "Copied!" : "Share", () => share(day)));
  buttons.append(ratingButton("See the board", () => leaveCard(render)));
  // on to the other puzzle of the day if it isn't solved yet, else back home
  const other = dayIndexes[day].find(j => j !== i && !states[j].solved);
  if (other !== undefined) {
    buttons.append(ratingButton(`Play the ${sizeOf(ALL_PUZZLES[other])} →`, () => leaveCard(() => { current = list.indexOf(other); render(); }), true));
  } else {
    buttons.append(ratingButton("Home", () => leaveCard(goHome), true));
  }
  ratingBox.append(buttons);

  if (s.hard && s.fun && !s.sent && !s.sending) sendDaily(i);   // both paws picked: send right away
}

// close the card (sending the time if the paws weren't picked), then go on
function leaveCard(then) {
  const i = list[current];
  if (!states[i].sent && !states[i].sending) sendDaily(i);
  states[i].cardOpen = false;
  message.textContent = "";
  then();
}

// one sheet row for a solved daily puzzle: the time, hints and checks, and the paws if picked
function sendDaily(i) {
  const s = states[i];
  if (s.sent || s.sending || !s.solved) return;
  const msg = { ...sheetRow(i, "solved"), hard: s.hard || "", fun: s.fun || "" };
  post(msg, s, () => { if (!game.hidden && list[current] === i) renderRating(); else saveProgress(); });
}

// copy the day's result, to paste in a group chat
function share(day) {
  const saved = savedProgress();
  const parts = DAILY_SIZES.map(size => {
    const r = dailyRecord(day, size, saved);
    return `${size} ${r?.solved ? formatTime(r.seconds) : "–"}`;
  });
  const hints = DAILY_SIZES.reduce((sum, size) => sum + (dailyRecord(day, size, saved)?.hints ?? 0), 0);
  const days = day === todayKey() ? streak() : 0;
  const text = [`Purrjury ${dayLabel(day)} 🐾`, parts.join(" · "),
    `${hints} hint${hints === 1 ? "" : "s"}` + (days ? ` · 🔥 ${days}` : ""), location.href.split(/[?#]/)[0]].join("\n");
  const done = () => { copied = true; renderRating(); setTimeout(() => { copied = false; if (!game.hidden) renderRating(); }, 1500); };
  // phones get their share menu, computers copy it
  if (navigator.share && matchMedia("(pointer: coarse)").matches) navigator.share({ text }).catch(() => {});
  else navigator.clipboard?.writeText(text).then(done, () => {});
}


// past days: a month calendar from the first day to today. Green: both solved, yellow: played.
function showPast(month) {
  home.hidden = true;
  game.hidden = true;
  past.hidden = false;
  pastMonth = month ?? pastMonth ?? todayKey().slice(0, 7);
  renderPast();
}

function renderPast() {
  const saved = savedProgress();
  const first = parseDay(pastMonth + "-01");
  document.getElementById("past-month").textContent = first.toLocaleDateString("en-GB", { month: "long", year: "numeric" });
  const firstMonth = typeof DAILY_FIRST !== "undefined" ? DAILY_FIRST.slice(0, 7) : pastMonth;
  document.getElementById("past-prev").disabled = pastMonth <= firstMonth;
  document.getElementById("past-next").disabled = pastMonth >= todayKey().slice(0, 7);

  const calendar = document.getElementById("calendar");
  calendar.innerHTML = "";
  for (const name of ["M", "T", "W", "T", "F", "S", "S"]) {
    const head = document.createElement("span");
    head.className = "weekday";
    head.textContent = name;
    calendar.append(head);
  }
  // empty slots before the 1st (Monday first)
  for (let k = 0; k < (first.getDay() + 6) % 7; k++) calendar.append(document.createElement("span"));
  for (const date = new Date(first); date.getMonth() === first.getMonth(); date.setDate(date.getDate() + 1)) {
    const day = dateKey(date);
    const cell = document.createElement("button");
    cell.className = "day";
    cell.textContent = date.getDate();
    const records = DAILY_SIZES.map(size => dailyRecord(day, size, saved));
    if (records.every(r => r?.solved)) cell.classList.add("both");
    else if (records.some(r => r?.solved || r?.moves || r?.hints)) cell.classList.add("some");
    if (day === todayKey()) cell.classList.add("today");
    if (day === pastPicked) cell.classList.add("picked");
    if (dailyExists(day)) cell.addEventListener("click", () => { pastPicked = day; renderPast(); });
    else cell.disabled = true;
    calendar.append(cell);
  }

  // the tapped day: your times, and its two puzzles to play
  const box = document.getElementById("past-day");
  box.innerHTML = "";
  if (!pastPicked || pastPicked.slice(0, 7) !== pastMonth) return;
  const title = document.createElement("b");
  title.textContent = dayLabel(pastPicked);
  const tiles = document.createElement("div");
  tiles.className = "past-tiles";
  DAILY_SIZES.forEach(size => {
    const r = dailyRecord(pastPicked, size, saved) ?? { solved: false, seconds: 0, hints: 0, moves: 0 };
    tiles.append(puzzleTile(size, r, () => goTo(`${pastPicked}/${size}`)));
  });
  box.append(title, tiles);
}


// --- Feedback set: the rating card ---

const ratingBox = document.getElementById("rating");
const stopButton = document.getElementById("stop");

// the Stop and rate button, and the card (open after Stop and rate, or once the puzzle is solved).
// The tutorial has no Stop and rate, just one card at the end of the last lesson.
function renderRating() {
  saveProgress();   // render() ends here, and so do paw taps and sending: a good moment to save
  if (DAILY_MODE && !lesson()) return renderDailyCard();
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
  if (!experience()) ratingBox.append(experienceRow());   // asked once, on your first rating

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


// How often do you play logic puzzles? Asked once and kept in localStorage: a "5 paws hard"
// from someone who never plays puzzles means something else than from a puzzle fan.
const EXPERIENCE_KEY = "purrjury-experience";
const EXPERIENCES = ["never", "sometimes", "a lot"];
let experienceAnswer = null;
try { experienceAnswer = localStorage.getItem(EXPERIENCE_KEY); } catch {}

function experience() { return experienceAnswer; }

function experienceRow() {
  const box = document.createElement("div");
  box.className = "experience";
  const question = document.createElement("p");
  question.textContent = "How often do you play logic puzzles?";
  const choices = document.createElement("div");
  choices.className = "rating-buttons";
  EXPERIENCES.forEach(answer => {
    choices.append(ratingButton(answer[0].toUpperCase() + answer.slice(1), () => {
      experienceAnswer = answer;
      try { localStorage.setItem(EXPERIENCE_KEY, answer); } catch {}
      state().error = "";
      renderRating();
    }));
  });
  box.append(question, choices);
  return box;
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
  const s = state();
  if (s.sending) return;
  const tutorial = lesson() !== null;
  if (!s.hard || !s.fun) {
    s.error = `Pick some paws for ${tutorial ? "clear" : "hard"} and for fun first.`;
    return renderRating();
  }
  if (!experience()) {
    s.error = "Tap how often you play logic puzzles too.";
    return renderRating();
  }
  const result = tutorial ? "finished" : s.solved ? "solved" : s.revealed ? "revealed" : "skipped";
  const msg = {
    ...sheetRow(list[current], result),
    hard: s.hard,   // in the tutorial: how clear it was
    fun: s.fun,
    comment: s.comment.trim(),
  };
  await post(msg, s, () => { if (state() === s && !game.hidden) renderRating(); });   // only if you're still on this puzzle
}


// One sheet row for puzzle i (an index into ALL_PUZZLES), without the rating. A lesson stands for
// the whole tutorial: one row with its time and hints added up over all lessons.
// The last column, extra, holds small details as JSON text, so new ones never need a new column.
function sheetRow(i, result) {
  const p = ALL_PUZZLES[i];
  const s = states[i];
  const base = { player: playerId(), result, hard: "", fun: "", comment: "" };
  if (i >= FIRST_LESSON && i < FIRST_LESSON + LESSON_LIST.length) {
    const lessonStates = LESSON_LIST.map((_, k) => states[FIRST_LESSON + k]);
    const total = field => lessonStates.reduce((sum, ls) => sum + ls[field], 0);
    return { ...base, puzzle: "tutorial", seed: "", seconds: total("seconds"), hints: total("hints"), checks: 0, mistakes: 0,
             extra: extraInfo({ lessonsDone: lessonStates.filter(ls => ls.solved).length }) };
  }
  const marked = s.marks.filter((mark, j) => mark !== "unknown" && j !== p.given).length;
  const toMark = p.cats.length - (p.given == null ? 0 : 1);
  // daily rows say the day too ("daily 2026-11-13 3x3 hard"): the level is hidden from players, not from the sheet
  const name = dayOf[i] ? `daily ${dayOf[i]} ${sizeOf(p)} ${levelOf(p)}` : `${sizeOf(p)} ${levelOf(p)}`;
  return { ...base, puzzle: name, seed: p.seed, seconds: s.seconds, hints: s.hints,
           checks: s.checks, mistakes: s.wrongChecks,
           extra: extraInfo({ firstMark: s.firstMarkAt, marked: `${marked}/${toMark}` }) };
}


// the extra column: phone or computer, how often they play logic puzzles, where they came from, and what the row adds
function extraInfo(fields = {}) {
  // a narrow screen is a phone; a wider one played with a finger (not a mouse) is a tablet
  const device = matchMedia("(max-width: 600px)").matches ? "phone" : matchMedia("(pointer: coarse)").matches ? "tablet" : "computer";
  return JSON.stringify({ device, experience: experience() || null, from: cameFrom, ...fields });
}


// send one message to the sheet. `holder` keeps sending / sent / error for its card, `redraw` shows them.
async function post(msg, holder, redraw) {
  holder.sending = true;
  holder.error = "";
  redraw();
  try {
    // keepalive: the message still goes out if the tab is closed right after (the daily sends when you leave)
    const response = await fetch(FEEDBACK_URL, { method: "POST", body: JSON.stringify(msg), keepalive: true });
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
    result: "general", hard: "", fun: "", comment: general.comment.trim(), extra: extraInfo(),
  };
  await post(msg, general, () => { if (!menu.hidden) renderGeneral(); });   // only while the menu is still up
}


// "Found two answers?" under the game: sends the open puzzle and your marks to the sheet.
// The marks go in the comment column, one letter per cat in grid order: H honest, L liar, ? unknown.
const report = { sending: false, sent: false, error: "" };
const reportStatus = document.getElementById("report-status");

function reportPuzzle() {
  if (report.sending) return;
  if (game.hidden || lesson()) {
    reportStatus.textContent = "Open the puzzle first, with your marks on it.";
    return;
  }
  const i = list[current];
  const marks = states[i].marks.map(mark => mark === "honest" ? "H" : mark === "liar" ? "L" : "?").join("");
  const msg = { ...sheetRow(i, "report"), comment: `marks ${marks}` };
  post(msg, report, () => {
    reportStatus.textContent = report.error || (report.sending ? "Sending…" : report.sent ? "Sent, thanks! I'll check it." : "");
  });
}

document.getElementById("report").addEventListener("click", reportPuzzle);


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
  // a phone's keyboard opening is a resize too. Redrawing would replace the comment box and close the keyboard
  if (ratingBox.contains(document.activeElement)) return;
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
  if (s.firstMarkAt === null) s.firstMarkAt = s.seconds;
  if (!s.playedOn) s.playedOn = todayKey();
  message.textContent = "";
  clearHint();   // the hint was for the old marks
  checkLesson();
  if (FEEDBACK || DAILY_MODE) checkFull();
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


// the cats that talk about cat i (right click or long-press it). The other way round isn't shown:
// a clue's own text already says which cats it talks about.
function showConnections(i) {
  const cat = puzzle().cats[i];
  clearHint();
  highlight = i;
  // small label so you know what the outlines mean
  legend.innerHTML = "";
  const tag = document.createElement("span");
  tag.className = "tag tag-by";
  tag.textContent = `cats that talk about ${cat.name}`;
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
  if (!s.playedOn) s.playedOn = todayKey();
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
  if (DAILY_MODE && !home.hidden) updateCountdown();
  if (game.hidden) return;
  const s = state();
  if (!s.solved && !s.revealed && !s.cardOpen && !s.sent) {
    s.seconds++;
    timer.textContent = formatTime(s.seconds);
    updateNudge();   // Hint starts pulsing at NUDGE_SECONDS
  }
}, 1000);

prevArrow.addEventListener("click", () => go(-1));
nextArrow.addEventListener("click", () => go(1));
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

// the daily: like the feedback set, a puzzle is solved once every mark is right, so no Check, Reset or Reveal
if (DAILY_MODE) {
  for (const id of ["check", "reset", "reveal"]) document.getElementById(id).hidden = true;
  document.getElementById("menu-button").textContent = "Home";
  document.getElementById("home-how").addEventListener("click", startTutorial);
  document.getElementById("past-button").addEventListener("click", () => goTo(`past/${todayKey().slice(0, 7)}`));
  document.getElementById("past-back").addEventListener("click", goHome);
  // another month replaces the address, so Back still goes straight home
  const monthStep = step => {
    const date = parseDay(pastMonth + "-01");
    date.setMonth(date.getMonth() + step);
    goTo(`past/${dateKey(date).slice(0, 7)}`, true);
  };
  document.getElementById("past-prev").addEventListener("click", () => monthStep(-1));
  document.getElementById("past-next").addEventListener("click", () => monthStep(1));
  // leaving the page with a solved puzzle's card still open: send its time anyway
  document.addEventListener("visibilitychange", () => {
    if (document.hidden && !game.hidden && dayOf[list[current]] && state().cardOpen) sendDaily(list[current]);
  });
}
document.addEventListener("keydown", event => {
  if (game.hidden) return;
  // while typing a note, the arrow keys move the cursor, and Escape closes the note
  if (event.target.tagName === "TEXTAREA") {
    if (event.key === "Escape") { editing = null; render(); }
    return;
  }
  if (event.key === "Escape" && editing !== null) { editing = null; render(); return; }
  // the arrow keys only work where the arrow buttons show
  if (event.key === "ArrowLeft" && !prevArrow.hidden) go(-1);
  if (event.key === "ArrowRight" && !nextArrow.hidden) go(1);
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
if (DAILY_MODE) {
  window.addEventListener("popstate", route);   // the back and forward buttons
  if (!seenTutorial && LESSON_LIST.length && !location.hash) startTutorial();   // home stays one Back away
  else route();
} else if (!seenTutorial && LESSON_LIST.length) startTutorial();
else showMenu();
