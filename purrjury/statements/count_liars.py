import random

from purrjury.statements.base import Statement
from purrjury.board.grid import get_cat
from purrjury.texts import (LIAR_TEXTS, HONEST_TEXTS, NONE_TEXTS, ALL_TEXTS, EXACTLY_ONE_TEXTS,
                   EXACTLY_N_TEXTS, AT_LEAST_ONE_TEXTS, AT_LEAST_N_TEXTS,
                   EVERYONE_NONE_TEXTS, EVERYONE_ALL_TEXTS, EVERYONE_EXACTLY_ONE_TEXTS,
                   EVERYONE_EXACTLY_N_TEXTS, EVERYONE_AT_LEAST_ONE_TEXTS, EVERYONE_AT_LEAST_N_TEXTS)
from purrjury.board import areas

# How often each kind of area is picked, relative to each other
AREA_WEIGHTS = {"mine": 4, "grid": 2, "line": 2, "color": 2, "trio": 2, "single": 1}

# How many random "Felix, Bagel and me" areas each speaker gets to pick from
TRIOS_PER_SPEAKER = 3

# What an area with every cat in it is called. Players never see it: those areas get their own
# texts ("there are exactly 5 liars in total"), since "exactly 5 of us" read as unclear
EVERYONE_TEXT = "the cats in the grid"

# Texts for each kind of count, for normal areas and for areas with every cat in them
COUNT_TEXTS = {
    "none": NONE_TEXTS, "all": ALL_TEXTS,
    "exactly_one": EXACTLY_ONE_TEXTS, "exactly_n": EXACTLY_N_TEXTS,
    "at_least_one": AT_LEAST_ONE_TEXTS, "at_least_n": AT_LEAST_N_TEXTS,
}
EVERYONE_COUNT_TEXTS = {
    "none": EVERYONE_NONE_TEXTS, "all": EVERYONE_ALL_TEXTS,
    "exactly_one": EVERYONE_EXACTLY_ONE_TEXTS, "exactly_n": EVERYONE_EXACTLY_N_TEXTS,
    "at_least_one": EVERYONE_AT_LEAST_ONE_TEXTS, "at_least_n": EVERYONE_AT_LEAST_N_TEXTS,
}

# Chance that an area bigger than one cat uses "at least" instead of "exactly"
AT_LEAST_CHANCE = 0.3


class CountLiars(Statement):
    """'<condition> of <area> are liars', e.g. 'Exactly 2 of my neighbors are liars'."""

    def __init__(self, speaker, area, area_text, mode, n):
        super().__init__(speaker)
        self.area = area            # list of cat indexes, computed once
        self.area_text = area_text  # e.g. "my neighbors", "the cats in row 2", "the tabby cats"
        self.mode = mode            # "exactly" or "at_least"
        self.n = n

    def evaluate(self, world, grid):
        """True if the number of liars in the area matches the claim."""
        count = sum(world[i] for i in self.area) # number of liars in the area
        if self.mode == "exactly":
            return count == self.n
        return count >= self.n # at_least

    def mentions(self):
        """The other cats this statement talks about."""
        return sorted(set(self.area) - {self.speaker})

    def mood(self):
        """Happy when it says everyone in the area is honest, angry when it says they're all liars."""
        if self.mode == "exactly" and self.n == 0:
            return "happy"
        if self.n == len(self.area):
            return "angry"
        return "neutral"

    def key(self):
        """Same cats (in any order), same mode and same n means the same claim."""
        return ("count", frozenset(self.area), self.mode, self.n)

    def set_text(self, grid):
        """Pick a sentence that fits the size of the area and the number."""
        size = len(self.area)

        # One cat: use its name with the liar/honest texts
        if size == 1:
            name = get_cat(grid, self.area[0]).name
            texts = LIAR_TEXTS if self.n == 1 else HONEST_TEXTS
            self.text = random.choice(texts).format(name=name)
            return

        # Pick the right kind of count
        if self.mode == "exactly" and self.n == 0:
            kind = "none"
        elif self.n == size:
            kind = "all"          # "exactly all" and "at least all" mean the same
        elif self.mode == "exactly":
            kind = "exactly_one" if self.n == 1 else "exactly_n"
        else:
            kind = "at_least_one" if self.n == 1 else "at_least_n"

        # an area with every cat gets its own wording: "there are exactly 5 liars in total"
        texts = (EVERYONE_COUNT_TEXTS if areas.is_everyone(grid, self.area) else COUNT_TEXTS)[kind]

        self.text = random.choice(texts).format(area=self.area_text, n=self.n, h=size - self.n)

    @staticmethod
    def candidate_areas(grid, speaker):
        """All areas this speaker could talk about, grouped by category.

        Returns a dict like {"mine": [(indexes, text), ...], "single": [...], ...}.
        Categories with no usable areas are left out.
        """
        me = get_cat(grid, speaker)
        cats = [cat for row in grid for cat in row]

        candidates = {
            # Areas seen from the speaker
            "mine": [
                (areas.neighbors(grid, me), "my neighbors"),
                (areas.row(grid, me.row), "the cats in my row"),
                (areas.column(grid, me.column), "the cats in my column"),
                (areas.left_of(grid, me), "the cats to my left"),
                (areas.right_of(grid, me), "the cats to my right"),
                (areas.above(grid, me), "the cats above me"),
                (areas.below(grid, me), "the cats below me"),
            ],
            # Fixed parts of the grid
            "grid": [
                (areas.corners(grid), "the corner cats"),
                (areas.edges(grid), "the cats on the edges"),
                (areas.middle(grid), "the cats in the middle"),
                (areas.everyone(grid), EVERYONE_TEXT),
            ],
            # Other rows and columns (shown to players as 1, 2, 3 instead of 0, 1, 2)
            "line": [],
            # Every color that appears in this grid
            "color": [],
            # The speaker and two other cats, e.g. "Felix, Bagel and me"
            "trio": [],
            # Every other single cat
            "single": [],
        }

        # other rows and columns
        for r in range(len(grid)):
            if r != me.row:
                candidates["line"].append((areas.row(grid, r), f"the cats in row {r + 1}"))
        for c in range(len(grid[0])):
            if c != me.column:
                candidates["line"].append((areas.column(grid, c), f"the cats in column {c + 1}"))

        # one area per color in the grid
        for color in sorted({cat.color for cat in cats}):
            candidates["color"].append((areas.with_color(grid, color), f"the {color} cats"))

        # a few random groups of the speaker and two other cats, names in grid order
        others = [cat for cat in cats if cat.index != speaker]
        for _ in range(TRIOS_PER_SPEAKER if len(others) >= 2 else 0):
            a, b = sorted(random.sample(others, 2), key=lambda cat: cat.index)
            candidates["trio"].append((sorted([speaker, a.index, b.index]), f"{a.name}, {b.name} and me"))

        # one area per cat, except the speaker
        for cat in cats:
            if cat.index != speaker:
                candidates["single"].append(([cat.index], cat.name))

        # Leave out areas that would sound odd:
        # - empty areas can't say anything useful
        # - an area that is only the speaker would be "I am honest/a liar" (e.g. "the cats in the middle" on a 3x3)
        # - an area that covers every cat should just be called EVERYONE_TEXT (e.g. "the corner cats" on a 2x2)
        n_cats = len(cats)
        result = {}
        for category, options in candidates.items():
            usable = [(area, text) for area, text in options
                      if area and area != [speaker] and (len(area) < n_cats or text == EVERYONE_TEXT)]
            if usable:
                result[category] = usable
        return result

    @classmethod
    def random(cls, speaker, grid, world):
        """Pick an area and a number so the statement is true for an honest cat and false for a liar."""
        should_be_true = not world[speaker]

        # Pick a category by weight first, then an area inside it, so a category
        # with many areas (like single cats) doesn't win just by being big
        candidates = cls.candidate_areas(grid, speaker)
        categories = list(candidates)
        category = random.choices(categories, weights=[AREA_WEIGHTS[c] for c in categories])[0]
        area, text = random.choice(candidates[category])

        count = sum(world[i] for i in area)   # the real number of liars in the area
        size = len(area)

        # Single cats always use "exactly"; bigger areas sometimes use "at least"
        mode = "at_least" if size > 1 and random.random() < AT_LEAST_CHANCE else "exactly"

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