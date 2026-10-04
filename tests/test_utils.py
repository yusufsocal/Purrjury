from collections import Counter

from utils import weighted_order


def test_every_key_once():
    weights = {"a": 1, "b": 5, "c": 2}
    for _ in range(100):
        order = weighted_order(weights)
        assert sorted(order) == ["a", "b", "c"]


def test_does_not_change_the_dict():
    weights = {"a": 1, "b": 2}
    weighted_order(weights)
    assert weights == {"a": 1, "b": 2}


def test_heavier_keys_come_first_more_often():
    firsts = Counter(weighted_order({"light": 1, "heavy": 9})[0] for _ in range(2000))
    assert 0.8 < firsts["heavy"] / 2000 < 0.97   # expected about 0.9


def test_empty_dict():
    assert weighted_order({}) == []
