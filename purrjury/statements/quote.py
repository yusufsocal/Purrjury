import random

from purrjury.statements.base import Statement
from purrjury.board.grid import get_cat
from purrjury.utils import weighted_order
from purrjury import texts


# How often each kind of quote is picked, relative to each other
#   self:             "If you asked me, I'd say Felix is a liar."   (always reveals Felix)
#   about_me:         "Felix would say I'm a liar."                 (always reveals Felix)
#   about_themselves: "Felix would say they're a liar."             (always reveals the speaker)
# Quotes about three different cats ("Felix would say Bagel is a liar") were dropped: they mean the same
# as the pair clues "Felix and Bagel are opposites / the same type", just much harder to read.
FLAVOR_WEIGHTS = {"self": 2, "about_me": 2, "about_themselves": 1}

# Each flavor's texts: (texts where the quote says "liar", texts where it says "honest")
TEXTS = {
    "self":             (texts.QUOTE_SELF_LIAR_TEXTS, texts.QUOTE_SELF_HONEST_TEXTS),
    "about_me":         (texts.QUOTE_ABOUT_ME_LIAR_TEXTS, texts.QUOTE_ABOUT_ME_HONEST_TEXTS),
    "about_themselves": (texts.QUOTE_ABOUT_THEMSELVES_LIAR_TEXTS, texts.QUOTE_ABOUT_THEMSELVES_HONEST_TEXTS),
}


class Quote(Statement):
    """What a cat would say about a cat, e.g. 'Felix would say Bagel is a liar'.

    The quoted cat can be the speaker itself, or the quote can be about the speaker or
    about the quoted cat itself. That gives the three flavors in FLAVOR_WEIGHTS.
    """

    def __init__(self, speaker, quoted, target, says_liar):
        super().__init__(speaker)
        self.quoted = quoted        # index of the cat being quoted (may be the speaker)
        self.target = target        # index of the cat the quote is about
        self.says_liar = says_liar  # True: the quote is "<target> is a liar", False: "<target> is honest"

    def flavor(self):
        """Which of the four kinds of quote this is."""
        if self.quoted == self.speaker:
            return "self"
        if self.target == self.speaker:
            return "about_me"
        if self.target == self.quoted:
            return "about_themselves"
        return "others"

    def evaluate(self, world, grid):
        """True if the quoted cat really would say this.

        An honest cat says it only if it's true, a liar says it only if it's false.
        """
        quote_is_true = world[self.target] == self.says_liar
        quoted_is_honest = not world[self.quoted]
        return quote_is_true == quoted_is_honest

    def mentions(self):
        """The other cats this statement talks about."""
        return sorted(set([self.quoted, self.target]) - {self.speaker})

    def key(self):
        """Same quoted cat, same target and same claim means the same statement."""
        return ("quote", self.quoted, self.target, self.says_liar)

    def set_text(self, grid):
        """Pick a sentence for the flavor, the liar or honest version."""
        liar_texts, honest_texts = TEXTS[self.flavor()]
        options = liar_texts if self.says_liar else honest_texts
        self.text = random.choice(options).format(
            quoted=get_cat(grid, self.quoted).name,
            target=get_cat(grid, self.target).name,
        )

    @classmethod
    def random(cls, speaker, grid, world):
        """Pick a flavor by weight, then a quote that is true for an honest cat and false for a liar."""
        should_be_true = not world[speaker]
        others = [c for c in range(len(world)) if c != speaker]

        # try the flavors in weighted random order, use the first one that has a fitting quote
        for flavor in weighted_order(FLAVOR_WEIGHTS):
            if flavor == "self":
                pairs = [(speaker, t) for t in others]
            elif flavor == "about_me":
                pairs = [(q, speaker) for q in others]
            else:   # about_themselves
                pairs = [(q, q) for q in others]

            # every (quoted, target) pair can say "liar" or "honest"
            options = [(q, t, says_liar) for q, t in pairs for says_liar in (True, False)]
            valid = [o for o in options if cls(speaker, *o).evaluate(world, grid) == should_be_true]
            if valid:
                statement = cls(speaker, *random.choice(valid))
                statement.set_text(grid)
                return statement

        return None   # shouldn't happen, "self" always has a fitting quote
