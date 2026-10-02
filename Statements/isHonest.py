import random

from Statements.base import Statement
from grid import get_cat, split_by_type

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

    def to_text(self):
        return self.text

    @classmethod
    def random(cls, speaker, grid, world):
        liars, honests = split_by_type(world, exclude=speaker)

        # Honest speaker must say something true: pick a real truther.
        # Lying speaker must say something false: pick a liar.
        options = liars if world[speaker] else honests
        if not options:
            return None

        target = random.choice(options)
        statement = cls(speaker, target)
        statement.set_text(grid)
        return statement