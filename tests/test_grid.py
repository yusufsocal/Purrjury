import pytest

from grid import get_cat
from tests.helpers import all_cats, fixed_grid, random_grid


@pytest.mark.parametrize("rows, cols", [(2, 3), (3, 2), (3, 3), (4, 5), (5, 5)])
def test_make_grid_shape_and_positions(rows, cols):
    for _ in range(50):
        grid = random_grid(rows, cols)
        assert len(grid) == rows
        assert all(len(row) == cols for row in grid)
        for r, row in enumerate(grid):
            for c, cat in enumerate(row):
                assert cat.row == r
                assert cat.column == c
                assert cat.index == r * cols + c
                assert cat.statement is None


@pytest.mark.parametrize("rows, cols", [(2, 3), (5, 5)])
def test_make_grid_names_unique_and_alphabetical(rows, cols):
    for _ in range(50):
        names = [cat.name for cat in all_cats(random_grid(rows, cols))]
        assert len(set(names)) == len(names)
        first_letters = [name[0] for name in names]
        assert first_letters == sorted(first_letters)
        assert len(set(first_letters)) == len(first_letters)   # one cat per letter


def test_get_cat_round_trip():
    grid = fixed_grid(3, 4)
    for cat in all_cats(grid):
        assert get_cat(grid, cat.index) is cat
