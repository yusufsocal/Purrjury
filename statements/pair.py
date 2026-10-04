import itertools
import random

from statements.base import Statement
from grid import get_cat
from utils import weighted_order
import texts


# Each relation takes two bools (a_liar, b_liar) and returns True if the statement holds.
# Remember: True means liar, like in world.
RELATIONS = {
    "same": lambda a, b: a == b,
    "different": lambda a, b: a != b,
    "at_least_one_liar": lambda a, b: a or b,
    "at_least_one_honest": lambda a, b: not a or not b,
    "both_liars": lambda a, b: a and b,
    "both_honest": lambda a, b: not a and not b,
    "if_a_honest_then_b": lambda a, b: a or not b,
    "a_honest_b_liar": lambda a, b: not a and b,
}

ORDERED = {"if_a_honest_then_b", "a_honest_b_liar"}

# How often each relation is picked, relative to each other
RELATION_WEIGHTS = {
    "same": 1,
    "different": 1,
    "at_least_one_liar": 1,
    "at_least_one_honest": 1,
    "both_liars": 1,
    "both_honest": 1,
    "if_a_honest_then_b": 1,
    "a_honest_b_liar": 1,
}

# Each relation's texts: (texts about two other cats, texts where the speaker is a)
TEXTS = {
    "same":                (texts.PAIR_SAME_TEXTS, texts.PAIR_SAME_ME_TEXTS),
    "different":           (texts.PAIR_DIFFERENT_TEXTS, texts.PAIR_DIFFERENT_ME_TEXTS),
    "at_least_one_liar":   (texts.PAIR_AT_LEAST_ONE_LIAR_TEXTS, texts.PAIR_AT_LEAST_ONE_LIAR_ME_TEXTS),
    "at_least_one_honest": (texts.PAIR_AT_LEAST_ONE_HONEST_TEXTS, texts.PAIR_AT_LEAST_ONE_HONEST_ME_TEXTS),
    "both_liars":          (texts.PAIR_BOTH_LIARS_TEXTS, texts.PAIR_BOTH_LIARS_ME_TEXTS),
    "both_honest":         (texts.PAIR_BOTH_HONEST_TEXTS, texts.PAIR_BOTH_HONEST_ME_TEXTS),
    "if_a_honest_then_b":  (texts.PAIR_IF_A_HONEST_THEN_B_TEXTS, texts.PAIR_IF_A_HONEST_THEN_B_ME_TEXTS),
    "a_honest_b_liar":     (texts.PAIR_A_HONEST_B_LIAR_TEXTS, texts.PAIR_A_HONEST_B_LIAR_ME_TEXTS),
}


class PairStatement(Statement):
    """A rule about two cats, e.g. 'Felix and Bagel are the same type' or 'Felix and I are the same type'.

    a can be the speaker itself; then the text says "I"/"me" instead of a name.
    """

    def __init__(self, speaker, a, b, relation):
        super().__init__(speaker)
        self.a = a                  # index of the first cat (may be the speaker)
        self.b = b                  # index of the second cat (never the speaker)
        self.relation = relation    # a key in RELATIONS

    def evaluate(self, world, grid):
        """Check the relation on the two cats."""
        return RELATIONS[self.relation](world[self.a], world[self.b])

    def key(self):
        """Same relation on the same two cats means the same claim. Order only matters for ordered relations."""
        if self.relation in ORDERED:
            return ("pair", self.relation, self.a, self.b)
        return ("pair", self.relation, frozenset((self.a, self.b)))   # order doesn't matter

    def set_text(self, grid):
        """Pick a sentence for the relation, the "me" version when the speaker is a."""
        options = TEXTS[self.relation][self.a == self.speaker] # second bracket is 0 if false, 1 if true

        self.text = random.choice(options).format(
                    a=get_cat(grid, self.a).name,
                    b=get_cat(grid, self.b).name,
                )

    @classmethod
    def random(cls, speaker, grid, world):
        """Pick a relation by weight, then a pair of cats that makes it true for an honest cat and false for a liar."""
        should_be_true = not world[speaker]
        others = [c for c in range(len(world)) if c != speaker]

        # Try the relations in weighted random order, and use the first one that has a fitting pair
        for relation in weighted_order(RELATION_WEIGHTS):
            if relation in ORDERED:
                pairs = list(itertools.permutations(others, 2))   # (Felix, Bagel) and (Bagel, Felix)
            else:
                pairs = list(itertools.combinations(others, 2))   # only (Felix, Bagel)
            pairs += [(speaker, b) for b in others]               # "Felix and I ..." pairs

            valid = [(a, b) for a, b in pairs
                     if cls(speaker, a, b, relation).evaluate(world, grid) == should_be_true]
            if valid:
                a, b = random.choice(valid)
                statement = cls(speaker, a, b, relation)
                statement.set_text(grid)
                return statement

        return None   # no relation fits (shouldn't happen, opposite relations always cover each other)
