# --- Whole grid ---
# --- Orhan was here ---

def everyone(grid):
    """Every cat in the grid."""
    return [cat.index for row in grid for cat in row]

def row(grid, r):
    """Every cat in row r."""
    return [cat.index for cat in grid[r]]

def column(grid, c):
    """Every cat in column c."""
    return [cat.index for row in grid for cat in row if (cat.index - c) % len(row) == 0]
    # A cat is in column c when its index is c plus a whole number of rows, 
    # i.e. (index - c) is a multiple of the row width

def corners(grid):
    """The cats in the four corners."""
    return sorted(set([grid[0][0].index, grid[0][-1].index, grid[-1][0].index, grid[-1][-1].index]))

def edges(grid):
    """Every cat on the outer border (corners included)."""
    return [cat.index for row in grid 
            for cat in row 
            if cat.row == 0 
            or cat.column == 0 
            or cat.row == len(grid)-1 
            or cat.column ==len(grid[0])-1]

def middle(grid):
    """Every cat NOT on the border."""
    return[cat.index for row in grid 
            for cat in row 
            if not (cat.row == 0 
            or cat.column == 0 
            or cat.row == len(grid)-1 
            or cat.column ==len(grid[0])-1)]

def with_color(grid, color):
    """Every cat with this color."""
    return [cat.index for row in grid for cat in row if cat.color == color]


# --- Relative to a cat ---

def left_of(grid, cat):
    """Every cat to the left of this cat, in the same row."""
    return [c.index for c in grid[cat.row] if c.index < cat.index]

def right_of(grid, cat):
    """Every cat to the right of this cat, in the same row."""
    return [c.index for c in grid[cat.row] if c.index > cat.index]

def above(grid, cat):
    """Every cat above this cat, in the same column."""
    return [c.index for row in grid for c in row if c.index < cat.index and c.column == cat.column]

def below(grid, cat):
    """Every cat below this cat, in the same column."""
    return [c.index for row in grid for c in row if c.index > cat.index and c.column == cat.column]

def directly_left(grid, cat):
    """The single cat directly to the left, or [] at the edge."""
    return [cat.index - 1] if cat.column != 0 else []

def directly_right(grid, cat):
    """The single cat directly to the right, or [] at the edge."""
    return [cat.index + 1] if cat.column != len(grid[0]) - 1 else []

def directly_above(grid, cat):
    """The single cat directly above, or [] at the edge."""
    return [cat.index - len(grid[0])] if cat.row != 0 else []

def directly_below(grid, cat):
    """The single cat directly below, or [] at the edge."""
    return [cat.index + len(grid[0])] if cat.row != len(grid) - 1 else []

def neighbors(grid, cat):
    """Cats directly above, below, left and right (no diagonals)."""
    return (directly_above(grid, cat) 
            + directly_below(grid, cat) 
            + directly_left(grid, cat) 
            + directly_right(grid, cat))

def neighbors_with_diagonals(grid, cat):
    """All touching cats, diagonals included (up to 8)."""
    return [c.index for r in grid for c in r
            if max(abs(c.row - cat.row), abs(c.column - cat.column)) == 1]