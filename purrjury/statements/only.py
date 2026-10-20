import random

from purrjury.statements.base import Statement
from purrjury.statements.count_liars import AREA_WEIGHTS, CountLiars
from purrjury.board import areas
from purrjury.board.grid import get_cat
from purrjury.utils import weighted_order
from purrjury import texts


# How often the speaker talks about itself vs another cat, relative to each other
#   me:    "I'm the only liar among the cats in my row."   (a liar can say it, an honest cat can't)
#   other: "Felix is the only liar among my neighbors."
FLAVOR_WEIGHTS = {"me": 1, "other": 2}

# Texts: TEXTS[is_me][is_liar]
TEXTS = {
    True:  {True: texts.ONLY_ME_LIAR_TEXTS, False: texts.ONLY_ME_HONEST_TEXTS},
    False: {True: texts.ONLY_LIAR_TEXTS, False: texts.ONLY_HONEST_TEXTS},
}

# The same for areas with every cat in them ("Felix is the only liar of all the cats")
EVERYONE_TEXTS = {
    True:  {True: texts.EVERYONE_ONLY_ME_LIAR_TEXTS, False: texts.EVERYONE_ONLY_ME_HONEST_TEXTS},
    False: {True: texts.EVERYONE_ONLY_LIAR_TEXTS, False: texts.EVERYONE_ONLY_HONEST_TEXTS},
}


def big_areas(grid, speaker):
    """The CountLiars areas with 2 or more cats, grouped by category. Empty categories are left out."""
    result = {}
    for category, options in CountLiars.candidate_areas(grid, speaker).items():
        big = [(area, text) for area, text in options if len(area) >= 2]
        if big:
            result[category] = big
    return result


class Only(Statement):
    """One cat is the only liar (or the only honest cat) in an area, e.g. 'Felix is the only liar in my row'.

    The cat can be the speaker itself: "I'm the only liar among my neighbors".
    """

    def __init__(self, speaker, area, area_text, target, is_liar):
        super().__init__(speaker)
        self.area = area            # list of cat indexes, 2 or more
        self.area_text = area_text  # e.g. "the cats in my row"
        self.target = target        # the cat that is the only one, always inside the area
        self.is_liar = is_liar      # True: the only liar, False: the only honest cat

    def evaluate(self, world, grid):
        """True if target is the only liar (or only honest cat) in the area."""
        # target has the type, everyone else in the area has the other type
        return all(world[i] == (self.is_liar if i == self.target else not self.is_liar) for i in self.area)

    def mentions(self):
        """The other cats this statement talks about."""
        return sorted(set(self.area + [self.target]) - {self.speaker})

    def key(self):
        """Same cats (in any order), same target and same type means the same claim."""
        return ("only", frozenset(self.area), self.target, self.is_liar)

    def set_text(self, grid):
        """Pick a sentence, the "me" version when the speaker is the target."""
        all_texts = EVERYONE_TEXTS if areas.is_everyone(grid, self.area) else TEXTS
        options = all_texts[self.target == self.speaker][self.is_liar]
        self.text = random.choice(options).format(name=get_cat(grid, self.target).name, area=self.area_text)

    @classmethod
    def random(cls, speaker, grid, world):
        """Pick a flavor and an area category by weight, then a fitting area and cat."""
        should_be_true = not world[speaker]
        areas_by_category = big_areas(grid, speaker)
        weights = {c: AREA_WEIGHTS[c] for c in areas_by_category}

        # try every flavor and category in weighted random order, use the first one that fits
        for flavor in weighted_order(FLAVOR_WEIGHTS):
            for category in weighted_order(weights):
                options = []
                for area, text in areas_by_category[category]:
                    if flavor == "me":
                        targets = [speaker] if speaker in area else []   # only areas the speaker is in
                    else:
                        targets = [i for i in area if i != speaker]
                    for target in targets:
                        for is_liar in (True, False):
                            options.append((area, text, target, is_liar))

                valid = [o for o in options if cls(speaker, *o).evaluate(world, grid) == should_be_true]
                if valid:
                    statement = cls(speaker, *random.choice(valid))
                    statement.set_text(grid)
                    return statement

        return None   # nothing fits, e.g. an honest cat in a grid where no area has exactly one liar or one honest cat
