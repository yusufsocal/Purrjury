"""Tests for generate_puzzle in generator.py.

Expected API:
    generate_puzzle(rows, cols, n_liars, max_attempts=1000)
        -> (grid, world)  a puzzle where the checker finds exactly one solution: world
        -> None           if no unique puzzle was found within max_attempts

Each attempt builds a new grid and world and calls assign_statements once.

The statement types are swapped out with monkeypatch, so these tests keep working
no matter what you add to ALL_STATEMENTS later.
"""
import pytest

import generator
from checker import find_solutions
from statements import IsHonest, IsLiar
from tests.helpers import TotalLiars, all_cats, fits


def liar_set(world):
    return frozenset(i for i, is_liar in enumerate(world) if is_liar)


@pytest.fixture
def with_symmetry_breaker(monkeypatch):
    """Statement types that can actually produce unique puzzles."""
    monkeypatch.setattr(generator, "ALL_STATEMENTS", [IsLiar, IsHonest, TotalLiars])


@pytest.fixture
def only_mirror_statements(monkeypatch):
    """Only IsLiar/IsHonest: every puzzle has a mirror solution, so none are ever unique."""
    monkeypatch.setattr(generator, "ALL_STATEMENTS", [IsLiar, IsHonest])


@pytest.mark.parametrize("rows, cols, n_liars", [(2, 2, 1), (2, 3, 2), (3, 3, 3), (3, 3, 4)])
def test_returns_a_unique_puzzle(with_symmetry_breaker, rows, cols, n_liars):
    for _ in range(10):
        result = generator.generate_puzzle(rows, cols, n_liars)
        assert result is not None, "should find a unique puzzle when a symmetry-breaking statement exists"
        grid, world = result

        # Shape and world
        assert len(grid) == rows and all(len(row) == cols for row in grid)
        assert len(world) == rows * cols
        assert sum(world) == n_liars

        # Every cat has a statement that fits it
        for cat in all_cats(grid):
            assert cat.statement is not None
            assert fits(cat.statement, world, grid)

        # The checker finds exactly one solution, and it is the returned world
        solutions = find_solutions(grid)
        assert len(solutions) == 1
        assert liar_set(solutions[0]) == liar_set(world)


def test_returns_none_when_no_unique_puzzle_exists(only_mirror_statements):
    assert generator.generate_puzzle(2, 3, 2, max_attempts=30) is None


def test_respects_max_attempts(only_mirror_statements, monkeypatch):
    """With max_attempts=7 and no possible unique puzzle, it should try exactly 7 times."""
    calls = []
    real_assign = generator.assign_statements

    def counting_assign(grid, world):
        calls.append(1)
        return real_assign(grid, world)

    monkeypatch.setattr(generator, "assign_statements", counting_assign)
    generator.generate_puzzle(2, 2, 1, max_attempts=7)
    assert len(calls) == 7


def test_puzzles_differ_between_calls(with_symmetry_breaker):
    """Two calls should (almost always) give different puzzles."""
    texts = set()
    for _ in range(5):
        grid, _world = generator.generate_puzzle(3, 3, 3)
        texts.add(tuple(cat.statement.to_text() for cat in all_cats(grid)))
    assert len(texts) > 1
