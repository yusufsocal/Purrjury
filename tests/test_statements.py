import pytest

from statements import ALL_STATEMENTS, IsHonest, IsLiar
from world import make_world
from tests.helpers import fits, fixed_grid, random_grid


def test_is_liar_evaluate():
    world = [False, True, False]
    assert IsLiar(0, 1).evaluate(world, None) is True
    assert IsLiar(0, 2).evaluate(world, None) is False


def test_is_honest_evaluate():
    world = [False, True, False]
    assert IsHonest(0, 2).evaluate(world, None) is True
    assert IsHonest(0, 1).evaluate(world, None) is False


@pytest.mark.parametrize("statement_type", ALL_STATEMENTS)
def test_random_statement_fits_speaker(statement_type):
    """For every statement type: random() must give a statement that fits the speaker, or None."""
    for _ in range(300):
        grid = random_grid(3, 3)
        world = make_world(9, 3)
        for speaker in range(9):
            statement = statement_type.random(speaker, grid, world)
            if statement is None:
                continue
            assert statement.speaker == speaker
            assert fits(statement, world, grid)


@pytest.mark.parametrize("statement_type", [IsLiar, IsHonest])
def test_targeted_statements_never_target_speaker(statement_type):
    for _ in range(300):
        grid = random_grid(3, 3)
        world = make_world(9, 3)
        for speaker in range(9):
            statement = statement_type.random(speaker, grid, world)
            if statement is not None:
                assert statement.target != speaker


@pytest.mark.parametrize("statement_type", ALL_STATEMENTS)
def test_random_statement_has_text(statement_type):
    grid = random_grid(3, 3)
    world = make_world(9, 3)
    for speaker in range(9):
        statement = statement_type.random(speaker, grid, world)
        if statement is not None:
            assert isinstance(statement.to_text(), str)
            assert statement.to_text() != ""


def test_text_mentions_target_name():
    grid = fixed_grid(2, 2)
    statement = IsLiar(0, 3)
    statement.set_text(grid)
    assert "D" in statement.to_text()


def test_to_text_before_set_text_raises():
    with pytest.raises(ValueError):
        IsLiar(0, 1).to_text()


@pytest.mark.parametrize("statement_type", [IsLiar, IsHonest])
def test_targets_are_real_indexes_spread_over_the_grid(statement_type):
    """Targets must be cat indexes (ints, not True/False), and over many runs every cat gets targeted."""
    seen = set()
    for _ in range(300):
        grid = random_grid(3, 3)
        world = make_world(9, 3)
        for speaker in range(9):
            statement = statement_type.random(speaker, grid, world)
            if statement is not None:
                assert type(statement.target) is int, f"target should be an index, got {statement.target!r}"
                assert 0 <= statement.target < 9
                seen.add(statement.target)
    assert seen == set(range(9)), f"only these cats were ever targeted: {sorted(seen)}"
