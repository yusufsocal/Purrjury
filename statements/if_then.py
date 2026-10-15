import random

from statements.base import Statement
from statements.count_liars import AREA_WEIGHTS
from statements.only import big_areas
from grid import get_cat
from utils import weighted_order
import texts


class IfThen(Statement):
    """If one cat is honest (or a liar), a whole area is honest (or liars).

    e.g. 'If Felix is honest, then all of the cats in my row are liars'.
    The cat in the "if" part is never the speaker, "If I'm honest, ..." would give
    away too much.
    """

    def __init__(self, speaker, cat, cat_liar, area, area_text, area_liar):
        super().__init__(speaker)
        self.cat = cat              # index of the cat in the "if" part
        self.cat_liar = cat_liar    # True: "if <cat> is a liar", False: "if <cat> is honest"
        self.area = area            # list of cat indexes in the "then" part, 2 or more
        self.area_text = area_text  # e.g. "my neighbors"
        self.area_liar = area_liar  # True: "then all of them are liars", False: "... are honest"

    def evaluate(self, world, grid):
        """An "if" is only false when the "if" part is true and the "then" part is false."""
        if_part = world[self.cat] == self.cat_liar
        then_part = all(world[i] == self.area_liar for i in self.area)
        return (not if_part) or then_part

    def key(self):
        """Same cat, same types and same area (in any order) means the same claim."""
        return ("if_then", self.cat, self.cat_liar, frozenset(self.area), self.area_liar)

    def set_text(self, grid):
        """Pick a sentence and fill in the cat, the area and the types."""
        self.text = random.choice(texts.IF_THEN_TEXTS).format(
            name=get_cat(grid, self.cat).name,
            cond="a liar" if self.cat_liar else "honest",
            area=self.area_text,
            then="liars" if self.area_liar else "honest",
        )

    @classmethod
    def random(cls, speaker, grid, world):
        """Pick an area category by weight, then a cat and an area that fit the speaker."""
        should_be_true = not world[speaker]
        areas_by_category = big_areas(grid, speaker)
        weights = {c: AREA_WEIGHTS[c] for c in areas_by_category}
        others = [c for c in range(len(world)) if c != speaker]

        # try the categories in weighted random order, use the first one with a fitting statement
        for category in weighted_order(weights):
            options = []
            for area, text in areas_by_category[category]:
                for cat in others:
                    if [cat] == area:
                        continue
                    for cat_liar in (True, False):
                        for area_liar in (True, False):
                            options.append((cat, cat_liar, area, text, area_liar))

            valid = [o for o in options if cls(speaker, *o).evaluate(world, grid) == should_be_true]
            if valid:
                statement = cls(speaker, *random.choice(valid))
                statement.set_text(grid)
                return statement

        return None   # tiny grid with no area of 2 or more
