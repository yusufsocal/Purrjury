import random

from purrjury.statements.base import Statement
from purrjury.board import areas
from purrjury.board.grid import get_cat
from purrjury import texts


# Each relation takes the two areas' liar counts and sizes and returns True if the statement holds.
RELATIONS = {
    "more_liars": lambda liars_a, size_a, liars_b, size_b: liars_a > liars_b,
    "more_honest": lambda liars_a, size_a, liars_b, size_b: size_a - liars_a > size_b - liars_b,
    "same_liars": lambda liars_a, size_a, liars_b, size_b: liars_a == liars_b,
}

TEXTS = {
    "more_liars": texts.COMPARE_MORE_LIARS_TEXTS,
    "more_honest": texts.COMPARE_MORE_HONEST_TEXTS,
    "same_liars": texts.COMPARE_SAME_TEXTS,
}

# Random pairs of areas to try before giving up
TRIES = 30


def compare_areas(grid, speaker):
    """Areas that read well in a comparison, grouped by category, each with its small word in front.

    Returns a dict like {"line": [(indexes, "in row 1"), ...], "color": [...], "neighbors": [...]}.
    Only areas of 2 or more cats: comparing single cats is just a pair clue.
    """
    me = get_cat(grid, speaker)
    cats = [cat for row in grid for cat in row]
    candidates = {
        "line": [(areas.row(grid, me.row), "in my row"), (areas.column(grid, me.column), "in my column")],
        "color": [],
        "neighbors": [(areas.neighbors(grid, me), "among my neighbors")],
    }
    for r in range(len(grid)):
        if r != me.row:
            candidates["line"].append((areas.row(grid, r), f"in row {r + 1}"))
    for c in range(len(grid[0])):
        if c != me.column:
            candidates["line"].append((areas.column(grid, c), f"in column {c + 1}"))
    for color in sorted({cat.color for cat in cats}):
        candidates["color"].append((areas.with_color(grid, color), f"among the {color} cats"))
    for cat in cats:
        if cat.index != speaker:
            candidates["neighbors"].append((areas.neighbors(grid, cat), f"among {cat.name}'s neighbors"))

    result = {}
    for category, options in candidates.items():
        big = [(area, text) for area, text in options if len(area) >= 2]
        if big:
            result[category] = big
    return result


class Compare(Statement):
    """Two areas compared, e.g. 'There are more liars in row 1 than in row 3'."""

    def __init__(self, speaker, area_a, text_a, area_b, text_b, relation):
        super().__init__(speaker)
        self.area_a = area_a        # list of cat indexes
        self.text_a = text_a        # e.g. "in row 1", "among the orange cats"
        self.area_b = area_b
        self.text_b = text_b
        self.relation = relation    # a key in RELATIONS

    def evaluate(self, world, grid):
        """Count the liars in both areas and compare."""
        liars_a = sum(world[i] for i in self.area_a)
        liars_b = sum(world[i] for i in self.area_b)
        return RELATIONS[self.relation](liars_a, len(self.area_a), liars_b, len(self.area_b))

    def mentions(self):
        """The other cats this statement talks about: both areas."""
        return sorted(set(self.area_a + self.area_b) - {self.speaker})

    def key(self):
        """Same relation on the same two areas means the same claim. Order only matters for "more"."""
        a, b = frozenset(self.area_a), frozenset(self.area_b)
        if self.relation == "same_liars":
            return ("compare", self.relation, frozenset([a, b]))
        return ("compare", self.relation, a, b)

    def kind(self):
        return "compare"

    def set_text(self, grid):
        """Fill both area texts into the sentence for the relation."""
        self.text = random.choice(TEXTS[self.relation]).format(a=self.text_a, b=self.text_b)

    @classmethod
    def random(cls, speaker, grid, world):
        """Pick two different areas and a relation that fits the speaker, or None after a few tries."""
        should_be_true = not world[speaker]
        candidates = compare_areas(grid, speaker)
        categories = list(candidates)
        if not categories:
            return None   # tiny grid

        for _ in range(TRIES):
            # a category first, so the many "Bean's neighbors" areas don't crowd out rows and colors
            area_a, text_a = random.choice(candidates[random.choice(categories)])
            area_b, text_b = random.choice(candidates[random.choice(categories)])
            if set(area_a) == set(area_b):
                continue   # the same cats twice, e.g. a color that fills exactly one row
            statement = cls(speaker, area_a, text_a, area_b, text_b, random.choice(list(RELATIONS)))
            if statement.evaluate(world, grid) == should_be_true:
                statement.set_text(grid)
                return statement
        return None
