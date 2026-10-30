# Purrjury

Daily logic puzzle: a grid of cats, honest cats always tell the truth, liars always lie, each cat has one clue. Find the liars.
Python engine in `purrjury/`, plain HTML/CSS/JS site in `web/` (GitHub Pages: yusufsocal.github.io/Purrjury/web).
Design by Brojum (Yusuf), most code written by Claude.

## How to work with me
- Short, direct answers. No em dashes. Call me Brom or Brojum now and then.
- Talk before big changes, walk me through what changed afterwards. I want to understand the code.
- Give me commit commands to copy: short conventional commits (`feat(web): ...`, `fix(engine): ...`), split by topic. Don't commit yourself unless I ask.
- Files use CRLF line endings. Keep CRLF when editing. Use `git diff --ignore-cr-at-eol` to see real changes.
- For UI changes with several options, show mockups first.
- Don't make me wait on long background jobs. Tell me as soon as the important part is done.

## Commands
- Tests: `python -m pytest -q` (about 237 tests, keep them green)
- Export puzzles to the site: `python export.py` (writes `web/puzzles.js`)

## Design rules (settled, don't re-argue)
- All clues are visible from the start. Every puzzle is solvable by logic alone and has a unique answer.
- Every puzzle needs openers. Fun = chaining: a solved cat's clue reveals the next. At most 2 clues combined in one step.
- Neighbors = up, down, left, right only.
- One plain wording per clue type, only the words "honest" and "liar". No negative wordings (a test enforces it).
  Either/or reads "At least one of these is true: X, or Y." Puns kept: pawsitively, fur real, purr-fact, I smell a rat.
- About 25% of clues get a cat sound picked by the clue's mood (`Statement.mood()`), from the words only, never the answer.
- Quotes are gone. "X and I are the same/opposites" are trick clues (`is_trick()`), hard and up only.
- Hidden cats only meow; another cat reports what they said (hearsay).
- Colors: black, white, grey, orange, brown, yellow. 2 to 4 cats per color. Orange uses the ginger sprite, yellow the golden one (`SPRITE_COAT`). Other sprites stay for later.
- Puzzles are pre-generated and saved, so code changes never alter old puzzles.

## Difficulty
- 3x3: easy = 1 opener whose cat is revealed (`given`), 1-clue steps. Medium = 2+ openers. Hard = 2-clue steps, only after half the grid is solved.
- 4x4 is one level up (medium, hard, tricky). Tricky only needs an opener before 2-clue steps.
- Goal going forward: openers and steps should reveal only 1 or 2 cats. That's why `path_generator.py` exists.
- Rules alone can't judge difficulty; playtest data decides.

## Code map
- `purrjury/board/`: grid, cats, colors, world, areas
- `purrjury/statements/`: clue types (count_liars, pair, only, all_same, if_then, hearsay), `texts.py` has all wordings
- `purrjury/engine/generator.py`: old random generator plus `add_cat_sounds`
- `purrjury/engine/solver.py`: human-style solver. `solve(grid, known=None)` returns steps `(level, speakers, found, options)`; also `rate`, `levels_for`, `revealed_cat`
- `purrjury/engine/path_generator.py`: builds a puzzle along a solving path, every step reveals exactly 1 cat. Not in `export.py` yet, no tests yet
- `export.py`: rates and saves puzzles with level, given cat, mood and a clue fit table (used by Hint)
- `web/game.js`, `web/style.css`: PC layout (grid fits screen) and phone layout (coat-color band, faint cat, notes panel at bottom)

## Next up
1. Path generator: 2-clue steps at a chosen point, hidden cats, tests, then hook into `export.py`
2. Tutorial page: about 4 tiny interactive puzzles
3. Feedback site: 6 to 8 fixed puzzles incl. an A/B pair (opener reveals 1 cat vs 4), auto-log time and hints, ask hard/fun 1-5
4. Small: no either/or clues for hidden cats, `?v=` cache-busting on CSS/JS, move `make_cats.py` and previews out of `web/sprites`
