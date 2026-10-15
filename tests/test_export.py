"""Tests for export.py (the puzzles for the web version)."""
import json

from export import export


def test_export_writes_playable_puzzles(tmp_path):
    path = tmp_path / "puzzles.js"
    puzzles = export([(2, 2), (2, 3)], count=2, path=str(path), first_seed=1)

    assert len(puzzles) == 4
    for p in puzzles:
        n = p["rows"] * p["cols"]
        assert len(p["cats"]) == n
        assert len(p["liars"]) == n
        for cat in p["cats"]:
            assert cat["name"] and cat["color"] and cat["text"]
            assert cat["hidden"] in (True, False)
            assert (cat["secret"] is not None) == cat["hidden"]

    # the file is a JavaScript line that sets PUZZLES to the same data
    content = path.read_text(encoding="utf-8")
    data = content.split("const PUZZLES = ", 1)[1].rstrip().rstrip(";")
    assert json.loads(data) == puzzles


def test_export_is_repeatable_with_a_seed(tmp_path):
    first = export([(2, 2)], count=2, path=str(tmp_path / "a.js"), first_seed=7)
    second = export([(2, 2)], count=2, path=str(tmp_path / "b.js"), first_seed=7)
    assert first == second
