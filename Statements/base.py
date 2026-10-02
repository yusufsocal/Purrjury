from abc import ABC, abstractmethod


class Statement(ABC):
    """Base class for everything a cat can say. Every statement type inherits from this."""

    def __init__(self, speaker):
        self.speaker = speaker   # index of the cat saying this

    @abstractmethod
    def evaluate(self, world, grid):
        """Return True if this statement is true in the given world.

        world: list of booleans, world[i] is True if cat i is a liar
        grid:  the cat grid, for looking up names, neighbors, rows, etc.
        """

    @abstractmethod
    def set_text(self, grid):
        """Set the sentence the player sees, e.g. "Dusty is a liar"."""

    def to_text(self):
        """Return the text set in set_text"""

    @classmethod
    @abstractmethod
    def random(cls, speaker, grid, world):
        """Create a random statement of this type for the given speaker."""