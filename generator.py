import random
import textwrap

from checker import find_solutions
from grid import get_cat, load_names, make_grid
from statements import ALL_STATEMENTS
from world import make_world


def new_statement(statement_type, speaker, grid, world, used, tries=10):
    """Ask statement_type for a fitting statement that no other cat has said yet.

    used: set of keys of statements already in the puzzle.
    Returns None if it can't find a new one within a few tries.
    """
    # a few tries, since random can give something another cat already said
    for _ in range(tries):
        statement = statement_type.random(speaker, grid, world)
        if statement is None:
            return None   # this type can't fit this cat at all, no point trying again
        if statement.key() not in used:
            return statement
    return None


def assign_statements(grid, world):
    """Give every cat a random statement that fits whether it's a liar or honest.

    No two cats say the same thing.
    """
    used = set()   # keys of everything said so far

    # go through the cats one by one
    for i in range(len(world)):
        # Try each statement type in a random order
        for statement_type in random.sample(ALL_STATEMENTS, len(ALL_STATEMENTS)):
            statement = new_statement(statement_type, i, grid, world, used)
            if statement is not None:
                get_cat(grid, i).statement = statement
                used.add(statement.key())
                break
        else:
            # Only runs if the loop finished without a break: nothing new fit this cat
            raise ValueError(f"No statement type fits cat {i}")


def print_puzzle(grid, world=None, width=24):
    """Print the grid as boxes: cat name on top, its statement wrapped underneath."""
    cols = len(grid[0])
    border = "+" + ("-" * (width + 2) + "+") * cols

    print(border)
    for row in grid:
        # Each cell is a list of lines: the name, then the wrapped statement
        cells = []
        for cat in row:
            text = cat.statement.to_text() if cat.statement else "..."
            name = cat.name.upper()
            color = cat.color.upper()
            if world is not None:
                name += " (liar)" if world[cat.index] else " (honest)"
            name += " " + color
            cells.append([name] + textwrap.wrap(text, width))

        # print the cells side by side, line by line. shorter cells get empty lines at the bottom
        height = max(len(cell) for cell in cells)
        for line in range(height):
            parts = [cell[line] if line < len(cell) else "" for cell in cells]
            print("| " + " | ".join(part.ljust(width) for part in parts) + " |")
        print(border)


def generate_puzzle(row, col, n_liars, max_attempts=1000):
    """Keep generating puzzles until one has exactly one solution. Returns (grid, world), or None."""
    names = load_names()
    # new grid, world and statements every time, until the checker finds only one solution
    for _ in range(max_attempts):
        grid = make_grid(row, col, names)
        world = make_world(row * col, n_liars)
        assign_statements(grid, world)

        if len(find_solutions(grid)) == 1:
            return grid, world

    return None
