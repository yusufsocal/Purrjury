// Purrjury web prototype. PUZZLES comes from puzzles.js (made by export.py).

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
  };
}

// progress for every puzzle, so you can switch back and forth without losing it
const states = PUZZLES.map(freshState);

let list = [];               // indexes into PUZZLES of the size and level picked in the menu
let current = 0;             // position in list
let chosenSize = null;       // e.g. "3x3"
let highlight = null;        // index of the cat whose connections are shown, or null
let highlightMode = "by";    // "by": cats that talk about it, "about": cats it talks about
let lastRightClick = { index: null, time: 0 };   // to notice a double right click
let highlightTimer = null;   // clears the highlight after a few seconds
let hintCards = new Set();   // cards outlined by the last hint
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


function puzzle() { return PUZZLES[list[current]]; }
function state() { return states[list[current]]; }
function sizeOf(p) { return `${p.rows}x${p.cols}`; }
function levelOf(p) { return p.level || "unrated"; }


// --- Menu ---

function showMenu() {
  clearConnections();
  clearHint();
  editing = null;
  game.hidden = true;
  menu.hidden = false;
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
    button.querySelector(".level-count").textContent = `${solved} / ${indexes.length} solved`;
    button.addEventListener("click", () => start(indexes));
    levelButtons.append(button);
  });
}


// start playing a list of puzzles, at the first one you haven't solved yet
function start(indexes) {
  list = indexes;
  const firstUnsolved = list.findIndex(i => !states[i].solved);
  current = firstUnsolved === -1 ? 0 : firstUnsolved;
  menu.hidden = true;
  game.hidden = false;
  document.body.classList.add("playing");   // phones hide the title while playing, so the grid gets the screen
  message.textContent = "";
  render();
}


// --- Game ---


function render() {
  const p = puzzle();
  const s = state();

  const level = levelOf(p);
  info.textContent = `${level[0].toUpperCase() + level.slice(1)} ${sizeOf(p)} · ${current + 1} / ${list.length}`;
  info.title = `seed ${p.seed}`;   // handy when someone reports a puzzle
  grid.dataset.cols = p.cols;   // lets the CSS shrink the clue text on narrow 4x4 cards
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
    if (hintCards.has(i)) card.classList.add("hint");

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

window.addEventListener("resize", () => { if (!game.hidden) fitText(); });


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
  field.placeholder = "Note, e.g. honest if Hazel is";
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
  const next = (MARKS.indexOf(s.marks[i]) + 1) % MARKS.length;
  s.marks[i] = MARKS[next];
  message.textContent = "";
  clearHint();   // the hint was for the old marks
  render();
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
  highlight = null;
  editing = null;
  hintCards.clear();
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


// outline the clues that can find a new cat right now: single clues first, pairs if none work alone
function hint() {
  const p = puzzle();
  const s = state();
  if (s.solved || s.revealed) return;
  clearConnections();

  // only marks that are right count as known, so a wrong mark can't send the hint the wrong way
  const known = new Map();
  let wrong = 0;
  s.marks.forEach((mark, i) => {
    if (mark === "unknown") return;
    if ((mark === "liar") === p.liars[i]) known.set(i, p.liars[i]);
    else wrong++;
  });

  const clues = p.cats.map((cat, i) => ({ i, clue: cat.clue })).filter(c => c.clue);
  let useful = clues.filter(c => forcedCats([c.clue], known).length > 0).map(c => c.i);
  let label = "these clues can find a cat right now";

  if (useful.length === 0) {
    const pairs = new Set();
    for (let a = 0; a < clues.length; a++) {
      for (let b = a + 1; b < clues.length; b++) {
        if (forcedCats([clues[a].clue, clues[b].clue], known).length > 0) pairs.add(clues[a].i).add(clues[b].i);
      }
    }
    useful = [...pairs];
    label = "combine two of these clues to find a cat";
  }
  if (wrong > 0) label += ` (${wrong} of your marks ${wrong === 1 ? "is" : "are"} wrong)`;

  s.hints++;
  hintCards = new Set(useful);
  legend.innerHTML = "";
  const tag = document.createElement("span");
  tag.className = "tag tag-hint";
  tag.textContent = useful.length ? label : "no hint found";
  legend.append(tag);
  render();
}


function clearHint() {
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
setInterval(() => {
  if (game.hidden) return;
  const s = state();
  if (!s.solved && !s.revealed) {
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

showMenu();
