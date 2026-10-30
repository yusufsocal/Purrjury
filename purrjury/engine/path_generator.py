"""A generator that builds a puzzle along a solving path, so the difficulty is chosen instead of hoped for.

The old generator (generator.py) makes random clues and keeps the puzzle if it happens to work.
This one works the other way round:

    1. Make the grid and decide the liars (the answer), like before.
    2. Decide the order in which a player should find the cats: the path.
    3. Walk along the path. For each step, give one cat a clue that, together with the cats
       found so far, reveals exactly the next cat(s) on the path, and nothing more.
       The first step has nothing known yet, so its clue is an opener.
    4. When every cat is found, give the cats that still have no clue a "filler" clue that
       doesn't open a shortcut.
    5. Check the result with the tools we already trust: exactly one solution (checker.py),
       and the human-style solver (solver.py) finds it the way we planned.

The settings (PathSettings) are the knobs: how many cats a step may reveal, how many openers,
and later where a 2-clue step goes.

First version, on purpose:
    - only 1-clue steps (2-clue steps come later)
    - no hidden cats / hearsay yet
"""
import random
from dataclasses import dataclass

from purrjury.board.grid import get_cat, load_names, make_grid
from purrjury.board.world import make_world
from purrjury.engine.checker import find_solutions
from purrjury.engine.solver import forced_cats, solve
from purrjury.statements import ALL_STATEMENTS


@dataclass
class PathSettings:
    """What kind of puzzle to build."""
    max_cats_per_step: int = 1    # how many new cats one step may reveal
    openers: int = 1              # how many clues work with nothing known (later: more than 1)
    given: bool = False           # easy puzzles: the first cat on the path is shown from the start
    tries_per_step: int = 200     # random statements to try before giving up on a step


def generate_path_puzzle(rows, cols, n_liars, settings=PathSettings(), max_attempts=50):
    """Build a puzzle along a path. Returns (grid, world, steps), or None if nothing worked.

    steps is what solve() returns for the finished puzzle, so it can be rated like any other.
    Each attempt starts over with a new grid, world and path.
    """
    # TODO: for each attempt:
    #   - make the grid (make_grid with load_names()) and the world (make_world)
    #   - path = pick_path(world)
    #   - build the clues with build_along_path; if it returns False, try the next attempt
    #   - fill_remaining; then if check_puzzle says ok, return grid, world, solve(grid)
    raise NotImplementedError


def pick_path(world):
    """The order a player should find the cats in: a list of cat indexes.

    Start simple: a shuffled list of all cats. Later this can get smarter
    (e.g. start with a liar, or keep neighbors close together).
    """
    # TODO
    raise NotImplementedError


def build_along_path(grid, world, path, settings):
    """Give clues to cats so the path can be followed one step at a time. Returns True if it worked.

    known starts empty (or with path[0] when settings.given), then for every step:
        - the cats to find next are the first cat on the path that isn't known yet
          (later: up to settings.max_cats_per_step of them)
        - find_clue_for_step gives a statement for that; put it on its speaker's cat
        - add the cats it reveals to known
    Stop with False if a step finds no clue.
    """
    # TODO
    raise NotImplementedError


def find_clue_for_step(grid, world, known, targets, settings):
    """A statement that, with the known cats, reveals exactly the cats in targets. None if none found.

    known:   dict {cat index: True if liar}, the cats found so far
    targets: list of cat indexes this step should reveal

    Try random speakers that don't have a clue yet, and random statement types for them
    (statement_type.random(speaker, grid, world) already makes a statement that fits the speaker).
    A statement is good when forced_cats([statement], known, grid) gives exactly the targets.
    """
    # TODO
    raise NotImplementedError


def fill_remaining(grid, world, settings):
    """Give every cat without a clue a filler clue that doesn't open a shortcut.

    A simple safe rule to start with: a filler must reveal nothing on its own when nothing is known
    (forced_cats([statement], {}, grid) is empty), so it can't become an extra opener.
    Returns False if some cat gets no filler.
    """
    # TODO
    raise NotImplementedError


def check_puzzle(grid, settings):
    """True if the finished puzzle is what we wanted.

    - exactly one solution (find_solutions)
    - solve(grid) gets through it, with only 1-clue steps
    - no step reveals more than settings.max_cats_per_step cats
    - the first step has at most settings.openers options (an unplanned extra opener means a shortcut)
    """
    # TODO
    raise NotImplementedError
