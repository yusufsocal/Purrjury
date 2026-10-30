"""A generator that builds a puzzle along a solving path, so the difficulty is chosen instead of hoped for.

The old generator (generator.py) makes random clues and keeps the puzzle if it happens to work.
This one works the other way round:

    1. Make the grid and decide the liars (the answer), like before.
    2. Decide the order in which a player should find the cats: the path.
    3. Walk along the path. For each step, give one cat a clue that, together with the cats
       found so far, reveals exactly one new cat (the next one on the path if possible).
       The first step has nothing known yet, so its clue is an opener.
    4. When every cat is found, give the cats that still have no clue a "filler" clue that
       doesn't open a shortcut.
    5. Check the result with the solver we already trust (solver.py): it must get through the
       puzzle the way we planned.

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
from purrjury.engine.generator import add_cat_sounds
from purrjury.engine.solver import forced_cats, solve
from purrjury.statements import ALL_STATEMENTS


@dataclass
class PathSettings:
    """What kind of puzzle to build."""
    max_cats_per_step: int = 1    # how many new cats one step may reveal in the finished puzzle
    openers: int = 1              # the most clues allowed to work with nothing known
    given: bool = False           # easy puzzles: the first cat on the path is shown from the start
    tries_per_step: int = 300     # random statements to try before giving up on a step


def generate_path_puzzle(rows, cols, n_liars, settings=PathSettings(), max_attempts=50):
    """Build a puzzle along a path. Returns (grid, world, steps, given), or None if nothing worked.

    steps is what solve() returns for the finished puzzle, so it can be rated like any other.
    given is the dict of cats shown from the start ({} unless settings.given).
    Each attempt starts over with a new grid, world and path.
    """
    names = load_names()
    for _ in range(max_attempts):
        grid = make_grid(rows, cols, names)
        world = make_world(rows * cols, n_liars)
        path = pick_path(world)

        if not build_along_path(grid, world, path, settings):
            continue
        if not fill_remaining(grid, world, settings):
            continue

        given = {path[0]: world[path[0]]} if settings.given else {}
        steps = solve(grid, given)
        if check_puzzle(steps, settings, given):
            add_cat_sounds(grid)
            return grid, world, steps, given
    return None


def pick_path(world):
    """The order a player should find the cats in: a list of cat indexes.

    For now just a shuffled list of all cats. Later this can get smarter
    (e.g. start with a liar, or keep neighbors close together).
    """
    path = list(range(len(world)))
    random.shuffle(path)
    return path


def build_along_path(grid, world, path, settings):
    """Give clues to cats so the puzzle can be solved one cat at a time. Returns True if it worked.

    known holds the true answer for the cats found so far, just like in the solver.
    Each step first tries to reveal the next cat on the path; if no clue does that, it accepts a clue
    that reveals any one new cat. Either way, every step reveals exactly one cat.
    """
    known = {path[0]: world[path[0]]} if settings.given else {}
    openers = 0   # clues so far that work with nothing known

    while len(known) < len(world):
        target = next(cat for cat in path if cat not in known)
        may_open = openers < settings.openers   # may this clue work with nothing known?
        statement = (find_clue_for_step(grid, world, known, target, may_open, settings)
                     or find_clue_for_step(grid, world, known, None, may_open, settings))
        if statement is None:
            return False   # no clue reveals one new cat, give up on this grid
        get_cat(grid, statement.speaker).statement = statement
        if forced_cats([statement], {}, grid):
            openers += 1
        known.update(forced_cats([statement], known, grid))
    return True


def find_clue_for_step(grid, world, known, target, may_open, settings):
    """A statement that, with the known cats, reveals exactly one new cat. None if none found.

    known:    dict {cat index: True if liar}, the cats found so far
    target:   the cat it should reveal, or None for "any one cat"
    may_open: False when the openers are used up: then the clue must reveal nothing on its own

    Tries random speakers that don't have a clue yet, with random statement types.
    statement_type.random(speaker, grid, world) already makes a statement that fits the speaker
    (true if it's honest, false if it's a liar).
    """
    free = [cat.index for row in grid for cat in row if cat.statement is None]
    used = used_keys(grid)
    for _ in range(settings.tries_per_step):
        speaker = random.choice(free)
        statement = random.choice(ALL_STATEMENTS).random(speaker, grid, world)
        if statement is None or statement.key() in used:
            continue
        found = forced_cats([statement], known, grid)
        if len(found) != 1 or (target is not None and target not in found):
            continue
        if not may_open and known and forced_cats([statement], {}, grid):
            continue   # it would be an extra opener
        return statement
    return None


def fill_remaining(grid, world, settings):
    """Give every cat without a clue a filler clue that doesn't open a shortcut.

    The rule for a filler: on its own, with nothing known, it reveals nothing.
    So it can't become an extra opener. (It may still help later in the puzzle,
    check_puzzle makes sure that never turns into a big jump.)
    Returns False if some cat gets no filler.
    """
    used = used_keys(grid)
    for row in grid:
        for cat in row:
            if cat.statement is not None:
                continue
            for _ in range(settings.tries_per_step):
                statement = random.choice(ALL_STATEMENTS).random(cat.index, grid, world)
                if statement is None or statement.key() in used:
                    continue
                if not forced_cats([statement], {}, grid):
                    cat.statement = statement
                    used.add(statement.key())
                    break
            else:
                return False   # tried them all, nothing harmless fits this cat
    return True


def check_puzzle(steps, settings, given):
    """True if the finished puzzle is what we wanted.

    steps is what solve(grid, given) returned. If the solver gets through every cat with
    single clues, the solution is also unique: every cat was forced, so no other answer fits.
    That's why there's no separate find_solutions check here.
    """
    if steps is None:
        return False   # the solver got stuck
    if any(level == 2 for level, _speakers, _found, _options in steps):
        return False   # first version: only 1-clue steps
    if any(len(found) > settings.max_cats_per_step for _level, _speakers, found, _options in steps):
        return False   # some clue reveals too much at once
    if not given and steps[0][3] > settings.openers:
        return False   # more ways in than we wanted
    return True


def used_keys(grid):
    """Keys of every statement already in the grid, so no two cats say the same thing."""
    return {cat.statement.key() for row in grid for cat in row if cat.statement is not None}
