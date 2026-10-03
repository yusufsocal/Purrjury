"""Tests for areas.py on a hand-made 3x3 grid:

    0 1 2
    3 4 5
    6 7 8
"""
import pytest

import areas
from cat import Cat
from grid import get_cat
from tests.helpers import fixed_grid

G = fixed_grid(3, 3)
G23 = fixed_grid(2, 3)


def cat(i, grid=G):
    return get_cat(grid, i)


@pytest.mark.parametrize("func, args, expected", [
    (areas.everyone, (G,), list(range(9))),
    (areas.row, (G, 1), [3, 4, 5]),
    (areas.column, (G, 2), [2, 5, 8]),
    (areas.column, (G23, 1), [1, 4]),
    (areas.corners, (G,), [0, 2, 6, 8]),
    (areas.corners, (G23,), [0, 2, 3, 5]),
    (areas.edges, (G,), [0, 1, 2, 3, 5, 6, 7, 8]),
    (areas.edges, (G23,), [0, 1, 2, 3, 4, 5]),
    (areas.middle, (G,), [4]),
    (areas.middle, (G23,), []),
    (areas.left_of, (G, cat(5)), [3, 4]),
    (areas.left_of, (G, cat(0)), []),
    (areas.right_of, (G, cat(3)), [4, 5]),
    (areas.right_of, (G, cat(2)), []),
    (areas.above, (G, cat(7)), [1, 4]),
    (areas.above, (G, cat(1)), []),
    (areas.below, (G, cat(1)), [4, 7]),
    (areas.below, (G, cat(8)), []),
    (areas.directly_left, (G, cat(4)), [3]),
    (areas.directly_left, (G, cat(3)), []),
    (areas.directly_right, (G, cat(4)), [5]),
    (areas.directly_right, (G, cat(5)), []),
    (areas.directly_above, (G, cat(4)), [1]),
    (areas.directly_above, (G, cat(1)), []),
    (areas.directly_below, (G, cat(4)), [7]),
    (areas.directly_below, (G, cat(7)), []),
    (areas.neighbors, (G, cat(4)), [1, 3, 5, 7]),
    (areas.neighbors, (G, cat(0)), [1, 3]),
    (areas.neighbors, (G, cat(5)), [2, 4, 8]),
    (areas.neighbors_with_diagonals, (G, cat(4)), [0, 1, 2, 3, 5, 6, 7, 8]),
    (areas.neighbors_with_diagonals, (G, cat(0)), [1, 3, 4]),
])
def test_area(func, args, expected):
    result = func(*args)
    assert isinstance(result, list)
    assert sorted(result) == expected


def test_with_color():
    grid = [[Cat("A", 0, 0, 0, "black"), Cat("B", 0, 1, 1, "tabby")],
            [Cat("C", 1, 0, 2, "black"), Cat("D", 1, 1, 3, "tabby")]]
    assert sorted(areas.with_color(grid, "black")) == [0, 2]
    assert areas.with_color(grid, "ginger") == []
