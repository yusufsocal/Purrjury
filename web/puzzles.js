// Made by export.py, don't edit by hand
const PUZZLES = [
 {
  "rows": 3,
  "cols": 3,
  "seed": 109,
  "level": "easy",
  "given": 4,
  "cats": [
   {
    "name": "Ash",
    "color": "grey",
    "row": 0,
    "column": 0,
    "text": "Mrrrow mrrp mew.",
    "hidden": true,
    "secret": "I smell a rat. At least one of the cats below me is a liar.",
    "mentions": [],
    "mood": "neutral",
    "clue": null
   },
   {
    "name": "Bagel",
    "color": "grey",
    "row": 0,
    "column": 1,
    "text": "Among Dumpling, Honey and me, at least one is honest and at least one is a liar.",
    "hidden": false,
    "secret": null,
    "mentions": [
     3,
     7
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      1,
      3,
      7
     ],
     "table": "1A=="
    }
   },
   {
    "name": "Coco",
    "color": "orange",
    "row": 0,
    "column": 2,
    "text": "Ash and Ember are opposites: one is honest, the other is a liar.",
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
     "table": "lg=="
    }
   },
   {
    "name": "Dumpling",
    "color": "white",
    "row": 1,
    "column": 0,
    "text": "Meow. At least one cat is honest, and at least one cat is a liar.",
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
     "table": "/gD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/gA=="
    }
   },
   {
    "name": "Ember",
    "color": "white",
    "row": 1,
    "column": 1,
    "text": "Meow. At least one of these is true: I'm a liar, or Inky is honest.",
    "hidden": false,
    "secret": null,
    "mentions": [
     8
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      4,
      8
     ],
     "table": "AQ=="
    }
   },
   {
    "name": "Fig",
    "color": "orange",
    "row": 1,
    "column": 2,
    "text": "Mrow. Ash said: \"At least one of these is true: Coco is a liar, or all of the cats in my column are liars.\"",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     2,
     3,
     6
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      0,
      2,
      3,
      5,
      6
     ],
     "table": "Zv9G/w=="
    }
   },
   {
    "name": "Gizmo",
    "color": "orange",
    "row": 2,
    "column": 0,
    "text": "Exactly 2 of the orange cats are liars.",
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
      6,
      7
     ],
     "table": "mOY="
    }
   },
   {
    "name": "Honey",
    "color": "orange",
    "row": 2,
    "column": 1,
    "text": "At least one of these is true: Gizmo is a liar, or all of Dumpling, Gizmo and me are honest.",
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
      6,
      7
     ],
     "table": "PQ=="
    }
   },
   {
    "name": "Inky",
    "color": "grey",
    "row": 2,
    "column": 2,
    "text": "Ember is honest, but Fig is a liar.",
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
      8
     ],
     "table": "tA=="
    }
   }
  ],
  "liars": [
   true,
   false,
   false,
   false,
   false,
   true,
   false,
   true,
   false
  ]
 },
 {
  "rows": 3,
  "cols": 3,
  "seed": 114,
  "level": "easy",
  "given": 1,
  "cats": [
   {
    "name": "Ash",
    "color": "grey",
    "row": 0,
    "column": 0,
    "text": "At least one of Espresso and Iggy is honest.",
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
     "table": "lQ=="
    }
   },
   {
    "name": "Biscuit",
    "color": "brown",
    "row": 0,
    "column": 1,
    "text": "At least one of these is true: Ash is a liar, or Iggy is honest.",
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
      1,
      6
     ],
     "table": "Yw=="
    }
   },
   {
    "name": "Coco",
    "color": "orange",
    "row": 0,
    "column": 2,
    "text": "Exactly one of the cats in column 2 is a liar.",
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
      2,
      4,
      7
     ],
     "table": "lsk="
    }
   },
   {
    "name": "Espresso",
    "color": "grey",
    "row": 1,
    "column": 0,
    "text": "Exactly 2 of the orange cats are liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     2,
     5,
     6,
     8
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      2,
      3,
      5,
      6,
      8
     ],
     "table": "bJaWyQ=="
    }
   },
   {
    "name": "Felix",
    "color": "grey",
    "row": 1,
    "column": 1,
    "text": "Among Iggy, Kismet and me, at least one is honest and at least one is a liar.",
    "hidden": false,
    "secret": null,
    "mentions": [
     6,
     8
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      4,
      6,
      8
     ],
     "table": "1A=="
    }
   },
   {
    "name": "Honey",
    "color": "orange",
    "row": 1,
    "column": 2,
    "text": "Kismet is the only liar among the cats in my column.",
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
     "table": "3A=="
    }
   },
   {
    "name": "Iggy",
    "color": "orange",
    "row": 2,
    "column": 0,
    "text": "All of the cats in column 2 are the same: all honest, or all liars.",
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
     "table": "4Xg="
    }
   },
   {
    "name": "Juniper",
    "color": "brown",
    "row": 2,
    "column": 1,
    "text": "Among the brown cats, at least one is honest and at least one is a liar. Meow.",
    "hidden": false,
    "secret": null,
    "mentions": [
     1
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      1,
      7
     ],
     "table": "Cg=="
    }
   },
   {
    "name": "Kismet",
    "color": "orange",
    "row": 2,
    "column": 2,
    "text": "Biscuit and Iggy are both honest.",
    "hidden": false,
    "secret": null,
    "mentions": [
     1,
     6
    ],
    "mood": "happy",
    "clue": {
     "cats": [
      1,
      6,
      8
     ],
     "table": "4Q=="
    }
   }
  ],
  "liars": [
   false,
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
  "rows": 3,
  "cols": 3,
  "seed": 127,
  "level": "easy",
  "given": 6,
  "cats": [
   {
    "name": "Angus",
    "color": "grey",
    "row": 0,
    "column": 0,
    "text": "Among the cats in row 2, at least one is honest and at least one is a liar.",
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
      0,
      3,
      4,
      5
     ],
     "table": "VpU="
    }
   },
   {
    "name": "Biscuit",
    "color": "grey",
    "row": 0,
    "column": 1,
    "text": "Fudge said: \"All of Dumpling, Kettle and me are liars.\"",
    "hidden": false,
    "secret": null,
    "mentions": [
     3,
     4,
     7
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      1,
      3,
      4,
      7
     ],
     "table": "+ro="
    }
   },
   {
    "name": "Coco",
    "color": "orange",
    "row": 0,
    "column": 2,
    "text": "Biscuit is pawsitively honest.",
    "hidden": false,
    "secret": null,
    "mentions": [
     1
    ],
    "mood": "happy",
    "clue": {
     "cats": [
      1,
      2
     ],
     "table": "CQ=="
    }
   },
   {
    "name": "Dumpling",
    "color": "orange",
    "row": 1,
    "column": 0,
    "text": "At least one of these is true: Jasper is a liar, or Gizmo is honest. Mew.",
    "hidden": false,
    "secret": null,
    "mentions": [
     5,
     6
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      3,
      5,
      6
     ],
     "table": "WQ=="
    }
   },
   {
    "name": "Fudge",
    "color": "grey",
    "row": 1,
    "column": 1,
    "text": "*chirps at a bird outside*",
    "hidden": true,
    "secret": "All of Dumpling, Kettle and me are liars.",
    "mentions": [],
    "mood": "neutral",
    "clue": null
   },
   {
    "name": "Gizmo",
    "color": "orange",
    "row": 1,
    "column": 2,
    "text": "All of the cats in my column are honest.",
    "hidden": false,
    "secret": null,
    "mentions": [
     2,
     8
    ],
    "mood": "happy",
    "clue": {
     "cats": [
      2,
      5,
      8
     ],
     "table": "zQ=="
    }
   },
   {
    "name": "Jasper",
    "color": "black",
    "row": 2,
    "column": 0,
    "text": "Loki and I are both liars. Grrr.",
    "hidden": false,
    "secret": null,
    "mentions": [
     8
    ],
    "mood": "angry",
    "clue": {
     "cats": [
      6,
      8
     ],
     "table": "Ag=="
    }
   },
   {
    "name": "Kettle",
    "color": "black",
    "row": 2,
    "column": 1,
    "text": "Mew. All of the cats in my column are the same: all honest, or all liars.",
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
     "table": "cQ=="
    }
   },
   {
    "name": "Loki",
    "color": "grey",
    "row": 2,
    "column": 2,
    "text": "Kettle is the only liar among my neighbors.",
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
     "table": "tA=="
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
   true,
   false
  ]
 },
 {
  "rows": 3,
  "cols": 3,
  "seed": 144,
  "level": "easy",
  "given": 4,
  "cats": [
   {
    "name": "Ash",
    "color": "orange",
    "row": 0,
    "column": 0,
    "text": "At least one of these is true: Ember is a liar, or all of the cats to my right are honest.",
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
     "table": "qVU="
    }
   },
   {
    "name": "Bean",
    "color": "orange",
    "row": 0,
    "column": 1,
    "text": "All of the cats in my column are the same: all honest, or all liars.",
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
     "table": "Kw=="
    }
   },
   {
    "name": "Cricket",
    "color": "grey",
    "row": 0,
    "column": 2,
    "text": "At least one of these is true: Jasper is honest, or all of the black cats are honest.",
    "hidden": false,
    "secret": null,
    "mentions": [
     3,
     8
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      2,
      3,
      8
     ],
     "table": "pQ=="
    }
   },
   {
    "name": "Ember",
    "color": "black",
    "row": 1,
    "column": 0,
    "text": "I'm the only honest cat among the black cats.",
    "hidden": false,
    "secret": null,
    "mentions": [
     8
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      3,
      8
     ],
     "table": "Dg=="
    }
   },
   {
    "name": "Felix",
    "color": "grey",
    "row": 1,
    "column": 1,
    "text": "Iggy is the only honest cat among the grey cats.",
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
     "table": "xA=="
    }
   },
   {
    "name": "Gnocchi",
    "color": "orange",
    "row": 1,
    "column": 2,
    "text": "At least one of these is true: Cricket is a liar, or all of the cats in row 3 are honest.",
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
      2,
      5,
      6,
      7,
      8
     ],
     "table": "Y2ZmZg=="
    }
   },
   {
    "name": "Hazel",
    "color": "orange",
    "row": 2,
    "column": 0,
    "text": "Ash and Jasper are both honest, or both liars.",
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
      6,
      8
     ],
     "table": "aQ=="
    }
   },
   {
    "name": "Iggy",
    "color": "grey",
    "row": 2,
    "column": 1,
    "text": "I'm the only honest cat among the cats in my column.",
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
     "table": "+A=="
    }
   },
   {
    "name": "Jasper",
    "color": "black",
    "row": 2,
    "column": 2,
    "text": "Among the orange cats, at least one is honest and at least one is a liar.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     1,
     5,
     6
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      0,
      1,
      5,
      6,
      8
     ],
     "table": "/n8BgA=="
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
   false,
   false
  ]
 },
 {
  "rows": 3,
  "cols": 3,
  "seed": 182,
  "level": "easy",
  "given": 7,
  "cats": [
   {
    "name": "Ash",
    "color": "black",
    "row": 0,
    "column": 0,
    "text": "At least one of Dusty and Hazel is honest.",
    "hidden": false,
    "secret": null,
    "mentions": [
     3,
     7
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      0,
      3,
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
    "text": "Ash is the only liar among my neighbors.",
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
      1,
      2,
      4
     ],
     "table": "xsw="
    }
   },
   {
    "name": "Clover",
    "color": "white",
    "row": 0,
    "column": 2,
    "text": "Mrrrow mrrp mew.",
    "hidden": true,
    "secret": "There are exactly 3 liars in total.",
    "mentions": [],
    "mood": "neutral",
    "clue": null
   },
   {
    "name": "Dusty",
    "color": "yellow",
    "row": 1,
    "column": 0,
    "text": "Exactly one of the brown cats is a liar.",
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
     "table": "lg=="
    }
   },
   {
    "name": "Echo",
    "color": "white",
    "row": 1,
    "column": 1,
    "text": "At least one of these is true: Fudge is honest, or all of my neighbors are liars.",
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
     "table": "D/APeA=="
    }
   },
   {
    "name": "Fudge",
    "color": "yellow",
    "row": 1,
    "column": 2,
    "text": "Clover told me: \"There are exactly 3 liars in total.\"",
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
     "table": "cJiY5v////+Y5ubx/////5jm5vH/////5vHx8P////+Y5ubx/////+bx8fD/////5vHx8P/////x8PDw/////w=="
    }
   },
   {
    "name": "Gizmo",
    "color": "brown",
    "row": 2,
    "column": 0,
    "text": "All of Biscuit, Clover and me are honest.",
    "hidden": false,
    "secret": null,
    "mentions": [
     1,
     2
    ],
    "mood": "happy",
    "clue": {
     "cats": [
      1,
      2,
      6
     ],
     "table": "8Q=="
    }
   },
   {
    "name": "Hazel",
    "color": "black",
    "row": 2,
    "column": 1,
    "text": "Indigo is the only honest cat among the cats in my row.",
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
     "table": "xA=="
    }
   },
   {
    "name": "Indigo",
    "color": "yellow",
    "row": 2,
    "column": 2,
    "text": "At least one of these is true: Hazel is a liar, or all of my neighbors are liars.",
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
     "table": "PA=="
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
   false,
   true,
   false
  ]
 },
 {
  "rows": 3,
  "cols": 3,
  "seed": 124,
  "level": "medium",
  "given": null,
  "cats": [
   {
    "name": "Angus",
    "color": "white",
    "row": 0,
    "column": 0,
    "text": "Nyaa... mrrp. Mew.",
    "hidden": true,
    "secret": "All of the corner cats are the same: all honest, or all liars.",
    "mentions": [],
    "mood": "neutral",
    "clue": null
   },
   {
    "name": "Bagel",
    "color": "yellow",
    "row": 0,
    "column": 1,
    "text": "At least one of these is true: Juniper is a liar, or Ember is honest.",
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
     "table": "WQ=="
    }
   },
   {
    "name": "Clover",
    "color": "white",
    "row": 0,
    "column": 2,
    "text": "At least one of these is true: Goose is honest, or all of the cats to my left are liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     1,
     6
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      0,
      1,
      2,
      6
     ],
     "table": "D3g="
    }
   },
   {
    "name": "Dusty",
    "color": "yellow",
    "row": 1,
    "column": 0,
    "text": "Among the cats on the edges, at least one is honest and at least one is a liar.",
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
     "table": "/gD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/4A="
    }
   },
   {
    "name": "Ember",
    "color": "white",
    "row": 1,
    "column": 1,
    "text": "Exactly one of the brown cats is a liar.",
    "hidden": false,
    "secret": null,
    "mentions": [
     5,
     8
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      4,
      5,
      8
     ],
     "table": "lg=="
    }
   },
   {
    "name": "Fig",
    "color": "brown",
    "row": 1,
    "column": 2,
    "text": "Angus told me: \"All of the corner cats are the same: all honest, or all liars.\"",
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
      2,
      5,
      6,
      8
     ],
     "table": "+/r68g=="
    }
   },
   {
    "name": "Goose",
    "color": "white",
    "row": 2,
    "column": 0,
    "text": "At least one of Clover, Juniper and me is a liar.",
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
    "name": "Iggy",
    "color": "yellow",
    "row": 2,
    "column": 1,
    "text": "Grrr. All of Ember, Fig and me are liars.",
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
      7
     ],
     "table": "cA=="
    }
   },
   {
    "name": "Juniper",
    "color": "brown",
    "row": 2,
    "column": 2,
    "text": "Mew. At least one of these is true: Fig is a liar, or Angus is honest.",
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
      5,
      8
     ],
     "table": "LQ=="
    }
   }
  ],
  "liars": [
   true,
   false,
   false,
   false,
   false,
   false,
   false,
   true,
   true
  ]
 },
 {
  "rows": 3,
  "cols": 3,
  "seed": 147,
  "level": "medium",
  "given": null,
  "cats": [
   {
    "name": "Ash",
    "color": "grey",
    "row": 0,
    "column": 0,
    "text": "At least one of these is true: Iggy is a liar, or Hazel is honest.",
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
     "table": "WQ=="
    }
   },
   {
    "name": "Biscuit",
    "color": "orange",
    "row": 0,
    "column": 1,
    "text": "Mrow. Goose and Jasper are both honest, or both liars.",
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
    "name": "Clover",
    "color": "grey",
    "row": 0,
    "column": 2,
    "text": "At least one of my neighbors is a liar.",
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
      2,
      5
     ],
     "table": "Ng=="
    }
   },
   {
    "name": "Dumpling",
    "color": "yellow",
    "row": 1,
    "column": 0,
    "text": "Fig is honest, but Ash is a liar.",
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
      3,
      4
     ],
     "table": "xg=="
    }
   },
   {
    "name": "Fig",
    "color": "orange",
    "row": 1,
    "column": 1,
    "text": "At least one of Ash, Biscuit and me is a liar.",
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
      4
     ],
     "table": "Dg=="
    }
   },
   {
    "name": "Goose",
    "color": "grey",
    "row": 1,
    "column": 2,
    "text": "I'm the only liar among the cats in my row.",
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
     "table": "4A=="
    }
   },
   {
    "name": "Hazel",
    "color": "yellow",
    "row": 2,
    "column": 0,
    "text": "Goose and Iggy are opposites: one is honest, the other is a liar.",
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
      6,
      7
     ],
     "table": "lg=="
    }
   },
   {
    "name": "Iggy",
    "color": "yellow",
    "row": 2,
    "column": 1,
    "text": "At least one of these is true: Biscuit is a liar, or Goose is honest.",
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
     "table": "Sw=="
    }
   },
   {
    "name": "Jasper",
    "color": "yellow",
    "row": 2,
    "column": 2,
    "text": "Dumpling and Hazel are opposites: one is honest, the other is a liar.",
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
      6,
      8
     ],
     "table": "lg=="
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
   false
  ]
 },
 {
  "rows": 3,
  "cols": 3,
  "seed": 149,
  "level": "medium",
  "given": null,
  "cats": [
   {
    "name": "Angus",
    "color": "yellow",
    "row": 0,
    "column": 0,
    "text": "Felix and Hazel are both liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     5,
     7
    ],
    "mood": "angry",
    "clue": {
     "cats": [
      0,
      5,
      7
     ],
     "table": "ag=="
    }
   },
   {
    "name": "Bagel",
    "color": "grey",
    "row": 0,
    "column": 1,
    "text": "Nyaa... mrrp. Mew.",
    "hidden": true,
    "secret": "Exactly one of Dusty, Gnocchi and me is a liar.",
    "mentions": [],
    "mood": "neutral",
    "clue": null
   },
   {
    "name": "Clover",
    "color": "black",
    "row": 0,
    "column": 2,
    "text": "At least one of these is true: Angus is a liar, or Ember is honest.",
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
     "table": "Yw=="
    }
   },
   {
    "name": "Dusty",
    "color": "grey",
    "row": 1,
    "column": 0,
    "text": "Among the corner cats, at least one is honest and at least one is a liar.",
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
      2,
      3,
      6,
      8
     ],
     "table": "Hg8Phw=="
    }
   },
   {
    "name": "Ember",
    "color": "black",
    "row": 1,
    "column": 1,
    "text": "Exactly 2 of my neighbors are liars. Mew.",
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
     "table": "eJaW4Q=="
    }
   },
   {
    "name": "Felix",
    "color": "yellow",
    "row": 1,
    "column": 2,
    "text": "I'm the only liar among the cats on the edges.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
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
      0,
      1,
      2,
      3,
      5,
      6,
      7,
      8
     ],
     "table": "AAD+/wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8="
    }
   },
   {
    "name": "Gnocchi",
    "color": "orange",
    "row": 2,
    "column": 0,
    "text": "Bagel said: \"All of the cats in row 2 are liars.\"",
    "hidden": false,
    "secret": null,
    "mentions": [
     1,
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
      5,
      6
     ],
     "table": "qmr//w=="
    }
   },
   {
    "name": "Hazel",
    "color": "orange",
    "row": 2,
    "column": 1,
    "text": "Grrr. All of Clover, Felix and me are liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     2,
     5
    ],
    "mood": "angry",
    "clue": {
     "cats": [
      2,
      5,
      7
     ],
     "table": "cA=="
    }
   },
   {
    "name": "Inky",
    "color": "yellow",
    "row": 2,
    "column": 2,
    "text": "Clover is the only honest cat among the cats above me.",
    "hidden": false,
    "secret": null,
    "mentions": [
     2,
     5
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      2,
      5,
      8
     ],
     "table": "tA=="
    }
   }
  ],
  "liars": [
   false,
   false,
   false,
   false,
   false,
   true,
   true,
   true,
   false
  ]
 },
 {
  "rows": 3,
  "cols": 3,
  "seed": 186,
  "level": "medium",
  "given": null,
  "cats": [
   {
    "name": "Dusty",
    "color": "black",
    "row": 0,
    "column": 0,
    "text": "All of the cats in my row are liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     1,
     2
    ],
    "mood": "angry",
    "clue": {
     "cats": [
      0,
      1,
      2
     ],
     "table": "Kg=="
    }
   },
   {
    "name": "Espresso",
    "color": "brown",
    "row": 0,
    "column": 1,
    "text": "Among the cats in my row, at least one is honest and at least one is a liar.",
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
     "table": "sg=="
    }
   },
   {
    "name": "Felix",
    "color": "black",
    "row": 0,
    "column": 2,
    "text": "At least one of Dusty and Luna is a liar.",
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
      2,
      8
     ],
     "table": "Ng=="
    }
   },
   {
    "name": "Goose",
    "color": "grey",
    "row": 1,
    "column": 0,
    "text": "Kettle is the only honest cat among the cats on the edges.",
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
     "table": "AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wB/AP8A/wD/AP8="
    }
   },
   {
    "name": "Honey",
    "color": "black",
    "row": 1,
    "column": 1,
    "text": "Kettle is the only liar among the cats in my column. Meow.",
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
     "table": "3A=="
    }
   },
   {
    "name": "Indigo",
    "color": "brown",
    "row": 1,
    "column": 2,
    "text": "Meow. Espresso is honest, but Kettle is a liar.",
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
      5,
      7
     ],
     "table": "nA=="
    }
   },
   {
    "name": "Juniper",
    "color": "black",
    "row": 2,
    "column": 0,
    "text": "Meow. Honey is honest, but Kettle is a liar.",
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
      6,
      7
     ],
     "table": "nA=="
    }
   },
   {
    "name": "Kettle",
    "color": "grey",
    "row": 2,
    "column": 1,
    "text": "Mrow. Espresso is the only honest cat among the cats in my column.",
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
     "table": "sA=="
    }
   },
   {
    "name": "Luna",
    "color": "grey",
    "row": 2,
    "column": 2,
    "text": "Mrow. At least one of these is true: Juniper is honest, or all of the corner cats are honest.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     2,
     6
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      0,
      2,
      6,
      8
     ],
     "table": "D/A="
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
   false,
   true,
   false
  ]
 },
 {
  "rows": 3,
  "cols": 3,
  "seed": 192,
  "level": "medium",
  "given": null,
  "cats": [
   {
    "name": "Ash",
    "color": "orange",
    "row": 0,
    "column": 0,
    "text": "At least one of these is true: Honey is honest, or all of the corner cats are honest.",
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
      0,
      2,
      6,
      8
     ],
     "table": "paU="
    }
   },
   {
    "name": "Coco",
    "color": "orange",
    "row": 0,
    "column": 1,
    "text": "At least one of Dumpling and Jasper is a liar.",
    "hidden": false,
    "secret": null,
    "mentions": [
     2,
     8
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      1,
      2,
      8
     ],
     "table": "Vg=="
    }
   },
   {
    "name": "Dumpling",
    "color": "brown",
    "row": 0,
    "column": 2,
    "text": "All of Gizmo, Honey and me are liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     5,
     6
    ],
    "mood": "angry",
    "clue": {
     "cats": [
      2,
      5,
      6
     ],
     "table": "Kg=="
    }
   },
   {
    "name": "Echo",
    "color": "orange",
    "row": 1,
    "column": 0,
    "text": "All the cats are the same: all honest, or all liars.",
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
     "table": "Af8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8Afw=="
    }
   },
   {
    "name": "Felix",
    "color": "brown",
    "row": 1,
    "column": 1,
    "text": "At least one of the cats in my row is a liar.",
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
     "table": "Mg=="
    }
   },
   {
    "name": "Gizmo",
    "color": "white",
    "row": 1,
    "column": 2,
    "text": "Honey is honest, fur real.",
    "hidden": false,
    "secret": null,
    "mentions": [
     6
    ],
    "mood": "happy",
    "clue": {
     "cats": [
      5,
      6
     ],
     "table": "CQ=="
    }
   },
   {
    "name": "Honey",
    "color": "orange",
    "row": 2,
    "column": 0,
    "text": "Among the cats in row 1, at least one is honest and at least one is a liar.",
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
      6
     ],
     "table": "foE="
    }
   },
   {
    "name": "Inky",
    "color": "brown",
    "row": 2,
    "column": 1,
    "text": "At least one of these is true: Jasper is a liar, or all of the white cats are liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     5,
     8
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      5,
      7,
      8
     ],
     "table": "PA=="
    }
   },
   {
    "name": "Jasper",
    "color": "white",
    "row": 2,
    "column": 2,
    "text": "All of the corner cats are the same: all honest, or all liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     2,
     6
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      0,
      2,
      6,
      8
     ],
     "table": "AX8="
    }
   }
  ],
  "liars": [
   false,
   false,
   true,
   true,
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
  "seed": 100,
  "level": "hard",
  "given": null,
  "cats": [
   {
    "name": "Ash",
    "color": "grey",
    "row": 0,
    "column": 0,
    "text": "All of the grey cats are liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     8
    ],
    "mood": "angry",
    "clue": {
     "cats": [
      0,
      8
     ],
     "table": "Ag=="
    }
   },
   {
    "name": "Bagel",
    "color": "white",
    "row": 0,
    "column": 1,
    "text": "Among the cats on the edges, at least one is honest and at least one is a liar. Mew.",
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
    "name": "Cricket",
    "color": "white",
    "row": 0,
    "column": 2,
    "text": "All of the cats below me are the same: all honest, or all liars.",
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
     "table": "aQ=="
    }
   },
   {
    "name": "Dumpling",
    "color": "brown",
    "row": 1,
    "column": 0,
    "text": "Cricket and Honey are both honest, or both liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     2,
     5
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      2,
      3,
      5
     ],
     "table": "aQ=="
    }
   },
   {
    "name": "Gizmo",
    "color": "brown",
    "row": 1,
    "column": 1,
    "text": "All of the corner cats are honest.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     2,
     6,
     8
    ],
    "mood": "happy",
    "clue": {
     "cats": [
      0,
      2,
      4,
      6,
      8
     ],
     "table": "4fDw8A=="
    }
   },
   {
    "name": "Honey",
    "color": "white",
    "row": 1,
    "column": 2,
    "text": "Exactly one of Ash, Dumpling and me is a liar.",
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
      5
     ],
     "table": "5g=="
    }
   },
   {
    "name": "Iggy",
    "color": "brown",
    "row": 2,
    "column": 0,
    "text": "I'm the only honest cat among Dumpling, Gizmo and me.",
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
    "color": "brown",
    "row": 2,
    "column": 1,
    "text": "At least one of Kettle and me is honest. Mew.",
    "hidden": false,
    "secret": null,
    "mentions": [
     8
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      7,
      8
     ],
     "table": "DQ=="
    }
   },
   {
    "name": "Kettle",
    "color": "grey",
    "row": 2,
    "column": 2,
    "text": "Exactly 2 of the corner cats are liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     2,
     6
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      0,
      2,
      6,
      8
     ],
     "table": "aOk="
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
   false
  ]
 },
 {
  "rows": 3,
  "cols": 3,
  "seed": 106,
  "level": "hard",
  "given": null,
  "cats": [
   {
    "name": "Bagel",
    "color": "black",
    "row": 0,
    "column": 0,
    "text": "At least one of these is true: Kiwi is a liar, or Juniper is honest.",
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
     "table": "WQ=="
    }
   },
   {
    "name": "Cricket",
    "color": "black",
    "row": 0,
    "column": 1,
    "text": "At least one of these is true: Bagel is honest, or all of the cats in my column are liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
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
     "table": "mRk="
    }
   },
   {
    "name": "Espresso",
    "color": "orange",
    "row": 0,
    "column": 2,
    "text": "Honey and Iggy are both liars. Hiss!",
    "hidden": false,
    "secret": null,
    "mentions": [
     5,
     6
    ],
    "mood": "angry",
    "clue": {
     "cats": [
      2,
      5,
      6
     ],
     "table": "ag=="
    }
   },
   {
    "name": "Felix",
    "color": "orange",
    "row": 1,
    "column": 0,
    "text": "Goose is the only liar among the cats in column 2.",
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
      3,
      4,
      7
     ],
     "table": "nMw="
    }
   },
   {
    "name": "Goose",
    "color": "white",
    "row": 1,
    "column": 1,
    "text": "All of the white cats are liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     8
    ],
    "mood": "angry",
    "clue": {
     "cats": [
      4,
      8
     ],
     "table": "Ag=="
    }
   },
   {
    "name": "Honey",
    "color": "black",
    "row": 1,
    "column": 2,
    "text": "Juniper is the only liar of all the cats.",
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
     "table": "AAAAAP////8AAAAA/////wEAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////w=="
    }
   },
   {
    "name": "Iggy",
    "color": "orange",
    "row": 2,
    "column": 0,
    "text": "All of the cats on the edges are the same: all honest, or all liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     1,
     2,
     3,
     5,
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
     "table": "AQAAAP////8AAAAA/////wAAAAD/////AAAAAP///38="
    }
   },
   {
    "name": "Juniper",
    "color": "black",
    "row": 2,
    "column": 1,
    "text": "Mew. I'm the only honest cat among Goose, Honey and me.",
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
      7
     ],
     "table": "+A=="
    }
   },
   {
    "name": "Kiwi",
    "color": "white",
    "row": 2,
    "column": 2,
    "text": "At least one of the orange cats is a liar.",
    "hidden": false,
    "secret": null,
    "mentions": [
     2,
     3,
     6
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      2,
      3,
      6,
      8
     ],
     "table": "/gE="
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
   true,
   false,
   false
  ]
 },
 {
  "rows": 3,
  "cols": 3,
  "seed": 122,
  "level": "hard",
  "given": null,
  "cats": [
   {
    "name": "Ash",
    "color": "brown",
    "row": 0,
    "column": 0,
    "text": "All of Juniper, Luna and me are the same: all honest, or all liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     5,
     7
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      0,
      5,
      7
     ],
     "table": "Kw=="
    }
   },
   {
    "name": "Bagel",
    "color": "black",
    "row": 0,
    "column": 1,
    "text": "At least one cat is honest, and at least one cat is a liar.",
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
     "table": "MjMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzsw=="
    }
   },
   {
    "name": "Echo",
    "color": "yellow",
    "row": 0,
    "column": 2,
    "text": "Juniper is the only honest cat among the brown cats.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     4,
     5,
     6
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      0,
      2,
      4,
      5,
      6
     ],
     "table": "zMxszA=="
    }
   },
   {
    "name": "Felix",
    "color": "yellow",
    "row": 1,
    "column": 0,
    "text": "At least one of Kiwi and me is a liar.",
    "hidden": false,
    "secret": null,
    "mentions": [
     6
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      3,
      6
     ],
     "table": "BA=="
    }
   },
   {
    "name": "Indigo",
    "color": "brown",
    "row": 1,
    "column": 1,
    "text": "At least one of these is true: Ash is honest, or all of the yellow cats are liars. Mrow.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     2,
     3,
     8
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      0,
      2,
      3,
      4,
      8
     ],
     "table": "VarVKg=="
    }
   },
   {
    "name": "Juniper",
    "color": "brown",
    "row": 1,
    "column": 2,
    "text": "Indigo is a liar. Grrr.",
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
    "name": "Kiwi",
    "color": "brown",
    "row": 2,
    "column": 0,
    "text": "At least one of these is true: Juniper is a liar, or all of the cats in my row are liars. Mew.",
    "hidden": false,
    "secret": null,
    "mentions": [
     5,
     7,
     8
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      5,
      6,
      7,
      8
     ],
     "table": "ZiY="
    }
   },
   {
    "name": "Luna",
    "color": "black",
    "row": 2,
    "column": 1,
    "text": "Felix and Mango are both honest.",
    "hidden": false,
    "secret": null,
    "mentions": [
     3,
     8
    ],
    "mood": "happy",
    "clue": {
     "cats": [
      3,
      7,
      8
     ],
     "table": "yQ=="
    }
   },
   {
    "name": "Mango",
    "color": "yellow",
    "row": 2,
    "column": 2,
    "text": "All of the yellow cats are the same: all honest, or all liars.",
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
      8
     ],
     "table": "cQ=="
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
   false
  ]
 },
 {
  "rows": 3,
  "cols": 3,
  "seed": 130,
  "level": "hard",
  "given": null,
  "cats": [
   {
    "name": "Coco",
    "color": "black",
    "row": 0,
    "column": 0,
    "text": "Noodle is the only liar among the cats below me.",
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
     "table": "mg=="
    }
   },
   {
    "name": "Echo",
    "color": "yellow",
    "row": 0,
    "column": 1,
    "text": "At least one of these is true: Rusty is a liar, or all of Pepper, Rusty and me are liars. Mrow.",
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
     "table": "Wg=="
    }
   },
   {
    "name": "Felix",
    "color": "black",
    "row": 0,
    "column": 2,
    "text": "Pepper is the only liar among the cats in column 2.",
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
      2,
      4,
      7
     ],
     "table": "zMk="
    }
   },
   {
    "name": "Iggy",
    "color": "yellow",
    "row": 1,
    "column": 0,
    "text": "Mrow. At least one cat is honest, and at least one cat is a liar.",
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
     "table": "/gD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/gA=="
    }
   },
   {
    "name": "Juniper",
    "color": "orange",
    "row": 1,
    "column": 1,
    "text": "Kettle is honest, fur real.",
    "hidden": false,
    "secret": null,
    "mentions": [
     5
    ],
    "mood": "happy",
    "clue": {
     "cats": [
      4,
      5
     ],
     "table": "CQ=="
    }
   },
   {
    "name": "Kettle",
    "color": "white",
    "row": 1,
    "column": 2,
    "text": "Among the orange cats, at least one is honest and at least one is a liar.",
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
      5,
      8
     ],
     "table": "lg=="
    }
   },
   {
    "name": "Noodle",
    "color": "white",
    "row": 2,
    "column": 0,
    "text": "At least one of these is true: Rusty is honest, or all of Coco, Iggy and me are honest.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     3,
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
     "table": "D/E="
    }
   },
   {
    "name": "Pepper",
    "color": "white",
    "row": 2,
    "column": 1,
    "text": "I'm the only honest cat among the white cats.",
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
     "table": "+A=="
    }
   },
   {
    "name": "Rusty",
    "color": "orange",
    "row": 2,
    "column": 2,
    "text": "Grrr. Juniper and I are both liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     4
    ],
    "mood": "angry",
    "clue": {
     "cats": [
      4,
      8
     ],
     "table": "BA=="
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
   true,
   true,
   true
  ]
 },
 {
  "rows": 3,
  "cols": 3,
  "seed": 153,
  "level": "hard",
  "given": null,
  "cats": [
   {
    "name": "Ash",
    "color": "brown",
    "row": 0,
    "column": 0,
    "text": "Mrow. At least one cat is honest, and at least one cat is a liar.",
    "hidden": false,
    "secret": null,
    "mentions": [
     1,
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
     "table": "VFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV1Q=="
    }
   },
   {
    "name": "Biscuit",
    "color": "orange",
    "row": 0,
    "column": 1,
    "text": "At least one of these is true: Indigo is honest, or all of the cats in row 2 are liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     3,
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
     "table": "VVWqag=="
    }
   },
   {
    "name": "Coco",
    "color": "orange",
    "row": 0,
    "column": 2,
    "text": "Goose and Kettle are opposites: one is honest, the other is a liar.",
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
     "table": "lg=="
    }
   },
   {
    "name": "Dumpling",
    "color": "brown",
    "row": 1,
    "column": 0,
    "text": "Espresso is the only liar among the cats in column 2. Meow.",
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
      3,
      4,
      7
     ],
     "table": "nMw="
    }
   },
   {
    "name": "Espresso",
    "color": "black",
    "row": 1,
    "column": 1,
    "text": "All of the cats in my row are liars.",
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
    "name": "Goose",
    "color": "black",
    "row": 1,
    "column": 2,
    "text": "Indigo is the only honest cat among the cats in row 3.",
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
      5,
      6,
      7,
      8
     ],
     "table": "qqY="
    }
   },
   {
    "name": "Hobbes",
    "color": "black",
    "row": 2,
    "column": 0,
    "text": "All of Dumpling, Espresso and me are liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     3,
     4
    ],
    "mood": "angry",
    "clue": {
     "cats": [
      3,
      4,
      6
     ],
     "table": "cA=="
    }
   },
   {
    "name": "Indigo",
    "color": "black",
    "row": 2,
    "column": 1,
    "text": "Mrrp? Mew mew mrrrow!",
    "hidden": true,
    "secret": "Espresso is the only liar among Ash, Espresso and me.",
    "mentions": [],
    "mood": "neutral",
    "clue": null
   },
   {
    "name": "Kettle",
    "color": "brown",
    "row": 2,
    "column": 2,
    "text": "Indigo told me: \"Among the orange cats, at least one is honest and at least one is a liar.\"",
    "hidden": false,
    "secret": null,
    "mentions": [
     1,
     2,
     7
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      1,
      2,
      7,
      8
     ],
     "table": "lv8="
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
   true
  ]
 },
 {
  "rows": 4,
  "cols": 4,
  "seed": 1000,
  "level": "medium",
  "given": 6,
  "cats": [
   {
    "name": "Biscuit",
    "color": "grey",
    "row": 0,
    "column": 0,
    "text": "Gnocchi told me: \"Cricket and Sushi are both honest.\" Mew.",
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
      0,
      1,
      3,
      15
     ],
     "table": "6/o="
    }
   },
   {
    "name": "Cricket",
    "color": "grey",
    "row": 0,
    "column": 1,
    "text": "Mrow. All of the cats in column 4 are the same: all honest, or all liars.",
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
      1,
      3,
      7,
      11,
      15
     ],
     "table": "qaqqag=="
    }
   },
   {
    "name": "Felix",
    "color": "orange",
    "row": 0,
    "column": 2,
    "text": "At least one of these is true: Sushi is a liar, or all of the cats in my column are honest.",
    "hidden": false,
    "secret": null,
    "mentions": [
     6,
     10,
     14,
     15
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
     "table": "q6pVVQ=="
    }
   },
   {
    "name": "Gnocchi",
    "color": "yellow",
    "row": 0,
    "column": 3,
    "text": "Mrrrow mrrp mew.",
    "hidden": true,
    "secret": "Cricket and Sushi are both honest.",
    "mentions": [],
    "mood": "neutral",
    "clue": null
   },
   {
    "name": "Honey",
    "color": "grey",
    "row": 1,
    "column": 0,
    "text": "At least 2 of Juniper, Rusty and me are liars. Meow.",
    "hidden": false,
    "secret": null,
    "mentions": [
     6,
     14
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      4,
      6,
      14
     ],
     "table": "Qg=="
    }
   },
   {
    "name": "Indigo",
    "color": "yellow",
    "row": 1,
    "column": 1,
    "text": "All of Juniper, Lentil and me are the same: all honest, or all liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     6,
     8
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      5,
      6,
      8
     ],
     "table": "Kw=="
    }
   },
   {
    "name": "Juniper",
    "color": "brown",
    "row": 1,
    "column": 2,
    "text": "At least one of the cats in my column is a liar.",
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
     "table": "MjM="
    }
   },
   {
    "name": "Kiwi",
    "color": "brown",
    "row": 1,
    "column": 3,
    "text": "Mrrrow mrrp mew.",
    "hidden": true,
    "secret": "All of the cats below me are the same: all honest, or all liars.",
    "mentions": [],
    "mood": "neutral",
    "clue": null
   },
   {
    "name": "Lentil",
    "color": "orange",
    "row": 2,
    "column": 0,
    "text": "Hiss! All of the cats above me are liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     4
    ],
    "mood": "angry",
    "clue": {
     "cats": [
      0,
      4,
      8
     ],
     "table": "eA=="
    }
   },
   {
    "name": "Marble",
    "color": "orange",
    "row": 2,
    "column": 1,
    "text": "At least one of these is true: Sushi is honest, or all of the cats above me are honest.",
    "hidden": false,
    "secret": null,
    "mentions": [
     1,
     5,
     15
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      1,
      5,
      9,
      15
     ],
     "table": "D+E="
    }
   },
   {
    "name": "Noodle",
    "color": "brown",
    "row": 2,
    "column": 2,
    "text": "Kiwi told me: \"At least one of these is true: Cricket is a liar, or all of the grey cats are liars.\"",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
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
      7,
      10
     ],
     "table": "zDP//w=="
    }
   },
   {
    "name": "Oreo",
    "color": "black",
    "row": 2,
    "column": 3,
    "text": "At least one of these is true: Juniper is honest, or all of the cats above me are liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     3,
     6,
     7
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      3,
      6,
      7,
      11
     ],
     "table": "s0w="
    }
   },
   {
    "name": "Paprika",
    "color": "black",
    "row": 3,
    "column": 0,
    "text": "At least one of Biscuit and Kiwi is honest.",
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
      12
     ],
     "table": "hw=="
    }
   },
   {
    "name": "Quill",
    "color": "orange",
    "row": 3,
    "column": 1,
    "text": "Among Felix, Oreo and me, at least one is honest and at least one is a liar.",
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
      13
     ],
     "table": "jg=="
    }
   },
   {
    "name": "Rusty",
    "color": "black",
    "row": 3,
    "column": 2,
    "text": "At least one of these is true: Biscuit is honest, or all of Cricket, Honey and me are liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     1,
     4
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      0,
      1,
      4,
      14
     ],
     "table": "VSo="
    }
   },
   {
    "name": "Sushi",
    "color": "black",
    "row": 3,
    "column": 3,
    "text": "Felix is the only liar among the cats in row 1.",
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
     "table": "EADv/w=="
    }
   }
  ],
  "liars": [
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
  "seed": 1004,
  "level": "medium",
  "given": 11,
  "cats": [
   {
    "name": "Angus",
    "color": "white",
    "row": 0,
    "column": 0,
    "text": "At least one of these is true: Vanilla is a liar, or all of the cats in row 3 are honest. Mrow.",
    "hidden": false,
    "secret": null,
    "mentions": [
     8,
     9,
     10,
     11,
     15
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      0,
      8,
      9,
      10,
      11,
      15
     ],
     "table": "qaqqqlVVVVU="
    }
   },
   {
    "name": "Clover",
    "color": "yellow",
    "row": 0,
    "column": 1,
    "text": "Jasper and Quincy are both honest, or both liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     7,
     12
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      1,
      7,
      12
     ],
     "table": "aQ=="
    }
   },
   {
    "name": "Dusty",
    "color": "grey",
    "row": 0,
    "column": 2,
    "text": "Exactly 2 of Mango, Rolo and me are liars. Mew.",
    "hidden": false,
    "secret": null,
    "mentions": [
     9,
     13
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      2,
      9,
      13
     ],
     "table": "wg=="
    }
   },
   {
    "name": "Echo",
    "color": "white",
    "row": 0,
    "column": 3,
    "text": "At least one of these is true: Umber is a liar, or all of the brown cats are liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     6,
     13,
     14
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      3,
      6,
      13,
      14
     ],
     "table": "alU="
    }
   },
   {
    "name": "Fig",
    "color": "grey",
    "row": 1,
    "column": 0,
    "text": "At least one of these is true: Kismet is a liar, or all of the orange cats are honest.",
    "hidden": false,
    "secret": null,
    "mentions": [
     7,
     8,
     9,
     11
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      4,
      7,
      8,
      9,
      11
     ],
     "table": "WVpaWg=="
    }
   },
   {
    "name": "Honey",
    "color": "white",
    "row": 1,
    "column": 1,
    "text": "Meow. Among the orange cats, at least one is honest and at least one is a liar.",
    "hidden": false,
    "secret": null,
    "mentions": [
     7,
     9,
     11
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      5,
      7,
      9,
      11
     ],
     "table": "VpU="
    }
   },
   {
    "name": "Indigo",
    "color": "brown",
    "row": 1,
    "column": 2,
    "text": "At least one of Pickles and me is a liar.",
    "hidden": false,
    "secret": null,
    "mentions": [
     11
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      6,
      11
     ],
     "table": "BA=="
    }
   },
   {
    "name": "Jasper",
    "color": "orange",
    "row": 1,
    "column": 3,
    "text": "Mango said: \"Angus is the only liar among Angus, Quincy and me.\"",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     9,
     12
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      0,
      7,
      9,
      12
     ],
     "table": "/vw="
    }
   },
   {
    "name": "Kismet",
    "color": "grey",
    "row": 2,
    "column": 0,
    "text": "Pickles is the only liar among the orange cats.",
    "hidden": false,
    "secret": null,
    "mentions": [
     7,
     9,
     11
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      7,
      8,
      9,
      11
     ],
     "table": "zMk="
    }
   },
   {
    "name": "Mango",
    "color": "orange",
    "row": 2,
    "column": 1,
    "text": "Nyaa... mrrp. Mew.",
    "hidden": true,
    "secret": "Angus is the only liar among Angus, Quincy and me.",
    "mentions": [],
    "mood": "neutral",
    "clue": null
   },
   {
    "name": "Oreo",
    "color": "white",
    "row": 2,
    "column": 2,
    "text": "Mew. Echo is the only liar among Echo, Mango and me.",
    "hidden": false,
    "secret": null,
    "mentions": [
     3,
     9
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      3,
      9,
      10
     ],
     "table": "8g=="
    }
   },
   {
    "name": "Pickles",
    "color": "orange",
    "row": 2,
    "column": 3,
    "text": "At least one of the yellow cats is a liar.",
    "hidden": false,
    "secret": null,
    "mentions": [
     1,
     12
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      1,
      11,
      12
     ],
     "table": "Ng=="
    }
   },
   {
    "name": "Quincy",
    "color": "yellow",
    "row": 3,
    "column": 0,
    "text": "All of the cats in my row are the same: all honest, or all liars.",
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
     "table": "qyo="
    }
   },
   {
    "name": "Rolo",
    "color": "brown",
    "row": 3,
    "column": 1,
    "text": "At least one of these is true: Honey is a liar, or all of the black cats are honest.",
    "hidden": false,
    "secret": null,
    "mentions": [
     5,
     14,
     15
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      5,
      13,
      14,
      15
     ],
     "table": "Y2Y="
    }
   },
   {
    "name": "Umber",
    "color": "black",
    "row": 3,
    "column": 2,
    "text": "Clover and Oreo are both honest, or both liars.",
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
     "table": "aQ=="
    }
   },
   {
    "name": "Vanilla",
    "color": "black",
    "row": 3,
    "column": 3,
    "text": "All of Oreo, Quincy and me are the same: all honest, or all liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     10,
     12
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      10,
      12,
      15
     ],
     "table": "cQ=="
    }
   }
  ],
  "liars": [
   true,
   false,
   true,
   true,
   true,
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
   false
  ]
 },
 {
  "rows": 4,
  "cols": 4,
  "seed": 1010,
  "level": "medium",
  "given": 8,
  "cats": [
   {
    "name": "Ash",
    "color": "black",
    "row": 0,
    "column": 0,
    "text": "At least one of these is true: Honey is honest, or all of the cats below me are liars. Mrow.",
    "hidden": false,
    "secret": null,
    "mentions": [
     4,
     7,
     8,
     12
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      0,
      4,
      7,
      8,
      12
     ],
     "table": "paWlZQ=="
    }
   },
   {
    "name": "Biscuit",
    "color": "black",
    "row": 0,
    "column": 1,
    "text": "Dusty and Nimbus are both liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     3,
     13
    ],
    "mood": "angry",
    "clue": {
     "cats": [
      1,
      3,
      13
     ],
     "table": "ag=="
    }
   },
   {
    "name": "Clover",
    "color": "white",
    "row": 0,
    "column": 2,
    "text": "Grrr. All of the cats in row 4 are liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     12,
     13,
     14,
     15
    ],
    "mood": "angry",
    "clue": {
     "cats": [
      2,
      12,
      13,
      14,
      15
     ],
     "table": "qqqqag=="
    }
   },
   {
    "name": "Dusty",
    "color": "orange",
    "row": 0,
    "column": 3,
    "text": "Among the cats in row 2, at least one is honest and at least one is a liar.",
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
     "table": "VlVVlQ=="
    }
   },
   {
    "name": "Ember",
    "color": "white",
    "row": 1,
    "column": 0,
    "text": "Ash is honest, fur real.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0
    ],
    "mood": "happy",
    "clue": {
     "cats": [
      0,
      4
     ],
     "table": "CQ=="
    }
   },
   {
    "name": "Fudge",
    "color": "brown",
    "row": 1,
    "column": 1,
    "text": "Clover and Nimbus are both liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     2,
     13
    ],
    "mood": "angry",
    "clue": {
     "cats": [
      2,
      5,
      13
     ],
     "table": "bA=="
    }
   },
   {
    "name": "Gnocchi",
    "color": "orange",
    "row": 1,
    "column": 2,
    "text": "*chirps at a bird outside*",
    "hidden": true,
    "secret": "Exactly one of Dusty, Oreo and me is a liar.",
    "mentions": [],
    "mood": "neutral",
    "clue": null
   },
   {
    "name": "Honey",
    "color": "yellow",
    "row": 1,
    "column": 3,
    "text": "Inky is the only liar among the cats in column 1.",
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
      7,
      8,
      12
     ],
     "table": "8OHw8A=="
    }
   },
   {
    "name": "Inky",
    "color": "black",
    "row": 2,
    "column": 0,
    "text": "Ash and I are both liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0
    ],
    "mood": "angry",
    "clue": {
     "cats": [
      0,
      8
     ],
     "table": "BA=="
    }
   },
   {
    "name": "Juniper",
    "color": "brown",
    "row": 2,
    "column": 1,
    "text": "Mrow. Among the cats to my right, at least one is honest and at least one is a liar.",
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
     "table": "lg=="
    }
   },
   {
    "name": "Kismet",
    "color": "orange",
    "row": 2,
    "column": 2,
    "text": "At least one of these is true: Fudge is honest, or all of the cats in column 4 are honest.",
    "hidden": false,
    "secret": null,
    "mentions": [
     3,
     5,
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
      10,
      11,
      15
     ],
     "table": "N8gzzDPMM8w="
    }
   },
   {
    "name": "Luna",
    "color": "yellow",
    "row": 2,
    "column": 3,
    "text": "Gnocchi said: \"Exactly one of Dusty, Oreo and me is a liar.\"",
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
     "table": "+v0="
    }
   },
   {
    "name": "Mango",
    "color": "brown",
    "row": 3,
    "column": 0,
    "text": "At least one of these is true: Dusty is a liar, or all of the corner cats are liars. Mew.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     3,
     15
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      0,
      3,
      12,
      15
     ],
     "table": "PDw="
    }
   },
   {
    "name": "Nimbus",
    "color": "orange",
    "row": 3,
    "column": 1,
    "text": "Among the yellow cats, at least one is honest and at least one is a liar.",
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
      7,
      11,
      13,
      15
     ],
     "table": "Hoc="
    }
   },
   {
    "name": "Oreo",
    "color": "brown",
    "row": 3,
    "column": 2,
    "text": "Dusty is the only liar among the cats in column 4.",
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
      14,
      15
     ],
     "table": "Av0A/w=="
    }
   },
   {
    "name": "Quincy",
    "color": "yellow",
    "row": 3,
    "column": 3,
    "text": "Mew. At least one of these is true: Ash is honest, or all of the cats in row 1 are honest.",
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
     "table": "VVWqqg=="
    }
   }
  ],
  "liars": [
   false,
   false,
   true,
   true,
   false,
   false,
   false,
   false,
   true,
   true,
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
  "seed": 1052,
  "level": "medium",
  "given": 15,
  "cats": [
   {
    "name": "Angus",
    "color": "brown",
    "row": 0,
    "column": 0,
    "text": "Mew. Felix is the only liar among the cats below me.",
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
     "table": "pqo="
    }
   },
   {
    "name": "Cricket",
    "color": "orange",
    "row": 0,
    "column": 1,
    "text": "At least one of Angus and Echo is a liar.",
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
      1,
      3
     ],
     "table": "Ng=="
    }
   },
   {
    "name": "Doodle",
    "color": "brown",
    "row": 0,
    "column": 2,
    "text": "Cricket is the only liar among my neighbors.",
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
     "table": "xsw="
    }
   },
   {
    "name": "Echo",
    "color": "grey",
    "row": 0,
    "column": 3,
    "text": "Exactly 2 of the orange cats are liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     1,
     5,
     6,
     7
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      1,
      3,
      5,
      6,
      7
     ],
     "table": "bJaWyQ=="
    }
   },
   {
    "name": "Felix",
    "color": "grey",
    "row": 1,
    "column": 0,
    "text": "Meow. Saffron is the only liar among Echo, Saffron and me.",
    "hidden": false,
    "secret": null,
    "mentions": [
     3,
     13
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      3,
      4,
      13
     ],
     "table": "3A=="
    }
   },
   {
    "name": "Gnocchi",
    "color": "orange",
    "row": 1,
    "column": 1,
    "text": "All of my neighbors are liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     1,
     4,
     6,
     9
    ],
    "mood": "angry",
    "clue": {
     "cats": [
      1,
      4,
      5,
      6,
      9
     ],
     "table": "8PDweA=="
    }
   },
   {
    "name": "Indigo",
    "color": "orange",
    "row": 1,
    "column": 2,
    "text": "Udon is the only liar among the cats in column 4.",
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
     "table": "zMzJzA=="
    }
   },
   {
    "name": "Kettle",
    "color": "orange",
    "row": 1,
    "column": 3,
    "text": "At least one of these is true: Nimbus is a liar, or all of my neighbors are honest.",
    "hidden": false,
    "secret": null,
    "mentions": [
     3,
     6,
     9,
     11
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      3,
      6,
      7,
      9,
      11
     ],
     "table": "4Q/wDw=="
    }
   },
   {
    "name": "Loki",
    "color": "brown",
    "row": 2,
    "column": 0,
    "text": "Felix is the only liar among the cats in my column.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     4,
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
     "table": "9PA="
    }
   },
   {
    "name": "Nimbus",
    "color": "black",
    "row": 2,
    "column": 1,
    "text": "I'm the only honest cat among Cricket, Felix and me.",
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
     "table": "+A=="
    }
   },
   {
    "name": "Pickles",
    "color": "black",
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
    "name": "Quill",
    "color": "yellow",
    "row": 2,
    "column": 3,
    "text": "Pickles and Rolo are opposites: one is honest, the other is a liar.",
    "hidden": false,
    "secret": null,
    "mentions": [
     10,
     12
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      10,
      11,
      12
     ],
     "table": "lg=="
    }
   },
   {
    "name": "Rolo",
    "color": "yellow",
    "row": 3,
    "column": 0,
    "text": "Saffron and Tater are both honest.",
    "hidden": false,
    "secret": null,
    "mentions": [
     13,
     14
    ],
    "mood": "happy",
    "clue": {
     "cats": [
      12,
      13,
      14
     ],
     "table": "qQ=="
    }
   },
   {
    "name": "Saffron",
    "color": "black",
    "row": 3,
    "column": 1,
    "text": "Pickles is the only liar among the cats in row 3.",
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
     "table": "EADv/w=="
    }
   },
   {
    "name": "Tater",
    "color": "grey",
    "row": 3,
    "column": 2,
    "text": "I smell a rat. At least one of the corner cats is a liar.",
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
      12,
      14,
      15
     ],
     "table": "/gH/AA=="
    }
   },
   {
    "name": "Udon",
    "color": "brown",
    "row": 3,
    "column": 3,
    "text": "Grrr. Nimbus and I are both liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     9
    ],
    "mood": "angry",
    "clue": {
     "cats": [
      9,
      15
     ],
     "table": "BA=="
    }
   }
  ],
  "liars": [
   false,
   true,
   false,
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
   false,
   false,
   true
  ]
 },
 {
  "rows": 4,
  "cols": 4,
  "seed": 1059,
  "level": "medium",
  "given": 6,
  "cats": [
   {
    "name": "Ash",
    "color": "yellow",
    "row": 0,
    "column": 0,
    "text": "At least one of these is true: Nimbus is a liar, or all of the cats in my row are honest.",
    "hidden": false,
    "secret": null,
    "mentions": [
     1,
     2,
     3,
     13
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
     "table": "q6pVVQ=="
    }
   },
   {
    "name": "Bean",
    "color": "grey",
    "row": 0,
    "column": 1,
    "text": "Exactly 2 of the cats in the middle are liars. Mrow.",
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
      1,
      5,
      6,
      9,
      10
     ],
     "table": "apaWqQ=="
    }
   },
   {
    "name": "Coco",
    "color": "orange",
    "row": 0,
    "column": 2,
    "text": "I'm the only honest cat among Hazel, Mochi and me.",
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
     "table": "6g=="
    }
   },
   {
    "name": "Doodle",
    "color": "white",
    "row": 0,
    "column": 3,
    "text": "Exactly 2 of Hazel, Kiwi and me are liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     7,
     10
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      3,
      7,
      10
     ],
     "table": "wg=="
    }
   },
   {
    "name": "Echo",
    "color": "black",
    "row": 1,
    "column": 0,
    "text": "At least one of these is true: Mochi is honest, or all of the white cats are liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     3,
     11,
     12
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      3,
      4,
      11,
      12
     ],
     "table": "M2w="
    }
   },
   {
    "name": "Felix",
    "color": "orange",
    "row": 1,
    "column": 1,
    "text": "At least one of these is true: Paprika is honest, or all of the cats in row 1 are honest.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     1,
     2,
     3,
     15
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      0,
      1,
      2,
      3,
      5,
      15
     ],
     "table": "//8AAAEA/v8="
    }
   },
   {
    "name": "Gizmo",
    "color": "yellow",
    "row": 1,
    "column": 2,
    "text": "I'm the only liar among Hazel, Juniper and me.",
    "hidden": false,
    "secret": null,
    "mentions": [
     7,
     9
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      6,
      7,
      9
     ],
     "table": "qA=="
    }
   },
   {
    "name": "Hazel",
    "color": "brown",
    "row": 1,
    "column": 3,
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
     "table": "gOjo/uj+/v/o/v7//v///xcBAQABAAAAAQAAAAAAAADo/v7//v////7/////////AQAAAAAAAAAAAAAAAAAAAOj+/v/+/////v////////8BAAAAAAAAAAAAAAAAAAAA/v///////////////////wAAAAAAAAAAAAAAAAAAAADo/v7//v////7/////////AQAAAAAAAAAAAAAAAAAAAP7///////////////////8AAAAAAAAAAAAAAAAAAAAA/v///////////////////wAAAAAAAAAAAAAAAAAAAAD/////////////////////AAAAAAAAAAAAAAAAAAAAAOj+/v/+/////v////////8BAAAAAAAAAAAAAAAAAAAA/v///////////////////wAAAAAAAAAAAAAAAAAAAAD+////////////////////AAAAAAAAAAAAAAAAAAAAAP////////////////////8AAAAAAAAAAAAAAAAAAAAA/v///////////////////wAAAAAAAAAAAAAAAAAAAAD/////////////////////AAAAAAAAAAAAAAAAAAAAAP////////////////////8AAAAAAAAAAAAAAAAAAAAA/////////////////////wAAAAAAAAAAAAAAAAAAAADo/v7//v////7/////////AQAAAAAAAAAAAAAAAAAAAP7///////////////////8AAAAAAAAAAAAAAAAAAAAA/v///////////////////wAAAAAAAAAAAAAAAAAAAAD/////////////////////AAAAAAAAAAAAAAAAAAAAAP7///////////////////8AAAAAAAAAAAAAAAAAAAAA/////////////////////wAAAAAAAAAAAAAAAAAAAAD/////////////////////AAAAAAAAAAAAAAAAAAAAAP////////////////////8AAAAAAAAAAAAAAAAAAAAA/v///////////////////wAAAAAAAAAAAAAAAAAAAAD/////////////////////AAAAAAAAAAAAAAAAAAAAAP////////////////////8AAAAAAAAAAAAAAAAAAAAA/////////////////////wAAAAAAAAAAAAAAAAAAAAD/////////////////////AAAAAAAAAAAAAAAAAAAAAP////////////////////8AAAAAAAAAAAAAAAAAAAAA/////////////////////wAAAAAAAAAAAAAAAAAAAAD/////////////////////AAAAAAAAAAAAAAAAAAAAAOj+/v/+/////v////////8BAAAAAAAAAAAAAAAAAAAA/v///////////////////wAAAAAAAAAAAAAAAAAAAAD+////////////////////AAAAAAAAAAAAAAAAAAAAAP////////////////////8AAAAAAAAAAAAAAAAAAAAA/v///////////////////wAAAAAAAAAAAAAAAAAAAAD/////////////////////AAAAAAAAAAAAAAAAAAAAAP////////////////////8AAAAAAAAAAAAAAAAAAAAA/////////////////////wAAAAAAAAAAAAAAAAAAAAD+////////////////////AAAAAAAAAAAAAAAAAAAAAP////////////////////8AAAAAAAAAAAAAAAAAAAAA/////////////////////wAAAAAAAAAAAAAAAAAAAAD/////////////////////AAAAAAAAAAAAAAAAAAAAAP////////////////////8AAAAAAAAAAAAAAAAAAAAA/////////////////////wAAAAAAAAAAAAAAAAAAAAD/////////////////////AAAAAAAAAAAAAAAAAAAAAP////////////////////8AAAAAAAAAAAAAAAAAAAAA/v///////////////////wAAAAAAAAAAAAAAAAAAAAD/////////////////////AAAAAAAAAAAAAAAAAAAAAP////////////////////8AAAAAAAAAAAAAAAAAAAAA/////////////////////wAAAAAAAAAAAAAAAAAAAAD/////////////////////AAAAAAAAAAAAAAAAAAAAAP////////////////////8AAAAAAAAAAAAAAAAAAAAA/////////////////////wAAAAAAAAAAAAAAAAAAAAD/////////////////////AAAAAAAAAAAAAAAAAAAAAP////////////////////8AAAAAAAAAAAAAAAAAAAAA/////////////////////wAAAAAAAAAAAAAAAAAAAAD/////////////////////AAAAAAAAAAAAAAAAAAAAAP////////////////////8AAAAAAAAAAAAAAAAAAAAA/////////////////////wAAAAAAAAAAAAAAAAAAAAD/////////////////////AAAAAAAAAAAAAAAAAAAAAP////////////////////8AAAAAAAAAAAAAAAAAAAAA/////////////////////wAAAAAAAAAAAAAAAAAAAADo/v7//v////7/////////AQAAAAAAAAAAAAAAAAAAAP7///////////////////8AAAAAAAAAAAAAAAAAAAAA/v///////////////////wAAAAAAAAAAAAAAAAAAAAD/////////////////////AAAAAAAAAAAAAAAAAAAAAP7///////////////////8AAAAAAAAAAAAAAAAAAAAA/////////////////////wAAAAAAAAAAAAAAAAAAAAD/////////////////////AAAAAAAAAAAAAAAAAAAAAP////////////////////8AAAAAAAAAAAAAAAAAAAAA/v///////////////////wAAAAAAAAAAAAAAAAAAAAD/////////////////////AAAAAAAAAAAAAAAAAAAAAP////////////////////8AAAAAAAAAAAAAAAAAAAAA/////////////////////wAAAAAAAAAAAAAAAAAAAAD/////////////////////AAAAAAAAAAAAAAAAAAAAAP////////////////////8AAAAAAAAAAAAAAAAAAAAA/////////////////////wAAAAAAAAAAAAAAAAAAAAD/////////////////////AAAAAAAAAAAAAAAAAAAAAP7///////////////////8AAAAAAAAAAAAAAAAAAAAA/////////////////////wAAAAAAAAAAAAAAAAAAAAD/////////////////////AAAAAAAAAAAAAAAAAAAAAP////////////////////8AAAAAAAAAAAAAAAAAAAAA/////////////////////wAAAAAAAAAAAAAAAAAAAAD/////////////////////AAAAAAAAAAAAAAAAAAAAAP////////////////////8AAAAAAAAAAAAAAAAAAAAA/////////////////////wAAAAAAAAAAAAAAAAAAAAD/////////////////////AAAAAAAAAAAAAAAAAAAAAP////////////////////8AAAAAAAAAAAAAAAAAAAAA/////////////////////wAAAAAAAAAAAAAAAAAAAAD/////////////////////AAAAAAAAAAAAAAAAAAAAAP////////////////////8AAAAAAAAAAAAAAAAAAAAA/////////////////////wAAAAAAAAAAAAAAAAAAAAD/////////////////////AAAAAAAAAAAAAAAAAAAAAP////////////////////8AAAAAAAAAAAAAAAAAAAAA/v///////////////////wAAAAAAAAAAAAAAAAAAAAD/////////////////////AAAAAAAAAAAAAAAAAAAAAP////////////////////8AAAAAAAAAAAAAAAAAAAAA/////////////////////wAAAAAAAAAAAAAAAAAAAAD/////////////////////AAAAAAAAAAAAAAAAAAAAAP////////////////////8AAAAAAAAAAAAAAAAAAAAA/////////////////////wAAAAAAAAAAAAAAAAAAAAD/////////////////////AAAAAAAAAAAAAAAAAAAAAP////////////////////8AAAAAAAAAAAAAAAAAAAAA/////////////////////wAAAAAAAAAAAAAAAAAAAAD/////////////////////AAAAAAAAAAAAAAAAAAAAAP////////////////////8AAAAAAAAAAAAAAAAAAAAA/////////////////////wAAAAAAAAAAAAAAAAAAAAD/////////////////////AAAAAAAAAAAAAAAAAAAAAP////////////////////8AAAAAAAAAAAAAAAAAAAAA/////////////////////wAAAAAAAAAAAAAAAAAAAAD/////////////////////AAAAAAAAAAAAAAAAAAAAAP////////////////////8AAAAAAAAAAAAAAAAAAAAA/////////////////////wAAAAAAAAAAAAAAAAAAAAD/////////////////////AAAAAAAAAAAAAAAAAAAAAP////////////////////8AAAAAAAAAAAAAAAAAAAAA/////////////////////wAAAAAAAAAAAAAAAAAAAAD/////////////////////AAAAAAAAAAAAAAAAAAAAAP////////////////////8AAAAAAAAAAAAAAAAAAAAA/////////////////////wAAAAAAAAAAAAAAAAAAAAD/////////////////////AAAAAAAAAAAAAAAAAAAAAP////////////////////8AAAAAAAAAAAAAAAAAAAAA/////////////////////wAAAAAAAAAAAAAAAAAAAAD/////////////////////AAAAAAAAAAAAAAAAAAAAAP////////////////////8AAAAAAAAAAAAAAAAAAAAA/////////////////////wAAAAAAAAAAAAAAAAAAAAD/////////////////////AAAAAAAAAAAAAAAAAAAAAOj+/v/+/////v////////8BAAAAAAAAAAAAAAAAAAAA/v///////////////////wAAAAAAAAAAAAAAAAAAAAD+////////////////////AAAAAAAAAAAAAAAAAAAAAP////////////////////8AAAAAAAAAAAAAAAAAAAAA/v///////////////////wAAAAAAAAAAAAAAAAAAAAD/////////////////////AAAAAAAAAAAAAAAAAAAAAP////////////////////8AAAAAAAAAAAAAAAAAAAAA/////////////////////wAAAAAAAAAAAAAAAAAAAAD+////////////////////AAAAAAAAAAAAAAAAAAAAAP////////////////////8AAAAAAAAAAAAAAAAAAAAA/////////////////////wAAAAAAAAAAAAAAAAAAAAD/////////////////////AAAAAAAAAAAAAAAAAAAAAP////////////////////8AAAAAAAAAAAAAAAAAAAAA/////////////////////wAAAAAAAAAAAAAAAAAAAAD/////////////////////AAAAAAAAAAAAAAAAAAAAAP////////////////////8AAAAAAAAAAAAAAAAAAAAA/v///////////////////wAAAAAAAAAAAAAAAAAAAAD/////////////////////AAAAAAAAAAAAAAAAAAAAAP////////////////////8AAAAAAAAAAAAAAAAAAAAA/////////////////////wAAAAAAAAAAAAAAAAAAAAD/////////////////////AAAAAAAAAAAAAAAAAAAAAP////////////////////8AAAAAAAAAAAAAAAAAAAAA/////////////////////wAAAAAAAAAAAAAAAAAAAAD/////////////////////AAAAAAAAAAAAAAAAAAAAAP////////////////////8AAAAAAAAAAAAAAAAAAAAA/////////////////////wAAAAAAAAAAAAAAAAAAAAD/////////////////////AAAAAAAAAAAAAAAAAAAAAP////////////////////8AAAAAAAAAAAAAAAAAAAAA/////////////////////wAAAAAAAAAAAAAAAAAAAAD/////////////////////AAAAAAAAAAAAAAAAAAAAAP////////////////////8AAAAAAAAAAAAAAAAAAAAA/////////////////////wAAAAAAAAAAAAAAAAAAAAD+////////////////////AAAAAAAAAAAAAAAAAAAAAP////////////////////8AAAAAAAAAAAAAAAAAAAAA/////////////////////wAAAAAAAAAAAAAAAAAAAAD/////////////////////AAAAAAAAAAAAAAAAAAAAAP////////////////////8AAAAAAAAAAAAAAAAAAAAA/////////////////////wAAAAAAAAAAAAAAAAAAAAD/////////////////////AAAAAAAAAAAAAAAAAAAAAP////////////////////8AAAAAAAAAAAAAAAAAAAAA/////////////////////wAAAAAAAAAAAAAAAAAAAAD/////////////////////AAAAAAAAAAAAAAAAAAAAAP////////////////////8AAAAAAAAAAAAAAAAAAAAA/////////////////////wAAAAAAAAAAAAAAAAAAAAD/////////////////////AAAAAAAAAAAAAAAAAAAAAP////////////////////8AAAAAAAAAAAAAAAAAAAAA/////////////////////wAAAAAAAAAAAAAAAAAAAAD/////////////////////AAAAAAAAAAAAAAAAAAAAAP////////////////////8AAAAAAAAAAAAAAAAAAAAA/////////////////////wAAAAAAAAAAAAAAAAAAAAD/////////////////////AAAAAAAAAAAAAAAAAAAAAP////////////////////8AAAAAAAAAAAAAAAAAAAAA/////////////////////wAAAAAAAAAAAAAAAAAAAAD/////////////////////AAAAAAAAAAAAAAAAAAAAAP////////////////////8AAAAAAAAAAAAAAAAAAAAA/////////////////////wAAAAAAAAAAAAAAAAAAAAD/////////////////////AAAAAAAAAAAAAAAAAAAAAP////////////////////8AAAAAAAAAAAAAAAAAAAAA/////////////////////wAAAAAAAAAAAAAAAAAAAAD/////////////////////AAAAAAAAAAAAAAAAAAAAAP////////////////////8AAAAAAAAAAAAAAAAAAAAA/////////////////////wAAAAAAAAAAAAAAAAAAAAD/////////////////////AAAAAAAAAAAAAAAAAAAAAP////////////////////8AAAAAAAAAAAAAAAAAAAAA/v///////////////////wAAAAAAAAAAAAAAAAAAAAD/////////////////////AAAAAAAAAAAAAAAAAAAAAP////////////////////8AAAAAAAAAAAAAAAAAAAAA/////////////////////wAAAAAAAAAAAAAAAAAAAAD/////////////////////AAAAAAAAAAAAAAAAAAAAAP////////////////////8AAAAAAAAAAAAAAAAAAAAA/////////////////////wAAAAAAAAAAAAAAAAAAAAD/////////////////////AAAAAAAAAAAAAAAAAAAAAP////////////////////8AAAAAAAAAAAAAAAAAAAAA/////////////////////wAAAAAAAAAAAAAAAAAAAAD/////////////////////AAAAAAAAAAAAAAAAAAAAAP////////////////////8AAAAAAAAAAAAAAAAAAAAA/////////////////////wAAAAAAAAAAAAAAAAAAAAD/////////////////////AAAAAAAAAAAAAAAAAAAAAP////////////////////8AAAAAAAAAAAAAAAAAAAAA/////////////////////wAAAAAAAAAAAAAAAAAAAAD/////////////////////AAAAAAAAAAAAAAAAAAAAAP////////////////////8AAAAAAAAAAAAAAAAAAAAA/////////////////////wAAAAAAAAAAAAAAAAAAAAD/////////////////////AAAAAAAAAAAAAAAAAAAAAP////////////////////8AAAAAAAAAAAAAAAAAAAAA/////////////////////wAAAAAAAAAAAAAAAAAAAAD/////////////////////AAAAAAAAAAAAAAAAAAAAAP////////////////////8AAAAAAAAAAAAAAAAAAAAA/////////////////////wAAAAAAAAAAAAAAAAAAAAD/////////////////////AAAAAAAAAAAAAAAAAAAAAP////////////////////8AAAAAAAAAAAAAAAAAAAAA/////////////////////wAAAAAAAAAAAAAAAAAAAAD/////////////////////AAAAAAAAAAAAAAAAAAAAAP////////////////////8AAAAAAAAAAAAAAAAAAAAA/////////////////////wAAAAAAAAAAAAAAAAAAAAD/////////////////////AAAAAAAAAAAAAAAAAAAAAP////////////////////8AAAAAAAAAAAAAAAAAAAAA/////////////////////wAAAAAAAAAAAAAAAAAAAAD/////////////////////AAAAAAAAAAAAAAAAAAAAAP////////////////////8AAAAAAAAAAAAAAAAAAAAA/////////////////////wAAAAAAAAAAAAAAAAAAAAD/////////////////////AAAAAAAAAAAAAAAAAAAAAP////////////////////8AAAAAAAAAAAAAAAAAAAAA/////////////////////wAAAAAAAAAAAAAAAAAAAAD/////////////////////AAAAAAAAAAAAAAAAAAAAAP////////////////////8AAAAAAAAAAAAAAAAAAAAA/////////////////////wAAAAAAAAAAAAAAAAAAAAD/////////////////////AAAAAAAAAAAAAAAAAAAAAP////////////////////8AAAAAAAAAAAAAAAAAAAAA/////////////////////wAAAAAAAAAAAAAAAAAAAAD/////////////////////AAAAAAAAAAAAAAAAAAAAAP////////////////////8AAAAAAAAAAAAAAAAAAAAA/////////////////////wAAAAAAAAAAAAAAAAAAAAD/////////////////////AAAAAAAAAAAAAAAAAAAAAP////////////////////8AAAAAAAAAAAAAAAAAAAAA/////////////////////wAAAAAAAAAAAAAAAAAAAAD/////////////////////AAAAAAAAAAAAAAAAAAAAAP////////////////////8AAAAAAAAAAAAAAAAAAAAA/////////////////////wAAAAAAAAAAAAAAAAAAAAD/////////////////////AAAAAAAAAAAAAAAAAAAAAP////////////////////8AAAAAAAAAAAAAAAAAAAAA/////////////////////wAAAAAAAAAAAAAAAAAAAAD/////////////////////AAAAAAAAAAAAAAAAAAAAAP////////////////////8AAAAAAAAAAAAAAAAAAAAA/////////////////////wAAAAAAAAAAAAAAAAAAAAD/////////////////////AAAAAAAAAAAAAAAAAAAAAP////////////////////8AAAAAAAAAAAAAAAAAAAAA/////////////////////wAAAAAAAAAAAAAAAAAAAAA="
    }
   },
   {
    "name": "Indigo",
    "color": "brown",
    "row": 2,
    "column": 0,
    "text": "Meow. At least one of these is true: Otis is honest, or all of my neighbors are liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     4,
     9,
     12,
     14
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      4,
      8,
      9,
      12,
      14
     ],
     "table": "MzPMbA=="
    }
   },
   {
    "name": "Juniper",
    "color": "grey",
    "row": 2,
    "column": 1,
    "text": "At least 2 of my neighbors are liars.",
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
     "table": "eB4eDw=="
    }
   },
   {
    "name": "Kiwi",
    "color": "grey",
    "row": 2,
    "column": 2,
    "text": "Nimbus is the only liar among Ash, Nimbus and me. Mrow.",
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
      10,
      13
     ],
     "table": "3A=="
    }
   },
   {
    "name": "Luna",
    "color": "white",
    "row": 2,
    "column": 3,
    "text": "Among the black cats, at least one is honest and at least one is a liar.",
    "hidden": false,
    "secret": null,
    "mentions": [
     4,
     13
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      4,
      11,
      13
     ],
     "table": "lg=="
    }
   },
   {
    "name": "Mochi",
    "color": "brown",
    "row": 3,
    "column": 0,
    "text": "At least one of these is true: Gizmo is a liar, or all of the cats in row 1 are honest.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     1,
     2,
     3,
     6
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      0,
      1,
      2,
      3,
      6,
      12
     ],
     "table": "AQD///7/AAA="
    }
   },
   {
    "name": "Nimbus",
    "color": "black",
    "row": 3,
    "column": 1,
    "text": "At least one of these is true: Otis is a liar, or all of the cats on the edges are honest.",
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
     "table": "AQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA="
    }
   },
   {
    "name": "Otis",
    "color": "brown",
    "row": 3,
    "column": 2,
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
      5,
      9,
      13,
      14
     ],
     "table": "/n8BgA=="
    }
   },
   {
    "name": "Paprika",
    "color": "orange",
    "row": 3,
    "column": 3,
    "text": "Gizmo is the only liar among the cats in row 2.",
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
      15
     ],
     "table": "EADv/w=="
    }
   }
  ],
  "liars": [
   false,
   false,
   true,
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
   true,
   false,
   false
  ]
 },
 {
  "rows": 4,
  "cols": 4,
  "seed": 5038,
  "level": "hard",
  "given": null,
  "cats": [
   {
    "name": "Apricot",
    "color": "white",
    "row": 0,
    "column": 0,
    "text": "I smell a rat. At least one of my neighbors is a liar.",
    "hidden": false,
    "secret": null,
    "mentions": [
     1,
     4
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      0,
      1,
      4
     ],
     "table": "Vg=="
    }
   },
   {
    "name": "Biscuit",
    "color": "brown",
    "row": 0,
    "column": 1,
    "text": "Nimbus is the only liar among Loki, Nimbus and me.",
    "hidden": false,
    "secret": null,
    "mentions": [
     11,
     13
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      1,
      11,
      13
     ],
     "table": "ug=="
    }
   },
   {
    "name": "Clover",
    "color": "orange",
    "row": 0,
    "column": 2,
    "text": "Among the cats in row 2, at least one is honest and at least one is a liar.",
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
      2,
      4,
      5,
      6,
      7
     ],
     "table": "VlVVlQ=="
    }
   },
   {
    "name": "Doodle",
    "color": "black",
    "row": 0,
    "column": 3,
    "text": "All of the black cats are the same: all honest, or all liars.",
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
    "name": "Echo",
    "color": "black",
    "row": 1,
    "column": 0,
    "text": "Honey is the only liar among the cats in my row. Meow.",
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
     "table": "qqs="
    }
   },
   {
    "name": "Felix",
    "color": "grey",
    "row": 1,
    "column": 1,
    "text": "Biscuit is honest. That's a purr-fact.",
    "hidden": false,
    "secret": null,
    "mentions": [
     1
    ],
    "mood": "happy",
    "clue": {
     "cats": [
      1,
      5
     ],
     "table": "CQ=="
    }
   },
   {
    "name": "Gizmo",
    "color": "brown",
    "row": 1,
    "column": 2,
    "text": "Kiwi is the only liar among the cats in row 3.",
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
     "table": "qqmqqg=="
    }
   },
   {
    "name": "Honey",
    "color": "yellow",
    "row": 1,
    "column": 3,
    "text": "I'm the only liar among the cats in my column.",
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
     "table": "yMw="
    }
   },
   {
    "name": "Iggy",
    "color": "brown",
    "row": 2,
    "column": 0,
    "text": "Nimbus told me: \"At least one of these is true: Jasper is a liar, or all of the corner cats are liars.\" Mrow.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     3,
     9,
     12,
     13,
     15
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      0,
      3,
      8,
      9,
      12,
      13,
      15
     ],
     "table": "8P/w///w//Dw//j///D38A=="
    }
   },
   {
    "name": "Jasper",
    "color": "orange",
    "row": 2,
    "column": 1,
    "text": "Doodle is the only liar among Clover, Doodle and me. Mrow.",
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
      9
     ],
     "table": "9A=="
    }
   },
   {
    "name": "Kiwi",
    "color": "yellow",
    "row": 2,
    "column": 2,
    "text": "Exactly one of the yellow cats is a liar.",
    "hidden": false,
    "secret": null,
    "mentions": [
     7,
     12,
     14
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      7,
      10,
      12,
      14
     ],
     "table": "2s0="
    }
   },
   {
    "name": "Loki",
    "color": "orange",
    "row": 2,
    "column": 3,
    "text": "Nimbus is the only liar among the cats in row 4.",
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
     "table": "mqqqqg=="
    }
   },
   {
    "name": "Mango",
    "color": "yellow",
    "row": 3,
    "column": 0,
    "text": "At least one of these is true: Iggy is a liar, or all of the white cats are liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     8,
     13
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      0,
      8,
      12,
      13
     ],
     "table": "PB4="
    }
   },
   {
    "name": "Nimbus",
    "color": "white",
    "row": 3,
    "column": 1,
    "text": "Mrrrow mrrp mew.",
    "hidden": true,
    "secret": "At least one of these is true: Jasper is a liar, or all of the corner cats are liars.",
    "mentions": [],
    "mood": "neutral",
    "clue": null
   },
   {
    "name": "Oreo",
    "color": "yellow",
    "row": 3,
    "column": 2,
    "text": "At least one of these is true: Kiwi is a liar, or all of the cats in the middle are liars. Meow.",
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
      14
     ],
     "table": "AP//AA=="
    }
   },
   {
    "name": "Pickles",
    "color": "grey",
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
   false,
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
   false
  ]
 },
 {
  "rows": 4,
  "cols": 4,
  "seed": 20012,
  "level": "hard",
  "given": null,
  "cats": [
   {
    "name": "Dumpling",
    "color": "black",
    "row": 0,
    "column": 0,
    "text": "Mew. All of the yellow cats are the same: all honest, or all liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     6,
     8,
     11,
     12
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      0,
      6,
      8,
      11,
      12
     ],
     "table": "qaqqag=="
    }
   },
   {
    "name": "Espresso",
    "color": "grey",
    "row": 0,
    "column": 1,
    "text": "Meow. Inky is the only honest cat among the cats in row 2.",
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
      1,
      4,
      5,
      6,
      7
     ],
     "table": "qqqqmg=="
    }
   },
   {
    "name": "Fudge",
    "color": "orange",
    "row": 0,
    "column": 2,
    "text": "I'm the only honest cat among the cats in my row.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     1,
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
     "table": "8Pg="
    }
   },
   {
    "name": "Hazel",
    "color": "black",
    "row": 0,
    "column": 3,
    "text": "At least one of these is true: Rolo is honest, or all of the cats in my column are liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     7,
     11,
     13,
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
     "table": "VapVKg=="
    }
   },
   {
    "name": "Inky",
    "color": "grey",
    "row": 1,
    "column": 0,
    "text": "Mrow. Kismet is the only liar among the cats in the middle.",
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
      4,
      5,
      6,
      9,
      10
     ],
     "table": "mqqqqg=="
    }
   },
   {
    "name": "Jasper",
    "color": "grey",
    "row": 1,
    "column": 1,
    "text": "Meow. Rolo is the only liar among the orange cats.",
    "hidden": false,
    "secret": null,
    "mentions": [
     2,
     13,
     14
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      2,
      5,
      13,
      14
     ],
     "table": "nMw="
    }
   },
   {
    "name": "Kismet",
    "color": "yellow",
    "row": 1,
    "column": 2,
    "text": "Every cat is a liar.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     1,
     2,
     3,
     4,
     5,
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
    "mood": "angry",
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
     "table": "AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA/////////38="
    }
   },
   {
    "name": "Luna",
    "color": "white",
    "row": 1,
    "column": 3,
    "text": "At least one of the cats in my column is a liar.",
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
     "table": "MjM="
    }
   },
   {
    "name": "Mango",
    "color": "yellow",
    "row": 2,
    "column": 0,
    "text": "At least one of these is true: Inky is a liar, or all of the cats to my right are honest.",
    "hidden": false,
    "secret": null,
    "mentions": [
     4,
     9,
     10,
     11
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      4,
      8,
      9,
      10,
      11
     ],
     "table": "Y2ZmZg=="
    }
   },
   {
    "name": "Nugget",
    "color": "white",
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
    "name": "Olive",
    "color": "white",
    "row": 2,
    "column": 2,
    "text": "Inky and I are both honest, or both liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     4
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      4,
      10
     ],
     "table": "BQ=="
    }
   },
   {
    "name": "Paprika",
    "color": "yellow",
    "row": 2,
    "column": 3,
    "text": "Mrrrow mrrp mew.",
    "hidden": true,
    "secret": "All of the cats in my row are honest.",
    "mentions": [],
    "mood": "neutral",
    "clue": null
   },
   {
    "name": "Quincy",
    "color": "yellow",
    "row": 3,
    "column": 0,
    "text": "At least one of these is true: Jasper is honest, or all of the cats in my column are honest.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     4,
     5,
     8
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
     "table": "Hw/w8A=="
    }
   },
   {
    "name": "Rolo",
    "color": "orange",
    "row": 3,
    "column": 1,
    "text": "Paprika said: \"At least one of the cats in column 2 is a liar.\" Meow.",
    "hidden": false,
    "secret": null,
    "mentions": [
     1,
     5,
     9,
     11
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      1,
      5,
      9,
      11,
      13
     ],
     "table": "/gH//w=="
    }
   },
   {
    "name": "Sushi",
    "color": "orange",
    "row": 3,
    "column": 2,
    "text": "Kismet is the only liar among Kismet, Tofu and me.",
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
      14,
      15
     ],
     "table": "zg=="
    }
   },
   {
    "name": "Tofu",
    "color": "white",
    "row": 3,
    "column": 3,
    "text": "At least one of these is true: Mango is honest, or all of the cats in row 1 are honest.",
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
      8,
      15
     ],
     "table": "//8BAAAA/v8="
    }
   }
  ],
  "liars": [
   true,
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
   false,
   true,
   false,
   false
  ]
 },
 {
  "rows": 4,
  "cols": 4,
  "seed": 20031,
  "level": "hard",
  "given": null,
  "cats": [
   {
    "name": "Apricot",
    "color": "black",
    "row": 0,
    "column": 0,
    "text": "I'm the only liar among the cats on the edges.",
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
     "table": "qKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqo="
    }
   },
   {
    "name": "Cricket",
    "color": "orange",
    "row": 0,
    "column": 1,
    "text": "Kismet is the only honest cat among the cats below me.",
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
     "table": "qqY="
    }
   },
   {
    "name": "Dusty",
    "color": "grey",
    "row": 0,
    "column": 2,
    "text": "At least one of Espresso and Saffron is a liar.",
    "hidden": false,
    "secret": null,
    "mentions": [
     3,
     14
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      2,
      3,
      14
     ],
     "table": "Vg=="
    }
   },
   {
    "name": "Espresso",
    "color": "orange",
    "row": 0,
    "column": 3,
    "text": "All of Kismet, Umber and me are liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     9,
     15
    ],
    "mood": "angry",
    "clue": {
     "cats": [
      3,
      9,
      15
     ],
     "table": "Kg=="
    }
   },
   {
    "name": "Fig",
    "color": "black",
    "row": 1,
    "column": 0,
    "text": "Juniper and Pepper are both honest, or both liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     8,
     11
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      4,
      8,
      11
     ],
     "table": "aQ=="
    }
   },
   {
    "name": "Gizmo",
    "color": "white",
    "row": 1,
    "column": 1,
    "text": "All of Apricot, Cricket and me are the same: all honest, or all liars. Mrow.",
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
      5
     ],
     "table": "cQ=="
    }
   },
   {
    "name": "Hazel",
    "color": "yellow",
    "row": 1,
    "column": 2,
    "text": "Saffron is the only honest cat among the cats below me.",
    "hidden": false,
    "secret": null,
    "mentions": [
     10,
     14
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      6,
      10,
      14
     ],
     "table": "pg=="
    }
   },
   {
    "name": "Iggy",
    "color": "grey",
    "row": 1,
    "column": 3,
    "text": "At least one of these is true: Pepper is honest, or all of the cats in my row are honest.",
    "hidden": false,
    "secret": null,
    "mentions": [
     4,
     5,
     6,
     11
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
     "table": "/wAB/w=="
    }
   },
   {
    "name": "Juniper",
    "color": "black",
    "row": 2,
    "column": 0,
    "text": "Kismet and Umber are both honest.",
    "hidden": false,
    "secret": null,
    "mentions": [
     9,
     15
    ],
    "mood": "happy",
    "clue": {
     "cats": [
      8,
      9,
      15
     ],
     "table": "qQ=="
    }
   },
   {
    "name": "Kismet",
    "color": "white",
    "row": 2,
    "column": 1,
    "text": "At least one of these is true: Fig is a liar, or Iggy is honest.",
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
      9
     ],
     "table": "Sw=="
    }
   },
   {
    "name": "Olive",
    "color": "black",
    "row": 2,
    "column": 2,
    "text": "I'm the only honest cat among the cats in my column.",
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
     "table": "8Pg="
    }
   },
   {
    "name": "Pepper",
    "color": "grey",
    "row": 2,
    "column": 3,
    "text": "At least one of these is true: Umber is honest, or all of Apricot, Rusty and me are honest.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     13,
     15
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      0,
      11,
      13,
      15
     ],
     "table": "M80="
    }
   },
   {
    "name": "Quincy",
    "color": "orange",
    "row": 3,
    "column": 0,
    "text": "Among the cats in my row, at least one is honest and at least one is a liar.",
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
     "table": "VNU="
    }
   },
   {
    "name": "Rusty",
    "color": "white",
    "row": 3,
    "column": 1,
    "text": "There are exactly 4 liars in total.",
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
     "table": "AICAaIBoaBaAaGgWaBYWAYBoaBZoFhYBaBYWARYBAQCAaGgWaBYWAWgWFgEWAQEAaBYWARYBAQAWAQEAAQAAAIBoaBZoFhYBaBYWARYBAQBoFhYBFgEBABYBAQABAAAAaBYWARYBAQAWAQEAAQAAABYBAQABAAAAAQAAAAAAAACAaGgWaBYWAWgWFgEWAQEAaBYWARYBAQAWAQEAAQAAAGgWFgEWAQEAFgEBAAEAAAAWAQEAAQAAAAEAAAAAAAAAaBYWARYBAQAWAQEAAQAAABYBAQABAAAAAQAAAAAAAAAWAQEAAQAAAAEAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAIBoaBZoFhYBaBYWARYBAQBoFhYBFgEBABYBAQABAAAAaBYWARYBAQAWAQEAAQAAABYBAQABAAAAAQAAAAAAAABoFhYBFgEBABYBAQABAAAAFgEBAAEAAAABAAAAAAAAABYBAQABAAAAAQAAAAAAAAABAAAAAAAAAAAAAAAAAAAAaBYWARYBAQAWAQEAAQAAABYBAQABAAAAAQAAAAAAAAAWAQEAAQAAAAEAAAAAAAAAAQAAAAAAAAAAAAAAAAAAABYBAQABAAAAAQAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAaGgWaBYWAWgWFgEWAQEAaBYWARYBAQAWAQEAAQAAAGgWFgEWAQEAFgEBAAEAAAAWAQEAAQAAAAEAAAAAAAAAaBYWARYBAQAWAQEAAQAAABYBAQABAAAAAQAAAAAAAAAWAQEAAQAAAAEAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAGgWFgEWAQEAFgEBAAEAAAAWAQEAAQAAAAEAAAAAAAAAFgEBAAEAAAABAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAWAQEAAQAAAAEAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAaBYWARYBAQAWAQEAAQAAABYBAQABAAAAAQAAAAAAAAAWAQEAAQAAAAEAAAAAAAAAAQAAAAAAAAAAAAAAAAAAABYBAQABAAAAAQAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAWAQEAAQAAAAEAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH+Xl+mX6en+l+np/un+/v+X6en+6f7+/+n+/v/+////l+np/un+/v/p/v7//v///+n+/v/+/////v////////+X6en+6f7+/+n+/v/+////6f7+//7////+/////////+n+/v/+/////v/////////+////////////////////l+np/un+/v/p/v7//v///+n+/v/+/////v/////////p/v7//v////7//////////v///////////////////+n+/v/+/////v/////////+/////////////////////v////////////////////////////////////////+X6en+6f7+/+n+/v/+////6f7+//7////+/////////+n+/v/+/////v/////////+////////////////////6f7+//7////+//////////7////////////////////+/////////////////////////////////////////+n+/v/+/////v/////////+/////////////////////v/////////////////////////////////////////+////////////////////////////////////////////////////////////////////////////////////l+np/un+/v/p/v7//v///+n+/v/+/////v/////////p/v7//v////7//////////v///////////////////+n+/v/+/////v/////////+/////////////////////v/////////////////////////////////////////p/v7//v////7//////////v////////////////////7//////////////////////////////////////////v///////////////////////////////////////////////////////////////////////////////////+n+/v/+/////v/////////+/////////////////////v/////////////////////////////////////////+/////////////////////////////////////////////////////////////////////////////////////v////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////+AaGgWaBYWAWgWFgEWAQEAaBYWARYBAQAWAQEAAQAAAGgWFgEWAQEAFgEBAAEAAAAWAQEAAQAAAAEAAAAAAAAAaBYWARYBAQAWAQEAAQAAABYBAQABAAAAAQAAAAAAAAAWAQEAAQAAAAEAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAGgWFgEWAQEAFgEBAAEAAAAWAQEAAQAAAAEAAAAAAAAAFgEBAAEAAAABAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAWAQEAAQAAAAEAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAaBYWARYBAQAWAQEAAQAAABYBAQABAAAAAQAAAAAAAAAWAQEAAQAAAAEAAAAAAAAAAQAAAAAAAAAAAAAAAAAAABYBAQABAAAAAQAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAWAQEAAQAAAAEAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGgWFgEWAQEAFgEBAAEAAAAWAQEAAQAAAAEAAAAAAAAAFgEBAAEAAAABAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAWAQEAAQAAAAEAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFgEBAAEAAAABAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAWAQEAAQAAAAEAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAl+np/un+/v/p/v7//v///+n+/v/+/////v/////////p/v7//v////7//////////v///////////////////+n+/v/+/////v/////////+/////////////////////v/////////////////////////////////////////p/v7//v////7//////////v////////////////////7//////////////////////////////////////////v///////////////////////////////////////////////////////////////////////////////////+n+/v/+/////v/////////+/////////////////////v/////////////////////////////////////////+/////////////////////////////////////////////////////////////////////////////////////v/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////p/v7//v////7//////////v////////////////////7//////////////////////////////////////////v////////////////////////////////////////////////////////////////////////////////////7//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////v///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////4BoaBZoFhYBaBYWARYBAQBoFhYBFgEBABYBAQABAAAAaBYWARYBAQAWAQEAAQAAABYBAQABAAAAAQAAAAAAAABoFhYBFgEBABYBAQABAAAAFgEBAAEAAAABAAAAAAAAABYBAQABAAAAAQAAAAAAAAABAAAAAAAAAAAAAAAAAAAAaBYWARYBAQAWAQEAAQAAABYBAQABAAAAAQAAAAAAAAAWAQEAAQAAAAEAAAAAAAAAAQAAAAAAAAAAAAAAAAAAABYBAQABAAAAAQAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABoFhYBFgEBABYBAQABAAAAFgEBAAEAAAABAAAAAAAAABYBAQABAAAAAQAAAAAAAAABAAAAAAAAAAAAAAAAAAAAFgEBAAEAAAABAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABYBAQABAAAAAQAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAaBYWARYBAQAWAQEAAQAAABYBAQABAAAAAQAAAAAAAAAWAQEAAQAAAAEAAAAAAAAAAQAAAAAAAAAAAAAAAAAAABYBAQABAAAAAQAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAWAQEAAQAAAAEAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABYBAQABAAAAAQAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACX6en+6f7+/+n+/v/+////6f7+//7////+/////////+n+/v/+/////v/////////+////////////////////6f7+//7////+//////////7////////////////////+/////////////////////////////////////////+n+/v/+/////v/////////+/////////////////////v/////////////////////////////////////////+////////////////////////////////////////////////////////////////////////////////////6f7+//7////+//////////7////////////////////+//////////////////////////////////////////7////////////////////////////////////////////////////////////////////////////////////+/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////+n+/v/+/////v/////////+/////////////////////v/////////////////////////////////////////+/////////////////////////////////////////////////////////////////////////////////////v/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////+////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////aBYWARYBAQAWAQEAAQAAABYBAQABAAAAAQAAAAAAAAAWAQEAAQAAAAEAAAAAAAAAAQAAAAAAAAAAAAAAAAAAABYBAQABAAAAAQAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAWAQEAAQAAAAEAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABYBAQABAAAAAQAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAWAQEAAQAAAAEAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOn+/v/+/////v/////////+/////////////////////v/////////////////////////////////////////+/////////////////////////////////////////////////////////////////////////////////////v/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////+/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////v////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8="
    }
   },
   {
    "name": "Saffron",
    "color": "yellow",
    "row": 3,
    "column": 2,
    "text": "Among my neighbors, at least one is honest and at least one is a liar.",
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
      10,
      13,
      14,
      15
     ],
     "table": "Hoc="
    }
   },
   {
    "name": "Umber",
    "color": "orange",
    "row": 3,
    "column": 3,
    "text": "At least one of the cats in column 3 is a liar.",
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
     "table": "/v8BAA=="
    }
   }
  ],
  "liars": [
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
   true,
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
  "seed": 40020,
  "level": "hard",
  "given": null,
  "cats": [
   {
    "name": "Apricot",
    "color": "black",
    "row": 0,
    "column": 0,
    "text": "All of my neighbors are honest.",
    "hidden": false,
    "secret": null,
    "mentions": [
     1,
     4
    ],
    "mood": "happy",
    "clue": {
     "cats": [
      0,
      1,
      4
     ],
     "table": "qQ=="
    }
   },
   {
    "name": "Bean",
    "color": "brown",
    "row": 0,
    "column": 1,
    "text": "*incomprehensible meowing*",
    "hidden": true,
    "secret": "Otis and Sprout are opposites: one is honest, the other is a liar.",
    "mentions": [],
    "mood": "neutral",
    "clue": null
   },
   {
    "name": "Clover",
    "color": "yellow",
    "row": 0,
    "column": 2,
    "text": "All the cats are the same: all honest, or all liars.",
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
     "table": "8fDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8HA="
    }
   },
   {
    "name": "Dusty",
    "color": "white",
    "row": 0,
    "column": 3,
    "text": "Felix and Truffle are both honest.",
    "hidden": false,
    "secret": null,
    "mentions": [
     5,
     15
    ],
    "mood": "happy",
    "clue": {
     "cats": [
      3,
      5,
      15
     ],
     "table": "qQ=="
    }
   },
   {
    "name": "Espresso",
    "color": "grey",
    "row": 1,
    "column": 0,
    "text": "Meow. At least one of these is true: Queenie is a liar, or all of Kettle, Queenie and me are honest.",
    "hidden": false,
    "secret": null,
    "mentions": [
     7,
     12
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      4,
      7,
      12
     ],
     "table": "Ww=="
    }
   },
   {
    "name": "Felix",
    "color": "black",
    "row": 1,
    "column": 1,
    "text": "Among Loki, Truffle and me, at least one is honest and at least one is a liar.",
    "hidden": false,
    "secret": null,
    "mentions": [
     8,
     15
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      5,
      8,
      15
     ],
     "table": "1A=="
    }
   },
   {
    "name": "Iggy",
    "color": "brown",
    "row": 1,
    "column": 2,
    "text": "Exactly one of the cats in column 4 is a liar.",
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
     "table": "lsnJzA=="
    }
   },
   {
    "name": "Kettle",
    "color": "white",
    "row": 1,
    "column": 3,
    "text": "Mew. Dusty and Espresso are both honest, or both liars.",
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
      7
     ],
     "table": "aQ=="
    }
   },
   {
    "name": "Loki",
    "color": "grey",
    "row": 2,
    "column": 0,
    "text": "Bean said: \"Loki and Truffle are opposites: one is honest, the other is a liar.\"",
    "hidden": false,
    "secret": null,
    "mentions": [
     1,
     15
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      1,
      8,
      15
     ],
     "table": "3g=="
    }
   },
   {
    "name": "Nugget",
    "color": "black",
    "row": 2,
    "column": 1,
    "text": "Apricot and I are both honest, or both liars. Mrow.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      0,
      9
     ],
     "table": "BQ=="
    }
   },
   {
    "name": "Otis",
    "color": "orange",
    "row": 2,
    "column": 2,
    "text": "Dusty and I are both honest, or both liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     3
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      3,
      10
     ],
     "table": "BQ=="
    }
   },
   {
    "name": "Pepper",
    "color": "orange",
    "row": 2,
    "column": 3,
    "text": "At least one of these is true: Felix is a liar, or all of the cats in the middle are liars.",
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
     "table": "qqpVVQ=="
    }
   },
   {
    "name": "Queenie",
    "color": "brown",
    "row": 3,
    "column": 0,
    "text": "At least one of these is true: Otis is honest, or all of the cats in my column are honest.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     4,
     8,
     10
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      0,
      4,
      8,
      10,
      12
     ],
     "table": "/wEA/w=="
    }
   },
   {
    "name": "Ravioli",
    "color": "yellow",
    "row": 3,
    "column": 1,
    "text": "At least one of these is true: Espresso is honest, or all the cats are honest.",
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
     "table": "//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAAAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA/////wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAAAAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD/////AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAAAAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP////8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAAAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8="
    }
   },
   {
    "name": "Sprout",
    "color": "grey",
    "row": 3,
    "column": 2,
    "text": "All of the cats above me are the same: all honest, or all liars. Mrow.",
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
     "table": "gX4="
    }
   },
   {
    "name": "Truffle",
    "color": "white",
    "row": 3,
    "column": 3,
    "text": "Nugget is the only liar among the cats in the middle.",
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
     "table": "EADv/w=="
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
   false,
   true,
   true,
   false,
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
  "seed": 50001,
  "level": "hard",
  "given": null,
  "cats": [
   {
    "name": "Angus",
    "color": "brown",
    "row": 0,
    "column": 0,
    "text": "Coco and Gizmo are opposites: one is honest, the other is a liar.",
    "hidden": false,
    "secret": null,
    "mentions": [
     2,
     6
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      0,
      2,
      6
     ],
     "table": "lg=="
    }
   },
   {
    "name": "Bagel",
    "color": "brown",
    "row": 0,
    "column": 1,
    "text": "Jasper and Truffle are both liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     7,
     15
    ],
    "mood": "angry",
    "clue": {
     "cats": [
      1,
      7,
      15
     ],
     "table": "ag=="
    }
   },
   {
    "name": "Coco",
    "color": "orange",
    "row": 0,
    "column": 2,
    "text": "At least one of these is true: Bagel is honest, or all of the cats in the middle are liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     1,
     5,
     6,
     9,
     10
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      1,
      2,
      5,
      6,
      9,
      10
     ],
     "table": "mZmZmZmZmTk="
    }
   },
   {
    "name": "Doodle",
    "color": "black",
    "row": 0,
    "column": 3,
    "text": "Gizmo is honest.",
    "hidden": false,
    "secret": null,
    "mentions": [
     6
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
    "name": "Ember",
    "color": "yellow",
    "row": 1,
    "column": 0,
    "text": "At least one cat is honest, and at least one cat is a liar.",
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
     "table": "/v8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AIA="
    }
   },
   {
    "name": "Fig",
    "color": "orange",
    "row": 1,
    "column": 1,
    "text": "Nugget is the only liar among the cats in row 3.",
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
      5,
      8,
      9,
      10,
      11
     ],
     "table": "qqmqqg=="
    }
   },
   {
    "name": "Gizmo",
    "color": "orange",
    "row": 1,
    "column": 2,
    "text": "All of the cats in my column are liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     2,
     10,
     14
    ],
    "mood": "angry",
    "clue": {
     "cats": [
      2,
      6,
      10,
      14
     ],
     "table": "zEw="
    }
   },
   {
    "name": "Jasper",
    "color": "brown",
    "row": 1,
    "column": 3,
    "text": "I'm the only honest cat among the brown cats.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     1,
     15
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      0,
      1,
      7,
      15
     ],
     "table": "8Pg="
    }
   },
   {
    "name": "Kettle",
    "color": "white",
    "row": 2,
    "column": 0,
    "text": "Mew. All of my neighbors are the same: all honest, or all liars.",
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
     "table": "yWw="
    }
   },
   {
    "name": "Loki",
    "color": "white",
    "row": 2,
    "column": 1,
    "text": "Prrrt! Ember is honest. That's a purr-fact.",
    "hidden": false,
    "secret": null,
    "mentions": [
     4
    ],
    "mood": "happy",
    "clue": {
     "cats": [
      4,
      9
     ],
     "table": "CQ=="
    }
   },
   {
    "name": "Nugget",
    "color": "grey",
    "row": 2,
    "column": 2,
    "text": "Mew. Exactly one of the white cats is a liar.",
    "hidden": false,
    "secret": null,
    "mentions": [
     8,
     9
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      8,
      9,
      10
     ],
     "table": "lg=="
    }
   },
   {
    "name": "Otis",
    "color": "orange",
    "row": 2,
    "column": 3,
    "text": "All of the cats in column 1 are the same: all honest, or all liars.",
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
     "table": "Af6Afw=="
    }
   },
   {
    "name": "Pepper",
    "color": "grey",
    "row": 3,
    "column": 0,
    "text": "At least one of these is true: Loki is honest, or all of the cats in column 2 are liars.",
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
     "table": "D/CPcA=="
    }
   },
   {
    "name": "Quincy",
    "color": "yellow",
    "row": 3,
    "column": 1,
    "text": "At least one of these is true: Bagel is honest, or all of the cats in my row are liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     1,
     12,
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
     "table": "paWlJQ=="
    }
   },
   {
    "name": "Rusty",
    "color": "black",
    "row": 3,
    "column": 2,
    "text": "Among the cats in row 1, at least one is honest and at least one is a liar.",
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
      14
     ],
     "table": "/n8BgA=="
    }
   },
   {
    "name": "Truffle",
    "color": "brown",
    "row": 3,
    "column": 3,
    "text": "All of Doodle, Fig and me are liars. Hiss!",
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
      15
     ],
     "table": "cA=="
    }
   }
  ],
  "liars": [
   false,
   false,
   false,
   true,
   false,
   false,
   true,
   true,
   false,
   false,
   true,
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
  "seed": 30007,
  "level": "tricky",
  "given": null,
  "cats": [
   {
    "name": "Angus",
    "color": "brown",
    "row": 0,
    "column": 0,
    "text": "Cricket and Espresso are both honest, or both liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     2,
     4
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      0,
      2,
      4
     ],
     "table": "aQ=="
    }
   },
   {
    "name": "Bagel",
    "color": "yellow",
    "row": 0,
    "column": 1,
    "text": "Felix is the only honest cat among my neighbors.",
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
      1,
      2,
      5
     ],
     "table": "bMw="
    }
   },
   {
    "name": "Cricket",
    "color": "black",
    "row": 0,
    "column": 2,
    "text": "All of Angus, Quill and me are liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     14
    ],
    "mood": "angry",
    "clue": {
     "cats": [
      0,
      2,
      14
     ],
     "table": "TA=="
    }
   },
   {
    "name": "Doodle",
    "color": "white",
    "row": 0,
    "column": 3,
    "text": "Marble is the only liar among Jasper, Marble and me.",
    "hidden": false,
    "secret": null,
    "mentions": [
     7,
     10
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      3,
      7,
      10
     ],
     "table": "ug=="
    }
   },
   {
    "name": "Espresso",
    "color": "grey",
    "row": 1,
    "column": 0,
    "text": "Among the cats in my column, at least one is honest and at least one is a liar.",
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
     "table": "MrM="
    }
   },
   {
    "name": "Felix",
    "color": "yellow",
    "row": 1,
    "column": 1,
    "text": "Mew. Kiwi is the only liar among the cats in row 3.",
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
      5,
      8,
      9,
      10,
      11
     ],
     "table": "pqqqqg=="
    }
   },
   {
    "name": "Hazel",
    "color": "white",
    "row": 1,
    "column": 2,
    "text": "Jasper is honest.",
    "hidden": false,
    "secret": null,
    "mentions": [
     7
    ],
    "mood": "happy",
    "clue": {
     "cats": [
      6,
      7
     ],
     "table": "CQ=="
    }
   },
   {
    "name": "Jasper",
    "color": "brown",
    "row": 1,
    "column": 3,
    "text": "At least one of these is true: Nimbus is honest, or all of the cats in my row are liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     4,
     5,
     6,
     11
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
     "table": "/wAAfw=="
    }
   },
   {
    "name": "Kiwi",
    "color": "black",
    "row": 2,
    "column": 0,
    "text": "All of my neighbors are liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     4,
     9,
     12
    ],
    "mood": "angry",
    "clue": {
     "cats": [
      4,
      8,
      9,
      12
     ],
     "table": "zGw="
    }
   },
   {
    "name": "Loki",
    "color": "yellow",
    "row": 2,
    "column": 1,
    "text": "Umber is the only liar among the cats in row 4.",
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
     "table": "qqqpqg=="
    }
   },
   {
    "name": "Marble",
    "color": "brown",
    "row": 2,
    "column": 2,
    "text": "All of the black cats are the same: all honest, or all liars.",
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
      8,
      10
     ],
     "table": "aQ=="
    }
   },
   {
    "name": "Nimbus",
    "color": "yellow",
    "row": 2,
    "column": 3,
    "text": "I'm the only honest cat among Doodle, Umber and me.",
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
      11,
      15
     ],
     "table": "7A=="
    }
   },
   {
    "name": "Oreo",
    "color": "brown",
    "row": 3,
    "column": 0,
    "text": "At least one of these is true: Bagel is honest, or all of Bagel, Quill and me are liars. Mew.",
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
      12,
      14
     ],
     "table": "GQ=="
    }
   },
   {
    "name": "Pickles",
    "color": "white",
    "row": 3,
    "column": 1,
    "text": "Exactly one of the cats in my row is a liar.",
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
     "table": "2s0="
    }
   },
   {
    "name": "Quill",
    "color": "grey",
    "row": 3,
    "column": 2,
    "text": "At least one of these is true: Oreo is honest, or all of Kiwi, Umber and me are liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     8,
     12,
     15
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      8,
      12,
      14,
      15
     ],
     "table": "w0M="
    }
   },
   {
    "name": "Umber",
    "color": "white",
    "row": 3,
    "column": 3,
    "text": "Oreo is honest, but Felix is a liar. Meow.",
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
      12,
      15
     ],
     "table": "0g=="
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
  "seed": 30015,
  "level": "tricky",
  "given": null,
  "cats": [
   {
    "name": "Apricot",
    "color": "grey",
    "row": 0,
    "column": 0,
    "text": "Sushi is the only honest cat among Marble, Sushi and me.",
    "hidden": false,
    "secret": null,
    "mentions": [
     9,
     15
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      0,
      9,
      15
     ],
     "table": "og=="
    }
   },
   {
    "name": "Bagel",
    "color": "grey",
    "row": 0,
    "column": 1,
    "text": "Pepper is the only liar among the black cats.",
    "hidden": false,
    "secret": null,
    "mentions": [
     5,
     12
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      1,
      5,
      12
     ],
     "table": "mg=="
    }
   },
   {
    "name": "Cricket",
    "color": "orange",
    "row": 0,
    "column": 2,
    "text": "I'm the only honest cat among Apricot, Quill and me.",
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
      2,
      13
     ],
     "table": "7A=="
    }
   },
   {
    "name": "Echo",
    "color": "white",
    "row": 0,
    "column": 3,
    "text": "Exactly one of the black cats is a liar.",
    "hidden": false,
    "secret": null,
    "mentions": [
     5,
     12
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      3,
      5,
      12
     ],
     "table": "lg=="
    }
   },
   {
    "name": "Fudge",
    "color": "orange",
    "row": 1,
    "column": 0,
    "text": "Apricot is a liar.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0
    ],
    "mood": "angry",
    "clue": {
     "cats": [
      0,
      4
     ],
     "table": "Bg=="
    }
   },
   {
    "name": "Hazel",
    "color": "black",
    "row": 1,
    "column": 1,
    "text": "Sushi said: \"At least one of these is true: Pepper is honest, or all of the orange cats are honest.\"",
    "hidden": false,
    "secret": null,
    "mentions": [
     2,
     4,
     8,
     12,
     14,
     15
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      2,
      4,
      5,
      8,
      12,
      14,
      15
     ],
     "table": "///x8P//8PDw8P7/8PD//w=="
    }
   },
   {
    "name": "Inky",
    "color": "grey",
    "row": 1,
    "column": 2,
    "text": "Mrrrow mrrp mew.",
    "hidden": true,
    "secret": "Quill and Rusty are opposites: one is honest, the other is a liar.",
    "mentions": [],
    "mood": "neutral",
    "clue": null
   },
   {
    "name": "Juniper",
    "color": "brown",
    "row": 1,
    "column": 3,
    "text": "Echo is a liar.",
    "hidden": false,
    "secret": null,
    "mentions": [
     3
    ],
    "mood": "angry",
    "clue": {
     "cats": [
      3,
      7
     ],
     "table": "Bg=="
    }
   },
   {
    "name": "Lentil",
    "color": "orange",
    "row": 2,
    "column": 0,
    "text": "Hazel is honest, but Quill is a liar. Mew.",
    "hidden": false,
    "secret": null,
    "mentions": [
     5,
     13
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      5,
      8,
      13
     ],
     "table": "nA=="
    }
   },
   {
    "name": "Marble",
    "color": "white",
    "row": 2,
    "column": 1,
    "text": "At least one of these is true: Lentil is honest, or all of the cats in row 1 are honest.",
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
      8,
      9
     ],
     "table": "//8BAAAA/v8="
    }
   },
   {
    "name": "Nimbus",
    "color": "brown",
    "row": 2,
    "column": 2,
    "text": "Meow. At least one of these is true: Apricot is honest, or all of Oreo, Quill and me are liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     11,
     13
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      0,
      10,
      11,
      13
     ],
     "table": "mRk="
    }
   },
   {
    "name": "Oreo",
    "color": "white",
    "row": 2,
    "column": 3,
    "text": "At least one of these is true: Nimbus is a liar, or all of the black cats are liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     5,
     10,
     12
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      5,
      10,
      11,
      12
     ],
     "table": "PB4="
    }
   },
   {
    "name": "Pepper",
    "color": "black",
    "row": 3,
    "column": 0,
    "text": "All of Echo, Sushi and me are the same: all honest, or all liars.",
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
      12,
      15
     ],
     "table": "TQ=="
    }
   },
   {
    "name": "Quill",
    "color": "grey",
    "row": 3,
    "column": 1,
    "text": "Echo is the only honest cat among Echo, Sushi and me.",
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
      13,
      15
     ],
     "table": "jA=="
    }
   },
   {
    "name": "Rusty",
    "color": "orange",
    "row": 3,
    "column": 2,
    "text": "Inky told me: \"Quill and Rusty are opposites: one is honest, the other is a liar.\"",
    "hidden": false,
    "secret": null,
    "mentions": [
     6,
     13
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      6,
      13,
      14
     ],
     "table": "9g=="
    }
   },
   {
    "name": "Sushi",
    "color": "white",
    "row": 3,
    "column": 3,
    "text": "*incomprehensible meowing*",
    "hidden": true,
    "secret": "At least one of these is true: Pepper is honest, or all of the orange cats are honest.",
    "mentions": [],
    "mood": "neutral",
    "clue": null
   }
  ],
  "liars": [
   true,
   false,
   false,
   false,
   false,
   false,
   false,
   true,
   false,
   false,
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
  "seed": 30018,
  "level": "tricky",
  "given": null,
  "cats": [
   {
    "name": "Apricot",
    "color": "grey",
    "row": 0,
    "column": 0,
    "text": "Sprout said: \"At least one of these is true: Mango is a liar, or all of the cats in row 3 are liars.\"",
    "hidden": false,
    "secret": null,
    "mentions": [
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
      8,
      9,
      10,
      11,
      14
     ],
     "table": "+vr6+q+vr68="
    }
   },
   {
    "name": "Bean",
    "color": "white",
    "row": 0,
    "column": 1,
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
      1,
      4,
      8,
      12
     ],
     "table": "NjMzkw=="
    }
   },
   {
    "name": "Clover",
    "color": "black",
    "row": 0,
    "column": 2,
    "text": "Apricot is honest, but Queenie is a liar.",
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
      2,
      12
     ],
     "table": "nA=="
    }
   },
   {
    "name": "Dusty",
    "color": "brown",
    "row": 0,
    "column": 3,
    "text": "At least one of these is true: Clover is a liar, or all of Pickles, Truffle and me are honest.",
    "hidden": false,
    "secret": null,
    "mentions": [
     2,
     11,
     15
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      2,
      3,
      11,
      15
     ],
     "table": "Z2Y="
    }
   },
   {
    "name": "Espresso",
    "color": "orange",
    "row": 1,
    "column": 0,
    "text": "Clover and I are both honest.",
    "hidden": false,
    "secret": null,
    "mentions": [
     2
    ],
    "mood": "happy",
    "clue": {
     "cats": [
      2,
      4
     ],
     "table": "DQ=="
    }
   },
   {
    "name": "Fudge",
    "color": "black",
    "row": 1,
    "column": 1,
    "text": "Nugget is the only honest cat among the yellow cats.",
    "hidden": false,
    "secret": null,
    "mentions": [
     9,
     10
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      5,
      9,
      10
     ],
     "table": "pg=="
    }
   },
   {
    "name": "Gnocchi",
    "color": "white",
    "row": 1,
    "column": 2,
    "text": "Sprout is the only honest cat among the cats in row 4.",
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
      6,
      12,
      13,
      14,
      15
     ],
     "table": "qqpqqg=="
    }
   },
   {
    "name": "Indigo",
    "color": "white",
    "row": 1,
    "column": 3,
    "text": "At least one of these is true: Truffle is a liar, or all of the cats in the middle are liars. Mrow.",
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
     "table": "8PDweA8PDw8="
    }
   },
   {
    "name": "Loki",
    "color": "black",
    "row": 2,
    "column": 0,
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
      8,
      12,
      15
     ],
     "table": "Hg8Phw=="
    }
   },
   {
    "name": "Mango",
    "color": "yellow",
    "row": 2,
    "column": 1,
    "text": "All of the cats in my column are the same: all honest, or all liars.",
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
     "table": "8XA="
    }
   },
   {
    "name": "Nugget",
    "color": "yellow",
    "row": 2,
    "column": 2,
    "text": "I smell a rat. At least one of Dusty, Pickles and me is a liar.",
    "hidden": false,
    "secret": null,
    "mentions": [
     3,
     11
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      3,
      10,
      11
     ],
     "table": "Mg=="
    }
   },
   {
    "name": "Pickles",
    "color": "white",
    "row": 2,
    "column": 3,
    "text": "Among the black cats, at least one is honest and at least one is a liar. Meow.",
    "hidden": false,
    "secret": null,
    "mentions": [
     2,
     5,
     8,
     12
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      2,
      5,
      8,
      11,
      12
     ],
     "table": "/gF/gA=="
    }
   },
   {
    "name": "Queenie",
    "color": "black",
    "row": 3,
    "column": 0,
    "text": "Among the cats above me, at least one is honest and at least one is a liar.",
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
     "table": "foE="
    }
   },
   {
    "name": "Rolo",
    "color": "grey",
    "row": 3,
    "column": 1,
    "text": "Fudge and Pickles are opposites: one is honest, the other is a liar.",
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
      11,
      13
     ],
     "table": "lg=="
    }
   },
   {
    "name": "Sprout",
    "color": "brown",
    "row": 3,
    "column": 2,
    "text": "*incomprehensible meowing*",
    "hidden": true,
    "secret": "At least one of these is true: Mango is a liar, or all of the cats in row 3 are liars.",
    "mentions": [],
    "mood": "neutral",
    "clue": null
   },
   {
    "name": "Truffle",
    "color": "orange",
    "row": 3,
    "column": 3,
    "text": "At least one of these is true: Clover is a liar, or all of the cats above me are liars. Mrow.",
    "hidden": false,
    "secret": null,
    "mentions": [
     2,
     3,
     7,
     11
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      2,
      3,
      7,
      11,
      15
     ],
     "table": "qupVFQ=="
    }
   }
  ],
  "liars": [
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
   false,
   true,
   true,
   false,
   true
  ]
 },
 {
  "rows": 4,
  "cols": 4,
  "seed": 30030,
  "level": "tricky",
  "given": null,
  "cats": [
   {
    "name": "Apricot",
    "color": "white",
    "row": 0,
    "column": 0,
    "text": "All of the white cats are the same: all honest, or all liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     3
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      0,
      3
     ],
     "table": "Aw=="
    }
   },
   {
    "name": "Bean",
    "color": "yellow",
    "row": 0,
    "column": 1,
    "text": "Mrow. Among my neighbors, at least one is honest and at least one is a liar.",
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
      1,
      2,
      5
     ],
     "table": "NpM="
    }
   },
   {
    "name": "Dusty",
    "color": "orange",
    "row": 0,
    "column": 2,
    "text": "*chirps at a bird outside*",
    "hidden": true,
    "secret": "Exactly 2 of the black cats are liars.",
    "mentions": [],
    "mood": "neutral",
    "clue": null
   },
   {
    "name": "Ember",
    "color": "white",
    "row": 0,
    "column": 3,
    "text": "All of the cats below me are the same: all honest, or all liars.",
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
     "table": "qWo="
    }
   },
   {
    "name": "Fudge",
    "color": "black",
    "row": 1,
    "column": 0,
    "text": "Dusty and Rusty are both liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     2,
     14
    ],
    "mood": "angry",
    "clue": {
     "cats": [
      2,
      4,
      14
     ],
     "table": "bA=="
    }
   },
   {
    "name": "Goose",
    "color": "orange",
    "row": 1,
    "column": 1,
    "text": "At least one of these is true: Dusty is honest, or all of the cats in column 4 are honest.",
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
     "table": "h6WlpaWlpaU="
    }
   },
   {
    "name": "Hazel",
    "color": "grey",
    "row": 1,
    "column": 2,
    "text": "Juniper is the only liar among the grey cats.",
    "hidden": false,
    "secret": null,
    "mentions": [
     7,
     10
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      6,
      7,
      10
     ],
     "table": "rg=="
    }
   },
   {
    "name": "Juniper",
    "color": "grey",
    "row": 1,
    "column": 3,
    "text": "Among the cats in column 3, at least one is honest and at least one is a liar.",
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
      7,
      10,
      14
     ],
     "table": "Hg8Phw=="
    }
   },
   {
    "name": "Kiwi",
    "color": "orange",
    "row": 2,
    "column": 0,
    "text": "At least one cat is honest, and at least one cat is a liar.",
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
     "table": "/v////////////////////////////////////////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP//////////////////////////////////////////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//////////////////////////////////////////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//////////////////////////////////////////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP//////////////////////////////////////////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//////////////////////////////////////////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//////////////////////////////////////////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP//////////////////////////////////////////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//////////////////////////////////////////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//////////////////////////////////////////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP//////////////////////////////////////////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//////////////////////////////////////////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//////////////////////////////////////////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP//////////////////////////////////////////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//////////////////////////////////////////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//////////////////////////////////////////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP//////////////////////////////////////////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//////////////////////////////////////////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//////////////////////////////////////////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP//////////////////////////////////////////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//////////////////////////////////////////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//////////////////////////////////////////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP//////////////////////////////////////////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//////////////////////////////////////////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//////////////////////////////////////////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP//////////////////////////////////////////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//////////////////////////////////////////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//////////////////////////////////////////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP//////////////////////////////////////////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//////////////////////////////////////////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//////////////////////////////////////////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP//////////////////////////////////////////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//////////////////////////////////////////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//////////////////////////////////////////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP//////////////////////////////////////////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//////////////////////////////////////////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//////////////////////////////////////////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP//////////////////////////////////////////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//////////////////////////////////////////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//////////////////////////////////////////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP//////////////////////////////////////////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//////////////////////////////////////////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//////////////////////////////////////////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP//////////////////////////////////////////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//////////////////////////////////////////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//////////////////////////////////////////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP//////////////////////////////////////////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//////////////////////////////////////////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//////////////////////////////////////////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP//////////////////////////////////////////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//////////////////////////////////////////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//////////////////////////////////////////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP//////////////////////////////////////////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//////////////////////////////////////////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//////////////////////////////////////////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP//////////////////////////////////////////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//////////////////////////////////////////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//////////////////////////////////////////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP//////////////////////////////////////////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//////////////////////////////////////////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//////////////////////////////////////////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP//////////////////////////////////////////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//////////////////////////////////////////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//////////////////////////////////////////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP//////////////////////////////////////////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//////////////////////////////////////////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//////////////////////////////////////////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP//////////////////////////////////////////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//////////////////////////////////////////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//////////////////////////////////////////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP//////////////////////////////////////////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//////////////////////////////////////////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//////////////////////////////////////////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP//////////////////////////////////////////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//////////////////////////////////////////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//////////////////////////////////////////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP//////////////////////////////////////////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//////////////////////////////////////////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//////////////////////////////////////////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP//////////////////////////////////////////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//////////////////////////////////////////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//////////////////////////////////////////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP//////////////////////////////////////////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//////////////////////////////////////////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//////////////////////////////////////////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP//////////////////////////////////////////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//////////////////////////////////////////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//////////////////////////////////////////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP//////////////////////////////////////////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//////////////////////////////////////////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//////////////////////////////////////////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP//////////////////////////////////////////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//////////////////////////////////////////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//////////////////////////////////////////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP//////////////////////////////////////////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//////////////////////////////////////////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//////////////////////////////////////////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP//////////////////////////////////////////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//////////////////////////////////////////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//////////////////////////////////////////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP//////////////////////////////////////////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//////////////////////////////////////////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//////////////////////////////////////////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP//////////////////////////////////////////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//////////////////////////////////////////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//////////////////////////////////////////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP//////////////////////////////////////////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//////////////////////////////////////////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//////////////////////////////////////////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP//////////////////////////////////////////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//////////////////////////////////////////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//////////////////////////////////////////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP//////////////////////////////////////////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//////////////////////////////////////////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//////////////////////////////////////////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP//////////////////////////////////////////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//////////////////////////////////////////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//////////////////////////////////////////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP//////////////////////////////////////////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//////////////////////////////////////////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//////////////////////////////////////////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP//////////////////////////////////////////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//////////////////////////////////////////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//////////////////////////////////////////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP//////////////////////////////////////////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//////////////////////////////////////////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//////////////////////////////////////////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP//////////////////////////////////////////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIA="
    }
   },
   {
    "name": "Loki",
    "color": "black",
    "row": 2,
    "column": 1,
    "text": "At least one of Fudge and Nugget is a liar.",
    "hidden": false,
    "secret": null,
    "mentions": [
     4,
     11
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      4,
      9,
      11
     ],
     "table": "Ng=="
    }
   },
   {
    "name": "Mango",
    "color": "grey",
    "row": 2,
    "column": 2,
    "text": "Meow. At least one of these is true: Nugget is a liar, or all of the cats in my row are honest.",
    "hidden": false,
    "secret": null,
    "mentions": [
     8,
     9,
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
     "table": "8Q8="
    }
   },
   {
    "name": "Nugget",
    "color": "yellow",
    "row": 2,
    "column": 3,
    "text": "Dusty told me: \"Loki is the only honest cat among the black cats.\"",
    "hidden": false,
    "secret": null,
    "mentions": [
     2,
     4,
     9,
     15
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      2,
      4,
      9,
      11,
      15
     ],
     "table": "qv+m/w=="
    }
   },
   {
    "name": "Olive",
    "color": "brown",
    "row": 3,
    "column": 0,
    "text": "At least one of these is true: Nugget is a liar, or all of the cats above me are honest.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     4,
     8,
     11
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
     "table": "Af/+AA=="
    }
   },
   {
    "name": "Pickles",
    "color": "brown",
    "row": 3,
    "column": 1,
    "text": "Among the cats in my row, at least one is honest and at least one is a liar.",
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
     "table": "MrM="
    }
   },
   {
    "name": "Rusty",
    "color": "brown",
    "row": 3,
    "column": 2,
    "text": "Mrow. Sushi is the only liar among the corner cats.",
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
      12,
      14,
      15
     ],
     "table": "AP8B/g=="
    }
   },
   {
    "name": "Sushi",
    "color": "black",
    "row": 3,
    "column": 3,
    "text": "All of the cats in my row are the same: all honest, or all liars.",
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
     "table": "AX8="
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
   true,
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
  "seed": 30034,
  "level": "tricky",
  "given": null,
  "cats": [
   {
    "name": "Ash",
    "color": "grey",
    "row": 0,
    "column": 0,
    "text": "At least one of these is true: Oreo is honest, or all of the brown cats are liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     2,
     11,
     15
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      0,
      2,
      11,
      15
     ],
     "table": "pWU="
    }
   },
   {
    "name": "Bean",
    "color": "white",
    "row": 0,
    "column": 1,
    "text": "Ravioli is the only liar among the cats below me.",
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
     "table": "qqk="
    }
   },
   {
    "name": "Clover",
    "color": "brown",
    "row": 0,
    "column": 2,
    "text": "Exactly 2 of the cats in row 2 are liars.",
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
      2,
      4,
      5,
      6,
      7
     ],
     "table": "apaWqQ=="
    }
   },
   {
    "name": "Doodle",
    "color": "black",
    "row": 0,
    "column": 3,
    "text": "All of Sprout, Umber and me are the same: all honest, or all liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     14,
     15
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      3,
      14,
      15
     ],
     "table": "Kw=="
    }
   },
   {
    "name": "Echo",
    "color": "white",
    "row": 1,
    "column": 0,
    "text": "I'm the only honest cat among the white cats.",
    "hidden": false,
    "secret": null,
    "mentions": [
     1,
     6,
     11
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      1,
      4,
      6,
      11
     ],
     "table": "zOw="
    }
   },
   {
    "name": "Gnocchi",
    "color": "orange",
    "row": 1,
    "column": 1,
    "text": "Juniper and Kiwi are both honest. Prrrt!",
    "hidden": false,
    "secret": null,
    "mentions": [
     8,
     9
    ],
    "mood": "happy",
    "clue": {
     "cats": [
      5,
      8,
      9
     ],
     "table": "qQ=="
    }
   },
   {
    "name": "Honey",
    "color": "white",
    "row": 1,
    "column": 2,
    "text": "Among the cats to my left, at least one is honest and at least one is a liar. Mrow.",
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
    "name": "Indigo",
    "color": "black",
    "row": 1,
    "column": 3,
    "text": "Doodle is the only honest cat among the cats in my column.",
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
     "table": "zIw="
    }
   },
   {
    "name": "Juniper",
    "color": "yellow",
    "row": 2,
    "column": 0,
    "text": "Queenie is the only liar among the grey cats.",
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
      8,
      12
     ],
     "table": "nA=="
    }
   },
   {
    "name": "Kiwi",
    "color": "black",
    "row": 2,
    "column": 1,
    "text": "At least one of these is true: Mochi is honest, or all of Clover, Indigo and me are honest.",
    "hidden": false,
    "secret": null,
    "mentions": [
     2,
     7,
     10
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      2,
      7,
      9,
      10
     ],
     "table": "D/E="
    }
   },
   {
    "name": "Mochi",
    "color": "yellow",
    "row": 2,
    "column": 2,
    "text": "At least one of these is true: I'm a liar, or Gnocchi is honest.",
    "hidden": false,
    "secret": null,
    "mentions": [
     5
    ],
    "mood": "neutral",
    "clue": {
     "cats": [
      5,
      10
     ],
     "table": "AQ=="
    }
   },
   {
    "name": "Oreo",
    "color": "white",
    "row": 2,
    "column": 3,
    "text": "Indigo is the only liar among my neighbors.",
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
     "table": "0vA="
    }
   },
   {
    "name": "Queenie",
    "color": "grey",
    "row": 3,
    "column": 0,
    "text": "Among the brown cats, at least one is honest and at least one is a liar.",
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
      12,
      15
     ],
     "table": "lg=="
    }
   },
   {
    "name": "Ravioli",
    "color": "black",
    "row": 3,
    "column": 1,
    "text": "Exactly one of the cats in row 2 is a liar. Mrow.",
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
     "table": "FgHp/g=="
    }
   },
   {
    "name": "Sprout",
    "color": "orange",
    "row": 3,
    "column": 2,
    "text": "Mrow. Doodle is the only liar among the cats in row 1.",
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
      14
     ],
     "table": "AAH//g=="
    }
   },
   {
    "name": "Umber",
    "color": "brown",
    "row": 3,
    "column": 3,
    "text": "Queenie is the only liar among Gnocchi, Queenie and me.",
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
      12,
      15
     ],
     "table": "9A=="
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
   false,
   false,
   false,
   false,
   true,
   true,
   false,
   false
  ]
 }
];
