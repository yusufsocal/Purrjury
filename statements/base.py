from abc import ABC, abstractmethod


class Statement(ABC):
    """Base class for everything a cat can say. Every statement type inherits from this."""

    def __init__(self, speaker):
        self.speaker = speaker   # index of the cat saying this
        self.text = None         # the sentence, filled in by set_text

    @abstractmethod
    def evaluate(self, world, grid):
        """Return True if this statement is true in the given world.

        world: list of booleans, world[i] is True if cat i is a liar
        grid:  the cat grid, for looking up names, neighbors, rows, etc.
        """

    @abstractmethod
    def set_text(self, grid):
        """Pick and store the sentence the player sees, e.g. "Dusty is a liar"."""

    @abstractmethod
    def key(self):
        """Return a hashable value that is the same for two statements that claim the same thing.

        Used to stop two cats from saying the same thing in one puzzle, even when the
        texts differ ("the cats in my row" and "the cats in row 2" can be the same cats).
        """

    def to_text(self):
        """Return the sentence stored by set_text. Same for every statement type, so it lives here."""
        if self.text is None:
            raise ValueError("set_text(grid) must be called before to_text()")
        return self.text

    @classmethod
    @abstractmethod
    def random(cls, speaker, grid, world):
        """Create a random statement of this type that fits the speaker, or None if impossible.

        Honest speaker: the statement must be true in world.
        Lying speaker: the statement must be false in world.
        """
