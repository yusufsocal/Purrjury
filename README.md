# Purrjury

A daily logic puzzle about lying cats.

Play it here: [yusufsocal.github.io/Purrjury/web](https://yusufsocal.github.io/Purrjury/web/)

## The game

You get a grid of cats. Every cat is either **honest** or a **liar**: honest cats always tell the truth, liars always lie. Each cat says one thing, for example:

- "Felix is a liar."
- "Exactly 2 of the cats in row 3 are liars."
- "Doodle and Hobbes are both honest, or both liars."
- "I'm the only liar among my neighbors."

Find out which cats are lying. Every puzzle has exactly one solution, and you can always reach it with logic alone, no guessing.

Some cats only meow. You can't read what they said, but another cat tells you: an honest cat repeats it correctly, a liar makes something up.

## Playing in the browser

- Tap a cat to mark it honest, tap again for liar, once more to clear it.
- ✓ greys out a clue you're done with, ✎ adds a note or a tag.
- Right click or long-press a cat to see which cats talk about it.
- **Hint** outlines the clues that can find a new cat right now. **Check** tells you if any marks are wrong.

## Difficulty

Every puzzle is solved by a step-by-step solver that works like a person: it only uses one clue at a time, or two clues together when it has to.

| Level | 3x3 | 4x4 |
| --- | --- | --- |
| Easy | one cat is given, then one clue at a time | |
| Medium | find the first cat yourself, then one clue at a time | one cat is given |
| Hard | two clues together at some point, never right at the start | find the first cat yourself |
| Tricky | | two clues together at some point |

## How puzzles are made

1. Build a grid of cats with names and colors.
2. Secretly decide which cats are liars.
3. Give every cat a random statement that is true if it's honest and false if it's a liar.
4. Keep the puzzle only if exactly one combination of liars fits every statement.
5. Let the solver play it to rate the difficulty. Puzzles a person can't solve step by step are thrown away.

## Running it

Play in the terminal:

```
python main.py 3x3              # a random 3x3 puzzle
python main.py 4x4 -l 5         # a 4x4 with 5 liars
python main.py 3x3 -s 42        # the same puzzle every time (every run prints its seed)
python main.py 3x3 -s 42 -a     # with the answers shown right away
```

Make puzzles for the website (saved to `web/puzzles.js`):

```
python export.py                # 5 puzzles per difficulty, for 3x3 and 4x4
python export.py 3x3 -n 10      # 10 puzzles per difficulty, 3x3 only
```

Then open `web/index.html` in a browser.

Run the tests:

```
pip install pytest
pytest
```

## Project layout

```
purrjury/board/       the grid, cats, colors and areas (rows, neighbors, ...)
purrjury/statements/  everything a cat can say
purrjury/engine/      the generator, the checker and the solver
purrjury/texts.py     the sentences the cats use
main.py, export.py    play in the terminal, make puzzles for the website
web/                  the website
tests/                the tests
```

## Code

Designed and mostly written by me. Claude wrote the tests, main.py, texts.py and helped write some chore functions.
