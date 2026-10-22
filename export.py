"""Generate a batch of puzzles and save them for the web version (web/puzzles.js).

The web page can't read files on its own when you open it straight from disk,
so the puzzles are saved as a small JavaScript file that sets PUZZLES.
"""
import argparse
import base64
import json
import random

from purrjury.engine.generator import generate_puzzle
from purrjury.engine.solver import LEVELS, involved, levels_for, rate, solve

# Give up on a size after this many puzzles, in case some level is too rare to fill
MAX_TRIES = 1000

# Trick clues ("Felix and I are the same type") only appear in puzzles of this level and up
TRICK_MIN_LEVEL = "hard"


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


def puzzle_to_dict(grid, world, seed, level):
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
                # for the hint button. Hidden cats' clues can't be used, so they have none
                "clue": None if cat.hidden else clue_table(cat.statement, grid),
            })
    return {
        "rows": len(grid),
        "cols": len(grid[0]),
        "seed": seed,
        "level": level,   # "easy", "medium", "hard" or "tricky", from the solver
        "cats": cats,
        "liars": world,   # world[i] is True if cat i is a liar
    }


def export(sizes, count, path="web/puzzles.js", first_seed=None, max_tries=MAX_TRIES):
    """Generate count puzzles for every difficulty level of every size, and write them to path.

    The solver rates each puzzle. Stuck puzzles and levels that are already full are skipped.
    Returns the puzzles, sorted by size and then from easy to hard.
    """
    seed = first_seed if first_seed is not None else random.randrange(1_000_000)
    puzzles = []

    for rows, cols in sizes:
        liars = max(1, rows * cols // 3)
        levels = levels_for(rows, cols)
        wanted = {level: count for level in levels}   # how many more each level still needs
        found = {level: [] for level in levels}

        # every puzzle gets its own seed so it can be made again
        for _ in range(max_tries):
            if not any(wanted.values()):
                break
            random.seed(seed)
            result = generate_puzzle(rows, cols, liars)
            if result is not None:
                grid, world = result
                level = rate(solve(grid), rows, cols)
                if level is not None and LEVELS.index(level) < LEVELS.index(TRICK_MIN_LEVEL) and has_trick_clue(grid):
                    level = None   # a trick clue in an easy or medium puzzle: skip this one
                if wanted.get(level, 0) > 0:   # None (stuck or skipped) is never wanted
                    found[level].append(puzzle_to_dict(grid, world, seed, level))
                    wanted[level] -= 1
            seed += 1

        for level in levels:
            puzzles.extend(found[level])
            if wanted[level]:
                print(f"Only found {len(found[level])} {level} {rows}x{cols} puzzles, wanted {count}")

    with open(path, "w", encoding="utf-8") as f:
        f.write("// Made by export.py, don't edit by hand\n")
        f.write("const PUZZLES = " + json.dumps(puzzles, indent=1) + ";\n")
    return puzzles


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
    args = parser.parse_args()

    puzzles = export(args.sizes, args.count, first_seed=args.seed)
    print(f"Saved {len(puzzles)} puzzles to web/puzzles.js")


if __name__ == "__main__":
    main()
