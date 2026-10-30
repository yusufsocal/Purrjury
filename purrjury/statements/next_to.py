import random

from purrjury.statements.base import Statement
from purrjury.board import areas
from purrjury.board.grid import get_cat
from purrjury import texts


def one_group(cats, grid):
    """True if these cats are all connected: you can walk from any of them to any other,
    stepping only up, down, left or right, and only on cats in the group."""
    group = set(cats)
    start = next(iter(group))
    seen = {start}
    todo = [start]
    while todo:
        cat = todo.pop()
        for neighbor in areas.neighbors(grid, get_cat(grid, cat)):
            if neighbor in group and neighbor not in seen:
                seen.add(neighbor)
                todo.append(neighbor)
    return seen == group


def next_to_areas(grid, speaker):
    """Every row and column, plus the whole grid. Returns [(indexes, line text), ...].

    The line text starts the sentence ("Row 2 has ..."), the whole grid has None and gets its own texts.
    """
    me = get_cat(grid, speaker)
    result = []
    for r in range(len(grid)):
        result.append((areas.row(grid, r), "My row" if r == me.row else f"Row {r + 1}"))
    for c in range(len(grid[0])):
        result.append((areas.column(grid, c), "My column" if c == me.column else f"Column {c + 1}"))
    result.append((areas.everyone(grid), None))
    return result


class NextToEachOther(Statement):
    """The liars (or honest cats) of an area are 2 or more and all next to each other.

    e.g. 'Row 2 has 2 or more liars, all next to each other.' In a row or column that means
    side by side; on the whole grid it means one connected group.
    """

    def __init__(self, speaker, area, line_text, liars):
        super().__init__(speaker)
        self.area = area            # list of cat indexes: a row, a column or every cat
        self.line_text = line_text  # "Row 2", "My column", ... or None for the whole grid
        self.liars = liars          # True: about the liars, False: about the honest cats

    def evaluate(self, world, grid):
        """True if the area has 2 or more of the type, all in one group."""
        members = [i for i in self.area if world[i] == self.liars]
        return len(members) >= 2 and one_group(members, grid)

    def mentions(self):
        """The other cats this statement talks about."""
        return sorted(set(self.area) - {self.speaker})

    def key(self):
        """Same cats (in any order) and same type means the same claim."""
        return ("next_to", frozenset(self.area), self.liars)

    def kind(self):
        return "next_to"

    def set_text(self, grid):
        """The line version ("Row 2 has ...") or the whole-grid version."""
        if self.line_text is None:
            options = texts.EVERYONE_NEXT_TO_LIARS_TEXTS if self.liars else texts.EVERYONE_NEXT_TO_HONEST_TEXTS
        else:
            options = texts.NEXT_TO_LIARS_TEXTS if self.liars else texts.NEXT_TO_HONEST_TEXTS
        self.text = random.choice(options).format(line=self.line_text)

    @classmethod
    def random(cls, speaker, grid, world):
        """Pick a line (or the whole grid) and a type that fit the speaker. None if nothing fits."""
        should_be_true = not world[speaker]
        options = [(area, text, liars) for area, text in next_to_areas(grid, speaker) for liars in (True, False)]
        valid = [o for o in options if cls(speaker, *o).evaluate(world, grid) == should_be_true]
        if not valid:
            return None
        statement = cls(speaker, *random.choice(valid))
        statement.set_text(grid)
        return statement
