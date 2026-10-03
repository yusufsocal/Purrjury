import argparse
import random
import sys

from generator import generate_puzzle, print_puzzle


def parse_size(text):
    """Turn "3x4" into (3, 4)."""
    try:
        rows, cols = text.lower().split("x")
        return int(rows), int(cols)
    except ValueError:
        raise argparse.ArgumentTypeError(f"size must look like 3x3, got {text!r}")


def main():
    parser = argparse.ArgumentParser(
        description=(
            "Generate a Purrjury puzzle: a grid of cats where some always lie.\n"
            "Shows the puzzle, waits for Enter, then reveals who the liars are."
        ),
        epilog=(
            "examples:\n"
            "  python main.py 3x3              random 3x3 puzzle with 3 liars\n"
            "  python main.py 4x4 -l 5         4x4 puzzle with 5 liars\n"
            "  python main.py 3x3 -s 42        the same puzzle every time\n"
            "  python main.py 3x3 -s 42 -a     that puzzle with the answers shown"
        ),
        formatter_class=argparse.RawDescriptionHelpFormatter,
    )
    parser.add_argument(
        "size", type=parse_size,
        help="grid size as ROWSxCOLS, e.g. 3x3 or 2x4",
    )
    parser.add_argument(
        "-l", "--liars", type=int, metavar="N",
        help="how many cats are liars (default: about a third of the grid)",
    )
    parser.add_argument(
        "-a", "--answers", action="store_true",
        help="show the answers right away instead of waiting for Enter",
    )
    parser.add_argument(
        "-s", "--seed", type=int, metavar="N",
        help="generate a specific puzzle again; every run prints its seed "
             "(default: random)",
    )
    if len(sys.argv) == 1:
        parser.print_help()
        return
    args = parser.parse_args()

    rows, cols = args.size
    liars = args.liars if args.liars is not None else max(1, rows * cols // 3)
    seed = args.seed if args.seed is not None else random.randrange(1_000_000)
    random.seed(seed)

    result = generate_puzzle(rows, cols, liars)
    if result is None:
        print("No unique puzzle found, try again.")
        return

    grid, world = result
    print(f"Seed: {seed}")
    if args.answers:
        print_puzzle(grid, world)
        return

    print_puzzle(grid)
    input("Press Enter to see the answer...")
    print_puzzle(grid, world)


if __name__ == "__main__":
    main()
