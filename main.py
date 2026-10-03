from generator import assign_statements, generate_puzzle, print_puzzle
from grid import load_names, make_grid
from world import make_world


def main():
    result = generate_puzzle(3, 3, 3)

    if result is None:
        print("No unique puzzle found, printing a non-unique one instead:")
        grid = make_grid(3, 3, load_names())
        world = make_world(9, 3)
        assign_statements(grid, world)
    else:
        grid, world = result

    print_puzzle(grid, world)


if __name__ == "__main__":
    main()
