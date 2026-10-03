import itertools
import random

from statements.base import Statement
from grid import get_cat, find_neighbors
from world import split_by_type

TEXTS = [
    "{name1} and {name2} are both honest, or both liars.",
    "{name1} and {name2} are both truth-tellers or both fibbers. Same litter.",
    "If {name1} is lying, so is {name2}. If {name1} is honest, so is {name2}.",
    "{name1} and {name2} are on the same side, honest or not.",
    "{name1} and {name2} are the same kind of cat.",
    "Whatever {name1} is, {name2} is too."
]

"""
The target cats are the same type.
"""
class SameType(Statement):
    def __init__(self, speaker, target1, target2):
        super().__init__(speaker)
        self.target1 = target1
        self.target2 = target2

    def evaluate(self, world, grid):
        return world[self.target1] == world[self.target2]

    def set_text(self, grid):
        self.text = random.choice(TEXTS).format(name1=get_cat(grid, self.target1).name, name2=get_cat(grid, self.target2).name)

    @classmethod
    def random(cls, speaker, grid, world):
        should_be_true = not world[speaker]

        candidates = [c for c in range(len(world)) if c != speaker]
        pairs = list(itertools.combinations(candidates, 2))
        valid = [p for p in pairs if cls(speaker, p[0], p[1]).evaluate(world, grid) == should_be_true]
        if not valid:
            return None

        target = random.choice(valid)
        statement = cls(speaker, target[0], target[1])
        statement.set_text(grid)
        return statement