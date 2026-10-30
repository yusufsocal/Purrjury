// Made by a one-off path generator export, don't edit by hand
const PUZZLES = [
 {
  "rows": 3,
  "cols": 3,
  "seed": 1001,
  "level": "easy",
  "given": 7,
  "cats": [
   {
    "name": "Biscuit",
    "color": "brown",
    "row": 0,
    "column": 0,
    "text": "All of my neighbors are liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     1,
     3
    ],
    "mood": "angry",
    "clue": {
     "cats": [
      0,
      1,
      3
     ],
     "table": "ag=="
    }
   },
   {
    "name": "Clover",
    "color": "black",
    "row": 0,
    "column": 1,
    "text": "Mew. There are as many liars among Kettle's neighbors as among Hazel's neighbors.",
    "hidden": false,
    "secret": null,
    "mentions": [
     3,
     5,
     7
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      1,
      3,
      5,
      7
     ],
     "table": "aWk="
    }
   },
   {
    "name": "Doodle",
    "color": "brown",
    "row": 0,
    "column": 2,
    "text": "Espresso and Fudge are opposites: one is honest, the other is a liar.",
    "hidden": false,
    "secret": null,
    "mentions": [
     3,
     4
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      2,
      3,
      4
     ],
     "table": "lg=="
    }
   },
   {
    "name": "Espresso",
    "color": "yellow",
    "row": 1,
    "column": 0,
    "text": "There are more liars among Hazel's neighbors than in column 3.",
    "hidden": false,
    "secret": null,
    "mentions": [
     2,
     5,
     7,
     8
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      2,
      3,
      5,
      7,
      8
     ],
     "table": "yIHMyA=="
    }
   },
   {
    "name": "Fudge",
    "color": "black",
    "row": 1,
    "column": 1,
    "text": "An odd number of the cats in my row are liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     3,
     5
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      3,
      4,
      5
     ],
     "table": "Wg=="
    }
   },
   {
    "name": "Goose",
    "color": "yellow",
    "row": 1,
    "column": 2,
    "text": "All of the cats to my left are the same: all honest, or all liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     3,
     4
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      3,
      4,
      5
     ],
     "table": "aQ=="
    }
   },
   {
    "name": "Hazel",
    "color": "black",
    "row": 2,
    "column": 0,
    "text": "I'm the only honest cat among Espresso, Fudge and me.",
    "hidden": false,
    "secret": null,
    "mentions": [
     3,
     4
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      3,
      4,
      6
     ],
     "table": "+A=="
    }
   },
   {
    "name": "Jasper",
    "color": "black",
    "row": 2,
    "column": 1,
    "text": "An odd number of the cats in my row are liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     6,
     8
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      6,
      7,
      8
     ],
     "table": "Wg=="
    }
   },
   {
    "name": "Kettle",
    "color": "yellow",
    "row": 2,
    "column": 2,
    "text": "At least one of these is true: Jasper is a liar, or all of the cats in my column are liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     2,
     5,
     7
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      2,
      5,
      7,
      8
     ],
     "table": "8Ac="
    }
   }
  ],
  "liars": [
   false,
   true,
   true,
   true,
   true,
   false,
   false,
   false,
   true
  ]
 },
 {
  "rows": 3,
  "cols": 3,
  "seed": 1002,
  "level": "easy",
  "given": 7,
  "cats": [
   {
    "name": "Ash",
    "color": "yellow",
    "row": 0,
    "column": 0,
    "text": "Indigo is the only honest cat among the cats in column 3.",
    "hidden": false,
    "secret": null,
    "mentions": [
     2,
     5,
     8
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      0,
      2,
      5,
      8
     ],
     "table": "qqY="
    }
   },
   {
    "name": "Coco",
    "color": "brown",
    "row": 0,
    "column": 1,
    "text": "An odd number of the corner cats are liars. Mew.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     2,
     6,
     8
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      0,
      1,
      2,
      6,
      8
     ],
     "table": "lmlplg=="
    }
   },
   {
    "name": "Dumpling",
    "color": "orange",
    "row": 0,
    "column": 2,
    "text": "There are as many liars among my neighbors as among the orange cats.",
    "hidden": false,
    "secret": null,
    "mentions": [
     1,
     3,
     5
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      1,
      2,
      3,
      5
     ],
     "table": "5Vg="
    }
   },
   {
    "name": "Felix",
    "color": "orange",
    "row": 1,
    "column": 0,
    "text": "Meow. At least one of these is true: Kiwi is a liar, or all of the cats in row 3 are liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     6,
     7,
     8
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      3,
      6,
      7,
      8
     ],
     "table": "Wlo="
    }
   },
   {
    "name": "Hazel",
    "color": "yellow",
    "row": 1,
    "column": 1,
    "text": "Mew. An odd number of Juniper's neighbors are liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     3,
     7
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      3,
      4,
      7
     ],
     "table": "lg=="
    }
   },
   {
    "name": "Indigo",
    "color": "brown",
    "row": 1,
    "column": 2,
    "text": "Kiwi is honest, fur real.",
    "hidden": false,
    "secret": null,
    "mentions": [
     7
    ],
    "mood": "happy",
    "clue": {
     "cats": [
      5,
      7
     ],
     "table": "CQ=="
    }
   },
   {
    "name": "Juniper",
    "color": "brown",
    "row": 2,
    "column": 0,
    "text": "All of Coco's neighbors are the same: all honest, or all liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     2,
     4
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      0,
      2,
      4,
      6
     ],
     "table": "gX4="
    }
   },
   {
    "name": "Kiwi",
    "color": "brown",
    "row": 2,
    "column": 1,
    "text": "There are more liars in row 1 than among the brown cats.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     1,
     2,
     5,
     6
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      0,
      1,
      2,
      5,
      6,
      7
     ],
     "table": "+qCgAF////8="
    }
   },
   {
    "name": "Loki",
    "color": "yellow",
    "row": 2,
    "column": 2,
    "text": "All the honest cats in my row are connected.",
    "hidden": false,
    "secret": null,
    "mentions": [
     6,
     7
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      6,
      7,
      8
     ],
     "table": "Aw=="
    }
   }
  ],
  "liars": [
   true,
   false,
   true,
   true,
   false,
   false,
   true,
   false,
   false
  ]
 },
 {
  "rows": 3,
  "cols": 3,
  "seed": 1003,
  "level": "easy",
  "given": 7,
  "cats": [
   {
    "name": "Angus",
    "color": "brown",
    "row": 0,
    "column": 0,
    "text": "There are more honest cats in my row than among the yellow cats.",
    "hidden": false,
    "secret": null,
    "mentions": [
     1,
     2,
     3
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      0,
      1,
      2,
      3
     ],
     "table": "r/U="
    }
   },
   {
    "name": "Bagel",
    "color": "yellow",
    "row": 0,
    "column": 1,
    "text": "Fudge and Indigo are both honest, or both liars. Mew.",
    "hidden": false,
    "secret": null,
    "mentions": [
     5,
     8
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      1,
      5,
      8
     ],
     "table": "aQ=="
    }
   },
   {
    "name": "Coco",
    "color": "black",
    "row": 0,
    "column": 2,
    "text": "An odd number of the cats in my column are liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     5,
     8
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      2,
      5,
      8
     ],
     "table": "PA=="
    }
   },
   {
    "name": "Dusty",
    "color": "yellow",
    "row": 1,
    "column": 0,
    "text": "Mrow. There are as many liars among Ember's neighbors as among the brown cats.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     1,
     5,
     7,
     8
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      0,
      1,
      3,
      5,
      7,
      8
     ],
     "table": "2dnZ2WRkZGQ="
    }
   },
   {
    "name": "Ember",
    "color": "black",
    "row": 1,
    "column": 1,
    "text": "Gnocchi is the only honest cat among the cats on the edges.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     1,
     2,
     3,
     5,
     6,
     7,
     8
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8
     ],
     "table": "AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wCA/38AAP//AAD//w=="
    }
   },
   {
    "name": "Fudge",
    "color": "brown",
    "row": 1,
    "column": 2,
    "text": "At least one of these is true: Coco is a liar, or all of the cats in column 2 are liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     1,
     2,
     4,
     7
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      1,
      2,
      4,
      5,
      7
     ],
     "table": "zDPsEw=="
    }
   },
   {
    "name": "Gnocchi",
    "color": "black",
    "row": 2,
    "column": 0,
    "text": "Among Bagel, Coco and me, at least one is honest and at least one is a liar. Mew.",
    "hidden": false,
    "secret": null,
    "mentions": [
     1,
     2
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      1,
      2,
      6
     ],
     "table": "jg=="
    }
   },
   {
    "name": "Hobbes",
    "color": "brown",
    "row": 2,
    "column": 1,
    "text": "An odd number of Indigo's neighbors are liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     5
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      5,
      7
     ],
     "table": "Cg=="
    }
   },
   {
    "name": "Indigo",
    "color": "brown",
    "row": 2,
    "column": 2,
    "text": "Ember is the only liar among Dusty, Ember and me.",
    "hidden": false,
    "secret": null,
    "mentions": [
     3,
     4
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      3,
      4,
      8
     ],
     "table": "9A=="
    }
   }
  ],
  "liars": [
   true,
   true,
   false,
   false,
   true,
   true,
   false,
   false,
   false
  ]
 },
 {
  "rows": 3,
  "cols": 3,
  "seed": 1004,
  "level": "easy",
  "given": 4,
  "cats": [
   {
    "name": "Angus",
    "color": "black",
    "row": 0,
    "column": 0,
    "text": "All of Honey, Juniper and me are the same: all honest, or all liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     7,
     8
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      0,
      7,
      8
     ],
     "table": "Kw=="
    }
   },
   {
    "name": "Bagel",
    "color": "black",
    "row": 0,
    "column": 1,
    "text": "Meow. All the liars in row 3 are connected.",
    "hidden": false,
    "secret": null,
    "mentions": [
     6,
     7,
     8
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      1,
      6,
      7,
      8
     ],
     "table": "QFg="
    }
   },
   {
    "name": "Coco",
    "color": "white",
    "row": 0,
    "column": 2,
    "text": "There are more liars among Felix's neighbors than among the yellow cats.",
    "hidden": false,
    "secret": null,
    "mentions": [
     3,
     4,
     5,
     6,
     7,
     8
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      2,
      3,
      4,
      5,
      6,
      7,
      8
     ],
     "table": "GIqKqoqqqqpRGBiKGIqKqg=="
    }
   },
   {
    "name": "Dusty",
    "color": "yellow",
    "row": 1,
    "column": 0,
    "text": "There are as many liars among the black cats as among Honey's neighbors.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     1,
     4,
     6,
     8
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      0,
      1,
      3,
      4,
      6,
      8
     ],
     "table": "4ZaWeOGWlng="
    }
   },
   {
    "name": "Echo",
    "color": "white",
    "row": 1,
    "column": 1,
    "text": "An odd number of my neighbors are liars. Meow.",
    "hidden": false,
    "secret": null,
    "mentions": [
     1,
     3,
     5,
     7
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      1,
      3,
      4,
      5,
      7
     ],
     "table": "lmlplg=="
    }
   },
   {
    "name": "Felix",
    "color": "yellow",
    "row": 1,
    "column": 2,
    "text": "I smell a rat. At least one of Bagel, Goose and me is a liar.",
    "hidden": false,
    "secret": null,
    "mentions": [
     1,
     6
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      1,
      5,
      6
     ],
     "table": "Mg=="
    }
   },
   {
    "name": "Goose",
    "color": "yellow",
    "row": 2,
    "column": 0,
    "text": "Echo is the only liar among the white cats. Meow.",
    "hidden": false,
    "secret": null,
    "mentions": [
     2,
     4
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      2,
      4,
      6
     ],
     "table": "tA=="
    }
   },
   {
    "name": "Honey",
    "color": "yellow",
    "row": 2,
    "column": 1,
    "text": "An odd number of the yellow cats are liars. Meow.",
    "hidden": false,
    "secret": null,
    "mentions": [
     3,
     5,
     6
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      3,
      5,
      6,
      7
     ],
     "table": "lpY="
    }
   },
   {
    "name": "Juniper",
    "color": "black",
    "row": 2,
    "column": 2,
    "text": "Exactly 2 of the cats in my row are liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     6,
     7
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      6,
      7,
      8
     ],
     "table": "mA=="
    }
   }
  ],
  "liars": [
   true,
   false,
   true,
   false,
   false,
   false,
   true,
   true,
   false
  ]
 },
 {
  "rows": 3,
  "cols": 3,
  "seed": 1005,
  "level": "easy",
  "given": 1,
  "cats": [
   {
    "name": "Angus",
    "color": "grey",
    "row": 0,
    "column": 0,
    "text": "Mrow. All the honest cats in my row are connected.",
    "hidden": false,
    "secret": null,
    "mentions": [
     1,
     2
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      0,
      1,
      2
     ],
     "table": "EQ=="
    }
   },
   {
    "name": "Bagel",
    "color": "white",
    "row": 0,
    "column": 1,
    "text": "I'm the only honest cat among Clover, Gizmo and me.",
    "hidden": false,
    "secret": null,
    "mentions": [
     2,
     4
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      1,
      2,
      4
     ],
     "table": "6g=="
    }
   },
   {
    "name": "Clover",
    "color": "grey",
    "row": 0,
    "column": 2,
    "text": "An odd number of the grey cats are liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     6,
     7
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      0,
      2,
      6,
      7
     ],
     "table": "WqU="
    }
   },
   {
    "name": "Dumpling",
    "color": "white",
    "row": 1,
    "column": 0,
    "text": "There are more honest cats among Gizmo's neighbors than in column 2.",
    "hidden": false,
    "secret": null,
    "mentions": [
     1,
     4,
     5,
     7
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      1,
      3,
      4,
      5,
      7
     ],
     "table": "P/w//A=="
    }
   },
   {
    "name": "Gizmo",
    "color": "black",
    "row": 1,
    "column": 1,
    "text": "Angus is the only liar among the cats in column 1. Mrow.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     3,
     6
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      0,
      3,
      4,
      6
     ],
     "table": "0vA="
    }
   },
   {
    "name": "Hazel",
    "color": "black",
    "row": 1,
    "column": 2,
    "text": "At least one of these is true: Bagel is honest, or all of the cats in column 2 are liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     1,
     4,
     7
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      1,
      4,
      5,
      7
     ],
     "table": "pS0="
    }
   },
   {
    "name": "Indigo",
    "color": "grey",
    "row": 2,
    "column": 0,
    "text": "At least one of Bagel and Hazel is a liar.",
    "hidden": false,
    "secret": null,
    "mentions": [
     1,
     5
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      1,
      5,
      6
     ],
     "table": "Hg=="
    }
   },
   {
    "name": "Jasper",
    "color": "grey",
    "row": 2,
    "column": 1,
    "text": "An odd number of Hazel's neighbors are liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     2,
     4,
     8
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      2,
      4,
      7,
      8
     ],
     "table": "lmk="
    }
   },
   {
    "name": "Kismet",
    "color": "white",
    "row": 2,
    "column": 2,
    "text": "There are as many liars among Clover's neighbors as in row 1.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     1,
     2,
     5
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      0,
      1,
      2,
      5,
      8
     ],
     "table": "BVr6pQ=="
    }
   }
  ],
  "liars": [
   false,
   false,
   true,
   false,
   true,
   false,
   true,
   false,
   true
  ]
 },
 {
  "rows": 3,
  "cols": 3,
  "seed": 1007,
  "level": "medium",
  "given": null,
  "cats": [
   {
    "name": "Angus",
    "color": "grey",
    "row": 0,
    "column": 0,
    "text": "There are more liars in my column than in row 3.",
    "hidden": false,
    "secret": null,
    "mentions": [
     3,
     6,
     7,
     8
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      0,
      3,
      6,
      7,
      8
     ],
     "table": "RCIiqg=="
    }
   },
   {
    "name": "Cricket",
    "color": "yellow",
    "row": 0,
    "column": 1,
    "text": "Meow. All the honest cats in my row are connected.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     2
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      0,
      1,
      2
     ],
     "table": "Fw=="
    }
   },
   {
    "name": "Dusty",
    "color": "yellow",
    "row": 0,
    "column": 2,
    "text": "Among Angus's neighbors, at least one is honest and at least one is a liar.",
    "hidden": false,
    "secret": null,
    "mentions": [
     1,
     3
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      1,
      2,
      3
     ],
     "table": "lg=="
    }
   },
   {
    "name": "Echo",
    "color": "yellow",
    "row": 1,
    "column": 0,
    "text": "Hiss! Felix and Iggy are both liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     4,
     6
    ],
    "mood": "angry",
    "clue": {
     "cats": [
      3,
      4,
      6
     ],
     "table": "ag=="
    }
   },
   {
    "name": "Felix",
    "color": "orange",
    "row": 1,
    "column": 1,
    "text": "There are more liars among the yellow cats than among the orange cats.",
    "hidden": false,
    "secret": null,
    "mentions": [
     1,
     2,
     3,
     6,
     7,
     8
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      1,
      2,
      3,
      4,
      6,
      7,
      8
     ],
     "table": "/hfof+h/gP/of4D/gP8A/w=="
    }
   },
   {
    "name": "Hobbes",
    "color": "grey",
    "row": 1,
    "column": 2,
    "text": "All of the cats in my column are liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     2,
     8
    ],
    "mood": "angry",
    "clue": {
     "cats": [
      2,
      5,
      8
     ],
     "table": "TA=="
    }
   },
   {
    "name": "Iggy",
    "color": "orange",
    "row": 2,
    "column": 0,
    "text": "An odd number of Cricket, Kiwi and me are liars. Meow.",
    "hidden": false,
    "secret": null,
    "mentions": [
     1,
     7
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      1,
      6,
      7
     ],
     "table": "Wg=="
    }
   },
   {
    "name": "Kiwi",
    "color": "orange",
    "row": 2,
    "column": 1,
    "text": "Meow. I'm the only liar among Angus, Cricket and me.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     1
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      0,
      1,
      7
     ],
     "table": "4A=="
    }
   },
   {
    "name": "Luna",
    "color": "orange",
    "row": 2,
    "column": 2,
    "text": "An odd number of my neighbors are liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     5,
     7
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      5,
      7,
      8
     ],
     "table": "lg=="
    }
   }
  ],
  "liars": [
   true,
   false,
   false,
   true,
   true,
   true,
   false,
   true,
   true
  ]
 },
 {
  "rows": 3,
  "cols": 3,
  "seed": 1008,
  "level": "medium",
  "given": null,
  "cats": [
   {
    "name": "Apricot",
    "color": "grey",
    "row": 0,
    "column": 0,
    "text": "At least one of these is true: Felix is honest, or all of the corner cats are liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     2,
     3,
     6,
     8
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      0,
      2,
      3,
      6,
      8
     ],
     "table": "paWlJQ=="
    }
   },
   {
    "name": "Coco",
    "color": "brown",
    "row": 0,
    "column": 1,
    "text": "All the honest cats in row 2 are connected.",
    "hidden": false,
    "secret": null,
    "mentions": [
     3,
     4,
     5
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      1,
      3,
      4,
      5
     ],
     "table": "JQE="
    }
   },
   {
    "name": "Echo",
    "color": "brown",
    "row": 0,
    "column": 2,
    "text": "Jasper is the only liar among the cats in row 3.",
    "hidden": false,
    "secret": null,
    "mentions": [
     6,
     7,
     8
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      2,
      6,
      7,
      8
     ],
     "table": "mqo="
    }
   },
   {
    "name": "Felix",
    "color": "white",
    "row": 1,
    "column": 0,
    "text": "Gnocchi is honest. That's a purr-fact.",
    "hidden": false,
    "secret": null,
    "mentions": [
     4
    ],
    "mood": "happy",
    "clue": {
     "cats": [
      3,
      4
     ],
     "table": "CQ=="
    }
   },
   {
    "name": "Gnocchi",
    "color": "grey",
    "row": 1,
    "column": 1,
    "text": "At least one of the cats on the edges is a liar.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     1,
     2,
     3,
     5,
     6,
     7,
     8
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8
     ],
     "table": "/v8BAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAA=="
    }
   },
   {
    "name": "Hazel",
    "color": "black",
    "row": 1,
    "column": 2,
    "text": "Coco and Echo are both honest, or both liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     1,
     2
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      1,
      2,
      5
     ],
     "table": "aQ=="
    }
   },
   {
    "name": "Inky",
    "color": "white",
    "row": 2,
    "column": 0,
    "text": "Meow. There are more liars among the grey cats than among the white cats.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     3,
     4
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      0,
      3,
      4,
      6
     ],
     "table": "st8="
    }
   },
   {
    "name": "Jasper",
    "color": "black",
    "row": 2,
    "column": 1,
    "text": "Mew. There are more honest cats among the grey cats than among Hazel's neighbors.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     2,
     4,
     8
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      0,
      2,
      4,
      7,
      8
     ],
     "table": "AP9Euw=="
    }
   },
   {
    "name": "Oreo",
    "color": "black",
    "row": 2,
    "column": 2,
    "text": "Inky is the only honest cat among the cats in my row.",
    "hidden": false,
    "secret": null,
    "mentions": [
     6,
     7
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      6,
      7,
      8
     ],
     "table": "sA=="
    }
   }
  ],
  "liars": [
   false,
   false,
   true,
   false,
   false,
   true,
   true,
   false,
   true
  ]
 },
 {
  "rows": 3,
  "cols": 3,
  "seed": 1009,
  "level": "medium",
  "given": null,
  "cats": [
   {
    "name": "Ash",
    "color": "yellow",
    "row": 0,
    "column": 0,
    "text": "Among the cats in my column, at least one is honest and at least one is a liar.",
    "hidden": false,
    "secret": null,
    "mentions": [
     3,
     6
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      0,
      3,
      6
     ],
     "table": "1A=="
    }
   },
   {
    "name": "Bean",
    "color": "white",
    "row": 0,
    "column": 1,
    "text": "Mew. All the liars in row 2 are connected.",
    "hidden": false,
    "secret": null,
    "mentions": [
     3,
     4,
     5
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      1,
      3,
      4,
      5
     ],
     "table": "QFg="
    }
   },
   {
    "name": "Coco",
    "color": "orange",
    "row": 0,
    "column": 2,
    "text": "Echo is a liar.",
    "hidden": false,
    "secret": null,
    "mentions": [
     4
    ],
    "mood": "angry",
    "clue": {
     "cats": [
      2,
      4
     ],
     "table": "Bg=="
    }
   },
   {
    "name": "Dusty",
    "color": "orange",
    "row": 1,
    "column": 0,
    "text": "I'm the only liar among the orange cats.",
    "hidden": false,
    "secret": null,
    "mentions": [
     2,
     4,
     8
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      2,
      3,
      4,
      8
     ],
     "table": "yMw="
    }
   },
   {
    "name": "Echo",
    "color": "orange",
    "row": 1,
    "column": 1,
    "text": "All of the orange cats are honest.",
    "hidden": false,
    "secret": null,
    "mentions": [
     2,
     3,
     8
    ],
    "mood": "happy",
    "clue": {
     "cats": [
      2,
      3,
      4,
      8
     ],
     "table": "8fA="
    }
   },
   {
    "name": "Indigo",
    "color": "white",
    "row": 1,
    "column": 2,
    "text": "Among my neighbors, at least one is honest and at least one is a liar.",
    "hidden": false,
    "secret": null,
    "mentions": [
     2,
     4,
     8
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      2,
      4,
      5,
      8
     ],
     "table": "Hoc="
    }
   },
   {
    "name": "Jasper",
    "color": "yellow",
    "row": 2,
    "column": 0,
    "text": "An odd number of Ash's neighbors are liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     1,
     3
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      1,
      3,
      6
     ],
     "table": "lg=="
    }
   },
   {
    "name": "Kettle",
    "color": "white",
    "row": 2,
    "column": 1,
    "text": "Echo is the only honest cat among the cats above me.",
    "hidden": false,
    "secret": null,
    "mentions": [
     1,
     4
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      1,
      4,
      7
     ],
     "table": "0g=="
    }
   },
   {
    "name": "Loki",
    "color": "orange",
    "row": 2,
    "column": 2,
    "text": "There are more liars among Echo's neighbors than among the yellow cats.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     1,
     3,
     5,
     6,
     7
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      0,
      1,
      3,
      5,
      6,
      7,
      8
     ],
     "table": "1P1A1P3/1P0rAr8rAgArAg=="
    }
   }
  ],
  "liars": [
   false,
   false,
   false,
   true,
   true,
   false,
   false,
   true,
   false
  ]
 },
 {
  "rows": 3,
  "cols": 3,
  "seed": 1010,
  "level": "medium",
  "given": null,
  "cats": [
   {
    "name": "Ash",
    "color": "white",
    "row": 0,
    "column": 0,
    "text": "There are as many liars among Jasper's neighbors as among Echo's neighbors.",
    "hidden": false,
    "secret": null,
    "mentions": [
     4,
     6,
     8
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      0,
      4,
      6,
      8
     ],
     "table": "/wA="
    }
   },
   {
    "name": "Bean",
    "color": "white",
    "row": 0,
    "column": 1,
    "text": "All of the cats in row 2 are liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     3,
     4,
     5
    ],
    "mood": "angry",
    "clue": {
     "cats": [
      1,
      3,
      4,
      5
     ],
     "table": "qmo="
    }
   },
   {
    "name": "Coco",
    "color": "brown",
    "row": 0,
    "column": 2,
    "text": "Among the corner cats, at least one is honest and at least one is a liar.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     6,
     8
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      0,
      2,
      6,
      8
     ],
     "table": "MrM="
    }
   },
   {
    "name": "Echo",
    "color": "brown",
    "row": 1,
    "column": 0,
    "text": "An odd number of my neighbors are liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     4,
     6
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      0,
      3,
      4,
      6
     ],
     "table": "lmk="
    }
   },
   {
    "name": "Gnocchi",
    "color": "brown",
    "row": 1,
    "column": 1,
    "text": "All of the cats in row 3 are the same: all honest, or all liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     6,
     7,
     8
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      4,
      6,
      7,
      8
     ],
     "table": "qWo="
    }
   },
   {
    "name": "Honey",
    "color": "yellow",
    "row": 1,
    "column": 2,
    "text": "At least one of these is true: Coco is a liar, or all of Ash, Bean and me are honest.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     1,
     2
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      0,
      1,
      2,
      5
     ],
     "table": "8Q8="
    }
   },
   {
    "name": "Iggy",
    "color": "yellow",
    "row": 2,
    "column": 0,
    "text": "All the liars in my column are connected. Mew.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     3
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      0,
      3,
      6
     ],
     "table": "KA=="
    }
   },
   {
    "name": "Jasper",
    "color": "white",
    "row": 2,
    "column": 1,
    "text": "Kiwi is pawsitively honest.",
    "hidden": false,
    "secret": null,
    "mentions": [
     8
    ],
    "mood": "happy",
    "clue": {
     "cats": [
      7,
      8
     ],
     "table": "CQ=="
    }
   },
   {
    "name": "Kiwi",
    "color": "white",
    "row": 2,
    "column": 2,
    "text": "At least one of the cats to my left is a liar.",
    "hidden": false,
    "secret": null,
    "mentions": [
     6,
     7
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      6,
      7,
      8
     ],
     "table": "Hg=="
    }
   }
  ],
  "liars": [
   true,
   true,
   false,
   false,
   true,
   true,
   true,
   false,
   false
  ]
 },
 {
  "rows": 3,
  "cols": 3,
  "seed": 1011,
  "level": "medium",
  "given": null,
  "cats": [
   {
    "name": "Cricket",
    "color": "brown",
    "row": 0,
    "column": 0,
    "text": "An odd number of Echo's neighbors are liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     1,
     5
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      0,
      1,
      5
     ],
     "table": "lg=="
    }
   },
   {
    "name": "Dumpling",
    "color": "black",
    "row": 0,
    "column": 1,
    "text": "I'm the only liar among the cats in my column. Mew.",
    "hidden": false,
    "secret": null,
    "mentions": [
     4,
     7
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      1,
      4,
      7
     ],
     "table": "qA=="
    }
   },
   {
    "name": "Echo",
    "color": "white",
    "row": 0,
    "column": 2,
    "text": "Inky is the only liar among Cricket, Inky and me.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     6
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      0,
      2,
      6
     ],
     "table": "3A=="
    }
   },
   {
    "name": "Fudge",
    "color": "black",
    "row": 1,
    "column": 0,
    "text": "Cricket is honest, but Jasper is a liar.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     7
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      0,
      3,
      7
     ],
     "table": "nA=="
    }
   },
   {
    "name": "Gnocchi",
    "color": "white",
    "row": 1,
    "column": 1,
    "text": "Hiss! All of the cats in my row are liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     3,
     5
    ],
    "mood": "angry",
    "clue": {
     "cats": [
      3,
      4,
      5
     ],
     "table": "TA=="
    }
   },
   {
    "name": "Hobbes",
    "color": "black",
    "row": 1,
    "column": 2,
    "text": "At least one of these is true: Dumpling is a liar, or all of the brown cats are liars. Meow.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     1,
     8
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      0,
      1,
      5,
      8
     ],
     "table": "PB4="
    }
   },
   {
    "name": "Inky",
    "color": "black",
    "row": 2,
    "column": 0,
    "text": "Echo and Fudge are opposites: one is honest, the other is a liar.",
    "hidden": false,
    "secret": null,
    "mentions": [
     2,
     3
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      2,
      3,
      6
     ],
     "table": "lg=="
    }
   },
   {
    "name": "Jasper",
    "color": "white",
    "row": 2,
    "column": 1,
    "text": "An odd number of the white cats are liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     2,
     4
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      2,
      4,
      7
     ],
     "table": "Zg=="
    }
   },
   {
    "name": "Kismet",
    "color": "brown",
    "row": 2,
    "column": 2,
    "text": "All the honest cats in column 1 are connected.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     3,
     6
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      0,
      3,
      6,
      8
     ],
     "table": "EwQ="
    }
   }
  ],
  "liars": [
   false,
   true,
   false,
   false,
   true,
   false,
   true,
   true,
   false
  ]
 },
 {
  "rows": 3,
  "cols": 3,
  "seed": 1012,
  "level": "hard",
  "given": null,
  "cats": [
   {
    "name": "Apricot",
    "color": "grey",
    "row": 0,
    "column": 0,
    "text": "Coco is the only honest cat among the cats to my right.",
    "hidden": false,
    "secret": null,
    "mentions": [
     1,
     2
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      0,
      1,
      2
     ],
     "table": "pg=="
    }
   },
   {
    "name": "Bean",
    "color": "grey",
    "row": 0,
    "column": 1,
    "text": "There are more liars among Coco's neighbors than in column 3.",
    "hidden": false,
    "secret": null,
    "mentions": [
     2,
     5,
     8
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      1,
      2,
      5,
      8
     ],
     "table": "iKo="
    }
   },
   {
    "name": "Coco",
    "color": "grey",
    "row": 0,
    "column": 2,
    "text": "At least one of these is true: Bean is a liar, or all of the yellow cats are honest.",
    "hidden": false,
    "secret": null,
    "mentions": [
     1,
     3,
     4,
     8
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      1,
      2,
      3,
      4,
      8
     ],
     "table": "Y2ZmZg=="
    }
   },
   {
    "name": "Doodle",
    "color": "yellow",
    "row": 1,
    "column": 0,
    "text": "An odd number of the grey cats are liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     1,
     2
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      0,
      1,
      2,
      3
     ],
     "table": "lmk="
    }
   },
   {
    "name": "Espresso",
    "color": "yellow",
    "row": 1,
    "column": 1,
    "text": "There are as many liars among the yellow cats as in row 1.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     1,
     2,
     3,
     8
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      0,
      1,
      2,
      3,
      4,
      8
     ],
     "table": "ARbplxZol38="
    }
   },
   {
    "name": "Felix",
    "color": "black",
    "row": 1,
    "column": 2,
    "text": "All of the cats in my column are the same: all honest, or all liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     2,
     8
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      2,
      5,
      8
     ],
     "table": "TQ=="
    }
   },
   {
    "name": "Goose",
    "color": "black",
    "row": 2,
    "column": 0,
    "text": "Purr. Espresso is honest, fur real.",
    "hidden": false,
    "secret": null,
    "mentions": [
     4
    ],
    "mood": "happy",
    "clue": {
     "cats": [
      4,
      6
     ],
     "table": "CQ=="
    }
   },
   {
    "name": "Iggy",
    "color": "black",
    "row": 2,
    "column": 1,
    "text": "Among the black cats, at least one is honest and at least one is a liar.",
    "hidden": false,
    "secret": null,
    "mentions": [
     5,
     6
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      5,
      6,
      7
     ],
     "table": "jg=="
    }
   },
   {
    "name": "Juniper",
    "color": "yellow",
    "row": 2,
    "column": 2,
    "text": "An odd number of the cats in column 1 are liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     3,
     6
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      0,
      3,
      6,
      8
     ],
     "table": "lmk="
    }
   }
  ],
  "liars": [
   false,
   true,
   false,
   false,
   false,
   true,
   false,
   false,
   true
  ]
 },
 {
  "rows": 3,
  "cols": 3,
  "seed": 1013,
  "level": "hard",
  "given": null,
  "cats": [
   {
    "name": "Angus",
    "color": "black",
    "row": 0,
    "column": 0,
    "text": "An odd number of Kettle's neighbors are liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     4,
     6,
     8
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      0,
      4,
      6,
      8
     ],
     "table": "lmk="
    }
   },
   {
    "name": "Bagel",
    "color": "white",
    "row": 0,
    "column": 1,
    "text": "There are more honest cats among the yellow cats than in my row.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     2,
     6,
     8
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      0,
      1,
      2,
      6,
      8
     ],
     "table": "IkREzA=="
    }
   },
   {
    "name": "Doodle",
    "color": "yellow",
    "row": 0,
    "column": 2,
    "text": "Echo is the only liar among the cats in row 2.",
    "hidden": false,
    "secret": null,
    "mentions": [
     3,
     4,
     5
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      2,
      3,
      4,
      5
     ],
     "table": "pqo="
    }
   },
   {
    "name": "Echo",
    "color": "white",
    "row": 1,
    "column": 0,
    "text": "At least one of these is true: Luna is a liar, or all of the cats in my column are liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     6,
     8
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      0,
      3,
      6,
      8
     ],
     "table": "TDM="
    }
   },
   {
    "name": "Fudge",
    "color": "black",
    "row": 1,
    "column": 1,
    "text": "Kettle and Luna are opposites: one is honest, the other is a liar.",
    "hidden": false,
    "secret": null,
    "mentions": [
     7,
     8
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      4,
      7,
      8
     ],
     "table": "lg=="
    }
   },
   {
    "name": "Hobbes",
    "color": "white",
    "row": 1,
    "column": 2,
    "text": "Echo is honest, but Inky is a liar.",
    "hidden": false,
    "secret": null,
    "mentions": [
     3,
     6
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      3,
      5,
      6
     ],
     "table": "nA=="
    }
   },
   {
    "name": "Inky",
    "color": "yellow",
    "row": 2,
    "column": 0,
    "text": "Bagel is honest, fur real. Purr.",
    "hidden": false,
    "secret": null,
    "mentions": [
     1
    ],
    "mood": "happy",
    "clue": {
     "cats": [
      1,
      6
     ],
     "table": "CQ=="
    }
   },
   {
    "name": "Kettle",
    "color": "black",
    "row": 2,
    "column": 1,
    "text": "There are more honest cats among my neighbors than among Doodle's neighbors.",
    "hidden": false,
    "secret": null,
    "mentions": [
     1,
     4,
     5,
     6,
     8
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      1,
      4,
      5,
      6,
      7,
      8
     ],
     "table": "+7IETbIgTd8="
    }
   },
   {
    "name": "Luna",
    "color": "yellow",
    "row": 2,
    "column": 2,
    "text": "All of Hobbes, Inky and me are liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     5,
     6
    ],
    "mood": "angry",
    "clue": {
     "cats": [
      5,
      6,
      8
     ],
     "table": "cA=="
    }
   }
  ],
  "liars": [
   false,
   true,
   true,
   false,
   true,
   false,
   true,
   true,
   true
  ]
 },
 {
  "rows": 3,
  "cols": 3,
  "seed": 1014,
  "level": "hard",
  "given": null,
  "cats": [
   {
    "name": "Ash",
    "color": "yellow",
    "row": 0,
    "column": 0,
    "text": "All of the cats to my right are the same: all honest, or all liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     1,
     2
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      0,
      1,
      2
     ],
     "table": "aQ=="
    }
   },
   {
    "name": "Biscuit",
    "color": "yellow",
    "row": 0,
    "column": 1,
    "text": "Among the cats on the edges, at least one is honest and at least one is a liar.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     2,
     3,
     5,
     6,
     7,
     8
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      0,
      1,
      2,
      3,
      5,
      6,
      7,
      8
     ],
     "table": "MjMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzM7M="
    }
   },
   {
    "name": "Coco",
    "color": "yellow",
    "row": 0,
    "column": 2,
    "text": "An odd number of the black cats are liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     6,
     7
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      2,
      6,
      7
     ],
     "table": "lg=="
    }
   },
   {
    "name": "Doodle",
    "color": "yellow",
    "row": 1,
    "column": 0,
    "text": "I'm the only honest cat among Gnocchi's neighbors.",
    "hidden": false,
    "secret": null,
    "mentions": [
     7
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      3,
      7
     ],
     "table": "Dg=="
    }
   },
   {
    "name": "Ember",
    "color": "brown",
    "row": 1,
    "column": 1,
    "text": "Mew. At least one of these is true: Doodle is a liar, or all of the cats in row 1 are honest.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     1,
     2,
     3
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      0,
      1,
      2,
      3,
      4
     ],
     "table": "Af/+AA=="
    }
   },
   {
    "name": "Felix",
    "color": "brown",
    "row": 1,
    "column": 2,
    "text": "At least one of Ash and me is honest. Meow.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      0,
      5
     ],
     "table": "Cw=="
    }
   },
   {
    "name": "Gnocchi",
    "color": "black",
    "row": 2,
    "column": 0,
    "text": "All the liars in column 3 are connected.",
    "hidden": false,
    "secret": null,
    "mentions": [
     2,
     5,
     8
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      2,
      5,
      6,
      8
     ],
     "table": "CCw="
    }
   },
   {
    "name": "Hobbes",
    "color": "black",
    "row": 2,
    "column": 1,
    "text": "An odd number of Iggy's neighbors are liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     5
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      5,
      7
     ],
     "table": "Cg=="
    }
   },
   {
    "name": "Iggy",
    "color": "brown",
    "row": 2,
    "column": 2,
    "text": "There are at least 3 liars in total.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     1,
     2,
     3,
     4,
     5,
     6,
     7
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8
     ],
     "table": "gOjo/uj+/v/o/v7//v///+j+/v/+/////v////////8XAQEAAQAAAAEAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAA=="
    }
   }
  ],
  "liars": [
   true,
   false,
   true,
   true,
   false,
   true,
   false,
   false,
   false
  ]
 },
 {
  "rows": 3,
  "cols": 3,
  "seed": 1015,
  "level": "hard",
  "given": null,
  "cats": [
   {
    "name": "Apricot",
    "color": "yellow",
    "row": 0,
    "column": 0,
    "text": "At least one of the cats below me is a liar.",
    "hidden": false,
    "secret": null,
    "mentions": [
     3,
     6
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      0,
      3,
      6
     ],
     "table": "Vg=="
    }
   },
   {
    "name": "Bagel",
    "color": "yellow",
    "row": 0,
    "column": 1,
    "text": "All of Clover's neighbors are the same: all honest, or all liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     5
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      1,
      5
     ],
     "table": "Aw=="
    }
   },
   {
    "name": "Clover",
    "color": "white",
    "row": 0,
    "column": 2,
    "text": "An odd number of Bagel's neighbors are liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     4
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      0,
      2,
      4
     ],
     "table": "Wg=="
    }
   },
   {
    "name": "Doodle",
    "color": "grey",
    "row": 1,
    "column": 0,
    "text": "At least one of these is true: Felix is honest, or all of the cats in column 3 are honest.",
    "hidden": false,
    "secret": null,
    "mentions": [
     2,
     5,
     8
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      2,
      3,
      5,
      8
     ],
     "table": "w8M="
    }
   },
   {
    "name": "Espresso",
    "color": "white",
    "row": 1,
    "column": 1,
    "text": "An odd number of Indigo's neighbors are liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     5,
     7
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      4,
      5,
      7
     ],
     "table": "lg=="
    }
   },
   {
    "name": "Felix",
    "color": "grey",
    "row": 1,
    "column": 2,
    "text": "Bagel and Doodle are both honest, or both liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     1,
     3
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      1,
      3,
      5
     ],
     "table": "aQ=="
    }
   },
   {
    "name": "Goose",
    "color": "white",
    "row": 2,
    "column": 0,
    "text": "All of the grey cats are liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     3,
     5
    ],
    "mood": "angry",
    "clue": {
     "cats": [
      3,
      5,
      6
     ],
     "table": "eA=="
    }
   },
   {
    "name": "Honey",
    "color": "white",
    "row": 2,
    "column": 1,
    "text": "There are as many liars in my row as among Bagel's neighbors.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     2,
     4,
     6,
     8
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      0,
      2,
      4,
      6,
      7,
      8
     ],
     "table": "ARbplxZol38="
    }
   },
   {
    "name": "Indigo",
    "color": "yellow",
    "row": 2,
    "column": 2,
    "text": "All the honest cats in row 1 are connected.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     1,
     2
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      0,
      1,
      2,
      8
     ],
     "table": "EwQ="
    }
   }
  ],
  "liars": [
   false,
   false,
   false,
   false,
   true,
   false,
   true,
   false,
   false
  ]
 },
 {
  "rows": 3,
  "cols": 3,
  "seed": 1016,
  "level": "hard",
  "given": null,
  "cats": [
   {
    "name": "Angus",
    "color": "brown",
    "row": 0,
    "column": 0,
    "text": "Bean is the only honest cat among the cats in my row.",
    "hidden": false,
    "secret": null,
    "mentions": [
     1,
     2
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      0,
      1,
      2
     ],
     "table": "ig=="
    }
   },
   {
    "name": "Bean",
    "color": "grey",
    "row": 0,
    "column": 1,
    "text": "Angus and Cricket are both honest, or both liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     2
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      0,
      1,
      2
     ],
     "table": "aQ=="
    }
   },
   {
    "name": "Cricket",
    "color": "black",
    "row": 0,
    "column": 2,
    "text": "At least one of Angus and Kettle is a liar.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     7
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      0,
      2,
      7
     ],
     "table": "Ng=="
    }
   },
   {
    "name": "Doodle",
    "color": "brown",
    "row": 1,
    "column": 0,
    "text": "An odd number of the black cats are liars. Mrow.",
    "hidden": false,
    "secret": null,
    "mentions": [
     2,
     4,
     5,
     8
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      2,
      3,
      4,
      5,
      8
     ],
     "table": "lmlplg=="
    }
   },
   {
    "name": "Felix",
    "color": "black",
    "row": 1,
    "column": 1,
    "text": "There are as many liars in column 3 as among Bean's neighbors.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     2,
     5,
     8
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      0,
      2,
      4,
      5,
      8
     ],
     "table": "9aqqUA=="
    }
   },
   {
    "name": "Iggy",
    "color": "black",
    "row": 1,
    "column": 2,
    "text": "An odd number of Bean, Doodle and me are liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     1,
     3
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      1,
      3,
      5
     ],
     "table": "Zg=="
    }
   },
   {
    "name": "Juniper",
    "color": "brown",
    "row": 2,
    "column": 0,
    "text": "All of the cats above me are the same: all honest, or all liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     3
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      0,
      3,
      6
     ],
     "table": "aQ=="
    }
   },
   {
    "name": "Kettle",
    "color": "grey",
    "row": 2,
    "column": 1,
    "text": "Among Cricket's neighbors, at least one is honest and at least one is a liar.",
    "hidden": false,
    "secret": null,
    "mentions": [
     1,
     5
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      1,
      5,
      7
     ],
     "table": "lg=="
    }
   },
   {
    "name": "Marble",
    "color": "black",
    "row": 2,
    "column": 2,
    "text": "There are more honest cats in column 2 than among the black cats.",
    "hidden": false,
    "secret": null,
    "mentions": [
     1,
     2,
     4,
     5,
     7
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      1,
      2,
      4,
      5,
      7,
      8
     ],
     "table": "AEQAALsi/7s="
    }
   }
  ],
  "liars": [
   true,
   true,
   false,
   false,
   false,
   false,
   true,
   false,
   true
  ]
 },
 {
  "rows": 4,
  "cols": 4,
  "seed": 1017,
  "level": "medium",
  "given": null,
  "cats": [
   {
    "name": "Angus",
    "color": "white",
    "row": 0,
    "column": 0,
    "text": "At least one of these is true: Espresso is honest, or all of the cats to my right are honest. Meow.",
    "hidden": false,
    "secret": null,
    "mentions": [
     1,
     2,
     3,
     4
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      0,
      1,
      2,
      3,
      4
     ],
     "table": "VVWpqg=="
    }
   },
   {
    "name": "Biscuit",
    "color": "black",
    "row": 0,
    "column": 1,
    "text": "All of Angus's neighbors are the same: all honest, or all liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     4
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      1,
      4
     ],
     "table": "Aw=="
    }
   },
   {
    "name": "Coco",
    "color": "black",
    "row": 0,
    "column": 2,
    "text": "All the honest cats in column 2 are connected. Mew.",
    "hidden": false,
    "secret": null,
    "mentions": [
     1,
     5,
     9,
     13
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      1,
      2,
      5,
      9,
      13
     ],
     "table": "Y0xDAQ=="
    }
   },
   {
    "name": "Dusty",
    "color": "yellow",
    "row": 0,
    "column": 3,
    "text": "All of the white cats are honest.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     14
    ],
    "mood": "happy",
    "clue": {
     "cats": [
      0,
      3,
      14
     ],
     "table": "yQ=="
    }
   },
   {
    "name": "Espresso",
    "color": "yellow",
    "row": 1,
    "column": 0,
    "text": "An odd number of the cats in row 1 are liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     1,
     2,
     3
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      0,
      1,
      2,
      3,
      4
     ],
     "table": "lmlplg=="
    }
   },
   {
    "name": "Felix",
    "color": "orange",
    "row": 1,
    "column": 1,
    "text": "Rolo is the only honest cat among Nugget's neighbors.",
    "hidden": false,
    "secret": null,
    "mentions": [
     7,
     10,
     15
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      5,
      7,
      10,
      15
     ],
     "table": "aqo="
    }
   },
   {
    "name": "Goose",
    "color": "grey",
    "row": 1,
    "column": 2,
    "text": "At least one of the cats in row 3 is a liar.",
    "hidden": false,
    "secret": null,
    "mentions": [
     8,
     9,
     10,
     11
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      6,
      8,
      9,
      10,
      11
     ],
     "table": "VlVVVQ=="
    }
   },
   {
    "name": "Hazel",
    "color": "yellow",
    "row": 1,
    "column": 3,
    "text": "Meow. All of the grey cats are the same: all honest, or all liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     6,
     9,
     11
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      6,
      7,
      9,
      11
     ],
     "table": "yWw="
    }
   },
   {
    "name": "Jasper",
    "color": "orange",
    "row": 2,
    "column": 0,
    "text": "An odd number of Pickles's neighbors are liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     9,
     12,
     14
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      8,
      9,
      12,
      14
     ],
     "table": "lmk="
    }
   },
   {
    "name": "Luna",
    "color": "grey",
    "row": 2,
    "column": 1,
    "text": "Espresso is the only honest cat among the cats in column 1.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     4,
     8,
     12
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      0,
      4,
      8,
      9,
      12
     ],
     "table": "AP8g3w=="
    }
   },
   {
    "name": "Mochi",
    "color": "brown",
    "row": 2,
    "column": 2,
    "text": "An odd number of the cats in row 4 are liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     12,
     13,
     14,
     15
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      10,
      12,
      13,
      14,
      15
     ],
     "table": "lmlplg=="
    }
   },
   {
    "name": "Nugget",
    "color": "grey",
    "row": 2,
    "column": 3,
    "text": "There are as many liars among Coco's neighbors as in my column.",
    "hidden": false,
    "secret": null,
    "mentions": [
     1,
     3,
     6,
     7,
     15
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      1,
      3,
      6,
      7,
      11,
      15
     ],
     "table": "BVqlX1qgX/8="
    }
   },
   {
    "name": "Otis",
    "color": "black",
    "row": 3,
    "column": 0,
    "text": "At least one of the white cats is a liar.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     14
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      0,
      12,
      14
     ],
     "table": "Ng=="
    }
   },
   {
    "name": "Pickles",
    "color": "brown",
    "row": 3,
    "column": 1,
    "text": "There are more liars among my neighbors than among the white cats.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     9,
     12,
     14
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      0,
      9,
      12,
      13,
      14
     ],
     "table": "1CvUKw=="
    }
   },
   {
    "name": "Quill",
    "color": "white",
    "row": 3,
    "column": 2,
    "text": "At least one of Mochi and Pickles is honest.",
    "hidden": false,
    "secret": null,
    "mentions": [
     10,
     13
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      10,
      13,
      14
     ],
     "table": "hw=="
    }
   },
   {
    "name": "Rolo",
    "color": "black",
    "row": 3,
    "column": 3,
    "text": "Dusty and Goose are both honest.",
    "hidden": false,
    "secret": null,
    "mentions": [
     3,
     6
    ],
    "mood": "happy",
    "clue": {
     "cats": [
      3,
      6,
      15
     ],
     "table": "4Q=="
    }
   }
  ],
  "liars": [
   false,
   false,
   true,
   false,
   false,
   true,
   false,
   true,
   true,
   true,
   false,
   true,
   true,
   false,
   false,
   false
  ]
 },
 {
  "rows": 4,
  "cols": 4,
  "seed": 1018,
  "level": "medium",
  "given": null,
  "cats": [
   {
    "name": "Angus",
    "color": "grey",
    "row": 0,
    "column": 0,
    "text": "An odd number of the cats in my column are liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     4,
     8,
     12
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      0,
      4,
      8,
      12
     ],
     "table": "PMM="
    }
   },
   {
    "name": "Cricket",
    "color": "yellow",
    "row": 0,
    "column": 1,
    "text": "Pfft! Marble is a liar.",
    "hidden": false,
    "secret": null,
    "mentions": [
     11
    ],
    "mood": "angry",
    "clue": {
     "cats": [
      1,
      11
     ],
     "table": "Bg=="
    }
   },
   {
    "name": "Dumpling",
    "color": "brown",
    "row": 0,
    "column": 2,
    "text": "Mew. Among the cats in the middle, at least one is honest and at least one is a liar.",
    "hidden": false,
    "secret": null,
    "mentions": [
     5,
     6,
     9,
     10
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      2,
      5,
      6,
      9,
      10
     ],
     "table": "VlVVlQ=="
    }
   },
   {
    "name": "Espresso",
    "color": "grey",
    "row": 0,
    "column": 3,
    "text": "Cricket is the only honest cat among the cats on the edges.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     1,
     2,
     4,
     7,
     8,
     11,
     12,
     13,
     14,
     15
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      0,
      1,
      2,
      3,
      4,
      7,
      8,
      11,
      12,
      13,
      14,
      15
     ],
     "table": "AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AN8="
    }
   },
   {
    "name": "Fudge",
    "color": "orange",
    "row": 1,
    "column": 0,
    "text": "Pepper is the only liar among Kiwi, Pepper and me.",
    "hidden": false,
    "secret": null,
    "mentions": [
     9,
     14
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      4,
      9,
      14
     ],
     "table": "ug=="
    }
   },
   {
    "name": "Goose",
    "color": "brown",
    "row": 1,
    "column": 1,
    "text": "Pfft! Fudge is a liar.",
    "hidden": false,
    "secret": null,
    "mentions": [
     4
    ],
    "mood": "angry",
    "clue": {
     "cats": [
      4,
      5
     ],
     "table": "Bg=="
    }
   },
   {
    "name": "Hobbes",
    "color": "brown",
    "row": 1,
    "column": 2,
    "text": "Among the cats on the edges, at least one is honest and at least one is a liar.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     1,
     2,
     3,
     4,
     7,
     8,
     11,
     12,
     13,
     14,
     15
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      0,
      1,
      2,
      3,
      4,
      6,
      7,
      8,
      11,
      12,
      13,
      14,
      15
     ],
     "table": "/v///wEAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD///9/AAAAgA=="
    }
   },
   {
    "name": "Indigo",
    "color": "white",
    "row": 1,
    "column": 3,
    "text": "There are as many liars among Angus's neighbors as among Kiwi's neighbors.",
    "hidden": false,
    "secret": null,
    "mentions": [
     1,
     4,
     5,
     8,
     10,
     13
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      1,
      4,
      5,
      7,
      8,
      10,
      13
     ],
     "table": "YZ6GeYZ5CPeGeQj3CPcA/w=="
    }
   },
   {
    "name": "Juniper",
    "color": "orange",
    "row": 2,
    "column": 0,
    "text": "At least one of these is true: Hobbes is honest, or all of the cats in my row are liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     6,
     9,
     10,
     11
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      6,
      8,
      9,
      10,
      11
     ],
     "table": "mZmZGQ=="
    }
   },
   {
    "name": "Kiwi",
    "color": "white",
    "row": 2,
    "column": 1,
    "text": "All of the cats above me are the same: all honest, or all liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     1,
     5
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      1,
      5,
      9
     ],
     "table": "aQ=="
    }
   },
   {
    "name": "Lentil",
    "color": "black",
    "row": 2,
    "column": 2,
    "text": "An odd number of the cats in row 4 are liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     12,
     13,
     14,
     15
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      10,
      12,
      13,
      14,
      15
     ],
     "table": "lmlplg=="
    }
   },
   {
    "name": "Marble",
    "color": "grey",
    "row": 2,
    "column": 3,
    "text": "Lentil and Olive are opposites: one is honest, the other is a liar.",
    "hidden": false,
    "secret": null,
    "mentions": [
     10,
     13
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      10,
      11,
      13
     ],
     "table": "lg=="
    }
   },
   {
    "name": "Noodle",
    "color": "yellow",
    "row": 3,
    "column": 0,
    "text": "All the honest cats in my row are connected.",
    "hidden": false,
    "secret": null,
    "mentions": [
     13,
     14,
     15
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      12,
      13,
      14,
      15
     ],
     "table": "IRE="
    }
   },
   {
    "name": "Olive",
    "color": "black",
    "row": 3,
    "column": 1,
    "text": "I'm honest, but Kiwi is a liar.",
    "hidden": false,
    "secret": null,
    "mentions": [
     9
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      9,
      13
     ],
     "table": "Dg=="
    }
   },
   {
    "name": "Pepper",
    "color": "black",
    "row": 3,
    "column": 2,
    "text": "Mew. Indigo is the only liar among Espresso's neighbors.",
    "hidden": false,
    "secret": null,
    "mentions": [
     2,
     7
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      2,
      7,
      14
     ],
     "table": "tA=="
    }
   },
   {
    "name": "Queenie",
    "color": "yellow",
    "row": 3,
    "column": 3,
    "text": "There are as many liars in row 1 as in my column.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     1,
     2,
     3,
     7,
     11
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      0,
      1,
      2,
      3,
      7,
      11,
      15
     ],
     "table": "AQEWFhYWaGjp6ZeXl5d/fw=="
    }
   }
  ],
  "liars": [
   false,
   true,
   false,
   true,
   true,
   false,
   false,
   true,
   false,
   true,
   true,
   false,
   false,
   false,
   false,
   false
  ]
 },
 {
  "rows": 4,
  "cols": 4,
  "seed": 1019,
  "level": "medium",
  "given": null,
  "cats": [
   {
    "name": "Apricot",
    "color": "brown",
    "row": 0,
    "column": 0,
    "text": "All the honest cats in my column are connected.",
    "hidden": false,
    "secret": null,
    "mentions": [
     4,
     8,
     12
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      0,
      4,
      8,
      12
     ],
     "table": "IRE="
    }
   },
   {
    "name": "Bagel",
    "color": "yellow",
    "row": 0,
    "column": 1,
    "text": "Gnocchi and Inky are both honest.",
    "hidden": false,
    "secret": null,
    "mentions": [
     5,
     7
    ],
    "mood": "happy",
    "clue": {
     "cats": [
      1,
      5,
      7
     ],
     "table": "qQ=="
    }
   },
   {
    "name": "Coco",
    "color": "yellow",
    "row": 0,
    "column": 2,
    "text": "There are at least 3 liars in total.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     1,
     3,
     4,
     5,
     6,
     7,
     8,
     9,
     10,
     11,
     12,
     13,
     14,
     15
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15
     ],
     "table": "cBgYDhgODg8YDg4PDg8PDxgODg8ODw8PDg8PDw8PDw8YDg4PDg8PDw4PDw8PDw8PDg8PDw8PDw8PDw8PDw8PDxgODg8ODw8PDg8PDw8PDw8ODw8PDw8PDw8PDw8PDw8PDg8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8YDg4PDg8PDw4PDw8PDw8PDg8PDw8PDw8PDw8PDw8PDw4PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDg8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDxgODg8ODw8PDg8PDw8PDw8ODw8PDw8PDw8PDw8PDw8PDg8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8ODw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDg8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8YDg4PDg8PDw4PDw8PDw8PDg8PDw8PDw8PDw8PDw8PDw4PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDg8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw4PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDg8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDxgODg8ODw8PDg8PDw8PDw8ODw8PDw8PDw8PDw8PDw8PDg8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8ODw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDg8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8ODw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDg8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8YDg4PDg8PDw4PDw8PDw8PDg8PDw8PDw8PDw8PDw8PDw4PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDg8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw4PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDg8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw4PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDg8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDxgODg8ODw8PDg8PDw8PDw8ODw8PDw8PDw8PDw8PDw8PDg8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8ODw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDg8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8ODw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDg8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8ODw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDg8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8="
    }
   },
   {
    "name": "Espresso",
    "color": "brown",
    "row": 0,
    "column": 3,
    "text": "Among Gnocchi, Mochi and me, at least one is honest and at least one is a liar.",
    "hidden": false,
    "secret": null,
    "mentions": [
     5,
     10
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      3,
      5,
      10
     ],
     "table": "1A=="
    }
   },
   {
    "name": "Felix",
    "color": "black",
    "row": 1,
    "column": 0,
    "text": "Mrow. At least one of these is true: Paprika is honest, or all of the cats in my column are liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     8,
     12
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      0,
      4,
      8,
      12
     ],
     "table": "M0w="
    }
   },
   {
    "name": "Gnocchi",
    "color": "orange",
    "row": 1,
    "column": 1,
    "text": "An odd number of the black cats are liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     4,
     9,
     10,
     12
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      4,
      5,
      9,
      10,
      12
     ],
     "table": "lmlplg=="
    }
   },
   {
    "name": "Honey",
    "color": "orange",
    "row": 1,
    "column": 2,
    "text": "Gnocchi is the only liar among Bagel's neighbors. Meow.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     2,
     5
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      0,
      2,
      5,
      6
     ],
     "table": "EO8="
    }
   },
   {
    "name": "Inky",
    "color": "white",
    "row": 1,
    "column": 3,
    "text": "Among the cats on the edges, at least one is honest and at least one is a liar.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     1,
     2,
     3,
     4,
     8,
     11,
     12,
     13,
     14,
     15
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      0,
      1,
      2,
      3,
      4,
      7,
      8,
      11,
      12,
      13,
      14,
      15
     ],
     "table": "/v///wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAIA="
    }
   },
   {
    "name": "Kettle",
    "color": "white",
    "row": 2,
    "column": 0,
    "text": "Coco is the only honest cat among the yellow cats.",
    "hidden": false,
    "secret": null,
    "mentions": [
     1,
     2
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      1,
      2,
      8
     ],
     "table": "0g=="
    }
   },
   {
    "name": "Loki",
    "color": "black",
    "row": 2,
    "column": 1,
    "text": "At least one of Bagel and Felix is honest.",
    "hidden": false,
    "secret": null,
    "mentions": [
     1,
     4
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      1,
      4,
      9
     ],
     "table": "hw=="
    }
   },
   {
    "name": "Mochi",
    "color": "black",
    "row": 2,
    "column": 2,
    "text": "Among the cats in the middle, at least one is honest and at least one is a liar.",
    "hidden": false,
    "secret": null,
    "mentions": [
     5,
     6,
     9
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      5,
      6,
      9,
      10
     ],
     "table": "/oA="
    }
   },
   {
    "name": "Nimbus",
    "color": "white",
    "row": 2,
    "column": 3,
    "text": "Mrow. Bagel is the only liar among Apricot's neighbors.",
    "hidden": false,
    "secret": null,
    "mentions": [
     1,
     4
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      1,
      4,
      11
     ],
     "table": "0g=="
    }
   },
   {
    "name": "Paprika",
    "color": "black",
    "row": 3,
    "column": 0,
    "text": "Quill and Ravioli are both honest, or both liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     13,
     14
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      12,
      13,
      14
     ],
     "table": "aQ=="
    }
   },
   {
    "name": "Quill",
    "color": "orange",
    "row": 3,
    "column": 1,
    "text": "An odd number of Gnocchi's neighbors are liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     1,
     4,
     6,
     9
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      1,
      4,
      6,
      9,
      13
     ],
     "table": "lmlplg=="
    }
   },
   {
    "name": "Ravioli",
    "color": "brown",
    "row": 3,
    "column": 2,
    "text": "All the honest cats in row 3 are connected.",
    "hidden": false,
    "secret": null,
    "mentions": [
     8,
     9,
     10,
     11
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      8,
      9,
      10,
      11,
      14
     ],
     "table": "CxN0BA=="
    }
   },
   {
    "name": "Saffron",
    "color": "orange",
    "row": 3,
    "column": 3,
    "text": "An odd number of the cats above me are liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     3,
     7,
     11
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      3,
      7,
      11,
      15
     ],
     "table": "lmk="
    }
   }
  ],
  "liars": [
   false,
   true,
   false,
   false,
   false,
   true,
   false,
   false,
   false,
   false,
   false,
   false,
   false,
   false,
   false,
   true
  ]
 },
 {
  "rows": 4,
  "cols": 4,
  "seed": 1020,
  "level": "medium",
  "given": null,
  "cats": [
   {
    "name": "Apricot",
    "color": "brown",
    "row": 0,
    "column": 0,
    "text": "There are more honest cats in row 2 than among my neighbors.",
    "hidden": false,
    "secret": null,
    "mentions": [
     1,
     4,
     5,
     6,
     7
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      0,
      1,
      4,
      5,
      6,
      7
     ],
     "table": "VVVVZlVmZqo="
    }
   },
   {
    "name": "Bean",
    "color": "black",
    "row": 0,
    "column": 1,
    "text": "At least one of these is true: Inky is honest, or all of Apricot, Fudge and me are liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     5,
     6
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      0,
      1,
      5,
      6
     ],
     "table": "M0w="
    }
   },
   {
    "name": "Cricket",
    "color": "black",
    "row": 0,
    "column": 2,
    "text": "At least one of Ember and Kiwi is a liar.",
    "hidden": false,
    "secret": null,
    "mentions": [
     4,
     7
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      2,
      4,
      7
     ],
     "table": "Vg=="
    }
   },
   {
    "name": "Doodle",
    "color": "white",
    "row": 0,
    "column": 3,
    "text": "Mrow. All the honest cats in my column are connected.",
    "hidden": false,
    "secret": null,
    "mentions": [
     7,
     11,
     15
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      3,
      7,
      11,
      15
     ],
     "table": "IRE="
    }
   },
   {
    "name": "Ember",
    "color": "yellow",
    "row": 1,
    "column": 0,
    "text": "All of Apricot's neighbors are the same: all honest, or all liars. Meow.",
    "hidden": false,
    "secret": null,
    "mentions": [
     1
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      1,
      4
     ],
     "table": "BQ=="
    }
   },
   {
    "name": "Fudge",
    "color": "orange",
    "row": 1,
    "column": 1,
    "text": "All the liars are connected.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     1,
     2,
     3,
     4,
     6,
     7,
     8,
     9,
     10,
     11,
     12,
     13,
     14,
     15
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15
     ],
     "table": "yNCKgDI/MD/Q0ICAIi8ADwDRAID/P/8/0dGAgCIiAAAAAIuA//8wPwAAgID//wAPAAAAgP///z8AAICA//8AAAAAAAAyPzA/AAAAACIvAA8AAAAA/z//PwAAAAAiIgAAAQCLgDI/MD8AAICAIi8ADwAAAID/P/8/AACAgCIiAAAAAAAA/////9HQgIAiLwAPAAAAAP/////R0YCAIiIAAAAAAAD/////AACAgP//AA8AAAAA/////wAAgID//wAAAQAAADI/MD/R0ICAIi8ADwAAAAD/P/8/0dGAgCIiAAABAIuAMj8wP9HQ+/AiLwAPAAAAgP8//z/R0fv7IiIAAAAAAAD/////AAAAAP////8B0QCA/z//P9HRgIAiIgAAAAAAAP////8AAAAA/////wAAAID///8/AACAgP//AAAAAAAA/////wAAAAD/////AAAAAP8//z8AAAAAIiIAAAAAAAD/////AAAAAP////8AAACA/z//PwAAgIAiIgAAAQAAAP/////R0ICAIi8ADwHRAID/P/8/0dGAgCIiAAAAAAAA/////wAAgID//wAPAAAAgP///z8AAICA//8AAAEAAAAyPzA/0dCAgCIvAA8B0QCAMiIwANHRgIAiIgAAAQCLgDI/MD/R0PvwIi8ADwHRi/syIjAA0dH7+yIiAAAAAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wEAi4D//zA/AACAgP//AA8AAACA////PwAAgID//wAAAAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8BAIuAMj8wPwAAgIAiLwAPAAAAgP8//z8AAICAIiIAAAAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAICA//8ADwAAAAD/////AACAgP//AAAAAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wEAi4AyPzA/0dD78CIvAA8AAACA/z//P9HR+/siIgAAAAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAgP///z8AAICA//8AAAAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAID/P/8/AACAgCIiAAAAAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AACAgP//AA8AAACA////PwAAgID//wAAAAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8BAIuAMj8wP9HQ+/AiLwAPAdGL+zIiMADR0fv7IiIAAAAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8BAAAAMj8wPwAAAAAiLwAPAAAAAP8//z8AAAAAIiIAAAEAi4AyPzA/AACAgCIvAA8AAACA/z//PwAAgIAiIgAAAAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wEAAAAyPzA/0dCAgCIvAA8AAAAA/z//P9HRgIAiIgAAAQCLgDI/MD/R0PvwIi8ADwAAAID/P/8/0dH7+yIiAAAAAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/P/8/AAAAACIiAAAAAAAA/////wAAAAD/////AAAAgP8//z8AAICAIiIAAAAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8BAAAAMj8wP9HQgIAiLwAPAdEAgDIiMADR0YCAIiIAAAEAi4AyPzA/0dD78CIvAA8B0Yv7MiIwANHR+/siIgAAAQAAAP////8AAAAA/////wAAAAD/////AAAAAP////8BAIuA//8wPwAAgID//wAPAAAAgP///z8AAICA//8AAAEAAAAyPzA/AAAAACIvAA8AAAAA/z//PwAAAAAiIgAAAQCLgDI/MD8AAICAIi8ADwAAAID/P/8/AACAgCIiAAAAAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AACAgP//AA8AAAAA/////wAAgID//wAAAQAAADI/MD/R0ICAIi8ADwAAAAD/P/8/0dGAgCIiAAABAIuAMj8wP9HQ+/AiLwAPAAAAgP8//z/R0fv7IiIAAAAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAID///8/AACAgP//AAAAAAAA/////wAAAAD/////AAAAAP8//z8AAAAAIiIAAAAAAAD/////AAAAAP////8AAACA/z//PwAAgIAiIgAAAAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAgID//wAPAAAAgP///z8AAICA//8AAAEAAAAyPzA/0dCAgCIvAA8B0QCAMiIwANHRgIAiIgAAAQCLgDI/MD/R0PvwIi8ADwHRi/syIjAA0dH7+yIiAAAAAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wEAAAD/////0dCAgCIvAA8AAAAA/////9HRgIAiIgAAAAAAAP////8AAICA//8ADwAAAAD/////AACAgP//AAABAAAAMj8wP9HQgIAiLwAPAAAAAP8//z/R0YCAIiIAAAEAi4AyPzA/0dD78CIvAA8AAACA/z//P9HR+/siIgAAAAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8BAAAA/////9HQgIAiLwAPAdEAgP8//z/R0YCAIiIAAAAAAAD/////AACAgP//AA8AAACA////PwAAgID//wAAAQAAADI/MD/R0ICAIi8ADwHRAIAyIjAA0dGAgCIiAAABAIuAMj8wP9HQ+/AiLwAPAdGL+zIiMADR0fv7IiIAAAAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAgID//wAPAAAAAP////8AAICA//8AAAAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AQCLgDI/MD/R0PvwIi8ADwAAAID/P/8/0dH7+yIiAAAAAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAICA//8ADwAAAID///8/AACAgP//AAAAAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wEAi4AyPzA/0dD78CIvAA8B0Yv7MiIwANHR+/siIgAAAQAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wEAAAAyPzA/AAAAACIvAA8AAAAA/z//PwAAAAAiIgAAAQCLgDI/MD8AAICAIi8ADwAAAID/P/8/AACAgCIiAAABAAAA/////9HQgIAiLwAPAAAAAP/////R0YCAIiIAAAAAAAD/////AACAgP//AA8AAAAA/////wAAgID//wAAAQAAADI/MD/R0ICAIi8ADwAAAAD/P/8/0dGAgCIiAAABAIuAMj8wP9HQ+/AiLwAPAAAAgP8//z/R0fv7IiIAAAAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP8//z8AAAAAIiIAAAAAAAD/////AAAAAP////8AAACA/z//PwAAgIAiIgAAAQAAAP/////R0ICAIi8ADwHRAID/P/8/0dGAgCIiAAAAAAAA/////wAAgID//wAPAAAAgP///z8AAICA//8AAAEAAAAyPzA/0dCAgCIvAA8B0QCAMiIwANHRgIAiIgAAAQCLgDI/MD/R0PvwIi8ADwHRi/syIjAA0dH7+yIiAAABAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wEAi4D//zA/AACAgP//AA8AAACA////PwAAgID//wAAAQAAADI/MD8AAAAAIi8ADwAAAAD/P/8/AAAAACIiAAABAIuAMj8wPwAAgIAiLwAPAAAAgP8//z8AAICAIiIAAAEAAAD/////0dCAgCIvAA8AAAAA/////9HRgIAiIgAAAQCLgP//MD/R0PvwIi8ADwAAAID///8/0dH7+yIiAAABAAAAMj8wP9HQgIAiLwAPAAAAAP8//z/R0YCAIiIAAAEAi4AyPzA/0dD78CIvAA8AAACA/z//P9HR+/siIgAAAAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAgP///z8AAICA//8AAAAAAAD/////AAAAAP////8AAAAA/z//PwAAAAAiIgAAAAAAAP////8AAAAA/////wAAAID/P/8/AACAgCIiAAABAAAA/////9HQgIAiLwAPAdEAgP8//z/R0YCAIiIAAAEAi4D//zA/0dD78CIvAA8B0Yv7/z8wANHR+/siIgAAAQAAADI/MD/R0ICAIi8ADwHRAIAyIjAA0dGAgCIiAAABAIuAMj8wP9HQ+/AiLwAPAdGL+zIiMADR0fv7IiIAAAAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8BAAAA/////wAAAAD/////AdEAgP8//z/R0YCAIiIAAAAAAAD/////AAAAAP////8AAACA////PwAAgID//wAAAAAAAP////8AAAAA/////wAAAAD/P/8/AAAAACIiAAAAAAAA/////wAAAAD/////AAAAgP8//z8AAICAIiIAAAEAAAD/////0dCAgCIvAA8B0QCA/z//P9HRgIAiIgAAAAAAAP////8AAICA//8ADwAAAID///8/AACAgP//AAABAAAAMj8wP9HQgIAiLwAPAdEAgDIiMADR0YCAIiIAAAEAi4AyPzA/0dD78CIvAA8B0Yv7MiIwANHR+/siIgAAAAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAID///8/AACAgP//AAAAAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAACA/z//PwAAgIAiIgAAAAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAgID//wAPAAAAgP///z8AAICA//8AAAAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AQCLgDI/MD/R0PvwIi8ADwHRi/syIjAA0dH7+yIiAAAAAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/z//PwAAAAAiIgAAAAAAAP////8AAAAA/////wAAAID/P/8/AACAgCIiAAAAAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AQAAADI/MD/R0ICAIi8ADwHRAIAyIjAA0dGAgCIiAAABAIuAMj8wP9HQ+/AiLwAPAdGL+zIiMADR0fv7IiIAAAAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAACA////PwAAgID//wAAAAAAAP////8AAAAA/////wAAAAD/P/8/AAAAACIiAAAAAAAA/////wAAAAD/////AAAAgP8//z8AAICAIiIAAAAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAICA//8ADwAAAID///8/AACAgP//AAABAAAAMj8wP9HQgIAiLwAPAdEAgDIiMADR0YCAIiIAAAEAi4AyPzA/0dD78CIvAA8B0Yv7MiIwANHR+/siIgAAAQAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8BAAAA/////9HQgIAiLwAPAAAAAP/////R0YCAIiIAAAAAAAD/////AACAgP//AA8AAAAA/////wAAgID//wAAAQAAADI/MD/R0ICAIi8ADwAAAAD/P/8/0dGAgCIiAAABAIuAMj8wP9HQ+/AiLwAPAAAAgP8//z/R0fv7IiIAAAEAAAD/////AAAAAP////8B0QCA/z//P9HRgIAiIgAAAAAAAP////8AAAAA/////wAAAID///8/AACAgP//AAAAAAAA/////wAAAAD/////AAAAAP8//z8AAAAAIiIAAAAAAAD/////AAAAAP////8AAACA/z//PwAAgIAiIgAAAQAAAP/////R0ICAIi8ADwHRAID/P/8/0dGAgCIiAAAAAAAA/////wAAgID//wAPAAAAgP///z8AAICA//8AAAEAAAAyPzA/0dCAgCIvAA8B0QCAMiIwANHRgIAiIgAAAQCLgDI/MD/R0PvwIi8ADwHRi/syIjAA0dH7+yIiAAAAAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAICA//8ADwAAAAD/////AACAgP//AAAAAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wEAi4AyPzA/0dD78CIvAA8AAACA/z//P9HR+/siIgAAAAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAgP///z8AAICA//8AAAAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAID/P/8/AACAgCIiAAAAAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AACAgP//AA8AAACA////PwAAgID//wAAAAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8BAIuAMj8wP9HQ+/AiLwAPAdGL+zIiMADR0fv7IiIAAAEAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8BAAAAMj8wPwAAAAAiLwAPAAAAAP8//z8AAAAAIiIAAAEAi4AyPzA/AACAgCIvAA8AAACA/z//PwAAgIAiIgAAAQAAAP/////R0ICAIi8ADwAAAAD/////0dGAgCIiAAAAAAAA/////wAAgID//wAPAAAAAP////8AAICA//8AAAEAAAAyPzA/0dCAgCIvAA8AAAAA/z//P9HRgIAiIgAAAQCLgDI/MD/R0PvwIi8ADwAAAID/P/8/0dH7+yIiAAABAAAA/////wAAAAD/////AdEAgP8//z/R0YCAIiIAAAAAAAD/////AAAAAP////8AAACA////PwAAgID//wAAAQAAADI/MD8AAAAAIi8ADwHRAIAyIjAA0dGAgCIiAAABAIuAMj8wPwAAgIAiLwAPAdGL+zIiMADR0fv7IiIAAAEAAAD/////0dCAgCIvAA8B0QCA/z//P9HRgIAiIgAAAAAAAP////8AAICA//8ADwAAAID///8/AACAgP//AAABAAAAMj8wP9HQgIAiLwAPAdEAgDIiMADR0YCAIiIAAAEAi4AyPzA/0dD78CIvAA8B0Yv7MiIwANHR+/siIgAAAQAAAP////8AAAAA/////wAAAAD/////AAAAAP////8BAIuA//8wPwAAgID//wAPAAAAgP///z8AAICA//8AAAEAAAAyPzA/AAAAACIvAA8AAAAA/z//PwAAAAAiIgAAAQCLgDI/MD8AAICAIi8ADwAAAID/P/8/AACAgCIiAAABAAAA/////9HQgIAiLwAPAAAAAP/////R0YCAIiIAAAEAi4D//zA/0dD78CIvAA8AAACA////P9HR+/siIgAAAQAAADI/MD/R0ICAIi8ADwAAAAD/P/8/0dGAgCIiAAABAIuAMj8wP9HQ+/AiLwAPAAAAgP8//z/R0fv7IiIAAAEAAAD/////AAAAAP////8B0QCA/z//P9HRgIAiIgAAAQCLgP//MD8AAICA//8ADwHRi/v/PzAA0dH7+yIiAAABAAAAMj8wPwAAAAAiLwAPAdEAgDIiMADR0YCAIiIAAAEAi4AyPzA/AACAgCIvAA8B0Yv7MiIwANHR+/siIgAAAQAAAP/////R0ICAIi8ADwHRAID/P/8/0dGAgCIiAAABAIuA//8wP9HQ+/AiLwAPAdGL+/8/MADR0fv7IiIAAAEAAAAyPzA/0dCAgCIvAA8B0QCAMiIwANHRgIAiIgAAAQCLgDI/MD/R0PvwIi8ADwHRi/syIjAA0dH7+yIiAAA="
    }
   },
   {
    "name": "Inky",
    "color": "grey",
    "row": 1,
    "column": 2,
    "text": "Doodle is pawsitively honest.",
    "hidden": false,
    "secret": null,
    "mentions": [
     3
    ],
    "mood": "happy",
    "clue": {
     "cats": [
      3,
      6
     ],
     "table": "CQ=="
    }
   },
   {
    "name": "Kiwi",
    "color": "brown",
    "row": 1,
    "column": 3,
    "text": "All of Doodle's neighbors are honest.",
    "hidden": false,
    "secret": null,
    "mentions": [
     2
    ],
    "mood": "happy",
    "clue": {
     "cats": [
      2,
      7
     ],
     "table": "DQ=="
    }
   },
   {
    "name": "Mango",
    "color": "grey",
    "row": 2,
    "column": 0,
    "text": "An odd number of the cats in row 4 are liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     12,
     13,
     14,
     15
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      8,
      12,
      13,
      14,
      15
     ],
     "table": "lmlplg=="
    }
   },
   {
    "name": "Nimbus",
    "color": "orange",
    "row": 2,
    "column": 1,
    "text": "All of Cricket's neighbors are honest.",
    "hidden": false,
    "secret": null,
    "mentions": [
     1,
     3,
     6
    ],
    "mood": "happy",
    "clue": {
     "cats": [
      1,
      3,
      6,
      9
     ],
     "table": "Af4="
    }
   },
   {
    "name": "Oreo",
    "color": "brown",
    "row": 2,
    "column": 2,
    "text": "There are more honest cats among Bean's neighbors than among the white cats.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     2,
     3,
     5,
     15
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      0,
      2,
      3,
      5,
      10,
      15
     ],
     "table": "cRCO7/dxCI4="
    }
   },
   {
    "name": "Pickles",
    "color": "brown",
    "row": 2,
    "column": 3,
    "text": "All of the corner cats are the same: all honest, or all liars. Mew.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     3,
     12,
     15
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      0,
      3,
      11,
      12,
      15
     ],
     "table": "4fDweA=="
    }
   },
   {
    "name": "Quincy",
    "color": "black",
    "row": 3,
    "column": 0,
    "text": "Ember and Kiwi are opposites: one is honest, the other is a liar.",
    "hidden": false,
    "secret": null,
    "mentions": [
     4,
     7
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      4,
      7,
      12
     ],
     "table": "lg=="
    }
   },
   {
    "name": "Rolo",
    "color": "yellow",
    "row": 3,
    "column": 1,
    "text": "Cricket and Nimbus are both honest. Purr.",
    "hidden": false,
    "secret": null,
    "mentions": [
     2,
     9
    ],
    "mood": "happy",
    "clue": {
     "cats": [
      2,
      9,
      13
     ],
     "table": "4Q=="
    }
   },
   {
    "name": "Saffron",
    "color": "orange",
    "row": 3,
    "column": 2,
    "text": "Mew. An odd number of the brown cats are liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     7,
     10,
     11
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      0,
      7,
      10,
      11,
      14
     ],
     "table": "lmlplg=="
    }
   },
   {
    "name": "Tofu",
    "color": "white",
    "row": 3,
    "column": 3,
    "text": "All of Fudge's neighbors are the same: all honest, or all liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     1,
     4,
     6,
     9
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      1,
      4,
      6,
      9,
      15
     ],
     "table": "AYD+fw=="
    }
   }
  ],
  "liars": [
   false,
   false,
   false,
   false,
   true,
   true,
   false,
   false,
   false,
   false,
   false,
   true,
   false,
   false,
   false,
   true
  ]
 },
 {
  "rows": 4,
  "cols": 4,
  "seed": 1021,
  "level": "medium",
  "given": null,
  "cats": [
   {
    "name": "Ash",
    "color": "grey",
    "row": 0,
    "column": 0,
    "text": "An odd number of the cats in my column are liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     4,
     8,
     12
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      0,
      4,
      8,
      12
     ],
     "table": "PMM="
    }
   },
   {
    "name": "Bagel",
    "color": "yellow",
    "row": 0,
    "column": 1,
    "text": "Among the cats in my row, at least one is honest and at least one is a liar.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     2,
     3
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      0,
      1,
      2,
      3
     ],
     "table": "MrM="
    }
   },
   {
    "name": "Clover",
    "color": "orange",
    "row": 0,
    "column": 2,
    "text": "All the liars in my column are connected.",
    "hidden": false,
    "secret": null,
    "mentions": [
     6,
     10,
     14
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      2,
      6,
      10,
      14
     ],
     "table": "YHo="
    }
   },
   {
    "name": "Espresso",
    "color": "brown",
    "row": 0,
    "column": 3,
    "text": "Mrow. All the liars in row 4 are connected.",
    "hidden": false,
    "secret": null,
    "mentions": [
     12,
     13,
     14,
     15
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      3,
      12,
      13,
      14,
      15
     ],
     "table": "QFioWQ=="
    }
   },
   {
    "name": "Goose",
    "color": "black",
    "row": 1,
    "column": 0,
    "text": "Kismet is honest, fur real.",
    "hidden": false,
    "secret": null,
    "mentions": [
     7
    ],
    "mood": "happy",
    "clue": {
     "cats": [
      4,
      7
     ],
     "table": "CQ=="
    }
   },
   {
    "name": "Hobbes",
    "color": "brown",
    "row": 1,
    "column": 1,
    "text": "Exactly one of the grey cats is a liar.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     12
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      0,
      5,
      12
     ],
     "table": "lg=="
    }
   },
   {
    "name": "Jasper",
    "color": "yellow",
    "row": 1,
    "column": 2,
    "text": "Mrow. Pickles is the only honest cat among Pickles, Sushi and me.",
    "hidden": false,
    "secret": null,
    "mentions": [
     10,
     12
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      6,
      10,
      12
     ],
     "table": "ig=="
    }
   },
   {
    "name": "Kismet",
    "color": "orange",
    "row": 1,
    "column": 3,
    "text": "At least one of these is true: Ravioli is a liar, or all of the yellow cats are liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     1,
     6,
     10,
     11
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      1,
      6,
      7,
      10,
      11
     ],
     "table": "8HgPDw=="
    }
   },
   {
    "name": "Mango",
    "color": "brown",
    "row": 2,
    "column": 0,
    "text": "At least one of Jasper and Yoshi is honest.",
    "hidden": false,
    "secret": null,
    "mentions": [
     6,
     15
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      6,
      8,
      15
     ],
     "table": "kw=="
    }
   },
   {
    "name": "Nugget",
    "color": "black",
    "row": 2,
    "column": 1,
    "text": "Ravioli and Whiskers are both liars. Hiss!",
    "hidden": false,
    "secret": null,
    "mentions": [
     11,
     14
    ],
    "mood": "angry",
    "clue": {
     "cats": [
      9,
      11,
      14
     ],
     "table": "ag=="
    }
   },
   {
    "name": "Pickles",
    "color": "yellow",
    "row": 2,
    "column": 2,
    "text": "There are more liars among the brown cats than among the orange cats. Mew.",
    "hidden": false,
    "secret": null,
    "mentions": [
     2,
     3,
     5,
     7,
     8,
     11
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      2,
      3,
      5,
      7,
      8,
      10,
      11
     ],
     "table": "1ED91Cu/Aiv91P/9AisAAg=="
    }
   },
   {
    "name": "Ravioli",
    "color": "brown",
    "row": 2,
    "column": 3,
    "text": "I'm the only liar among the brown cats. Mew.",
    "hidden": false,
    "secret": null,
    "mentions": [
     3,
     5,
     8
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      3,
      5,
      8,
      11
     ],
     "table": "AP4="
    }
   },
   {
    "name": "Sushi",
    "color": "grey",
    "row": 3,
    "column": 0,
    "text": "An odd number of Jasper, Nugget and me are liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     6,
     9
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      6,
      9,
      12
     ],
     "table": "Zg=="
    }
   },
   {
    "name": "Tofu",
    "color": "white",
    "row": 3,
    "column": 1,
    "text": "Mrow. Kismet is the only honest cat among the orange cats.",
    "hidden": false,
    "secret": null,
    "mentions": [
     2,
     7
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      2,
      7,
      13
     ],
     "table": "0g=="
    }
   },
   {
    "name": "Whiskers",
    "color": "black",
    "row": 3,
    "column": 2,
    "text": "At least one of Ash and Yoshi is honest.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     15
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      0,
      14,
      15
     ],
     "table": "kw=="
    }
   },
   {
    "name": "Yoshi",
    "color": "white",
    "row": 3,
    "column": 3,
    "text": "Mew. All of the cats on the edges are the same: all honest, or all liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     1,
     2,
     3,
     4,
     7,
     8,
     11,
     12,
     13,
     14
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      0,
      1,
      2,
      3,
      4,
      7,
      8,
      11,
      12,
      13,
      14,
      15
     ],
     "table": "AQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////38="
    }
   }
  ],
  "liars": [
   true,
   false,
   true,
   false,
   false,
   false,
   true,
   false,
   true,
   false,
   false,
   true,
   false,
   false,
   true,
   true
  ]
 },
 {
  "rows": 4,
  "cols": 4,
  "seed": 1022,
  "level": "hard",
  "given": null,
  "cats": [
   {
    "name": "Apricot",
    "color": "yellow",
    "row": 0,
    "column": 0,
    "text": "All the honest cats in column 3 are connected.",
    "hidden": false,
    "secret": null,
    "mentions": [
     2,
     6,
     10,
     14
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      0,
      2,
      6,
      10,
      14
     ],
     "table": "ZSolAQ=="
    }
   },
   {
    "name": "Cricket",
    "color": "black",
    "row": 0,
    "column": 1,
    "text": "At least one of these is true: Sushi is honest, or all of the cats below me are liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     5,
     9,
     13,
     15
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      1,
      5,
      9,
      13,
      15
     ],
     "table": "VVWqag=="
    }
   },
   {
    "name": "Dumpling",
    "color": "yellow",
    "row": 0,
    "column": 2,
    "text": "Paprika is pawsitively honest.",
    "hidden": false,
    "secret": null,
    "mentions": [
     12
    ],
    "mood": "happy",
    "clue": {
     "cats": [
      2,
      12
     ],
     "table": "CQ=="
    }
   },
   {
    "name": "Ember",
    "color": "white",
    "row": 0,
    "column": 3,
    "text": "Among the cats in row 3, at least one is honest and at least one is a liar.",
    "hidden": false,
    "secret": null,
    "mentions": [
     8,
     9,
     10,
     11
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      3,
      8,
      9,
      10,
      11
     ],
     "table": "VlVVlQ=="
    }
   },
   {
    "name": "Fig",
    "color": "black",
    "row": 1,
    "column": 0,
    "text": "There are more liars among Dumpling's neighbors than in row 3.",
    "hidden": false,
    "secret": null,
    "mentions": [
     1,
     3,
     6,
     8,
     9,
     10,
     11
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      1,
      3,
      4,
      6,
      8,
      9,
      10,
      11
     ],
     "table": "Hg94Hnge8Hh4HvB48Hjw8Hge8HjwePDw8Hjw8PDw8PA="
    }
   },
   {
    "name": "Gizmo",
    "color": "white",
    "row": 1,
    "column": 1,
    "text": "Among Otis's neighbors, at least one is honest and at least one is a liar.",
    "hidden": false,
    "secret": null,
    "mentions": [
     7,
     10,
     15
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      5,
      7,
      10,
      15
     ],
     "table": "VpU="
    }
   },
   {
    "name": "Hobbes",
    "color": "brown",
    "row": 1,
    "column": 2,
    "text": "There are more honest cats among the orange cats than among the brown cats.",
    "hidden": false,
    "secret": null,
    "mentions": [
     7,
     8,
     9,
     11,
     14
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      6,
      7,
      8,
      9,
      11,
      14
     ],
     "table": "VUVFJEUkJKI="
    }
   },
   {
    "name": "Iggy",
    "color": "brown",
    "row": 1,
    "column": 3,
    "text": "Dumpling is a liar.",
    "hidden": false,
    "secret": null,
    "mentions": [
     2
    ],
    "mood": "angry",
    "clue": {
     "cats": [
      2,
      7
     ],
     "table": "Bg=="
    }
   },
   {
    "name": "Kettle",
    "color": "orange",
    "row": 2,
    "column": 0,
    "text": "Among the cats in the middle, at least one is honest and at least one is a liar.",
    "hidden": false,
    "secret": null,
    "mentions": [
     5,
     6,
     9,
     10
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      5,
      6,
      8,
      9,
      10
     ],
     "table": "Hg8Phw=="
    }
   },
   {
    "name": "Luna",
    "color": "orange",
    "row": 2,
    "column": 1,
    "text": "An odd number of the cats in my row are liars. Mew.",
    "hidden": false,
    "secret": null,
    "mentions": [
     8,
     10,
     11
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      8,
      9,
      10,
      11
     ],
     "table": "WqU="
    }
   },
   {
    "name": "Nugget",
    "color": "grey",
    "row": 2,
    "column": 2,
    "text": "All of the cats in the middle are liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     5,
     6,
     9
    ],
    "mood": "angry",
    "clue": {
     "cats": [
      5,
      6,
      9,
      10
     ],
     "table": "AH8="
    }
   },
   {
    "name": "Otis",
    "color": "orange",
    "row": 2,
    "column": 3,
    "text": "An odd number of the cats in the middle are liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     5,
     6,
     9,
     10
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      5,
      6,
      9,
      10,
      11
     ],
     "table": "lmlplg=="
    }
   },
   {
    "name": "Paprika",
    "color": "grey",
    "row": 3,
    "column": 0,
    "text": "There are more liars among the black cats than among Sushi's neighbors.",
    "hidden": false,
    "secret": null,
    "mentions": [
     1,
     4,
     11,
     14
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      1,
      4,
      11,
      12,
      14
     ],
     "table": "jnEI9w=="
    }
   },
   {
    "name": "Queenie",
    "color": "yellow",
    "row": 3,
    "column": 1,
    "text": "An odd number of Ravioli's neighbors are liars. Mew.",
    "hidden": false,
    "secret": null,
    "mentions": [
     10,
     15
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      10,
      13,
      15
     ],
     "table": "Wg=="
    }
   },
   {
    "name": "Ravioli",
    "color": "orange",
    "row": 3,
    "column": 2,
    "text": "Fig is the only liar among the black cats.",
    "hidden": false,
    "secret": null,
    "mentions": [
     1,
     4
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      1,
      4,
      14
     ],
     "table": "tA=="
    }
   },
   {
    "name": "Sushi",
    "color": "yellow",
    "row": 3,
    "column": 3,
    "text": "Apricot and Queenie are opposites: one is honest, the other is a liar.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     13
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      0,
      13,
      15
     ],
     "table": "lg=="
    }
   }
  ],
  "liars": [
   true,
   false,
   false,
   false,
   true,
   false,
   false,
   true,
   false,
   false,
   true,
   false,
   false,
   false,
   false,
   false
  ]
 },
 {
  "rows": 4,
  "cols": 4,
  "seed": 1023,
  "level": "hard",
  "given": null,
  "cats": [
   {
    "name": "Apricot",
    "color": "white",
    "row": 0,
    "column": 0,
    "text": "Exactly 2 of the cats in my row are liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     1,
     2,
     3
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      0,
      1,
      2,
      3
     ],
     "table": "wrw="
    }
   },
   {
    "name": "Bean",
    "color": "yellow",
    "row": 0,
    "column": 1,
    "text": "At least one of these is true: Honey is a liar, or all of Juniper's neighbors are liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     3,
     5,
     6,
     11
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      1,
      3,
      5,
      6,
      11
     ],
     "table": "WlpaVg=="
    }
   },
   {
    "name": "Dumpling",
    "color": "yellow",
    "row": 0,
    "column": 2,
    "text": "At least 3 of the corner cats are liars. Mrow.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     3,
     12,
     15
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      0,
      2,
      3,
      12,
      15
     ],
     "table": "zGxsNg=="
    }
   },
   {
    "name": "Felix",
    "color": "orange",
    "row": 0,
    "column": 3,
    "text": "An odd number of Dumpling's neighbors are liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     1,
     6
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      1,
      3,
      6
     ],
     "table": "Wg=="
    }
   },
   {
    "name": "Gnocchi",
    "color": "orange",
    "row": 1,
    "column": 0,
    "text": "There are more honest cats in row 3 than in my row.",
    "hidden": false,
    "secret": null,
    "mentions": [
     5,
     6,
     7,
     8,
     9,
     10,
     11
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11
     ],
     "table": "VFVCVEJUKkJCVCpCKkKqKkJUKkIqQqoqKkKqKqoqqqo="
    }
   },
   {
    "name": "Honey",
    "color": "black",
    "row": 1,
    "column": 1,
    "text": "All of the cats in the middle are the same: all honest, or all liars. Mrow.",
    "hidden": false,
    "secret": null,
    "mentions": [
     6,
     9,
     10
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      5,
      6,
      9,
      10
     ],
     "table": "qyo="
    }
   },
   {
    "name": "Inky",
    "color": "white",
    "row": 1,
    "column": 2,
    "text": "Felix and Truffle are both honest, or both liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     3,
     14
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      3,
      6,
      14
     ],
     "table": "aQ=="
    }
   },
   {
    "name": "Juniper",
    "color": "yellow",
    "row": 1,
    "column": 3,
    "text": "Udon is the only honest cat among the cats below me.",
    "hidden": false,
    "secret": null,
    "mentions": [
     11,
     15
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      7,
      11,
      15
     ],
     "table": "pg=="
    }
   },
   {
    "name": "Kismet",
    "color": "white",
    "row": 2,
    "column": 0,
    "text": "At least one of Honey and Inky is a liar.",
    "hidden": false,
    "secret": null,
    "mentions": [
     5,
     6
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      5,
      6,
      8
     ],
     "table": "Hg=="
    }
   },
   {
    "name": "Lentil",
    "color": "brown",
    "row": 2,
    "column": 1,
    "text": "There are as many liars among the brown cats as in column 1.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     4,
     8,
     10,
     12
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      0,
      4,
      8,
      9,
      10,
      12
     ],
     "table": "AekWlwD+Aek="
    }
   },
   {
    "name": "Mango",
    "color": "brown",
    "row": 2,
    "column": 2,
    "text": "An odd number of Honey, Noodle and me are liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     5,
     11
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      5,
      10,
      11
     ],
     "table": "Wg=="
    }
   },
   {
    "name": "Noodle",
    "color": "orange",
    "row": 2,
    "column": 3,
    "text": "All of the cats above me are the same: all honest, or all liars. Mew.",
    "hidden": false,
    "secret": null,
    "mentions": [
     3,
     7
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      3,
      7,
      11
     ],
     "table": "aQ=="
    }
   },
   {
    "name": "Olive",
    "color": "grey",
    "row": 3,
    "column": 0,
    "text": "Meow. All the honest cats in my row are connected.",
    "hidden": false,
    "secret": null,
    "mentions": [
     13,
     14,
     15
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      12,
      13,
      14,
      15
     ],
     "table": "IRE="
    }
   },
   {
    "name": "Paprika",
    "color": "black",
    "row": 3,
    "column": 1,
    "text": "I'm honest, but Honey is a liar.",
    "hidden": false,
    "secret": null,
    "mentions": [
     5
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      5,
      13
     ],
     "table": "Dg=="
    }
   },
   {
    "name": "Truffle",
    "color": "orange",
    "row": 3,
    "column": 2,
    "text": "All of Bean's neighbors are the same: all honest, or all liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     2,
     5
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      0,
      2,
      5,
      14
     ],
     "table": "gX4="
    }
   },
   {
    "name": "Udon",
    "color": "grey",
    "row": 3,
    "column": 3,
    "text": "An odd number of Dumpling, Olive and me are liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     2,
     12
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      2,
      12,
      15
     ],
     "table": "Zg=="
    }
   }
  ],
  "liars": [
   true,
   false,
   true,
   true,
   false,
   true,
   true,
   true,
   false,
   false,
   true,
   false,
   false,
   false,
   false,
   false
  ]
 },
 {
  "rows": 4,
  "cols": 4,
  "seed": 1024,
  "level": "hard",
  "given": null,
  "cats": [
   {
    "name": "Apricot",
    "color": "grey",
    "row": 0,
    "column": 0,
    "text": "Bean and Hobbes are both liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     1,
     6
    ],
    "mood": "angry",
    "clue": {
     "cats": [
      0,
      1,
      6
     ],
     "table": "ag=="
    }
   },
   {
    "name": "Bean",
    "color": "black",
    "row": 0,
    "column": 1,
    "text": "All the liars in column 1 are connected.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     4,
     8,
     12
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      0,
      1,
      4,
      8,
      12
     ],
     "table": "IDjIOQ=="
    }
   },
   {
    "name": "Clover",
    "color": "yellow",
    "row": 0,
    "column": 2,
    "text": "An odd number of Loki, Queenie and me are liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     9,
     14
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      2,
      9,
      14
     ],
     "table": "PA=="
    }
   },
   {
    "name": "Echo",
    "color": "black",
    "row": 0,
    "column": 3,
    "text": "All the liars in row 3 are connected. Meow.",
    "hidden": false,
    "secret": null,
    "mentions": [
     8,
     9,
     10,
     11
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      3,
      8,
      9,
      10,
      11
     ],
     "table": "QFioWQ=="
    }
   },
   {
    "name": "Fig",
    "color": "orange",
    "row": 1,
    "column": 0,
    "text": "Queenie is the only honest cat among the cats on the edges.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     1,
     2,
     3,
     7,
     8,
     11,
     12,
     13,
     14,
     15
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      0,
      1,
      2,
      3,
      4,
      7,
      8,
      11,
      12,
      13,
      14,
      15
     ],
     "table": "AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP9/AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8="
    }
   },
   {
    "name": "Goose",
    "color": "grey",
    "row": 1,
    "column": 1,
    "text": "At least 2 of Pepper's neighbors are liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     9,
     12,
     14
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      5,
      9,
      12,
      14
     ],
     "table": "alY="
    }
   },
   {
    "name": "Hobbes",
    "color": "orange",
    "row": 1,
    "column": 2,
    "text": "Goose and Mochi are opposites: one is honest, the other is a liar.",
    "hidden": false,
    "secret": null,
    "mentions": [
     5,
     10
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      5,
      6,
      10
     ],
     "table": "lg=="
    }
   },
   {
    "name": "Indigo",
    "color": "black",
    "row": 1,
    "column": 3,
    "text": "Meow. There are more liars among Juniper's neighbors than among my neighbors.",
    "hidden": false,
    "secret": null,
    "mentions": [
     3,
     4,
     6,
     9,
     11,
     12
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      3,
      4,
      6,
      7,
      9,
      11,
      12
     ],
     "table": "BPtNsgD/BPtNst8gBPtNsg=="
    }
   },
   {
    "name": "Juniper",
    "color": "brown",
    "row": 2,
    "column": 0,
    "text": "Fig is the only honest cat among my neighbors.",
    "hidden": false,
    "secret": null,
    "mentions": [
     4,
     9,
     12
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      4,
      8,
      9,
      12
     ],
     "table": "zJw="
    }
   },
   {
    "name": "Loki",
    "color": "yellow",
    "row": 2,
    "column": 1,
    "text": "Mew. An odd number of the yellow cats are liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     2,
     13
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      2,
      9,
      13
     ],
     "table": "Wg=="
    }
   },
   {
    "name": "Mochi",
    "color": "orange",
    "row": 2,
    "column": 2,
    "text": "At least one of these is true: Loki is a liar, or all of my neighbors are honest.",
    "hidden": false,
    "secret": null,
    "mentions": [
     6,
     9,
     11,
     14
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      6,
      9,
      10,
      11,
      14
     ],
     "table": "LTw8PA=="
    }
   },
   {
    "name": "Nimbus",
    "color": "brown",
    "row": 2,
    "column": 3,
    "text": "There are as many liars among Sushi's neighbors as among Queenie's neighbors.",
    "hidden": false,
    "secret": null,
    "mentions": [
     10,
     13,
     14,
     15
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      10,
      11,
      13,
      14,
      15
     ],
     "table": "hV7IhQ=="
    }
   },
   {
    "name": "Oreo",
    "color": "grey",
    "row": 3,
    "column": 0,
    "text": "Among my neighbors, at least one is honest and at least one is a liar.",
    "hidden": false,
    "secret": null,
    "mentions": [
     8,
     13
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      8,
      12,
      13
     ],
     "table": "lg=="
    }
   },
   {
    "name": "Pepper",
    "color": "yellow",
    "row": 3,
    "column": 1,
    "text": "Mew. There are exactly 10 liars in total.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     1,
     2,
     3,
     4,
     5,
     6,
     7,
     8,
     9,
     10,
     11,
     12,
     14,
     15
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15
     ],
     "table": "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAIAAAACAAICAaAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAgAAAAIAAgIBoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAIAAAACAAICAaAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAgAAAAIAAgIBoAAAAAAAAAIAAAACAAICAaAAAAIAAgIBoAICAaIBoaBYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAIAAAACAAICAaAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAACAAAAAgACAgGgAAAAAAAAAAAAAAAAAAACAAAAAAAAAAIAAAACAAICAaAAAAAAAAACAAAAAgACAgGgAAACAAICAaACAgGiAaGgWAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAIAAAACAAICAaAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAgAAAAIAAgIBoAAAAAAAAAIAAAACAAICAaAAAAIAAgIBoAICAaIBoaBYAAAAAAAAAAAAAAAAAAACAAAAAAAAAAIAAAACAAICAaAAAAAAAAACAAAAAgACAgGgAAACAAICAaACAgGiAaGgWAAAAAAAAAIAAAACAAICAaAAAAIAAgIBoAICAaIBoaBYAAACAAICAaACAgGiAaGgWAICAaIBoaBaAaGgWaBYWAf///////////////////////////////////////////////////////////////////////////////////3//////////////////////////////////////////f////////////////////3//////////f////3//f3+X/////////////////////////////////////////3////////////////////9//////////3////9//39/l////////////////////3//////////f////3//f3+X/////////3////9//39/l////3//f3+X/39/l3+Xl+n/////////////////////////////////////////f////////////////////3//////////f////3//f3+X////////////////////f/////////9/////f/9/f5f/////////f////3//f3+X////f/9/f5f/f3+Xf5eX6f///////////////////3//////////f////3//f3+X/////////3////9//39/l////3//f3+X/39/l3+Xl+n/////////f////3//f3+X////f/9/f5f/f3+Xf5eX6f///3//f3+X/39/l3+Xl+n/f3+Xf5eX6X+Xl+mX6en+/////////////////////////////////////////3////////////////////9//////////3////9//39/l////////////////////3//////////f////3//f3+X/////////3////9//39/l////3//f3+X/39/l3+Xl+n///////////////////9//////////3////9//39/l/////////9/////f/9/f5f///9//39/l/9/f5d/l5fp/////////3////9//39/l////3//f3+X/39/l3+Xl+n///9//39/l/9/f5d/l5fp/39/l3+Xl+l/l5fpl+np/v///////////////////3//////////f////3//f3+X/////////3////9//39/l////3//f3+X/39/l3+Xl+n/////////f////3//f3+X////f/9/f5f/f3+Xf5eX6f///3//f3+X/39/l3+Xl+n/f3+Xf5eX6X+Xl+mX6en+/////////3////9//39/l////3//f3+X/39/l3+Xl+n///9//39/l/9/f5d/l5fp/39/l3+Xl+l/l5fpl+np/v///3//f3+X/39/l3+Xl+n/f3+Xf5eX6X+Xl+mX6en+/39/l3+Xl+l/l5fpl+np/n+Xl+mX6en+l+np/un+/v8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAIAAAACAAICAaAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAACAAAAAgACAgGgAAAAAAAAAAAAAAAAAAACAAAAAAAAAAIAAAACAAICAaAAAAAAAAACAAAAAgACAgGgAAACAAICAaACAgGiAaGgWAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAIAAAACAAICAaAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAgAAAAIAAgIBoAAAAAAAAAIAAAACAAICAaAAAAIAAgIBoAICAaIBoaBYAAAAAAAAAAAAAAAAAAACAAAAAAAAAAIAAAACAAICAaAAAAAAAAACAAAAAgACAgGgAAACAAICAaACAgGiAaGgWAAAAAAAAAIAAAACAAICAaAAAAIAAgIBoAICAaIBoaBYAAACAAICAaACAgGiAaGgWAICAaIBoaBaAaGgWaBYWAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAACAAAAAgACAgGgAAAAAAAAAAAAAAAAAAACAAAAAAAAAAIAAAACAAICAaAAAAAAAAACAAAAAgACAgGgAAACAAICAaACAgGiAaGgWAAAAAAAAAAAAAAAAAAAAgAAAAAAAAACAAAAAgACAgGgAAAAAAAAAgAAAAIAAgIBoAAAAgACAgGgAgIBogGhoFgAAAAAAAACAAAAAgACAgGgAAACAAICAaACAgGiAaGgWAAAAgACAgGgAgIBogGhoFgCAgGiAaGgWgGhoFmgWFgEAAAAAAAAAAAAAAAAAAACAAAAAAAAAAIAAAACAAICAaAAAAAAAAACAAAAAgACAgGgAAACAAICAaACAgGiAaGgWAAAAAAAAAIAAAACAAICAaAAAAIAAgIBoAICAaIBoaBYAAACAAICAaACAgGiAaGgWAICAaIBoaBaAaGgWaBYWAQAAAAAAAACAAAAAgACAgGgAAACAAICAaACAgGiAaGgWAAAAgACAgGgAgIBogGhoFgCAgGiAaGgWgGhoFmgWFgEAAACAAICAaACAgGiAaGgWAICAaIBoaBaAaGgWaBYWAQCAgGiAaGgWgGhoFmgWFgGAaGgWaBYWAWgWFgEWAQEA/////////////////////////////////////////3////////////////////9//////////3////9//39/l////////////////////3//////////f////3//f3+X/////////3////9//39/l////3//f3+X/39/l3+Xl+n///////////////////9//////////3////9//39/l/////////9/////f/9/f5f///9//39/l/9/f5d/l5fp/////////3////9//39/l////3//f3+X/39/l3+Xl+n///9//39/l/9/f5d/l5fp/39/l3+Xl+l/l5fpl+np/v///////////////////3//////////f////3//f3+X/////////3////9//39/l////3//f3+X/39/l3+Xl+n/////////f////3//f3+X////f/9/f5f/f3+Xf5eX6f///3//f3+X/39/l3+Xl+n/f3+Xf5eX6X+Xl+mX6en+/////////3////9//39/l////3//f3+X/39/l3+Xl+n///9//39/l/9/f5d/l5fp/39/l3+Xl+l/l5fpl+np/v///3//f3+X/39/l3+Xl+n/f3+Xf5eX6X+Xl+mX6en+/39/l3+Xl+l/l5fpl+np/n+Xl+mX6en+l+np/un+/v////////////////////9//////////3////9//39/l/////////9/////f/9/f5f///9//39/l/9/f5d/l5fp/////////3////9//39/l////3//f3+X/39/l3+Xl+n///9//39/l/9/f5d/l5fp/39/l3+Xl+l/l5fpl+np/v////////9/////f/9/f5f///9//39/l/9/f5d/l5fp////f/9/f5f/f3+Xf5eX6f9/f5d/l5fpf5eX6Zfp6f7///9//39/l/9/f5d/l5fp/39/l3+Xl+l/l5fpl+np/v9/f5d/l5fpf5eX6Zfp6f5/l5fpl+np/pfp6f7p/v7//////////3////9//39/l////3//f3+X/39/l3+Xl+n///9//39/l/9/f5d/l5fp/39/l3+Xl+l/l5fpl+np/v///3//f3+X/39/l3+Xl+n/f3+Xf5eX6X+Xl+mX6en+/39/l3+Xl+l/l5fpl+np/n+Xl+mX6en+l+np/un+/v////9//39/l/9/f5d/l5fp/39/l3+Xl+l/l5fpl+np/v9/f5d/l5fpf5eX6Zfp6f5/l5fpl+np/pfp6f7p/v7//39/l3+Xl+l/l5fpl+np/n+Xl+mX6en+l+np/un+/v9/l5fpl+np/pfp6f7p/v7/l+np/un+/v/p/v7//v///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAgAAAAIAAgIBoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAIAAAACAAICAaAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAgAAAAIAAgIBoAAAAAAAAAIAAAACAAICAaAAAAIAAgIBoAICAaIBoaBYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAgAAAAIAAgIBoAAAAAAAAAAAAAAAAAAAAgAAAAAAAAACAAAAAgACAgGgAAAAAAAAAgAAAAIAAgIBoAAAAgACAgGgAgIBogGhoFgAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAgAAAAIAAgIBoAAAAAAAAAIAAAACAAICAaAAAAIAAgIBoAICAaIBoaBYAAAAAAAAAgAAAAIAAgIBoAAAAgACAgGgAgIBogGhoFgAAAIAAgIBoAICAaIBoaBYAgIBogGhoFoBoaBZoFhYBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAIAAAACAAICAaAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAgAAAAIAAgIBoAAAAAAAAAIAAAACAAICAaAAAAIAAgIBoAICAaIBoaBYAAAAAAAAAAAAAAAAAAACAAAAAAAAAAIAAAACAAICAaAAAAAAAAACAAAAAgACAgGgAAACAAICAaACAgGiAaGgWAAAAAAAAAIAAAACAAICAaAAAAIAAgIBoAICAaIBoaBYAAACAAICAaACAgGiAaGgWAICAaIBoaBaAaGgWaBYWAQAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAgAAAAIAAgIBoAAAAAAAAAIAAAACAAICAaAAAAIAAgIBoAICAaIBoaBYAAAAAAAAAgAAAAIAAgIBoAAAAgACAgGgAgIBogGhoFgAAAIAAgIBoAICAaIBoaBYAgIBogGhoFoBoaBZoFhYBAAAAAAAAAIAAAACAAICAaAAAAIAAgIBoAICAaIBoaBYAAACAAICAaACAgGiAaGgWAICAaIBoaBaAaGgWaBYWAQAAAIAAgIBoAICAaIBoaBYAgIBogGhoFoBoaBZoFhYBAICAaIBoaBaAaGgWaBYWAYBoaBZoFhYBaBYWARYBAQD/////////////////////////////////////////f////////////////////3//////////f////3//f3+X////////////////////f/////////9/////f/9/f5f/////////f////3//f3+X////f/9/f5f/f3+Xf5eX6f///////////////////3//////////f////3//f3+X/////////3////9//39/l////3//f3+X/39/l3+Xl+n/////////f////3//f3+X////f/9/f5f/f3+Xf5eX6f///3//f3+X/39/l3+Xl+n/f3+Xf5eX6X+Xl+mX6en+////////////////////f/////////9/////f/9/f5f/////////f////3//f3+X////f/9/f5f/f3+Xf5eX6f////////9/////f/9/f5f///9//39/l/9/f5d/l5fp////f/9/f5f/f3+Xf5eX6f9/f5d/l5fpf5eX6Zfp6f7/////////f////3//f3+X////f/9/f5f/f3+Xf5eX6f///3//f3+X/39/l3+Xl+n/f3+Xf5eX6X+Xl+mX6en+////f/9/f5f/f3+Xf5eX6f9/f5d/l5fpf5eX6Zfp6f7/f3+Xf5eX6X+Xl+mX6en+f5eX6Zfp6f6X6en+6f7+/////////////////////3//////////f////3//f3+X/////////3////9//39/l////3//f3+X/39/l3+Xl+n/////////f////3//f3+X////f/9/f5f/f3+Xf5eX6f///3//f3+X/39/l3+Xl+n/f3+Xf5eX6X+Xl+mX6en+/////////3////9//39/l////3//f3+X/39/l3+Xl+n///9//39/l/9/f5d/l5fp/39/l3+Xl+l/l5fpl+np/v///3//f3+X/39/l3+Xl+n/f3+Xf5eX6X+Xl+mX6en+/39/l3+Xl+l/l5fpl+np/n+Xl+mX6en+l+np/un+/v//////////f////3//f3+X////f/9/f5f/f3+Xf5eX6f///3//f3+X/39/l3+Xl+n/f3+Xf5eX6X+Xl+mX6en+////f/9/f5f/f3+Xf5eX6f9/f5d/l5fpf5eX6Zfp6f7/f3+Xf5eX6X+Xl+mX6en+f5eX6Zfp6f6X6en+6f7+/////3//f3+X/39/l3+Xl+n/f3+Xf5eX6X+Xl+mX6en+/39/l3+Xl+l/l5fpl+np/n+Xl+mX6en+l+np/un+/v//f3+Xf5eX6X+Xl+mX6en+f5eX6Zfp6f6X6en+6f7+/3+Xl+mX6en+l+np/un+/v+X6en+6f7+/+n+/v/+////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAIAAAACAAICAaAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAgAAAAIAAgIBoAAAAAAAAAIAAAACAAICAaAAAAIAAgIBoAICAaIBoaBYAAAAAAAAAAAAAAAAAAACAAAAAAAAAAIAAAACAAICAaAAAAAAAAACAAAAAgACAgGgAAACAAICAaACAgGiAaGgWAAAAAAAAAIAAAACAAICAaAAAAIAAgIBoAICAaIBoaBYAAACAAICAaACAgGiAaGgWAICAaIBoaBaAaGgWaBYWAQAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAgAAAAIAAgIBoAAAAAAAAAIAAAACAAICAaAAAAIAAgIBoAICAaIBoaBYAAAAAAAAAgAAAAIAAgIBoAAAAgACAgGgAgIBogGhoFgAAAIAAgIBoAICAaIBoaBYAgIBogGhoFoBoaBZoFhYBAAAAAAAAAIAAAACAAICAaAAAAIAAgIBoAICAaIBoaBYAAACAAICAaACAgGiAaGgWAICAaIBoaBaAaGgWaBYWAQAAAIAAgIBoAICAaIBoaBYAgIBogGhoFoBoaBZoFhYBAICAaIBoaBaAaGgWaBYWAYBoaBZoFhYBaBYWARYBAQAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAIAAAACAAICAaAAAAAAAAACAAAAAgACAgGgAAACAAICAaACAgGiAaGgWAAAAAAAAAIAAAACAAICAaAAAAIAAgIBoAICAaIBoaBYAAACAAICAaACAgGiAaGgWAICAaIBoaBaAaGgWaBYWAQAAAAAAAACAAAAAgACAgGgAAACAAICAaACAgGiAaGgWAAAAgACAgGgAgIBogGhoFgCAgGiAaGgWgGhoFmgWFgEAAACAAICAaACAgGiAaGgWAICAaIBoaBaAaGgWaBYWAQCAgGiAaGgWgGhoFmgWFgGAaGgWaBYWAWgWFgEWAQEAAAAAAAAAAIAAAACAAICAaAAAAIAAgIBoAICAaIBoaBYAAACAAICAaACAgGiAaGgWAICAaIBoaBaAaGgWaBYWAQAAAIAAgIBoAICAaIBoaBYAgIBogGhoFoBoaBZoFhYBAICAaIBoaBaAaGgWaBYWAYBoaBZoFhYBaBYWARYBAQAAAACAAICAaACAgGiAaGgWAICAaIBoaBaAaGgWaBYWAQCAgGiAaGgWgGhoFmgWFgGAaGgWaBYWAWgWFgEWAQEAAICAaIBoaBaAaGgWaBYWAYBoaBZoFhYBaBYWARYBAQCAaGgWaBYWAWgWFgEWAQEAaBYWARYBAQAWAQEAAQAAAP///////////////////3//////////f////3//f3+X/////////3////9//39/l////3//f3+X/39/l3+Xl+n/////////f////3//f3+X////f/9/f5f/f3+Xf5eX6f///3//f3+X/39/l3+Xl+n/f3+Xf5eX6X+Xl+mX6en+/////////3////9//39/l////3//f3+X/39/l3+Xl+n///9//39/l/9/f5d/l5fp/39/l3+Xl+l/l5fpl+np/v///3//f3+X/39/l3+Xl+n/f3+Xf5eX6X+Xl+mX6en+/39/l3+Xl+l/l5fpl+np/n+Xl+mX6en+l+np/un+/v//////////f////3//f3+X////f/9/f5f/f3+Xf5eX6f///3//f3+X/39/l3+Xl+n/f3+Xf5eX6X+Xl+mX6en+////f/9/f5f/f3+Xf5eX6f9/f5d/l5fpf5eX6Zfp6f7/f3+Xf5eX6X+Xl+mX6en+f5eX6Zfp6f6X6en+6f7+/////3//f3+X/39/l3+Xl+n/f3+Xf5eX6X+Xl+mX6en+/39/l3+Xl+l/l5fpl+np/n+Xl+mX6en+l+np/un+/v//f3+Xf5eX6X+Xl+mX6en+f5eX6Zfp6f6X6en+6f7+/3+Xl+mX6en+l+np/un+/v+X6en+6f7+/+n+/v/+/////////////3////9//39/l////3//f3+X/39/l3+Xl+n///9//39/l/9/f5d/l5fp/39/l3+Xl+l/l5fpl+np/v///3//f3+X/39/l3+Xl+n/f3+Xf5eX6X+Xl+mX6en+/39/l3+Xl+l/l5fpl+np/n+Xl+mX6en+l+np/un+/v////9//39/l/9/f5d/l5fp/39/l3+Xl+l/l5fpl+np/v9/f5d/l5fpf5eX6Zfp6f5/l5fpl+np/pfp6f7p/v7//39/l3+Xl+l/l5fpl+np/n+Xl+mX6en+l+np/un+/v9/l5fpl+np/pfp6f7p/v7/l+np/un+/v/p/v7//v///////3//f3+X/39/l3+Xl+n/f3+Xf5eX6X+Xl+mX6en+/39/l3+Xl+l/l5fpl+np/n+Xl+mX6en+l+np/un+/v//f3+Xf5eX6X+Xl+mX6en+f5eX6Zfp6f6X6en+6f7+/3+Xl+mX6en+l+np/un+/v+X6en+6f7+/+n+/v/+/////39/l3+Xl+l/l5fpl+np/n+Xl+mX6en+l+np/un+/v9/l5fpl+np/pfp6f7p/v7/l+np/un+/v/p/v7//v///3+Xl+mX6en+l+np/un+/v+X6en+6f7+/+n+/v/+////l+np/un+/v/p/v7//v///+n+/v/+/////v////////8="
    }
   },
   {
    "name": "Queenie",
    "color": "black",
    "row": 3,
    "column": 2,
    "text": "Apricot is the only honest cat among the cats on the edges.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     1,
     2,
     3,
     4,
     7,
     8,
     11,
     12,
     13,
     15
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      0,
      1,
      2,
      3,
      4,
      7,
      8,
      11,
      12,
      13,
      14,
      15
     ],
     "table": "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////78="
    }
   },
   {
    "name": "Sushi",
    "color": "orange",
    "row": 3,
    "column": 3,
    "text": "Among the cats in the middle, at least one is honest and at least one is a liar.",
    "hidden": false,
    "secret": null,
    "mentions": [
     5,
     6,
     9,
     10
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      5,
      6,
      9,
      10,
      15
     ],
     "table": "/n8BgA=="
    }
   }
  ],
  "liars": [
   true,
   false,
   true,
   true,
   true,
   true,
   true,
   true,
   true,
   false,
   true,
   false,
   false,
   false,
   true,
   false
  ]
 },
 {
  "rows": 4,
  "cols": 4,
  "seed": 1025,
  "level": "hard",
  "given": null,
  "cats": [
   {
    "name": "Bagel",
    "color": "orange",
    "row": 0,
    "column": 0,
    "text": "There are as many liars among the grey cats as in row 2.",
    "hidden": false,
    "secret": null,
    "mentions": [
     4,
     5,
     6,
     7,
     13,
     15
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      0,
      4,
      5,
      6,
      7,
      13,
      15
     ],
     "table": "qaqqqpapqaqWqamqapaWqQ=="
    }
   },
   {
    "name": "Clover",
    "color": "orange",
    "row": 0,
    "column": 1,
    "text": "Mew. An odd number of the black cats are liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     7,
     8
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      1,
      7,
      8
     ],
     "table": "lg=="
    }
   },
   {
    "name": "Ember",
    "color": "brown",
    "row": 0,
    "column": 2,
    "text": "An odd number of the cats to my left are liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     1
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      0,
      1,
      2
     ],
     "table": "lg=="
    }
   },
   {
    "name": "Felix",
    "color": "white",
    "row": 0,
    "column": 3,
    "text": "Exactly one of the cats in row 2 is a liar.",
    "hidden": false,
    "secret": null,
    "mentions": [
     4,
     5,
     6,
     7
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      3,
      4,
      5,
      6,
      7
     ],
     "table": "lqmpqg=="
    }
   },
   {
    "name": "Hobbes",
    "color": "orange",
    "row": 1,
    "column": 0,
    "text": "All of the cats on the edges are the same: all honest, or all liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     1,
     2,
     3,
     7,
     8,
     11,
     12,
     13,
     14,
     15
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      0,
      1,
      2,
      3,
      4,
      7,
      8,
      11,
      12,
      13,
      14,
      15
     ],
     "table": "AQD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA/38="
    }
   },
   {
    "name": "Indigo",
    "color": "brown",
    "row": 1,
    "column": 1,
    "text": "Among the corner cats, at least one is honest and at least one is a liar.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     3,
     12,
     15
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      0,
      3,
      5,
      12,
      15
     ],
     "table": "Hg8Phw=="
    }
   },
   {
    "name": "Lentil",
    "color": "white",
    "row": 1,
    "column": 2,
    "text": "At least one of Nugget and me is honest.",
    "hidden": false,
    "secret": null,
    "mentions": [
     8
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      6,
      8
     ],
     "table": "DQ=="
    }
   },
   {
    "name": "Mochi",
    "color": "black",
    "row": 1,
    "column": 3,
    "text": "At least one of these is true: Yam is a liar, or all of the cats in the middle are honest.",
    "hidden": false,
    "secret": null,
    "mentions": [
     5,
     6,
     9,
     10,
     15
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      5,
      6,
      7,
      9,
      10,
      15
     ],
     "table": "4fDw8A8PDw8="
    }
   },
   {
    "name": "Nugget",
    "color": "black",
    "row": 2,
    "column": 0,
    "text": "At least one of the corner cats is a liar.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     3,
     12,
     15
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      0,
      3,
      8,
      12,
      15
     ],
     "table": "Hg8PDw=="
    }
   },
   {
    "name": "Paprika",
    "color": "brown",
    "row": 2,
    "column": 1,
    "text": "Mew. All the honest cats are connected.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     1,
     2,
     3,
     4,
     5,
     6,
     7,
     8,
     10,
     11,
     12,
     13,
     14,
     15
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15
     ],
     "table": "//+7u9/fi4v/87uz39GLgA//C7sP3wuLA/MDswHRAID//7u7AQGLi//zu7MBAIuAD/8LuwEBC4sD8wOzAAAAgAAAREQgIHR0AAz8/yAudH/wAPRE8CD0dPwM///+Lv9/AABERP7+dHT8//z//v90f/AA9ET+/vR0/////////3///7u739+Li//zu7Pf0YuAD/8LuwEBAAAD8wOzAdEAgP//u7sBAYuL//O7swEAi4AP/wu7AAAAAAPzA7MAAACAAABERCAgdHQADPz/IC50f/AA///+/v///Az///4u/38AAERE/v50dPz//P/+/3R/////////////////////f///u7vf34uLAwADAAEAAAAP/wu7D98LiwPzA7MB0QCA//+7uwEBi4sDAAMAAAAAAA//C7sBAQuLA/MDswAAAIAAAEREICB0dPz////+////8AD0RPAg9HT8DP///i7/fwAARET+/nR0///////////wAPRE/v70dP////////9///+7uwEBAAADAAMAAQAAAA//C7sBAQAAA/MDswHRAID//7u7AAAAAAMAAwAAAAAAD/8LuwAAAAAD8wOzAAAAgAAA///+/v///P////7////wAP///v7///wM///+Lv9//////////////////////////////////////////3///7u739+Li//zu7Pf0YuAD/8Luw/fC4sD8wOzAdEAgP//u7sBAYuL//O7swEAi4AP/wu7AQELiwPzA7MAAACAAAD///7+///8/////v////AA///+/v////////////8AAERE/v50dPz//P/+/3R/8AD0RP7+9HT/////////f///u7vf34uL//O7s9/Ri4AP/wu7AQEAAAPzA7MB0QCA//+7uwEBi4v/87uzAQCLgA//C7sAAAAAA/MDswAAAIAAAP///v7///z////+/////////////////////////wAARET+/nR0/P/8//7/dH////////////////////9///+7u9/fi4sDAAMAAQAAAA//C7sP3wuLA/MDswHRAID//7u7AQGLiwMAAwAAAAAAD/8LuwEBC4sD8wOzAAAAgAAA///+/v/////////////wAP///v7/////////////AABERP7+dHT///////////AA9ET+/vR0/////////3///7u7AQEAAAMAAwABAAAAD/8LuwEBAAAD8wOzAdEAgP//u7sAAAAAAwADAAAAAAAP/wu7AAAAAAPzA7MAAACA////////////////////////////////////////////////////////////////////////////////////f///u7vf34uL//O7s9/Ri4AP/wu7D98LiwPzA7MB0QCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP///v7///z////+////8AD///7+//////////////////////////////////////////////////////////+7uwEBAAADAAMAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA///+/v///P////7//////////////////////////////////////////////////////////////////////7u739+LiwMAAwABAAAAD/8Luw/fC4sD8wOzAdEAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///7+//////////////AA///+/v///////////////////////////////////////////////////////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///////////////////////////////////////////////////////////////////////////////////////+7u9/fi4v/87uz39GLgA//C7sP3wuLA/MDswHRAID//7u7AQGLi//zu7MBAIuAD/8LuwEBC4sD8wOzAAAAgAAA///+/v///P////7////wAP///v7/////////////AABERP7+dHT8//z//v90f/AA9ET+/vR0/////////3///7u7AQEAAAMAAwABAAAAAAAAAAAAAAAAAAAAAAAAAP//u7sAAAAAAwADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///7+///8/////v////////////////////////8AAERE/v50dPz//P/+/3R/////////////////////f///u7vf34uLAwADAAEAAAAP/wu7D98LiwPzA7MB0QCA//+7uwEBi4sDAAMAAAAAAA//C7sBAQuLA/MDswAAAIAAAP///v7/////////////8AD///7+/////////////wAARET+/nR0///////////wAPRE/v70dP////////9/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP///////////////////////////////////////////////////////////////////////////////////3///7u739+Li//zu7Pf0YuAD/8Luw/fC4sD8wOzAdEAgP//u7sBAYuL//O7swEAi4AP/wu7AQELiwPzA7MAAACAAAD///7+///8/////v////AA///+/v//////////////////////////////////////////////////////////u7sBAQAAAwADAAEAAAAAAAAAAAAAAAAAAAAAAAAA//+7uwAAAAADAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP///v7///z////+////////////////////////////////////////////////////////////////////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP////////////////////////////////////////////////////////////////////////////////////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA////////////////////////////////////////////////////////////////////////////////////////u7vf34uL//O7s9/Ri4AP/wu7D98LiwPzA7MB0QCA//+7uwEBi4v/87uzAQCLgA//C7sBAQuLA/MDswAAAID///////////////////////////////////////////////////////////////////////////////////////+7uwEBAAADAAMAAQAAAAAAAAAAAAAAAAAAAAAAAAD//7u7AAAAAAMAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAP////////////////////////////////////////////////////////////////////////////////////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/////////////////////////////////////////////////////////////////////////////////////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///////////////////////////////////////////////////////////////////////////////////////+7u9/fi4v/87uz39GLgA//C7sP3wuLA/MDswHRAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA///+/v///P////7////wAP///v7//////////////////////////////////////////////////////////7u7AQEAAAMAAwABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///7+///8/////v///////////////////////////////////////////////////////////////////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/////////////////////////////////////////////////////////////////////////////////////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP///////////////////////////////////////////////////////////////////////////////////////7u739+Li//zu7Pf0YuAD/8Luw/fC4sD8wOzAdEAgP//u7sBAYuL//O7swEAi4AP/wu7AQELiwPzA7MAAACAAAD///7+///8/////v////AA///+/v////////////8AAERE/v50dPz//P/+/3R/8AD0RP7+9HT/////////f///u7sBAQAAAwADAAEAAAAAAAAAAAAAAAAAAAAAAAAA//+7uwAAAAADAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP///v7///z////+/////////////////////////wAARET+/nR0/P/8//7/dH////////////////////9/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP////////////////////////////////////////////////////////////////////////////////////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA////////////////////////////////////////////////////////////////////////////////////f///u7vf34uL//O7s9/Ri4AP/wu7D98LiwPzA7MB0QCA//+7uwEBi4v/87uzAQCLgA//C7sBAQuLA/MDswAAAIAAAEREICB0dAAM/P8gLnR/8AD0RPAg9HT8DP///i7/fwAARET+/nR0/P/8//7/dH/wAPRE/v70dP////////9///+7uwEBAAADAAMAAQAAAAAAAAAAAAAAAAAAAAAAAAD//7u7AAAAAAMAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA///+/v///P////7//////////////////////////////////////////////////////////////////////7u739+LiwMAAwABAAAAD/8Luw/fC4sD8wOzAdEAgP//u7sBAYuLAwADAAAAAAAP/wu7AQELiwPzA7MAAACAAABERCAgdHT8/////v////AA9ETwIPR0/Az///4u/38AAERE/v50dP//////////8AD0RP7+9HT/////////f///u7sBAQAAAwADAAEAAAAP/wu7AQEAAAPzA7MB0QCA//+7uwAAAAADAAMAAAAAAA//C7sAAAAAA/MDswAAAIAAAP///v7///z////+////8AD///7+///8DP///i7/f/////////////////////////////////////////9///+7u9/fi4v/87uz39GLgA//C7sP3wuLA/MDswHRAID//7u7AQGLi//zu7MBAIuAD/8LuwEBC4sD8wOzAAAAgAAA///+/v///P////7////wAP///v7/////////////AABERP7+dHT8//z//v90f/AA9ET+/vR0/////////3///7u7AQEAAAMAAwABAAAAAAAAAAAAAAAAAAAAAAAAAP//u7sAAAAAAwADAAAAAAAAAAAAAAAAAAAAAAAAAAAA////////////////////////////////////////////////////////////////////////////////////////u7vf34uLAwADAAEAAAAP/wu7D98LiwPzA7MB0QCA//+7uwEBi4sDAAMAAAAAAA//C7sBAQuLA/MDswAAAIAAAP///v7/////////////8AD///7+/////////////wAARET+/nR0///////////wAPRE/v70dP////////9///+7uwEBAAADAAMAAQAAAA//C7sBAQAAA/MDswHRAID//7u7AAAAAAMAAwAAAAAAD/8LuwAAAAAD8wOzAAAAgP///////////////////////////////////////////////////////////////////////////////////3///7u739+Li//zu7Pf0YuAD/8Luw/fC4sD8wOzAdEAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///7+///8/////v////AA///+/v///////////////////////////////////////////////////////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///////////////////////////////////////////////////////////////////////////////////////+7u9/fi4sDAAMAAQAAAA//C7sP3wuLA/MDswHRAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA///+/v/////////////wAP///v7///////////////////////////////////////////////////////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA////////////////////////////////////////////////////////////////////////////////////////u7vf34uL//O7s9/Ri4AP/wu7D98LiwPzA7MB0QCA//+7uwEBi4v/87uzAQCLgA//C7sBAQuLA/MDswAAAIAAAP///v7///z////+////8AD///7+/////////////wAARET+/nR0/P/8//7/dH/wAPRE/v70dP////////9/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP///////////////////////////////////////////////////////////////////////////////////////7u739+LiwMAAwABAAAAD/8Luw/fC4sD8wOzAdEAgP//u7sBAYuLAwADAAAAAAAP/wu7AQELiwPzA7MAAACAAAD///7+//////////////AA///+/v////////////8AAERE/v50dP//////////8AD0RP7+9HT/////////fwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///////////////////////////////////////////////////////////////////////////////////9///+7u9/fi4v/87uz39GLgA//C7sP3wuLA/MDswHRAID//7u7AQGLi//zu7MBAIuAD/8LuwEBC4sD8wOzAAAAgAAA///+/v///P////7////wAP///v7//////////////////////////////////////////////////////////7u7AQEAAAMAAwABAAAAAAAAAAAAAAAAAAAAAAAAAP//u7sAAAAAAwADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///7+///8/////v//////////////////////////////////////////////////////////////////////u7vf34uLAwADAAEAAAAP/wu7D98LiwPzA7MB0QCA//+7uwEBi4sDAAMAAAAAAA//C7sBAQuLA/MDswAAAIAAAP///v7/////////////8AD///7+//////////////////////////////////////////////////////////+7uwEBAAADAAMAAQAAAA//C7sBAQAAA/MDswHRAID//7u7AAAAAAMAAwAAAAAAD/8LuwAAAAAD8wOzAAAAgAAA///+/v///P////7////wAP///v7///wM///+Lv9//////////////////////////////////////////3///7u739+Li//zu7Pf0YuAD/8Luw/fC4sD8wOzAdEAgP//u7sBAYuL//O7swEAi4AP/wu7AQELiwPzA7MAAACA////////////////////////////////////////////////////////////////////////////////////////u7sBAQAAAwADAAEAAAAAAAAAAAAAAAAAAAAAAAAA//+7uwAAAAADAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAD///////////////////////////////////////////////////////////////////////////////////////+7u9/fi4sDAAMAAQAAAA//C7sP3wuLA/MDswHRAID//7u7AQGLiwMAAwAAAAAAD/8LuwEBC4sD8wOzAAAAgP///////////////////////////////////////////////////////////////////////////////////////7u7AQEAAAMAAwABAAAAD/8LuwEBAAAD8wOzAdEAgP//u7sAAAAAAwADAAAAAAAP/wu7AAAAAAPzA7MAAACA////////////////////////////////////////////////////////////////////////////////////f///u7vf34uL//O7s9/Ri4AP/wu7D98LiwPzA7MB0QCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP///v7///z////+////8AD///7+//////////////////////////////////////////////////////////+7uwEBAAADAAMAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA///+/v///P////7//////////////////////////////////////////////////////////////////////7u739+LiwMAAwABAAAAD/8Luw/fC4sD8wOzAdEAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///7+//////////////AA///+/v//////////////////////////////////////////////////////////u7sBAQAAAwADAAEAAAAP/wu7AQEAAAPzA7MB0QCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP///v7///z////+////8AD///7+///8DP///i7/f/////////////////////////////////////////9///+7u9/fi4v/87uz39GLgA//C7sP3wuLA/MDswHRAID//7u7AQGLi//zu7MBAIuAD/8LuwEBC4sD8wOzAAAAgAAA///+/v///P////7////wAP///v7/////////////AABERP7+dHT8//z//v90f/AA9ET+/vR0/////////3///7u7AQEAAAMAAwABAAAAAAAAAAAAAAAAAAAAAAAAAP//u7sAAAAAAwADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///7+///8/////v////////////////////////8AAERE/v50dPz//P/+/3R/////////////////////f///u7vf34uLAwADAAEAAAAP/wu7D98LiwPzA7MB0QCA//+7uwEBi4sDAAMAAAAAAA//C7sBAQuLA/MDswAAAIAAAP///v7/////////////8AD///7+/////////////wAARET+/nR0///////////wAPRE/v70dP////////9///+7uwEBAAADAAMAAQAAAA//C7sBAQAAA/MDswHRAID//7u7AAAAAAMAAwAAAAAAD/8LuwAAAAAD8wOzAAAAAAAA///+/v///P////7////wAP///v7///wM///+Lv9/AABERP7+dHT8//z//v90f/AA9ET+/vR0/Az8TP4udAQ="
    }
   },
   {
    "name": "Rusty",
    "color": "white",
    "row": 2,
    "column": 2,
    "text": "Among Clover, Lentil and me, at least one is honest and at least one is a liar.",
    "hidden": false,
    "secret": null,
    "mentions": [
     1,
     6
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      1,
      6,
      10
     ],
     "table": "jg=="
    }
   },
   {
    "name": "Saffron",
    "color": "yellow",
    "row": 2,
    "column": 3,
    "text": "All the honest cats in column 3 are connected.",
    "hidden": false,
    "secret": null,
    "mentions": [
     2,
     6,
     10,
     14
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      2,
      6,
      10,
      11,
      14
     ],
     "table": "C3QTBA=="
    }
   },
   {
    "name": "Tofu",
    "color": "white",
    "row": 3,
    "column": 0,
    "text": "I smell a rat. At least one of Indigo's neighbors is a liar.",
    "hidden": false,
    "secret": null,
    "mentions": [
     1,
     4,
     6,
     9
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      1,
      4,
      6,
      9,
      12
     ],
     "table": "/v8BAA=="
    }
   },
   {
    "name": "Umber",
    "color": "grey",
    "row": 3,
    "column": 1,
    "text": "Mrow. An odd number of the cats in row 2 are liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     4,
     5,
     6,
     7
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      4,
      5,
      6,
      7,
      13
     ],
     "table": "lmlplg=="
    }
   },
   {
    "name": "Vanilla",
    "color": "yellow",
    "row": 3,
    "column": 2,
    "text": "There are more liars in row 3 than in my row.",
    "hidden": false,
    "secret": null,
    "mentions": [
     8,
     9,
     10,
     11,
     12,
     13,
     15
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15
     ],
     "table": "/v/o/uj+gOgXAX8Xfxf/f+j+gOiA6ACAfxf/f/9///8="
    }
   },
   {
    "name": "Yam",
    "color": "grey",
    "row": 3,
    "column": 3,
    "text": "Mew. Vanilla is the only honest cat among Mochi, Vanilla and me.",
    "hidden": false,
    "secret": null,
    "mentions": [
     7,
     14
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      7,
      14,
      15
     ],
     "table": "0A=="
    }
   }
  ],
  "liars": [
   false,
   true,
   false,
   false,
   true,
   false,
   false,
   false,
   false,
   true,
   false,
   false,
   false,
   false,
   true,
   true
  ]
 },
 {
  "rows": 4,
  "cols": 4,
  "seed": 1026,
  "level": "hard",
  "given": null,
  "cats": [
   {
    "name": "Apricot",
    "color": "white",
    "row": 0,
    "column": 0,
    "text": "An odd number of the cats on the edges are liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     1,
     2,
     3,
     4,
     7,
     8,
     11,
     12,
     13,
     14,
     15
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      0,
      1,
      2,
      3,
      4,
      7,
      8,
      11,
      12,
      13,
      14,
      15
     ],
     "table": "PMPDPMM8PMPDPDzDPMPDPMM8PMM8w8M8PMPDPMM8PMPDPDzDPMPDPDzDwzzDPDzDPMPDPMM8PMPDPDzDPMPDPMM8PMM8w8M8PMPDPMM8PMM8w8M8wzw8w8M8PMM8w8M8PMPDPMM8PMPDPDzDPMPDPMM8PMM8w8M8PMPDPMM8PMPDPDzDPMPDPDzDwzzDPDzDPMPDPMM8PMPDPDzDPMPDPDzDwzzDPDzDwzw8wzzDwzzDPDzDPMPDPDzDwzzDPDzDPMPDPMM8PMPDPDzDPMPDPMM8PMM8w8M8PMPDPMM8PMPDPDzDPMPDPDzDwzzDPDzDPMPDPMM8PMPDPDzDPMPDPMM8PMM8w8M8PMPDPMM8PMM8w8M8wzw8w8M8PMM8w8M8PMPDPMM8PMPDPDzDPMPDPMM8PMM8w8M8PMPDPMM8PMM8w8M8wzw8w8M8PMM8w8M8wzw8wzzDwzw8w8M8wzw8w8M8PMM8w8M8PMPDPMM8PMM8w8M8wzw8w8M8PMM8w8M8PMPDPMM8PMPDPDzDPMPDPMM8PMM8w8M8PMPDPMM8PMPDPDzDPMPDPDzDwzzDPDzDPMPDPMM8PMPDPDzDPMPDPMM8PMM8w8M8PMPDPMM8PMM8w8M8wzw8w8M8PMM8w8M8PMPDPMM8PMPDPDzDPMPDPMM8PMM8w8M8PMPDPMM8PMM="
    }
   },
   {
    "name": "Biscuit",
    "color": "black",
    "row": 0,
    "column": 1,
    "text": "Mrow. All the honest cats in column 3 are connected.",
    "hidden": false,
    "secret": null,
    "mentions": [
     2,
     6,
     10,
     14
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      1,
      2,
      6,
      10,
      14
     ],
     "table": "ZSolAQ=="
    }
   },
   {
    "name": "Clover",
    "color": "yellow",
    "row": 0,
    "column": 2,
    "text": "There are more honest cats in my row than in row 4.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     1,
     3,
     12,
     13,
     14,
     15
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      0,
      1,
      2,
      3,
      12,
      13,
      14,
      15
     ],
     "table": "8PDx8PHw5/Hx8Ofx5/GP5/Hw5/Hn8Y/n5/GP54/nD48="
    }
   },
   {
    "name": "Dumpling",
    "color": "brown",
    "row": 0,
    "column": 3,
    "text": "All the honest cats in my column are connected.",
    "hidden": false,
    "secret": null,
    "mentions": [
     7,
     11,
     15
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      3,
      7,
      11,
      15
     ],
     "table": "IRE="
    }
   },
   {
    "name": "Espresso",
    "color": "orange",
    "row": 1,
    "column": 0,
    "text": "Among Fig's neighbors, at least one is honest and at least one is a liar.",
    "hidden": false,
    "secret": null,
    "mentions": [
     1,
     6,
     9
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      1,
      4,
      6,
      9
     ],
     "table": "MrM="
    }
   },
   {
    "name": "Fig",
    "color": "yellow",
    "row": 1,
    "column": 1,
    "text": "At least one of the cats in my column is a liar.",
    "hidden": false,
    "secret": null,
    "mentions": [
     1,
     9,
     13
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      1,
      5,
      9,
      13
     ],
     "table": "MjM="
    }
   },
   {
    "name": "Honey",
    "color": "brown",
    "row": 1,
    "column": 2,
    "text": "At least one of these is true: Jasper is honest, or all of the cats in column 1 are liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     4,
     8,
     12
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      0,
      4,
      6,
      8,
      12
     ],
     "table": "D/APeA=="
    }
   },
   {
    "name": "Iggy",
    "color": "white",
    "row": 1,
    "column": 3,
    "text": "Biscuit and Sprout are both honest, or both liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     1,
     13
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      1,
      7,
      13
     ],
     "table": "aQ=="
    }
   },
   {
    "name": "Jasper",
    "color": "brown",
    "row": 2,
    "column": 0,
    "text": "Meow. Among the cats on the edges, at least one is honest and at least one is a liar.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     1,
     2,
     3,
     4,
     7,
     11,
     12,
     13,
     14,
     15
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      0,
      1,
      2,
      3,
      4,
      7,
      8,
      11,
      12,
      13,
      14,
      15
     ],
     "table": "/v////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAIA="
    }
   },
   {
    "name": "Marble",
    "color": "grey",
    "row": 2,
    "column": 1,
    "text": "Mew. Among Truffle's neighbors, at least one is honest and at least one is a liar.",
    "hidden": false,
    "secret": null,
    "mentions": [
     10,
     13,
     15
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      9,
      10,
      13,
      15
     ],
     "table": "VpU="
    }
   },
   {
    "name": "Nimbus",
    "color": "black",
    "row": 2,
    "column": 2,
    "text": "An odd number of Clover, Marble and me are liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     2,
     9
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      2,
      9,
      10
     ],
     "table": "Zg=="
    }
   },
   {
    "name": "Pickles",
    "color": "black",
    "row": 2,
    "column": 3,
    "text": "There are more honest cats in row 2 than among Sprout's neighbors.",
    "hidden": false,
    "secret": null,
    "mentions": [
     4,
     5,
     6,
     7,
     9,
     12,
     14
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      4,
      5,
      6,
      7,
      9,
      11,
      12,
      14
     ],
     "table": "AQAXAf7/6P4XAX8X6P6A6BcBfxfo/oDofxf/f4DoAIA="
    }
   },
   {
    "name": "Queenie",
    "color": "grey",
    "row": 3,
    "column": 0,
    "text": "I smell a rat. At least one of the cats in the middle is a liar.",
    "hidden": false,
    "secret": null,
    "mentions": [
     5,
     6,
     9,
     10
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      5,
      6,
      9,
      10,
      12
     ],
     "table": "/v8BAA=="
    }
   },
   {
    "name": "Sprout",
    "color": "orange",
    "row": 3,
    "column": 1,
    "text": "Mrow. An odd number of Iggy, Marble and me are liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     7,
     9
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      7,
      9,
      13
     ],
     "table": "Zg=="
    }
   },
   {
    "name": "Truffle",
    "color": "black",
    "row": 3,
    "column": 2,
    "text": "Mrow. Clover is honest, but Umber is a liar.",
    "hidden": false,
    "secret": null,
    "mentions": [
     2,
     15
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      2,
      14,
      15
     ],
     "table": "nA=="
    }
   },
   {
    "name": "Umber",
    "color": "orange",
    "row": 3,
    "column": 3,
    "text": "Exactly one of Espresso, Truffle and me is a liar.",
    "hidden": false,
    "secret": null,
    "mentions": [
     4,
     14
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      4,
      14,
      15
     ],
     "table": "5g=="
    }
   }
  ],
  "liars": [
   false,
   false,
   false,
   false,
   false,
   false,
   false,
   false,
   false,
   true,
   false,
   false,
   false,
   false,
   true,
   false
  ]
 },
 {
  "rows": 4,
  "cols": 4,
  "seed": 1027,
  "level": "tricky",
  "given": null,
  "cats": [
   {
    "name": "Biscuit",
    "color": "orange",
    "row": 0,
    "column": 0,
    "text": "At least one of these is true: Jasper is honest, or all of the cats in row 2 are liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     4,
     5,
     6,
     7
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      0,
      4,
      5,
      6,
      7
     ],
     "table": "VapVag=="
    }
   },
   {
    "name": "Doodle",
    "color": "black",
    "row": 0,
    "column": 1,
    "text": "An odd number of Biscuit, Luna and me are liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     8
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      0,
      1,
      8
     ],
     "table": "Wg=="
    }
   },
   {
    "name": "Ember",
    "color": "orange",
    "row": 0,
    "column": 2,
    "text": "All the honest cats in my column are connected.",
    "hidden": false,
    "secret": null,
    "mentions": [
     6,
     10,
     14
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      2,
      6,
      10,
      14
     ],
     "table": "IRE="
    }
   },
   {
    "name": "Fig",
    "color": "black",
    "row": 0,
    "column": 3,
    "text": "Among Luna, Quincy and me, at least one is honest and at least one is a liar.",
    "hidden": false,
    "secret": null,
    "mentions": [
     8,
     12
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      3,
      8,
      12
     ],
     "table": "1A=="
    }
   },
   {
    "name": "Goose",
    "color": "brown",
    "row": 1,
    "column": 0,
    "text": "Meow. At least one of Pepper and Quincy is honest.",
    "hidden": false,
    "secret": null,
    "mentions": [
     11,
     12
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      4,
      11,
      12
     ],
     "table": "lQ=="
    }
   },
   {
    "name": "Indigo",
    "color": "yellow",
    "row": 1,
    "column": 1,
    "text": "An odd number of Ember, Luna and me are liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     2,
     8
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      2,
      5,
      8
     ],
     "table": "Wg=="
    }
   },
   {
    "name": "Jasper",
    "color": "orange",
    "row": 1,
    "column": 2,
    "text": "An odd number of the black cats are liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     1,
     3,
     15
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      1,
      3,
      6,
      15
     ],
     "table": "lmk="
    }
   },
   {
    "name": "Kismet",
    "color": "white",
    "row": 1,
    "column": 3,
    "text": "All of the cats in row 1 are the same: all honest, or all liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     1,
     2,
     3
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      0,
      1,
      2,
      3,
      7
     ],
     "table": "AYD+fw=="
    }
   },
   {
    "name": "Luna",
    "color": "white",
    "row": 2,
    "column": 0,
    "text": "Exactly 2 of Sushi's neighbors are liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     10,
     13,
     15
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      8,
      10,
      13,
      15
     ],
     "table": "apY="
    }
   },
   {
    "name": "Marble",
    "color": "brown",
    "row": 2,
    "column": 1,
    "text": "I smell a rat. At least one of the cats in row 4 is a liar.",
    "hidden": false,
    "secret": null,
    "mentions": [
     12,
     13,
     14,
     15
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      9,
      12,
      13,
      14,
      15
     ],
     "table": "VlVVVQ=="
    }
   },
   {
    "name": "Oreo",
    "color": "yellow",
    "row": 2,
    "column": 2,
    "text": "There are more liars among the black cats than among Indigo's neighbors.",
    "hidden": false,
    "secret": null,
    "mentions": [
     1,
     3,
     4,
     6,
     9,
     15
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      1,
      3,
      4,
      6,
      9,
      10,
      15
     ],
     "table": "DAAAAPP////PDAwAMPPz/w=="
    }
   },
   {
    "name": "Pepper",
    "color": "white",
    "row": 2,
    "column": 3,
    "text": "Among the cats in column 1, at least one is honest and at least one is a liar.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     4,
     8,
     12
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      0,
      4,
      8,
      11,
      12
     ],
     "table": "/gF/gA=="
    }
   },
   {
    "name": "Quincy",
    "color": "brown",
    "row": 3,
    "column": 0,
    "text": "There are exactly 2 liars in total. Meow.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     1,
     2,
     3,
     4,
     5,
     6,
     7,
     8,
     9,
     10,
     11,
     13,
     14,
     15
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15
     ],
     "table": "aBYWARYBAQAWAQEAAQAAABYBAQABAAAAAQAAAAAAAAAWAQEAAQAAAAEAAAAAAAAAAQAAAAAAAAAAAAAAAAAAABYBAQABAAAAAQAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAWAQEAAQAAAAEAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABYBAQABAAAAAQAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADp/v7//v////7//////////v////////////////////7//////////////////////////////////////////v////////////////////////////////////////////////////////////////////////////////////7//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////v///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////xYBAQABAAAAAQAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/v////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8WAQEAAQAAAAEAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP7/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////AQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////xYBAQABAAAAAQAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/v////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////AQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8="
    }
   },
   {
    "name": "Ravioli",
    "color": "yellow",
    "row": 3,
    "column": 1,
    "text": "Udon is the only liar among the cats in my row. Mrow.",
    "hidden": false,
    "secret": null,
    "mentions": [
     12,
     14,
     15
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      12,
      13,
      14,
      15
     ],
     "table": "zM0="
    }
   },
   {
    "name": "Sushi",
    "color": "white",
    "row": 3,
    "column": 2,
    "text": "There are more honest cats in column 1 than among Quincy's neighbors.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     4,
     8,
     12,
     13
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      0,
      4,
      8,
      12,
      13,
      14
     ],
     "table": "dxH/d4juAIg="
    }
   },
   {
    "name": "Udon",
    "color": "black",
    "row": 3,
    "column": 3,
    "text": "There are more liars in row 2 than among Jasper's neighbors.",
    "hidden": false,
    "secret": null,
    "mentions": [
     2,
     4,
     5,
     6,
     7,
     10
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      2,
      4,
      5,
      6,
      7,
      10,
      15
     ],
     "table": "RN1E3QBEAES7Irsi/7v/uw=="
    }
   }
  ],
  "liars": [
   false,
   false,
   false,
   false,
   false,
   false,
   false,
   false,
   true,
   false,
   false,
   false,
   false,
   false,
   false,
   true
  ]
 },
 {
  "rows": 4,
  "cols": 4,
  "seed": 1028,
  "level": "tricky",
  "given": null,
  "cats": [
   {
    "name": "Apricot",
    "color": "yellow",
    "row": 0,
    "column": 0,
    "text": "At least one of Gizmo and Honey is honest. Mrow.",
    "hidden": false,
    "secret": null,
    "mentions": [
     6,
     7
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      0,
      6,
      7
     ],
     "table": "lQ=="
    }
   },
   {
    "name": "Biscuit",
    "color": "brown",
    "row": 0,
    "column": 1,
    "text": "Mrow. Juniper is honest, but Echo is a liar.",
    "hidden": false,
    "secret": null,
    "mentions": [
     4,
     8
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      1,
      4,
      8
     ],
     "table": "pg=="
    }
   },
   {
    "name": "Cricket",
    "color": "black",
    "row": 0,
    "column": 2,
    "text": "Exactly one of my neighbors is a liar. Mrow.",
    "hidden": false,
    "secret": null,
    "mentions": [
     1,
     3,
     6
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      1,
      2,
      3,
      6
     ],
     "table": "lsk="
    }
   },
   {
    "name": "Dusty",
    "color": "white",
    "row": 0,
    "column": 3,
    "text": "An odd number of the cats in my row are liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     1,
     2
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      0,
      1,
      2,
      3
     ],
     "table": "lpY="
    }
   },
   {
    "name": "Echo",
    "color": "grey",
    "row": 1,
    "column": 0,
    "text": "All the honest cats in column 2 are connected.",
    "hidden": false,
    "secret": null,
    "mentions": [
     1,
     5,
     9,
     13
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      1,
      4,
      5,
      9,
      13
     ],
     "table": "Y0xDAQ=="
    }
   },
   {
    "name": "Fudge",
    "color": "orange",
    "row": 1,
    "column": 1,
    "text": "An odd number of Juniper, Marble and me are liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     8,
     10
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      5,
      8,
      10
     ],
     "table": "PA=="
    }
   },
   {
    "name": "Gizmo",
    "color": "black",
    "row": 1,
    "column": 2,
    "text": "An odd number of the cats to my left are liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     4,
     5
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      4,
      5,
      6
     ],
     "table": "lg=="
    }
   },
   {
    "name": "Honey",
    "color": "white",
    "row": 1,
    "column": 3,
    "text": "Lentil is the only honest cat among Lentil, Rusty and me.",
    "hidden": false,
    "secret": null,
    "mentions": [
     9,
     15
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      7,
      9,
      15
     ],
     "table": "ig=="
    }
   },
   {
    "name": "Juniper",
    "color": "yellow",
    "row": 2,
    "column": 0,
    "text": "At least one of these is true: Honey is a liar, or all of the cats in my row are honest.",
    "hidden": false,
    "secret": null,
    "mentions": [
     7,
     9,
     10,
     11
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      7,
      8,
      9,
      10,
      11
     ],
     "table": "Z2ZmZg=="
    }
   },
   {
    "name": "Lentil",
    "color": "grey",
    "row": 2,
    "column": 1,
    "text": "Apricot and Honey are both honest.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     7
    ],
    "mood": "happy",
    "clue": {
     "cats": [
      0,
      7,
      9
     ],
     "table": "4Q=="
    }
   },
   {
    "name": "Marble",
    "color": "yellow",
    "row": 2,
    "column": 2,
    "text": "All of my neighbors are the same: all honest, or all liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     6,
     9,
     11,
     14
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      6,
      9,
      10,
      11,
      14
     ],
     "table": "4fDweA=="
    }
   },
   {
    "name": "Nugget",
    "color": "orange",
    "row": 2,
    "column": 3,
    "text": "Exactly one of the cats in the middle is a liar.",
    "hidden": false,
    "secret": null,
    "mentions": [
     5,
     6,
     9,
     10
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      5,
      6,
      9,
      10,
      11
     ],
     "table": "FgHp/g=="
    }
   },
   {
    "name": "Otis",
    "color": "yellow",
    "row": 3,
    "column": 0,
    "text": "There are more honest cats among Fudge's neighbors than among the black cats. Mew.",
    "hidden": false,
    "secret": null,
    "mentions": [
     1,
     2,
     4,
     6,
     9
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      1,
      2,
      4,
      6,
      9,
      12
     ],
     "table": "399NTSAgsrI="
    }
   },
   {
    "name": "Pepper",
    "color": "orange",
    "row": 3,
    "column": 1,
    "text": "All the liars in column 4 are connected.",
    "hidden": false,
    "secret": null,
    "mentions": [
     3,
     7,
     11,
     15
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      3,
      7,
      11,
      13,
      15
     ],
     "table": "yCDQLg=="
    }
   },
   {
    "name": "Queenie",
    "color": "brown",
    "row": 3,
    "column": 2,
    "text": "All of Lentil, Marble and me are honest.",
    "hidden": false,
    "secret": null,
    "mentions": [
     9,
     10
    ],
    "mood": "happy",
    "clue": {
     "cats": [
      9,
      10,
      14
     ],
     "table": "8Q=="
    }
   },
   {
    "name": "Rusty",
    "color": "orange",
    "row": 3,
    "column": 3,
    "text": "There are as many liars among Pepper's neighbors as among Fudge's neighbors.",
    "hidden": false,
    "secret": null,
    "mentions": [
     1,
     4,
     6,
     9,
     12,
     14
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      1,
      4,
      6,
      9,
      12,
      14,
      15
     ],
     "table": "AQEWFhYWaGj+/unp6emXlw=="
    }
   }
  ],
  "liars": [
   false,
   false,
   true,
   false,
   true,
   false,
   false,
   true,
   false,
   true,
   true,
   true,
   false,
   false,
   true,
   false
  ]
 },
 {
  "rows": 4,
  "cols": 4,
  "seed": 1029,
  "level": "tricky",
  "given": null,
  "cats": [
   {
    "name": "Ash",
    "color": "black",
    "row": 0,
    "column": 0,
    "text": "Mrow. At least one of Marble and Noodle is a liar.",
    "hidden": false,
    "secret": null,
    "mentions": [
     9,
     10
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      0,
      9,
      10
     ],
     "table": "Vg=="
    }
   },
   {
    "name": "Bean",
    "color": "orange",
    "row": 0,
    "column": 1,
    "text": "Inky and Pepper are opposites: one is honest, the other is a liar.",
    "hidden": false,
    "secret": null,
    "mentions": [
     6,
     12
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      1,
      6,
      12
     ],
     "table": "lg=="
    }
   },
   {
    "name": "Coco",
    "color": "brown",
    "row": 0,
    "column": 2,
    "text": "At least 3 of the cats in column 2 are liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     1,
     5,
     9,
     13
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      1,
      2,
      5,
      9,
      13
     ],
     "table": "zGxsNg=="
    }
   },
   {
    "name": "Dusty",
    "color": "grey",
    "row": 0,
    "column": 3,
    "text": "All the honest cats are connected.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     1,
     2,
     4,
     5,
     6,
     7,
     8,
     9,
     10,
     11,
     12,
     13,
     14,
     15
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15
     ],
     "table": "/wC7RN8gi3T/DLtM3y6Lfw8AC0QPIAt0AwwDTAEuAH//ALtEAf6LdP8Mu0wB/4t/DwALRAH+C3QDDANMAP8Af/8Au0TfIIt0/wwD/98ui38PAAtEDyALdAMMAP8BLgB//wC7RAH+i3QD/wP/Af+Lfw8AC0QB/gt0AP8A/wD/AH//ALtE3yCLdP8Mu0zfLot/DwALRAH+AP8DDANMAS4Af/8Au0QB/ot0/wy7TAH/i38PAAtEAP8A/wMMA0wA/wB//wC7RN8gi3T/DAP/3y6Lfw8AAP8B/gD/AwwA/wEuAH//ALtEAf6LdAP/A/8B/4t/AP8A/wD/AP8A/wD/AP8Af/8Au0TfIIt0A/8D/wH/AP8PAAtEDyALdAMMA0wBLgB//wC7RAH+i3QD/wP/AP8A/w8AC0QB/gt0AwwDTAD/AH//ALtE3yCLdAP/AP8B/wD/DwALRA8gC3QDDAD/AS4Af/8Au0QB/ot0AP8A/wD/AP8PAAtEAf4LdAD/AP8A/wB//wC7RAH+AP8D/wP/Af8A/w8AC0QB/gD/AwwDTAEuAH//ALtEAP8A/wP/A/8A/wD/DwALRAD/AP8DDANMAP8Af/8AAP8B/gD/A/8A/wH/AP8PAAD/Af4A/wMMAP8BLgB/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AH//ALtE3yCLdP8Mu0zfLot/DwALRA8gC3QDDANMAS4Af/8Au0QB/ot0/wy7TAH/i38PAAtEAf4LdAMMA0wA/wB//wAA/wH+AP8D/wD/Af8A/w8AAP8B/gD/AP8A/wD/AP//ALtEAf6LdAP/A/8B/4t/DwALRAH+C3QA/wD/AP8Af/8Au0TfIIt0/wy7TN8ui38PAAtEAf4A/wMMA0wBLgB//wC7RAH+i3T/DLtMAf+Lfw8AC0QA/wD/AwwDTAD/AH//AAD/Af4A/wP/AP8B/wD/AP8A/wD/AP8A/wD/AP8A//8Au0QB/ot0A/8D/wH/i38A/wD/AP8A/wD/AP8A/wB//wC7RN8gi3QD/wP/Af8A/w8AC0QPIAt0AwwDTAEuAH//ALtEAf6LdAP/A/8A/wD/DwALRAH+C3QDDANMAP8Af/8AAP8B/gD/AP8A/wD/AP8PAAD/Af4A/wD/AP8A/wD//wC7RAH+i3QA/wD/AP8A/w8AC0QB/gt0AP8A/wD/AH//ALtEAf4A/wP/A/8B/wD/DwALRAH+AP8DDANMAS4Af/8Au0QA/wD/A/8D/wD/AP8PAAtEAP8A/wMMA0wA/wB/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8Af/8Au0TfIIt0/wy7TN8ui38PAAtEDyALdAMMA0wBLgB/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP//AAD/Af4A/wP/AP8B/wD/DwAA/wH+AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD//wC7RAH+AP8D/wP/Af8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A//8AAP8B/gD/A/8A/wH/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP//ALtE3yCLdAP/A/8B/wD/DwALRA8gC3QDDANMAS4AfwD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD//wAA/wH+AP8A/wD/AP8A/w8AAP8B/gD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD//wC7RN8gi3T/DLtM3y6Lfw8AC0QPIAt0AwwDTAEuAH//ALtEAf6LdP8Mu0wB/4t/DwALRAH+C3QDDANMAP8Af/8AAP8B/gD/A/8A/wH/AP8PAAD/Af4A/wD/AP8A/wD//wC7RAH+i3QD/wP/Af+Lfw8AC0QB/gt0AP8A/wD/AH//ALtEAf4A/wP/A/8B/wD/AP8A/wD/AP8A/wD/AP8A//8Au0QA/wD/A/8D/wD/AP8A/wD/AP8A/wD/AP8A/wD//wAA/wH+AP8D/wD/Af8A/wD/AP8A/wD/AP8A/wD/AP//ALtEAf6LdAP/A/8B/4t/AP8A/wD/AP8A/wD/AP8Af/8Au0TfIIt0A/8D/wH/AP8PAAtEDyALdAMMA0wBLgB//wC7RAH+i3QD/wP/AP8A/w8AC0QB/gt0AwwDTAD/AH//AAD/Af4A/wD/AP8A/wD/DwAA/wH+AP8A/wD/AP8A//8Au0QB/ot0AP8A/wD/AP8PAAtEAf4LdAD/AP8A/wB/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AH//ALtE3yCLdP8Mu0zfLot/DwALRA8gC3QDDANMAS4Af/8Au0QB/ot0/wy7TAH/i38PAAtEAf4LdAMMA0wA/wB//wAA/wH+AP8D/wD/Af8A/w8AAP8B/gD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A//8Au0QB/gD/A/8D/wH/AP8A/wD/AP8A/wD/AP8A/wD//wC7RAD/AP8D/wP/AP8A/wD/AP8A/wD/AP8A/wD/AP//AAD/Af4A/wP/AP8B/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A//8Au0TfIIt0/wy7TN8ui38PAAtEDyALdAMMA0wBLgB//wC7RAH+i3T/DLtMAf+Lfw8AC0QB/gt0AwwDTAD/AH8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD//wC7RAH+AP8D/wP/Af8A/wD/AP8A/wD/AP8A/wD/AP//ALtEAP8A/wP/A/8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD//wC7RN8gi3T/DLtM3y6Lfw8AC0QPIAt0AwwDTAEuAH8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A//8AAP8B/gD/A/8A/wH/AP8PAAD/Af4A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP//ALtEAf4A/wP/A/8B/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD//wAA/wH+AP8D/wD/Af8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP//ALtE3yCLdP8Mu0zfLot/DwALRA8gC3QDDANMAS4Af/8Au0QB/ot0/wy7TAH/i38PAAtEAf4LdAMMA0wA/wB//wAA/wH+AP8D/wD/Af8A/w8AAP8B/gD/AP8A/wD/AP//ALtEAf6LdAP/A/8B/4t/DwALRAH+C3QA/wD/AP8Af/8Au0QB/gD/A/8D/wH/AP8A/wD/AP8A/wD/AP8A/wD//wC7RAD/AP8D/wP/AP8A/wD/AP8A/wD/AP8A/wD/AP//AAD/Af4A/wP/AP8B/wD/AP8A/wD/AP8A/wD/AP8A//8Au0QB/ot0A/8D/wH/i38A/wD/AP8A/wD/AP8A/wB/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8Af/8Au0TfIIt0/wy7TN8ui38PAAtEDyALdAMMA0wBLgB//wC7RAH+i3T/DLtMAf+Lfw8AC0QB/gt0AwwDTAD/AH//ALtE3yCLdP8MA//fLot/DwALRA8gC3QDDAD/AS4Af/8Au0QB/ot0A/8D/wH/i38PAAtEAf4LdAD/AP8A/wB//wC7RAH+AP8D/wP/Af8A/wD/AP8A/wD/AP8A/wD/AP//ALtEAP8A/wP/A/8A/wD/AP8A/wD/AP8A/wD/AP8A//8AAP8B/gD/A/8A/wH/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP//ALtE3yCLdAP/A/8B/wD/DwALRA8gC3QDDANMAS4Af/8Au0QB/ot0A/8D/wD/AP8PAAtEAf4LdAMMA0wA/wB//wC7RN8gi3QD/wD/Af8A/w8AC0QPIAt0AwwA/wEuAH//ALtEAf6LdAD/AP8A/wD/DwALRAH+C3QA/wD/AP8Af/8Au0QB/gD/A/8D/wH/AP8PAAtEAf4A/wMMA0wBLgB//wC7RAD/AP8D/wP/AP8A/w8AC0QA/wD/AwwDTAD/AH//AAD/Af4A/wP/AP8B/wD/DwAA/wH+AP8DDAD/AS4AfwD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wB//wC7RN8gi3T/DLtM3y6Lfw8AC0QPIAt0AwwDTAEuAH//ALtEAf6LdP8Mu0wB/4t/DwALRAH+C3QDDANMAP8Af/8AAP8B/gD/A/8A/wH/AP8PAAD/Af4A/wD/AP8A/wD//wC7RAH+i3QD/wP/Af+Lfw8AC0QB/gt0AP8A/wD/AH//ALtEAf4A/wP/A/8B/wD/AP8A/wD/AP8A/wD/AP8A//8Au0QA/wD/A/8D/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A//8Au0TfIIt0A/8D/wH/AP8PAAtEDyALdAMMA0wBLgB//wC7RAH+i3QD/wP/AP8A/w8AC0QB/gt0AwwDTAD/AH//AAD/Af4A/wD/AP8A/wD/DwAA/wH+AP8A/wD/AP8A//8Au0QB/ot0AP8A/wD/AP8PAAtEAf4LdAD/AP8A/wB//wC7RAH+AP8D/wP/Af8A/w8AC0QB/gD/AwwDTAEuAH//ALtEAP8A/wP/A/8A/wD/DwALRAD/AP8DDANMAP8AfwD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AH//ALtE3yCLdP8Mu0zfLot/DwALRA8gC3QDDANMAS4AfwD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD//wAA/wH+AP8D/wD/Af8A/w8AAP8B/gD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD//wC7RN8gi3QD/wP/Af8A/w8AC0QPIAt0AwwDTAEuAH8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A//8AAP8B/gD/AP8A/wD/AP8PAAD/Af4A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A//8Au0TfIIt0/wy7TN8ui38PAAtEDyALdAMMA0wBLgB//wC7RAH+i3T/DLtMAf+Lfw8AC0QB/gt0AwwDTAD/AH//AAD/Af4A/wP/AP8B/wD/DwAA/wH+AP8A/wD/AP8A//8Au0QB/ot0A/8D/wH/i38PAAtEAf4LdAD/AP8A/wB/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP//ALtE3yCLdAP/A/8B/wD/DwALRA8gC3QDDANMAS4Af/8Au0QB/ot0A/8D/wD/AP8PAAtEAf4LdAMMA0wA/wB//wAA/wH+AP8A/wD/AP8A/w8AAP8B/gD/AP8A/wD/AP//ALtEAf6LdAD/AP8A/wD/DwALRAH+C3QA/wD/AP8AfwD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wB//wC7RN8gi3T/DLtM3y6Lfw8AC0QPIAt0AwwDTAEuAH//ALtEAf6LdP8Mu0wB/4t/DwALRAH+C3QDDANMAP8Af/8AAP8B/gD/A/8A/wH/AP8PAAD/Af4A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP//ALtEAf4A/wP/A/8B/wD/AP8A/wD/AP8A/wD/AP8A//8Au0QA/wD/A/8D/wD/AP8A/wD/AP8A/wD/AP8A/wD//wAA/wH+AP8D/wD/Af8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A//8Au0TfIIt0A/8D/wH/AP8PAAtEDyALdAMMA0wBLgB//wC7RAH+i3QD/wP/AP8A/w8AC0QB/gt0AwwDTAD/AH//AAD/Af4A/wD/AP8A/wD/DwAA/wH+AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD//wC7RAH+AP8D/wP/Af8A/w8AC0QB/gD/AwwDTAEuAH//ALtEAP8A/wP/A/8A/wD/DwALRAD/AP8DDANMAP8Af/8AAP8B/gD/A/8A/wH/AP8PAAD/Af4A/wMMAP8BLgB/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AH//ALtE3yCLdP8Mu0zfLot/DwALRA8gC3QDDANMAS4Af/8Au0QB/ot0/wy7TAH/i38PAAtEAf4LdAMMA0wA/wB/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A//8Au0QB/gD/A/8D/wH/AP8A/wD/AP8A/wD/AP8A/wD//wC7RAD/AP8D/wP/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD//wC7RN8gi3QD/wP/Af8A/w8AC0QPIAt0AwwDTAEuAH//ALtEAf6LdAP/A/8A/wD/DwALRAH+C3QDDANMAP8AfwD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP//ALtEAf4A/wP/A/8B/wD/DwALRAH+AP8DDANMAS4Af/8Au0QA/wD/A/8D/wD/AP8PAAtEAP8A/wMMA0wA/wB/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8Af/8Au0TfIIt0/wy7TN8ui38PAAtEDyALdAMMA0wBLgB/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP//AAD/Af4A/wP/AP8B/wD/DwAA/wH+AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD//wC7RAH+AP8D/wP/Af8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A//8AAP8B/gD/A/8A/wH/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP//ALtE3yCLdAP/A/8B/wD/DwALRA8gC3QDDANMAS4AfwD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD//wAA/wH+AP8A/wD/AP8A/w8AAP8B/gD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A//8Au0QB/gD/A/8D/wH/AP8PAAtEAf4A/wMMA0wBLgB/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP//AAD/Af4A/wP/AP8B/wD/DwAA/wH+AP8DDAD/AS4AfwD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wB//wC7RN8gi3T/DLtM3y6Lfw8AC0QPIAt0AwwDTAEuAH//ALtEAf6LdP8Mu0wB/4t/DwALRAH+C3QDDANMAP8Af/8AAP8B/gD/A/8A/wH/AP8PAAD/Af4A/wD/AP8A/wD//wC7RAH+i3QD/wP/Af+Lfw8AC0QB/gt0AP8A/wD/AH//ALtEAf4A/wP/A/8B/wD/AP8A/wD/AP8A/wD/AP8A//8Au0QA/wD/A/8D/wD/AP8A/wD/AP8A/wD/AP8A/wD//wAA/wH+AP8D/wD/Af8A/wD/AP8A/wD/AP8A/wD/AP//ALtEAf6LdAP/A/8B/4t/AP8A/wD/AP8A/wD/AP8Af/8Au0TfIIt0A/8D/wH/AP8PAAtEDyALdAMMA0wBLgB//wC7RAH+i3QD/wP/AP8A/w8AC0QB/gt0AwwDTAD/AH//AAD/Af4A/wD/AP8A/wD/DwAA/wH+AP8A/wD/AP8A//8Au0QB/ot0AP8A/wD/AP8PAAtEAf4LdAD/AP8A/wB//wC7RAH+AP8D/wP/Af8A/w8AC0QB/gD/AwwDTAEuAH//ALtEAP8A/wP/A/8A/wD/DwALRAD/AP8DDANMAP8Af/8AAP8B/gD/A/8A/wH/AP8PAAD/Af4A/wMMAP8BLgB//wC7RAH+i3QD/wP/Af+Lfw8AC0QB/gt0AwwDTAEuCwQ="
    }
   },
   {
    "name": "Ember",
    "color": "white",
    "row": 1,
    "column": 0,
    "text": "There are as many liars among the grey cats as in column 3.",
    "hidden": false,
    "secret": null,
    "mentions": [
     2,
     3,
     6,
     7,
     10,
     11,
     14
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      2,
      3,
      4,
      6,
      7,
      10,
      11,
      14
     ],
     "table": "abTSabTwabTSafDSabTSabTwabTw8LTwabTSabTwabQ="
    }
   },
   {
    "name": "Fudge",
    "color": "brown",
    "row": 1,
    "column": 1,
    "text": "An odd number of Bean, Rusty and me are liars. Mew.",
    "hidden": false,
    "secret": null,
    "mentions": [
     1,
     14
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      1,
      5,
      14
     ],
     "table": "Wg=="
    }
   },
   {
    "name": "Inky",
    "color": "yellow",
    "row": 1,
    "column": 2,
    "text": "Queenie is the only liar among the cats on the edges.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     1,
     2,
     3,
     4,
     7,
     8,
     11,
     12,
     13,
     14,
     15
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      0,
      1,
      2,
      3,
      4,
      6,
      7,
      8,
      11,
      12,
      13,
      14,
      15
     ],
     "table": "AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8BAAAA/v///wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////w=="
    }
   },
   {
    "name": "Jasper",
    "color": "grey",
    "row": 1,
    "column": 3,
    "text": "All the liars in row 3 are connected.",
    "hidden": false,
    "secret": null,
    "mentions": [
     8,
     9,
     10,
     11
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      7,
      8,
      9,
      10,
      11
     ],
     "table": "QFioWQ=="
    }
   },
   {
    "name": "Kettle",
    "color": "brown",
    "row": 2,
    "column": 0,
    "text": "There are as many liars among the grey cats as in my column.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     3,
     4,
     7,
     11,
     12
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      0,
      3,
      4,
      7,
      8,
      11,
      12
     ],
     "table": "SZL7tpIgtm0ESf/7SZL7tg=="
    }
   },
   {
    "name": "Marble",
    "color": "yellow",
    "row": 2,
    "column": 1,
    "text": "Sprout is the only honest cat among the yellow cats.",
    "hidden": false,
    "secret": null,
    "mentions": [
     6,
     13,
     15
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      6,
      9,
      13,
      15
     ],
     "table": "TMw="
    }
   },
   {
    "name": "Noodle",
    "color": "white",
    "row": 2,
    "column": 2,
    "text": "All of the orange cats are liars. Hiss!",
    "hidden": false,
    "secret": null,
    "mentions": [
     1,
     12
    ],
    "mood": "angry",
    "clue": {
     "cats": [
      1,
      10,
      12
     ],
     "table": "bA=="
    }
   },
   {
    "name": "Oreo",
    "color": "grey",
    "row": 2,
    "column": 3,
    "text": "At least one of these is true: Jasper is a liar, or Fudge is honest.",
    "hidden": false,
    "secret": null,
    "mentions": [
     5,
     7
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      5,
      7,
      11
     ],
     "table": "LQ=="
    }
   },
   {
    "name": "Pepper",
    "color": "orange",
    "row": 3,
    "column": 0,
    "text": "Exactly 2 of Queenie's neighbors are liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     9,
     14
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      9,
      12,
      14
     ],
     "table": "pA=="
    }
   },
   {
    "name": "Queenie",
    "color": "yellow",
    "row": 3,
    "column": 1,
    "text": "An odd number of Oreo's neighbors are liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     7,
     10,
     15
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      7,
      10,
      13,
      15
     ],
     "table": "lmk="
    }
   },
   {
    "name": "Rusty",
    "color": "black",
    "row": 3,
    "column": 2,
    "text": "An odd number of the cats in column 1 are liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     4,
     8,
     12
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      0,
      4,
      8,
      12,
      14
     ],
     "table": "lmlplg=="
    }
   },
   {
    "name": "Sprout",
    "color": "yellow",
    "row": 3,
    "column": 3,
    "text": "Oreo is the only honest cat among the cats in row 3.",
    "hidden": false,
    "secret": null,
    "mentions": [
     8,
     9,
     10,
     11
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      8,
      9,
      10,
      11,
      15
     ],
     "table": "gAB//w=="
    }
   }
  ],
  "liars": [
   false,
   false,
   true,
   true,
   true,
   false,
   true,
   false,
   true,
   true,
   true,
   false,
   false,
   false,
   true,
   false
  ]
 },
 {
  "rows": 4,
  "cols": 4,
  "seed": 1030,
  "level": "tricky",
  "given": null,
  "cats": [
   {
    "name": "Biscuit",
    "color": "black",
    "row": 0,
    "column": 0,
    "text": "An odd number of Kettle's neighbors are liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     3,
     6,
     11
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      0,
      3,
      6,
      11
     ],
     "table": "lmk="
    }
   },
   {
    "name": "Cricket",
    "color": "yellow",
    "row": 0,
    "column": 1,
    "text": "Biscuit is pawsitively honest. Mrrp!",
    "hidden": false,
    "secret": null,
    "mentions": [
     0
    ],
    "mood": "happy",
    "clue": {
     "cats": [
      0,
      1
     ],
     "table": "CQ=="
    }
   },
   {
    "name": "Dusty",
    "color": "brown",
    "row": 0,
    "column": 2,
    "text": "All of the cats in row 3 are honest.",
    "hidden": false,
    "secret": null,
    "mentions": [
     8,
     9,
     10,
     11
    ],
    "mood": "happy",
    "clue": {
     "cats": [
      2,
      8,
      9,
      10,
      11
     ],
     "table": "qaqqqg=="
    }
   },
   {
    "name": "Espresso",
    "color": "grey",
    "row": 0,
    "column": 3,
    "text": "Kettle is the only liar among the cats in my column.",
    "hidden": false,
    "secret": null,
    "mentions": [
     7,
     11,
     15
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      3,
      7,
      11,
      15
     ],
     "table": "rqo="
    }
   },
   {
    "name": "Gizmo",
    "color": "black",
    "row": 1,
    "column": 0,
    "text": "There are as many liars among the black cats as in column 3.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     2,
     6,
     10,
     11,
     14
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      0,
      2,
      4,
      6,
      10,
      11,
      14
     ],
     "table": "uWJi0PS5uWJi0NDwuWJi0A=="
    }
   },
   {
    "name": "Inky",
    "color": "white",
    "row": 1,
    "column": 1,
    "text": "All the liars in column 4 are connected.",
    "hidden": false,
    "secret": null,
    "mentions": [
     3,
     7,
     11,
     15
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      3,
      5,
      7,
      11,
      15
     ],
     "table": "IDjIOQ=="
    }
   },
   {
    "name": "Jasper",
    "color": "orange",
    "row": 1,
    "column": 2,
    "text": "Dusty is honest, fur real.",
    "hidden": false,
    "secret": null,
    "mentions": [
     2
    ],
    "mood": "happy",
    "clue": {
     "cats": [
      2,
      6
     ],
     "table": "CQ=="
    }
   },
   {
    "name": "Kettle",
    "color": "orange",
    "row": 1,
    "column": 3,
    "text": "At least one of these is true: Espresso is a liar, or all of the white cats are honest.",
    "hidden": false,
    "secret": null,
    "mentions": [
     3,
     5,
     8,
     12
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      3,
      5,
      7,
      8,
      12
     ],
     "table": "S1paWg=="
    }
   },
   {
    "name": "Loki",
    "color": "white",
    "row": 2,
    "column": 0,
    "text": "Gizmo is the only honest cat among the cats above me.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     4
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      0,
      4,
      8
     ],
     "table": "0g=="
    }
   },
   {
    "name": "Mochi",
    "color": "orange",
    "row": 2,
    "column": 1,
    "text": "There are more liars among Biscuit's neighbors than in column 1.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     1,
     4,
     8,
     12
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      0,
      1,
      4,
      8,
      9,
      12
     ],
     "table": "RAC7/wAA//8="
    }
   },
   {
    "name": "Nimbus",
    "color": "brown",
    "row": 2,
    "column": 2,
    "text": "Among Cricket's neighbors, at least one is honest and at least one is a liar. Mrow.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     2,
     5
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      0,
      2,
      5,
      10
     ],
     "table": "foE="
    }
   },
   {
    "name": "Olive",
    "color": "black",
    "row": 2,
    "column": 3,
    "text": "Mew. All the liars in row 2 are connected.",
    "hidden": false,
    "secret": null,
    "mentions": [
     4,
     5,
     6,
     7
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      4,
      5,
      6,
      7,
      11
     ],
     "table": "yNAgLg=="
    }
   },
   {
    "name": "Queenie",
    "color": "white",
    "row": 3,
    "column": 0,
    "text": "I'm the only liar among the cats in my column.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     4,
     8
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      0,
      4,
      8,
      12
     ],
     "table": "AP4="
    }
   },
   {
    "name": "Rolo",
    "color": "yellow",
    "row": 3,
    "column": 1,
    "text": "Meow. Biscuit and Kettle are opposites: one is honest, the other is a liar.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     7
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      0,
      7,
      13
     ],
     "table": "lg=="
    }
   },
   {
    "name": "Sushi",
    "color": "brown",
    "row": 3,
    "column": 2,
    "text": "There are more honest cats among Espresso's neighbors than among Nimbus's neighbors.",
    "hidden": false,
    "secret": null,
    "mentions": [
     2,
     6,
     7,
     9,
     11
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      2,
      6,
      7,
      9,
      11,
      14
     ],
     "table": "AAAABP/7+7I="
    }
   },
   {
    "name": "Tater",
    "color": "grey",
    "row": 3,
    "column": 3,
    "text": "Exactly one of the cats in column 3 is a liar.",
    "hidden": false,
    "secret": null,
    "mentions": [
     2,
     6,
     10,
     14
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      2,
      6,
      10,
      14,
      15
     ],
     "table": "FgHp/g=="
    }
   }
  ],
  "liars": [
   true,
   true,
   true,
   true,
   true,
   true,
   true,
   false,
   true,
   true,
   true,
   false,
   true,
   false,
   true,
   true
  ]
 },
 {
  "rows": 4,
  "cols": 4,
  "seed": 1031,
  "level": "tricky",
  "given": null,
  "cats": [
   {
    "name": "Ash",
    "color": "grey",
    "row": 0,
    "column": 0,
    "text": "At least one of these is true: Noodle is honest, or all of the orange cats are liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     3,
     5,
     11,
     14
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      0,
      3,
      5,
      11,
      14
     ],
     "table": "VapVag=="
    }
   },
   {
    "name": "Bagel",
    "color": "white",
    "row": 0,
    "column": 1,
    "text": "An odd number of Coco's neighbors are liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     3,
     6
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      1,
      3,
      6
     ],
     "table": "PA=="
    }
   },
   {
    "name": "Coco",
    "color": "black",
    "row": 0,
    "column": 2,
    "text": "There are more liars among Mochi's neighbors than among my neighbors.",
    "hidden": false,
    "secret": null,
    "mentions": [
     1,
     3,
     6,
     9,
     11,
     14
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      1,
      2,
      3,
      6,
      9,
      11,
      14
     ],
     "table": "zMzJycnJk5PJyZOTk5MzMw=="
    }
   },
   {
    "name": "Ember",
    "color": "orange",
    "row": 0,
    "column": 3,
    "text": "An odd number of the cats in row 4 are liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     12,
     13,
     14,
     15
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      3,
      12,
      13,
      14,
      15
     ],
     "table": "lmlplg=="
    }
   },
   {
    "name": "Fudge",
    "color": "black",
    "row": 1,
    "column": 0,
    "text": "Meow. Oreo is the only liar among the cats below me.",
    "hidden": false,
    "secret": null,
    "mentions": [
     8,
     12
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      4,
      8,
      12
     ],
     "table": "mg=="
    }
   },
   {
    "name": "Gnocchi",
    "color": "orange",
    "row": 1,
    "column": 1,
    "text": "At least one of Jasper and Luna is honest. Mew.",
    "hidden": false,
    "secret": null,
    "mentions": [
     7,
     9
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      5,
      7,
      9
     ],
     "table": "lQ=="
    }
   },
   {
    "name": "Iggy",
    "color": "brown",
    "row": 1,
    "column": 2,
    "text": "All of the cats to my left are liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     4,
     5
    ],
    "mood": "angry",
    "clue": {
     "cats": [
      4,
      5,
      6
     ],
     "table": "eA=="
    }
   },
   {
    "name": "Jasper",
    "color": "grey",
    "row": 1,
    "column": 3,
    "text": "Mrow. There are more honest cats in row 1 than among Gnocchi's neighbors.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     1,
     2,
     3,
     4,
     6,
     9
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      0,
      1,
      2,
      3,
      4,
      6,
      7,
      9
     ],
     "table": "AAAFAAUAXwX///r/+v+g+gUAXwVfBf9f+v+g+qD6AKA="
    }
   },
   {
    "name": "Kiwi",
    "color": "black",
    "row": 2,
    "column": 0,
    "text": "All of the cats in my row are the same: all honest, or all liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     9,
     10,
     11
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      8,
      9,
      10,
      11
     ],
     "table": "qyo="
    }
   },
   {
    "name": "Luna",
    "color": "yellow",
    "row": 2,
    "column": 1,
    "text": "I smell a rat. At least one of Mochi's neighbors is a liar.",
    "hidden": false,
    "secret": null,
    "mentions": [
     6,
     11,
     14
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      6,
      9,
      11,
      14
     ],
     "table": "MjM="
    }
   },
   {
    "name": "Mochi",
    "color": "yellow",
    "row": 2,
    "column": 2,
    "text": "All of the cats in column 1 are liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     4,
     8,
     12
    ],
    "mood": "angry",
    "clue": {
     "cats": [
      0,
      4,
      8,
      10,
      12
     ],
     "table": "AP+Afw=="
    }
   },
   {
    "name": "Noodle",
    "color": "orange",
    "row": 2,
    "column": 3,
    "text": "Among Mochi's neighbors, at least one is honest and at least one is a liar.",
    "hidden": false,
    "secret": null,
    "mentions": [
     6,
     9,
     14
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      6,
      9,
      11,
      14
     ],
     "table": "Do8="
    }
   },
   {
    "name": "Oreo",
    "color": "brown",
    "row": 3,
    "column": 0,
    "text": "An odd number of the cats in row 2 are liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     4,
     5,
     6,
     7
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      4,
      5,
      6,
      7,
      12
     ],
     "table": "lmlplg=="
    }
   },
   {
    "name": "Pickles",
    "color": "white",
    "row": 3,
    "column": 1,
    "text": "Grrr. Ember and Jasper are both liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     3,
     7
    ],
    "mood": "angry",
    "clue": {
     "cats": [
      3,
      7,
      13
     ],
     "table": "eA=="
    }
   },
   {
    "name": "Quill",
    "color": "orange",
    "row": 3,
    "column": 2,
    "text": "Noodle is honest, but Pickles is a liar.",
    "hidden": false,
    "secret": null,
    "mentions": [
     11,
     13
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      11,
      13,
      14
     ],
     "table": "tA=="
    }
   },
   {
    "name": "Ravioli",
    "color": "grey",
    "row": 3,
    "column": 3,
    "text": "Meow. There are exactly 8 liars in total.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     1,
     2,
     3,
     4,
     5,
     6,
     7,
     8,
     9,
     10,
     11,
     12,
     13,
     14
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15
     ],
     "table": "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAIAAAACAAICAaAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAgAAAAIAAgIBoAAAAAAAAAIAAAACAAICAaAAAAIAAgIBoAICAaIBoaBYAAAAAAAAAAAAAAAAAAACAAAAAAAAAAIAAAACAAICAaAAAAAAAAACAAAAAgACAgGgAAACAAICAaACAgGiAaGgWAAAAAAAAAIAAAACAAICAaAAAAIAAgIBoAICAaIBoaBYAAACAAICAaACAgGiAaGgWAICAaIBoaBaAaGgWaBYWAQAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAgAAAAIAAgIBoAAAAAAAAAIAAAACAAICAaAAAAIAAgIBoAICAaIBoaBYAAAAAAAAAgAAAAIAAgIBoAAAAgACAgGgAgIBogGhoFgAAAIAAgIBoAICAaIBoaBYAgIBogGhoFoBoaBZoFhYBAAAAAAAAAIAAAACAAICAaAAAAIAAgIBoAICAaIBoaBYAAACAAICAaACAgGiAaGgWAICAaIBoaBaAaGgWaBYWAQAAAIAAgIBoAICAaIBoaBYAgIBogGhoFoBoaBZoFhYBAICAaIBoaBaAaGgWaBYWAYBoaBZoFhYBaBYWARYBAQAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAIAAAACAAICAaAAAAAAAAACAAAAAgACAgGgAAACAAICAaACAgGiAaGgWAAAAAAAAAIAAAACAAICAaAAAAIAAgIBoAICAaIBoaBYAAACAAICAaACAgGiAaGgWAICAaIBoaBaAaGgWaBYWAQAAAAAAAACAAAAAgACAgGgAAACAAICAaACAgGiAaGgWAAAAgACAgGgAgIBogGhoFgCAgGiAaGgWgGhoFmgWFgEAAACAAICAaACAgGiAaGgWAICAaIBoaBaAaGgWaBYWAQCAgGiAaGgWgGhoFmgWFgGAaGgWaBYWAWgWFgEWAQEAAAAAAAAAAIAAAACAAICAaAAAAIAAgIBoAICAaIBoaBYAAACAAICAaACAgGiAaGgWAICAaIBoaBaAaGgWaBYWAQAAAIAAgIBoAICAaIBoaBYAgIBogGhoFoBoaBZoFhYBAICAaIBoaBaAaGgWaBYWAYBoaBZoFhYBaBYWARYBAQAAAACAAICAaACAgGiAaGgWAICAaIBoaBaAaGgWaBYWAQCAgGiAaGgWgGhoFmgWFgGAaGgWaBYWAWgWFgEWAQEAAICAaIBoaBaAaGgWaBYWAYBoaBZoFhYBaBYWARYBAQCAaGgWaBYWAWgWFgEWAQEAaBYWARYBAQAWAQEAAQAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAgAAAAIAAgIBoAAAAAAAAAIAAAACAAICAaAAAAIAAgIBoAICAaIBoaBYAAAAAAAAAgAAAAIAAgIBoAAAAgACAgGgAgIBogGhoFgAAAIAAgIBoAICAaIBoaBYAgIBogGhoFoBoaBZoFhYBAAAAAAAAAIAAAACAAICAaAAAAIAAgIBoAICAaIBoaBYAAACAAICAaACAgGiAaGgWAICAaIBoaBaAaGgWaBYWAQAAAIAAgIBoAICAaIBoaBYAgIBogGhoFoBoaBZoFhYBAICAaIBoaBaAaGgWaBYWAYBoaBZoFhYBaBYWARYBAQAAAAAAAAAAgAAAAIAAgIBoAAAAgACAgGgAgIBogGhoFgAAAIAAgIBoAICAaIBoaBYAgIBogGhoFoBoaBZoFhYBAAAAgACAgGgAgIBogGhoFgCAgGiAaGgWgGhoFmgWFgEAgIBogGhoFoBoaBZoFhYBgGhoFmgWFgFoFhYBFgEBAAAAAIAAgIBoAICAaIBoaBYAgIBogGhoFoBoaBZoFhYBAICAaIBoaBaAaGgWaBYWAYBoaBZoFhYBaBYWARYBAQAAgIBogGhoFoBoaBZoFhYBgGhoFmgWFgFoFhYBFgEBAIBoaBZoFhYBaBYWARYBAQBoFhYBFgEBABYBAQABAAAAAAAAAAAAAIAAAACAAICAaAAAAIAAgIBoAICAaIBoaBYAAACAAICAaACAgGiAaGgWAICAaIBoaBaAaGgWaBYWAQAAAIAAgIBoAICAaIBoaBYAgIBogGhoFoBoaBZoFhYBAICAaIBoaBaAaGgWaBYWAYBoaBZoFhYBaBYWARYBAQAAAACAAICAaACAgGiAaGgWAICAaIBoaBaAaGgWaBYWAQCAgGiAaGgWgGhoFmgWFgGAaGgWaBYWAWgWFgEWAQEAAICAaIBoaBaAaGgWaBYWAYBoaBZoFhYBaBYWARYBAQCAaGgWaBYWAWgWFgEWAQEAaBYWARYBAQAWAQEAAQAAAAAAAIAAgIBoAICAaIBoaBYAgIBogGhoFoBoaBZoFhYBAICAaIBoaBaAaGgWaBYWAYBoaBZoFhYBaBYWARYBAQAAgIBogGhoFoBoaBZoFhYBgGhoFmgWFgFoFhYBFgEBAIBoaBZoFhYBaBYWARYBAQBoFhYBFgEBABYBAQABAAAAAICAaIBoaBaAaGgWaBYWAYBoaBZoFhYBaBYWARYBAQCAaGgWaBYWAWgWFgEWAQEAaBYWARYBAQAWAQEAAQAAAIBoaBZoFhYBaBYWARYBAQBoFhYBFgEBABYBAQABAAAAaBYWARYBAQAWAQEAAQAAABYBAQABAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAIAAAACAAICAaAAAAAAAAACAAAAAgACAgGgAAACAAICAaACAgGiAaGgWAAAAAAAAAIAAAACAAICAaAAAAIAAgIBoAICAaIBoaBYAAACAAICAaACAgGiAaGgWAICAaIBoaBaAaGgWaBYWAQAAAAAAAACAAAAAgACAgGgAAACAAICAaACAgGiAaGgWAAAAgACAgGgAgIBogGhoFgCAgGiAaGgWgGhoFmgWFgEAAACAAICAaACAgGiAaGgWAICAaIBoaBaAaGgWaBYWAQCAgGiAaGgWgGhoFmgWFgGAaGgWaBYWAWgWFgEWAQEAAAAAAAAAAIAAAACAAICAaAAAAIAAgIBoAICAaIBoaBYAAACAAICAaACAgGiAaGgWAICAaIBoaBaAaGgWaBYWAQAAAIAAgIBoAICAaIBoaBYAgIBogGhoFoBoaBZoFhYBAICAaIBoaBaAaGgWaBYWAYBoaBZoFhYBaBYWARYBAQAAAACAAICAaACAgGiAaGgWAICAaIBoaBaAaGgWaBYWAQCAgGiAaGgWgGhoFmgWFgGAaGgWaBYWAWgWFgEWAQEAAICAaIBoaBaAaGgWaBYWAYBoaBZoFhYBaBYWARYBAQCAaGgWaBYWAWgWFgEWAQEAaBYWARYBAQAWAQEAAQAAAAAAAAAAAACAAAAAgACAgGgAAACAAICAaACAgGiAaGgWAAAAgACAgGgAgIBogGhoFgCAgGiAaGgWgGhoFmgWFgEAAACAAICAaACAgGiAaGgWAICAaIBoaBaAaGgWaBYWAQCAgGiAaGgWgGhoFmgWFgGAaGgWaBYWAWgWFgEWAQEAAAAAgACAgGgAgIBogGhoFgCAgGiAaGgWgGhoFmgWFgEAgIBogGhoFoBoaBZoFhYBgGhoFmgWFgFoFhYBFgEBAACAgGiAaGgWgGhoFmgWFgGAaGgWaBYWAWgWFgEWAQEAgGhoFmgWFgFoFhYBFgEBAGgWFgEWAQEAFgEBAAEAAAAAAACAAICAaACAgGiAaGgWAICAaIBoaBaAaGgWaBYWAQCAgGiAaGgWgGhoFmgWFgGAaGgWaBYWAWgWFgEWAQEAAICAaIBoaBaAaGgWaBYWAYBoaBZoFhYBaBYWARYBAQCAaGgWaBYWAWgWFgEWAQEAaBYWARYBAQAWAQEAAQAAAACAgGiAaGgWgGhoFmgWFgGAaGgWaBYWAWgWFgEWAQEAgGhoFmgWFgFoFhYBFgEBAGgWFgEWAQEAFgEBAAEAAACAaGgWaBYWAWgWFgEWAQEAaBYWARYBAQAWAQEAAQAAAGgWFgEWAQEAFgEBAAEAAAAWAQEAAQAAAAEAAAAAAAAAAAAAAAAAAIAAAACAAICAaAAAAIAAgIBoAICAaIBoaBYAAACAAICAaACAgGiAaGgWAICAaIBoaBaAaGgWaBYWAQAAAIAAgIBoAICAaIBoaBYAgIBogGhoFoBoaBZoFhYBAICAaIBoaBaAaGgWaBYWAYBoaBZoFhYBaBYWARYBAQAAAACAAICAaACAgGiAaGgWAICAaIBoaBaAaGgWaBYWAQCAgGiAaGgWgGhoFmgWFgGAaGgWaBYWAWgWFgEWAQEAAICAaIBoaBaAaGgWaBYWAYBoaBZoFhYBaBYWARYBAQCAaGgWaBYWAWgWFgEWAQEAaBYWARYBAQAWAQEAAQAAAAAAAIAAgIBoAICAaIBoaBYAgIBogGhoFoBoaBZoFhYBAICAaIBoaBaAaGgWaBYWAYBoaBZoFhYBaBYWARYBAQAAgIBogGhoFoBoaBZoFhYBgGhoFmgWFgFoFhYBFgEBAIBoaBZoFhYBaBYWARYBAQBoFhYBFgEBABYBAQABAAAAAICAaIBoaBaAaGgWaBYWAYBoaBZoFhYBaBYWARYBAQCAaGgWaBYWAWgWFgEWAQEAaBYWARYBAQAWAQEAAQAAAIBoaBZoFhYBaBYWARYBAQBoFhYBFgEBABYBAQABAAAAaBYWARYBAQAWAQEAAQAAABYBAQABAAAAAQAAAAAAAAAAAACAAICAaACAgGiAaGgWAICAaIBoaBaAaGgWaBYWAQCAgGiAaGgWgGhoFmgWFgGAaGgWaBYWAWgWFgEWAQEAAICAaIBoaBaAaGgWaBYWAYBoaBZoFhYBaBYWARYBAQCAaGgWaBYWAWgWFgEWAQEAaBYWARYBAQAWAQEAAQAAAACAgGiAaGgWgGhoFmgWFgGAaGgWaBYWAWgWFgEWAQEAgGhoFmgWFgFoFhYBFgEBAGgWFgEWAQEAFgEBAAEAAACAaGgWaBYWAWgWFgEWAQEAaBYWARYBAQAWAQEAAQAAAGgWFgEWAQEAFgEBAAEAAAAWAQEAAQAAAAEAAAAAAAAAAICAaIBoaBaAaGgWaBYWAYBoaBZoFhYBaBYWARYBAQCAaGgWaBYWAWgWFgEWAQEAaBYWARYBAQAWAQEAAQAAAIBoaBZoFhYBaBYWARYBAQBoFhYBFgEBABYBAQABAAAAaBYWARYBAQAWAQEAAQAAABYBAQABAAAAAQAAAAAAAACAaGgWaBYWAWgWFgEWAQEAaBYWARYBAQAWAQEAAQAAAGgWFgEWAQEAFgEBAAEAAAAWAQEAAQAAAAEAAAAAAAAAaBYWARYBAQAWAQEAAQAAABYBAQABAAAAAQAAAAAAAAAWAQEAAQAAAAEAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAP///////////////////3//////////f////3//f3+X/////////3////9//39/l////3//f3+X/39/l3+Xl+n/////////f////3//f3+X////f/9/f5f/f3+Xf5eX6f///3//f3+X/39/l3+Xl+n/f3+Xf5eX6X+Xl+mX6en+/////////3////9//39/l////3//f3+X/39/l3+Xl+n///9//39/l/9/f5d/l5fp/39/l3+Xl+l/l5fpl+np/v///3//f3+X/39/l3+Xl+n/f3+Xf5eX6X+Xl+mX6en+/39/l3+Xl+l/l5fpl+np/n+Xl+mX6en+l+np/un+/v//////////f////3//f3+X////f/9/f5f/f3+Xf5eX6f///3//f3+X/39/l3+Xl+n/f3+Xf5eX6X+Xl+mX6en+////f/9/f5f/f3+Xf5eX6f9/f5d/l5fpf5eX6Zfp6f7/f3+Xf5eX6X+Xl+mX6en+f5eX6Zfp6f6X6en+6f7+/////3//f3+X/39/l3+Xl+n/f3+Xf5eX6X+Xl+mX6en+/39/l3+Xl+l/l5fpl+np/n+Xl+mX6en+l+np/un+/v//f3+Xf5eX6X+Xl+mX6en+f5eX6Zfp6f6X6en+6f7+/3+Xl+mX6en+l+np/un+/v+X6en+6f7+/+n+/v/+/////////////3////9//39/l////3//f3+X/39/l3+Xl+n///9//39/l/9/f5d/l5fp/39/l3+Xl+l/l5fpl+np/v///3//f3+X/39/l3+Xl+n/f3+Xf5eX6X+Xl+mX6en+/39/l3+Xl+l/l5fpl+np/n+Xl+mX6en+l+np/un+/v////9//39/l/9/f5d/l5fp/39/l3+Xl+l/l5fpl+np/v9/f5d/l5fpf5eX6Zfp6f5/l5fpl+np/pfp6f7p/v7//39/l3+Xl+l/l5fpl+np/n+Xl+mX6en+l+np/un+/v9/l5fpl+np/pfp6f7p/v7/l+np/un+/v/p/v7//v///////3//f3+X/39/l3+Xl+n/f3+Xf5eX6X+Xl+mX6en+/39/l3+Xl+l/l5fpl+np/n+Xl+mX6en+l+np/un+/v//f3+Xf5eX6X+Xl+mX6en+f5eX6Zfp6f6X6en+6f7+/3+Xl+mX6en+l+np/un+/v+X6en+6f7+/+n+/v/+/////39/l3+Xl+l/l5fpl+np/n+Xl+mX6en+l+np/un+/v9/l5fpl+np/pfp6f7p/v7/l+np/un+/v/p/v7//v///3+Xl+mX6en+l+np/un+/v+X6en+6f7+/+n+/v/+////l+np/un+/v/p/v7//v///+n+/v/+/////v//////////////////f////3//f3+X////f/9/f5f/f3+Xf5eX6f///3//f3+X/39/l3+Xl+n/f3+Xf5eX6X+Xl+mX6en+////f/9/f5f/f3+Xf5eX6f9/f5d/l5fpf5eX6Zfp6f7/f3+Xf5eX6X+Xl+mX6en+f5eX6Zfp6f6X6en+6f7+/////3//f3+X/39/l3+Xl+n/f3+Xf5eX6X+Xl+mX6en+/39/l3+Xl+l/l5fpl+np/n+Xl+mX6en+l+np/un+/v//f3+Xf5eX6X+Xl+mX6en+f5eX6Zfp6f6X6en+6f7+/3+Xl+mX6en+l+np/un+/v+X6en+6f7+/+n+/v/+////////f/9/f5f/f3+Xf5eX6f9/f5d/l5fpf5eX6Zfp6f7/f3+Xf5eX6X+Xl+mX6en+f5eX6Zfp6f6X6en+6f7+//9/f5d/l5fpf5eX6Zfp6f5/l5fpl+np/pfp6f7p/v7/f5eX6Zfp6f6X6en+6f7+/5fp6f7p/v7/6f7+//7/////f3+Xf5eX6X+Xl+mX6en+f5eX6Zfp6f6X6en+6f7+/3+Xl+mX6en+l+np/un+/v+X6en+6f7+/+n+/v/+////f5eX6Zfp6f6X6en+6f7+/5fp6f7p/v7/6f7+//7///+X6en+6f7+/+n+/v/+////6f7+//7////+/////////////3//f3+X/39/l3+Xl+n/f3+Xf5eX6X+Xl+mX6en+/39/l3+Xl+l/l5fpl+np/n+Xl+mX6en+l+np/un+/v//f3+Xf5eX6X+Xl+mX6en+f5eX6Zfp6f6X6en+6f7+/3+Xl+mX6en+l+np/un+/v+X6en+6f7+/+n+/v/+/////39/l3+Xl+l/l5fpl+np/n+Xl+mX6en+l+np/un+/v9/l5fpl+np/pfp6f7p/v7/l+np/un+/v/p/v7//v///3+Xl+mX6en+l+np/un+/v+X6en+6f7+/+n+/v/+////l+np/un+/v/p/v7//v///+n+/v/+/////v//////////f3+Xf5eX6X+Xl+mX6en+f5eX6Zfp6f6X6en+6f7+/3+Xl+mX6en+l+np/un+/v+X6en+6f7+/+n+/v/+////f5eX6Zfp6f6X6en+6f7+/5fp6f7p/v7/6f7+//7///+X6en+6f7+/+n+/v/+////6f7+//7////+/////////3+Xl+mX6en+l+np/un+/v+X6en+6f7+/+n+/v/+////l+np/un+/v/p/v7//v///+n+/v/+/////v////////+X6en+6f7+/+n+/v/+////6f7+//7////+/////////+n+/v/+/////v/////////+/////////////////////////////3////9//39/l////3//f3+X/39/l3+Xl+n///9//39/l/9/f5d/l5fp/39/l3+Xl+l/l5fpl+np/v///3//f3+X/39/l3+Xl+n/f3+Xf5eX6X+Xl+mX6en+/39/l3+Xl+l/l5fpl+np/n+Xl+mX6en+l+np/un+/v////9//39/l/9/f5d/l5fp/39/l3+Xl+l/l5fpl+np/v9/f5d/l5fpf5eX6Zfp6f5/l5fpl+np/pfp6f7p/v7//39/l3+Xl+l/l5fpl+np/n+Xl+mX6en+l+np/un+/v9/l5fpl+np/pfp6f7p/v7/l+np/un+/v/p/v7//v///////3//f3+X/39/l3+Xl+n/f3+Xf5eX6X+Xl+mX6en+/39/l3+Xl+l/l5fpl+np/n+Xl+mX6en+l+np/un+/v//f3+Xf5eX6X+Xl+mX6en+f5eX6Zfp6f6X6en+6f7+/3+Xl+mX6en+l+np/un+/v+X6en+6f7+/+n+/v/+/////39/l3+Xl+l/l5fpl+np/n+Xl+mX6en+l+np/un+/v9/l5fpl+np/pfp6f7p/v7/l+np/un+/v/p/v7//v///3+Xl+mX6en+l+np/un+/v+X6en+6f7+/+n+/v/+////l+np/un+/v/p/v7//v///+n+/v/+/////v////////////9//39/l/9/f5d/l5fp/39/l3+Xl+l/l5fpl+np/v9/f5d/l5fpf5eX6Zfp6f5/l5fpl+np/pfp6f7p/v7//39/l3+Xl+l/l5fpl+np/n+Xl+mX6en+l+np/un+/v9/l5fpl+np/pfp6f7p/v7/l+np/un+/v/p/v7//v////9/f5d/l5fpf5eX6Zfp6f5/l5fpl+np/pfp6f7p/v7/f5eX6Zfp6f6X6en+6f7+/5fp6f7p/v7/6f7+//7///9/l5fpl+np/pfp6f7p/v7/l+np/un+/v/p/v7//v///5fp6f7p/v7/6f7+//7////p/v7//v////7//////////39/l3+Xl+l/l5fpl+np/n+Xl+mX6en+l+np/un+/v9/l5fpl+np/pfp6f7p/v7/l+np/un+/v/p/v7//v///3+Xl+mX6en+l+np/un+/v+X6en+6f7+/+n+/v/+////l+np/un+/v/p/v7//v///+n+/v/+/////v////////9/l5fpl+np/pfp6f7p/v7/l+np/un+/v/p/v7//v///5fp6f7p/v7/6f7+//7////p/v7//v////7/////////l+np/un+/v/p/v7//v///+n+/v/+/////v/////////p/v7//v////7//////////v///////////////////////3//f3+X/39/l3+Xl+n/f3+Xf5eX6X+Xl+mX6en+/39/l3+Xl+l/l5fpl+np/n+Xl+mX6en+l+np/un+/v//f3+Xf5eX6X+Xl+mX6en+f5eX6Zfp6f6X6en+6f7+/3+Xl+mX6en+l+np/un+/v+X6en+6f7+/+n+/v/+/////39/l3+Xl+l/l5fpl+np/n+Xl+mX6en+l+np/un+/v9/l5fpl+np/pfp6f7p/v7/l+np/un+/v/p/v7//v///3+Xl+mX6en+l+np/un+/v+X6en+6f7+/+n+/v/+////l+np/un+/v/p/v7//v///+n+/v/+/////v//////////f3+Xf5eX6X+Xl+mX6en+f5eX6Zfp6f6X6en+6f7+/3+Xl+mX6en+l+np/un+/v+X6en+6f7+/+n+/v/+////f5eX6Zfp6f6X6en+6f7+/5fp6f7p/v7/6f7+//7///+X6en+6f7+/+n+/v/+////6f7+//7////+/////////3+Xl+mX6en+l+np/un+/v+X6en+6f7+/+n+/v/+////l+np/un+/v/p/v7//v///+n+/v/+/////v////////+X6en+6f7+/+n+/v/+////6f7+//7////+/////////+n+/v/+/////v/////////+/////////////////////39/l3+Xl+l/l5fpl+np/n+Xl+mX6en+l+np/un+/v9/l5fpl+np/pfp6f7p/v7/l+np/un+/v/p/v7//v///3+Xl+mX6en+l+np/un+/v+X6en+6f7+/+n+/v/+////l+np/un+/v/p/v7//v///+n+/v/+/////v////////9/l5fpl+np/pfp6f7p/v7/l+np/un+/v/p/v7//v///5fp6f7p/v7/6f7+//7////p/v7//v////7/////////l+np/un+/v/p/v7//v///+n+/v/+/////v/////////p/v7//v////7//////////v///////////////////3+Xl+mX6en+l+np/un+/v+X6en+6f7+/+n+/v/+////l+np/un+/v/p/v7//v///+n+/v/+/////v////////+X6en+6f7+/+n+/v/+////6f7+//7////+/////////+n+/v/+/////v/////////+////////////////////l+np/un+/v/p/v7//v///+n+/v/+/////v/////////p/v7//v////7//////////v///////////////////+n+/v/+/////v/////////+/////////////////////v////////////////////////////////////////8="
    }
   }
  ],
  "liars": [
   false,
   true,
   true,
   false,
   true,
   false,
   true,
   false,
   true,
   false,
   true,
   false,
   true,
   true,
   false,
   true
  ]
 }
];
