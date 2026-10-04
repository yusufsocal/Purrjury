"""Tests for checker.py.

Expected API:
    find_solutions(grid) -> list of worlds (each a list or tuple of booleans, True = liar)
    that are consistent with every cat's statement. Cats whose statement is None are skipped.

These tests are skipped until checker.py exists.
"""
import pytest

from generator import assign_statements
from statements.base import Statement
from world import make_world
from tests.helpers import all_cats, fixed_grid, is_honest, is_liar, random_grid

checker = pytest.importorskip("checker")


def solutions_as_sets(grid):
    """Turn each solution into a set of liar indexes, so order and list/tuple don't matter."""
    return {frozenset(i for i, is_liar in enumerate(world) if is_liar)
            for world in checker.find_solutions(grid)}


def give(grid, index, statement):
    statement.set_text(grid)
    grid[index // len(grid[0])][index % len(grid[0])].statement = statement


class AtLeastOneLiar(Statement):
    """Test-only statement: "There is at least one liar among us." """

    def evaluate(self, world, grid):
        return any(world)

    def key(self):
        return ("at_least_one_liar_among_us",)

    def set_text(self, grid):
        self.text = "There is at least one liar among us."

    @classmethod
    def random(cls, speaker, grid, world):
        return None


def build_symmetric_puzzle():
    """2x2 grid, cats A B / C D. Only B is a liar.

    A: "B is a liar"     (true,  A honest)
    B: "C is a liar"     (false, B lies)
    C: "A is honest"     (true,  C honest)
    D: "C is honest"     (true,  D honest)
    """
    grid = fixed_grid(2, 2)
    give(grid, 0, is_liar(0, 1))
    give(grid, 1, is_liar(1, 2))
    give(grid, 2, is_honest(2, 0))
    give(grid, 3, is_honest(3, 2))
    return grid


def test_returns_a_list():
    assert isinstance(checker.find_solutions(build_symmetric_puzzle()), list)


def test_symmetric_puzzle_has_exactly_two_solutions():
    """With only 'X is a liar' / 'X is honest', flipping every cat also works, so there are two answers:
    only B lies, or everyone except B lies."""
    assert solutions_as_sets(build_symmetric_puzzle()) == {frozenset({1}), frozenset({0, 2, 3})}


def test_symmetry_broken_gives_unique_solution():
    """A now says "there is at least one liar" instead. In the flipped world A would be a liar
    saying something true, so only the real answer survives."""
    grid = build_symmetric_puzzle()
    give(grid, 0, AtLeastOneLiar(0))
    assert solutions_as_sets(grid) == {frozenset({1})}


def test_contradiction_gives_no_solution():
    """A says "B is a liar", B says "A is honest". If A is honest, B lies, so A is a liar. Contradiction.
    The same happens if A lies. No world works."""
    grid = fixed_grid(1, 2)
    give(grid, 0, is_liar(0, 1))
    give(grid, 1, is_honest(1, 0))
    assert solutions_as_sets(grid) == set()


def test_cat_without_statement_is_skipped():
    """C says nothing, so nothing pins down C itself: both of its types stay possible."""
    grid = fixed_grid(1, 3)
    give(grid, 0, is_liar(0, 1))
    give(grid, 1, is_liar(1, 0))
    # cat 2 (C) has no statement
    solutions = solutions_as_sets(grid)
    assert frozenset({1}) in solutions and frozenset({1, 2}) in solutions


def test_every_solution_is_consistent():
    for _ in range(50):
        grid = random_grid(3, 3)
        assign_statements(grid, make_world(9, 3))
        for world in checker.find_solutions(grid):
            for cat in all_cats(grid):
                assert cat.statement.evaluate(world, grid) == (not world[cat.index])


@pytest.mark.parametrize("rows, cols, n_liars", [(2, 2, 1), (2, 3, 2), (3, 3, 3), (3, 4, 4)])
def test_real_world_is_always_a_solution(rows, cols, n_liars):
    """The world a puzzle was generated from must always be among the checker's answers."""
    for _ in range(50):
        grid = random_grid(rows, cols)
        world = make_world(rows * cols, n_liars)
        assign_statements(grid, world)
        assert frozenset(i for i, is_liar in enumerate(world) if is_liar) in solutions_as_sets(grid)


def test_finds_all_worlds_when_nobody_speaks():
    grid = fixed_grid(1, 3)
    assert len(checker.find_solutions(grid)) == 2 ** 3
