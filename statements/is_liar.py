import random

from statements.base import Statement
from grid import get_cat
from world import split_by_type

LIAR_TEXTS = [
    "{name} is lying through their whiskers.",
    "Don't trust {name}. That cat's a fur-aud.",
    "{name} is lying like a lion.",
    "I'm not kitten you, {name} is a liar.",
]

"""
Target cat is a liar.
"""
class IsLiar(Statement):
    def __init__(self, speaker, target):
        super().__init__(speaker)
        self.target = target

    def evaluate(self, world, grid):
        return world[self.target]

    def set_text(self, grid):
        self.text = random.choice(LIAR_TEXTS).format(name=get_cat(grid, self.target).name)

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
