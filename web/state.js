// Purrjury: what's shared by every other file. Loaded first.
// Which page this is (daily, practice or feedback), the puzzle list (PUZZLES from puzzles.js, LESSONS from tutorial.js,
// daily puzzles added later), saving and loading progress, the page's elements, and small helpers like puzzle() and state().
// The files are plain scripts that share everything, like one big file: index.html loads them in order
// (state, lessons, board, hints, daily, sheet, main). Code that runs right away may only use earlier files.

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
// Kept in localStorage, so it stays with the player on a later visit without it. Goes into the "from" column.
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
// true while you type in a text box (a note, a rating comment). A redraw then would replace the box
// and close a phone's keyboard, so redraws that aren't from your own tap wait until you're done.
function typing() { return document.activeElement?.matches("textarea, input") ?? false; }
