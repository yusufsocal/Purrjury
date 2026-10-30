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
    "text": "At least 2 of Goose's neighbors are liars.",
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
      0,
      2,
      4,
      8
     ],
     "table": "alY="
    }
   },
   {
    "name": "Clover",
    "color": "black",
    "row": 0,
    "column": 1,
    "text": "There are as many liars among Kettle's neighbors as among Hazel's neighbors.",
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
    "text": "All the honest cats are connected. Meow.",
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
     "table": "D0svewNDIXAPS/F7A0PwcA/w8fDw8PDwD0vxe/Dw8PAPS/HwA0MhcA9L8PADQ/DwD/Dx8APwIfAPS/H7A8Oh4w=="
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
    "text": "All of the cats to my left are the same: all honest, or all liars. Mew.",
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
    "text": "I'm the only honest cat among Jasper's neighbors. Meow.",
    "hidden": false,
    "secret": null,
    "mentions": [
     4,
     8
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      4,
      6,
      8
     ],
     "table": "7A=="
    }
   },
   {
    "name": "Jasper",
    "color": "black",
    "row": 2,
    "column": 1,
    "text": "Mew. An odd number of the cats in my row are liars.",
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
    "text": "All the liars in column 2 are connected.",
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
      0,
      1,
      4,
      7
     ],
     "table": "alo="
    }
   },
   {
    "name": "Coco",
    "color": "brown",
    "row": 0,
    "column": 1,
    "text": "An odd number of the yellow cats are liars.",
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
      1,
      4,
      8
     ],
     "table": "lmk="
    }
   },
   {
    "name": "Dumpling",
    "color": "orange",
    "row": 0,
    "column": 2,
    "text": "Grrr. All of the cats to my left are liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     1
    ],
    "mood": "angry",
    "clue": {
     "cats": [
      0,
      1,
      2
     ],
     "table": "eA=="
    }
   },
   {
    "name": "Felix",
    "color": "orange",
    "row": 1,
    "column": 0,
    "text": "At least one of these is true: Kiwi is a liar, or all of the cats in row 3 are liars.",
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
    "text": "Mew. I'm honest, but Dumpling is a liar.",
    "hidden": false,
    "secret": null,
    "mentions": [
     2
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      2,
      4
     ],
     "table": "Dg=="
    }
   },
   {
    "name": "Indigo",
    "color": "brown",
    "row": 1,
    "column": 2,
    "text": "An odd number of Felix, Loki and me are liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     3,
     8
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      3,
      5,
      8
     ],
     "table": "Wg=="
    }
   },
   {
    "name": "Juniper",
    "color": "brown",
    "row": 2,
    "column": 0,
    "text": "Among the cats above me, at least one is honest and at least one is a liar.",
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
     "table": "lg=="
    }
   },
   {
    "name": "Kiwi",
    "color": "brown",
    "row": 2,
    "column": 1,
    "text": "Indigo and I are both honest.",
    "hidden": false,
    "secret": null,
    "mentions": [
     5
    ],
    "mood": "happy",
    "clue": {
     "cats": [
      5,
      7
     ],
     "table": "DQ=="
    }
   },
   {
    "name": "Loki",
    "color": "yellow",
    "row": 2,
    "column": 2,
    "text": "Meow. All the honest cats in column 2 are connected.",
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
      7,
      8
     ],
     "table": "E+w="
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
    "text": "Among the cats below me, at least one is honest and at least one is a liar.",
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
     "table": "lg=="
    }
   },
   {
    "name": "Bagel",
    "color": "yellow",
    "row": 0,
    "column": 1,
    "text": "Fudge and Indigo are both honest, or both liars.",
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
    "text": "There are as many liars among Ember's neighbors as among the brown cats.",
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
    "text": "All the liars in column 2 are connected.",
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
      6,
      7
     ],
     "table": "eDw="
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
    "text": "Ember is the only liar among Dusty, Ember and me. Meow.",
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
  "given": 2,
  "cats": [
   {
    "name": "Ash",
    "color": "yellow",
    "row": 0,
    "column": 0,
    "text": "Coco and Ember are both liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     2,
     3
    ],
    "mood": "angry",
    "clue": {
     "cats": [
      0,
      2,
      3
     ],
     "table": "ag=="
    }
   },
   {
    "name": "Bagel",
    "color": "grey",
    "row": 0,
    "column": 1,
    "text": "All the honest cats in row 3 are connected. Mew.",
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
     "table": "pak="
    }
   },
   {
    "name": "Coco",
    "color": "grey",
    "row": 0,
    "column": 2,
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
      2,
      3,
      4,
      5
     ],
     "table": "pak="
    }
   },
   {
    "name": "Ember",
    "color": "yellow",
    "row": 1,
    "column": 0,
    "text": "Grrr. All of the cats on the edges are liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     1,
     2,
     5,
     6,
     7,
     8
    ],
    "mood": "angry",
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
     "table": "AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AH8="
    }
   },
   {
    "name": "Gizmo",
    "color": "yellow",
    "row": 1,
    "column": 1,
    "text": "Mew. An odd number of Ash's neighbors are liars.",
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
      4
     ],
     "table": "lg=="
    }
   },
   {
    "name": "Indigo",
    "color": "orange",
    "row": 1,
    "column": 2,
    "text": "Exactly 2 of the cats in my column are liars. Mew.",
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
     "table": "pA=="
    }
   },
   {
    "name": "Jasper",
    "color": "grey",
    "row": 2,
    "column": 0,
    "text": "At least one of Kismet and me is honest.",
    "hidden": false,
    "secret": null,
    "mentions": [
     7
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      6,
      7
     ],
     "table": "DQ=="
    }
   },
   {
    "name": "Kismet",
    "color": "orange",
    "row": 2,
    "column": 1,
    "text": "At least one of these is true: Coco is a liar, or all of my neighbors are honest. Mrow.",
    "hidden": false,
    "secret": null,
    "mentions": [
     2,
     4,
     6,
     8
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      2,
      4,
      6,
      7,
      8
     ],
     "table": "q1SqVQ=="
    }
   },
   {
    "name": "Luna",
    "color": "yellow",
    "row": 2,
    "column": 2,
    "text": "Mrow. All of my neighbors are the same: all honest, or all liars.",
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
     "table": "aQ=="
    }
   }
  ],
  "liars": [
   false,
   false,
   true,
   true,
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
  "seed": 1005,
  "level": "easy",
  "given": 8,
  "cats": [
   {
    "name": "Angus",
    "color": "black",
    "row": 0,
    "column": 0,
    "text": "An odd number of Jasper, Kismet and me are liars.",
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
     "table": "PA=="
    }
   },
   {
    "name": "Clover",
    "color": "grey",
    "row": 0,
    "column": 1,
    "text": "Fig is the only honest cat among the cats in column 1.",
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
      1,
      3,
      6
     ],
     "table": "zMY="
    }
   },
   {
    "name": "Espresso",
    "color": "grey",
    "row": 0,
    "column": 2,
    "text": "At least one of these is true: Inky is a liar, or all of the corner cats are liars.",
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
     "table": "PDw="
    }
   },
   {
    "name": "Fig",
    "color": "black",
    "row": 1,
    "column": 0,
    "text": "Gizmo and Inky are both honest, or both liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     4,
     6
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      3,
      4,
      6
     ],
     "table": "aQ=="
    }
   },
   {
    "name": "Gizmo",
    "color": "black",
    "row": 1,
    "column": 1,
    "text": "All of the cats on the edges are the same: all honest, or all liars.",
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
     "table": "AQD+/wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AID/fw=="
    }
   },
   {
    "name": "Honey",
    "color": "white",
    "row": 1,
    "column": 2,
    "text": "All of Inky's neighbors are honest.",
    "hidden": false,
    "secret": null,
    "mentions": [
     3,
     7
    ],
    "mood": "happy",
    "clue": {
     "cats": [
      3,
      5,
      7
     ],
     "table": "yQ=="
    }
   },
   {
    "name": "Inky",
    "color": "black",
    "row": 2,
    "column": 0,
    "text": "All of the cats in column 3 are honest.",
    "hidden": false,
    "secret": null,
    "mentions": [
     2,
     5,
     8
    ],
    "mood": "happy",
    "clue": {
     "cats": [
      2,
      5,
      6,
      8
     ],
     "table": "4fA="
    }
   },
   {
    "name": "Jasper",
    "color": "grey",
    "row": 2,
    "column": 1,
    "text": "An odd number of Fig's neighbors are liars.",
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
      4,
      6,
      7
     ],
     "table": "lmk="
    }
   },
   {
    "name": "Kismet",
    "color": "white",
    "row": 2,
    "column": 2,
    "text": "At least one of Gizmo and Inky is honest.",
    "hidden": false,
    "secret": null,
    "mentions": [
     4,
     6
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      4,
      6,
      8
     ],
     "table": "hw=="
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
    "text": "All the liars in my row are connected.",
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
     "table": "Yg=="
    }
   },
   {
    "name": "Cricket",
    "color": "yellow",
    "row": 0,
    "column": 1,
    "text": "An odd number of the cats in my row are liars.",
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
     "table": "Wg=="
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
    "text": "At least one of Felix and Luna is honest. Mrow.",
    "hidden": false,
    "secret": null,
    "mentions": [
     4,
     8
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      3,
      4,
      8
     ],
     "table": "lQ=="
    }
   },
   {
    "name": "Felix",
    "color": "orange",
    "row": 1,
    "column": 1,
    "text": "An odd number of the cats in my column are liars.",
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
      4,
      7
     ],
     "table": "Wg=="
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
    "text": "At least one of these is true: Hobbes is a liar, or all of my neighbors are honest. Mrow.",
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
      3,
      5,
      6,
      7
     ],
     "table": "LTw="
    }
   },
   {
    "name": "Kiwi",
    "color": "orange",
    "row": 2,
    "column": 1,
    "text": "Hiss! All of the cats on the edges are liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     1,
     2,
     3,
     5,
     6,
     8
    ],
    "mood": "angry",
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
     "table": "AAAAAAAAAAD//////////wAAAAAAAAAA/////////38="
    }
   },
   {
    "name": "Luna",
    "color": "orange",
    "row": 2,
    "column": 2,
    "text": "There are as many liars among Felix's neighbors as among Angus's neighbors.",
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
      5,
      7,
      8
     ],
     "table": "DwDw/w=="
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
     "table": "pak="
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
    "text": "All of the cats in row 1 are honest.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     1,
     2
    ],
    "mood": "happy",
    "clue": {
     "cats": [
      0,
      1,
      2,
      5
     ],
     "table": "Af4="
    }
   },
   {
    "name": "Inky",
    "color": "white",
    "row": 2,
    "column": 0,
    "text": "Among the cats above me, at least one is honest and at least one is a liar.",
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
     "table": "lg=="
    }
   },
   {
    "name": "Jasper",
    "color": "black",
    "row": 2,
    "column": 1,
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
      7
     ],
     "table": "E+w="
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
    "text": "An odd number of my neighbors are liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     1,
     3
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      0,
      1,
      3
     ],
     "table": "lg=="
    }
   },
   {
    "name": "Bean",
    "color": "white",
    "row": 0,
    "column": 1,
    "text": "Mrow. All the liars are connected.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     2,
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
     "table": "BEYAAxxMETPMR8wDzEzMM8zMAQPMzBEzzUcBA8xMETPMzMzMHUwRM8zMzMzMTMwzzcwBAx1METPNRwEDHTcRMw=="
    }
   },
   {
    "name": "Coco",
    "color": "orange",
    "row": 0,
    "column": 2,
    "text": "There are more honest cats in my row than in row 2. Meow.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     1,
     3,
     4,
     5
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      0,
      1,
      2,
      3,
      4,
      5
     ],
     "table": "8PHx5/Hn548="
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
    "text": "All of the orange cats are honest. Purr.",
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
    "text": "Echo is the only liar among Bean's neighbors.",
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
      5
     ],
     "table": "EO8="
    }
   },
   {
    "name": "Jasper",
    "color": "yellow",
    "row": 2,
    "column": 0,
    "text": "At least one of the orange cats is a liar.",
    "hidden": false,
    "secret": null,
    "mentions": [
     2,
     3,
     4,
     8
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      2,
      3,
      4,
      6,
      8
     ],
     "table": "/gH/AA=="
    }
   },
   {
    "name": "Kettle",
    "color": "white",
    "row": 2,
    "column": 1,
    "text": "All the honest cats in column 1 are connected. Mew.",
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
      7
     ],
     "table": "E+w="
    }
   },
   {
    "name": "Loki",
    "color": "orange",
    "row": 2,
    "column": 2,
    "text": "Ash and Coco are both honest, or both liars.",
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
      2,
      8
     ],
     "table": "aQ=="
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
    "text": "All of the cats in row 2 are the same: all honest, or all liars.",
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
     "table": "qWo="
    }
   },
   {
    "name": "Coco",
    "color": "brown",
    "row": 0,
    "column": 2,
    "text": "An odd number of the cats in row 3 are liars.",
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
     "table": "lmk="
    }
   },
   {
    "name": "Echo",
    "color": "brown",
    "row": 1,
    "column": 0,
    "text": "All of my neighbors are liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     4,
     6
    ],
    "mood": "angry",
    "clue": {
     "cats": [
      0,
      3,
      4,
      6
     ],
     "table": "zGw="
    }
   },
   {
    "name": "Gnocchi",
    "color": "brown",
    "row": 1,
    "column": 1,
    "text": "Kiwi is the only liar among the cats on the edges.",
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
     "table": "AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8BAP7/AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//w=="
    }
   },
   {
    "name": "Honey",
    "color": "yellow",
    "row": 1,
    "column": 2,
    "text": "Ash is honest. That's a purr-fact. Prrrt!",
    "hidden": false,
    "secret": null,
    "mentions": [
     0
    ],
    "mood": "happy",
    "clue": {
     "cats": [
      0,
      5
     ],
     "table": "CQ=="
    }
   },
   {
    "name": "Iggy",
    "color": "yellow",
    "row": 2,
    "column": 0,
    "text": "Mrow. Kiwi is the only liar among the cats to my right.",
    "hidden": false,
    "secret": null,
    "mentions": [
     7,
     8
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      6,
      7,
      8
     ],
     "table": "mg=="
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
    "text": "An odd number of Ash, Jasper and me are liars.",
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
      8
     ],
     "table": "Zg=="
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
    "text": "At least one of these is true: Hobbes is honest, or all of the cats in my row are honest. Mew.",
    "hidden": false,
    "secret": null,
    "mentions": [
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
      5
     ],
     "table": "Vas="
    }
   },
   {
    "name": "Dumpling",
    "color": "black",
    "row": 0,
    "column": 1,
    "text": "There are exactly 2 liars in total.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     2,
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
     "table": "pNrazdrNzczazc3MzczMzNrNzczNzMzMzczMzMzMzMzazc3MzczMzM3MzMzMzMzMzczMzMzMzMzMzMzMzMzMzA=="
    }
   },
   {
    "name": "Echo",
    "color": "white",
    "row": 0,
    "column": 2,
    "text": "At least one of Cricket and Inky is honest.",
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
     "table": "kw=="
    }
   },
   {
    "name": "Fudge",
    "color": "black",
    "row": 1,
    "column": 0,
    "text": "An odd number of Inky's neighbors are liars.",
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
     "table": "DA=="
    }
   },
   {
    "name": "Gnocchi",
    "color": "white",
    "row": 1,
    "column": 1,
    "text": "There are as many liars among the white cats as in my row.",
    "hidden": false,
    "secret": null,
    "mentions": [
     2,
     3,
     5,
     7
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      2,
      3,
      4,
      5,
      7
     ],
     "table": "adK0aQ=="
    }
   },
   {
    "name": "Hobbes",
    "color": "black",
    "row": 1,
    "column": 2,
    "text": "All the liars in column 2 are connected.",
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
     "table": "eDw="
    }
   },
   {
    "name": "Inky",
    "color": "black",
    "row": 2,
    "column": 0,
    "text": "There are more honest cats among Kismet's neighbors than among the brown cats.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     5,
     7,
     8
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      0,
      5,
      6,
      7,
      8
     ],
     "table": "0vBL0g=="
    }
   },
   {
    "name": "Jasper",
    "color": "white",
    "row": 2,
    "column": 1,
    "text": "Pfft! Hobbes and I are both liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     5
    ],
    "mood": "angry",
    "clue": {
     "cats": [
      5,
      7
     ],
     "table": "BA=="
    }
   },
   {
    "name": "Kismet",
    "color": "brown",
    "row": 2,
    "column": 2,
    "text": "All the liars are connected.",
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
     "table": "yIrMz9CA3f8AiwDPAIAA/wAAzc8AAN3/AYvNzwCA3f//////Ln8iAP//////f/8A/v8yMC5/IgD+dDIwLgQiAA=="
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
    "name": "Biscuit",
    "color": "white",
    "row": 0,
    "column": 0,
    "text": "Iggy is the only honest cat among Jasper's neighbors.",
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
     "table": "qqY="
    }
   },
   {
    "name": "Cricket",
    "color": "white",
    "row": 0,
    "column": 1,
    "text": "All of the cats in column 1 are the same: all honest, or all liars.",
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
      1,
      3,
      6
     ],
     "table": "yWw="
    }
   },
   {
    "name": "Dumpling",
    "color": "orange",
    "row": 0,
    "column": 2,
    "text": "Gizmo is pawsitively honest.",
    "hidden": false,
    "secret": null,
    "mentions": [
     4
    ],
    "mood": "happy",
    "clue": {
     "cats": [
      2,
      4
     ],
     "table": "CQ=="
    }
   },
   {
    "name": "Espresso",
    "color": "white",
    "row": 1,
    "column": 0,
    "text": "Gizmo and I are both honest, or both liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     4
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      3,
      4
     ],
     "table": "Aw=="
    }
   },
   {
    "name": "Gizmo",
    "color": "orange",
    "row": 1,
    "column": 1,
    "text": "There are as many liars among the orange cats as among Jasper's neighbors. Mew.",
    "hidden": false,
    "secret": null,
    "mentions": [
     2,
     6,
     8
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      2,
      4,
      6,
      8
     ],
     "table": "aWk="
    }
   },
   {
    "name": "Hazel",
    "color": "brown",
    "row": 1,
    "column": 2,
    "text": "At least one of these is true: Espresso is honest, or all of the cats in row 3 are honest. Mew.",
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
      3,
      5,
      6,
      7,
      8
     ],
     "table": "k5mZmQ=="
    }
   },
   {
    "name": "Iggy",
    "color": "brown",
    "row": 2,
    "column": 0,
    "text": "Espresso and I are both honest.",
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
     "table": "DQ=="
    }
   },
   {
    "name": "Jasper",
    "color": "white",
    "row": 2,
    "column": 1,
    "text": "All the honest cats are connected.",
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
     "table": "/7vfi/Oz0YD/uwGL87MAgAD//v//////AET+dP//////uwEA87PRgP+7AADzswAAAP/+/wz/Lv8ARP70DMyu7A=="
    }
   },
   {
    "name": "Kiwi",
    "color": "orange",
    "row": 2,
    "column": 2,
    "text": "Exactly one of the cats to my left is a liar.",
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
     "table": "lg=="
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
    "text": "At least one of these is true: Kiwi is a liar, or all of the cats to my right are honest.",
    "hidden": false,
    "secret": null,
    "mentions": [
     1,
     2,
     8
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      0,
      1,
      2,
      8
     ],
     "table": "qVU="
    }
   },
   {
    "name": "Bagel",
    "color": "yellow",
    "row": 0,
    "column": 1,
    "text": "There are as many liars among the brown cats as in row 3.",
    "hidden": false,
    "secret": null,
    "mentions": [
     2,
     6,
     7,
     8
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      1,
      2,
      6,
      7,
      8
     ],
     "table": "mWaZZg=="
    }
   },
   {
    "name": "Cricket",
    "color": "brown",
    "row": 0,
    "column": 2,
    "text": "Exactly one of Felix, Indigo and me is a liar.",
    "hidden": false,
    "secret": null,
    "mentions": [
     4,
     6
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      2,
      4,
      6
     ],
     "table": "vA=="
    }
   },
   {
    "name": "Ember",
    "color": "yellow",
    "row": 1,
    "column": 0,
    "text": "An odd number of Felix's neighbors are liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     1,
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
     "table": "WqU="
    }
   },
   {
    "name": "Felix",
    "color": "white",
    "row": 1,
    "column": 1,
    "text": "There are as many liars in my column as in column 1.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     1,
     3,
     6,
     7
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      0,
      1,
      3,
      4,
      6,
      7
     ],
     "table": "SW0EtpLfSW0="
    }
   },
   {
    "name": "Gizmo",
    "color": "white",
    "row": 1,
    "column": 2,
    "text": "Indigo is the only honest cat among Ember's neighbors.",
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
      4,
      5,
      6
     ],
     "table": "ePA="
    }
   },
   {
    "name": "Indigo",
    "color": "brown",
    "row": 2,
    "column": 0,
    "text": "I smell a rat. At least one of the brown cats is a liar.",
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
      6,
      8
     ],
     "table": "Mg=="
    }
   },
   {
    "name": "Juniper",
    "color": "yellow",
    "row": 2,
    "column": 1,
    "text": "An odd number of Felix, Kiwi and me are liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     4,
     8
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      4,
      7,
      8
     ],
     "table": "Wg=="
    }
   },
   {
    "name": "Kiwi",
    "color": "brown",
    "row": 2,
    "column": 2,
    "text": "Hiss! Bagel and Felix are both liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     1,
     4
    ],
    "mood": "angry",
    "clue": {
     "cats": [
      1,
      4,
      8
     ],
     "table": "eA=="
    }
   }
  ],
  "liars": [
   true,
   true,
   true,
   false,
   true,
   false,
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
    "text": "An odd number of the cats on the edges are liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     1,
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
     "table": "ZpmZZplmZpmZZmaZZpmZZplmZplmmZlmZpmZZplmZpk="
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
    "text": "An odd number of the white cats are liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     2,
     6,
     7
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      2,
      4,
      6,
      7
     ],
     "table": "WqU="
    }
   },
   {
    "name": "Felix",
    "color": "grey",
    "row": 1,
    "column": 2,
    "text": "There are more liars in column 1 than among Apricot's neighbors.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     1,
     3,
     6
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      0,
      1,
      3,
      5,
      6
     ],
     "table": "It27RA=="
    }
   },
   {
    "name": "Goose",
    "color": "white",
    "row": 2,
    "column": 0,
    "text": "All of the grey cats are liars. Hiss!",
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
      7
     ],
     "table": "E+w="
    }
   },
   {
    "name": "Indigo",
    "color": "yellow",
    "row": 2,
    "column": 2,
    "text": "Espresso is the only liar among the cats in column 2.",
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
      7,
      8
     ],
     "table": "BPs="
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
    "name": "Apricot",
    "color": "grey",
    "row": 0,
    "column": 0,
    "text": "Mrow. I smell a rat. At least one of the cats in my column is a liar.",
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
     "table": "VA=="
    }
   },
   {
    "name": "Biscuit",
    "color": "brown",
    "row": 0,
    "column": 1,
    "text": "Apricot is pawsitively honest.",
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
    "name": "Cricket",
    "color": "yellow",
    "row": 0,
    "column": 2,
    "text": "Mrow. All the honest cats in row 3 are connected.",
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
     "table": "pak="
    }
   },
   {
    "name": "Echo",
    "color": "brown",
    "row": 1,
    "column": 0,
    "text": "I'm the only honest cat among the cats on the edges.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     1,
     2,
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
     "table": "AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/gP8="
    }
   },
   {
    "name": "Fudge",
    "color": "grey",
    "row": 1,
    "column": 1,
    "text": "All of the cats in row 1 are the same: all honest, or all liars. Mrow.",
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
      4
     ],
     "table": "gX4="
    }
   },
   {
    "name": "Gizmo",
    "color": "grey",
    "row": 1,
    "column": 2,
    "text": "All the liars in column 2 are connected.",
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
     "table": "eDw="
    }
   },
   {
    "name": "Hobbes",
    "color": "brown",
    "row": 2,
    "column": 0,
    "text": "Apricot and Biscuit are both honest, or both liars.",
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
      6
     ],
     "table": "aQ=="
    }
   },
   {
    "name": "Iggy",
    "color": "yellow",
    "row": 2,
    "column": 1,
    "text": "At least one of these is true: Apricot is a liar, or all of the brown cats are honest.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     1,
     3,
     6
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      0,
      1,
      3,
      6,
      7
     ],
     "table": "q6pUVQ=="
    }
   },
   {
    "name": "Jasper",
    "color": "yellow",
    "row": 2,
    "column": 2,
    "text": "Apricot and Hobbes are both honest.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     6
    ],
    "mood": "happy",
    "clue": {
     "cats": [
      0,
      6,
      8
     ],
     "table": "4Q=="
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
   false,
   true,
   false
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
    "name": "Ash",
    "color": "black",
    "row": 0,
    "column": 0,
    "text": "Bean is the only liar among the cats to my right.",
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
     "table": "pqo="
    }
   },
   {
    "name": "Bean",
    "color": "brown",
    "row": 0,
    "column": 1,
    "text": "Hiss! Felix and Honey are both liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     5,
     7
    ],
    "mood": "angry",
    "clue": {
     "cats": [
      1,
      5,
      7
     ],
     "table": "ag=="
    }
   },
   {
    "name": "Clover",
    "color": "black",
    "row": 0,
    "column": 2,
    "text": "Gnocchi and Nugget are both liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     6,
     13
    ],
    "mood": "angry",
    "clue": {
     "cats": [
      2,
      6,
      13
     ],
     "table": "ag=="
    }
   },
   {
    "name": "Dusty",
    "color": "yellow",
    "row": 0,
    "column": 3,
    "text": "Bean is the only honest cat among the cats to my left.",
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
     "table": "IN8="
    }
   },
   {
    "name": "Ember",
    "color": "white",
    "row": 1,
    "column": 0,
    "text": "Exactly 3 of Gnocchi's neighbors are liars. Mew.",
    "hidden": false,
    "secret": null,
    "mentions": [
     2,
     5,
     7,
     10
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      2,
      4,
      5,
      7,
      10
     ],
     "table": "zGxslg=="
    }
   },
   {
    "name": "Felix",
    "color": "grey",
    "row": 1,
    "column": 1,
    "text": "All of the grey cats are liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     12,
     14
    ],
    "mood": "angry",
    "clue": {
     "cats": [
      5,
      12,
      14
     ],
     "table": "Kg=="
    }
   },
   {
    "name": "Gnocchi",
    "color": "brown",
    "row": 1,
    "column": 2,
    "text": "At least one of these is true: Honey is a liar, or Dusty is honest.",
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
      6,
      7
     ],
     "table": "OQ=="
    }
   },
   {
    "name": "Honey",
    "color": "yellow",
    "row": 1,
    "column": 3,
    "text": "All of Juniper, Marble and me are liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     9,
     12
    ],
    "mood": "angry",
    "clue": {
     "cats": [
      7,
      9,
      12
     ],
     "table": "Kg=="
    }
   },
   {
    "name": "Indigo",
    "color": "yellow",
    "row": 2,
    "column": 0,
    "text": "All the honest cats in row 2 are connected.",
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
      8
     ],
     "table": "CxP07A=="
    }
   },
   {
    "name": "Juniper",
    "color": "black",
    "row": 2,
    "column": 1,
    "text": "All of my neighbors are the same: all honest, or all liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     5,
     8,
     10,
     13
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      5,
      8,
      9,
      10,
      13
     ],
     "table": "4fDweA=="
    }
   },
   {
    "name": "Kiwi",
    "color": "white",
    "row": 2,
    "column": 2,
    "text": "Among my neighbors, at least one is honest and at least one is a liar.",
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
     "table": "Hg8Phw=="
    }
   },
   {
    "name": "Lentil",
    "color": "orange",
    "row": 2,
    "column": 3,
    "text": "All of the cats to my left are the same: all honest, or all liars. Mew.",
    "hidden": false,
    "secret": null,
    "mentions": [
     8,
     9,
     10
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      8,
      9,
      10,
      11
     ],
     "table": "gX4="
    }
   },
   {
    "name": "Marble",
    "color": "grey",
    "row": 3,
    "column": 0,
    "text": "Indigo and Quincy are opposites: one is honest, the other is a liar.",
    "hidden": false,
    "secret": null,
    "mentions": [
     8,
     15
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      8,
      12,
      15
     ],
     "table": "lg=="
    }
   },
   {
    "name": "Nugget",
    "color": "orange",
    "row": 3,
    "column": 1,
    "text": "There are more liars among Gnocchi's neighbors than among Quincy's neighbors.",
    "hidden": false,
    "secret": null,
    "mentions": [
     2,
     5,
     7,
     10,
     11,
     14
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      2,
      5,
      7,
      10,
      11,
      13,
      14
     ],
     "table": "/v/o/gEAFwHo/oDoFwF/Fw=="
    }
   },
   {
    "name": "Pickles",
    "color": "grey",
    "row": 3,
    "column": 2,
    "text": "Mrow. An odd number of Marble's neighbors are liars.",
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
      13,
      14
     ],
     "table": "lg=="
    }
   },
   {
    "name": "Quincy",
    "color": "orange",
    "row": 3,
    "column": 3,
    "text": "An odd number of the cats in column 3 are liars. Meow.",
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
     "table": "lmlplg=="
    }
   }
  ],
  "liars": [
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
   true,
   false,
   false,
   false,
   false
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
    "text": "Bean and Rolo are both honest, or both liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     1,
     13
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      0,
      1,
      13
     ],
     "table": "aQ=="
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
    "text": "Meow. An odd number of Saffron's neighbors are liars.",
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
      2,
      10,
      13,
      15
     ],
     "table": "lmk="
    }
   },
   {
    "name": "Doodle",
    "color": "white",
    "row": 0,
    "column": 3,
    "text": "Ember is a liar. Hiss!",
    "hidden": false,
    "secret": null,
    "mentions": [
     4
    ],
    "mood": "angry",
    "clue": {
     "cats": [
      3,
      4
     ],
     "table": "Bg=="
    }
   },
   {
    "name": "Ember",
    "color": "yellow",
    "row": 1,
    "column": 0,
    "text": "All of Apricot's neighbors are the same: all honest, or all liars.",
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
    "text": "An odd number of the cats in my row are liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     4,
     6,
     7
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      4,
      5,
      6,
      7
     ],
     "table": "WqU="
    }
   },
   {
    "name": "Inky",
    "color": "grey",
    "row": 1,
    "column": 2,
    "text": "Exactly one of Saffron's neighbors is a liar.",
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
      6,
      10,
      13,
      15
     ],
     "table": "lqk="
    }
   },
   {
    "name": "Kiwi",
    "color": "brown",
    "row": 1,
    "column": 3,
    "text": "Mew. At least one of Rolo and Tofu is honest.",
    "hidden": false,
    "secret": null,
    "mentions": [
     13,
     15
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      7,
      13,
      15
     ],
     "table": "lQ=="
    }
   },
   {
    "name": "Mango",
    "color": "grey",
    "row": 2,
    "column": 0,
    "text": "There are more liars among the orange cats than in row 1.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     1,
     2,
     3,
     5,
     9,
     14
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      0,
      1,
      2,
      3,
      5,
      8,
      9,
      14
     ],
     "table": "AAABAP///v8BABcB/v/o/gEAFwH+/+j+FwF/F+j+gOg="
    }
   },
   {
    "name": "Nimbus",
    "color": "orange",
    "row": 2,
    "column": 1,
    "text": "Mew. Among the cats in the middle, at least one is honest and at least one is a liar.",
    "hidden": false,
    "secret": null,
    "mentions": [
     5,
     6,
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
     "table": "Do8="
    }
   },
   {
    "name": "Oreo",
    "color": "brown",
    "row": 2,
    "column": 2,
    "text": "An odd number of the cats in the middle are liars.",
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
     "table": "lpY="
    }
   },
   {
    "name": "Pickles",
    "color": "brown",
    "row": 2,
    "column": 3,
    "text": "Mrrp! All of the cats in column 2 are honest.",
    "hidden": false,
    "secret": null,
    "mentions": [
     1,
     5,
     9,
     13
    ],
    "mood": "happy",
    "clue": {
     "cats": [
      1,
      5,
      9,
      11,
      13
     ],
     "table": "Af4A/w=="
    }
   },
   {
    "name": "Quincy",
    "color": "black",
    "row": 3,
    "column": 0,
    "text": "Among the cats in my column, at least one is honest and at least one is a liar.",
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
     "table": "/oA="
    }
   },
   {
    "name": "Rolo",
    "color": "yellow",
    "row": 3,
    "column": 1,
    "text": "I smell a rat. At least one of Pickles, Quincy and me is a liar.",
    "hidden": false,
    "secret": null,
    "mentions": [
     11,
     12
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      11,
      12,
      13
     ],
     "table": "Dg=="
    }
   },
   {
    "name": "Saffron",
    "color": "orange",
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
     "table": "CxP07A=="
    }
   },
   {
    "name": "Tofu",
    "color": "white",
    "row": 3,
    "column": 3,
    "text": "All the liars in row 1 are connected. Mew.",
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
      15
     ],
     "table": "yNA3Lw=="
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
    "name": "Bean",
    "color": "grey",
    "row": 0,
    "column": 0,
    "text": "There are as many liars among Hobbes's neighbors as among the yellow cats.",
    "hidden": false,
    "secret": null,
    "mentions": [
     1,
     4,
     6,
     7,
     9,
     11,
     12
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      0,
      1,
      4,
      6,
      7,
      9,
      11,
      12
     ],
     "table": "qaqWqaqqqaqWqWqWqaqWqZapapapqpapapaqapapapY="
    }
   },
   {
    "name": "Cricket",
    "color": "grey",
    "row": 0,
    "column": 1,
    "text": "An odd number of Ravioli's neighbors are liars.",
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
      1,
      10,
      13,
      15
     ],
     "table": "lmk="
    }
   },
   {
    "name": "Doodle",
    "color": "black",
    "row": 0,
    "column": 2,
    "text": "Noodle is honest, but Oreo is a liar.",
    "hidden": false,
    "secret": null,
    "mentions": [
     10,
     11
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      2,
      10,
      11
     ],
     "table": "mg=="
    }
   },
   {
    "name": "Echo",
    "color": "black",
    "row": 0,
    "column": 3,
    "text": "Juniper and Kettle are opposites: one is honest, the other is a liar.",
    "hidden": false,
    "secret": null,
    "mentions": [
     7,
     8
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      3,
      7,
      8
     ],
     "table": "lg=="
    }
   },
   {
    "name": "Fudge",
    "color": "grey",
    "row": 1,
    "column": 0,
    "text": "Among the cats on the edges, at least one is honest and at least one is a liar.",
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
     "table": "/v8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AIA="
    }
   },
   {
    "name": "Hobbes",
    "color": "orange",
    "row": 1,
    "column": 1,
    "text": "Bean is a liar.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0
    ],
    "mood": "angry",
    "clue": {
     "cats": [
      0,
      5
     ],
     "table": "Bg=="
    }
   },
   {
    "name": "Iggy",
    "color": "white",
    "row": 1,
    "column": 2,
    "text": "An odd number of the cats in my row are liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     4,
     5,
     7
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      4,
      5,
      6,
      7
     ],
     "table": "Zpk="
    }
   },
   {
    "name": "Juniper",
    "color": "yellow",
    "row": 1,
    "column": 3,
    "text": "Among Queenie's neighbors, at least one is honest and at least one is a liar.",
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
      7,
      9,
      12,
      14
     ],
     "table": "VpU="
    }
   },
   {
    "name": "Kettle",
    "color": "orange",
    "row": 2,
    "column": 0,
    "text": "Exactly 2 of Queenie's neighbors are liars.",
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
     "table": "apY="
    }
   },
   {
    "name": "Lentil",
    "color": "brown",
    "row": 2,
    "column": 1,
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
      9,
      12
     ],
     "table": "AP+Afw=="
    }
   },
   {
    "name": "Noodle",
    "color": "brown",
    "row": 2,
    "column": 2,
    "text": "Lentil and Truffle are opposites: one is honest, the other is a liar.",
    "hidden": false,
    "secret": null,
    "mentions": [
     9,
     15
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      9,
      10,
      15
     ],
     "table": "lg=="
    }
   },
   {
    "name": "Oreo",
    "color": "yellow",
    "row": 2,
    "column": 3,
    "text": "An odd number of the grey cats are liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     1,
     4,
     15
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      0,
      1,
      4,
      11,
      15
     ],
     "table": "lmlplg=="
    }
   },
   {
    "name": "Pickles",
    "color": "yellow",
    "row": 3,
    "column": 0,
    "text": "Doodle is the only liar among the black cats.",
    "hidden": false,
    "secret": null,
    "mentions": [
     2,
     3,
     13
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      2,
      3,
      12,
      13
     ],
     "table": "0vA="
    }
   },
   {
    "name": "Queenie",
    "color": "black",
    "row": 3,
    "column": 1,
    "text": "All of the black cats are liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     2,
     3
    ],
    "mood": "angry",
    "clue": {
     "cats": [
      2,
      3,
      13
     ],
     "table": "cA=="
    }
   },
   {
    "name": "Ravioli",
    "color": "white",
    "row": 3,
    "column": 2,
    "text": "Mew. At least one of these is true: Queenie is a liar, or all of the cats in column 1 are honest.",
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
     "table": "AQD///7/AAA="
    }
   },
   {
    "name": "Truffle",
    "color": "grey",
    "row": 3,
    "column": 3,
    "text": "Among the cats in my row, at least one is honest and at least one is a liar.",
    "hidden": false,
    "secret": null,
    "mentions": [
     12,
     13,
     14
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      12,
      13,
      14,
      15
     ],
     "table": "/oA="
    }
   }
  ],
  "liars": [
   false,
   false,
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
   true,
   false,
   false
  ]
 },
 {
  "rows": 4,
  "cols": 4,
  "seed": 1022,
  "level": "medium",
  "given": null,
  "cats": [
   {
    "name": "Apricot",
    "color": "yellow",
    "row": 0,
    "column": 0,
    "text": "There are as many liars among the grey cats as among the orange cats.",
    "hidden": false,
    "secret": null,
    "mentions": [
     8,
     9,
     10,
     11,
     12,
     14
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      0,
      8,
      9,
      10,
      11,
      12,
      14
     ],
     "table": "qZaqqZZqqZaqqaqqqZaqqQ=="
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
    "text": "Exactly one of Iggy, Paprika and me is a liar.",
    "hidden": false,
    "secret": null,
    "mentions": [
     7,
     12
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      2,
      7,
      12
     ],
     "table": "vA=="
    }
   },
   {
    "name": "Ember",
    "color": "white",
    "row": 0,
    "column": 3,
    "text": "Cricket and Kettle are both honest.",
    "hidden": false,
    "secret": null,
    "mentions": [
     1,
     8
    ],
    "mood": "happy",
    "clue": {
     "cats": [
      1,
      3,
      8
     ],
     "table": "yQ=="
    }
   },
   {
    "name": "Fig",
    "color": "black",
    "row": 1,
    "column": 0,
    "text": "There are more honest cats among Queenie's neighbors than in row 1. Mrow.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     1,
     2,
     3,
     9,
     12,
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
      9,
      12,
      14
     ],
     "table": "6P4XAYDofxeA6H8XAID/f4DofxcAgP9/AID/fwAA//8="
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
    "text": "An odd number of the cats in my row are liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     4,
     5,
     6
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      4,
      5,
      6,
      7
     ],
     "table": "lpY="
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
    "text": "An odd number of the cats in my row are liars.",
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
    "text": "Mrow. All the honest cats in column 2 are connected.",
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
      5,
      9,
      12,
      13
     ],
     "table": "C/QT7A=="
    }
   },
   {
    "name": "Queenie",
    "color": "yellow",
    "row": 3,
    "column": 1,
    "text": "At least one of Ember and Nugget is honest. Mrow.",
    "hidden": false,
    "secret": null,
    "mentions": [
     3,
     10
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      3,
      10,
      13
     ],
     "table": "hw=="
    }
   },
   {
    "name": "Ravioli",
    "color": "orange",
    "row": 3,
    "column": 2,
    "text": "Fig and Kettle are opposites: one is honest, the other is a liar. Meow.",
    "hidden": false,
    "secret": null,
    "mentions": [
     4,
     8
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      4,
      8,
      14
     ],
     "table": "lg=="
    }
   },
   {
    "name": "Sushi",
    "color": "yellow",
    "row": 3,
    "column": 3,
    "text": "At least one of the yellow cats is a liar.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     2,
     13
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      0,
      2,
      13,
      15
     ],
     "table": "/gA="
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
  "level": "medium",
  "given": null,
  "cats": [
   {
    "name": "Apricot",
    "color": "white",
    "row": 0,
    "column": 0,
    "text": "There are more honest cats among the white cats than in row 3.",
    "hidden": false,
    "secret": null,
    "mentions": [
     7,
     8,
     9,
     10,
     11,
     14,
     15
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      0,
      7,
      8,
      9,
      10,
      11,
      14,
      15
     ],
     "table": "utvbXdtdXVWqurrbutvbXaq6utu629tdqqqquqq6uts="
    }
   },
   {
    "name": "Bagel",
    "color": "black",
    "row": 0,
    "column": 1,
    "text": "Among the black cats, at least one is honest and at least one is a liar.",
    "hidden": false,
    "secret": null,
    "mentions": [
     3
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      1,
      3
     ],
     "table": "DA=="
    }
   },
   {
    "name": "Coco",
    "color": "yellow",
    "row": 0,
    "column": 2,
    "text": "Meow. There are more honest cats among the white cats than among the yellow cats.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     4,
     7,
     12,
     14,
     15
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      0,
      2,
      4,
      7,
      12,
      14,
      15
     ],
     "table": "MRgzMRiMMRgYjDEYjMwYjA=="
    }
   },
   {
    "name": "Doodle",
    "color": "black",
    "row": 0,
    "column": 3,
    "text": "An odd number of my neighbors are liars.",
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
      3,
      7
     ],
     "table": "lg=="
    }
   },
   {
    "name": "Espresso",
    "color": "yellow",
    "row": 1,
    "column": 0,
    "text": "All of the black cats are honest.",
    "hidden": false,
    "secret": null,
    "mentions": [
     1,
     3
    ],
    "mood": "happy",
    "clue": {
     "cats": [
      1,
      3,
      4
     ],
     "table": "4Q=="
    }
   },
   {
    "name": "Fig",
    "color": "grey",
    "row": 1,
    "column": 1,
    "text": "An odd number of the white cats are liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     7,
     14,
     15
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      0,
      5,
      7,
      14,
      15
     ],
     "table": "lmlplg=="
    }
   },
   {
    "name": "Gizmo",
    "color": "brown",
    "row": 1,
    "column": 2,
    "text": "All of my neighbors are honest. Purr.",
    "hidden": false,
    "secret": null,
    "mentions": [
     2,
     5,
     7,
     10
    ],
    "mood": "happy",
    "clue": {
     "cats": [
      2,
      5,
      6,
      7,
      10
     ],
     "table": "4fDw8A=="
    }
   },
   {
    "name": "Hobbes",
    "color": "white",
    "row": 1,
    "column": 3,
    "text": "Espresso and Iggy are opposites: one is honest, the other is a liar.",
    "hidden": false,
    "secret": null,
    "mentions": [
     4,
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
    "name": "Iggy",
    "color": "brown",
    "row": 2,
    "column": 0,
    "text": "An odd number of Apricot, Hobbes and me are liars.",
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
      8
     ],
     "table": "Zg=="
    }
   },
   {
    "name": "Kismet",
    "color": "grey",
    "row": 2,
    "column": 1,
    "text": "Luna is the only liar among Mango's neighbors.",
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
      9,
      10,
      15
     ],
     "table": "nMw="
    }
   },
   {
    "name": "Luna",
    "color": "orange",
    "row": 2,
    "column": 2,
    "text": "Bagel and Nimbus are both liars.",
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
    "name": "Mango",
    "color": "orange",
    "row": 2,
    "column": 3,
    "text": "All of the orange cats are the same: all honest, or all liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     10
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      10,
      11
     ],
     "table": "BQ=="
    }
   },
   {
    "name": "Nimbus",
    "color": "yellow",
    "row": 3,
    "column": 0,
    "text": "At least one of these is true: Espresso is honest, or all of the black cats are honest.",
    "hidden": false,
    "secret": null,
    "mentions": [
     1,
     3,
     4
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      1,
      3,
      4,
      12
     ],
     "table": "H+A="
    }
   },
   {
    "name": "Ravioli",
    "color": "grey",
    "row": 3,
    "column": 1,
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
      8,
      9,
      10,
      11,
      13
     ],
     "table": "yNA3Lw=="
    }
   },
   {
    "name": "Tater",
    "color": "white",
    "row": 3,
    "column": 2,
    "text": "Among Doodle, Udon and me, at least one is honest and at least one is a liar.",
    "hidden": false,
    "secret": null,
    "mentions": [
     3,
     15
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      3,
      14,
      15
     ],
     "table": "sg=="
    }
   },
   {
    "name": "Udon",
    "color": "white",
    "row": 3,
    "column": 3,
    "text": "Mew. Kismet and Nimbus are both honest, or both liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     9,
     12
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      9,
      12,
      15
     ],
     "table": "aQ=="
    }
   }
  ],
  "liars": [
   true,
   true,
   false,
   true,
   true,
   false,
   false,
   false,
   false,
   true,
   false,
   false,
   true,
   true,
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
    "color": "orange",
    "row": 0,
    "column": 0,
    "text": "There are more liars in column 3 than in row 3.",
    "hidden": false,
    "secret": null,
    "mentions": [
     2,
     6,
     8,
     9,
     10,
     11,
     14
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      0,
      2,
      6,
      8,
      9,
      10,
      11,
      14
     ],
     "table": "VmpqqlZqaqpqqqqqaqqqqlVWVmpVVlZqVmpqqlZqaqo="
    }
   },
   {
    "name": "Bagel",
    "color": "orange",
    "row": 0,
    "column": 1,
    "text": "Mrow. There are as many liars in row 4 as among Udon's neighbors.",
    "hidden": false,
    "secret": null,
    "mentions": [
     11,
     12,
     13,
     14,
     15
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      1,
      11,
      12,
      13,
      14,
      15
     ],
     "table": "aaZppqaqpqo="
    }
   },
   {
    "name": "Dumpling",
    "color": "yellow",
    "row": 0,
    "column": 2,
    "text": "Exactly 2 of Goose, Hazel and me are liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     5,
     6
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      2,
      5,
      6
     ],
     "table": "wg=="
    }
   },
   {
    "name": "Ember",
    "color": "yellow",
    "row": 0,
    "column": 3,
    "text": "At least one of Hazel and Tofu is a liar.",
    "hidden": false,
    "secret": null,
    "mentions": [
     6,
     14
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      3,
      6,
      14
     ],
     "table": "Vg=="
    }
   },
   {
    "name": "Fig",
    "color": "yellow",
    "row": 1,
    "column": 0,
    "text": "An odd number of Apricot, Goose and me are liars. Mrow.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     5
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      0,
      4,
      5
     ],
     "table": "Wg=="
    }
   },
   {
    "name": "Goose",
    "color": "grey",
    "row": 1,
    "column": 1,
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
      5,
      8,
      12
     ],
     "table": "lmlplg=="
    }
   },
   {
    "name": "Hazel",
    "color": "white",
    "row": 1,
    "column": 2,
    "text": "All of the cats on the edges are liars.",
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
    "mood": "angry",
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
     "table": "AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAACA////fw=="
    }
   },
   {
    "name": "Inky",
    "color": "brown",
    "row": 1,
    "column": 3,
    "text": "There are more liars among the black cats than among Kettle's neighbors.",
    "hidden": false,
    "secret": null,
    "mentions": [
     5,
     8,
     9,
     10,
     13
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      5,
      7,
      8,
      9,
      10,
      13
     ],
     "table": "zJnMzMzMzMw="
    }
   },
   {
    "name": "Jasper",
    "color": "black",
    "row": 2,
    "column": 0,
    "text": "An odd number of Pickles, Tofu and me are liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     12,
     14
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      8,
      12,
      14
     ],
     "table": "PA=="
    }
   },
   {
    "name": "Kettle",
    "color": "black",
    "row": 2,
    "column": 1,
    "text": "All of the cats to my right are the same: all honest, or all liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     10,
     11
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      9,
      10,
      11
     ],
     "table": "aQ=="
    }
   },
   {
    "name": "Marble",
    "color": "white",
    "row": 2,
    "column": 2,
    "text": "I'm the only liar among the cats in the middle.",
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
     "table": "AP4="
    }
   },
   {
    "name": "Nugget",
    "color": "brown",
    "row": 2,
    "column": 3,
    "text": "Exactly 2 of my neighbors are liars.",
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
      11,
      15
     ],
     "table": "eJY="
    }
   },
   {
    "name": "Pickles",
    "color": "yellow",
    "row": 3,
    "column": 0,
    "text": "Mrow. All the liars in my column are connected.",
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
     "table": "yC8="
    }
   },
   {
    "name": "Queenie",
    "color": "brown",
    "row": 3,
    "column": 1,
    "text": "All the honest cats in row 1 are connected.",
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
      13
     ],
     "table": "CxP07A=="
    }
   },
   {
    "name": "Tofu",
    "color": "grey",
    "row": 3,
    "column": 2,
    "text": "At least one of these is true: Marble is a liar, or Bagel is honest.",
    "hidden": false,
    "secret": null,
    "mentions": [
     1,
     10
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      1,
      10,
      14
     ],
     "table": "LQ=="
    }
   },
   {
    "name": "Udon",
    "color": "grey",
    "row": 3,
    "column": 3,
    "text": "Among the cats above me, at least one is honest and at least one is a liar.",
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
     "table": "foE="
    }
   }
  ],
  "liars": [
   false,
   true,
   true,
   false,
   true,
   true,
   true,
   true,
   false,
   true,
   true,
   false,
   true,
   true,
   false,
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
    "name": "Angus",
    "color": "yellow",
    "row": 0,
    "column": 0,
    "text": "Kismet is the only liar among Kismet, Truffle and me.",
    "hidden": false,
    "secret": null,
    "mentions": [
     8,
     15
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      0,
      8,
      15
     ],
     "table": "rg=="
    }
   },
   {
    "name": "Bagel",
    "color": "white",
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
    "color": "brown",
    "row": 0,
    "column": 2,
    "text": "Among the cats below me, at least one is honest and at least one is a liar.",
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
     "table": "VpU="
    }
   },
   {
    "name": "Dusty",
    "color": "grey",
    "row": 0,
    "column": 3,
    "text": "Sprout and I are opposites: one is honest, the other is a liar.",
    "hidden": false,
    "secret": null,
    "mentions": [
     14
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      3,
      14
     ],
     "table": "DA=="
    }
   },
   {
    "name": "Espresso",
    "color": "white",
    "row": 1,
    "column": 0,
    "text": "There are as many liars in my row as among the grey cats.",
    "hidden": false,
    "secret": null,
    "mentions": [
     3,
     5,
     6,
     7,
     10
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      3,
      4,
      5,
      6,
      7,
      10
     ],
     "table": "5c7lzljlWOU="
    }
   },
   {
    "name": "Honey",
    "color": "brown",
    "row": 1,
    "column": 1,
    "text": "Iggy and Nimbus are both liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     6,
     11
    ],
    "mood": "angry",
    "clue": {
     "cats": [
      5,
      6,
      11
     ],
     "table": "ag=="
    }
   },
   {
    "name": "Iggy",
    "color": "brown",
    "row": 1,
    "column": 2,
    "text": "There are as many liars among the black cats as among the grey cats.",
    "hidden": false,
    "secret": null,
    "mentions": [
     3,
     7,
     10,
     12,
     13,
     14
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      3,
      6,
      7,
      10,
      12,
      13,
      14
     ],
     "table": "ycyWyZbJbJaWyWyWbJbMbA=="
    }
   },
   {
    "name": "Jasper",
    "color": "grey",
    "row": 1,
    "column": 3,
    "text": "All the honest cats in my column are connected. Meow.",
    "hidden": false,
    "secret": null,
    "mentions": [
     3,
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
     "table": "x98="
    }
   },
   {
    "name": "Kismet",
    "color": "yellow",
    "row": 2,
    "column": 0,
    "text": "Meow. An odd number of Bagel, Nimbus and me are liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     1,
     11
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      1,
      8,
      11
     ],
     "table": "Wg=="
    }
   },
   {
    "name": "Loki",
    "color": "yellow",
    "row": 2,
    "column": 1,
    "text": "Among the white cats, at least one is honest and at least one is a liar.",
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
     "table": "lg=="
    }
   },
   {
    "name": "Mochi",
    "color": "grey",
    "row": 2,
    "column": 2,
    "text": "At least one of these is true: Espresso is honest, or all of the cats in row 1 are liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
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
      4,
      10
     ],
     "table": "//8AgAAA/38="
    }
   },
   {
    "name": "Nimbus",
    "color": "orange",
    "row": 2,
    "column": 3,
    "text": "There are more honest cats among Jasper's neighbors than among Truffle's neighbors.",
    "hidden": false,
    "secret": null,
    "mentions": [
     3,
     6,
     14
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      3,
      6,
      11,
      14
     ],
     "table": "4Yc="
    }
   },
   {
    "name": "Quincy",
    "color": "black",
    "row": 3,
    "column": 0,
    "text": "An odd number of the cats in column 3 are liars. Meow.",
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
      12,
      14
     ],
     "table": "lmlplg=="
    }
   },
   {
    "name": "Rusty",
    "color": "black",
    "row": 3,
    "column": 1,
    "text": "Mrow. An odd number of the cats in my row are liars.",
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
     "table": "WqU="
    }
   },
   {
    "name": "Sprout",
    "color": "black",
    "row": 3,
    "column": 2,
    "text": "Espresso and Iggy are opposites: one is honest, the other is a liar.",
    "hidden": false,
    "secret": null,
    "mentions": [
     4,
     6
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      4,
      6,
      14
     ],
     "table": "lg=="
    }
   },
   {
    "name": "Truffle",
    "color": "orange",
    "row": 3,
    "column": 3,
    "text": "Honey is the only liar among Bagel's neighbors.",
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
      15
     ],
     "table": "EO8="
    }
   }
  ],
  "liars": [
   false,
   true,
   false,
   true,
   false,
   true,
   false,
   false,
   true,
   false,
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
  "seed": 1026,
  "level": "hard",
  "given": null,
  "cats": [
   {
    "name": "Apricot",
    "color": "white",
    "row": 0,
    "column": 0,
    "text": "At least one of Biscuit and Truffle is a liar.",
    "hidden": false,
    "secret": null,
    "mentions": [
     1,
     14
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      0,
      1,
      14
     ],
     "table": "Vg=="
    }
   },
   {
    "name": "Biscuit",
    "color": "black",
    "row": 0,
    "column": 1,
    "text": "Truffle is the only liar among Umber's neighbors.",
    "hidden": false,
    "secret": null,
    "mentions": [
     11,
     14
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      1,
      11,
      14
     ],
     "table": "mg=="
    }
   },
   {
    "name": "Clover",
    "color": "yellow",
    "row": 0,
    "column": 2,
    "text": "At least one of these is true: Honey is honest, or all of the cats in my column are honest.",
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
     "table": "mZk="
    }
   },
   {
    "name": "Dumpling",
    "color": "brown",
    "row": 0,
    "column": 3,
    "text": "All the honest cats in row 2 are connected.",
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
     "table": "ZaqlqQ=="
    }
   },
   {
    "name": "Espresso",
    "color": "orange",
    "row": 1,
    "column": 0,
    "text": "All of the cats below me are the same: all honest, or all liars.",
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
     "table": "aQ=="
    }
   },
   {
    "name": "Fig",
    "color": "yellow",
    "row": 1,
    "column": 1,
    "text": "Mrow. There are as many liars in column 4 as among the yellow cats.",
    "hidden": false,
    "secret": null,
    "mentions": [
     2,
     3,
     7,
     11,
     15
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      2,
      3,
      5,
      7,
      11,
      15
     ],
     "table": "uWJi0GLQ0PA="
    }
   },
   {
    "name": "Honey",
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
    "name": "Iggy",
    "color": "white",
    "row": 1,
    "column": 3,
    "text": "Apricot and Queenie are both honest, or both liars.",
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
      7,
      12
     ],
     "table": "aQ=="
    }
   },
   {
    "name": "Jasper",
    "color": "brown",
    "row": 2,
    "column": 0,
    "text": "Mew. All the honest cats in column 3 are connected.",
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
      8,
      10,
      14
     ],
     "table": "S/DD4Q=="
    }
   },
   {
    "name": "Marble",
    "color": "grey",
    "row": 2,
    "column": 1,
    "text": "Jasper is the only liar among Queenie's neighbors.",
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
      9,
      13
     ],
     "table": "xg=="
    }
   },
   {
    "name": "Nimbus",
    "color": "black",
    "row": 2,
    "column": 2,
    "text": "An odd number of the cats in column 2 are liars.",
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
      5,
      9,
      10,
      13
     ],
     "table": "lmlplg=="
    }
   },
   {
    "name": "Pickles",
    "color": "black",
    "row": 2,
    "column": 3,
    "text": "Sprout and Truffle are opposites: one is honest, the other is a liar.",
    "hidden": false,
    "secret": null,
    "mentions": [
     13,
     14
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      11,
      13,
      14
     ],
     "table": "lg=="
    }
   },
   {
    "name": "Queenie",
    "color": "grey",
    "row": 3,
    "column": 0,
    "text": "I smell a rat. At least one of Marble, Nimbus and me is a liar.",
    "hidden": false,
    "secret": null,
    "mentions": [
     9,
     10
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      9,
      10,
      12
     ],
     "table": "Dg=="
    }
   },
   {
    "name": "Sprout",
    "color": "orange",
    "row": 3,
    "column": 1,
    "text": "Among my neighbors, at least one is honest and at least one is a liar.",
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
      9,
      12,
      13,
      14
     ],
     "table": "Hoc="
    }
   },
   {
    "name": "Truffle",
    "color": "black",
    "row": 3,
    "column": 2,
    "text": "Jasper is the only honest cat among the cats on the edges.",
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
     "table": "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////9///////////8="
    }
   },
   {
    "name": "Umber",
    "color": "orange",
    "row": 3,
    "column": 3,
    "text": "All of Apricot's neighbors are honest.",
    "hidden": false,
    "secret": null,
    "mentions": [
     1,
     4
    ],
    "mood": "happy",
    "clue": {
     "cats": [
      1,
      4,
      15
     ],
     "table": "4Q=="
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
  "level": "hard",
  "given": null,
  "cats": [
   {
    "name": "Ash",
    "color": "black",
    "row": 0,
    "column": 0,
    "text": "Nugget is the only liar among the white cats.",
    "hidden": false,
    "secret": null,
    "mentions": [
     7,
     10,
     12
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      0,
      7,
      10,
      12
     ],
     "table": "pqo="
    }
   },
   {
    "name": "Doodle",
    "color": "yellow",
    "row": 0,
    "column": 1,
    "text": "Mrow. I smell a rat. At least one of the cats below me is a liar.",
    "hidden": false,
    "secret": null,
    "mentions": [
     5,
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
     "table": "VlU="
    }
   },
   {
    "name": "Felix",
    "color": "grey",
    "row": 0,
    "column": 2,
    "text": "At least one of these is true: Nugget is a liar, or all of the cats in column 1 are liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     4,
     7,
     8,
     12
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      0,
      2,
      4,
      7,
      8,
      12
     ],
     "table": "zDPMM8wzbDM="
    }
   },
   {
    "name": "Hobbes",
    "color": "grey",
    "row": 0,
    "column": 3,
    "text": "Mew. Among the cats in my column, at least one is honest and at least one is a liar.",
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
     "table": "VNU="
    }
   },
   {
    "name": "Jasper",
    "color": "orange",
    "row": 1,
    "column": 0,
    "text": "Felix is the only honest cat among Hobbes's neighbors. Meow.",
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
      4,
      7
     ],
     "table": "nA=="
    }
   },
   {
    "name": "Kiwi",
    "color": "yellow",
    "row": 1,
    "column": 1,
    "text": "All of the cats in column 1 are honest.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     4,
     8,
     12
    ],
    "mood": "happy",
    "clue": {
     "cats": [
      0,
      4,
      5,
      8,
      12
     ],
     "table": "4fDw8A=="
    }
   },
   {
    "name": "Mochi",
    "color": "black",
    "row": 1,
    "column": 2,
    "text": "Nugget and I are opposites: one is honest, the other is a liar.",
    "hidden": false,
    "secret": null,
    "mentions": [
     7
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      6,
      7
     ],
     "table": "DA=="
    }
   },
   {
    "name": "Nugget",
    "color": "white",
    "row": 1,
    "column": 3,
    "text": "An odd number of Kiwi's neighbors are liars.",
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
      7,
      9
     ],
     "table": "lmlplg=="
    }
   },
   {
    "name": "Olive",
    "color": "black",
    "row": 2,
    "column": 0,
    "text": "There are as many liars among Mochi's neighbors as in row 2.",
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
      8,
      10
     ],
     "table": "mSKZImbdZt1EmUSZu2a7Zg=="
    }
   },
   {
    "name": "Paprika",
    "color": "yellow",
    "row": 2,
    "column": 1,
    "text": "Among my neighbors, at least one is honest and at least one is a liar.",
    "hidden": false,
    "secret": null,
    "mentions": [
     5,
     8,
     10,
     13
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      5,
      8,
      9,
      10,
      13
     ],
     "table": "Hg8Phw=="
    }
   },
   {
    "name": "Queenie",
    "color": "white",
    "row": 2,
    "column": 2,
    "text": "Purr. Rusty is honest. That's a purr-fact.",
    "hidden": false,
    "secret": null,
    "mentions": [
     11
    ],
    "mood": "happy",
    "clue": {
     "cats": [
      10,
      11
     ],
     "table": "CQ=="
    }
   },
   {
    "name": "Rusty",
    "color": "orange",
    "row": 2,
    "column": 3,
    "text": "Mew. Vanilla and I are both honest, or both liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     14
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      11,
      14
     ],
     "table": "Aw=="
    }
   },
   {
    "name": "Sushi",
    "color": "white",
    "row": 3,
    "column": 0,
    "text": "An odd number of my neighbors are liars. Mew.",
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
    "name": "Tater",
    "color": "black",
    "row": 3,
    "column": 1,
    "text": "Among the cats to my right, at least one is honest and at least one is a liar.",
    "hidden": false,
    "secret": null,
    "mentions": [
     14,
     15
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      13,
      14,
      15
     ],
     "table": "lg=="
    }
   },
   {
    "name": "Vanilla",
    "color": "yellow",
    "row": 3,
    "column": 2,
    "text": "An odd number of the cats to my left are liars. Mew.",
    "hidden": false,
    "secret": null,
    "mentions": [
     12,
     13
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      12,
      13,
      14
     ],
     "table": "lg=="
    }
   },
   {
    "name": "Yuki",
    "color": "orange",
    "row": 3,
    "column": 3,
    "text": "At least one of Felix and Rusty is honest.",
    "hidden": false,
    "secret": null,
    "mentions": [
     2,
     11
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      2,
      11,
      15
     ],
     "table": "hw=="
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
   true,
   false,
   false,
   false,
   false,
   false,
   true,
   false,
   false
  ]
 },
 {
  "rows": 4,
  "cols": 4,
  "seed": 1028,
  "level": "hard",
  "given": null,
  "cats": [
   {
    "name": "Angus",
    "color": "brown",
    "row": 0,
    "column": 0,
    "text": "Among the black cats, at least one is honest and at least one is a liar.",
    "hidden": false,
    "secret": null,
    "mentions": [
     1,
     6
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      0,
      1,
      6
     ],
     "table": "lg=="
    }
   },
   {
    "name": "Biscuit",
    "color": "black",
    "row": 0,
    "column": 1,
    "text": "An odd number of the cats in row 3 are liars.",
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
      1,
      8,
      9,
      10,
      11
     ],
     "table": "lmlplg=="
    }
   },
   {
    "name": "Clover",
    "color": "white",
    "row": 0,
    "column": 2,
    "text": "Exactly one of Biscuit, Juniper and me is a liar.",
    "hidden": false,
    "secret": null,
    "mentions": [
     1,
     9
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      1,
      2,
      9
     ],
     "table": "2g=="
    }
   },
   {
    "name": "Dumpling",
    "color": "orange",
    "row": 0,
    "column": 3,
    "text": "Clover and I are both honest, or both liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     2
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      2,
      3
     ],
     "table": "BQ=="
    }
   },
   {
    "name": "Echo",
    "color": "yellow",
    "row": 1,
    "column": 0,
    "text": "Felix is the only liar among the cats in my row.",
    "hidden": false,
    "secret": null,
    "mentions": [
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
      7
     ],
     "table": "rqo="
    }
   },
   {
    "name": "Felix",
    "color": "grey",
    "row": 1,
    "column": 1,
    "text": "At least one of these is true: Clover is honest, or all of the yellow cats are honest.",
    "hidden": false,
    "secret": null,
    "mentions": [
     2,
     4,
     15
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      2,
      4,
      5,
      15
     ],
     "table": "h6U="
    }
   },
   {
    "name": "Gizmo",
    "color": "black",
    "row": 1,
    "column": 2,
    "text": "All of the grey cats are the same: all honest, or all liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     5,
     9,
     14
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      5,
      6,
      9,
      14
     ],
     "table": "yWw="
    }
   },
   {
    "name": "Hobbes",
    "color": "white",
    "row": 1,
    "column": 3,
    "text": "At least 4 of the cats on the edges are liars.",
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
     "table": "AICA6H8XFwGA6Oj+FwEBAIDo6P4XAQEA6P7+/wEAAACA6Oj+FwEBAOj+/v8BAAAA6P7+/wEAAAD+////AAAAAIDo6P4XAQEA6P7+/wEAAADo/v7/AQAAAP7///8AAAAA6P7+/wEAAAD+////AAAAAP7///8AAAAA/////wAAAACA6Oj+FwEBAOj+/v8BAAAA6P7+/wEAAAD+////AAAAAOj+/v8BAAAA/v///wAAAAD+////AAAAAP////8AAAAA6P7+/wEAAAD+////AAAAAP7///8AAAAA/////wAAAAD+////AAAAAP////8AAAAA/////wAAAAD/////AAAAAIDo6P4XAQEA6P7+/wEAAADo/v7/AQAAAP7///8AAAAA6P7+/wEAAAD+////AAAAAP7///8AAAAA/////wAAAADo/v7/AQAAAP7///8AAAAA/v///wAAAAD/////AAAAAP7///8AAAAA/////wAAAAD/////AAAAAP////8AAAAA6P7+/wEAAAD+////AAAAAP7///8AAAAA/////wAAAAD+////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP7///8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAA="
    }
   },
   {
    "name": "Inky",
    "color": "brown",
    "row": 2,
    "column": 0,
    "text": "Among the brown cats, at least one is honest and at least one is a liar.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      0,
      8
     ],
     "table": "Cg=="
    }
   },
   {
    "name": "Juniper",
    "color": "grey",
    "row": 2,
    "column": 1,
    "text": "Mrow. An odd number of Angus, Luna and me are liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     10
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      0,
      9,
      10
     ],
     "table": "Wg=="
    }
   },
   {
    "name": "Luna",
    "color": "orange",
    "row": 2,
    "column": 2,
    "text": "There are as many liars among Hobbes's neighbors as among the brown cats.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     3,
     6,
     8,
     11
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      0,
      3,
      6,
      8,
      10,
      11
     ],
     "table": "KZTWawIp/dY="
    }
   },
   {
    "name": "Marble",
    "color": "white",
    "row": 2,
    "column": 3,
    "text": "Luna is honest, but Angus is a liar.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     10
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      0,
      10,
      11
     ],
     "table": "0g=="
    }
   },
   {
    "name": "Nugget",
    "color": "orange",
    "row": 3,
    "column": 0,
    "text": "Angus and Queenie are both honest. Prrrt!",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     15
    ],
    "mood": "happy",
    "clue": {
     "cats": [
      0,
      12,
      15
     ],
     "table": "yQ=="
    }
   },
   {
    "name": "Olive",
    "color": "white",
    "row": 3,
    "column": 1,
    "text": "All the honest cats in my column are connected.",
    "hidden": false,
    "secret": null,
    "mentions": [
     1,
     5,
     9
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      1,
      5,
      9,
      13
     ],
     "table": "C+w="
    }
   },
   {
    "name": "Pepper",
    "color": "grey",
    "row": 3,
    "column": 2,
    "text": "Mrow. An odd number of Olive's neighbors are liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     9,
     12
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      9,
      12,
      14
     ],
     "table": "Zg=="
    }
   },
   {
    "name": "Queenie",
    "color": "yellow",
    "row": 3,
    "column": 3,
    "text": "All the honest cats in my row are connected.",
    "hidden": false,
    "secret": null,
    "mentions": [
     12,
     13,
     14
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      12,
      13,
      14,
      15
     ],
     "table": "C+w="
    }
   }
  ],
  "liars": [
   true,
   true,
   false,
   false,
   true,
   false,
   true,
   false,
   false,
   false,
   false,
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
  "seed": 1029,
  "level": "tricky",
  "given": null,
  "cats": [
   {
    "name": "Angus",
    "color": "white",
    "row": 0,
    "column": 0,
    "text": "All the honest cats in row 2 are connected.",
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
     "table": "ZaqlqQ=="
    }
   },
   {
    "name": "Bean",
    "color": "brown",
    "row": 0,
    "column": 1,
    "text": "All the honest cats in row 4 are connected.",
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
      1,
      12,
      13,
      14,
      15
     ],
     "table": "ZaqlqQ=="
    }
   },
   {
    "name": "Dumpling",
    "color": "brown",
    "row": 0,
    "column": 2,
    "text": "Mrow. Among the cats in my column, at least one is honest and at least one is a liar.",
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
     "table": "VNU="
    }
   },
   {
    "name": "Felix",
    "color": "white",
    "row": 0,
    "column": 3,
    "text": "At least 3 of the black cats are liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     4,
     7,
     9,
     12
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      3,
      4,
      7,
      9,
      12
     ],
     "table": "qmpqVg=="
    }
   },
   {
    "name": "Gnocchi",
    "color": "black",
    "row": 1,
    "column": 0,
    "text": "Among the cats in column 2, at least one is honest and at least one is a liar.",
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
     "table": "NjMzkw=="
    }
   },
   {
    "name": "Honey",
    "color": "grey",
    "row": 1,
    "column": 1,
    "text": "At least one of these is true: Rolo is honest, or all of Felix, Jasper and me are honest.",
    "hidden": false,
    "secret": null,
    "mentions": [
     3,
     7,
     14
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      3,
      5,
      7,
      14
     ],
     "table": "M80="
    }
   },
   {
    "name": "Inky",
    "color": "brown",
    "row": 1,
    "column": 2,
    "text": "There are as many liars in column 4 as in my row.",
    "hidden": false,
    "secret": null,
    "mentions": [
     3,
     4,
     5,
     7,
     11,
     15
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      3,
      4,
      5,
      6,
      7,
      11,
      15
     ],
     "table": "Kf0p/ZTWlNaU1pTWQGtAaw=="
    }
   },
   {
    "name": "Jasper",
    "color": "black",
    "row": 1,
    "column": 3,
    "text": "An odd number of Inky's neighbors are liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     2,
     5,
     10
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      2,
      5,
      7,
      10
     ],
     "table": "Zpk="
    }
   },
   {
    "name": "Kismet",
    "color": "grey",
    "row": 2,
    "column": 0,
    "text": "Honey and Pepper are opposites: one is honest, the other is a liar.",
    "hidden": false,
    "secret": null,
    "mentions": [
     5,
     12
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      5,
      8,
      12
     ],
     "table": "lg=="
    }
   },
   {
    "name": "Luna",
    "color": "black",
    "row": 2,
    "column": 1,
    "text": "Exactly one of the cats above me is a liar.",
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
     "table": "lg=="
    }
   },
   {
    "name": "Mango",
    "color": "white",
    "row": 2,
    "column": 2,
    "text": "There are as many liars in column 1 as in my row.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     4,
     8,
     9,
     11,
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
      11,
      12
     ],
     "table": "EWaZd2aId/8AEe6ZEWaZdw=="
    }
   },
   {
    "name": "Nugget",
    "color": "yellow",
    "row": 2,
    "column": 3,
    "text": "There are as many liars among Inky's neighbors as among the yellow cats.",
    "hidden": false,
    "secret": null,
    "mentions": [
     2,
     5,
     7,
     10,
     15
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      2,
      5,
      7,
      10,
      11,
      15
     ],
     "table": "AQDp/hYBl+k="
    }
   },
   {
    "name": "Pepper",
    "color": "black",
    "row": 3,
    "column": 0,
    "text": "Dumpling is the only liar among Dumpling, Mango and me.",
    "hidden": false,
    "secret": null,
    "mentions": [
     2,
     10
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      2,
      10,
      12
     ],
     "table": "8g=="
    }
   },
   {
    "name": "Queenie",
    "color": "grey",
    "row": 3,
    "column": 1,
    "text": "At least one of Dumpling and Mango is a liar.",
    "hidden": false,
    "secret": null,
    "mentions": [
     2,
     10
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      2,
      10,
      13
     ],
     "table": "Hg=="
    }
   },
   {
    "name": "Rolo",
    "color": "brown",
    "row": 3,
    "column": 2,
    "text": "At least one of the cats in my column is a liar. Mrow.",
    "hidden": false,
    "secret": null,
    "mentions": [
     2,
     6,
     10
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      2,
      6,
      10,
      14
     ],
     "table": "/gA="
    }
   },
   {
    "name": "Ursa",
    "color": "yellow",
    "row": 3,
    "column": 3,
    "text": "All the liars are connected.",
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
     "table": "yNCKgMzAz8DQ0ICA3dD/8ADRAIAAwADA0dGAgN3d//8AAIuAAADPwAAAgIAAAP/wAAAAgAAAAMAAAICAAAD//wAAAADNwM/AAAAAAN3Q//AAAAAAAMAAwAAAAADd3f//AQCLgM3Az8AAAICA3dD/8AAAAIAAwADAAACAgN3d//8AAAAAAAAAANHQgIDd0P/wAAAAAAAAAADR0YCA3d3//wAAAAAAAAAAAACAgAAA//AAAAAAAAAAAAAAgIAAAP//AQAAAM3Az8DR0ICA3dD/8AAAAAAAwADA0dGAgN3d//8BAIuAzcDPwNHQ+/Dd0P/wAAAAgADAAMDR0fv73d3//wAAAAAAAAAAAAAAAAAAAAAB0QCAAMAAwNHRgIDd3f//AAAAAAAAAAAAAAAAAAAAAAAAAIAAAADAAACAgAAA//8AAAAAAAAAAAAAAAAAAAAAAAAAAADAAMAAAAAA3d3//wAAAAAAAAAAAAAAAAAAAAAAAACAAMAAwAAAgIDd3f//AQAAAAAAAADR0ICA3dD/8AHRAIAAwADA0dGAgN3d//8AAAAAAAAAAAAAgIAAAP/wAAAAgAAAAMAAAICAAAD//wEAAADNwM/A0dCAgN3Q//AB0QCAzd3P/9HRgIDd3f//AQCLgM3Az8DR0Pvw3dD/8AHRi/vN3c//0dH7+93d//8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAi4AAAM/AAACAgAAA//AAAACAAAAAwAAAgIAAAP//AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAIuAzcDPwAAAgIDd0P/wAAAAgADAAMAAAICA3d3//wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAICAAAD/8AAAAAAAAAAAAACAgAAA//8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAi4DNwM/A0dD78N3Q//AAAACAAMAAwNHR+/vd3f//AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAMAAAICAAAD//wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAwADAAACAgN3d//8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAgAAA//AAAACAAAAAwAAAgIAAAP//AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAIuAzcDPwNHQ+/Dd0P/wAdGL+83dz//R0fv73d3//wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAzcDPwAAAAADd0P/wAAAAAADAAMAAAAAA3d3//wEAi4DNwM/AAACAgN3Q//AAAACAAMAAwAAAgIDd3f//AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAADNwM/A0dCAgN3Q//AAAAAAAMAAwNHRgIDd3f//AQCLgM3Az8DR0Pvw3dD/8AAAAIAAwADA0dH7+93d//8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwADAAAAAAN3d//8AAAAAAAAAAAAAAAAAAAAAAAAAgADAAMAAAICA3d3//wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAzcDPwNHQgIDd0P/wAdEAgM3dz//R0YCA3d3//wEAi4DNwM/A0dD78N3Q//AB0Yv7zd3P/9HR+/vd3f//AQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAIuAAADPwAAAgIAAAP/wAAAAgAAAAMAAAICAAAD//wEAAADNwM/AAAAAAN3Q//AAAAAAAMAAwAAAAADd3f//AQCLgM3Az8AAAICA3dD/8AAAAIAAwADAAACAgN3d//8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAgAAA//AAAAAAAAAAAAAAgIAAAP//AQAAAM3Az8DR0ICA3dD/8AAAAAAAwADA0dGAgN3d//8BAIuAzcDPwNHQ+/Dd0P/wAAAAgADAAMDR0fv73d3//wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAADAAACAgAAA//8AAAAAAAAAAAAAAAAAAAAAAAAAAADAAMAAAAAA3d3//wAAAAAAAAAAAAAAAAAAAAAAAACAAMAAwAAAgIDd3f//AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgIAAAP/wAAAAgAAAAMAAAICAAAD//wEAAADNwM/A0dCAgN3Q//AB0QCAzd3P/9HRgIDd3f//AQCLgM3Az8DR0Pvw3dD/8AHRi/vN3c//0dH7+93d//8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAA0dCAgN3Q//AAAAAAAAAAANHRgIDd3f//AAAAAAAAAAAAAICAAAD/8AAAAAAAAAAAAACAgAAA//8BAAAAzcDPwNHQgIDd0P/wAAAAAADAAMDR0YCA3d3//wEAi4DNwM/A0dD78N3Q//AAAACAAMAAwNHR+/vd3f//AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAANHQgIDd0P/wAdEAgADAAMDR0YCA3d3//wAAAAAAAAAAAACAgAAA//AAAACAAAAAwAAAgIAAAP//AQAAAM3Az8DR0ICA3dD/8AHRAIDN3c//0dGAgN3d//8BAIuAzcDPwNHQ+/Dd0P/wAdGL+83dz//R0fv73d3//wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgIAAAP/wAAAAAAAAAAAAAICAAAD//wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQCLgM3Az8DR0Pvw3dD/8AAAAIAAwADA0dH7+93d//8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAICAAAD/8AAAAIAAAADAAACAgAAA//8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAi4DNwM/A0dD78N3Q//AB0Yv7zd3P/9HR+/vd3f//AQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAADNwM/AAAAAAN3Q//AAAAAAAMAAwAAAAADd3f//AQCLgM3Az8AAAICA3dD/8AAAAIAAwADAAACAgN3d//8BAAAAAAAAANHQgIDd0P/wAAAAAAAAAADR0YCA3d3//wAAAAAAAAAAAACAgAAA//AAAAAAAAAAAAAAgIAAAP//AQAAAM3Az8DR0ICA3dD/8AAAAAAAwADA0dGAgN3d//8BAIuAzcDPwNHQ+/Dd0P/wAAAAgADAAMDR0fv73d3//wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAAMAAAAAA3d3//wAAAAAAAAAAAAAAAAAAAAAAAACAAMAAwAAAgIDd3f//AQAAAAAAAADR0ICA3dD/8AHRAIAAwADA0dGAgN3d//8AAAAAAAAAAAAAgIAAAP/wAAAAgAAAAMAAAICAAAD//wEAAADNwM/A0dCAgN3Q//AB0QCAzd3P/9HRgIDd3f//AQCLgM3Az8DR0Pvw3dD/8AHRi/vN3c//0dH7+93d//8BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAi4AAAM/AAACAgAAA//AAAACAAAAAwAAAgIAAAP//AQAAAM3Az8AAAAAA3dD/8AAAAAAAwADAAAAAAN3d//8BAIuAzcDPwAAAgIDd0P/wAAAAgADAAMAAAICA3d3//wEAAAAAAAAA0dCAgN3Q//AAAAAAAAAAANHRgIDd3f//AQCLgAAAz8DR0Pvw3dD/8AAAAIAAAADA0dH7+93d//8BAAAAzcDPwNHQgIDd0P/wAAAAAADAAMDR0YCA3d3//wEAi4DNwM/A0dD78N3Q//AAAACAAMAAwNHR+/vd3f//AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAMAAAICAAAD//wAAAAAAAAAAAAAAAAAAAAAAAAAAAMAAwAAAAADd3f//AAAAAAAAAAAAAAAAAAAAAAAAAIAAwADAAACAgN3d//8BAAAAAAAAANHQgIDd0P/wAdEAgADAAMDR0YCA3d3//wEAi4AAAM/A0dD78N3Q//AB0Yv7AMDP/9HR+/vd3f//AQAAAM3Az8DR0ICA3dD/8AHRAIDN3c//0dGAgN3d//8BAIuAzcDPwNHQ+/Dd0P/wAdGL+83dz//R0fv73d3////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////+/////////////////////i7/f/8//z8uLn9/IiIAAP////////////////////////9/////P///f3///wAA////////////////////////////P/8//////yIiAAD/////////////////////////f/8//z///39/IiIAAP7/////////Li9/fyIvAA/+Lv9//z//Py4uf38iIgAA/////////////39///8AD////3////8///9/f///AAD+////Mj8wPy4vf38iLwAP/i7/fzIiMAAuLn9/IiIAAP7/dH8yPzA/Li8EDyIvAA/+LnQEMiIwAC4uBAQiIgAA/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////3////8///9/f///AAD///////////////////////////////////////////////////////////////////9//z//P///f38iIgAA////////////////////////////////////////////////////////f3///wAP////f////z///39///8AAP///////////////////////////////////////////v90fzI/MD8uLwQPIi8AD/4udAQyIjAALi4EBCIiAAD//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////z//P/////8iIgAA/////////////////////////3//P/8///9/fyIiAAD//////////////////////////////////////////////////////////////////////////////////////v///zI/MD8uL39/Ii8AD/4u/38yIjAALi5/fyIiAAD+/3R/Mj8wPy4vBA8iLwAP/i50BDIiMAAuLgQEIiIAAP////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////9/////P///f3///wAA////////////////////////////P/8//////yIiAAD/////////////////////////f/8//z///39/IiIAAP///////////////////////////////////////////////////////39///8AD////3////8///9/f///AAD+////Mj8wPy4vf38iLwAP/i7/fzIiMAAuLn9/IiIAAP7/dH8yPzA/Li8EDyIvAA/+LnQEMiIwAC4uBAQiIgAA/v/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////+/////////y4vf38iLwAP//////////8uLn9/IiIAAP////////////9/f///AA//////////////f3///wAA/v///zI/MD8uL39/Ii8AD///////P/8/Li5/fyIiAAD+/3R/Mj8wPy4vBA8iLwAP////f/8//z8uLgQEIiIAAP7////////////////////+Lv9//z//Py4uf38iIgAA/////////////////////////3////8///9/f///AAD///////////////////////////8//z//////IiIAAP////////////////////////9//z//P///f38iIgAA/v////////8uL39/Ii8AD/4u/3//P/8/Li5/fyIiAAD/////////////f3///wAP////f////z///39///8AAP7///8yPzA/Li9/fyIvAA/+Lv9/MiIwAC4uf38iIgAA/v90fzI/MD8uLwQPIi8AD/4udAQyIjAALi4EBCIiAAD//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////39///8AD/////////////9/f///AAD///////////////////////////////////////////7/dH8yPzA/Li8EDyIvAA////9//z//Py4uBAQiIgAA////////////////////////////////////////////////////////////////////f////z///39///8AAP///////////////////////////////////////////////////////////////////3//P/8///9/fyIiAAD///////////////////////////////////////////////////////9/f///AA////9/////P///f3///wAA///////////////////////////////////////////+/3R/Mj8wPy4vBA8iLwAP/i50BDIiMAAuLgQEIiIAAP7////////////////////////////////////////////////////////////////////////////////////+////Mj8wP/////8iLwAP//////8//z//////IiIAAP7/dH8yPzA///9/fyIvAA////9//z//P///f38iIgAA/v////////8uL39/Ii8AD///////////Li5/fyIiAAD/////////////f3///wAP/////////////39///8AAP7///8yPzA/Li9/fyIvAA///////z//Py4uf38iIgAA/v90fzI/MD8uLwQPIi8AD////3//P/8/Li4EBCIiAAD+/////////////////////i7/f/8//z8uLn9/IiIAAP////////////////////////9/////P///f3///wAA/v///zI/MD//////Ii8AD/4u/38yIjAALi5/fyIiAAD+/3R/Mj8wP///f38iLwAP/i50BDIiMAAuLgQEIiIAAP7/////////Li9/fyIvAA/+Lv9//z//Py4uf38iIgAA/////////////39///8AD////3////8///9/f///AAD+////Mj8wPy4vf38iLwAP/i7/fzIiMAAuLn9/IiIAAP7/dH8yPzA/Li8EDyIvAA/+LnQEMiIwAC4uBAQiIgAA/v/////////////////////////////////////////+/3R///8wP///f3///wAP////f////z///39///8AAP7///8yPzA//////yIvAA///////z//P/////8iIgAA/v90fzI/MD///39/Ii8AD////3//P/8///9/fyIiAAD+/////////y4vf38iLwAP//////////8uLn9/IiIAAP7/dH///zA/Li8EDyIvAA////9/////Py4uBAQiIgAA/v///zI/MD8uL39/Ii8AD///////P/8/Li5/fyIiAAD+/3R/Mj8wPy4vBA8iLwAP////f/8//z8uLgQEIiIAAP7////////////////////+Lv9//z//Py4uf38iIgAA/v90f///MD///39///8AD/4udAT/PzAALi4EBCIiAAD+////Mj8wP/////8iLwAP/i7/fzIiMAAuLn9/IiIAAP7/dH8yPzA///9/fyIvAA/+LnQEMiIwAC4uBAQiIgAA/v////////8uL39/Ii8AD/4u/3//P/8/Li5/fyIiAAD+/3R///8wPy4vBA8iLwAP/i50BP8/MAAuLgQEIiIAAP7///8yPzA/Li9/fyIvAA/+Lv9/MiIwAC4uf38iIgAA/v90fzI/MD8uLwQPIi8AD/4udAQyIjAALi4EBCIiAAA="
    }
   }
  ],
  "liars": [
   true,
   false,
   false,
   true,
   false,
   false,
   true,
   false,
   false,
   true,
   true,
   true,
   true,
   false,
   false,
   true
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
    "name": "Angus",
    "color": "white",
    "row": 0,
    "column": 0,
    "text": "At least one of these is true: Otis is a liar, or all of Lentil's neighbors are honest.",
    "hidden": false,
    "secret": null,
    "mentions": [
     6,
     9,
     11,
     13,
     14
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      0,
      6,
      9,
      11,
      13,
      14
     ],
     "table": "qapVVaqqVVU="
    }
   },
   {
    "name": "Biscuit",
    "color": "black",
    "row": 0,
    "column": 1,
    "text": "Exactly 2 of Ember, Otis and me are liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     3,
     13
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      1,
      3,
      13
     ],
     "table": "wg=="
    }
   },
   {
    "name": "Coco",
    "color": "orange",
    "row": 0,
    "column": 2,
    "text": "An odd number of the yellow cats are liars. Mew.",
    "hidden": false,
    "secret": null,
    "mentions": [
     8,
     10
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      2,
      8,
      10
     ],
     "table": "lg=="
    }
   },
   {
    "name": "Ember",
    "color": "grey",
    "row": 0,
    "column": 3,
    "text": "Hazel is the only honest cat among Felix, Hazel and me.",
    "hidden": false,
    "secret": null,
    "mentions": [
     4,
     6
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      3,
      4,
      6
     ],
     "table": "og=="
    }
   },
   {
    "name": "Felix",
    "color": "black",
    "row": 1,
    "column": 0,
    "text": "At least one of the cats in column 4 is a liar.",
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
      4,
      7,
      11,
      15
     ],
     "table": "NjMzMw=="
    }
   },
   {
    "name": "Gnocchi",
    "color": "orange",
    "row": 1,
    "column": 1,
    "text": "There are more honest cats among the black cats than in row 4.",
    "hidden": false,
    "secret": null,
    "mentions": [
     1,
     4,
     7,
     12,
     13,
     14,
     15
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      1,
      4,
      5,
      7,
      12,
      13,
      14,
      15
     ],
     "table": "8PDw8OHw4fDh8OHwh+GH4eHw4fCH4Yfhh+GH4Q+HD4c="
    }
   },
   {
    "name": "Hazel",
    "color": "orange",
    "row": 1,
    "column": 2,
    "text": "An odd number of the cats in row 3 are liars.",
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
     "table": "lmlplg=="
    }
   },
   {
    "name": "Inky",
    "color": "black",
    "row": 1,
    "column": 3,
    "text": "An odd number of the cats on the edges are liars.",
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
     "table": "lmlplpZpaZZplpZpaZaWaWmWlmlplpZplmlplpZpaZZplpZpaZaWaZZpaZaWaWmWlmlplpZpaZZplpZpaZaWaWmWlmlplpZplmlplpZpaZaWaWmWlmlplmmWlmlplpZplmlplpZpaZZplpZpaZaWaWmWlmlplpZplmlplpZpaZZplpZpaZaWaZZpaZaWaWmWlmlplpZpaZZplpZpaZaWaZZpaZaWaWmWaZaWaWmWlmlplpZpaZaWaZZpaZaWaWmWlmlplpZpaZZplpZpaZaWaWmWlmlplpZplmlplpZpaZZplpZpaZaWaZZpaZaWaWmWlmlplpZpaZZplpZpaZaWaWmWlmlplpZplmlplpZpaZaWaWmWlmlplmmWlmlplpZplmlplpZpaZZplpZpaZaWaWmWlmlplpZplmlplpZpaZaWaWmWlmlplmmWlmlplpZpaZaWaWmWlmmWaWmWlmlplmmWlmlplpZplmlplpZpaZaWaWmWlmlplmmWlmlplpZplmlplpZpaZZplpZpaZaWaWmWlmlplpZplmlplpZpaZZplpZpaZaWaZZpaZaWaWmWlmlplpZpaZZplpZpaZaWaWmWlmlplpZplmlplpZpaZaWaWmWlmlplmmWlmlplpZplmlplpZpaZZplpZpaZaWaWmWlmlplpZplmlplpZpaZY="
    }
   },
   {
    "name": "Jasper",
    "color": "yellow",
    "row": 2,
    "column": 0,
    "text": "Gnocchi and Kismet are both honest, or both liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     5,
     9
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      5,
      8,
      9
     ],
     "table": "aQ=="
    }
   },
   {
    "name": "Kismet",
    "color": "white",
    "row": 2,
    "column": 1,
    "text": "Mrow. There are at least 15 liars in total.",
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
     "table": "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP////////////////////////////////////////////////////////////////////////////////////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/////////////////////////////////////////////////////////////////////////////////////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/////////////////////////////////////////////////////////////////////////////////////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP////////////////////////////////////////////////////////////////////////////////////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/////////////////////////////////////////////////////////////////////////////////////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/////////////////////////////////////////////////////////////////////////////////////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP////////////////////////////////////////////////////////////////////////////////////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/////////////////////////////////////////////////////////////////////////////////////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/////////////////////////////////////////////////////////////////////////////////////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP////////////////////////////////////////////////////////////////////////////////////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/////////////////////////////////////////////////////////////////////////////////////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/////////////////////////////////////////////////////////////////////////////////////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP////////////////////////////////////////////////////////////////////////////////////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/////////////////////////////////////////////////////////////////////////////////////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/////////////////////////////////////////////////////////////////////////////////////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP////////////////////////////////////////////////////////////////////////////////////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/////////////////////////////////////////////////////////////////////////////////////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/////////////////////////////////////////////////////////////////////////////////////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP////////////////////////////////////////////////////////////////////////////////////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/////////////////////////////////////////////////////////////////////////////////////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/////////////////////////////////////////////////////////////////////////////////////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP////////////////////////////////////////////////////////////////////////////////////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/////////////////////////////////////////////////////////////////////////////////////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/////////////////////////////////////////////////////////////////////////////////////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP////////////////////////////////////////////////////////////////////////////////////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/////////////////////////////////////////////////////////////////////////////////////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/////////////////////////////////////////////////////////////////////////////////////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP////////////////////////////////////////////////////////////////////////////////////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/////////////////////////////////////////////////////////////////////////////////////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/////////////////////////////////////////////////////////////////////////////////////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP////////////////////////////////////////////////////////////////////////////////////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA////////////////////////////////////////////////////////////////////////////////////fwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/////////////////////////////////////////////////////////////////////////////////////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP////////////////////////////////////////////////////////////////////////////////////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/////////////////////////////////////////////////////////////////////////////////////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/////////////////////////////////////////////////////////////////////////////////////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP////////////////////////////////////////////////////////////////////////////////////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/////////////////////////////////////////////////////////////////////////////////////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/////////////////////////////////////////////////////////////////////////////////////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP////////////////////////////////////////////////////////////////////////////////////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/////////////////////////////////////////////////////////////////////////////////////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/////////////////////////////////////////////////////////////////////////////////////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP////////////////////////////////////////////////////////////////////////////////////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/////////////////////////////////////////////////////////////////////////////////////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/////////////////////////////////////////////////////////////////////////////////////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP////////////////////////////////////////////////////////////////////////////////////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/////////////////////////////////////////////////////////////////////////////////////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///////////////////////////////////////////////////////////////////////////////////9/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP////////////////////////////////////////////////////////////////////////////////////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/////////////////////////////////////////////////////////////////////////////////////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/////////////////////////////////////////////////////////////////////////////////////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP////////////////////////////////////////////////////////////////////////////////////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/////////////////////////////////////////////////////////////////////////////////////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/////////////////////////////////////////////////////////////////////////////////////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP////////////////////////////////////////////////////////////////////////////////////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA////////////////////////////////////////////////////////////////////////////////////fwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/////////////////////////////////////////////////////////////////////////////////////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP////////////////////////////////////////////////////////////////////////////////////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/////////////////////////////////////////////////////////////////////////////////////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///////////////////////////////////////////////////////////////////////////////////9/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP////////////////////////////////////////////////////////////////////////////////////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA////////////////////////////////////////////////////////////////////////////////////fwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///////////////////////////////////////////////////////////////////////////////////9/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgP////////////////////////////////////////9/////////////////////f/////////9/////f/9/fxc="
    }
   },
   {
    "name": "Lentil",
    "color": "yellow",
    "row": 2,
    "column": 2,
    "text": "All the honest cats in column 4 are connected. Mew.",
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
      10,
      11,
      15
     ],
     "table": "S/DD4Q=="
    }
   },
   {
    "name": "Mochi",
    "color": "brown",
    "row": 2,
    "column": 3,
    "text": "There are more liars among Jasper's neighbors than among the white cats. Meow.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     4,
     9,
     12,
     14
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      0,
      4,
      9,
      11,
      12,
      14
     ],
     "table": "RLvdIgD/RLs="
    }
   },
   {
    "name": "Nimbus",
    "color": "black",
    "row": 3,
    "column": 0,
    "text": "There are more honest cats in column 4 than among the brown cats. Mew.",
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
      12,
      15
     ],
     "table": "d4h3iA=="
    }
   },
   {
    "name": "Otis",
    "color": "grey",
    "row": 3,
    "column": 1,
    "text": "All the honest cats in row 1 are connected.",
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
      13
     ],
     "table": "CxP07A=="
    }
   },
   {
    "name": "Pickles",
    "color": "white",
    "row": 3,
    "column": 2,
    "text": "Biscuit is the only honest cat among Coco's neighbors.",
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
      3,
      6,
      14
     ],
     "table": "QL8="
    }
   },
   {
    "name": "Quill",
    "color": "brown",
    "row": 3,
    "column": 3,
    "text": "All the honest cats in my row are connected. Meow.",
    "hidden": false,
    "secret": null,
    "mentions": [
     12,
     13,
     14
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      12,
      13,
      14,
      15
     ],
     "table": "C+w="
    }
   }
  ],
  "liars": [
   false,
   true,
   true,
   true,
   false,
   false,
   true,
   true,
   true,
   true,
   true,
   true,
   true,
   true,
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
    "color": "black",
    "row": 0,
    "column": 0,
    "text": "Coco is honest, but Udon is a liar.",
    "hidden": false,
    "secret": null,
    "mentions": [
     2,
     14
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      0,
      2,
      14
     ],
     "table": "mg=="
    }
   },
   {
    "name": "Biscuit",
    "color": "yellow",
    "row": 0,
    "column": 1,
    "text": "All of the cats on the edges are the same: all honest, or all liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
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
     "table": "zczMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzEw="
    }
   },
   {
    "name": "Coco",
    "color": "brown",
    "row": 0,
    "column": 2,
    "text": "There are exactly 9 liars in total.",
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
     "table": "8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDwcPDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PBw8PDw8PDw8PDw8PDw8PDwcPDw8PDw8PBw8PDwcPBwcJjw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDwcPDw8PDw8PDw8PDw8PDw8HDw8PDw8PDwcPDw8HDwcHCY8PDw8PDw8PDw8PDw8PDwcPDw8PDw8PBw8PDwcPBwcJjw8PDw8PDwcPDw8HDwcHCY8PDwcPBwcJjwcHCYcJiY5vDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PBw8PDw8PDw8PDw8PDw8PDwcPDw8PDw8PBw8PDwcPBwcJjw8PDw8PDw8PDw8PDw8PBw8PDw8PDw8HDw8PBw8HBwmPDw8PDw8PBw8PDwcPBwcJjw8PBw8HBwmPBwcJhwmJjm8PDw8PDw8PDw8PDw8PDwcPDw8PDw8PBw8PDwcPBwcJjw8PDw8PDwcPDw8HDwcHCY8PDwcPBwcJjwcHCYcJiY5vDw8PDw8PBw8PDwcPBwcJjw8PBw8HBwmPBwcJhwmJjm8PDwcPBwcJjwcHCYcJiY5vBwcJhwmJjmcJiY5pjm5vHw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDwcPDw8PDw8PDw8PDw8PDw8HDw8PDw8PDwcPDw8HDwcHCY8PDw8PDw8PDw8PDw8PDwcPDw8PDw8PBw8PDwcPBwcJjw8PDw8PDwcPDw8HDwcHCY8PDwcPBwcJjwcHCYcJiY5vDw8PDw8PDw8PDw8PDw8HDw8PDw8PDwcPDw8HDwcHCY8PDw8PDw8HDw8PBw8HBwmPDw8HDwcHCY8HBwmHCYmObw8PDw8PDwcPDw8HDwcHCY8PDwcPBwcJjwcHCYcJiY5vDw8HDwcHCY8HBwmHCYmObwcHCYcJiY5nCYmOaY5ubx8PDw8PDw8PDw8PDw8PDwcPDw8PDw8PBw8PDwcPBwcJjw8PDw8PDwcPDw8HDwcHCY8PDwcPBwcJjwcHCYcJiY5vDw8PDw8PBw8PDwcPBwcJjw8PBw8HBwmPBwcJhwmJjm8PDwcPBwcJjwcHCYcJiY5vBwcJhwmJjmcJiY5pjm5vHw8PDw8PDwcPDw8HDwcHCY8PDwcPBwcJjwcHCYcJiY5vDw8HDwcHCY8HBwmHCYmObwcHCYcJiY5nCYmOaY5ubx8PDwcPBwcJjwcHCYcJiY5vBwcJhwmJjmcJiY5pjm5vHwcHCYcJiY5nCYmOaY5ubxcJiY5pjm5vGY5ubx5vHx8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PBw8PDw8PDw8PDw8PDw8PDwcPDw8PDw8PBw8PDwcPBwcJjw8PDw8PDw8PDw8PDw8PBw8PDw8PDw8HDw8PBw8HBwmPDw8PDw8PBw8PDwcPBwcJjw8PBw8HBwmPBwcJhwmJjm8PDw8PDw8PDw8PDw8PDwcPDw8PDw8PBw8PDwcPBwcJjw8PDw8PDwcPDw8HDwcHCY8PDwcPBwcJjwcHCYcJiY5vDw8PDw8PBw8PDwcPBwcJjw8PBw8HBwmPBwcJhwmJjm8PDwcPBwcJjwcHCYcJiY5vBwcJhwmJjmcJiY5pjm5vHw8PDw8PDw8PDw8PDw8PBw8PDw8PDw8HDw8PBw8HBwmPDw8PDw8PBw8PDwcPBwcJjw8PBw8HBwmPBwcJhwmJjm8PDw8PDw8HDw8PBw8HBwmPDw8HDwcHCY8HBwmHCYmObw8PBw8HBwmPBwcJhwmJjm8HBwmHCYmOZwmJjmmObm8fDw8PDw8PBw8PDwcPBwcJjw8PBw8HBwmPBwcJhwmJjm8PDwcPBwcJjwcHCYcJiY5vBwcJhwmJjmcJiY5pjm5vHw8PBw8HBwmPBwcJhwmJjm8HBwmHCYmOZwmJjmmObm8fBwcJhwmJjmcJiY5pjm5vFwmJjmmObm8Zjm5vHm8fHw8PDw8PDw8PDw8PDw8PDwcPDw8PDw8PBw8PDwcPBwcJjw8PDw8PDwcPDw8HDwcHCY8PDwcPBwcJjwcHCYcJiY5vDw8PDw8PBw8PDwcPBwcJjw8PBw8HBwmPBwcJhwmJjm8PDwcPBwcJjwcHCYcJiY5vBwcJhwmJjmcJiY5pjm5vHw8PDw8PDwcPDw8HDwcHCY8PDwcPBwcJjwcHCYcJiY5vDw8HDwcHCY8HBwmHCYmObwcHCYcJiY5nCYmOaY5ubx8PDwcPBwcJjwcHCYcJiY5vBwcJhwmJjmcJiY5pjm5vHwcHCYcJiY5nCYmOaY5ubxcJiY5pjm5vGY5ubx5vHx8PDw8PDw8PBw8PDwcPBwcJjw8PBw8HBwmPBwcJhwmJjm8PDwcPBwcJjwcHCYcJiY5vBwcJhwmJjmcJiY5pjm5vHw8PBw8HBwmPBwcJhwmJjm8HBwmHCYmOZwmJjmmObm8fBwcJhwmJjmcJiY5pjm5vFwmJjmmObm8Zjm5vHm8fHw8PDwcPBwcJjwcHCYcJiY5vBwcJhwmJjmcJiY5pjm5vHwcHCYcJiY5nCYmOaY5ubxcJiY5pjm5vGY5ubx5vHx8PBwcJhwmJjmcJiY5pjm5vFwmJjmmObm8Zjm5vHm8fHwcJiY5pjm5vGY5ubx5vHx8Jjm5vHm8fHw5vHx8PHw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDwcPDw8PDw8PDw8PDw8PDw8HDw8PDw8PDwcPDw8HDwcHCY8PDw8PDw8PDw8PDw8PDwcPDw8PDw8PBw8PDwcPBwcJjw8PDw8PDwcPDw8HDwcHCY8PDwcPBwcJjwcHCYcJiY5vDw8PDw8PDw8PDw8PDw8HDw8PDw8PDwcPDw8HDwcHCY8PDw8PDw8HDw8PBw8HBwmPDw8HDwcHCY8HBwmHCYmObw8PDw8PDwcPDw8HDwcHCY8PDwcPBwcJjwcHCYcJiY5vDw8HDwcHCY8HBwmHCYmObwcHCYcJiY5nCYmOaY5ubx8PDw8PDw8PDw8PDw8PDwcPDw8PDw8PBw8PDwcPBwcJjw8PDw8PDwcPDw8HDwcHCY8PDwcPBwcJjwcHCYcJiY5vDw8PDw8PBw8PDwcPBwcJjw8PBw8HBwmPBwcJhwmJjm8PDwcPBwcJjwcHCYcJiY5vBwcJhwmJjmcJiY5pjm5vHw8PDw8PDwcPDw8HDwcHCY8PDwcPBwcJjwcHCYcJiY5vDw8HDwcHCY8HBwmHCYmObwcHCYcJiY5nCYmOaY5ubx8PDwcPBwcJjwcHCYcJiY5vBwcJhwmJjmcJiY5pjm5vHwcHCYcJiY5nCYmOaY5ubxcJiY5pjm5vGY5ubx5vHx8PDw8PDw8PDw8PDw8PDw8HDw8PDw8PDwcPDw8HDwcHCY8PDw8PDw8HDw8PBw8HBwmPDw8HDwcHCY8HBwmHCYmObw8PDw8PDwcPDw8HDwcHCY8PDwcPBwcJjwcHCYcJiY5vDw8HDwcHCY8HBwmHCYmObwcHCYcJiY5nCYmOaY5ubx8PDw8PDw8HDw8PBw8HBwmPDw8HDwcHCY8HBwmHCYmObw8PBw8HBwmPBwcJhwmJjm8HBwmHCYmOZwmJjmmObm8fDw8HDwcHCY8HBwmHCYmObwcHCYcJiY5nCYmOaY5ubx8HBwmHCYmOZwmJjmmObm8XCYmOaY5ubxmObm8ebx8fDw8PDw8PDwcPDw8HDwcHCY8PDwcPBwcJjwcHCYcJiY5vDw8HDwcHCY8HBwmHCYmObwcHCYcJiY5nCYmOaY5ubx8PDwcPBwcJjwcHCYcJiY5vBwcJhwmJjmcJiY5pjm5vHwcHCYcJiY5nCYmOaY5ubxcJiY5pjm5vGY5ubx5vHx8PDw8HDwcHCY8HBwmHCYmObwcHCYcJiY5nCYmOaY5ubx8HBwmHCYmOZwmJjmmObm8XCYmOaY5ubxmObm8ebx8fDwcHCYcJiY5nCYmOaY5ubxcJiY5pjm5vGY5ubx5vHx8HCYmOaY5ubxmObm8ebx8fCY5ubx5vHx8Obx8fDx8PDw8PDw8PDw8PDw8PDw8PDwcPDw8PDw8PBw8PDwcPBwcJjw8PDw8PDwcPDw8HDwcHCY8PDwcPBwcJjwcHCYcJiY5vDw8PDw8PBw8PDwcPBwcJjw8PBw8HBwmPBwcJhwmJjm8PDwcPBwcJjwcHCYcJiY5vBwcJhwmJjmcJiY5pjm5vHw8PDw8PDwcPDw8HDwcHCY8PDwcPBwcJjwcHCYcJiY5vDw8HDwcHCY8HBwmHCYmObwcHCYcJiY5nCYmOaY5ubx8PDwcPBwcJjwcHCYcJiY5vBwcJhwmJjmcJiY5pjm5vHwcHCYcJiY5nCYmOaY5ubxcJiY5pjm5vGY5ubx5vHx8PDw8PDw8PBw8PDwcPBwcJjw8PBw8HBwmPBwcJhwmJjm8PDwcPBwcJjwcHCYcJiY5vBwcJhwmJjmcJiY5pjm5vHw8PBw8HBwmPBwcJhwmJjm8HBwmHCYmOZwmJjmmObm8fBwcJhwmJjmcJiY5pjm5vFwmJjmmObm8Zjm5vHm8fHw8PDwcPBwcJjwcHCYcJiY5vBwcJhwmJjmcJiY5pjm5vHwcHCYcJiY5nCYmOaY5ubxcJiY5pjm5vGY5ubx5vHx8PBwcJhwmJjmcJiY5pjm5vFwmJjmmObm8Zjm5vHm8fHwcJiY5pjm5vGY5ubx5vHx8Jjm5vHm8fHw5vHx8PHw8PDw8PDw8PDwcPDw8HDwcHCY8PDwcPBwcJjwcHCYcJiY5vDw8HDwcHCY8HBwmHCYmObwcHCYcJiY5nCYmOaY5ubx8PDwcPBwcJjwcHCYcJiY5vBwcJhwmJjmcJiY5pjm5vHwcHCYcJiY5nCYmOaY5ubxcJiY5pjm5vGY5ubx5vHx8PDw8HDwcHCY8HBwmHCYmObwcHCYcJiY5nCYmOaY5ubx8HBwmHCYmOZwmJjmmObm8XCYmOaY5ubxmObm8ebx8fDwcHCYcJiY5nCYmOaY5ubxcJiY5pjm5vGY5ubx5vHx8HCYmOaY5ubxmObm8ebx8fCY5ubx5vHx8Obx8fDx8PDw8PDwcPBwcJjwcHCYcJiY5vBwcJhwmJjmcJiY5pjm5vHwcHCYcJiY5nCYmOaY5ubxcJiY5pjm5vGY5ubx5vHx8PBwcJhwmJjmcJiY5pjm5vFwmJjmmObm8Zjm5vHm8fHwcJiY5pjm5vGY5ubx5vHx8Jjm5vHm8fHw5vHx8PHw8PDwcHCYcJiY5nCYmOaY5ubxcJiY5pjm5vGY5ubx5vHx8HCYmOaY5ubxmObm8ebx8fCY5ubx5vHx8Obx8fDx8PDwcJiY5pjm5vGY5ubx5vHx8Jjm5vHm8fHw5vHx8PHw8PCY5ubx5vHx8Obx8fDx8PDw5vHx8PHw8PDx8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PBw8PDw8PDw8PDw8PDw8PDwcPDw8PDw8PBw8PDwcPBwcJjw8PDw8PDw8PDw8PDw8PBw8PDw8PDw8HDw8PBw8HBwmPDw8PDw8PBw8PDwcPBwcJjw8PBw8HBwmPBwcJhwmJjm8PDw8PDw8PDw8PDw8PDwcPDw8PDw8PBw8PDwcPBwcJjw8PDw8PDwcPDw8HDwcHCY8PDwcPBwcJjwcHCYcJiY5vDw8PDw8PBw8PDwcPBwcJjw8PBw8HBwmPBwcJhwmJjm8PDwcPBwcJjwcHCYcJiY5vBwcJhwmJjmcJiY5pjm5vHw8PDw8PDw8PDw8PDw8PBw8PDw8PDw8HDw8PBw8HBwmPDw8PDw8PBw8PDwcPBwcJjw8PBw8HBwmPBwcJhwmJjm8PDw8PDw8HDw8PBw8HBwmPDw8HDwcHCY8HBwmHCYmObw8PBw8HBwmPBwcJhwmJjm8HBwmHCYmOZwmJjmmObm8fDw8PDw8PBw8PDwcPBwcJjw8PBw8HBwmPBwcJhwmJjm8PDwcPBwcJjwcHCYcJiY5vBwcJhwmJjmcJiY5pjm5vHw8PBw8HBwmPBwcJhwmJjm8HBwmHCYmOZwmJjmmObm8fBwcJhwmJjmcJiY5pjm5vFwmJjmmObm8Zjm5vHm8fHw8PDw8PDw8PDw8PDw8PDwcPDw8PDw8PBw8PDwcPBwcJjw8PDw8PDwcPDw8HDwcHCY8PDwcPBwcJjwcHCYcJiY5vDw8PDw8PBw8PDwcPBwcJjw8PBw8HBwmPBwcJhwmJjm8PDwcPBwcJjwcHCYcJiY5vBwcJhwmJjmcJiY5pjm5vHw8PDw8PDwcPDw8HDwcHCY8PDwcPBwcJjwcHCYcJiY5vDw8HDwcHCY8HBwmHCYmObwcHCYcJiY5nCYmOaY5ubx8PDwcPBwcJjwcHCYcJiY5vBwcJhwmJjmcJiY5pjm5vHwcHCYcJiY5nCYmOaY5ubxcJiY5pjm5vGY5ubx5vHx8PDw8PDw8PBw8PDwcPBwcJjw8PBw8HBwmPBwcJhwmJjm8PDwcPBwcJjwcHCYcJiY5vBwcJhwmJjmcJiY5pjm5vHw8PBw8HBwmPBwcJhwmJjm8HBwmHCYmOZwmJjmmObm8fBwcJhwmJjmcJiY5pjm5vFwmJjmmObm8Zjm5vHm8fHw8PDwcPBwcJjwcHCYcJiY5vBwcJhwmJjmcJiY5pjm5vHwcHCYcJiY5nCYmOaY5ubxcJiY5pjm5vGY5ubx5vHx8PBwcJhwmJjmcJiY5pjm5vFwmJjmmObm8Zjm5vHm8fHwcJiY5pjm5vGY5ubx5vHx8Jjm5vHm8fHw5vHx8PHw8PDw8PDw8PDw8PDw8PDw8PBw8PDw8PDw8HDw8PBw8HBwmPDw8PDw8PBw8PDwcPBwcJjw8PBw8HBwmPBwcJhwmJjm8PDw8PDw8HDw8PBw8HBwmPDw8HDwcHCY8HBwmHCYmObw8PBw8HBwmPBwcJhwmJjm8HBwmHCYmOZwmJjmmObm8fDw8PDw8PBw8PDwcPBwcJjw8PBw8HBwmPBwcJhwmJjm8PDwcPBwcJjwcHCYcJiY5vBwcJhwmJjmcJiY5pjm5vHw8PBw8HBwmPBwcJhwmJjm8HBwmHCYmOZwmJjmmObm8fBwcJhwmJjmcJiY5pjm5vFwmJjmmObm8Zjm5vHm8fHw8PDw8PDw8HDw8PBw8HBwmPDw8HDwcHCY8HBwmHCYmObw8PBw8HBwmPBwcJhwmJjm8HBwmHCYmOZwmJjmmObm8fDw8HDwcHCY8HBwmHCYmObwcHCYcJiY5nCYmOaY5ubx8HBwmHCYmOZwmJjmmObm8XCYmOaY5ubxmObm8ebx8fDw8PBw8HBwmPBwcJhwmJjm8HBwmHCYmOZwmJjmmObm8fBwcJhwmJjmcJiY5pjm5vFwmJjmmObm8Zjm5vHm8fHw8HBwmHCYmOZwmJjmmObm8XCYmOaY5ubxmObm8ebx8fBwmJjmmObm8Zjm5vHm8fHwmObm8ebx8fDm8fHw8fDw8PDw8PDw8PBw8PDwcPBwcJjw8PBw8HBwmPBwcJhwmJjm8PDwcPBwcJjwcHCYcJiY5vBwcJhwmJjmcJiY5pjm5vHw8PBw8HBwmPBwcJhwmJjm8HBwmHCYmOZwmJjmmObm8fBwcJhwmJjmcJiY5pjm5vFwmJjmmObm8Zjm5vHm8fHw8PDwcPBwcJjwcHCYcJiY5vBwcJhwmJjmcJiY5pjm5vHwcHCYcJiY5nCYmOaY5ubxcJiY5pjm5vGY5ubx5vHx8PBwcJhwmJjmcJiY5pjm5vFwmJjmmObm8Zjm5vHm8fHwcJiY5pjm5vGY5ubx5vHx8Jjm5vHm8fHw5vHx8PHw8PDw8PBw8HBwmPBwcJhwmJjm8HBwmHCYmOZwmJjmmObm8fBwcJhwmJjmcJiY5pjm5vFwmJjmmObm8Zjm5vHm8fHw8HBwmHCYmOZwmJjmmObm8XCYmOaY5ubxmObm8ebx8fBwmJjmmObm8Zjm5vHm8fHwmObm8ebx8fDm8fHw8fDw8PBwcJhwmJjmcJiY5pjm5vFwmJjmmObm8Zjm5vHm8fHwcJiY5pjm5vGY5ubx5vHx8Jjm5vHm8fHw5vHx8PHw8PBwmJjmmObm8Zjm5vHm8fHwmObm8ebx8fDm8fHw8fDw8Jjm5vHm8fHw5vHx8PHw8PDm8fHw8fDw8PHw8PDw8PDw8PDw8PDw8PDw8PDw8PDwcPDw8PDw8PBw8PDwcPBwcJjw8PDw8PDwcPDw8HDwcHCY8PDwcPBwcJjwcHCYcJiY5vDw8PDw8PBw8PDwcPBwcJjw8PBw8HBwmPBwcJhwmJjm8PDwcPBwcJjwcHCYcJiY5vBwcJhwmJjmcJiY5pjm5vHw8PDw8PDwcPDw8HDwcHCY8PDwcPBwcJjwcHCYcJiY5vDw8HDwcHCY8HBwmHCYmObwcHCYcJiY5nCYmOaY5ubx8PDwcPBwcJjwcHCYcJiY5vBwcJhwmJjmcJiY5pjm5vHwcHCYcJiY5nCYmOaY5ubxcJiY5pjm5vGY5ubx5vHx8PDw8PDw8PBw8PDwcPBwcJjw8PBw8HBwmPBwcJhwmJjm8PDwcPBwcJjwcHCYcJiY5vBwcJhwmJjmcJiY5pjm5vHw8PBw8HBwmPBwcJhwmJjm8HBwmHCYmOZwmJjmmObm8fBwcJhwmJjmcJiY5pjm5vFwmJjmmObm8Zjm5vHm8fHw8PDwcPBwcJjwcHCYcJiY5vBwcJhwmJjmcJiY5pjm5vHwcHCYcJiY5nCYmOaY5ubxcJiY5pjm5vGY5ubx5vHx8PBwcJhwmJjmcJiY5pjm5vFwmJjmmObm8Zjm5vHm8fHwcJiY5pjm5vGY5ubx5vHx8Jjm5vHm8fHw5vHx8PHw8PDw8PDw8PDwcPDw8HDwcHCY8PDwcPBwcJjwcHCYcJiY5vDw8HDwcHCY8HBwmHCYmObwcHCYcJiY5nCYmOaY5ubx8PDwcPBwcJjwcHCYcJiY5vBwcJhwmJjmcJiY5pjm5vHwcHCYcJiY5nCYmOaY5ubxcJiY5pjm5vGY5ubx5vHx8PDw8HDwcHCY8HBwmHCYmObwcHCYcJiY5nCYmOaY5ubx8HBwmHCYmOZwmJjmmObm8XCYmOaY5ubxmObm8ebx8fDwcHCYcJiY5nCYmOaY5ubxcJiY5pjm5vGY5ubx5vHx8HCYmOaY5ubxmObm8ebx8fCY5ubx5vHx8Obx8fDx8PDw8PDwcPBwcJjwcHCYcJiY5vBwcJhwmJjmcJiY5pjm5vHwcHCYcJiY5nCYmOaY5ubxcJiY5pjm5vGY5ubx5vHx8PBwcJhwmJjmcJiY5pjm5vFwmJjmmObm8Zjm5vHm8fHwcJiY5pjm5vGY5ubx5vHx8Jjm5vHm8fHw5vHx8PHw8PDwcHCYcJiY5nCYmOaY5ubxcJiY5pjm5vGY5ubx5vHx8HCYmOaY5ubxmObm8ebx8fCY5ubx5vHx8Obx8fDx8PDwcJiY5pjm5vGY5ubx5vHx8Jjm5vHm8fHw5vHx8PHw8PCY5ubx5vHx8Obx8fDx8PDw5vHx8PHw8PDx8PDw8PDw8PDw8PDw8PBw8PDwcPBwcJjw8PBw8HBwmPBwcJhwmJjm8PDwcPBwcJjwcHCYcJiY5vBwcJhwmJjmcJiY5pjm5vHw8PBw8HBwmPBwcJhwmJjm8HBwmHCYmOZwmJjmmObm8fBwcJhwmJjmcJiY5pjm5vFwmJjmmObm8Zjm5vHm8fHw8PDwcPBwcJjwcHCYcJiY5vBwcJhwmJjmcJiY5pjm5vHwcHCYcJiY5nCYmOaY5ubxcJiY5pjm5vGY5ubx5vHx8PBwcJhwmJjmcJiY5pjm5vFwmJjmmObm8Zjm5vHm8fHwcJiY5pjm5vGY5ubx5vHx8Jjm5vHm8fHw5vHx8PHw8PDw8PBw8HBwmPBwcJhwmJjm8HBwmHCYmOZwmJjmmObm8fBwcJhwmJjmcJiY5pjm5vFwmJjmmObm8Zjm5vHm8fHw8HBwmHCYmOZwmJjmmObm8XCYmOaY5ubxmObm8ebx8fBwmJjmmObm8Zjm5vHm8fHwmObm8ebx8fDm8fHw8fDw8PBwcJhwmJjmcJiY5pjm5vFwmJjmmObm8Zjm5vHm8fHwcJiY5pjm5vGY5ubx5vHx8Jjm5vHm8fHw5vHx8PHw8PBwmJjmmObm8Zjm5vHm8fHwmObm8ebx8fDm8fHw8fDw8Jjm5vHm8fHw5vHx8PHw8PDm8fHw8fDw8PHw8PDw8PDw8PDwcPBwcJjwcHCYcJiY5vBwcJhwmJjmcJiY5pjm5vHwcHCYcJiY5nCYmOaY5ubxcJiY5pjm5vGY5ubx5vHx8PBwcJhwmJjmcJiY5pjm5vFwmJjmmObm8Zjm5vHm8fHwcJiY5pjm5vGY5ubx5vHx8Jjm5vHm8fHw5vHx8PHw8PDwcHCYcJiY5nCYmOaY5ubxcJiY5pjm5vGY5ubx5vHx8HCYmOaY5ubxmObm8ebx8fCY5ubx5vHx8Obx8fDx8PDwcJiY5pjm5vGY5ubx5vHx8Jjm5vHm8fHw5vHx8PHw8PCY5ubx5vHx8Obx8fDx8PDw5vHx8PHw8PDx8PDw8PDw8PBwcJhwmJjmcJiY5pjm5vFwmJjmmObm8Zjm5vHm8fHwcJiY5pjm5vGY5ubx5vHx8Jjm5vHm8fHw5vHx8PHw8PBwmJjmmObm8Zjm5vHm8fHwmObm8ebx8fDm8fHw8fDw8Jjm5vHm8fHw5vHx8PHw8PDm8fHw8fDw8PHw8PDw8PDwcJiY5pjm5vGY5ubx5vHx8Jjm5vHm8fHw5vHx8PHw8PCY5ubx5vHx8Obx8fDx8PDw5vHx8PHw8PDx8PDw8PDw8Jjm5vHm8fHw5vHx8PHw8PDm8fHw8fDw8PHw8PDw8PDw5vHx8PHw8PDx8PDw8PDw8PHw8PDw8PDw8PDw8PDw8PA="
    }
   },
   {
    "name": "Doodle",
    "color": "black",
    "row": 0,
    "column": 3,
    "text": "All the honest cats in my row are connected.",
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
     "table": "C+w="
    }
   },
   {
    "name": "Echo",
    "color": "orange",
    "row": 1,
    "column": 0,
    "text": "Exactly 2 of Coco's neighbors are liars.",
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
      3,
      4,
      6
     ],
     "table": "eJY="
    }
   },
   {
    "name": "Gnocchi",
    "color": "black",
    "row": 1,
    "column": 1,
    "text": "All the liars in my row are connected.",
    "hidden": false,
    "secret": null,
    "mentions": [
     4,
     6,
     7
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      4,
      5,
      6,
      7
     ],
     "table": "BBw="
    }
   },
   {
    "name": "Kismet",
    "color": "black",
    "row": 1,
    "column": 2,
    "text": "Among the cats in my column, at least one is honest and at least one is a liar.",
    "hidden": false,
    "secret": null,
    "mentions": [
     2,
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
     "table": "MrM="
    }
   },
   {
    "name": "Lentil",
    "color": "yellow",
    "row": 1,
    "column": 3,
    "text": "There are more liars in row 4 than in column 3.",
    "hidden": false,
    "secret": null,
    "mentions": [
     2,
     6,
     10,
     12,
     13,
     14,
     15
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      2,
      6,
      7,
      10,
      12,
      13,
      14,
      15
     ],
     "table": "8PDh8OHwh+Hw8OHw4fCH4eHwh+GH4Q+H4fCH4YfhD4c="
    }
   },
   {
    "name": "Mochi",
    "color": "grey",
    "row": 2,
    "column": 0,
    "text": "An odd number of Quincy's neighbors are liars.",
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
      8,
      9,
      11,
      14
     ],
     "table": "lmlplg=="
    }
   },
   {
    "name": "Otis",
    "color": "orange",
    "row": 2,
    "column": 1,
    "text": "At least one of Tofu and Udon is honest.",
    "hidden": false,
    "secret": null,
    "mentions": [
     13,
     14
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      9,
      13,
      14
     ],
     "table": "lQ=="
    }
   },
   {
    "name": "Quincy",
    "color": "grey",
    "row": 2,
    "column": 2,
    "text": "At least one of these is true: Udon is a liar, or all of the cats above me are liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     2,
     6,
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
     "table": "eA8="
    }
   },
   {
    "name": "Ravioli",
    "color": "brown",
    "row": 2,
    "column": 3,
    "text": "Exactly one of my neighbors is a liar. Mrow.",
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
      11,
      15
     ],
     "table": "luE="
    }
   },
   {
    "name": "Sushi",
    "color": "yellow",
    "row": 3,
    "column": 0,
    "text": "An odd number of Biscuit, Coco and me are liars.",
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
      12
     ],
     "table": "Zg=="
    }
   },
   {
    "name": "Tofu",
    "color": "orange",
    "row": 3,
    "column": 1,
    "text": "There are as many liars in row 2 as in column 4.",
    "hidden": false,
    "secret": null,
    "mentions": [
     3,
     4,
     5,
     6,
     7,
     11,
     15
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      3,
      4,
      5,
      6,
      7,
      11,
      13,
      15
     ],
     "table": "KQIpApQplCnW/db9a9Zr1pQplClAlECUa9Zr1r9rv2s="
    }
   },
   {
    "name": "Udon",
    "color": "orange",
    "row": 3,
    "column": 2,
    "text": "There are more liars among Vinny's neighbors than in row 3.",
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
     "table": "AAD+/g=="
    }
   },
   {
    "name": "Vinny",
    "color": "brown",
    "row": 3,
    "column": 3,
    "text": "All of Biscuit's neighbors are the same: all honest, or all liars.",
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
      15
     ],
     "table": "gX4="
    }
   }
  ],
  "liars": [
   false,
   true,
   false,
   true,
   false,
   true,
   false,
   false,
   true,
   true,
   false,
   false,
   true,
   true,
   true,
   true
  ]
 },
 {
  "rows": 4,
  "cols": 4,
  "seed": 1032,
  "level": "tricky",
  "given": null,
  "cats": [
   {
    "name": "Biscuit",
    "color": "white",
    "row": 0,
    "column": 0,
    "text": "Gizmo and Juniper are both honest. Mrrp!",
    "hidden": false,
    "secret": null,
    "mentions": [
     5,
     8
    ],
    "mood": "happy",
    "clue": {
     "cats": [
      0,
      5,
      8
     ],
     "table": "qQ=="
    }
   },
   {
    "name": "Cricket",
    "color": "brown",
    "row": 0,
    "column": 1,
    "text": "Meow. All of Felix, Juniper and me are the same: all honest, or all liars.",
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
     "table": "Kw=="
    }
   },
   {
    "name": "Doodle",
    "color": "white",
    "row": 0,
    "column": 2,
    "text": "All of the cats on the edges are the same: all honest, or all liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     1,
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
     "table": "8fDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8HA="
    }
   },
   {
    "name": "Espresso",
    "color": "white",
    "row": 0,
    "column": 3,
    "text": "An odd number of the cats to my left are liars.",
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
    "name": "Felix",
    "color": "white",
    "row": 1,
    "column": 0,
    "text": "At least one of these is true: Lentil is a liar, or all of Cricket, Espresso and me are honest.",
    "hidden": false,
    "secret": null,
    "mentions": [
     1,
     3,
     10
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      1,
      3,
      4,
      10
     ],
     "table": "8Q8="
    }
   },
   {
    "name": "Gizmo",
    "color": "black",
    "row": 1,
    "column": 1,
    "text": "Mrow. All the honest cats in column 1 are connected.",
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
      5,
      8,
      12
     ],
     "table": "S/DD4Q=="
    }
   },
   {
    "name": "Honey",
    "color": "grey",
    "row": 1,
    "column": 2,
    "text": "An odd number of the black cats are liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     5,
     10,
     15
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      5,
      6,
      10,
      15
     ],
     "table": "lmk="
    }
   },
   {
    "name": "Indigo",
    "color": "orange",
    "row": 1,
    "column": 3,
    "text": "Pfft! All of the cats below me are liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     11,
     15
    ],
    "mood": "angry",
    "clue": {
     "cats": [
      7,
      11,
      15
     ],
     "table": "ag=="
    }
   },
   {
    "name": "Juniper",
    "color": "brown",
    "row": 2,
    "column": 0,
    "text": "An odd number of the brown cats are liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     1,
     11
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      1,
      8,
      11
     ],
     "table": "Wg=="
    }
   },
   {
    "name": "Kiwi",
    "color": "orange",
    "row": 2,
    "column": 1,
    "text": "There are at least 6 liars in total.",
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
     "table": "AAAAAAAAAIAAAACAAICA6AAAAIAAgIDoAICA6IDo6P4AAACAAICA6ACAgOiA6Oj+AICA6IDo6P6A6Oj+6P7+/////3//f38X/39/F38XFwH/f38XfxcXAX8XFwEXAQEA/39/F38XFwF/FxcBFwEBAH8XFwEXAQEAFwEBAAEAAAAAAACAAICA6ACAgOiA6Oj+AICA6IDo6P6A6Oj+6P7+/wCAgOiA6Oj+gOjo/uj+/v+A6Oj+6P7+/+j+/v/+/////39/F38XFwF/FxcBFwEBAH8XFwEXAQEAFwEBAAEAAAB/FxcBFwEBABcBAQABAAAAFwEBAAEAAAABAAAAAAAAAAAAAIAAgIDoAICA6IDo6P4AgIDogOjo/oDo6P7o/v7/AICA6IDo6P6A6Oj+6P7+/4Do6P7o/v7/6P7+//7/////f38XfxcXAX8XFwEXAQEAfxcXARcBAQAXAQEAAQAAAH8XFwEXAQEAFwEBAAEAAAAXAQEAAQAAAAEAAAAAAAAAAICA6IDo6P6A6Oj+6P7+/4Do6P7o/v7/6P7+//7///+A6Oj+6P7+/+j+/v/+////6P7+//7////+/////////38XFwEXAQEAFwEBAAEAAAAXAQEAAQAAAAEAAAAAAAAAFwEBAAEAAAABAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAACAAICA6ACAgOiA6Oj+AICA6IDo6P6A6Oj+6P7+/wCAgOiA6Oj+gOjo/uj+/v+A6Oj+6P7+/+j+/v/+/////39/F38XFwF/FxcBFwEBAH8XFwEXAQEAFwEBAAEAAAB/FxcBFwEBABcBAQABAAAAFwEBAAEAAAABAAAAAAAAAACAgOiA6Oj+gOjo/uj+/v+A6Oj+6P7+/+j+/v/+////gOjo/uj+/v/o/v7//v///+j+/v/+/////v////////9/FxcBFwEBABcBAQABAAAAFwEBAAEAAAABAAAAAAAAABcBAQABAAAAAQAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAICA6IDo6P6A6Oj+6P7+/4Do6P7o/v7/6P7+//7///+A6Oj+6P7+/+j+/v/+////6P7+//7////+/////////38XFwEXAQEAFwEBAAEAAAAXAQEAAQAAAAEAAAAAAAAAFwEBAAEAAAABAAAAAAAAAAEAAAAAAAAAAAAAAAAAAACA6Oj+6P7+/+j+/v/+////6P7+//7////+/////////+j+/v/+/////v/////////+////////////////////FwEBAAEAAAABAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAgIDoAICA6IDo6P4AgIDogOjo/oDo6P7o/v7/AICA6IDo6P6A6Oj+6P7+/4Do6P7o/v7/6P7+//7/////f38XfxcXAX8XFwEXAQEAfxcXARcBAQAXAQEAAQAAAH8XFwEXAQEAFwEBAAEAAAAXAQEAAQAAAAEAAAAAAAAAAICA6IDo6P6A6Oj+6P7+/4Do6P7o/v7/6P7+//7///+A6Oj+6P7+/+j+/v/+////6P7+//7////+/////////38XFwEXAQEAFwEBAAEAAAAXAQEAAQAAAAEAAAAAAAAAFwEBAAEAAAABAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAgIDogOjo/oDo6P7o/v7/gOjo/uj+/v/o/v7//v///4Do6P7o/v7/6P7+//7////o/v7//v////7/////////fxcXARcBAQAXAQEAAQAAABcBAQABAAAAAQAAAAAAAAAXAQEAAQAAAAEAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAIDo6P7o/v7/6P7+//7////o/v7//v////7/////////6P7+//7////+//////////7///////////////////8XAQEAAQAAAAEAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAICA6IDo6P6A6Oj+6P7+/4Do6P7o/v7/6P7+//7///+A6Oj+6P7+/+j+/v/+////6P7+//7////+/////////38XFwEXAQEAFwEBAAEAAAAXAQEAAQAAAAEAAAAAAAAAFwEBAAEAAAABAAAAAAAAAAEAAAAAAAAAAAAAAAAAAACA6Oj+6P7+/+j+/v/+////6P7+//7////+/////////+j+/v/+/////v/////////+////////////////////FwEBAAEAAAABAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIDo6P7o/v7/6P7+//7////o/v7//v////7/////////6P7+//7////+//////////7///////////////////8XAQEAAQAAAAEAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA6P7+//7////+//////////7////////////////////+/////////////////////////////////////////wEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAICA6ACAgOiA6Oj+AICA6IDo6P6A6Oj+6P7+/wCAgOiA6Oj+gOjo/uj+/v+A6Oj+6P7+/+j+/v/+/////39/F38XFwF/FxcBFwEBAH8XFwEXAQEAFwEBAAEAAAB/FxcBFwEBABcBAQABAAAAFwEBAAEAAAABAAAAAAAAAACAgOiA6Oj+gOjo/uj+/v+A6Oj+6P7+/+j+/v/+////gOjo/uj+/v/o/v7//v///+j+/v/+/////v////////9/FxcBFwEBABcBAQABAAAAFwEBAAEAAAABAAAAAAAAABcBAQABAAAAAQAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAICA6IDo6P6A6Oj+6P7+/4Do6P7o/v7/6P7+//7///+A6Oj+6P7+/+j+/v/+////6P7+//7////+/////////38XFwEXAQEAFwEBAAEAAAAXAQEAAQAAAAEAAAAAAAAAFwEBAAEAAAABAAAAAAAAAAEAAAAAAAAAAAAAAAAAAACA6Oj+6P7+/+j+/v/+////6P7+//7////+/////////+j+/v/+/////v/////////+////////////////////FwEBAAEAAAABAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAgOiA6Oj+gOjo/uj+/v+A6Oj+6P7+/+j+/v/+////gOjo/uj+/v/o/v7//v///+j+/v/+/////v////////9/FxcBFwEBABcBAQABAAAAFwEBAAEAAAABAAAAAAAAABcBAQABAAAAAQAAAAAAAAABAAAAAAAAAAAAAAAAAAAAgOjo/uj+/v/o/v7//v///+j+/v/+/////v/////////o/v7//v////7//////////v///////////////////xcBAQABAAAAAQAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACA6Oj+6P7+/+j+/v/+////6P7+//7////+/////////+j+/v/+/////v/////////+////////////////////FwEBAAEAAAABAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOj+/v/+/////v/////////+/////////////////////v////////////////////////////////////////8BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAICA6IDo6P6A6Oj+6P7+/4Do6P7o/v7/6P7+//7///+A6Oj+6P7+/+j+/v/+////6P7+//7////+/////////38XFwEXAQEAFwEBAAEAAAAXAQEAAQAAAAEAAAAAAAAAFwEBAAEAAAABAAAAAAAAAAEAAAAAAAAAAAAAAAAAAACA6Oj+6P7+/+j+/v/+////6P7+//7////+/////////+j+/v/+/////v/////////+////////////////////FwEBAAEAAAABAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIDo6P7o/v7/6P7+//7////o/v7//v////7/////////6P7+//7////+//////////7///////////////////8XAQEAAQAAAAEAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA6P7+//7////+//////////7////////////////////+/////////////////////////////////////////wEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACA6Oj+6P7+/+j+/v/+////6P7+//7////+/////////+j+/v/+/////v/////////+////////////////////FwEBAAEAAAABAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOj+/v/+/////v/////////+/////////////////////v////////////////////////////////////////8BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA6P7+//7////+//////////7////////////////////+/////////////////////////////////////////wEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD+////////////////////////////////////////////////////////////////////////////////////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAgIDoAICA6IDo6P4AgIDogOjo/oDo6P7o/v7/AICA6IDo6P6A6Oj+6P7+/4Do6P7o/v7/6P7+//7/////f38XfxcXAX8XFwEXAQEAfxcXARcBAQAXAQEAAQAAAH8XFwEXAQEAFwEBAAEAAAAXAQEAAQAAAAEAAAAAAAAAAICA6IDo6P6A6Oj+6P7+/4Do6P7o/v7/6P7+//7///+A6Oj+6P7+/+j+/v/+////6P7+//7////+/////////38XFwEXAQEAFwEBAAEAAAAXAQEAAQAAAAEAAAAAAAAAFwEBAAEAAAABAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAgIDogOjo/oDo6P7o/v7/gOjo/uj+/v/o/v7//v///4Do6P7o/v7/6P7+//7////o/v7//v////7/////////fxcXARcBAQAXAQEAAQAAABcBAQABAAAAAQAAAAAAAAAXAQEAAQAAAAEAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAIDo6P7o/v7/6P7+//7////o/v7//v////7/////////6P7+//7////+//////////7///////////////////8XAQEAAQAAAAEAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAICA6IDo6P6A6Oj+6P7+/4Do6P7o/v7/6P7+//7///+A6Oj+6P7+/+j+/v/+////6P7+//7////+/////////38XFwEXAQEAFwEBAAEAAAAXAQEAAQAAAAEAAAAAAAAAFwEBAAEAAAABAAAAAAAAAAEAAAAAAAAAAAAAAAAAAACA6Oj+6P7+/+j+/v/+////6P7+//7////+/////////+j+/v/+/////v/////////+////////////////////FwEBAAEAAAABAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIDo6P7o/v7/6P7+//7////o/v7//v////7/////////6P7+//7////+//////////7///////////////////8XAQEAAQAAAAEAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA6P7+//7////+//////////7////////////////////+/////////////////////////////////////////wEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgIDogOjo/oDo6P7o/v7/gOjo/uj+/v/o/v7//v///4Do6P7o/v7/6P7+//7////o/v7//v////7/////////fxcXARcBAQAXAQEAAQAAABcBAQABAAAAAQAAAAAAAAAXAQEAAQAAAAEAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAIDo6P7o/v7/6P7+//7////o/v7//v////7/////////6P7+//7////+//////////7///////////////////8XAQEAAQAAAAEAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgOjo/uj+/v/o/v7//v///+j+/v/+/////v/////////o/v7//v////7//////////v///////////////////xcBAQABAAAAAQAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADo/v7//v////7//////////v////////////////////7/////////////////////////////////////////AQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIDo6P7o/v7/6P7+//7////o/v7//v////7/////////6P7+//7////+//////////7///////////////////8XAQEAAQAAAAEAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA6P7+//7////+//////////7////////////////////+/////////////////////////////////////////wEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADo/v7//v////7//////////v////////////////////7/////////////////////////////////////////AQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP7///////////////////////////////////////////////////////////////////////////////////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAICA6IDo6P6A6Oj+6P7+/4Do6P7o/v7/6P7+//7///+A6Oj+6P7+/+j+/v/+////6P7+//7////+/////////38XFwEXAQEAFwEBAAEAAAAXAQEAAQAAAAEAAAAAAAAAFwEBAAEAAAABAAAAAAAAAAEAAAAAAAAAAAAAAAAAAACA6Oj+6P7+/+j+/v/+////6P7+//7////+/////////+j+/v/+/////v/////////+////////////////////FwEBAAEAAAABAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIDo6P7o/v7/6P7+//7////o/v7//v////7/////////6P7+//7////+//////////7///////////////////8XAQEAAQAAAAEAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA6P7+//7////+//////////7////////////////////+/////////////////////////////////////////wEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACA6Oj+6P7+/+j+/v/+////6P7+//7////+/////////+j+/v/+/////v/////////+////////////////////FwEBAAEAAAABAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOj+/v/+/////v/////////+/////////////////////v////////////////////////////////////////8BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA6P7+//7////+//////////7////////////////////+/////////////////////////////////////////wEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD+////////////////////////////////////////////////////////////////////////////////////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIDo6P7o/v7/6P7+//7////o/v7//v////7/////////6P7+//7////+//////////7///////////////////8XAQEAAQAAAAEAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA6P7+//7////+//////////7////////////////////+/////////////////////////////////////////wEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADo/v7//v////7//////////v////////////////////7/////////////////////////////////////////AQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP7///////////////////////////////////////////////////////////////////////////////////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA6P7+//7////+//////////7////////////////////+/////////////////////////////////////////wEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD+////////////////////////////////////////////////////////////////////////////////////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP7///////////////////////////////////////////////////////////////////////////////////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/////////////////////////////////////////////////////////////////////////////////////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA="
    }
   },
   {
    "name": "Lentil",
    "color": "black",
    "row": 2,
    "column": 2,
    "text": "At least one of Doodle and Noodle is honest.",
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
      10,
      12
     ],
     "table": "kw=="
    }
   },
   {
    "name": "Mango",
    "color": "brown",
    "row": 2,
    "column": 3,
    "text": "All the liars in row 4 are connected.",
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
      11,
      12,
      13,
      14,
      15
     ],
     "table": "alqqWQ=="
    }
   },
   {
    "name": "Noodle",
    "color": "orange",
    "row": 3,
    "column": 0,
    "text": "I'm the only liar among the orange cats.",
    "hidden": false,
    "secret": null,
    "mentions": [
     7,
     9,
     14
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      7,
      9,
      12,
      14
     ],
     "table": "4PA="
    }
   },
   {
    "name": "Oreo",
    "color": "grey",
    "row": 3,
    "column": 1,
    "text": "Mew. At least one of the white cats is a liar.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     2,
     3,
     4
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      0,
      2,
      3,
      4,
      13
     ],
     "table": "/v8BAA=="
    }
   },
   {
    "name": "Pickles",
    "color": "orange",
    "row": 3,
    "column": 2,
    "text": "All of the cats in row 1 are liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     1,
     2,
     3
    ],
    "mood": "angry",
    "clue": {
     "cats": [
      0,
      1,
      2,
      3,
      14
     ],
     "table": "AID/fw=="
    }
   },
   {
    "name": "Queenie",
    "color": "black",
    "row": 3,
    "column": 3,
    "text": "There are more liars among Indigo's neighbors than in column 2.",
    "hidden": false,
    "secret": null,
    "mentions": [
     1,
     3,
     5,
     6,
     9,
     11,
     13
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      1,
      3,
      5,
      6,
      9,
      11,
      13,
      15
     ],
     "table": "BE0ABE3fBE0ABAAABE0ABPuy//uyIPuy//v///uy//s="
    }
   }
  ],
  "liars": [
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
   true,
   true,
   true,
   false,
   true,
   false
  ]
 },
 {
  "rows": 4,
  "cols": 4,
  "seed": 1033,
  "level": "tricky",
  "given": null,
  "cats": [
   {
    "name": "Apricot",
    "color": "brown",
    "row": 0,
    "column": 0,
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
      0,
      8,
      9,
      10,
      11
     ],
     "table": "VlVVlQ=="
    }
   },
   {
    "name": "Biscuit",
    "color": "yellow",
    "row": 0,
    "column": 1,
    "text": "There are more liars among the brown cats than in row 2.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     4,
     5,
     6,
     7,
     15
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      0,
      1,
      4,
      5,
      6,
      7,
      15
     ],
     "table": "xszMzMbMzMxjxsbMY8bGzA=="
    }
   },
   {
    "name": "Cricket",
    "color": "grey",
    "row": 0,
    "column": 2,
    "text": "Kiwi is the only liar among Kiwi, Rolo and me.",
    "hidden": false,
    "secret": null,
    "mentions": [
     7,
     13
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      2,
      7,
      13
     ],
     "table": "rg=="
    }
   },
   {
    "name": "Dusty",
    "color": "white",
    "row": 0,
    "column": 3,
    "text": "There are more honest cats among the grey cats than in column 3. Meow.",
    "hidden": false,
    "secret": null,
    "mentions": [
     2,
     6,
     8,
     10,
     14
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      2,
      3,
      6,
      8,
      10,
      14
     ],
     "table": "zMzMzMzMPMw="
    }
   },
   {
    "name": "Fig",
    "color": "white",
    "row": 1,
    "column": 0,
    "text": "At least one of these is true: Goose is honest, or all of the corner cats are honest.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     3,
     5,
     12,
     15
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      0,
      3,
      4,
      5,
      12,
      15
     ],
     "table": "D+EP8A/wD/A="
    }
   },
   {
    "name": "Goose",
    "color": "black",
    "row": 1,
    "column": 1,
    "text": "All of Apricot, Biscuit and me are honest.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     1
    ],
    "mood": "happy",
    "clue": {
     "cats": [
      0,
      1,
      5
     ],
     "table": "8Q=="
    }
   },
   {
    "name": "Juniper",
    "color": "orange",
    "row": 1,
    "column": 2,
    "text": "An odd number of the cats in column 4 are liars.",
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
      6,
      7,
      11,
      15
     ],
     "table": "lmlplg=="
    }
   },
   {
    "name": "Kiwi",
    "color": "brown",
    "row": 1,
    "column": 3,
    "text": "Mrow. At least 2 of the cats in my column are liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     3,
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
     "table": "JDI="
    }
   },
   {
    "name": "Loki",
    "color": "grey",
    "row": 2,
    "column": 0,
    "text": "All the honest cats are connected.",
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
     "table": "//+7u9/fi4v/87uz39GLgA//C7sP3wuLA/MDswHRAIAAAERE/v50dAAMREz+/3R/8AD0RP7+9HT8DPxM////f///u7vf34uL//MDAN/Ri4AP/wu7D98LiwPzAAAB0QCAAABERP7+dHT8//z//v90f/AA9ET+/vR0/////////3///7u739+Li//zu7Pf0YuAD/8LuwEBAAAD8wOzAdEAgAAARET+/nR0AAxETP7/dH/wAPRE//////wM/Ez///9///+7u9/fi4v/8wMA39GLgA//AAABAQAAA/MAAAHRAIAAAERE/v50dPz//P/+/3R/////////////////////f///u7vf34uLAwADAAEAAAAP/wu7D98LiwPzA7MB0QCAAABERP7+dHT8//z///////AA9ET+/vR0/Az8TP///3///7u739+LiwMAAAABAAAAD/8Luw/fC4sD8wAAAdEAgAAARET+/nR0///////////wAPRE/v70dP////////9///+7uwEBAAADAAMAAQAAAA//C7sBAQAAA/MDswHRAIAAAERE//////z//P//////8AD0RP/////8DPxM////f///AAABAQAAAwAAAAEAAAAP/wAAAQEAAAPzAAAB0QCA/////////////////////////////////////////3///7u739+Li//zu7Pf0YuAD/8Luw/fC4sD8wOzAdEAgAAARET+/nR0AAxETP7/dH/wAPRE/v70dPwM/Ez///9///8AAAEBAAADAAAAAQAAAA//AAABAQAAAAAAAAAAAAAAAERE/v50dPz//P/+/3R/8AD0RP7+9HT/////////f///u7vf34uL//O7s9/Ri4AP/wu7AQEAAAPzA7MB0QCAAABERP7+dHQADERM/v90f/AA9ET//////Az8TP///3///wAAAQEAAAMAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAARET+/nR0/P/8//7/dH////////////////////9///+7u9/fi4sDAAMAAQAAAA//C7sP3wuLA/MDswHRAIAAAERE/v50dPz//P//////8AD0RP7+9HT8DPxM////f///AAABAQAAAAAAAAAAAAAP/wAAAQEAAAAAAAAAAAAAAABERP7+dHT///////////AA9ET+/vR0/////////3///7u7AQEAAAMAAwABAAAAD/8LuwEBAAAD8wOzAdEAgAAARET//////P/8///////wAPRE//////wM/Ez///9/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/////////////////////////////////////////f///u7vf34uL//O7s9/Ri4AP/wu7D98LiwPzA7MB0QCA/////////////////////////////////////////////wAAAQEAAAMAAAABAAAAD/8AAAEBAAAAAAAAAAAAAP////////////////////////////////////////////+7uwEBAAADAAMAAQAAAAAAAAAAAAAAAAAAAAAAAAD/////////////////////////////////////////////AAABAQAAAwAAAAEAAAAAAAAAAAAAAAAAAAAAAAAA/////////////////////////////////////////////7u739+LiwMAAwABAAAAD/8Luw/fC4sD8wOzAdEAgP////////////////////////////////////////////8AAAEBAAAAAAAAAAAAAA//AAABAQAAAAAAAAAAAAD//////////////////////////////////////////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//////////////////////////////////////////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP////////////////////////////////////////////+7u9/fi4v/87uz39GLgA//C7sP3wuLA/MDswHRAIAAAERE/v50dAAMREz+/3R/8AD0RP7+9HT8DPxM////f///AAABAQAAAwAAAAEAAAAP/wAAAQEAAAAAAAAAAAAAAABERP7+dHT8//z//v90f/AA9ET+/vR0/////////3///7u7AQEAAAMAAwABAAAAAAAAAAAAAAAAAAAAAAAAAAAARET//////P/8//////////////////////////////8AAAEBAAADAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAERE/v50dPz//P/+/3R/////////////////////f///u7vf34uLAwADAAEAAAAP/wu7D98LiwPzA7MB0QCAAABERP7+dHT8//z///////AA9ET+/vR0/Az8TP///3///wAAAQEAAAAAAAAAAAAAD/8AAAEBAAAAAAAAAAAAAAAARET+/nR0///////////wAPRE/v70dP////////9/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//////////////////////////////////////////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/////////////////////////////////////////3///7u739+Li//zu7Pf0YuAD/8Luw/fC4sD8wOzAdEAgAAARET+/nR0AAxETP7/dH/wAPRE/v70dPwM/Ez///9///8AAAEBAAADAAAAAQAAAA//AAABAQAAAAAAAAAAAAD/////////////////////////////////////////////u7sBAQAAAwADAAEAAAAAAAAAAAAAAAAAAAAAAAAAAABERP/////8//z//////////////////////////////wAAAQEAAAMAAAABAAAAAAAAAAAAAAAAAAAAAAAAAP//////////////////////////////////////////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//////////////////////////////////////////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//////////////////////////////////////////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP//////////////////////////////////////////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/////////////////////////////////////////////u7vf34uL//O7s9/Ri4AP/wu7D98LiwPzA7MB0QCAAABERP7+dHQADERM/v90f/AA9ET+/vR0/Az8TP///38AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP////////////////////////////////////////////+7uwEBAAADAAMAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAERE//////z//P///////////////////////////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//////////////////////////////////////////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP//////////////////////////////////////////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//////////////////////////////////////////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//////////////////////////////////////////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP////////////////////////////////////////////+7u9/fi4v/87uz39GLgA//C7sP3wuLA/MDswHRAID/////////////////////////////////////////////AAABAQAAAwAAAAEAAAAP/wAAAQEAAAAAAAAAAAAA/////////////////////////////////////////////7u7AQEAAAMAAwABAAAAAAAAAAAAAAAAAAAAAAAAAP////////////////////////////////////////////8AAAEBAAADAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAD//////////////////////////////////////////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//////////////////////////////////////////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP//////////////////////////////////////////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//////////////////////////////////////////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/////////////////////////////////////////////7u739+Li//zu7Pf0YuAD/8Luw/fC4sD8wOzAdEAgAAARET+/nR0AAxETP7/dH/wAPRE/v70dPwM/Ez///9///8AAAEBAAADAAAAAQAAAA//AAABAQAAAAAAAAAAAAAAAERE/v50dPz//P/+/3R/8AD0RP7+9HT/////////f///u7sBAQAAAwADAAEAAAAAAAAAAAAAAAAAAAAAAAAAAABERP/////8//z//////////////////////////////wAAAQEAAAMAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAARET+/nR0/P/8//7/dH////////////////////9/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//////////////////////////////////////////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//////////////////////////////////////////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP//////////////////////////////////////////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/////////////////////////////////////////////u7vf34uL//O7s9/Ri4AP/wu7D98LiwPzA7MB0QCAAABERP7+dHQADERM/v90f/AA9ET+/vR0/Az8TP///3///7u739+Li//zAwDf0YuAD/8Luw/fC4sD8wAAAdEAgAAARET+/nR0/P/8//7/dH/wAPRE/v70dP////////9///+7uwEBAAADAAMAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAERE//////z//P//////////////////////////////AAABAQAAAwAAAAEAAAAAAAAAAAAAAAAAAAAAAAAA/////////////////////////////////////////////7u739+LiwMAAwABAAAAD/8Luw/fC4sD8wOzAdEAgAAARET+/nR0/P/8///////wAPRE/v70dPwM/Ez///9///+7u9/fi4sDAAAAAQAAAA//C7sP3wuLA/MAAAHRAIAAAERE/v50dP//////////8AD0RP7+9HT/////////f///u7sBAQAAAwADAAEAAAAP/wu7AQEAAAPzA7MB0QCAAABERP/////8//z///////AA9ET//////Az8TP///3///wAAAQEAAAMAAAABAAAAD/8AAAEBAAAD8wAAAdEAgP////////////////////////////////////////9///+7u9/fi4v/87uz39GLgA//C7sP3wuLA/MDswHRAIAAAERE/v50dAAMREz+/3R/8AD0RP7+9HT8DPxM////f///AAABAQAAAwAAAAEAAAAP/wAAAQEAAAAAAAAAAAAAAABERP7+dHT8//z//v90f/AA9ET+/vR0/////////3///7u7AQEAAAMAAwABAAAAAAAAAAAAAAAAAAAAAAAAAAAARET//////P/8////////////////////////////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/////////////////////////////////////////////u7vf34uLAwADAAEAAAAP/wu7D98LiwPzA7MB0QCAAABERP7+dHT8//z///////AA9ET+/vR0/Az8TP///3///wAAAQEAAAAAAAAAAAAAD/8AAAEBAAAAAAAAAAAAAAAARET+/nR0///////////wAPRE/v70dP////////9///+7uwEBAAADAAMAAQAAAA//C7sBAQAAA/MDswHRAIAAAERE//////z//P//////8AD0RP/////8DPxM////fwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/////////////////////////////////////////3///7u739+Li//zu7Pf0YuAD/8Luw/fC4sD8wOzAdEAgP////////////////////////////////////////////8AAAEBAAADAAAAAQAAAA//AAABAQAAAAAAAAAAAAD//////////////////////////////////////////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//////////////////////////////////////////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP////////////////////////////////////////////+7u9/fi4sDAAMAAQAAAA//C7sP3wuLA/MDswHRAID/////////////////////////////////////////////AAABAQAAAAAAAAAAAAAP/wAAAQEAAAAAAAAAAAAA//////////////////////////////////////////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP//////////////////////////////////////////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/////////////////////////////////////////////u7vf34uL//O7s9/Ri4AP/wu7D98LiwPzA7MB0QCAAABERP7+dHQADERM/v90f/AA9ET+/vR0/Az8TP///3///wAAAQEAAAMAAAABAAAAD/8AAAEBAAAAAAAAAAAAAAAARET+/nR0/P/8//7/dH/wAPRE/v70dP////////9/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//////////////////////////////////////////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/////////////////////////////////////////////7u739+LiwMAAwABAAAAD/8Luw/fC4sD8wOzAdEAgAAARET+/nR0/P/8///////wAPRE/v70dPwM/Ez///9///8AAAEBAAAAAAAAAAAAAA//AAABAQAAAAAAAAAAAAAAAERE/v50dP//////////8AD0RP7+9HT/////////fwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//////////////////////////////////////////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP////////////////////////////////////////////+7u9/fi4v/87uz39GLgA//C7sP3wuLA/MDswHRAIAAAERE/v50dAAMREz+/3R/8AD0RP7+9HT8DPxM////f///AAABAQAAAwAAAAEAAAAP/wAAAQEAAAAAAAAAAAAA/////////////////////////////////////////////7u7AQEAAAMAAwABAAAAAAAAAAAAAAAAAAAAAAAAAAAARET//////P/8//////////////////////////////8AAAEBAAADAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAD/////////////////////////////////////////////u7vf34uLAwADAAEAAAAP/wu7D98LiwPzA7MB0QCAAABERP7+dHT8//z///////AA9ET+/vR0/Az8TP///3///wAAAQEAAAAAAAAAAAAAD/8AAAEBAAAAAAAAAAAAAP////////////////////////////////////////////+7uwEBAAADAAMAAQAAAA//C7sBAQAAA/MDswHRAIAAAERE//////z//P//////8AD0RP/////8DPxM////f///AAABAQAAAwAAAAEAAAAP/wAAAQEAAAPzAAAB0QCA/////////////////////////////////////////3///7u739+Li//zu7Pf0YuAD/8Luw/fC4sD8wOzAdEAgAAARET+/nR0AAxETP7/dH/wAPRE/v70dPwM/Ez///9/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/////////////////////////////////////////////u7sBAQAAAwADAAEAAAAAAAAAAAAAAAAAAAAAAAAAAABERP/////8//z///////////////////////////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP////////////////////////////////////////////+7u9/fi4sDAAMAAQAAAA//C7sP3wuLA/MDswHRAIAAAERE/v50dPz//P//////8AD0RP7+9HT8DPxM////fwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/////////////////////////////////////////////7u7AQEAAAMAAwABAAAAD/8LuwEBAAAD8wOzAdEAgAAARET//////P/8///////wAPRE//////wM/Ez///9/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/////////////////////////////////////////////u7vf34uL//O7s9/Ri4AP/wu7D98LiwPzA7MB0QCA/////////////////////////////////////////////wAAAQEAAAMAAAABAAAAD/8AAAEBAAAAAAAAAAAAAP////////////////////////////////////////////+7uwEBAAADAAMAAQAAAAAAAAAAAAAAAAAAAAAAAAD/////////////////////////////////////////////AAABAQAAAwAAAAEAAAAAAAAAAAAAAAAAAAAAAAAA/////////////////////////////////////////////7u739+LiwMAAwABAAAAD/8Luw/fC4sD8wOzAdEAgP////////////////////////////////////////////8AAAEBAAAAAAAAAAAAAA//AAABAQAAAAAAAAAAAAD/////////////////////////////////////////////u7sBAQAAAwADAAEAAAAP/wu7AQEAAAPzA7MB0QCA/////////////////////////////////////////////wAAAQEAAAMAAAABAAAAD/8AAAEBAAAD8wAAAdEAgP////////////////////////////////////////////+7u9/fi4v/87uz39GLgA//C7sP3wuLA/MDswHRAIAAAERE/v50dAAMREz+/3R/8AD0RP7+9HT8DPxM////f///AAABAQAAAwAAAAEAAAAP/wAAAQEAAAAAAAAAAAAAAABERP7+dHT8//z//v90f/AA9ET+/vR0/////////3///7u7AQEAAAMAAwABAAAAAAAAAAAAAAAAAAAAAAAAAAAARET//////P/8//////////////////////////////8AAAEBAAADAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAERE/v50dPz//P/+/3R/////////////////////////u7vf34uLAwADAAEAAAAP/wu7D98LiwPzA7MB0QCAAABERP7+dHT8//z///////AA9ET+/vR0/Az8TP///3///wAAAQEAAAAAAAAAAAAAD/8AAAEBAAAAAAAAAAAAAAAARET+/nR0///////////wAPRE/v70dP////////////+7uwEBAAADAAMAAQAAAA//C7sBAQAAA/MDswHRAIAAAERE//////z//P//////8AD0RP/////8DPxM////////AAABAQAAAwAAAAEAAAAP/wAAAQEAAAPzAAAB0QAAAABERP7+dHT8//z//v90//AA9ET+/vT0/Az8zP6u9Ow="
    }
   },
   {
    "name": "Mochi",
    "color": "black",
    "row": 2,
    "column": 1,
    "text": "An odd number of the cats in my column are liars. Mrow.",
    "hidden": false,
    "secret": null,
    "mentions": [
     1,
     5,
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
     "table": "Zpk="
    }
   },
   {
    "name": "Nimbus",
    "color": "yellow",
    "row": 2,
    "column": 2,
    "text": "An odd number of the cats in the middle are liars. Mew.",
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
     "table": "lpY="
    }
   },
   {
    "name": "Oreo",
    "color": "yellow",
    "row": 2,
    "column": 3,
    "text": "All of the corner cats are the same: all honest, or all liars.",
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
    "name": "Queenie",
    "color": "yellow",
    "row": 3,
    "column": 0,
    "text": "Among Biscuit's neighbors, at least one is honest and at least one is a liar.",
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
      12
     ],
     "table": "foE="
    }
   },
   {
    "name": "Rolo",
    "color": "orange",
    "row": 3,
    "column": 1,
    "text": "Apricot and I are opposites: one is honest, the other is a liar.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      0,
      13
     ],
     "table": "Cg=="
    }
   },
   {
    "name": "Sushi",
    "color": "black",
    "row": 3,
    "column": 2,
    "text": "At least one of the cats in column 1 is a liar.",
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
     "table": "/v8BAA=="
    }
   },
   {
    "name": "Xander",
    "color": "brown",
    "row": 3,
    "column": 3,
    "text": "There are more liars among Loki's neighbors than among my neighbors. Meow.",
    "hidden": false,
    "secret": null,
    "mentions": [
     4,
     9,
     11,
     12,
     14
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      4,
      9,
      11,
      12,
      14,
      15
     ],
     "table": "ju8IjnEQ93E="
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
   true,
   true,
   true,
   false,
   false
  ]
 }
];
