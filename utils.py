import random


def weighted_order(weights):
    """Return the keys of weights in a random order, where heavier keys tend to come first.

    weights: dict like {"same": 2, "different": 1}
    Every key appears exactly once, so you can loop over the result and fall back
    to the next key when one doesn't work out.
    """
    remaining = dict(weights)
    order = []
    while remaining:
        keys = list(remaining)
        pick = random.choices(keys, weights=[remaining[k] for k in keys])[0]
        order.append(pick)
        del remaining[pick]
    return order
