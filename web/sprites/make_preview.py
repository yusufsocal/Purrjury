"""The link preview picture and the tab icon, made from the cat sprites.

  og.png                pixel PURRJURY with two tuxedo cats behind it (happy and angry), 1200x630,
                        what chat apps and social sites show when someone shares the link
  favicon.png           the happy tuxedo's head, 32x32, the browser tab icon
  apple-touch-icon.png  the same head, 180x180, for "Add to Home Screen" on phones

Run it from anywhere: python web/sprites/make_preview.py. It writes into web/.
"""
import os
from PIL import Image
from make_cats import build, render, hexrgb

HERE = os.path.dirname(os.path.abspath(__file__))
WEB = os.path.dirname(HERE)

SCALE = 7                      # screen pixels per sprite pixel, the same for the letters and the cats
W, H = 1200 // SCALE + 1, 630 // SCALE + 1
CELL = 3                       # one font cell = 3x3 sprite pixels, so letters are 15x21

# One character = one font cell.
FONT = {
    "P": ["####.", "#...#", "#...#", "####.", "#....", "#....", "#...."],
    "U": ["#...#", "#...#", "#...#", "#...#", "#...#", "#...#", ".###."],
    "R": ["####.", "#...#", "#...#", "####.", "#.#..", "#..#.", "#...#"],
    "J": ["..###", "....#", "....#", "....#", "#...#", "#...#", ".###."],
    "Y": ["#...#", "#...#", ".#.#.", "..#..", "..#..", "..#..", "..#.."],
}
WORD = "PURRJURY"
GAP = 1                        # font cells between letters

BG = "#efe6d2"                 # the cream of the sprite preview
OUTLINE = "#2b1d16"            # the sprites' outline colour
FILL, SHADE, LIGHT = "#e3893d", "#bf6a26", "#eda05a"   # the ginger coat's colours

WORD_W = (len(WORD) * 5 + (len(WORD) - 1) * GAP) * CELL
X0 = (W - WORD_W) // 2         # left edge of the word
Y0 = 46                        # top of the letters
CAT_DROP = 6                   # the cats sit this far below the letters' top edge, so the letters hide their paws


def letter_x(i):
    return X0 + i * (5 + GAP) * CELL


def letter_pixels():
    """Every pixel of the word, as a set of (x, y)."""
    pixels = set()
    for i, ch in enumerate(WORD):
        for r, row in enumerate(FONT[ch]):
            for c, v in enumerate(row):
                if v == "#":
                    pixels |= {(letter_x(i) + c * CELL + dx, Y0 + r * CELL + dy)
                               for dx in range(CELL) for dy in range(CELL)}
    return pixels


def outline(pixels):
    """The ring of pixels around a shape (corners included, like the sprites)."""
    return {(x + dx, y + dy) for x, y in pixels for dx in (-1, 0, 1) for dy in (-1, 0, 1)} - pixels


def put(img, xy, colour):
    img.putpixel(xy, hexrgb(colour) + (255,))


def preview():
    img = Image.new("RGBA", (W, H), hexrgb(BG) + (255,))
    # the cats first, so the letters cover their paws: happy over "UR", angry over the second "UR"
    sit = Y0 - 1 + CAT_DROP
    for k, mood in ((1, "happy"), (5, "angry")):
        x = (letter_x(k) + letter_x(k + 1) + 5 * CELL) // 2 - 16
        img.alpha_composite(render(build("tuxedo", mood), "tuxedo"), (x, sit - 29))   # sprite row 29 is its bottom
    word = letter_pixels()
    for xy in outline(word):
        put(img, xy, OUTLINE)
    for x, y in word:
        # shaded bottom edge, light top edge, like the fur
        put(img, (x, y), SHADE if (x, y + 1) not in word else LIGHT if (x, y - 1) not in word else FILL)
    return img.resize((W * SCALE, H * SCALE), Image.NEAREST).crop((0, 0, 1200, 630))


def head(size):
    """The happy tuxedo with tail, square, on a clear background, scaled up to size."""
    cat = render(build("tuxedo", "happy"), "tuxedo")
    crop = cat.crop((3, 1, 32, 30))                      # 29x29 around the whole cat with tail
    square = Image.new("RGBA", (32, 32), (0, 0, 0, 0))
    square.alpha_composite(crop, (1, 1))
    return square.resize((size, size), Image.NEAREST)


def apple_icon():
    """iPhones put the icon on a black square if it's see-through, so it gets the cream background."""
    icon = Image.new("RGBA", (180, 180), hexrgb(BG) + (255,))
    icon.alpha_composite(head(144), (18, 18))
    return icon.convert("RGB")


if __name__ == "__main__":
    preview().convert("RGB").save(os.path.join(WEB, "og.png"))
    head(32).save(os.path.join(WEB, "favicon.png"))
    apple_icon().save(os.path.join(WEB, "apple-touch-icon.png"))
    print("Made web/og.png, web/favicon.png and web/apple-touch-icon.png")
