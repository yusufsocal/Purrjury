"""Make the site's extra pages from web/index.html: web/practice/ and web/feedback/.

They're copies of index.html with two lines added at the top: <base href="../">, so every file
(style.css, game.js, sprites) still comes from web/, and window.PAGE, which tells game.js what to play.
Run it after changing index.html (a test checks the copies are up to date).
"""
import os

PAGES = ["practice", "feedback"]


def page_html(index_html, page):
    """index.html (with \n line endings) as the page for `page`."""
    head = "<head>\n"
    assert head in index_html
    extra = ('  <base href="../">\n'
             f'  <script>window.PAGE = "{page}";</script>   <!-- made by make_pages.py, edit web/index.html instead -->\n')
    return index_html.replace(head, head + extra, 1)


def make_pages(web="web"):
    """Write every page in PAGES into its own folder in web/, with CRLF line endings like the rest."""
    with open(os.path.join(web, "index.html"), encoding="utf-8", newline="") as f:
        index_html = f.read().replace("\r\n", "\n")
    for page in PAGES:
        os.makedirs(os.path.join(web, page), exist_ok=True)
        with open(os.path.join(web, page, "index.html"), "w", encoding="utf-8", newline="") as f:
            f.write(page_html(index_html, page).replace("\n", "\r\n"))


if __name__ == "__main__":
    make_pages()
    print("Made " + ", ".join(f"web/{page}/" for page in PAGES))
