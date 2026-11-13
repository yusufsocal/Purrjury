"""Tests for make_pages.py (web/practice/ and web/feedback/ are copies of web/index.html)."""
import os

from make_pages import PAGES, page_html


def read(path):
    with open(path, encoding="utf-8", newline="") as f:
        return f.read().replace("\r\n", "\n")


def test_pages_are_up_to_date():
    index_html = read("web/index.html")
    for page in PAGES:
        made = read(os.path.join("web", page, "index.html"))
        assert made == page_html(index_html, page), f"web/{page}/ is old: run python make_pages.py"
