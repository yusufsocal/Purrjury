"""Tests for solver.py: the human-style step solver and the difficulty rating."""
import random

import pytest

from purrjury.engine.generator import generate_puzzle
from purrjury.engine.solver import levels_for, rate, solve


def step(level, options):
    """A fake step, rate() only looks at the level and the number of options."""
    return (level, [0], {0: True}, options)


@pytest.mark.parametrize("steps, rows, cols, expected", [
    ([step(1, 3), step(1, 1)], 3, 3, "easy"),
    ([step(1, 2), step(1, 1)], 3, 3, "easy"),
    ([step(1, 1), step(1, 4)], 3, 3, "medium"),
    ([step(1, 3), step(2, 1)], 3, 3, "hard"),
    ([step(1, 1), step(2, 1)], 3, 3, "hard"),
    ([step(1, 3), step(1, 1)], 4, 4, "medium"),
    ([step(1, 1), step(1, 2)], 4, 4, "hard"),
    ([step(1, 3), step(2, 2)], 4, 4, "tricky"),
])
def test_rate(steps, rows, cols, expected):
    assert rate(steps, rows, cols) == expected


def test_rate_stuck_puzzle_is_none():
    assert rate(None, 3, 3) is None


@pytest.mark.parametrize("size", [3, 4])
def test_solver_finds_the_real_answer(size):
    """Whenever the solver gets through a puzzle, every cat it found matches the real world."""
    for seed in range(5):
        random.seed(seed)
        result = generate_puzzle(size, size, size * size // 3)
        if result is None:
            continue
        grid, world = result
        steps = solve(grid)
        if steps is None:
            continue   # stuck puzzles are allowed, they just get no rating
        known = {}
        for _level, _speakers, found, options in steps:
            assert options >= 1
            known.update(found)
        assert known == {i: world[i] for i in range(size * size)}


def test_levels_for_shifts_up_on_big_grids():
    assert levels_for(3, 3) == ["easy", "medium", "hard"]
    assert levels_for(4, 4) == ["medium", "hard", "tricky"]
