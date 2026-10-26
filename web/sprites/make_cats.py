"""Pixel cat generator for Purrjury: 14 coats x 3 moods, 32x32 sprites."""
import os, sys
from PIL import Image

# One character = one pixel.
#   O outline   B base fur   S stripe/shade   L light fur
#   E eye       W eye shine  N nose           P inner ear
#   X / Y       pattern colours (patches, points, spots)
#   K           blush       H face lines (closed eyes, brows)
BASE = [
    "................................",
    "................................",
    "................................",
    "........O..............O........",
    "........OO............OO........",
    "........OPO..........OPO........",
    "........OBPO........OPBO........",
    "........OBPBOOOOOOOOBPBO........",
    ".......OBBBBBBSBBSBBBBBBO.......",
    "......OBBBBBBBBSSBBBBBBBBO......",
    "......OBBBBBBBBBBBBBBBBBBO......",
    "......OBBBBWEBBBBBBWEBBBBO......",
    "......OBBBBEEBBBBBBEEBBBBO......",
    "......OBBBBEEBBBBBBEEBBBBO......",
    "......OBBBBBBLLNNLLBBBBBBO......",
    "......OBBBBBLLOLLOLLBBBBBO......",
    ".......OBBBBLLLLLLLLBBBBO.......",
    ".......OSSBBBLLLLLLBBBSSO.......",
    ".......OBBBBBLLLLLLBBBBBO.......",
    "......OBBBBBBLLLLLLBBBBBBO......",
    "......OBBBBBBLLLLLLBBBBBBO......",
    ".....OSBBBBBBLLLLLLBBBBBBSO.....",
    ".....OBBBBBBBLLLLLLBBBBBBBO.....",
    ".....OSBBBBBBLLLLLLBBBBBBSO.....",
    "....OBBBBBBBBLLLLLLBBBBBBBBO....",
    "....OBBBBBBBBLLLLLLBBBBBBBBO....",
    "....OBBBBBBOLLLOOLLLOBBBBBBO....",
    "....OBBBBBBOLLLOOLLLOBBBBBBO....",
    "....OBBBBBBOLOLOOLOLOBBBBBBO....",
    ".....OOOOOOOOOOOOOOOOOOOOOO.....",
    "................................",
    "................................",
]

TAIL_FILL = [(r, c) for r in range(20, 29) for c in (28, 29)]
TAIL_LINE = ([(r, 30) for r in range(20, 29)] + [(r, 27) for r in range(20, 24)]
             + [(19, 28), (19, 29)] + [(29, c) for c in range(27, 31)])
TAIL_STRIPE = [(22, 28), (22, 29), (25, 28), (25, 29)]


def hexrgb(h):
    h = h.lstrip("#")
    return tuple(int(h[i:i + 2], 16) for i in (0, 2, 4))


# ---- coats: colours match COLOR_STYLES in web/game.js ----
DARK_EYES = "#1b1b1b"
COATS = {
    "ginger":  dict(B="#e3893d", S="#bf6a26", L="#f7e3c8"),
    "black":   dict(B="#262626", S="#1c1c1c", L="#333333", O="#000000", E="#e6c93a", H="#9a9a9a"),
    "white":   dict(B="#f7f5f0", S="#e2ddd2", L="#ffffff", E="#4f8fd0"),
    "grey":    dict(B="#9b9b9b", S="#7d7d7d", L="#d6d6d6"),
    "tabby":   dict(B="#9c7148", S="#5e4129", L="#e6d3b8"),
    "calico":  dict(B="#f7f5f0", S="#e2ddd2", L="#ffffff", X="#e3893d", Y="#262626"),
    "tuxedo":  dict(B="#262626", S="#1c1c1c", L="#f7f5f0", O="#000000", E="#d9c43a", H="#9a9a9a"),
    "siamese": dict(B="#eadcc3", S="#dccaa9", L="#f4ecdc", X="#6b4a33", E="#4f8fd0"),
    "tortoiseshell": dict(B="#3b2418", S="#2c1a11", L="#4a2e1f", X="#c4672b",
                          O="#140b06", E="#d9a53a", H="#e0995a"),
    "cream":   dict(B="#f1dfb8", S="#dcc494", L="#fbf3e2"),
    "brown":   dict(B="#7a5230", S="#5c3c22", L="#c9a27c"),
    "spotted": dict(B="#f7f5f0", S="#e2ddd2", L="#ffffff", Y="#262626"),
    "smoky":   dict(B="#5f5f6b", S="#4b4b56", L="#8a8a96", E="#e6c93a"),
    "golden":  dict(B="#d4a52a", S="#ae8419", L="#f3e1a8"),
}
SHARED = dict(O="#2b1d16", E=DARK_EYES, W="#ffffff", N="#e57a8a", P="#f2a7b5", K="#f0a0a0", H="#2b1d16")


def put_if(g, cells, ch, onto="BS"):
    for r, c in cells:
        if g[r][c] in onto:
            g[r][c] = ch


def blob(r0, c0, rad):
    return [(r, c) for r in range(r0 - rad, r0 + rad + 1)
            for c in range(c0 - rad, c0 + rad + 1)
            if (r - r0) ** 2 + (c - c0) ** 2 <= rad * rad + rad]


def rect(r1, r2, c1, c2):
    return [(r, c) for r in range(r1, r2 + 1) for c in range(c1, c2 + 1)]


# ---- patterns ----
def tabby(g):
    stripes = [(10, 8), (10, 9), (10, 22), (10, 23),       # cheeks
               (19, 7), (19, 8), (20, 8), (19, 23), (19, 24), (20, 23),
               (24, 5), (24, 6), (25, 6), (24, 25), (24, 26), (25, 25),
               (8, 15), (8, 16)]
    put_if(g, stripes, "S")


def calico(g):
    put_if(g, rect(3, 13, 7, 12) + [(7, 13)], "X")       # orange left side of face + ear
    put_if(g, rect(8, 10, 19, 24), "Y")                  # black patch over right eye area
    put_if(g, blob(21, 22, 3), "Y")                      # black on right flank
    put_if(g, blob(26, 7, 2) + blob(19, 9, 1), "X")      # orange on left
    put_if(g, rect(19, 23, 27, 30), "X")                 # tail tip orange


def tortie(g):
    for b in [blob(9, 10, 2), blob(12, 21, 1), blob(20, 9, 2), blob(23, 23, 2),
              blob(27, 7, 1), blob(26, 24, 1), (rect(5, 6, 9, 9)), rect(21, 23, 28, 29)]:
        put_if(g, b, "X")


def siamese(g):
    put_if(g, rect(3, 8, 7, 24), "X")                    # ears + top edge
    put_if(g, rect(12, 16, 9, 22), "X", onto="BSL")      # face mask
    for r, c in [(14, 15), (14, 16)]:
        g[r][c] = "N"
    put_if(g, rect(26, 28, 11, 20), "X", onto="L")       # dark paws
    put_if(g, rect(19, 28, 27, 30), "X")                 # tail


def spotted(g):
    spots = blob(9, 10, 1) + blob(20, 8, 1) + blob(23, 23, 1) + blob(26, 6, 1) \
        + [(18, 21), (12, 22), (25, 19), (27, 25), (8, 20), (22, 28), (26, 29)]
    put_if(g, spots, "Y")


PATTERNS = {"tabby": tabby, "calico": calico, "tortoiseshell": tortie,
            "siamese": siamese, "spotted": spotted}


# ---- moods: only touch the eyes and mouth ----
def eye_cells():
    return rect(11, 13, 11, 12) + rect(11, 13, 19, 20)


def happy(g):
    for r, c in eye_cells():
        g[r][c] = "B"
    for c in (11, 12, 19, 20):
        g[12][c] = "H"                                  # closed, curved-up eyes ^ ^
    for c in (10, 13, 18, 21):
        g[13][c] = "H"
    for c in (8, 9, 22, 23):
        g[14][c] = "K"                                  # blush
    row15 = "LOLLLLOL"                                  # wide smile
    row16 = "LLOOOOLL"
    for i in range(8):
        g[15][12 + i] = row15[i]
        g[16][12 + i] = row16[i]


def angry(g):
    for (r, c) in [(10, 10), (10, 11), (11, 12), (11, 13),       # brows slant down to the middle
                   (10, 21), (10, 20), (11, 19), (11, 18)]:
        g[r][c] = "H"
    g[11][11] = "E"
    g[11][20] = "E"
    row15 = "LLLOOLLL"                                  # frown
    row16 = "LLOLLOLL"
    for i in range(8):
        g[15][12 + i] = row15[i]
        g[16][12 + i] = row16[i]


MOODS = {"neutral": lambda g: None, "happy": happy, "angry": angry}


def build(coat, mood):
    g = [list(r) for r in BASE]
    assert all(len(r) == 32 for r in g)
    for r, c in TAIL_FILL:
        g[r][c] = "B"
    for r, c in TAIL_LINE:
        g[r][c] = "O"
    for r, c in TAIL_STRIPE:
        g[r][c] = "S"
    if coat in PATTERNS:
        PATTERNS[coat](g)
    MOODS[mood](g)
    return g


def render(g, coat):
    pal = {k: hexrgb(v) for k, v in {**SHARED, **COATS[coat]}.items()}
    img = Image.new("RGBA", (32, 32), (0, 0, 0, 0))
    for y, row in enumerate(g):
        for x, ch in enumerate(row):
            if ch in pal:
                img.putpixel((x, y), pal[ch] + (255,))
    return img


if __name__ == "__main__":
    out = sys.argv[1] if len(sys.argv) > 1 else "sprites"
    os.makedirs(out, exist_ok=True)
    moods = list(MOODS)
    sheet = Image.new("RGBA", (32 * len(moods), 32 * len(COATS)), (0, 0, 0, 0))
    for row, coat in enumerate(COATS):
        for col, mood in enumerate(moods):
            img = render(build(coat, mood), coat)
            img.save(os.path.join(out, f"cat_{coat}_{mood}.png"))
            sheet.paste(img, (col * 32, row * 32))
    sheet.save(os.path.join(out, "cats_sheet.png"))   # rows = coats, cols = neutral/happy/angry
    # preview: 3 coats per row, big, on a light background
    per = 6
    rows = (len(COATS) + per - 1) // per
    s = 4
    prev = Image.new("RGBA", (per * 3 * 34 * s, rows * 34 * s), (239, 230, 210, 255))
    for i, coat in enumerate(COATS):
        for j, mood in enumerate(moods):
            img = render(build(coat, mood), coat).resize((32 * s, 32 * s), Image.NEAREST)
            x = ((i % per) * 3 + j) * 34 * s + s
            y = (i // per) * 34 * s + s
            prev.alpha_composite(img, (x, y))
    prev.save(os.path.join(out, "preview.png"))
    print("done", len(COATS) * len(moods), "sprites")
