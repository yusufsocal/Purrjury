# A world is a list of booleans, one per cat: world[i] is True if cat i is a liar.

import random


def make_world(n_cats, n_liars):
    world = [True] * n_cats
    random.sample


def split_by_type(world, exclude=None):
    """Return two lists of indexes: (liars, honest). Optionally leave one index out, e.g. the speaker."""
    liars = []
    honest = []
    for index, is_liar in enumerate(world):
        if index == exclude:
            continue
        if is_liar:
            liars.append(index)
        else:
            honest.append(index)
    return liars, honest
