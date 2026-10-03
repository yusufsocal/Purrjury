from grid import load_names, make_grid


def main():
    names_by_letter = load_names()
    cat_grid = make_grid(3, 2, names_by_letter)

    # Print each row's size and the cats in it
    for cat_row in cat_grid:
        print(len(cat_row))
        for cat in cat_row:
            print(cat.name, cat.index)


if __name__ == "__main__":
    main()
