"""Generate a batch of puzzles and save them for the web version (web/puzzles.js).

The web page can't read files on its own when you open it straight from disk,
so the puzzles are saved as a small JavaScript file that sets PUZZLES.
"""
import argparse
import json
import random

from generator import generate_puzzle


def puzzle_to_dict(grid, world, seed):
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
            })
    return {
        "rows": len(grid),
        "cols": len(grid[0]),
        "seed": seed,
        "cats": cats,
        "liars": world,   # world[i] is True if cat i is a liar
    }


def export(sizes, count, path="web/puzzles.js", first_seed=None):
    """Generate count puzzles for every size and write them to path. Returns the puzzles."""
    seed = first_seed if first_seed is not None else random.randrange(1_000_000)
    puzzles = []

    # one batch per size, every puzzle gets its own seed so it can be made again
    for rows, cols in sizes:
        liars = max(1, rows * cols // 3)
        made = 0
        while made < count:
            random.seed(seed)
            result = generate_puzzle(rows, cols, liars)
            if result is not None:
                grid, world = result
                puzzles.append(puzzle_to_dict(grid, world, seed))
                made += 1
            seed += 1

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
    parser.add_argument("-n", "--count", type=int, default=10, help="puzzles per size (default: 10)")
    parser.add_argument("-s", "--seed", type=int, help="first seed (default: random)")
    args = parser.parse_args()

    puzzles = export(args.sizes, args.count, first_seed=args.seed)
    print(f"Saved {len(puzzles)} puzzles to web/puzzles.js")


if __name__ == "__main__":
    main()
