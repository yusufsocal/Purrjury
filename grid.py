def get_cat(grid, index):
    """ returns cat from its index"""
    cols = len(grid[0])
    return grid[index // cols][index % cols]


def split_by_type(world, exclude=None):
    """Return two lists of indexes: (liars, honest). Optionally leave one index out, e.g. the speaker."""
    liars = []
    honest = []
    for index, is_liar in enumerate(world):
        if index == exclude:
            continue
        if is_liar:
            liars.append(index)
        else:
            honest.append(index)
    return liars, honest


def find_neighbors(matrix, row, col):
    """Return the cats directly above, below, left and right (no diagonals)."""
    rows = len(matrix)       # number of rows in the grid
    cols = len(matrix[0])    # number of columns in the grid
    neighbors = []

    directions = [(-1, 0), (1, 0), (0, -1), (0, 1)]   # up, down, left, right

    # Check each direction and keep the ones that are inside the grid
    for dr, dc in directions:
        new_r, new_c = row + dr, col + dc
        if 0 <= new_r < rows and 0 <= new_c < cols:
            neighbors.append(matrix[new_r][new_c])

    return neighbors
