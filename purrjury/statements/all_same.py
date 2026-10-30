import random

from purrjury.statements.base import Statement
from purrjury.statements.count_liars import AREA_WEIGHTS
from purrjury.statements.only import big_areas
from purrjury import texts


class AllSame(Statement):
    """A whole area is the same type, or a mix, e.g. 'All of my neighbors are the same: all honest, or all liars'."""

    def __init__(self, speaker, area, area_text, same):
        super().__init__(speaker)
        self.area = area            # list of cat indexes, 2 or more
        self.area_text = area_text  # e.g. "my neighbors"
        self.same = same            # True: all the same type, False: a mix of both

    def evaluate(self, world, grid):
        """True if the area really is all the same type (or really is mixed)."""
        types = {world[i] for i in self.area}   # {True}, {False} or {True, False}
        return (len(types) == 1) == self.same

    def mentions(self):
        """The other cats this statement talks about."""
        return sorted(set(self.area) - {self.speaker})

    def key(self):
        """Same cats (in any order) and same claim means the same statement."""
        return ("all_same", frozenset(self.area), self.same)

    def kind(self):
        return "all_same"

    def set_text(self, grid):
        """Pick a sentence for "same" or "mixed"."""
        options = texts.ALL_SAME_TEXTS if self.same else texts.MIXED_TEXTS
        self.text = random.choice(options).format(area=self.area_text)

    @classmethod
    def random(cls, speaker, grid, world):
        """Pick an area category by weight, then an area. Same or mixed always has exactly one that fits."""
        should_be_true = not world[speaker]
        areas_by_category = big_areas(grid, speaker)
        if not areas_by_category:
            return None   # tiny grid with no area of 2 or more

        categories = list(areas_by_category)
        category = random.choices(categories, weights=[AREA_WEIGHTS[c] for c in categories])[0]
        area, text = random.choice(areas_by_category[category])

        # "same" and "mixed" are opposites, so one is true and one is false: pick the one that fits
        is_same = len({world[i] for i in area}) == 1
        statement = cls(speaker, area, text, is_same == should_be_true)
        statement.set_text(grid)
        return statement
