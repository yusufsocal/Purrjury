import random
import textwrap

from purrjury.engine.checker import find_solutions
from purrjury.board.grid import get_cat, load_names, make_grid
from purrjury.statements import ALL_STATEMENTS, Hearsay
from purrjury import texts
from purrjury.board.world import make_world

# Chance for each possible hidden cat to actually be hidden (see max_hidden)
HIDDEN_CHANCE = 0.75


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


def max_hidden(rows, cols):
    """How many hidden cats a grid can have: 0 on 2x2, 1 on 3x3, 2 on 4x4 and so on.

    Not more, because if the cat telling us about a hidden cat is a liar,
    we learn nothing about the hidden cat, and too many of those isn't fun.
    """
    return max(0, min(rows, cols) - 2)


def add_hidden_cats(grid, world):
    """Turn a few cats into hidden cats that only meow, and let another cat tell what they said.

    Runs after assign_statements: the hidden cats keep their real statement (the player
    just can't read it), and the cat telling about them gets a new Hearsay statement.
    """
    cats = [cat for row in grid for cat in row]
    used = {cat.statement.key() for cat in cats}
    count = sum(random.random() < HIDDEN_CHANCE for _ in range(max_hidden(len(grid), len(grid[0]))))
    hidden = random.sample(range(len(cats)), count)

    # the cats that can tell: not hidden themselves, and each one only tells about one hidden cat
    tellers = [i for i in range(len(cats)) if i not in hidden]
    random.shuffle(tellers)

    for about in hidden:
        speaker = tellers.pop()
        statement = Hearsay.random(speaker, grid, world, about=about, statement_types=ALL_STATEMENTS)
        if statement is None or statement.key() in used:
            continue   # couldn't make one, this cat just stays a normal cat
        used.discard(cats[speaker].statement.key())
        cats[speaker].statement = statement
        used.add(statement.key())
        cats[about].hidden = True
        cats[about].gibberish = random.choice(texts.GIBBERISH_TEXTS)


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
            if cat.hidden:
                text = cat.gibberish
                if world is not None:
                    text += " [really: " + cat.statement.to_text() + "]"
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
        add_hidden_cats(grid, world)

        if len(find_solutions(grid)) == 1:
            return grid, world

    return None
