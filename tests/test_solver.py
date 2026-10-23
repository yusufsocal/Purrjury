"""Tests for solver.py: the human-style step solver and the difficulty rating."""
import random

import pytest

from purrjury.engine.generator import generate_puzzle
from purrjury.engine.solver import levels_for, rate, revealed_cat, solve, solved_before_two_clues


def step(level, options):
    """A fake step, rate() only looks at the level and the number of options."""
    return (level, [0], {0: True}, options)


@pytest.mark.parametrize("steps, rows, cols, expected", [
    ([step(1, 1), step(1, 4)], 3, 3, "easy"),     # one opener: easy, its cat gets revealed
    ([step(1, 3), step(1, 1)], 3, 3, "medium"),   # several openers to find
    ([step(1, 2), step(1, 1)], 3, 3, "medium"),
    ([step(1, 3), step(2, 1)], 3, 3, "hard"),
    ([step(1, 1), step(2, 1)], 3, 3, "hard"),
    ([step(1, 1), step(1, 3)], 4, 4, "medium"),
    ([step(1, 3), step(1, 2)], 4, 4, "hard"),
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


def test_revealed_cat_prefers_a_liar():
    assert revealed_cat([(1, [4], {2: False, 5: True}, 1)]) == 5
    assert revealed_cat([(1, [4], {6: False, 2: False}, 1)]) == 2   # no liar found: the first honest one


def test_solved_before_two_clues():
    steps = [(1, [0], {0: True, 1: False}, 1), (1, [1], {2: True}, 1), (2, [2, 3], {3: False}, 1)]
    assert solved_before_two_clues(steps, 9) == 3 / 9   # 3 cats known when the 2-clue step comes
    assert solved_before_two_clues(steps[:2], 9) is None
    assert solved_before_two_clues([(2, [0, 1], {0: True}, 1)], 9) == 0
