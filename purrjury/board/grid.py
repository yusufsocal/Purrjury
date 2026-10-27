import random
from pathlib import Path

from purrjury.board.cat import Cat
from purrjury.board.colors import COLORS


# found next to the code, so it works no matter which folder you run from
NAMES_PATH = Path(__file__).parent.parent / "data" / "cat_names.txt"


def load_names(path=NAMES_PATH):
    """Load names into {"A": ["Ash", "Apricot", "Angus"], "B": [...], ...}."""
    names_by_letter = {}
    with open(path) as f:
        for line in f:   # each line looks like "A: Ash, Apricot, Angus"
            letter, names = line.strip().split(": ")
            names_by_letter[letter] = names.split(", ")
    return names_by_letter


def max_group_size(n_cats):
    """The most cats one color can have: 4, or more on grids too big for 4 per color (25 cats need 5)."""
    return max(4, -(-n_cats // len(COLORS)))   # -(-a // b) rounds a / b up


def decide_colors(n_cats):
    """Return a shuffled list of n_cats colors, every color used 2 to max_group_size(n_cats) times."""
    biggest = max_group_size(n_cats)
    cats_left = n_cats
    sizes = []

    # split the cats into color groups until every cat is in a group, one color per group
    while cats_left > 0:
        groups_left = len(COLORS) - len(sizes) - 1   # colors still free after this group
        # A group can't leave exactly 1 cat over, can't be the whole grid
        # (grids under 4 cats are too small for two groups, so they get one color),
        # and must leave few enough cats for the colors that are still free
        allowed = [s for s in range(2, biggest + 1) if s <= cats_left and cats_left - s != 1
                   and (s < n_cats or n_cats < 4)
                   and cats_left - s <= biggest * groups_left]
        size = random.choice(allowed)
        sizes.append(size)
        cats_left -= size

    chosen = random.sample(COLORS, len(sizes))

    colors = []
    # turn the groups into one list, e.g. ["black", "black", "white", "white", "white"]
    for color, size in zip(chosen, sizes):
        colors += [color] * size

    random.shuffle(colors)
    return colors


def make_grid(row, col, names_by_letter):
    """Build a row x col grid of cats with names in (mostly) alphabetical order."""
    skips_allowed = 26 - row * col   # how many letters we can skip and still have enough names
    names = []

    # Walk through the letters A to Z, sometimes skipping one (20% of the time)
    for letter in names_by_letter:
        if random.random() < 0.2 and skips_allowed != 0:
            skips_allowed -= 1
            continue
        else:
            names.append(random.choice(names_by_letter[letter]))  # pick 1 of the 3 names
            if len(names) == row * col:
                break

    grid = []
    index = 0

    colors = decide_colors(row*col)

    # Fill the grid row by row, taking names from the front of the list
    for i in range(row):
        grid.append([])
        for j in range(col):
            grid[i].append(Cat(names.pop(0), i, j, index, colors.pop(0)))
            index += 1

    return grid


def get_cat(grid, index):
    """Return the cat at a flat index, e.g. index 4 in a 3-wide grid is row 1, column 1."""
    cols = len(grid[0])
    return grid[index // cols][index % cols]
