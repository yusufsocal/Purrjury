import random

from grid import get_cat
from statements import ALL_STATEMENTS


def assign_statements(grid, world):
    """Give every cat a random statement that fits whether it's a liar or honest."""
    for i in range(len(world)):
        # Try each statement type once, in a random order
        for statement_type in random.sample(ALL_STATEMENTS, len(ALL_STATEMENTS)):
            statement = statement_type.random(i, grid, world)
            if statement is not None:
                get_cat(grid, i).statement = statement
                break
        else:
            # Only runs if the loop finished without a break: nothing fit this cat
            raise ValueError(f"No statement type fits cat {i}")