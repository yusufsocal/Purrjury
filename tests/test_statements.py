import pytest

from statements import ALL_STATEMENTS, CountLiars, SameType
from world import make_world
from tests.helpers import fits, fixed_grid, is_liar, random_grid


# --- CountLiars.evaluate ---

def test_count_liars_exactly():
    world = [True, False, True, False]
    assert CountLiars(0, [0, 1, 2], "", "exactly", 2).evaluate(world, None) is True
    assert CountLiars(0, [0, 1, 2], "", "exactly", 1).evaluate(world, None) is False
    assert CountLiars(0, [1, 3], "", "exactly", 0).evaluate(world, None) is True


def test_count_liars_at_least():
    world = [True, False, True, False]
    assert CountLiars(0, [0, 1, 2], "", "at_least", 1).evaluate(world, None) is True
    assert CountLiars(0, [0, 1, 2], "", "at_least", 2).evaluate(world, None) is True
    assert CountLiars(0, [0, 1, 2], "", "at_least", 3).evaluate(world, None) is False


def test_single_cat_versions():
    world = [False, True, False]
    assert is_liar(0, 1).evaluate(world, None) is True
    assert is_liar(0, 2).evaluate(world, None) is False


def test_same_type_evaluate():
    world = [True, False, True, False]
    assert SameType(1, 0, 2).evaluate(world, None) is True
    assert SameType(1, 0, 3).evaluate(world, None) is False


# --- random() for every statement type ---

@pytest.mark.parametrize("statement_type", ALL_STATEMENTS)
@pytest.mark.parametrize("rows, cols", [(2, 2), (3, 3), (4, 5)])
def test_random_statement_fits_speaker(statement_type, rows, cols):
    """random() must give a statement that fits the speaker, or None."""
    for _ in range(100):
        grid = random_grid(rows, cols)
        world = make_world(rows * cols, (rows * cols) // 3)
        for speaker in range(rows * cols):
            statement = statement_type.random(speaker, grid, world)
            if statement is None:
                continue
            assert statement.speaker == speaker
            assert fits(statement, world, grid)


@pytest.mark.parametrize("statement_type", ALL_STATEMENTS)
def test_random_statement_has_text(statement_type):
    for _ in range(50):
        grid = random_grid(3, 3)
        world = make_world(9, 3)
        for speaker in range(9):
            statement = statement_type.random(speaker, grid, world)
            if statement is not None:
                text = statement.to_text()
                assert isinstance(text, str) and text != ""
                assert "{" not in text, f"leftover placeholder in: {text}"


def test_count_liars_areas_are_real_indexes():
    """Areas must be lists of real cat indexes (ints, not True/False), never empty."""
    for _ in range(200):
        grid = random_grid(3, 3)
        world = make_world(9, 3)
        for speaker in range(9):
            statement = CountLiars.random(speaker, grid, world)
            assert statement.area, "area should never be empty"
            for i in statement.area:
                assert type(i) is int and 0 <= i < 9


def test_count_liars_n_in_range():
    for _ in range(200):
        grid = random_grid(3, 3)
        world = make_world(9, 3)
        for speaker in range(9):
            s = CountLiars.random(speaker, grid, world)
            assert 0 <= s.n <= len(s.area)
            if s.mode == "at_least":
                assert s.n >= 1


def test_count_liars_never_talks_only_about_itself():
    for _ in range(200):
        grid = random_grid(3, 3)
        world = make_world(9, 3)
        for speaker in range(9):
            s = CountLiars.random(speaker, grid, world)
            assert s.area != [speaker], f"cat {speaker} talks only about itself: {s.area_text}"


def test_same_type_never_targets_speaker():
    for _ in range(200):
        grid = random_grid(3, 3)
        world = make_world(9, 3)
        for speaker in range(9):
            s = SameType.random(speaker, grid, world)
            if s is not None:
                assert speaker not in (s.target1, s.target2)
                assert s.target1 != s.target2


def test_single_cat_text_uses_the_name():
    grid = fixed_grid(2, 2)
    statement = is_liar(0, 3)
    statement.set_text(grid)
    assert "D" in statement.to_text()


def test_to_text_before_set_text_raises():
    with pytest.raises(ValueError):
        is_liar(0, 1).to_text()
