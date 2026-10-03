class Cat:
    def __init__(self, name, row, column, index, color):
        self.name = name        # display name, e.g. "Biscuit"
        self.row = row          # row in the grid (starts at 0)
        self.column = column    # column in the grid (starts at 0)
        self.index = index      # position in a flat list, used as world[index]
        self.color = color      # cat's color
        self.statement = None   # what this cat says, set later by the generator
