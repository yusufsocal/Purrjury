"""Pixel cat generator for Purrjury: 14 coats x 5 moods, 32x32 sprites."""
import os, sys, colorsys
from PIL import Image, ImageDraw

# One character = one pixel.
#   O outline   B base fur   S shade     L light fur   J rim highlight
#   E eye       W eye shine  N nose      P inner ear
#   X / Y       pattern colours (patches, points, spots)
#   K           blush        H face lines (closed eyes, brows)
# Outline colours are not stored: every O pixel is coloured from the fur next to it.
BASE = [
    "................................",
    "................................",
    "................................",
    "........O..............O........",
    "........OO............OO........",
    "........OBO..........OBO........",
    "........OPBO........OBPO........",
    "........OPBBOOOOOOOOBBPO........",
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

# tail overlay, columns 27..31
TAIL = {
    13: "..OO.",
    14: ".OBBO", 15: ".OBBO", 16: ".OBBO", 17: ".OBBO",
    18: "OBBO.", 19: "OBBO.", 20: "OBBO.", 21: "OBBO.", 22: "OBBO.",
    23: "OBBO.", 24: "OBBO.", 25: "OBBO.", 26: "OBBO.", 27: "OBBO.", 28: "OBBO.",
    29: "OOO..",
}
TAIL_STRIPE = [(16, 29), (16, 30), (21, 28), (21, 29), (24, 28), (24, 29)]

OUTER_K = 1.0     # outer silhouette outline strength
INNER_K = 0.8     # inner lines (mouth, legs) strength
RIM_LIGHT = True  # 1px highlight on the top/left edges


# ---- colour helpers ----
def hexrgb(h):
    h = h.lstrip("#")
    return tuple(int(h[i:i + 2], 16) for i in (0, 2, 4))


def hue_toward(h, t, a):
    d = ((t - h + 0.5) % 1.0) - 0.5
    return (h + d * a) % 1.0


def to_rgb(h, l, s):
    return tuple(round(v * 255) for v in colorsys.hls_to_rgb(h % 1.0, max(0, min(1, l)), max(0, min(1, s))))


def darker(rgb, k):
    """Darken with a hue shift toward blue-violet and a saturation boost."""
    h, s, v = colorsys.rgb_to_hsv(*[x / 255 for x in rgb])
    h = hue_toward(h, 0.72, 0.18 * k)
    s = min(1, s * (1 + 0.3 * k) + 0.06 * k)
    return tuple(round(x * 255) for x in colorsys.hsv_to_rgb(h, s, v * (1 - 0.65 * k)))


def lighter(rgb, k):
    """Lighten with a hue shift toward warm yellow."""
    h, l, s = colorsys.rgb_to_hls(*[v / 255 for v in rgb])
    return to_rgb(hue_toward(h, 0.12, 0.15 * k), l + (1 - l) * 0.35 * k, s * (1 - 0.1 * k))


# ---- coats: B/S/L match COLOR_STYLES in web/game.js ----
DARK_EYES = "#1b1b1b"
COATS = {
    "ginger":  dict(B="#e3893d", S="#bf6a26", L="#f7e3c8"),
    "black":   dict(B="#262626", S="#1c1c1c", L="#333333", E="#e6c93a", H="#9a9a9a"),
    "white":   dict(B="#f7f5f0", S="#e2ddd2", L="#ffffff", E="#4f8fd0"),
    "grey":    dict(B="#9b9b9b", S="#7d7d7d", L="#d6d6d6"),
    "tabby":   dict(B="#9c7148", S="#5e4129", L="#e6d3b8"),
    "calico":  dict(B="#f7f5f0", S="#e2ddd2", L="#ffffff", X="#e3893d", Y="#262626"),
    "tuxedo":  dict(B="#262626", S="#1c1c1c", L="#f7f5f0", E="#d9c43a", H="#9a9a9a"),
    "siamese": dict(B="#eadcc3", S="#dccaa9", L="#f4ecdc", X="#6b4a33", E="#4f8fd0"),
    "tortoiseshell": dict(B="#3b2418", S="#2c1a11", L="#4a2e1f", X="#c4672b",
                          E="#d9a53a", H="#e0995a"),
    "cream":   dict(B="#f1dfb8", S="#dcc494", L="#fbf3e2"),
    "brown":   dict(B="#7a5230", S="#5c3c22", L="#c9a27c"),
    "spotted": dict(B="#f7f5f0", S="#e2ddd2", L="#ffffff", Y="#262626"),
    "smoky":   dict(B="#5f5f6b", S="#4b4b56", L="#8a8a96", E="#e6c93a"),
    "golden":  dict(B="#d4a52a", S="#ae8419", L="#f3e1a8"),
}
SHARED = dict(E=DARK_EYES, W="#ffffff", N="#e57a8a", P="#f2a7b5", K="#f0a0a0", H="#2b1d16")
FUR = "BSJLXY"


def put_if(g, cells, ch, onto="BSJ"):
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
    stripes = [(10, 8), (10, 9), (10, 22), (10, 23),
               (19, 7), (19, 8), (20, 8), (19, 23), (19, 24), (20, 23),
               (24, 5), (24, 6), (25, 6), (24, 25), (24, 26), (25, 25),
               (8, 15), (8, 16), (9, 13), (9, 18), (11, 9), (11, 22)]
    put_if(g, stripes, "S")


def calico(g):
    put_if(g, rect(3, 13, 7, 12) + [(7, 13)], "X")
    put_if(g, rect(8, 10, 19, 24), "Y")
    put_if(g, blob(21, 22, 3), "Y")
    put_if(g, blob(26, 7, 2) + blob(19, 9, 1), "X")
    put_if(g, rect(13, 19, 27, 31), "X")


def tortie(g):
    for b in [blob(9, 10, 2), blob(12, 21, 1), blob(20, 9, 2), blob(23, 23, 2),
              blob(27, 7, 1), blob(26, 24, 1), rect(5, 6, 9, 9), rect(14, 16, 29, 30)]:
        put_if(g, b, "X")


def siamese(g):
    put_if(g, rect(3, 8, 7, 24), "X")
    mask = [p for p in rect(12, 16, 9, 22) if p not in {(16, 9), (16, 22)}]
    put_if(g, mask, "X", onto="BSJL")
    for r, c in [(14, 15), (14, 16)]:
        g[r][c] = "N"
    put_if(g, rect(26, 28, 11, 20), "X", onto="L")
    put_if(g, rect(13, 28, 27, 31), "X")


def spotted(g):
    spots = blob(9, 10, 1) + blob(20, 8, 1) + blob(23, 23, 1) + blob(26, 6, 1) \
        + [(18, 21), (12, 22), (25, 19), (27, 25), (8, 20), (22, 28), (26, 29), (15, 29)]
    put_if(g, spots, "Y")


PATTERNS = {"tabby": tabby, "calico": calico, "tortoiseshell": tortie,
            "siamese": siamese, "spotted": spotted}


# ---- moods: only touch the eyes, brows and mouth ----
def eye_cells():
    return rect(11, 13, 11, 12) + rect(11, 13, 19, 20)


def mouth(g, row15, row16):
    for i in range(8):
        g[15][12 + i] = row15[i]
        g[16][12 + i] = row16[i]


def happy(g):
    for r, c in eye_cells():
        g[r][c] = "B"
    for c in (11, 12, 19, 20):
        g[12][c] = "H"
    for c in (10, 13, 18, 21):
        g[13][c] = "H"
    for c in (8, 9, 22, 23):
        g[14][c] = "K"
    mouth(g, "LOLLLLOL", "LLOOOOLL")


def angry(g):
    for (r, c) in [(10, 10), (10, 11), (11, 12), (11, 13),
                   (10, 21), (10, 20), (11, 19), (11, 18)]:
        g[r][c] = "H"
    g[11][11] = "E"
    g[11][20] = "E"
    mouth(g, "LLLOOLLL", "LLOLLOLL")


def sad(g):
    for (r, c) in [(10, 10), (10, 11), (9, 12), (9, 13),
                   (10, 21), (10, 20), (9, 19), (9, 18)]:
        g[r][c] = "H"
    mouth(g, "LLLOOLLL", "LLOLLOLL")


def sleepy(g):
    for r, c in eye_cells():
        g[r][c] = "B"
    for c in (11, 12, 19, 20):
        g[13][c] = "H"
    for c in (10, 21):
        g[12][c] = "H"


MOODS = {"neutral": lambda g: None, "happy": happy, "angry": angry}#, "sad": sad, "sleepy": sleepy}


def edge_light(g):
    src = [r[:] for r in g]
    for r in range(1, 32):
        for c in range(1, 32):
            if src[r][c] == "B" and (src[r][c - 1] == "O" or src[r - 1][c] == "O"):
                g[r][c] = "J"


def edge_shade(g):
    src = [r[:] for r in g]
    for r in range(31):
        for c in range(31):
            if src[r][c] in "BJ" and (src[r][c + 1] == "O" or src[r + 1][c] == "O"):
                g[r][c] = "S"


def build(coat, mood):
    g = [list(r) for r in BASE]
    assert all(len(r) == 32 for r in g)
    if RIM_LIGHT:
        edge_light(g)
    edge_shade(g)
    for r, row in TAIL.items():
        for i, ch in enumerate(row):
            if ch != ".":
                g[r][27 + i] = ch
    for r, c in TAIL_STRIPE:
        g[r][c] = "S"
    if coat in PATTERNS:
        PATTERNS[coat](g)
    MOODS[mood](g)
    return g


def outline_colours(g, pal):
    """Selective outlining: each O pixel takes the colour of the fur beside it, darkened."""
    at = lambda r, c: g[r][c] if 0 <= r < 32 and 0 <= c < 32 and g[r][c] != "." else None
    n4 = [(-1, 0), (1, 0), (0, -1), (0, 1)]
    n8 = n4 + [(-1, -1), (-1, 1), (1, -1), (1, 1)]
    todo = [(r, c) for r in range(32) for c in range(32) if g[r][c] == "O"]
    out = {}
    for r, c in todo:
        near = [pal[at(r + dr, c + dc)] for dr, dc in n8 if at(r + dr, c + dc) in tuple(FUR)]
        if not near:
            near = [pal[at(r + dr, c + dc)] for dr, dc in n8
                    if at(r + dr, c + dc) not in (None, "O") and at(r + dr, c + dc) in pal]
        if near:
            avg = tuple(sum(v[i] for v in near) / len(near) for i in range(3))
            outer = any(at(r + dr, c + dc) is None for dr, dc in n4)
            out[(r, c)] = darker(avg, OUTER_K if outer else INNER_K)
    pending = [p for p in todo if p not in out]
    while pending:
        done = {}
        for r, c in pending:
            near = [out[(r + dr, c + dc)] for dr, dc in n8 if (r + dr, c + dc) in out]
            if near:
                done[(r, c)] = tuple(round(sum(v[i] for v in near) / len(near)) for i in range(3))
        if not done:
            for p in pending:
                done[p] = darker(pal["B"], OUTER_K)
        out.update(done)
        pending = [p for p in pending if p not in out]
    return out


def render(g, coat):
    pal = {k: hexrgb(v) for k, v in {**SHARED, **COATS[coat]}.items()}
    pal["J"] = lighter(pal["B"], 0.3)
    ol = outline_colours(g, pal)
    img = Image.new("RGBA", (32, 32), (0, 0, 0, 0))
    for y, row in enumerate(g):
        for x, ch in enumerate(row):
            if ch == "O":
                img.putpixel((x, y), ol[(y, x)] + (255,))
            elif ch in pal:
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
    sheet.save(os.path.join(out, "cats_sheet.png"))   # 1x, transparent: rows = coats, cols = moods
    print("done", len(COATS) * len(moods), "sprites")