"""Generate a batch of puzzles and save them for the web version (web/puzzles.js).

The web page can't read files on its own when you open it straight from disk,
so the puzzles are saved as a small JavaScript file that sets PUZZLES.
"""
import argparse
import base64
import json
import os
import random
from datetime import date, datetime, timedelta

from purrjury.engine.path_generator import PathSettings, generate_path_puzzle
from purrjury.engine.solver import BIG_GRID, LEVELS, involved, levels_for

# Give up on a level after this many seeds, in case its settings are too hard to fill
MAX_TRIES = 200

# Trick clues ("Felix and I are the same type") only appear in puzzles of this level and up
TRICK_MIN_LEVEL = "hard"

# What each level asks of the path generator (see PathSettings). Harder levels: clues reveal fewer cats
# at once, fewer clues work at the same time (more searching) and there are fewer ways in.
# Easy shows one cat from the start. Playtesting decides these, they're just a first guess.
LEVEL_SETTINGS = {
    "easy":   PathSettings(max_cats_per_step=2, max_choices=3, openers=1, given=True),
    "medium": PathSettings(max_cats_per_step=2, max_choices=3, openers=2),
    "hard":   PathSettings(max_cats_per_step=1, max_choices=2, openers=1),
}
# A big grid (BIG_GRID cats or more) is one level up, so it gets its own steps between medium and tricky
BIG_LEVEL_SETTINGS = {
    "medium": PathSettings(max_cats_per_step=2, max_choices=3, openers=2),
    "hard":   PathSettings(max_cats_per_step=1, max_choices=3, openers=2),
    "tricky": PathSettings(max_cats_per_step=1, max_choices=2, openers=1),
}


def liar_count(n_cats):
    """Any number of liars from 1 to all but one, mostly around a third to a half of the cats."""
    return max(1, min(n_cats - 1, round(random.triangular(1, n_cats - 1, n_cats * 0.4))))


def make_puzzle(rows, cols, level, seed):
    """The puzzle a seed makes for a level: (grid, world, steps, given), or None if it didn't work out.

    The same seed always makes the same puzzle, so a saved seed can be turned back into its puzzle.
    None also when a trick clue ends up in a level below TRICK_MIN_LEVEL.
    """
    random.seed(seed)
    settings = (BIG_LEVEL_SETTINGS if rows * cols >= BIG_GRID else LEVEL_SETTINGS)[level]
    result = generate_path_puzzle(rows, cols, liar_count(rows * cols), settings)
    if result is None:
        return None
    if LEVELS.index(level) < LEVELS.index(TRICK_MIN_LEVEL) and has_trick_clue(result[0]):
        return None
    return result


def has_trick_clue(grid):
    """True if a clue the player can read is a trick clue. Hidden cats' real clues can't be read, so they don't count."""
    return any(cat.statement.is_trick() for row in grid for cat in row if not cat.hidden)


def clue_table(statement, grid):
    """Everything the hint button needs to know about one clue, without knowing how clues work.

    Returns {"cats": [...], "table": "..."}: the cats the clue is about (speaker included), and
    for every honest/liar combination of those cats, whether the clue fits it. Combination k has
    cat number j as a liar if bit j of k is set. The fits are packed 8 per byte, then base64.
    """
    cats = sorted(involved(statement))
    n_cats = len(grid) * len(grid[0])
    bits = bytearray((2 ** len(cats) + 7) // 8)
    for k in range(2 ** len(cats)):
        world = [False] * n_cats   # cats outside the clue don't matter
        for j, cat in enumerate(cats):
            world[cat] = bool(k >> j & 1)
        if statement.fits(world, grid):
            bits[k // 8] |= 1 << (k % 8)
    return {"cats": cats, "table": base64.b64encode(bytes(bits)).decode()}


def puzzle_to_dict(grid, world, seed, level, given=None):
    """Turn a generated puzzle into plain data the web page can use."""
    cats = []
    for row in grid:
        for cat in row:
            cats.append({
                "name": cat.name,
                "color": cat.color,
                "row": cat.row,
                "column": cat.column,
                "text": cat.gibberish if cat.hidden else cat.statement.to_text(),
                "hidden": cat.hidden,
                "secret": cat.statement.to_text() if cat.hidden else None,   # shown after Reveal
                # the other cats this cat talks about. Hidden cats show none, that would give away their statement
                "mentions": [] if cat.hidden else cat.statement.mentions(),
                # which face the cat's sprite shows. Hidden cats only meow, so they look neutral
                "mood": "neutral" if cat.hidden else cat.statement.mood(),
                # for the hint button. Hidden cats' clues can't be used, so they have none
                "clue": None if cat.hidden else clue_table(cat.statement, grid),
            })
    return {
        "rows": len(grid),
        "cols": len(grid[0]),
        "seed": seed,
        "level": level,   # "easy", "medium", "hard" or "tricky", from the solver
        "given": given,   # index of a cat the page shows as solved from the start, or None
        "cats": cats,
        "liars": world,   # world[i] is True if cat i is a liar
    }


def export(sizes, count, path="web/puzzles.js", first_seed=None, max_tries=MAX_TRIES):
    """Generate count puzzles for every difficulty level of every size, and write them to path.

    Each level is built on purpose by the path generator with its own settings (LEVEL_SETTINGS),
    instead of making random puzzles and rating them afterwards.
    Returns the puzzles, sorted by size and then from easy to hard.
    """
    seed = first_seed if first_seed is not None else random.randrange(1_000_000)
    puzzles = []

    for rows, cols in sizes:
        for level in levels_for(rows, cols):
            made = 0
            # every puzzle gets its own seed so it can be made again (see make_puzzle)
            for _ in range(max_tries):
                if made == count:
                    break
                seed += 1
                result = make_puzzle(rows, cols, level, seed)
                if result is None:
                    continue
                grid, world, _steps, given = result
                given_cat = next(iter(given)) if given else None
                puzzles.append(puzzle_to_dict(grid, world, seed, level, given_cat))
                made += 1
            if made < count:
                print(f"Only found {made} {level} {rows}x{cols} puzzles, wanted {count}")

    with open(path, "w", encoding="utf-8") as f:
        f.write("// Made by export.py, don't edit by hand\n")
        # shown at the bottom of the page, so you can tell an old cached puzzles.js from the latest one
        f.write(f'const PUZZLES_MADE = "{datetime.now():%d %b %Y, %H:%M}";\n')
        f.write("const PUZZLES = " + json.dumps(puzzles, indent=1) + ";\n")
    return puzzles


# --- The daily puzzles: one 3x3 and one 4x4 a day ---

DAILY_SIZES = [(3, 3), (4, 4)]
DAILY_DIR = "web/daily"
# seeds tried per puzzle before giving up on a day (a 4x4 tricky needs the most)
DAILY_TRIES = 500


def daily_level(day, rows, cols):
    """The hidden level a day's puzzle of this size is built with: random, but always the same for the same day.

    3x3: easy, medium or hard. 4x4: medium, hard or tricky. Players never see it.
    """
    return random.Random(f"{day.isoformat()} {rows}x{cols}").choice(levels_for(rows, cols))


def make_daily(day):
    """The day's puzzles, 3x3 first, as dicts for the page.

    Seeds come from the date (2026-11-13 3x3 tries 20261113000, 20261113001, ..., the 4x4 starts at ...500),
    so a day can always be made again from its date.
    """
    puzzles = []
    for k, (rows, cols) in enumerate(DAILY_SIZES):
        level = daily_level(day, rows, cols)
        first = int(day.strftime("%Y%m%d")) * 1000 + k * 500
        for seed in range(first, first + DAILY_TRIES):
            result = make_puzzle(rows, cols, level, seed)
            if result is not None:
                grid, world, _steps, given = result
                given_cat = next(iter(given)) if given else None
                puzzles.append(puzzle_to_dict(grid, world, seed, level, given_cat))
                break
        else:
            raise RuntimeError(f"no {level} {rows}x{cols} puzzle for {day} in {DAILY_TRIES} seeds")
    return puzzles


def read_daily_month(path):
    """The days already saved in a month file, as {"2026-11-13": [3x3, 4x4], ...}. Empty if there's no file yet."""
    if not os.path.exists(path):
        return {}
    with open(path, encoding="utf-8") as f:
        content = f.read()
    return json.loads(content.split(" = ", 1)[1].rstrip().rstrip(";"))


def write_daily_month(path, month, days):
    """Save a month's days. Compact JSON: a year of puzzles is a few MB, so each month gets its own small file."""
    with open(path, "w", encoding="utf-8") as f:
        f.write("// Made by export.py --daily, don't edit by hand\n")
        f.write(f'DAILY["{month}"] = ' + json.dumps(days, separators=(",", ":")) + ";\n")


def daily_dates(folder):
    """All saved dates, sorted, read from the month files."""
    dates = []
    for name in sorted(os.listdir(folder)) if os.path.isdir(folder) else []:
        if name[:4].isdigit() and name.endswith(".js"):
            dates += read_daily_month(os.path.join(folder, name))
    return sorted(dates)


def export_daily(days, start=None, folder=DAILY_DIR, log=print):
    """Add `days` new days of daily puzzles after the last saved day (or from `start`, default today).

    Days already saved are never made again or changed: old puzzles stay the same, whatever the code does now.
    Also writes days.js: the first and last day, which the page needs before it loads a month.
    Returns the dates it added.
    """
    os.makedirs(folder, exist_ok=True)
    saved = daily_dates(folder)
    if start is None:
        start = date.fromisoformat(saved[-1]) + timedelta(days=1) if saved else date.today()
    added = []
    for i in range(days):
        day = start + timedelta(days=i)
        path = os.path.join(folder, f"{day:%Y-%m}.js")
        month = read_daily_month(path)
        if day.isoformat() in month:
            continue   # already made: leave it alone
        puzzles = make_daily(day)
        month[day.isoformat()] = puzzles
        # saved after every day, so stopping halfway keeps what's done
        write_daily_month(path, f"{day:%Y-%m}", dict(sorted(month.items())))
        added.append(day.isoformat())
        log(f"{day}: " + ", ".join(f"{p['rows']}x{p['cols']} {p['level']}" for p in puzzles))

    dates = daily_dates(folder)
    with open(os.path.join(folder, "days.js"), "w", encoding="utf-8") as f:
        f.write("// Made by export.py --daily, don't edit by hand\n")
        f.write(f'const DAILY_FIRST = "{dates[0]}";\n')
        f.write(f'const DAILY_LAST = "{dates[-1]}";\n')
        f.write('const DAILY = {};   // filled by the month files (2026-11.js sets DAILY["2026-11"])\n')
    return added


def parse_size(text):
    """Turn "3x4" into (3, 4)."""
    rows, cols = text.lower().split("x")
    return int(rows), int(cols)


def main():
    """Read the arguments and export the puzzles."""
    parser = argparse.ArgumentParser(description="Export puzzles for the web version (web/puzzles.js).")
    parser.add_argument("sizes", nargs="*", type=parse_size, default=[(3, 3), (4, 4)],
                        help="grid sizes, e.g. 3x3 4x4 (default: 3x3 4x4)")
    parser.add_argument("-n", "--count", type=int, default=5, help="puzzles per level for every size (default: 5)")
    parser.add_argument("-s", "--seed", type=int, help="first seed (default: random)")
    parser.add_argument("-p", "--path", default="web/puzzles.js",
                        help="where to save them (default: web/puzzles.js; the feedback set is web/feedback_puzzles.js)")
    parser.add_argument("-d", "--daily", type=int, metavar="DAYS",
                        help="add this many days of daily puzzles to web/daily/ instead (after the last saved day)")
    parser.add_argument("--start", type=date.fromisoformat, metavar="YYYY-MM-DD",
                        help="with --daily: the first day to make (default: the day after the last saved one, or today)")
    args = parser.parse_args()

    if args.daily:
        added = export_daily(args.daily, start=args.start)
        print(f"Added {len(added)} days to {DAILY_DIR}")
        return
    puzzles = export(args.sizes, args.count, path=args.path, first_seed=args.seed)
    print(f"Saved {len(puzzles)} puzzles to {args.path}")


if __name__ == "__main__":
    main()
