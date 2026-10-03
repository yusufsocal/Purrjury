import random

from cat import Cat


def load_names(path="cat_names.txt"):
    """Load names into {"A": ["Ash", "Apricot", "Angus"], "B": [...], ...}."""
    names_by_letter = {}
    with open(path) as f:
        for line in f:
            letter, names = line.strip().split(": ")
            names_by_letter[letter] = names.split(", ")
    return names_by_letter


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

    # Fill the grid row by row, taking names from the front of the list
    for i in range(row):
        grid.append([])
        for j in range(col):
            grid[i].append(Cat(names.pop(0), i, j, index))
            index += 1

    return grid


def get_cat(grid, index):
    """Return the cat at a flat index, e.g. index 4 in a 3-wide grid is row 1, column 1."""
    cols = len(grid[0])
    return grid[index // cols][index % cols]


def find_neighbors(grid, cat):
    """Return the cats directly above, below, left and right of a cat (no diagonals)."""
    rows = len(grid)       # number of rows in the grid
    cols = len(grid[0])    # number of columns in the grid
    neighbors = []

    directions = [(-1, 0), (1, 0), (0, -1), (0, 1)]   # up, down, left, right

    # Check each direction and keep the ones that are inside the grid
    for dr, dc in directions:
        new_r, new_c = cat.row + dr, cat.column + dc
        if 0 <= new_r < rows and 0 <= new_c < cols:
            neighbors.append(grid[new_r][new_c])

    return neighbors
