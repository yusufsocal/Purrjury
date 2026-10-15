"""Tests for Quote, Only and AllSame."""
import itertools

import pytest

from statements import AllSame, Only, Quote
from world import make_world
from tests.helpers import fits, random_grid


def fitting_worlds(statement, n_cats):
    """Every world (of n_cats cats) where the statement fits its speaker."""
    return [list(w) for w in itertools.product([False, True], repeat=n_cats) if fits(statement, list(w), None)]


# --- Quote ---

@pytest.mark.parametrize("quoted_liar", [False, True])
@pytest.mark.parametrize("target_liar", [False, True])
@pytest.mark.parametrize("says_liar", [False, True])
def test_quote_evaluate(quoted_liar, target_liar, says_liar):
    # speaker 0, quoted 1, target 2
    world = [False, quoted_liar, target_liar]
    quote_is_true = target_liar == says_liar
    would_say_it = quote_is_true if not quoted_liar else not quote_is_true
    assert Quote(0, 1, 2, says_liar).evaluate(world, None) is would_say_it


def test_quote_flavors():
    assert Quote(0, 0, 1, True).flavor() == "self"
    assert Quote(0, 1, 0, True).flavor() == "about_me"
    assert Quote(0, 1, 1, True).flavor() == "about_themselves"
    assert Quote(0, 1, 2, True).flavor() == "others"


@pytest.mark.parametrize("says_liar", [True, False])
def test_self_quote_always_reveals_the_target(says_liar):
    """'If you asked me, I'd say B is a liar': B is a liar, whoever says it."""
    worlds = fitting_worlds(Quote(0, 0, 1, says_liar), 2)
    assert worlds
    assert all(w[1] == says_liar for w in worlds)


@pytest.mark.parametrize("says_liar", [True, False])
def test_quote_about_me_always_reveals_the_quoted_cat(says_liar):
    """'B would say I'm a liar': B is a liar. 'B would say I'm honest': B is honest."""
    worlds = fitting_worlds(Quote(0, 1, 0, says_liar), 2)
    assert worlds
    assert all(w[1] == says_liar for w in worlds)


@pytest.mark.parametrize("says_liar", [True, False])
def test_quote_about_themselves_always_reveals_the_speaker(says_liar):
    """'B would say they're a liar' is never true, so only a liar can say it."""
    worlds = fitting_worlds(Quote(0, 1, 1, says_liar), 2)
    assert worlds
    assert all(w[0] == says_liar for w in worlds)


def test_quote_random_uses_every_flavor():
    seen = set()
    for _ in range(100):
        grid = random_grid(3, 3)
        world = make_world(9, 3)
        for speaker in range(9):
            s = Quote.random(speaker, grid, world)
            assert s is not None
            seen.add(s.flavor())
    assert seen == {"self", "about_me", "about_themselves", "others"}


def test_quote_key():
    assert Quote(0, 1, 2, True).key() == Quote(5, 1, 2, True).key()
    assert Quote(0, 1, 2, True).key() != Quote(0, 1, 2, False).key()
    assert Quote(0, 1, 2, True).key() != Quote(0, 2, 1, True).key()


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
