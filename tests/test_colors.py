"""Tests for cat colors.

Expected API:
    colors.COLORS                -> list of color names
    grid.decide_colors(n_cats)   -> shuffled list of n_cats colors, every color used 2 to 4 times
    grid.make_grid(...)          -> every Cat gets a .color from that list

Skipped until decide_colors exists.
"""
from collections import Counter

import pytest

import grid as grid_module
from tests.helpers import all_cats, random_grid

if not hasattr(grid_module, "decide_colors"):
    pytest.skip("decide_colors not written yet", allow_module_level=True)

from colors import COLORS
from grid import decide_colors


@pytest.mark.parametrize("n_cats", range(2, 26))
def test_make_colors_sizes(n_cats):
    for _ in range(100):
        colors = decide_colors(n_cats)
        assert len(colors) == n_cats
        for color, count in Counter(colors).items():
            assert color in COLORS
            assert 2 <= count <= 4, f"{color} appears {count} times"


def test_make_colors_is_shuffled():
    """Colors should be scattered, not always grouped together in the same order."""
    results = {tuple(decide_colors(9)) for _ in range(30)}
    assert len(results) > 1


def test_make_colors_uses_varied_colors():
    used = set()
    for _ in range(100):
        used.update(decide_colors(9))
    assert len(used) > 4


def test_colors_list_is_big_enough_for_5x5():
    """With groups of at least 2, a 25-cat grid can need up to 12 different colors."""
    assert len(set(COLORS)) >= 12


@pytest.mark.parametrize("rows, cols", [(2, 2), (2, 3), (3, 3), (4, 5), (5, 5)])
def test_make_grid_gives_every_cat_a_valid_color(rows, cols):
    for _ in range(30):
        cats = all_cats(random_grid(rows, cols))
        for cat in cats:
            assert cat.color in COLORS
        for color, count in Counter(cat.color for cat in cats).items():
            assert 2 <= count <= 4, f"{color} appears {count} times"
