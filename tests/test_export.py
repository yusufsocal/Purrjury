"""Tests for export.py (the puzzles for the web version)."""
import base64
import json

import export as export_module
from datetime import date

from export import (TRICK_MIN_LEVEL, clue_table, daily_level, export, export_daily, has_trick_clue, liar_count,
                    make_puzzle, read_daily_month)
from purrjury.engine.checker import find_solutions
from purrjury.engine.solver import LEVELS
from purrjury.board.world import make_world
from purrjury.statements import ALL_STATEMENTS
from tests.helpers import random_grid


def test_export_writes_playable_puzzles(tmp_path):
    path = tmp_path / "puzzles.js"
    puzzles = export([(3, 3)], count=2, path=str(path), first_seed=1)

    # 2 puzzles for each of the 3 levels a 3x3 can get, easiest first
    assert [p["level"] for p in puzzles] == ["easy", "easy", "medium", "medium", "hard", "hard"]
    for p in puzzles:
        n = p["rows"] * p["cols"]
        assert len(p["cats"]) == n
        assert len(p["liars"]) == n
        for cat in p["cats"]:
            assert cat["name"] and cat["color"] and cat["text"]
            assert cat["hidden"] in (True, False)
            assert (cat["secret"] is not None) == cat["hidden"]
            assert all(0 <= i < n for i in cat["mentions"])
            assert cat["mood"] in ("happy", "angry", "neutral")
            if cat["hidden"]:
                assert cat["mentions"] == []
                assert cat["clue"] is None
            else:
                assert cat["clue"]["cats"]

    # the file is a JavaScript line that sets PUZZLES to the same data
    content = path.read_text(encoding="utf-8")
    data = content.split("const PUZZLES = ", 1)[1].rstrip().rstrip(";")
    assert json.loads(data) == puzzles


def test_export_is_repeatable_with_a_seed(tmp_path):
    first = export([(3, 3)], count=1, path=str(tmp_path / "a.js"), first_seed=7)
    second = export([(3, 3)], count=1, path=str(tmp_path / "b.js"), first_seed=7)
    assert first == second


def test_clue_table_matches_fits():
    """Reading the table back gives the same answer as fits() for every combination of the clue's cats."""
    for _ in range(20):
        grid = random_grid(3, 3)
        world = make_world(9, 3)
        for statement_type in ALL_STATEMENTS:
            statement = statement_type.random(0, grid, world)
            if statement is None:
                continue
            clue = clue_table(statement, grid)
            bits = base64.b64decode(clue["table"])
            for k in range(2 ** len(clue["cats"])):
                test_world = [False] * 9
                for j, cat in enumerate(clue["cats"]):
                    test_world[cat] = bool(k >> j & 1)
                assert bool(bits[k // 8] >> (k % 8) & 1) == statement.fits(test_world, grid)


def test_a_saved_seed_makes_the_same_puzzle_again(tmp_path):
    """make_puzzle(seed) gives back exactly the puzzle export saved, answer included."""
    puzzles = export([(3, 3)], count=1, path=str(tmp_path / "p.js"), first_seed=21)
    for p in puzzles:
        grid, world, _steps, _given = make_puzzle(3, 3, p["level"], p["seed"])
        assert world == p["liars"]
        assert [cat.statement.to_text() for row in grid for cat in row] == [c["text"] for c in p["cats"]]


def test_easy_puzzles_have_no_trick_clues(tmp_path):
    """Trick clues ("Felix and I are the same type") only show up in hard puzzles and up."""
    puzzles = export([(3, 3)], count=3, path=str(tmp_path / "p.js"), first_seed=3)
    for p in puzzles:
        if LEVELS.index(p["level"]) < LEVELS.index(TRICK_MIN_LEVEL):
            grid, _world, _steps, _given = make_puzzle(3, 3, p["level"], p["seed"])
            assert not has_trick_clue(grid)


def test_only_easy_puzzles_show_a_cat(tmp_path):
    """Easy puzzles start with one cat solved for you, shown with its real type. The rest start empty."""
    puzzles = export([(3, 3)], count=2, path=str(tmp_path / "p.js"), first_seed=11)
    for p in puzzles:
        if p["level"] == "easy":
            assert p["given"] is not None
        else:
            assert p["given"] is None


def test_exported_puzzles_have_one_answer(tmp_path):
    """One answer that fits every clue and the cat shown from the start (easy puzzles may need that cat)."""
    puzzles = export([(3, 3)], count=1, path=str(tmp_path / "p.js"), first_seed=31)
    for p in puzzles:
        grid, world, _steps, given = make_puzzle(3, 3, p["level"], p["seed"])
        answers = [w for w in find_solutions(grid) if all(w[cat] == value for cat, value in given.items())]
        assert answers == [tuple(world)]


def test_liar_count_varies_but_never_all_or_none():
    import random
    random.seed(0)
    counts = [liar_count(9) for _ in range(500)]
    assert min(counts) >= 1 and max(counts) <= 8
    assert len(set(counts)) >= 5   # not stuck on one number
    assert 3 <= sorted(counts)[250] <= 4   # mostly around a third to a half


def test_daily_days_are_added_and_never_changed(tmp_path, monkeypatch):
    monkeypatch.setattr(export_module, "DAILY_SIZES", [(3, 3)])   # only 3x3s, so the test is quick
    folder = str(tmp_path)
    # 2 days across a month's end: each month gets its own file
    assert export_daily(2, start=date(2026, 11, 30), folder=folder, log=lambda _: None) == ["2026-11-30", "2026-12-01"]
    november = read_daily_month(str(tmp_path / "2026-11.js"))
    assert list(november) == ["2026-11-30"]
    puzzle = november["2026-11-30"][0]
    assert (puzzle["rows"], puzzle["cols"]) == (3, 3)
    assert puzzle["level"] == daily_level(date(2026, 11, 30), 3, 3)
    assert str(puzzle["seed"]).startswith("20261130")

    # running again adds the next day after the last one, and leaves the saved days alone
    before = (tmp_path / "2026-11.js").read_text(encoding="utf-8")
    assert export_daily(1, folder=folder, log=lambda _: None) == ["2026-12-02"]
    assert (tmp_path / "2026-11.js").read_text(encoding="utf-8") == before
    assert export_daily(1, start=date(2026, 11, 30), folder=folder, log=lambda _: None) == []

    days = (tmp_path / "days.js").read_text(encoding="utf-8")
    assert 'DAILY_FIRST = "2026-11-30"' in days and 'DAILY_LAST = "2026-12-02"' in days


def test_daily_level_is_the_same_for_the_same_day():
    day = date(2026, 11, 13)
    assert daily_level(day, 3, 3) == daily_level(day, 3, 3)
    assert {daily_level(date(2026, 11, d), 4, 4) for d in range(1, 31)} == {"medium", "hard", "tricky"}
