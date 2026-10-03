import random

from statements.base import Statement
from grid import get_cat
from texts import (LIAR_TEXTS, HONEST_TEXTS, NONE_TEXTS, ALL_TEXTS, EXACTLY_ONE_TEXTS,
                   EXACTLY_N_TEXTS, AT_LEAST_ONE_TEXTS, AT_LEAST_N_TEXTS)
import areas


class CountLiars(Statement):
    """'<condition> of <area> are liars', e.g. 'Exactly 2 of my neighbors are liars'."""

    def __init__(self, speaker, area, area_text, mode, n):
        super().__init__(speaker)
        self.area = area            # list of cat indexes, computed once
        self.area_text = area_text  # e.g. "my neighbors", "the cats in row 2", "the tabby cats"
        self.mode = mode            # "exactly" or "at_least"
        self.n = n

    def evaluate(self, world, grid):
        count = sum(world[i] for i in self.area) # number of liars in the area
        if self.mode == "exactly":
            return count == self.n
        return count >= self.n # at_least

    def set_text(self, grid):
        size = len(self.area)

        # One cat: use its name with the liar/honest texts
        if size == 1:
            name = get_cat(grid, self.area[0]).name
            texts = LIAR_TEXTS if self.n == 1 else HONEST_TEXTS
            self.text = random.choice(texts).format(name=name)
            return

        # Pick the right list for the count
        if self.mode == "exactly" and self.n == 0:
            texts = NONE_TEXTS
        elif self.n == size:
            texts = ALL_TEXTS          # "exactly all" and "at least all" mean the same
        elif self.mode == "exactly":
            texts = EXACTLY_ONE_TEXTS if self.n == 1 else EXACTLY_N_TEXTS
        else:
            texts = AT_LEAST_ONE_TEXTS if self.n == 1 else AT_LEAST_N_TEXTS

        self.text = random.choice(texts).format(area=self.area_text, n=self.n, h=size - self.n)

    @staticmethod
    def candidate_areas(grid, speaker):
        """All areas this speaker could talk about, as (indexes, text) pairs."""
        me = get_cat(grid, speaker)
        cats = [cat for row in grid for cat in row]

        candidates = [
            (areas.neighbors(grid, me), "my neighbors"),
            (areas.row(grid, me.row), "the cats in my row"),
            (areas.column(grid, me.column), "the cats in my column"),
            (areas.left_of(grid, me), "the cats to my left"),
            (areas.right_of(grid, me), "the cats to my right"),
            (areas.above(grid, me), "the cats above me"),
            (areas.below(grid, me), "the cats below me"),
            (areas.corners(grid), "the corner cats"),
            (areas.edges(grid), "the cats on the edges"),
            (areas.middle(grid), "the cats in the middle"),
            (areas.everyone(grid), "us"),
        ]

        # Other rows and columns (shown to players as 1, 2, 3 instead of 0, 1, 2)
        for r in range(len(grid)):
            if r != me.row:
                candidates.append((areas.row(grid, r), f"the cats in row {r + 1}"))
        for c in range(len(grid[0])):
            if c != me.column:
                candidates.append((areas.column(grid, c), f"the cats in column {c + 1}"))

        # Every color that appears in this grid
        for color in sorted({cat.color for cat in cats}):
            candidates.append((areas.with_color(grid, color), f"the {color} cats"))

        # Every other single cat
        for cat in cats:
            if cat.index != speaker:
                candidates.append(([cat.index], cat.name))

        # Empty areas can't say anything useful, and an area that is only the speaker
        # would be "I am honest/a liar" (e.g. "the cats in the middle" on a 3x3)
        return [(area, text) for area, text in candidates if area and area != [speaker]]

    @classmethod
    def random(cls, speaker, grid, world):
        should_be_true = not world[speaker]

        candidates = cls.candidate_areas(grid, speaker)
        area, text = random.choice(candidates)
        count = sum(world[i] for i in area)   # the real number of liars in the area
        size = len(area)

        # Single cats always use "exactly"; bigger areas use "at least" 30% of the time
        mode = "exactly" if size == 1 or random.random() < 0.7 else "at_least"

        if mode == "at_least":
            # True:  "at least n" for any n from 1 up to the real count
            # False: "at least n" for any n above the real count
            options = range(1, count + 1) if should_be_true else range(count + 1, size + 1)
            if not options:
                mode = "exactly"   # nothing fits, fall back to "exactly" (always possible)

        if mode == "exactly":
            # True:  the real count
            # False: any other number from 0 to the size of the area
            options = [count] if should_be_true else [n for n in range(size + 1) if n != count]

        statement = cls(speaker, area, text, mode, random.choice(options))
        statement.set_text(grid)
        return statement