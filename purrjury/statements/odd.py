import random

from purrjury.statements.base import Statement
from purrjury.statements.count_liars import AREA_WEIGHTS
from purrjury.statements.only import big_areas
from purrjury.utils import weighted_order
from purrjury import texts


class OddLiars(Statement):
    """An odd number of an area are liars, e.g. 'An odd number of the cats in my column are liars'.

    There's no "even" version on purpose: players would wonder whether 0 counts.
    A liar saying it just means the number is even (0 included).
    """

    def __init__(self, speaker, area, area_text):
        super().__init__(speaker)
        self.area = area            # list of cat indexes
        self.area_text = area_text  # e.g. "my neighbors", "the cats in row 2"

    def evaluate(self, world, grid):
        """True if the number of liars in the area is odd."""
        return sum(world[i] for i in self.area) % 2 == 1

    def mentions(self):
        """The other cats this statement talks about."""
        return sorted(set(self.area) - {self.speaker})

    def key(self):
        """Same cats (in any order) means the same claim."""
        return ("odd", frozenset(self.area))

    def kind(self):
        return "odd"

    def set_text(self, grid):
        self.text = random.choice(texts.ODD_TEXTS).format(area=self.area_text)

    @classmethod
    def random(cls, speaker, grid, world):
        """Pick an area whose number of liars is odd for an honest cat, even for a liar. None if there's none."""
        should_be_true = not world[speaker]
        areas_by_category = big_areas(grid, speaker)
        weights = {c: AREA_WEIGHTS[c] for c in areas_by_category}

        # try the categories in weighted random order, use the first one with a fitting area
        for category in weighted_order(weights):
            valid = [(area, text) for area, text in areas_by_category[category]
                     if cls(speaker, area, text).evaluate(world, grid) == should_be_true]
            if valid:
                statement = cls(speaker, *random.choice(valid))
                statement.set_text(grid)
                return statement
        return None
