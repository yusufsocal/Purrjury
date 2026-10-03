from world import make_world, split_by_type


def test_make_world_has_right_length_and_liar_count():
    for _ in range(200):
        world = make_world(9, 3)
        assert len(world) == 9
        assert sum(world) == 3          # True counts as 1


def test_make_world_extremes():
    assert make_world(4, 0) == [False] * 4
    assert make_world(4, 4) == [True] * 4


def test_split_by_type():
    world = [True, False, True, False]
    liars, honest = split_by_type(world)
    assert liars == [0, 2]
    assert honest == [1, 3]


def test_split_by_type_excludes_index():
    world = [True, False, True, False]
    liars, honest = split_by_type(world, exclude=2)
    assert 2 not in liars and 2 not in honest
    assert liars == [0]
    assert honest == [1, 3]
