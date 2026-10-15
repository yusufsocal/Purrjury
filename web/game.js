// Purrjury web prototype. PUZZLES comes from puzzles.js (made by export.py).

// what each cat color looks like as a little dot
const COLOR_STYLES = {
  ginger: "#e3893d",
  black: "#262626",
  white: "#f7f5f0",
  grey: "#9b9b9b",
  tabby: "repeating-linear-gradient(45deg, #9c7148 0 3px, #5e4129 3px 6px)",
  calico: "linear-gradient(90deg, #f7f5f0 33%, #e3893d 33% 66%, #262626 66%)",
  tuxedo: "linear-gradient(90deg, #262626 50%, #f7f5f0 50%)",
  siamese: "radial-gradient(circle, #eadcc3 45%, #6b4a33 46%)",
  tortoiseshell: "linear-gradient(135deg, #3b2418 40%, #c4672b 40% 60%, #3b2418 60%)",
  cream: "#f1dfb8",
  brown: "#7a5230",
  spotted: "radial-gradient(circle at 30% 30%, #262626 20%, transparent 21%), radial-gradient(circle at 70% 65%, #262626 18%, transparent 19%), #f7f5f0",
  smoky: "#5f5f6b",
  golden: "#d4a52a",
};

const MARKS = ["unknown", "honest", "liar"];   // tapping a cat goes through these in order

// progress for every puzzle, so you can switch back and forth without losing it
const states = PUZZLES.map(p => ({
  marks: p.cats.map(() => "unknown"),
  used: p.cats.map(() => false),
  checks: 0,
  wrongChecks: 0,
  seconds: 0,
  solved: false,
  revealed: false,
}));

let current = 0;
let highlight = null;        // index of the cat whose connections are shown, or null
let highlightTimer = null;   // clears the highlight after a few seconds
let pressTimer = null;       // for long-press on phones
let longPressed = false;     // true right after a long-press, so the tap after it doesn't change the mark
const HIGHLIGHT_SECONDS = 6;

const grid = document.getElementById("grid");
const info = document.getElementById("info");
const message = document.getElementById("message");
const timer = document.getElementById("timer");
const legend = document.getElementById("legend");


function puzzle() { return PUZZLES[current]; }
function state() { return states[current]; }


function render() {
  const p = puzzle();
  const s = state();

  info.textContent = `Puzzle ${current + 1} / ${PUZZLES.length} · ${p.rows}x${p.cols} · seed ${p.seed}`;
  grid.style.gridTemplateColumns = `repeat(${p.cols}, minmax(0, 1fr))`;
  grid.innerHTML = "";

  // one card per cat
  p.cats.forEach((cat, i) => {
    const card = document.createElement("div");
    card.className = "card " + s.marks[i];
    if (s.used[i]) card.classList.add("used");
    if (s.revealed) card.classList.add(p.liars[i] ? "answer-liar" : "answer-honest");

    // connections: the chosen cat, the cats it talks about, and the cats that talk about it
    if (highlight !== null) {
      const talksAbout = p.cats[highlight].mentions.includes(i);
      const talkedBy = cat.mentions.includes(highlight);
      if (i === highlight) card.classList.add("focus");
      else if (talksAbout && talkedBy) card.classList.add("talks-both");
      else if (talksAbout) card.classList.add("talks-about");
      else if (talkedBy) card.classList.add("talked-by");
      else card.classList.add("faded");
    }

    const top = document.createElement("div");
    top.className = "top";

    const swatch = document.createElement("span");
    swatch.className = "swatch";
    swatch.style.background = COLOR_STYLES[cat.color] || "#ccc";

    const name = document.createElement("span");
    name.className = "name";
    name.textContent = cat.name;

    const color = document.createElement("span");
    color.className = "color";
    color.textContent = cat.color;

    const badge = document.createElement("span");
    badge.className = "badge";
    badge.textContent = s.marks[i] === "unknown" ? "" : s.marks[i];

    top.append(swatch, name, color, badge);

    const text = document.createElement("p");
    text.className = cat.hidden ? "text gibberish" : "text";
    text.textContent = cat.text;

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

    card.append(top, text, usedToggle);

    // hidden cats only meow, after Reveal we show what they really said
    if (cat.hidden && s.revealed) {
      const secret = document.createElement("p");
      secret.className = "secret";
      secret.textContent = "Really said: " + cat.secret;
      card.append(secret);
    }
    // tap: change the mark. double click, right click or long-press: show connections
    card.addEventListener("click", event => {
      if (longPressed) { longPressed = false; return; }
      if (event.detail === 2) {
        undoMark(i);   // the first click of the double click already changed the mark
        showConnections(i);
      } else if (highlight !== null) {
        clearConnections();
      } else {
        cycleMark(i);
      }
    });
    card.addEventListener("contextmenu", event => {
      event.preventDefault();   // no browser menu
      showConnections(i);
    });
    card.addEventListener("touchstart", () => {
      pressTimer = setTimeout(() => { longPressed = true; showConnections(i); }, 500);
    }, { passive: true });
    card.addEventListener("touchend", () => clearTimeout(pressTimer));
    card.addEventListener("touchmove", () => clearTimeout(pressTimer));
    grid.append(card);
  });

  timer.textContent = formatTime(s.seconds);
}


function cycleMark(i) {
  const s = state();
  if (s.solved || s.revealed) return;
  const next = (MARKS.indexOf(s.marks[i]) + 1) % MARKS.length;
  s.marks[i] = MARKS[next];
  message.textContent = "";
  render();
}


// go one mark back (honest -> unknown, liar -> honest, unknown -> liar)
function undoMark(i) {
  const s = state();
  if (s.solved || s.revealed) return;
  const previous = (MARKS.indexOf(s.marks[i]) + MARKS.length - 1) % MARKS.length;
  s.marks[i] = MARKS[previous];
}


function showConnections(i) {
  const cat = puzzle().cats[i];
  highlight = i;
  legend.innerHTML = "";
  const parts = [
    ["about", `cats ${cat.name} talks about`],
    ["by", `cats that talk about ${cat.name}`],
    ["both", "both"],
  ];
  // small colored labels so you know what each color means
  parts.forEach(([kind, label]) => {
    const tag = document.createElement("span");
    tag.className = "tag tag-" + kind;
    tag.textContent = label;
    legend.append(tag);
  });
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
    message.textContent = `Solved in ${formatTime(s.seconds)} with ${s.wrongChecks} mistake${s.wrongChecks === 1 ? "" : "s"}! 🐾`;
  }
}


function reset() {
  const s = state();
  states[current] = {
    marks: s.marks.map(() => "unknown"),
    used: s.used.map(() => false),
    checks: 0, wrongChecks: 0, seconds: 0, solved: false, revealed: false,
  };
  message.textContent = "";
  render();
}


function reveal() {
  state().revealed = true;
  message.textContent = "The outlines show the answer: green is honest, red is a liar.";
  render();
}


function go(step) {
  highlight = null;
  legend.innerHTML = "";
  current = (current + step + PUZZLES.length) % PUZZLES.length;
  message.textContent = "";
  render();
}


function formatTime(seconds) {
  const m = Math.floor(seconds / 60);
  const s = String(seconds % 60).padStart(2, "0");
  return `${m}:${s}`;
}


// the timer only runs while the puzzle isn't finished
setInterval(() => {
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
document.addEventListener("keydown", event => {
  if (event.key === "ArrowLeft") go(-1);
  if (event.key === "ArrowRight") go(1);
  if (event.key === "Escape") clearConnections();
});

render();
