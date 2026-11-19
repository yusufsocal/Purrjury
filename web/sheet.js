// Everything sent to the Google Sheet: the feedback set's rating card, the paw rows, "how often do you play",
// "Feedback on the whole game", Report this puzzle, and the player's random id.


// --- Feedback set: the rating card ---

const ratingBox = document.getElementById("rating");
const stopButton = document.getElementById("stop");

// the Stop and rate button, and the card (open after Stop and rate, or once the puzzle is solved).
// The tutorial has no Stop and rate, just one card at the end of the last lesson.
function renderRating() {
  saveProgress();   // render() ends here, and so do paw taps and sending: a good moment to save
  renderSubmitAndShare();
  ratingBox.classList.toggle("simple", DAILY_MODE && !lesson());   // the daily's card has its own simple look
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
// Every field is its own column in the sheet (the Apps Script puts them in order).
function sheetRow(i, result) {
  const p = ALL_PUZZLES[i];
  const s = states[i];
  const base = { player: playerId(), result, hard: "", fun: "", comment: "", ...playerInfo() };
  if (i >= FIRST_LESSON && i < FIRST_LESSON + LESSON_LIST.length) {
    const lessonStates = LESSON_LIST.map((_, k) => states[FIRST_LESSON + k]);
    const total = field => lessonStates.reduce((sum, ls) => sum + ls[field], 0);
    // the tutorial has no first mark; marked says how many lessons were done ("3/5 lessons")
    const done = lessonStates.filter(ls => ls.solved).length;
    return { ...base, puzzle: "tutorial", seed: "", seconds: total("seconds"), hints: total("hints"), checks: 0, mistakes: 0,
             firstMark: "", marked: `${done}/${LESSON_LIST.length} lessons` };
  }
  const marked = s.marks.filter((mark, j) => mark !== "unknown" && j !== p.given).length;
  const toMark = p.cats.length - (p.given == null ? 0 : 1);
  // daily rows say the day too ("daily 2026-11-13 3x3 hard"): the level is hidden from players, not from the sheet
  const name = dayOf[i] ? `daily ${dayOf[i]} ${sizeOf(p)} ${levelOf(p)}` : `${sizeOf(p)} ${levelOf(p)}`;
  return { ...base, puzzle: name, seed: p.seed, seconds: s.seconds, hints: s.hints,
           checks: s.checks, mistakes: s.wrongChecks,
           firstMark: s.firstMarkAt ?? "", marked: `${marked}/${toMark}` };
}


// who's playing: phone or computer, how often they play logic puzzles, and where they came from
function playerInfo() {
  // a narrow screen is a phone; a wider one played with a finger (not a mouse) is a tablet
  const device = matchMedia("(max-width: 600px)").matches ? "phone" : matchMedia("(pointer: coarse)").matches ? "tablet" : "computer";
  return { device, experience: experience() || "", from: cameFrom || "" };
}


// send one message to the sheet. `holder` keeps sending / sent / error for its card, `redraw` shows them.
// msg.sheet says which tab the row goes in: "reports" for Report this puzzle, "puzzles" for the daily,
// "feedback" for the feedback set. The Apps Script uses the feedback tab if there's no tab with that name.
async function post(msg, holder, redraw) {
  holder.sending = true;
  holder.error = "";
  redraw();
  const sheet = msg.result === "report" ? "reports" : DAILY_MODE ? "puzzles" : "feedback";
  try {
    // keepalive: the message still goes out if the tab is closed right after (the daily sends when you leave)
    const response = await fetch(FEEDBACK_URL, { method: "POST", body: JSON.stringify({ ...msg, sheet }), keepalive: true });
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
    result: "general", hard: "", fun: "", comment: general.comment.trim(), ...playerInfo(), firstMark: "", marked: "",
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
