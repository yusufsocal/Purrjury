# A world is a list of booleans, one per cat: world[i] is True if cat i is a liar.

import random


def make_world(n_cats, n_liars):
    """Return a world with exactly n_liars random liars."""
    world = [False] * n_cats
    liar_indexes = random.sample(range(n_cats), n_liars)

    # turn the chosen cats into liars
    for i in liar_indexes:
        world[i] = True

    return world
