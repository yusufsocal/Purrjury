"""Tests for Only, AllSame, IfThen, trio areas, Hearsay and hidden cats."""
import itertools

import pytest

from purrjury.engine import generator
from purrjury.engine.checker import find_solutions
from purrjury.statements import ALL_STATEMENTS, AllSame, CountLiars, Hearsay, IfThen, Only
from purrjury.board.world import make_world
from tests.helpers import all_cats, fits, fixed_grid, is_liar, random_grid


def fitting_worlds(statement, n_cats):
    """Every world (of n_cats cats) where the statement fits its speaker."""
    return [list(w) for w in itertools.product([False, True], repeat=n_cats) if fits(statement, list(w), None)]


# --- Only ---

def test_only_evaluate():
    world = [False, True, False, False]
    assert Only(0, [0, 1, 2], "", 1, True).evaluate(world, None) is True     # 1 is the only liar
    assert Only(0, [0, 1, 2], "", 2, True).evaluate(world, None) is False    # 2 isn't a liar
    assert Only(0, [1, 2, 3], "", 2, False).evaluate(world, None) is False   # 3 is honest too
    assert Only(0, [1, 2], "", 2, False).evaluate(world, None) is True       # 2 is the only honest one


def test_only_liar_about_myself_can_only_come_from_a_liar():
    """'I'm the only liar among us': an honest cat can't say it, and a liar needs another liar around."""
    worlds = fitting_worlds(Only(0, [0, 1, 2], "", 0, True), 3)
    assert worlds
    for w in worlds:
        assert w[0] is True
        assert w[1] or w[2]


@pytest.mark.parametrize("rows, cols", [(2, 2), (3, 3), (4, 4)])
def test_only_random_target_is_in_a_big_area(rows, cols):
    for _ in range(50):
        grid = random_grid(rows, cols)
        world = make_world(rows * cols, (rows * cols) // 3)
        for speaker in range(rows * cols):
            s = Only.random(speaker, grid, world)
            if s is None:
                continue
            assert len(s.area) >= 2
            assert s.target in s.area


def test_only_random_uses_me_and_others():
    seen_me = seen_other = False
    for _ in range(200):
        grid = random_grid(3, 3)
        world = make_world(9, 3)
        for speaker in range(9):
            s = Only.random(speaker, grid, world)
            if s is not None:
                seen_me = seen_me or s.target == speaker
                seen_other = seen_other or s.target != speaker
    assert seen_me and seen_other


def test_only_key():
    assert Only(0, [1, 2], "a", 1, True).key() == Only(3, [2, 1], "b", 1, True).key()
    assert Only(0, [1, 2], "", 1, True).key() != Only(0, [1, 2], "", 2, True).key()
    assert Only(0, [1, 2], "", 1, True).key() != Only(0, [1, 2], "", 1, False).key()


# --- AllSame ---

def test_all_same_evaluate():
    assert AllSame(0, [1, 2], "", True).evaluate([False, True, True], None) is True
    assert AllSame(0, [1, 2], "", True).evaluate([False, True, False], None) is False
    assert AllSame(0, [1, 2], "", False).evaluate([False, True, False], None) is True
    assert AllSame(0, [0, 1], "", False).evaluate([False, False], None) is False


def test_all_same_with_me_in_it():
    """'All of us are the same' said by a liar means the area is mixed, so someone is honest."""
    worlds = fitting_worlds(AllSame(0, [0, 1, 2], "", True), 3)
    for w in worlds:
        if w[0]:   # speaker is a liar
            assert not w[1] or not w[2]
        else:      # speaker is honest
            assert not w[1] and not w[2]


@pytest.mark.parametrize("rows, cols", [(2, 2), (3, 3), (4, 4)])
def test_all_same_random_always_fits(rows, cols):
    """Same and mixed are opposites, so there's always one that fits."""
    for _ in range(50):
        grid = random_grid(rows, cols)
        world = make_world(rows * cols, (rows * cols) // 3)
        for speaker in range(rows * cols):
            s = AllSame.random(speaker, grid, world)
            assert s is not None
            assert len(s.area) >= 2
            assert fits(s, world, grid)


def test_all_same_key():
    assert AllSame(0, [1, 2], "a", True).key() == AllSame(4, [2, 1], "b", True).key()
    assert AllSame(0, [1, 2], "", True).key() != AllSame(0, [1, 2], "", False).key()


# --- IfThen ---

@pytest.mark.parametrize("cat_liar", [False, True])
@pytest.mark.parametrize("area_liar", [False, True])
def test_if_then_evaluate(cat_liar, area_liar):
    # speaker 0, the "if" cat is 1, the area is 2 and 3
    for world in itertools.product([False, True], repeat=4):
        world = list(world)
        if_part = world[1] == cat_liar
        then_part = world[2] == area_liar and world[3] == area_liar
        expected = (not if_part) or then_part
        assert IfThen(0, 1, cat_liar, [2, 3], "", area_liar).evaluate(world, None) is expected


def test_if_then_never_starts_with_the_speaker():
    for _ in range(100):
        grid = random_grid(3, 3)
        world = make_world(9, 3)
        for speaker in range(9):
            s = IfThen.random(speaker, grid, world)
            assert s is not None
            assert s.cat != speaker
            assert len(s.area) >= 2


def test_if_then_key():
    assert IfThen(0, 1, True, [2, 3], "a", False).key() == IfThen(5, 1, True, [3, 2], "b", False).key()
    assert IfThen(0, 1, True, [2, 3], "", False).key() != IfThen(0, 1, False, [2, 3], "", False).key()


# --- trio areas ("Felix, Bagel and me") ---

def test_trio_areas_include_the_speaker():
    for _ in range(50):
        grid = random_grid(3, 3)
        for speaker in range(9):
            trios = CountLiars.candidate_areas(grid, speaker).get("trio", [])
            assert trios
            for area, text in trios:
                assert len(area) == 3 and speaker in area
                assert text.endswith(" and me")


def test_no_trios_when_there_are_too_few_cats():
    grid = random_grid(1, 2)
    assert "trio" not in CountLiars.candidate_areas(grid, 0)


# --- Hearsay ---

def make_hidden_grid():
    """2x2 grid, cat 1 is hidden and really said 'D is a liar'."""
    grid = fixed_grid(2, 2)
    grid[0][1].statement = is_liar(1, 3)
    grid[0][1].hidden = True
    return grid


def test_hearsay_evaluate_is_whether_the_quote_is_real():
    grid = make_hidden_grid()
    world = [False, False, False, True]
    assert Hearsay(0, 1, is_liar(1, 3)).evaluate(world, grid) is True
    assert Hearsay(0, 1, is_liar(1, 2)).evaluate(world, grid) is False


def test_hearsay_from_a_liar_tells_nothing():
    grid = make_hidden_grid()
    statement = Hearsay(0, 1, is_liar(1, 2))
    for world in itertools.product([False, True], repeat=4):
        world = list(world)
        if world[0]:   # liar speaker: every world is possible as far as the player knows
            assert statement.fits(world, grid)


def test_hearsay_from_an_honest_cat_means_the_quote_fits_the_hidden_cat():
    grid = make_hidden_grid()
    quote = is_liar(1, 2)   # "C is a liar", said by B
    statement = Hearsay(0, 1, quote)
    for world in itertools.product([False, True], repeat=4):
        world = list(world)
        if not world[0]:
            assert statement.fits(world, grid) == (quote.evaluate(world, grid) == (not world[1]))


@pytest.mark.parametrize("speaker_liar", [False, True])
def test_hearsay_random(speaker_liar):
    for _ in range(50):
        grid = random_grid(3, 3)
        world = make_world(9, 3)
        world[0] = speaker_liar
        about = 4
        generator.assign_statements(grid, world)
        real = grid[1][1].statement
        s = Hearsay.random(0, grid, world, about=about, statement_types=ALL_STATEMENTS)
        assert s is not None
        assert s.quote.speaker == about
        if speaker_liar:
            assert s.quote.key() != real.key()
        else:
            assert s.quote.key() == real.key()
        assert s.evaluate(world, grid) == (not speaker_liar)
        assert "{" not in s.to_text()


# --- hidden cats in the generator ---

def test_max_hidden():
    assert generator.max_hidden(2, 2) == 0
    assert generator.max_hidden(3, 3) == 1
    assert generator.max_hidden(4, 4) == 2
    assert generator.max_hidden(3, 5) == 1


@pytest.mark.parametrize("rows, cols", [(3, 3), (4, 4)])
def test_add_hidden_cats(rows, cols, monkeypatch):
    monkeypatch.setattr(generator, "HIDDEN_CHANCE", 1.0)   # always hide as many as allowed
    for _ in range(20):
        grid = random_grid(rows, cols)
        world = make_world(rows * cols, rows * cols // 3)
        generator.assign_statements(grid, world)
        generator.add_hidden_cats(grid, world)

        cats = all_cats(grid)
        hidden = [c.index for c in cats if c.hidden]
        assert len(hidden) <= generator.max_hidden(rows, cols)
        for i in hidden:
            # exactly one cat tells what the hidden cat said, and the hidden cat itself isn't a teller
            tellers = [c for c in cats if isinstance(c.statement, Hearsay) and c.statement.about == i]
            assert len(tellers) == 1
            assert not isinstance(cats[i].statement, Hearsay)
            assert cats[i].gibberish
        # the real world is still a solution for the player
        assert tuple(world) in [tuple(w) for w in find_solutions(grid)]


# --- mentions() ---

def test_mentions_never_include_the_speaker():
    assert CountLiars(0, [0, 1, 2], "", "exactly", 1).mentions() == [1, 2]
    assert Only(2, [1, 2], "", 1, True).mentions() == [1]
    assert AllSame(0, [0, 4], "", True).mentions() == [4]
    assert IfThen(0, 5, True, [0, 1], "", False).mentions() == [1, 5]
    assert Hearsay(0, 1, is_liar(1, 3)).mentions() == [1, 3]


@pytest.mark.parametrize("statement_type", ALL_STATEMENTS)
def test_random_statements_mention_real_cats(statement_type):
    for _ in range(30):
        grid = random_grid(3, 3)
        world = make_world(9, 3)
        for speaker in range(9):
            s = statement_type.random(speaker, grid, world)
            if s is not None:
                m = s.mentions()
                assert speaker not in m
                assert all(0 <= i < 9 for i in m)
