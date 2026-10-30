import random

from purrjury.statements.base import Statement
from purrjury.board.grid import get_cat
from purrjury import texts


class Hearsay(Statement):
    """What a hidden cat said, told by another cat, e.g. 'Felix told me: "Bagel is a liar."'

    The hidden cat only meows, so its real statement can't be read. An honest cat
    repeats it correctly, a liar makes up something else.

    This one is special: it isn't in ALL_STATEMENTS, the generator adds it
    on top of a finished puzzle (see add_hidden_cats in generator.py).
    """

    def __init__(self, speaker, about, quote):
        super().__init__(speaker)
        self.about = about   # index of the hidden cat
        self.quote = quote   # a statement with the hidden cat as speaker, what it supposedly said

    def evaluate(self, world, grid):
        """True if the hidden cat really said this. Doesn't depend on who is lying."""
        return get_cat(grid, self.about).statement.key() == self.quote.key()

    def fits(self, world, grid):
        """What the player can work out from this.

        If the speaker is honest, the hidden cat really said the quote, so the quote
        has to fit the hidden cat. If the speaker is a liar, the hidden cat said
        something else that we never see, so there's nothing to check.
        """
        speaker_is_liar = world[self.speaker]
        return speaker_is_liar or self.quote.fits(world, grid)   # the quote's speaker is the hidden cat

    def mentions(self):
        """The other cats this statement talks about."""
        return sorted(set([self.about] + self.quote.mentions()) - {self.speaker})

    def key(self):
        """Same hidden cat and same quote means the same claim."""
        return ("hearsay", self.about, self.quote.key())

    def set_text(self, grid):
        """Pick a sentence and put the quote inside it."""
        self.text = random.choice(texts.HEARSAY_TEXTS).format(
            name=get_cat(grid, self.about).name,
            quote=self.quote.to_text(),
        )

    @classmethod
    def random(cls, speaker, grid, world, about=None, statement_types=(), tries=20):
        """Tell what the hidden cat `about` said: the truth if the speaker is honest, a made-up quote if not.

        statement_types: the types a made-up quote can be, usually ALL_STATEMENTS.
        Returns None if no made-up quote could be found.
        """
        real = get_cat(grid, about).statement
        if not world[speaker]:
            statement = cls(speaker, about, real)   # honest: repeat it exactly
            statement.set_text(grid)
            return statement

        # liar: make up a quote the hidden cat didn't say. Half the time it's one that
        # would fit the hidden cat if it were the other type, so it isn't always easy to spot
        for _ in range(tries):
            fake_world = list(world)
            if random.random() < 0.5:
                fake_world[about] = not fake_world[about]
            quote = random.choice(list(statement_types)).random(about, grid, fake_world)
            if quote is not None and quote.key() != real.key():
                statement = cls(speaker, about, quote)
                statement.set_text(grid)
                return statement
        return None
