"""Shared helpers for the tests."""
import random

from cat import Cat
from statements.base import Statement
from grid import load_names, make_grid


def fixed_grid(rows, cols):
    """A grid with predictable names (A, B, C, ...), useful when building puzzles by hand."""
    grid = []
    index = 0
    for r in range(rows):
        grid.append([])
        for c in range(cols):
            grid[r].append(Cat(chr(ord("A") + index), r, c, index, None))
            index += 1
    return grid


def random_grid(rows, cols):
    return make_grid(rows, cols, load_names())


def all_cats(grid):
    return [cat for row in grid for cat in row]


def fits(statement, world, grid):
    """A statement fits its speaker if it is true for an honest cat and false for a liar."""
    return statement.evaluate(world, grid) == (not world[statement.speaker])


class TotalLiars(Statement):
    """Test-only statement: "There are exactly N liars among us." Breaks the mirror symmetry."""

    def __init__(self, speaker, count):
        super().__init__(speaker)
        self.count = count

    def evaluate(self, world, grid):
        return sum(world) == self.count

    def set_text(self, grid):
        self.text = f"There are exactly {self.count} liars among us."

    @classmethod
    def random(cls, speaker, grid, world):
        real = sum(world)
        if world[speaker]:
            count = random.choice([n for n in range(len(world) + 1) if n != real])
        else:
            count = real
        statement = cls(speaker, count)
        statement.set_text(grid)
        return statement
