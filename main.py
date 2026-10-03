from generator import generate_puzzle, print_puzzle


def main():
    result = generate_puzzle(3, 3, 3)
    if result is None:
        print("No unique puzzle found, try again.")
        return

    grid, world = result
    print("The puzzle:")
    print_puzzle(grid)
    input("Press Enter to see the answer...")
    print_puzzle(grid, world)


if __name__ == "__main__":
    main()
