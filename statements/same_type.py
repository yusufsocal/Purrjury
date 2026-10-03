import itertools
import random

from statements.base import Statement
from grid import get_cat
from texts import SAME_TYPE_TEXTS


class SameType(Statement):
    """Two cats are the same type: both honest or both liars."""

    def __init__(self, speaker, target1, target2):
        super().__init__(speaker)
        self.target1 = target1
        self.target2 = target2

    def evaluate(self, world, grid):
        return world[self.target1] == world[self.target2]

    def set_text(self, grid):
        self.text = random.choice(SAME_TYPE_TEXTS).format(
            name1=get_cat(grid, self.target1).name,
            name2=get_cat(grid, self.target2).name,
        )

    @classmethod
    def random(cls, speaker, grid, world):
        should_be_true = not world[speaker]

        candidates = [c for c in range(len(world)) if c != speaker]
        pairs = list(itertools.combinations(candidates, 2))
        valid = [p for p in pairs if cls(speaker, p[0], p[1]).evaluate(world, grid) == should_be_true]
        if not valid:
            return None

        target1, target2 = random.choice(valid)
        statement = cls(speaker, target1, target2)
        statement.set_text(grid)
        return statement
