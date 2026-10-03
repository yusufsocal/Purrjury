from world import make_world


def test_make_world_has_right_length_and_liar_count():
    for _ in range(200):
        world = make_world(9, 3)
        assert len(world) == 9
        assert sum(world) == 3          # True counts as 1


def test_make_world_extremes():
    assert make_world(4, 0) == [False] * 4
    assert make_world(4, 4) == [True] * 4
