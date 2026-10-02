import random

from Statements.base import Statement
from grid import get_cat, split_by_type

LIAR_TEXTS = [
    "{name} is lying through their whiskers.",
    "Don't trust {name}. That cat's a fur-aud.",
    "{name} is lying like a lion.",
    "I'm not kitten you, {name} is a liar.",
]

class IsLiar(Statement):
    def __init__(self, speaker, target):
        super().__init__(speaker)
        self.target = target

    def evaluate(self, world, grid):
        return world[self.target]

    def set_text(self, grid):
        self.text = random.choice(LIAR_TEXTS).format(name=get_cat(grid, self.target).name)

    def to_text(self):
        return self.text

    @classmethod
    def random(cls, speaker, grid, world):
        liars, honests = split_by_type(world, exclude=speaker)

        # Honest speaker must say something true: pick a real liar.
        # Lying speaker must say something false: pick an honest cat.
        options = liars if not world[speaker] else honests
        if not options:
            return None

        target = random.choice(options)
        statement = cls(speaker, target)
        statement.set_text(grid)
        return statement