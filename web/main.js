// Starting the page: the practice and feedback menu, starting a list of puzzles or the tutorial,
// the timer, the buttons and keys, and what the page shows first. Loaded last, since it uses every other file.


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
  replayIfFinished();
  if (DAILY_MODE) return goTo("how-to-play");
  openTutorial();
}

// The How to play button after you've finished every lesson: play them all again from scratch.
// Only the button does this, so a reload of #how-to-play keeps where you are.
// A tutorial rating you sent stays sent, so the feedback set doesn't ask for it twice.
function replayIfFinished() {
  const lessons = LESSON_LIST.map((_, k) => FIRST_LESSON + k);
  if (!lessons.length || !lessons.every(i => states[i].solved)) return;
  lessons.forEach(i => {
    const sent = states[i].sent;
    states[i] = freshState(ALL_PUZZLES[i]);
    states[i].sent = sent;
  });
  spotlitLessons.clear();   // and the guide greets each lesson again
  saveProgress();
}

// play the lessons, from the first one you haven't finished
function openTutorial() {
  try { localStorage.setItem(SEEN_KEY, "1"); } catch {}   // storage can be blocked, the tutorial still works
  start(LESSON_LIST.map((_, k) => FIRST_LESSON + k));
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
const checkButton = document.getElementById("check");
checkButton.addEventListener("click", () => FEEDBACK || DAILY_MODE ? submit() : check());
document.getElementById("reset").addEventListener("click", reset);
document.getElementById("reveal").addEventListener("click", reveal);
document.getElementById("hint").addEventListener("click", hint);
document.getElementById("menu-button").addEventListener("click", showMenu);
document.getElementById("how-to-play").addEventListener("click", startTutorial);
stopButton.addEventListener("click", stopAndRate);
// switching apps on a phone: save right away, the tab may be closed in the background
document.addEventListener("visibilitychange", () => { if (document.hidden) saveProgress(); });

// daily and feedback set: Check becomes Submit, and there's no Reset or Reveal
if (FEEDBACK || DAILY_MODE) {
  checkButton.textContent = "Submit";
  for (const id of ["reset", "reveal"]) document.getElementById(id).hidden = true;
}

// the feedback set: only Hint, Submit and Stop and rate, and a note on the menu that you can stop any time
if (FEEDBACK) {
  document.getElementById("feedback-note").hidden = false;
  document.getElementById("start-here").hidden = false;
  const generalButton = document.getElementById("general-feedback");
  generalButton.hidden = false;
  generalButton.addEventListener("click", () => { general.open = true; renderGeneral(); });
  document.body.classList.add("feedback");   // the CSS makes How to play stand out
}

// the daily: like the feedback set, Submit instead of Check, Reset and Reveal.
// A solved puzzle shows Share and Results (the solved card again) instead of Hint and Submit.
const shareButton = document.createElement("button");
const resultsButton = document.createElement("button");
if (DAILY_MODE) {
  resultsButton.textContent = "Results";
  shareButton.addEventListener("click", () => share(dayOf[list[current]]));
  resultsButton.addEventListener("click", () => { clearConnections(); state().cardOpen = true; render(); });
  document.querySelector(".controls").append(shareButton, resultsButton);
  document.getElementById("menu-button").textContent = "Home";
  document.getElementById("home-how").addEventListener("click", startTutorial);
  document.getElementById("home-share").addEventListener("click", () => share(todayKey()));
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
