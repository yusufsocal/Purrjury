import pytest

from generator import assign_statements
from world import make_world
from tests.helpers import all_cats, fits, random_grid


@pytest.mark.parametrize("rows, cols, n_liars", [(2, 2, 1), (2, 3, 2), (3, 3, 3), (5, 5, 8)])
def test_every_cat_gets_a_fitting_statement(rows, cols, n_liars):
    for _ in range(100):
        grid = random_grid(rows, cols)
        world = make_world(rows * cols, n_liars)
        assign_statements(grid, world)
        for cat in all_cats(grid):
            assert cat.statement is not None
            assert cat.statement.speaker == cat.index
            assert fits(cat.statement, world, grid)


@pytest.mark.parametrize("rows, cols", [(2, 2), (3, 3), (4, 4)])
def test_no_two_cats_say_the_same_thing(rows, cols):
    for _ in range(50):
        grid = random_grid(rows, cols)
        world = make_world(rows * cols, (rows * cols) // 3)
        assign_statements(grid, world)
        keys = [cat.statement.key() for cat in all_cats(grid)]
        assert len(keys) == len(set(keys))
