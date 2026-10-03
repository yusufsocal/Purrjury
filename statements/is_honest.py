import random

from statements.base import Statement
from grid import get_cat
from world import split_by_type

HONEST_TEXTS = [
    "{name} is pawsitively honest.",
    "You can trust {name}. That's a purr-fact.",
    "{name} always tells the truth, no kitten.",
    "{name} is honest, fur real.",
]

class IsHonest(Statement):
    def __init__(self, speaker, target):
        super().__init__(speaker)
        self.target = target

    def evaluate(self, world, grid):
        return not world[self.target]

    def set_text(self, grid):
        self.text = random.choice(HONEST_TEXTS).format(name=get_cat(grid, self.target).name)

    @classmethod
    def random(cls, speaker, grid, world):
        should_be_true = not world[speaker]

        candidates = [c for c in range(len(world)) if c != speaker]
        valid = [c for c in candidates if cls(speaker, c).evaluate(world, grid) == should_be_true]
        if not valid:
            return None

        target = random.choice(valid)
        statement = cls(speaker, target)
        statement.set_text(grid)
        return statement