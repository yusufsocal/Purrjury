"""Tests for export.py (the puzzles for the web version)."""
import json

from export import export


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
            if cat["hidden"]:
                assert cat["mentions"] == []

    # the file is a JavaScript line that sets PUZZLES to the same data
    content = path.read_text(encoding="utf-8")
    data = content.split("const PUZZLES = ", 1)[1].rstrip().rstrip(";")
    assert json.loads(data) == puzzles


def test_export_is_repeatable_with_a_seed(tmp_path):
    first = export([(3, 3)], count=1, path=str(tmp_path / "a.js"), first_seed=7)
    second = export([(3, 3)], count=1, path=str(tmp_path / "b.js"), first_seed=7)
    assert first == second
