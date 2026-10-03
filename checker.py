import itertools

from grid import get_cat


def find_solutions(grid):
    """Return every world that fits all statements: honest cats say true things, liars say false things."""
    valid = []
    for world in itertools.product([False, True], repeat=len(grid)*len(grid[0])):
        flag = True
        for i in range(len(world)):
            if get_cat(grid, i).statement is not None:
                if get_cat(grid, i).statement.evaluate(world, grid) == (not world[i]):
                    continue
                else: 
                    flag = False
                    break 
        if flag: valid.append(world)

    return valid