import pytest

from statements import ALL_STATEMENTS, CountLiars, PairStatement
from statements.count_liars import AREA_WEIGHTS
from statements.pair import ORDERED, RELATIONS, TEXTS
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


# --- PairStatement ---

# For each relation: is it true for (a, b) = (honest, honest), (honest, liar), (liar, honest), (liar, liar)?
PAIR_TRUTH_TABLES = {
    "same":                (True, False, False, True),
    "different":           (False, True, True, False),
    "at_least_one_liar":   (False, True, True, True),
    "at_least_one_honest": (True, True, True, False),
    "both_liars":          (False, False, False, True),
    "both_honest":         (True, False, False, False),
    "if_a_honest_then_b":  (True, False, True, True),
    "a_honest_b_liar":     (False, True, False, False),
}


@pytest.mark.parametrize("relation, expected", PAIR_TRUTH_TABLES.items())
def test_pair_relation_truth_table(relation, expected):
    combos = [(False, False), (False, True), (True, False), (True, True)]   # True = liar
    for (a_liar, b_liar), want in zip(combos, expected):
        world = [False, a_liar, b_liar]   # speaker is cat 0, a is cat 1, b is cat 2
        assert PairStatement(0, 1, 2, relation).evaluate(world, None) is want


def test_every_relation_is_tested_and_has_texts():
    assert set(PAIR_TRUTH_TABLES) == set(RELATIONS)
    assert set(TEXTS) == set(RELATIONS)
    assert ORDERED <= set(RELATIONS)
    for others, me in TEXTS.values():
        assert others and me


def test_pair_me_text_used_when_speaker_is_a():
    grid = fixed_grid(2, 2)
    others_texts, me_texts = TEXTS["same"]
    name_b = grid[1][1].name

    for _ in range(30):
        me = PairStatement(0, 0, 3, "same")   # speaker is a
        me.set_text(grid)
        assert me.to_text() in [t.format(b=name_b) for t in me_texts]

        others = PairStatement(0, 1, 3, "same")
        others.set_text(grid)
        assert others.to_text() in [t.format(a=grid[0][1].name, b=name_b) for t in others_texts]


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


@pytest.mark.parametrize("rows, cols", [(2, 2), (3, 3), (4, 5)])
def test_candidate_areas_are_grouped_by_weighted_categories(rows, cols):
    """Every category has a weight, and no category is returned empty."""
    for _ in range(20):
        grid = random_grid(rows, cols)
        for speaker in range(rows * cols):
            candidates = CountLiars.candidate_areas(grid, speaker)
            assert set(candidates) <= set(AREA_WEIGHTS)
            for category, options in candidates.items():
                assert options, f"empty category {category}"
                for area, text in options:
                    assert area and area != [speaker]


def test_count_liars_never_talks_only_about_itself():
    for _ in range(200):
        grid = random_grid(3, 3)
        world = make_world(9, 3)
        for speaker in range(9):
            s = CountLiars.random(speaker, grid, world)
            assert s.area != [speaker], f"cat {speaker} talks only about itself: {s.area_text}"


def test_pair_random_cats_are_valid():
    """b is never the speaker, a and b are different cats."""
    for _ in range(200):
        grid = random_grid(3, 3)
        world = make_world(9, 3)
        for speaker in range(9):
            s = PairStatement.random(speaker, grid, world)
            assert s is not None, "some relation always fits"
            assert s.b != speaker
            assert s.a != s.b


def test_pair_random_uses_speaker_pairs_and_all_relations():
    seen_relations = set()
    seen_me = False
    for _ in range(300):
        grid = random_grid(3, 3)
        world = make_world(9, 3)
        for speaker in range(9):
            s = PairStatement.random(speaker, grid, world)
            seen_relations.add(s.relation)
            seen_me = seen_me or s.a == speaker
    assert seen_relations == set(RELATIONS)
    assert seen_me


def test_single_cat_text_uses_the_name():
    grid = fixed_grid(2, 2)
    statement = is_liar(0, 3)
    statement.set_text(grid)
    assert "D" in statement.to_text()


def test_to_text_before_set_text_raises():
    with pytest.raises(ValueError):
        is_liar(0, 1).to_text()
