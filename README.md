# Purrjury

A logic puzzle about lying cats.

## The game

You get a grid of cats. Every cat is either honest or a liar: honest cats always tell the truth, liars always lie. Each cat says one thing about the others, for example:

- "Felix is a liar."
- "At least 2 of the cats in row 3 are liars."
- "Doodle and Hobbes are both honest, or both liars."

Your job is to figure out which cats are lying. Every puzzle has exactly one solution, and it can always be found with logic alone, no guessing needed.

## How puzzles are made

1. Build a grid of cats with names and colors.
2. Secretly decide which cats are liars.
3. Give every cat a random statement that fits: true if the cat is honest, false if it is a liar.
4. Check every possible combination of liars. If more than one fits all the statements, throw the puzzle away and try again.

## Usage

```
python main.py SIZE [-l N] [-a] [-s N]
```

| Flag | Meaning |
| --- | --- |
| `SIZE` | grid size as ROWSxCOLS, e.g. `3x3` or `2x4` |
| `-l N`, `--liars N` | how many cats are liars (default: about a third of the grid) |
| `-a`, `--answers` | show the answers right away instead of waiting for Enter |
| `-s N`, `--seed N` | generate a specific puzzle again; every run prints its seed |
| `-h`, `--help` | show help |

By default the puzzle is shown, and the answers are revealed when you press Enter.

Examples:

```
python main.py 3x3              # random 3x3 puzzle with 3 liars
python main.py 4x4 -l 5         # 4x4 puzzle with 5 liars
python main.py 3x3 -s 42        # the same puzzle every time
python main.py 3x3 -s 42 -a     # that puzzle with the answers shown
```

## Tests

```
pip install pytest
pytest
```

## Code

Designed and mostly written by me. Claude wrote the tests, main.py, texts.py and helped write some chore functions.