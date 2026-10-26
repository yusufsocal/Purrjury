// Made by export.py, don't edit by hand
const PUZZLES = [
 {
  "rows": 3,
  "cols": 3,
  "seed": 103,
  "level": "easy",
  "given": 3,
  "cats": [
   {
    "name": "Apricot",
    "color": "grey",
    "row": 0,
    "column": 0,
    "text": "Hiss! Kiwi is a liar.",
    "hidden": false,
    "secret": null,
    "mentions": [
     7
    ],
    "clue": {
     "cats": [
      0,
      7
     ],
     "table": "Bg=="
    }
   },
   {
    "name": "Biscuit",
    "color": "tabby",
    "row": 0,
    "column": 1,
    "text": "All of the cats in row 3 are honest.",
    "hidden": false,
    "secret": null,
    "mentions": [
     6,
     7,
     8
    ],
    "clue": {
     "cats": [
      1,
      6,
      7,
      8
     ],
     "table": "qao="
    }
   },
   {
    "name": "Coco",
    "color": "tabby",
    "row": 0,
    "column": 2,
    "text": "Gizmo told me: \"Among the cats on the edges, at least one is honest and at least one is a liar.\"",
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
     "table": "/v/x8P//8PD///Dw///w8P//8PD///Dw///w8P//8PD///Dw///w8P//8PD///Dw///w8P//8PD///Dw///w8A=="
    }
   },
   {
    "name": "Doodle",
    "color": "calico",
    "row": 1,
    "column": 0,
    "text": "Luna and I are both liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     8
    ],
    "clue": {
     "cats": [
      3,
      8
     ],
     "table": "Ag=="
    }
   },
   {
    "name": "Gizmo",
    "color": "calico",
    "row": 1,
    "column": 1,
    "text": "*chirps at a bird outside*",
    "hidden": true,
    "secret": "Among the cats on the edges, at least one is honest and at least one is a liar.",
    "mentions": [],
    "clue": null
   },
   {
    "name": "Indigo",
    "color": "calico",
    "row": 1,
    "column": 2,
    "text": "At least one of these is true: Apricot is honest, or all of the cats to my left are honest.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     3,
     4
    ],
    "clue": {
     "cats": [
      0,
      3,
      4,
      5
     ],
     "table": "V6g="
    }
   },
   {
    "name": "Jellybean",
    "color": "tabby",
    "row": 2,
    "column": 0,
    "text": "Gizmo and Kiwi are both honest, or both liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     4,
     7
    ],
    "clue": {
     "cats": [
      4,
      6,
      7
     ],
     "table": "aQ=="
    }
   },
   {
    "name": "Kiwi",
    "color": "calico",
    "row": 2,
    "column": 1,
    "text": "All of the cats above me are the same: all honest, or all liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     1,
     4
    ],
    "clue": {
     "cats": [
      1,
      4,
      7
     ],
     "table": "aQ=="
    }
   },
   {
    "name": "Luna",
    "color": "grey",
    "row": 2,
    "column": 2,
    "text": "Apricot is the only liar among the cats in row 1.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     1,
     2
    ],
    "clue": {
     "cats": [
      0,
      1,
      2,
      8
     ],
     "table": "Av0="
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
   false
  ]
 },
 {
  "rows": 3,
  "cols": 3,
  "seed": 115,
  "level": "easy",
  "given": 0,
  "cats": [
   {
    "name": "Apricot",
    "color": "black",
    "row": 0,
    "column": 0,
    "text": "Felix and I are both liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     5
    ],
    "clue": {
     "cats": [
      0,
      5
     ],
     "table": "Ag=="
    }
   },
   {
    "name": "Bean",
    "color": "siamese",
    "row": 0,
    "column": 1,
    "text": "At least one of these is true: Honey is honest, or all of the grey cats are liars. Mrow.",
    "hidden": false,
    "secret": null,
    "mentions": [
     2,
     6
    ],
    "clue": {
     "cats": [
      1,
      2,
      6
     ],
     "table": "ZQ=="
    }
   },
   {
    "name": "Cricket",
    "color": "grey",
    "row": 0,
    "column": 2,
    "text": "At least one of these is true: Dumpling is a liar, or all of the cats in row 3 are honest.",
    "hidden": false,
    "secret": null,
    "mentions": [
     3,
     6,
     7,
     8
    ],
    "clue": {
     "cats": [
      2,
      3,
      6,
      7,
      8
     ],
     "table": "ZWZmZg=="
    }
   },
   {
    "name": "Dumpling",
    "color": "siamese",
    "row": 1,
    "column": 0,
    "text": "Mrow. Jasper is honest, but Honey is a liar.",
    "hidden": false,
    "secret": null,
    "mentions": [
     6,
     8
    ],
    "clue": {
     "cats": [
      3,
      6,
      8
     ],
     "table": "pg=="
    }
   },
   {
    "name": "Espresso",
    "color": "siamese",
    "row": 1,
    "column": 1,
    "text": "At least one of these is true: Bean is honest, or all of the cats in row 3 are liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     1,
     6,
     7,
     8
    ],
    "clue": {
     "cats": [
      1,
      4,
      6,
      7,
      8
     ],
     "table": "mZmZOQ=="
    }
   },
   {
    "name": "Felix",
    "color": "black",
    "row": 1,
    "column": 2,
    "text": "All of the siamese cats are the same: all honest, or all liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     1,
     3,
     4
    ],
    "clue": {
     "cats": [
      1,
      3,
      4,
      5
     ],
     "table": "gX4="
    }
   },
   {
    "name": "Honey",
    "color": "grey",
    "row": 2,
    "column": 0,
    "text": "All of the cats in my column are the same: all honest, or all liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     3
    ],
    "clue": {
     "cats": [
      0,
      3,
      6
     ],
     "table": "cQ=="
    }
   },
   {
    "name": "Inky",
    "color": "black",
    "row": 2,
    "column": 1,
    "text": "Meow. Among the cats in column 1, at least one is honest and at least one is a liar.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     3,
     6
    ],
    "clue": {
     "cats": [
      0,
      3,
      6,
      7
     ],
     "table": "foE="
    }
   },
   {
    "name": "Jasper",
    "color": "black",
    "row": 2,
    "column": 2,
    "text": "Mrow. At least one of these is true: Bean is honest, or all of Apricot, Honey and me are honest.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     1,
     6
    ],
    "clue": {
     "cats": [
      0,
      1,
      6,
      8
     ],
     "table": "N8w="
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
   false
  ]
 },
 {
  "rows": 3,
  "cols": 3,
  "seed": 148,
  "level": "easy",
  "given": 7,
  "cats": [
   {
    "name": "Apricot",
    "color": "siamese",
    "row": 0,
    "column": 0,
    "text": "At least one of Bagel and me is honest.",
    "hidden": false,
    "secret": null,
    "mentions": [
     1
    ],
    "clue": {
     "cats": [
      0,
      1
     ],
     "table": "DQ=="
    }
   },
   {
    "name": "Bagel",
    "color": "black",
    "row": 0,
    "column": 1,
    "text": "At least 2 of the cats in row 3 are liars. Mew.",
    "hidden": false,
    "secret": null,
    "mentions": [
     6,
     7,
     8
    ],
    "clue": {
     "cats": [
      1,
      6,
      7,
      8
     ],
     "table": "alY="
    }
   },
   {
    "name": "Clover",
    "color": "calico",
    "row": 0,
    "column": 2,
    "text": "Meow. Apricot is honest, but Lentil is a liar.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     8
    ],
    "clue": {
     "cats": [
      0,
      2,
      8
     ],
     "table": "nA=="
    }
   },
   {
    "name": "Espresso",
    "color": "black",
    "row": 1,
    "column": 0,
    "text": "At least one of these is true: Clover is honest, or all of the cats on the edges are liars.",
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
     "table": "D/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD3A="
    }
   },
   {
    "name": "Fudge",
    "color": "ginger",
    "row": 1,
    "column": 1,
    "text": "Among the cats in my row, at least one is honest and at least one is a liar.",
    "hidden": false,
    "secret": null,
    "mentions": [
     3,
     5
    ],
    "clue": {
     "cats": [
      3,
      4,
      5
     ],
     "table": "sg=="
    }
   },
   {
    "name": "Goose",
    "color": "ginger",
    "row": 1,
    "column": 2,
    "text": "Espresso and Kiwi are opposites: one is honest, the other is a liar.",
    "hidden": false,
    "secret": null,
    "mentions": [
     3,
     7
    ],
    "clue": {
     "cats": [
      3,
      5,
      7
     ],
     "table": "lg=="
    }
   },
   {
    "name": "Indigo",
    "color": "calico",
    "row": 2,
    "column": 0,
    "text": "At least one of these is true: Kiwi is a liar, or all of Apricot, Goose and me are liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     5,
     7
    ],
    "clue": {
     "cats": [
      0,
      5,
      6,
      7
     ],
     "table": "cA8="
    }
   },
   {
    "name": "Kiwi",
    "color": "siamese",
    "row": 2,
    "column": 1,
    "text": "I smell a rat. At least one of Clover, Lentil and me is a liar. Meow.",
    "hidden": false,
    "secret": null,
    "mentions": [
     2,
     8
    ],
    "clue": {
     "cats": [
      2,
      7,
      8
     ],
     "table": "Mg=="
    }
   },
   {
    "name": "Lentil",
    "color": "black",
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
   false,
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
  "seed": 153,
  "level": "easy",
  "given": 4,
  "cats": [
   {
    "name": "Ash",
    "color": "tabby",
    "row": 0,
    "column": 0,
    "text": "Doodle and Honey are both honest.",
    "hidden": false,
    "secret": null,
    "mentions": [
     3,
     5
    ],
    "clue": {
     "cats": [
      0,
      3,
      5
     ],
     "table": "qQ=="
    }
   },
   {
    "name": "Biscuit",
    "color": "ginger",
    "row": 0,
    "column": 1,
    "text": "Meow. Gnocchi is the only liar among my neighbors.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     2,
     4
    ],
    "clue": {
     "cats": [
      0,
      1,
      2,
      4
     ],
     "table": "zMk="
    }
   },
   {
    "name": "Clover",
    "color": "ginger",
    "row": 0,
    "column": 2,
    "text": "All of Honey, Mochi and me are honest.",
    "hidden": false,
    "secret": null,
    "mentions": [
     5,
     8
    ],
    "clue": {
     "cats": [
      2,
      5,
      8
     ],
     "table": "qw=="
    }
   },
   {
    "name": "Doodle",
    "color": "calico",
    "row": 1,
    "column": 0,
    "text": "Among the calico cats, at least one is honest and at least one is a liar.",
    "hidden": false,
    "secret": null,
    "mentions": [
     4
    ],
    "clue": {
     "cats": [
      3,
      4
     ],
     "table": "DA=="
    }
   },
   {
    "name": "Gnocchi",
    "color": "calico",
    "row": 1,
    "column": 1,
    "text": "At least one of these is true: Clover is a liar, or all of the corner cats are liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     2,
     6,
     8
    ],
    "clue": {
     "cats": [
      0,
      2,
      4,
      6,
      8
     ],
     "table": "PDw8PA=="
    }
   },
   {
    "name": "Honey",
    "color": "grey",
    "row": 1,
    "column": 2,
    "text": "Indigo is the only liar among the corner cats.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     2,
     6,
     8
    ],
    "clue": {
     "cats": [
      0,
      2,
      5,
      6,
      8
     ],
     "table": "8OHw8A=="
    }
   },
   {
    "name": "Indigo",
    "color": "tabby",
    "row": 2,
    "column": 0,
    "text": "I'm the only honest cat among the cats in my row.",
    "hidden": false,
    "secret": null,
    "mentions": [
     7,
     8
    ],
    "clue": {
     "cats": [
      6,
      7,
      8
     ],
     "table": "6g=="
    }
   },
   {
    "name": "Loki",
    "color": "ginger",
    "row": 2,
    "column": 1,
    "text": "Clover is the only liar among the ginger cats.",
    "hidden": false,
    "secret": null,
    "mentions": [
     1,
     2
    ],
    "clue": {
     "cats": [
      1,
      2,
      7
     ],
     "table": "9A=="
    }
   },
   {
    "name": "Mochi",
    "color": "grey",
    "row": 2,
    "column": 2,
    "text": "All of the grey cats are honest.",
    "hidden": false,
    "secret": null,
    "mentions": [
     5
    ],
    "clue": {
     "cats": [
      5,
      8
     ],
     "table": "DQ=="
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
  "seed": 161,
  "level": "easy",
  "given": 5,
  "cats": [
   {
    "name": "Bean",
    "color": "siamese",
    "row": 0,
    "column": 0,
    "text": "Espresso is honest.",
    "hidden": false,
    "secret": null,
    "mentions": [
     3
    ],
    "clue": {
     "cats": [
      0,
      3
     ],
     "table": "CQ=="
    }
   },
   {
    "name": "Cricket",
    "color": "black",
    "row": 0,
    "column": 1,
    "text": "Mew. Bean is honest, but Fig is a liar.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     4
    ],
    "clue": {
     "cats": [
      0,
      1,
      4
     ],
     "table": "nA=="
    }
   },
   {
    "name": "Dumpling",
    "color": "ginger",
    "row": 0,
    "column": 2,
    "text": "All of the cats to my left are the same: all honest, or all liars. Mrow.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     1
    ],
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
    "name": "Espresso",
    "color": "ginger",
    "row": 1,
    "column": 0,
    "text": "I'm the only honest cat among the cats in my row.",
    "hidden": false,
    "secret": null,
    "mentions": [
     4,
     5
    ],
    "clue": {
     "cats": [
      3,
      4,
      5
     ],
     "table": "6g=="
    }
   },
   {
    "name": "Fig",
    "color": "black",
    "row": 1,
    "column": 1,
    "text": "All of Inky, Jasper and me are the same: all honest, or all liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     6,
     7
    ],
    "clue": {
     "cats": [
      4,
      6,
      7
     ],
     "table": "Kw=="
    }
   },
   {
    "name": "Hobbes",
    "color": "siamese",
    "row": 1,
    "column": 2,
    "text": "All of the siamese cats are liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0
    ],
    "clue": {
     "cats": [
      0,
      5
     ],
     "table": "BA=="
    }
   },
   {
    "name": "Inky",
    "color": "black",
    "row": 2,
    "column": 0,
    "text": "At least one of these is true: Bean is a liar, or all of the cats to my right are liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     7,
     8
    ],
    "clue": {
     "cats": [
      0,
      6,
      7,
      8
     ],
     "table": "ZjY="
    }
   },
   {
    "name": "Jasper",
    "color": "ginger",
    "row": 2,
    "column": 1,
    "text": "Exactly one of the siamese cats is a liar.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     5
    ],
    "clue": {
     "cats": [
      0,
      5,
      7
     ],
     "table": "lg=="
    }
   },
   {
    "name": "Kettle",
    "color": "black",
    "row": 2,
    "column": 2,
    "text": "Among the cats in column 1, at least one is honest and at least one is a liar.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     3,
     6
    ],
    "clue": {
     "cats": [
      0,
      3,
      6,
      8
     ],
     "table": "foE="
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
  "seed": 100,
  "level": "medium",
  "given": null,
  "cats": [
   {
    "name": "Biscuit",
    "color": "siamese",
    "row": 0,
    "column": 0,
    "text": "I'm the only honest cat among Juniper, Luna and me.",
    "hidden": false,
    "secret": null,
    "mentions": [
     5,
     7
    ],
    "clue": {
     "cats": [
      0,
      5,
      7
     ],
     "table": "6g=="
    }
   },
   {
    "name": "Cricket",
    "color": "tuxedo",
    "row": 0,
    "column": 1,
    "text": "Mew. Among the cats in my column, at least one is honest and at least one is a liar.",
    "hidden": false,
    "secret": null,
    "mentions": [
     4,
     7
    ],
    "clue": {
     "cats": [
      1,
      4,
      7
     ],
     "table": "1A=="
    }
   },
   {
    "name": "Espresso",
    "color": "calico",
    "row": 0,
    "column": 2,
    "text": "All of the corner cats are honest. Purr.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     6,
     8
    ],
    "clue": {
     "cats": [
      0,
      2,
      6,
      8
     ],
     "table": "zcw="
    }
   },
   {
    "name": "Gnocchi",
    "color": "tuxedo",
    "row": 1,
    "column": 0,
    "text": "All of the cats in my column are honest.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     6
    ],
    "clue": {
     "cats": [
      0,
      3,
      6
     ],
     "table": "zQ=="
    }
   },
   {
    "name": "Indigo",
    "color": "siamese",
    "row": 1,
    "column": 1,
    "text": "At least one of these is true: Biscuit is honest, or all of the siamese cats are liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0
    ],
    "clue": {
     "cats": [
      0,
      4
     ],
     "table": "AQ=="
    }
   },
   {
    "name": "Juniper",
    "color": "tabby",
    "row": 1,
    "column": 2,
    "text": "All of the cats to my left are the same: all honest, or all liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     3,
     4
    ],
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
    "name": "Kismet",
    "color": "tabby",
    "row": 2,
    "column": 0,
    "text": "All of the corner cats are the same: all honest, or all liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     2,
     8
    ],
    "clue": {
     "cats": [
      0,
      2,
      6,
      8
     ],
     "table": "8XA="
    }
   },
   {
    "name": "Luna",
    "color": "tabby",
    "row": 2,
    "column": 1,
    "text": "Nimbus is the only honest cat among the cats in my row.",
    "hidden": false,
    "secret": null,
    "mentions": [
     6,
     8
    ],
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
    "name": "Nimbus",
    "color": "calico",
    "row": 2,
    "column": 2,
    "text": "At least one of Biscuit and Juniper is a liar.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     5
    ],
    "clue": {
     "cats": [
      0,
      5,
      8
     ],
     "table": "Hg=="
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
   false,
   true,
   false
  ]
 },
 {
  "rows": 3,
  "cols": 3,
  "seed": 111,
  "level": "medium",
  "given": null,
  "cats": [
   {
    "name": "Apricot",
    "color": "black",
    "row": 0,
    "column": 0,
    "text": "Bean and Fudge are both liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     1,
     4
    ],
    "clue": {
     "cats": [
      0,
      1,
      4
     ],
     "table": "ag=="
    }
   },
   {
    "name": "Bean",
    "color": "white",
    "row": 0,
    "column": 1,
    "text": "Mrow. I'm the only liar among the cats in my column.",
    "hidden": false,
    "secret": null,
    "mentions": [
     4,
     7
    ],
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
    "name": "Dusty",
    "color": "grey",
    "row": 0,
    "column": 2,
    "text": "At least one of these is true: Hobbes is honest, or all of Apricot, Gnocchi and me are liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     5,
     6
    ],
    "clue": {
     "cats": [
      0,
      2,
      5,
      6
     ],
     "table": "M0w="
    }
   },
   {
    "name": "Echo",
    "color": "white",
    "row": 1,
    "column": 0,
    "text": "Fudge is the only liar among my neighbors. Mrow.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     4,
     6
    ],
    "clue": {
     "cats": [
      0,
      3,
      4,
      6
     ],
     "table": "nMw="
    }
   },
   {
    "name": "Fudge",
    "color": "white",
    "row": 1,
    "column": 1,
    "text": "Gnocchi is honest, but Echo is a liar.",
    "hidden": false,
    "secret": null,
    "mentions": [
     3,
     5
    ],
    "clue": {
     "cats": [
      3,
      4,
      5
     ],
     "table": "xg=="
    }
   },
   {
    "name": "Gnocchi",
    "color": "grey",
    "row": 1,
    "column": 2,
    "text": "All of the grey cats are the same: all honest, or all liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     2
    ],
    "clue": {
     "cats": [
      2,
      5
     ],
     "table": "BQ=="
    }
   },
   {
    "name": "Hobbes",
    "color": "black",
    "row": 2,
    "column": 0,
    "text": "Echo is honest, but Gnocchi is a liar.",
    "hidden": false,
    "secret": null,
    "mentions": [
     3,
     5
    ],
    "clue": {
     "cats": [
      3,
      5,
      6
     ],
     "table": "tA=="
    }
   },
   {
    "name": "Indigo",
    "color": "calico",
    "row": 2,
    "column": 1,
    "text": "Dusty is honest, but Gnocchi is a liar.",
    "hidden": false,
    "secret": null,
    "mentions": [
     2,
     5
    ],
    "clue": {
     "cats": [
      2,
      5,
      7
     ],
     "table": "tA=="
    }
   },
   {
    "name": "Jasper",
    "color": "calico",
    "row": 2,
    "column": 2,
    "text": "Among the white cats, at least one is honest and at least one is a liar.",
    "hidden": false,
    "secret": null,
    "mentions": [
     1,
     3,
     4
    ],
    "clue": {
     "cats": [
      1,
      3,
      4,
      8
     ],
     "table": "foE="
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
   false
  ]
 },
 {
  "rows": 3,
  "cols": 3,
  "seed": 121,
  "level": "medium",
  "given": null,
  "cats": [
   {
    "name": "Ash",
    "color": "calico",
    "row": 0,
    "column": 0,
    "text": "Meow. Among the cats in my row, at least one is honest and at least one is a liar.",
    "hidden": false,
    "secret": null,
    "mentions": [
     1,
     2
    ],
    "clue": {
     "cats": [
      0,
      1,
      2
     ],
     "table": "1A=="
    }
   },
   {
    "name": "Biscuit",
    "color": "calico",
    "row": 0,
    "column": 1,
    "text": "I smell a rat. At least one of Gnocchi, Juniper and me is a liar. Mrow.",
    "hidden": false,
    "secret": null,
    "mentions": [
     3,
     6
    ],
    "clue": {
     "cats": [
      1,
      3,
      6
     ],
     "table": "VA=="
    }
   },
   {
    "name": "Espresso",
    "color": "ginger",
    "row": 0,
    "column": 2,
    "text": "At least one of these is true: Luna is a liar, or all of the cats to my left are liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     1,
     8
    ],
    "clue": {
     "cats": [
      0,
      1,
      2,
      8
     ],
     "table": "eA8="
    }
   },
   {
    "name": "Gnocchi",
    "color": "ginger",
    "row": 1,
    "column": 0,
    "text": "Ash is the only liar among the calico cats.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     1
    ],
    "clue": {
     "cats": [
      0,
      1,
      3
     ],
     "table": "0g=="
    }
   },
   {
    "name": "Hazel",
    "color": "grey",
    "row": 1,
    "column": 1,
    "text": "At least one of these is true: Biscuit is a liar, or all of the corner cats are liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     1,
     2,
     6,
     8
    ],
    "clue": {
     "cats": [
      0,
      1,
      2,
      4,
      6,
      8
     ],
     "table": "zDPMM8wz7BM="
    }
   },
   {
    "name": "Inky",
    "color": "ginger",
    "row": 1,
    "column": 2,
    "text": "At least one of these is true: Espresso is a liar, or all the cats are liars. Meow.",
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
     "table": "8PDw8A8PDw/w8PDwDw8PD/Dw8PAPDw8P8PDw8A8PDw/w8PDwDw8PD/Dw8PAPDw8P8PDw8A8PDw/w8PDwDw8PDw=="
    }
   },
   {
    "name": "Juniper",
    "color": "ginger",
    "row": 2,
    "column": 0,
    "text": "I'm the only honest cat among Espresso, Hazel and me.",
    "hidden": false,
    "secret": null,
    "mentions": [
     2,
     4
    ],
    "clue": {
     "cats": [
      2,
      4,
      6
     ],
     "table": "+A=="
    }
   },
   {
    "name": "Kiwi",
    "color": "grey",
    "row": 2,
    "column": 1,
    "text": "At least one of Ash, Gnocchi and me is a liar. Mew.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     3
    ],
    "clue": {
     "cats": [
      0,
      3,
      7
     ],
     "table": "Dg=="
    }
   },
   {
    "name": "Luna",
    "color": "grey",
    "row": 2,
    "column": 2,
    "text": "All of the cats in my row are honest. Prrrt!",
    "hidden": false,
    "secret": null,
    "mentions": [
     6,
     7
    ],
    "clue": {
     "cats": [
      6,
      7,
      8
     ],
     "table": "8Q=="
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
   false,
   false
  ]
 },
 {
  "rows": 3,
  "cols": 3,
  "seed": 132,
  "level": "medium",
  "given": null,
  "cats": [
   {
    "name": "Angus",
    "color": "siamese",
    "row": 0,
    "column": 0,
    "text": "At least 2 of Goose, Hobbes and me are liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     6,
     7
    ],
    "clue": {
     "cats": [
      0,
      6,
      7
     ],
     "table": "Qg=="
    }
   },
   {
    "name": "Bagel",
    "color": "siamese",
    "row": 0,
    "column": 1,
    "text": "At least one of these is true: Coco is honest, or all the cats are honest. Mew.",
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
     "table": "w8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDww=="
    }
   },
   {
    "name": "Coco",
    "color": "siamese",
    "row": 0,
    "column": 2,
    "text": "Goose is honest, but Ember is a liar.",
    "hidden": false,
    "secret": null,
    "mentions": [
     4,
     6
    ],
    "clue": {
     "cats": [
      2,
      4,
      6
     ],
     "table": "pg=="
    }
   },
   {
    "name": "Dusty",
    "color": "tuxedo",
    "row": 1,
    "column": 0,
    "text": "Mew. All of the cats on the edges are the same: all honest, or all liars.",
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
     "table": "Af8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AH8="
    }
   },
   {
    "name": "Ember",
    "color": "ginger",
    "row": 1,
    "column": 1,
    "text": "All of the cats in my row are liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     3,
     5
    ],
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
    "name": "Fig",
    "color": "tuxedo",
    "row": 1,
    "column": 2,
    "text": "Goose is the only honest cat among the cats in column 1.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     3,
     6
    ],
    "clue": {
     "cats": [
      0,
      3,
      5,
      6
     ],
     "table": "ePA="
    }
   },
   {
    "name": "Goose",
    "color": "ginger",
    "row": 2,
    "column": 0,
    "text": "At least one of the cats on the edges is a liar.",
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
     "table": "/v///wAAAAD/////AAAAAP////8AAAAA/////wAAAAA="
    }
   },
   {
    "name": "Hobbes",
    "color": "black",
    "row": 2,
    "column": 1,
    "text": "At least one of these is true: Angus is a liar, or all of the cats above me are honest.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     1,
     4
    ],
    "clue": {
     "cats": [
      0,
      1,
      4,
      7
     ],
     "table": "q1Q="
    }
   },
   {
    "name": "Iggy",
    "color": "black",
    "row": 2,
    "column": 2,
    "text": "At least one of these is true: Hobbes is honest, or all of the cats to my left are liars. Mew.",
    "hidden": false,
    "secret": null,
    "mentions": [
     6,
     7
    ],
    "clue": {
     "cats": [
      6,
      7,
      8
     ],
     "table": "Sw=="
    }
   }
  ],
  "liars": [
   true,
   false,
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
  "seed": 133,
  "level": "medium",
  "given": null,
  "cats": [
   {
    "name": "Apricot",
    "color": "black",
    "row": 0,
    "column": 0,
    "text": "Bean is the only honest cat among the cats in my row. Meow.",
    "hidden": false,
    "secret": null,
    "mentions": [
     1,
     2
    ],
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
    "color": "black",
    "row": 0,
    "column": 1,
    "text": "I'm honest, but Fudge is a liar.",
    "hidden": false,
    "secret": null,
    "mentions": [
     4
    ],
    "clue": {
     "cats": [
      1,
      4
     ],
     "table": "Dg=="
    }
   },
   {
    "name": "Cricket",
    "color": "black",
    "row": 0,
    "column": 2,
    "text": "Among the ginger cats, at least one is honest and at least one is a liar.",
    "hidden": false,
    "secret": null,
    "mentions": [
     4,
     8
    ],
    "clue": {
     "cats": [
      2,
      4,
      8
     ],
     "table": "lg=="
    }
   },
   {
    "name": "Espresso",
    "color": "tuxedo",
    "row": 1,
    "column": 0,
    "text": "All of the tuxedo cats are the same: all honest, or all liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     7
    ],
    "clue": {
     "cats": [
      3,
      7
     ],
     "table": "Aw=="
    }
   },
   {
    "name": "Fudge",
    "color": "ginger",
    "row": 1,
    "column": 1,
    "text": "At least one of these is true: Bean is a liar, or all of the corner cats are liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     1,
     2,
     6,
     8
    ],
    "clue": {
     "cats": [
      0,
      1,
      2,
      4,
      6,
      8
     ],
     "table": "zDPMM8wz7BM="
    }
   },
   {
    "name": "Gnocchi",
    "color": "calico",
    "row": 1,
    "column": 2,
    "text": "At least one of these is true: Bean is honest, or all of the cats in column 2 are liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     1,
     4,
     7
    ],
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
    "name": "Hobbes",
    "color": "calico",
    "row": 2,
    "column": 0,
    "text": "All of the cats in my column are the same: all honest, or all liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     3
    ],
    "clue": {
     "cats": [
      0,
      3,
      6
     ],
     "table": "cQ=="
    }
   },
   {
    "name": "Iggy",
    "color": "tuxedo",
    "row": 2,
    "column": 1,
    "text": "Bean is the only honest cat among the cats above me.",
    "hidden": false,
    "secret": null,
    "mentions": [
     1,
     4
    ],
    "clue": {
     "cats": [
      1,
      4,
      7
     ],
     "table": "tA=="
    }
   },
   {
    "name": "Kismet",
    "color": "ginger",
    "row": 2,
    "column": 2,
    "text": "At least one of these is true: Gnocchi is honest, or all of the cats above me are liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     2,
     5
    ],
    "clue": {
     "cats": [
      2,
      5,
      8
     ],
     "table": "Sw=="
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
  "seed": 187,
  "level": "hard",
  "given": null,
  "cats": [
   {
    "name": "Ash",
    "color": "grey",
    "row": 0,
    "column": 0,
    "text": "Kettle told me: \"All the cats are the same: all honest, or all liars.\"",
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
     "table": "q6qqqqqqqqqqqqqqqqqqqv////////////////////+qqqqqqqqqqqqqqqqqqqqq/////////////////////w=="
    }
   },
   {
    "name": "Biscuit",
    "color": "calico",
    "row": 0,
    "column": 1,
    "text": "Dusty and I are both honest, or both liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     2
    ],
    "clue": {
     "cats": [
      1,
      2
     ],
     "table": "Aw=="
    }
   },
   {
    "name": "Dusty",
    "color": "tuxedo",
    "row": 0,
    "column": 2,
    "text": "Jasper is honest, but Kettle is a liar.",
    "hidden": false,
    "secret": null,
    "mentions": [
     6,
     7
    ],
    "clue": {
     "cats": [
      2,
      6,
      7
     ],
     "table": "mg=="
    }
   },
   {
    "name": "Felix",
    "color": "calico",
    "row": 1,
    "column": 0,
    "text": "Among my neighbors, at least one is honest and at least one is a liar.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     4,
     6
    ],
    "clue": {
     "cats": [
      0,
      3,
      4,
      6
     ],
     "table": "NpM="
    }
   },
   {
    "name": "Goose",
    "color": "grey",
    "row": 1,
    "column": 1,
    "text": "Exactly 2 of my neighbors are liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     1,
     3,
     5,
     7
    ],
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
    "name": "Inky",
    "color": "ginger",
    "row": 1,
    "column": 2,
    "text": "Meow. At least one of these is true: Jasper is a liar, or all of Biscuit, Goose and me are liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     1,
     4,
     6
    ],
    "clue": {
     "cats": [
      1,
      4,
      5,
      6
     ],
     "table": "cA8="
    }
   },
   {
    "name": "Jasper",
    "color": "tuxedo",
    "row": 2,
    "column": 0,
    "text": "At least one of Goose and Kettle is a liar.",
    "hidden": false,
    "secret": null,
    "mentions": [
     4,
     7
    ],
    "clue": {
     "cats": [
      4,
      6,
      7
     ],
     "table": "Ng=="
    }
   },
   {
    "name": "Kettle",
    "color": "ginger",
    "row": 2,
    "column": 1,
    "text": "*incomprehensible meowing*",
    "hidden": true,
    "secret": "Exactly one of the calico cats is a liar.",
    "mentions": [],
    "clue": null
   },
   {
    "name": "Luna",
    "color": "tuxedo",
    "row": 2,
    "column": 2,
    "text": "Among Jasper, Kettle and me, at least one is honest and at least one is a liar.",
    "hidden": false,
    "secret": null,
    "mentions": [
     6,
     7
    ],
    "clue": {
     "cats": [
      6,
      7,
      8
     ],
     "table": "jg=="
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
  "seed": 191,
  "level": "hard",
  "given": null,
  "cats": [
   {
    "name": "Bean",
    "color": "ginger",
    "row": 0,
    "column": 0,
    "text": "At least one of these is true: Luna is honest, or all of the cats in my column are liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     3,
     6,
     8
    ],
    "clue": {
     "cats": [
      0,
      3,
      6,
      8
     ],
     "table": "VSo="
    }
   },
   {
    "name": "Cricket",
    "color": "white",
    "row": 0,
    "column": 1,
    "text": "Bean is honest. That's a purr-fact.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0
    ],
    "clue": {
     "cats": [
      0,
      1
     ],
     "table": "CQ=="
    }
   },
   {
    "name": "Espresso",
    "color": "siamese",
    "row": 0,
    "column": 2,
    "text": "At least one of these is true: Cricket is honest, or all of the cats in my row are liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     1
    ],
    "clue": {
     "cats": [
      0,
      1,
      2
     ],
     "table": "Qw=="
    }
   },
   {
    "name": "Felix",
    "color": "ginger",
    "row": 1,
    "column": 0,
    "text": "Juniper is the only liar among the corner cats.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     2,
     6,
     8
    ],
    "clue": {
     "cats": [
      0,
      2,
      3,
      6,
      8
     ],
     "table": "8OHw8A=="
    }
   },
   {
    "name": "Gizmo",
    "color": "white",
    "row": 1,
    "column": 1,
    "text": "Exactly 3 of the cats on the edges are liars.",
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
     "table": "gGh/l2gWl+loFpfpFgHp/mgWl+kWAen+FgHp/gEA/v9oFpfpFgHp/hYB6f4BAP7/FgHp/gEA/v8BAP7/AAD//w=="
    }
   },
   {
    "name": "Inky",
    "color": "siamese",
    "row": 1,
    "column": 2,
    "text": "Felix is the only liar among the cats to my left.",
    "hidden": false,
    "secret": null,
    "mentions": [
     3,
     4
    ],
    "clue": {
     "cats": [
      3,
      4,
      5
     ],
     "table": "0g=="
    }
   },
   {
    "name": "Juniper",
    "color": "siamese",
    "row": 2,
    "column": 0,
    "text": "At least one of these is true: Cricket is a liar, or all of the cats in my row are honest.",
    "hidden": false,
    "secret": null,
    "mentions": [
     1,
     7,
     8
    ],
    "clue": {
     "cats": [
      1,
      6,
      7,
      8
     ],
     "table": "Z2Y="
    }
   },
   {
    "name": "Kettle",
    "color": "ginger",
    "row": 2,
    "column": 1,
    "text": "At least one of these is true: Cricket is a liar, or all of the cats in column 1 are honest.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     1,
     3,
     6
    ],
    "clue": {
     "cats": [
      0,
      1,
      3,
      6,
      7
     ],
     "table": "zcwyMw=="
    }
   },
   {
    "name": "Luna",
    "color": "white",
    "row": 2,
    "column": 2,
    "text": "I smell a rat. At least one of the cats in my column is a liar. Mrow.",
    "hidden": false,
    "secret": null,
    "mentions": [
     2,
     5
    ],
    "clue": {
     "cats": [
      2,
      5,
      8
     ],
     "table": "Dg=="
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
  "seed": 220,
  "level": "hard",
  "given": null,
  "cats": [
   {
    "name": "Ash",
    "color": "grey",
    "row": 0,
    "column": 0,
    "text": "Exactly 2 of the black cats are liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     1,
     4,
     6
    ],
    "clue": {
     "cats": [
      0,
      1,
      4,
      6
     ],
     "table": "apY="
    }
   },
   {
    "name": "Bagel",
    "color": "black",
    "row": 0,
    "column": 1,
    "text": "All of Echo, Indigo and me are the same: all honest, or all liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     2,
     5
    ],
    "clue": {
     "cats": [
      1,
      2,
      5
     ],
     "table": "Kw=="
    }
   },
   {
    "name": "Echo",
    "color": "grey",
    "row": 0,
    "column": 2,
    "text": "At least one of Loki and me is honest.",
    "hidden": false,
    "secret": null,
    "mentions": [
     7
    ],
    "clue": {
     "cats": [
      2,
      7
     ],
     "table": "DQ=="
    }
   },
   {
    "name": "Felix",
    "color": "grey",
    "row": 1,
    "column": 0,
    "text": "Echo is the only liar among Echo, Loki and me.",
    "hidden": false,
    "secret": null,
    "mentions": [
     2,
     7
    ],
    "clue": {
     "cats": [
      2,
      3,
      7
     ],
     "table": "zg=="
    }
   },
   {
    "name": "Honey",
    "color": "black",
    "row": 1,
    "column": 1,
    "text": "Exactly one of the corner cats is a liar.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     2,
     6,
     8
    ],
    "clue": {
     "cats": [
      0,
      2,
      4,
      6,
      8
     ],
     "table": "luHh8A=="
    }
   },
   {
    "name": "Indigo",
    "color": "grey",
    "row": 1,
    "column": 2,
    "text": "At least one of these is true: Marble is honest, or all of the grey cats are liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     2,
     3,
     8
    ],
    "clue": {
     "cats": [
      0,
      2,
      3,
      5,
      8
     ],
     "table": "/wAAfw=="
    }
   },
   {
    "name": "Juniper",
    "color": "black",
    "row": 2,
    "column": 0,
    "text": "All of Bagel, Honey and me are liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     1,
     4
    ],
    "clue": {
     "cats": [
      1,
      4,
      6
     ],
     "table": "cA=="
    }
   },
   {
    "name": "Loki",
    "color": "siamese",
    "row": 2,
    "column": 1,
    "text": "Marble and I are both honest, or both liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     8
    ],
    "clue": {
     "cats": [
      7,
      8
     ],
     "table": "Aw=="
    }
   },
   {
    "name": "Marble",
    "color": "siamese",
    "row": 2,
    "column": 2,
    "text": "All of the siamese cats are the same: all honest, or all liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     7
    ],
    "clue": {
     "cats": [
      7,
      8
     ],
     "table": "BQ=="
    }
   }
  ],
  "liars": [
   false,
   true,
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
  "rows": 3,
  "cols": 3,
  "seed": 241,
  "level": "hard",
  "given": null,
  "cats": [
   {
    "name": "Bean",
    "color": "ginger",
    "row": 0,
    "column": 0,
    "text": "Coco and I are both liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     1
    ],
    "clue": {
     "cats": [
      0,
      1
     ],
     "table": "Ag=="
    }
   },
   {
    "name": "Coco",
    "color": "calico",
    "row": 0,
    "column": 1,
    "text": "Indigo told me: \"Bean and Coco are opposites: one is honest, the other is a liar.\"",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     7
    ],
    "clue": {
     "cats": [
      0,
      1,
      7
     ],
     "table": "3g=="
    }
   },
   {
    "name": "Dusty",
    "color": "calico",
    "row": 0,
    "column": 2,
    "text": "Gnocchi is the only honest cat among my neighbors. Mew.",
    "hidden": false,
    "secret": null,
    "mentions": [
     1,
     5
    ],
    "clue": {
     "cats": [
      1,
      2,
      5
     ],
     "table": "xg=="
    }
   },
   {
    "name": "Ember",
    "color": "ginger",
    "row": 1,
    "column": 0,
    "text": "Coco is the only honest cat among the cats in row 1.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     1,
     2
    ],
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
    "name": "Fig",
    "color": "tuxedo",
    "row": 1,
    "column": 1,
    "text": "Ember is honest, but Dusty is a liar.",
    "hidden": false,
    "secret": null,
    "mentions": [
     2,
     3
    ],
    "clue": {
     "cats": [
      2,
      3,
      4
     ],
     "table": "0g=="
    }
   },
   {
    "name": "Gnocchi",
    "color": "ginger",
    "row": 1,
    "column": 2,
    "text": "At least one of these is true: Dusty is a liar, or Ember is honest. Mrow.",
    "hidden": false,
    "secret": null,
    "mentions": [
     2,
     3
    ],
    "clue": {
     "cats": [
      2,
      3,
      5
     ],
     "table": "Sw=="
    }
   },
   {
    "name": "Hazel",
    "color": "tuxedo",
    "row": 2,
    "column": 0,
    "text": "Hiss! Bean and Kiwi are both liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     8
    ],
    "clue": {
     "cats": [
      0,
      6,
      8
     ],
     "table": "bA=="
    }
   },
   {
    "name": "Indigo",
    "color": "calico",
    "row": 2,
    "column": 1,
    "text": "Mrrrow mrrp mew.",
    "hidden": true,
    "secret": "Bean and Coco are opposites: one is honest, the other is a liar.",
    "mentions": [],
    "clue": null
   },
   {
    "name": "Kiwi",
    "color": "calico",
    "row": 2,
    "column": 2,
    "text": "All of the cats in my row are the same: all honest, or all liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     6,
     7
    ],
    "clue": {
     "cats": [
      6,
      7,
      8
     ],
     "table": "cQ=="
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
   false,
   false,
   true
  ]
 },
 {
  "rows": 3,
  "cols": 3,
  "seed": 244,
  "level": "hard",
  "given": null,
  "cats": [
   {
    "name": "Apricot",
    "color": "tabby",
    "row": 0,
    "column": 0,
    "text": "Among the cats to my right, at least one is honest and at least one is a liar.",
    "hidden": false,
    "secret": null,
    "mentions": [
     1,
     2
    ],
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
    "name": "Bean",
    "color": "tabby",
    "row": 0,
    "column": 1,
    "text": "At least one of Dumpling and me is honest. Meow.",
    "hidden": false,
    "secret": null,
    "mentions": [
     3
    ],
    "clue": {
     "cats": [
      1,
      3
     ],
     "table": "DQ=="
    }
   },
   {
    "name": "Clover",
    "color": "calico",
    "row": 0,
    "column": 2,
    "text": "Exactly 2 of the tabby cats are liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     1,
     3,
     6
    ],
    "clue": {
     "cats": [
      0,
      1,
      2,
      3,
      6
     ],
     "table": "eJaW4Q=="
    }
   },
   {
    "name": "Dumpling",
    "color": "tabby",
    "row": 1,
    "column": 0,
    "text": "Pfft! All of Bean, Kettle and me are liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     1,
     8
    ],
    "clue": {
     "cats": [
      1,
      3,
      8
     ],
     "table": "TA=="
    }
   },
   {
    "name": "Gizmo",
    "color": "calico",
    "row": 1,
    "column": 1,
    "text": "At least one of my neighbors is a liar.",
    "hidden": false,
    "secret": null,
    "mentions": [
     1,
     3,
     5,
     7
    ],
    "clue": {
     "cats": [
      1,
      3,
      4,
      5,
      7
     ],
     "table": "Hg8PDw=="
    }
   },
   {
    "name": "Hobbes",
    "color": "white",
    "row": 1,
    "column": 2,
    "text": "I'm the only liar among Bean, Clover and me.",
    "hidden": false,
    "secret": null,
    "mentions": [
     1,
     2
    ],
    "clue": {
     "cats": [
      1,
      2,
      5
     ],
     "table": "4A=="
    }
   },
   {
    "name": "Iggy",
    "color": "tabby",
    "row": 2,
    "column": 0,
    "text": "At least one of the cats in my column is a liar.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     3
    ],
    "clue": {
     "cats": [
      0,
      3,
      6
     ],
     "table": "Dg=="
    }
   },
   {
    "name": "Jasper",
    "color": "white",
    "row": 2,
    "column": 1,
    "text": "At least one of these is true: Hobbes is a liar, or all of Dumpling, Gizmo and me are honest.",
    "hidden": false,
    "secret": null,
    "mentions": [
     3,
     4,
     5
    ],
    "clue": {
     "cats": [
      3,
      4,
      5,
      7
     ],
     "table": "8Q8="
    }
   },
   {
    "name": "Kettle",
    "color": "calico",
    "row": 2,
    "column": 2,
    "text": "At least one of these is true: Bean is honest, or all of Bean, Iggy and me are liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     1,
     6
    ],
    "clue": {
     "cats": [
      1,
      6,
      8
     ],
     "table": "JQ=="
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
   false
  ]
 },
 {
  "rows": 4,
  "cols": 4,
  "seed": 1041,
  "level": "medium",
  "given": 7,
  "cats": [
   {
    "name": "Angus",
    "color": "ginger",
    "row": 0,
    "column": 0,
    "text": "Truffle said: \"Among the corner cats, at least one is honest and at least one is a liar.\"",
    "hidden": false,
    "secret": null,
    "mentions": [
     3,
     12,
     15
    ],
    "clue": {
     "cats": [
      0,
      3,
      12,
      15
     ],
     "table": "/qo="
    }
   },
   {
    "name": "Bagel",
    "color": "calico",
    "row": 0,
    "column": 1,
    "text": "Coco is the only liar among my neighbors.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     2,
     5
    ],
    "clue": {
     "cats": [
      0,
      1,
      2,
      5
     ],
     "table": "nMw="
    }
   },
   {
    "name": "Coco",
    "color": "tabby",
    "row": 0,
    "column": 2,
    "text": "All of the tuxedo cats are the same: all honest, or all liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     4,
     9,
     15
    ],
    "clue": {
     "cats": [
      2,
      4,
      9,
      15
     ],
     "table": "qWo="
    }
   },
   {
    "name": "Echo",
    "color": "ginger",
    "row": 0,
    "column": 3,
    "text": "Honey is the only honest cat among the cats in row 2. Mew.",
    "hidden": false,
    "secret": null,
    "mentions": [
     4,
     5,
     6,
     7
    ],
    "clue": {
     "cats": [
      3,
      4,
      5,
      6,
      7
     ],
     "table": "qqqqpg=="
    }
   },
   {
    "name": "Gizmo",
    "color": "tuxedo",
    "row": 1,
    "column": 0,
    "text": "All of Rusty, Truffle and me are the same: all honest, or all liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     13,
     15
    ],
    "clue": {
     "cats": [
      4,
      13,
      15
     ],
     "table": "Kw=="
    }
   },
   {
    "name": "Honey",
    "color": "tabby",
    "row": 1,
    "column": 1,
    "text": "Purr. All of the calico cats are honest.",
    "hidden": false,
    "secret": null,
    "mentions": [
     1,
     10,
     14
    ],
    "clue": {
     "cats": [
      1,
      5,
      10,
      14
     ],
     "table": "ycw="
    }
   },
   {
    "name": "Iggy",
    "color": "tabby",
    "row": 1,
    "column": 2,
    "text": "All of the cats in my column are the same: all honest, or all liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     2,
     10,
     14
    ],
    "clue": {
     "cats": [
      2,
      6,
      10,
      14
     ],
     "table": "zUw="
    }
   },
   {
    "name": "Jellybean",
    "color": "white",
    "row": 1,
    "column": 3,
    "text": "Echo and I are both liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     3
    ],
    "clue": {
     "cats": [
      3,
      7
     ],
     "table": "BA=="
    }
   },
   {
    "name": "Luna",
    "color": "ginger",
    "row": 2,
    "column": 0,
    "text": "Mrow. All of Bagel, Rusty and me are the same: all honest, or all liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     1,
     13
    ],
    "clue": {
     "cats": [
      1,
      8,
      13
     ],
     "table": "TQ=="
    }
   },
   {
    "name": "Marble",
    "color": "tuxedo",
    "row": 2,
    "column": 1,
    "text": "Luna and Rusty are both honest.",
    "hidden": false,
    "secret": null,
    "mentions": [
     8,
     13
    ],
    "clue": {
     "cats": [
      8,
      9,
      13
     ],
     "table": "yQ=="
    }
   },
   {
    "name": "Noodle",
    "color": "calico",
    "row": 2,
    "column": 2,
    "text": "Sushi is honest, fur real.",
    "hidden": false,
    "secret": null,
    "mentions": [
     14
    ],
    "clue": {
     "cats": [
      10,
      14
     ],
     "table": "CQ=="
    }
   },
   {
    "name": "Olive",
    "color": "white",
    "row": 2,
    "column": 3,
    "text": "Bagel is honest, but Quill is a liar.",
    "hidden": false,
    "secret": null,
    "mentions": [
     1,
     12
    ],
    "clue": {
     "cats": [
      1,
      11,
      12
     ],
     "table": "nA=="
    }
   },
   {
    "name": "Quill",
    "color": "tabby",
    "row": 3,
    "column": 0,
    "text": "Bagel is honest, but Rusty is a liar.",
    "hidden": false,
    "secret": null,
    "mentions": [
     1,
     13
    ],
    "clue": {
     "cats": [
      1,
      12,
      13
     ],
     "table": "nA=="
    }
   },
   {
    "name": "Rusty",
    "color": "ginger",
    "row": 3,
    "column": 1,
    "text": "Sushi said: \"All of the cats in column 2 are the same: all honest, or all liars.\"",
    "hidden": false,
    "secret": null,
    "mentions": [
     1,
     5,
     9,
     14
    ],
    "clue": {
     "cats": [
      1,
      5,
      9,
      13,
      14
     ],
     "table": "Af/+/w=="
    }
   },
   {
    "name": "Sushi",
    "color": "calico",
    "row": 3,
    "column": 2,
    "text": "Mrrrow mrrp mew.",
    "hidden": true,
    "secret": "All of the cats in column 2 are the same: all honest, or all liars.",
    "mentions": [],
    "clue": null
   },
   {
    "name": "Truffle",
    "color": "tuxedo",
    "row": 3,
    "column": 3,
    "text": "Mrrp? Mew mew mrrrow!",
    "hidden": true,
    "secret": "Among the corner cats, at least one is honest and at least one is a liar.",
    "mentions": [],
    "clue": null
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
   true,
   false,
   false,
   false,
   false,
   true,
   false,
   false,
   false
  ]
 },
 {
  "rows": 4,
  "cols": 4,
  "seed": 20020,
  "level": "medium",
  "given": 2,
  "cats": [
   {
    "name": "Ash",
    "color": "tuxedo",
    "row": 0,
    "column": 0,
    "text": "Felix is the only liar among the cats in my column.",
    "hidden": false,
    "secret": null,
    "mentions": [
     4,
     8,
     12
    ],
    "clue": {
     "cats": [
      0,
      4,
      8,
      12
     ],
     "table": "rqo="
    }
   },
   {
    "name": "Bagel",
    "color": "calico",
    "row": 0,
    "column": 1,
    "text": "At least one of these is true: Iggy is a liar, or all of Oreo, Paprika and me are honest.",
    "hidden": false,
    "secret": null,
    "mentions": [
     6,
     12,
     13
    ],
    "clue": {
     "cats": [
      1,
      6,
      12,
      13
     ],
     "table": "Z2Y="
    }
   },
   {
    "name": "Clover",
    "color": "grey",
    "row": 0,
    "column": 2,
    "text": "I'm the only liar among the cats in my row.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     1,
     3
    ],
    "clue": {
     "cats": [
      0,
      1,
      2,
      3
     ],
     "table": "4PA="
    }
   },
   {
    "name": "Dumpling",
    "color": "calico",
    "row": 0,
    "column": 3,
    "text": "All of Clover, Rolo and me are the same: all honest, or all liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     2,
     15
    ],
    "clue": {
     "cats": [
      2,
      3,
      15
     ],
     "table": "TQ=="
    }
   },
   {
    "name": "Felix",
    "color": "siamese",
    "row": 1,
    "column": 0,
    "text": "Exactly 3 of the cats in row 3 are liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     8,
     9,
     10,
     11
    ],
    "clue": {
     "cats": [
      4,
      8,
      9,
      10,
      11
     ],
     "table": "qmpqlg=="
    }
   },
   {
    "name": "Honey",
    "color": "siamese",
    "row": 1,
    "column": 1,
    "text": "Lentil is the only liar among the cats in my column.",
    "hidden": false,
    "secret": null,
    "mentions": [
     1,
     9,
     13
    ],
    "clue": {
     "cats": [
      1,
      5,
      9,
      13
     ],
     "table": "3Mw="
    }
   },
   {
    "name": "Iggy",
    "color": "tuxedo",
    "row": 1,
    "column": 2,
    "text": "Mew. All the cats are the same: all honest, or all liars.",
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
     "table": "AQAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA/////////38="
    }
   },
   {
    "name": "Juniper",
    "color": "tuxedo",
    "row": 1,
    "column": 3,
    "text": "All of the cats in row 4 are the same: all honest, or all liars. Mrow.",
    "hidden": false,
    "secret": null,
    "mentions": [
     12,
     13,
     14,
     15
    ],
    "clue": {
     "cats": [
      7,
      12,
      13,
      14,
      15
     ],
     "table": "qaqqag=="
    }
   },
   {
    "name": "Kiwi",
    "color": "grey",
    "row": 2,
    "column": 0,
    "text": "All of the cats to my right are honest.",
    "hidden": false,
    "secret": null,
    "mentions": [
     9,
     10,
     11
    ],
    "clue": {
     "cats": [
      8,
      9,
      10,
      11
     ],
     "table": "qao="
    }
   },
   {
    "name": "Lentil",
    "color": "calico",
    "row": 2,
    "column": 1,
    "text": "Mrow. Exactly 2 of Felix, Iggy and me are liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     4,
     6
    ],
    "clue": {
     "cats": [
      4,
      6,
      9
     ],
     "table": "mA=="
    }
   },
   {
    "name": "Mango",
    "color": "grey",
    "row": 2,
    "column": 2,
    "text": "Dumpling and Oreo are opposites: one is honest, the other is a liar.",
    "hidden": false,
    "secret": null,
    "mentions": [
     3,
     12
    ],
    "clue": {
     "cats": [
      3,
      10,
      12
     ],
     "table": "lg=="
    }
   },
   {
    "name": "Nugget",
    "color": "siamese",
    "row": 2,
    "column": 3,
    "text": "Dumpling is the only liar among the corner cats.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     3,
     12,
     15
    ],
    "clue": {
     "cats": [
      0,
      3,
      11,
      12,
      15
     ],
     "table": "tPDw8A=="
    }
   },
   {
    "name": "Oreo",
    "color": "tuxedo",
    "row": 3,
    "column": 0,
    "text": "Queenie told me: \"Iggy is the only liar among the tuxedo cats.\"",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     6,
     7,
     14
    ],
    "clue": {
     "cats": [
      0,
      6,
      7,
      12,
      14
     ],
     "table": "BP/7/w=="
    }
   },
   {
    "name": "Paprika",
    "color": "calico",
    "row": 3,
    "column": 1,
    "text": "At least one of these is true: Rolo is honest, or all of Iggy, Lentil and me are honest.",
    "hidden": false,
    "secret": null,
    "mentions": [
     6,
     9,
     15
    ],
    "clue": {
     "cats": [
      6,
      9,
      13,
      15
     ],
     "table": "D/E="
    }
   },
   {
    "name": "Queenie",
    "color": "siamese",
    "row": 3,
    "column": 2,
    "text": "*chirps at a bird outside*",
    "hidden": true,
    "secret": "Iggy is the only liar among the tuxedo cats.",
    "mentions": [],
    "clue": null
   },
   {
    "name": "Rolo",
    "color": "grey",
    "row": 3,
    "column": 3,
    "text": "Dumpling is the only liar among the cats in my column.",
    "hidden": false,
    "secret": null,
    "mentions": [
     3,
     7,
     11
    ],
    "clue": {
     "cats": [
      3,
      7,
      11,
      15
     ],
     "table": "Av8="
    }
   }
  ],
  "liars": [
   false,
   false,
   true,
   true,
   true,
   true,
   true,
   false,
   false,
   false,
   false,
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
  "seed": 20040,
  "level": "medium",
  "given": 11,
  "cats": [
   {
    "name": "Bean",
    "color": "white",
    "row": 0,
    "column": 0,
    "text": "Prrrt! All of the cats to my right are honest.",
    "hidden": false,
    "secret": null,
    "mentions": [
     1,
     2,
     3
    ],
    "clue": {
     "cats": [
      0,
      1,
      2,
      3
     ],
     "table": "qao="
    }
   },
   {
    "name": "Cricket",
    "color": "white",
    "row": 0,
    "column": 1,
    "text": "Bean and Kiwi are both honest.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     7
    ],
    "clue": {
     "cats": [
      0,
      1,
      7
     ],
     "table": "yQ=="
    }
   },
   {
    "name": "Dumpling",
    "color": "tabby",
    "row": 0,
    "column": 2,
    "text": "Among the siamese cats, at least one is honest and at least one is a liar.",
    "hidden": false,
    "secret": null,
    "mentions": [
     3,
     11
    ],
    "clue": {
     "cats": [
      2,
      3,
      11
     ],
     "table": "lg=="
    }
   },
   {
    "name": "Espresso",
    "color": "siamese",
    "row": 0,
    "column": 3,
    "text": "Rolo is the only liar among the cats in column 2.",
    "hidden": false,
    "secret": null,
    "mentions": [
     1,
     5,
     9,
     13
    ],
    "clue": {
     "cats": [
      1,
      3,
      5,
      9,
      13
     ],
     "table": "zMzJzA=="
    }
   },
   {
    "name": "Fudge",
    "color": "ginger",
    "row": 1,
    "column": 0,
    "text": "Mew. Loki is the only liar among the cats in my column.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     8,
     12
    ],
    "clue": {
     "cats": [
      0,
      4,
      8,
      12
     ],
     "table": "3Mw="
    }
   },
   {
    "name": "Honey",
    "color": "tabby",
    "row": 1,
    "column": 1,
    "text": "All of the cats in the middle are honest.",
    "hidden": false,
    "secret": null,
    "mentions": [
     6,
     9,
     10
    ],
    "clue": {
     "cats": [
      5,
      6,
      9,
      10
     ],
     "table": "q6o="
    }
   },
   {
    "name": "Inky",
    "color": "calico",
    "row": 1,
    "column": 2,
    "text": "Mrow. Exactly one of the cats below me is a liar.",
    "hidden": false,
    "secret": null,
    "mentions": [
     10,
     14
    ],
    "clue": {
     "cats": [
      6,
      10,
      14
     ],
     "table": "lg=="
    }
   },
   {
    "name": "Kiwi",
    "color": "calico",
    "row": 1,
    "column": 3,
    "text": "Fudge is the only liar among Espresso, Fudge and me.",
    "hidden": false,
    "secret": null,
    "mentions": [
     3,
     4
    ],
    "clue": {
     "cats": [
      3,
      4,
      7
     ],
     "table": "9A=="
    }
   },
   {
    "name": "Loki",
    "color": "tabby",
    "row": 2,
    "column": 0,
    "text": "Espresso is honest, but Pepper is a liar.",
    "hidden": false,
    "secret": null,
    "mentions": [
     3,
     11
    ],
    "clue": {
     "cats": [
      3,
      8,
      11
     ],
     "table": "nA=="
    }
   },
   {
    "name": "Mango",
    "color": "ginger",
    "row": 2,
    "column": 1,
    "text": "At least one of these is true: Pepper is a liar, or all of the corner cats are liars. Meow.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     3,
     11,
     12,
     15
    ],
    "clue": {
     "cats": [
      0,
      3,
      9,
      11,
      12,
      15
     ],
     "table": "8A/wD/APeA8="
    }
   },
   {
    "name": "Oreo",
    "color": "white",
    "row": 2,
    "column": 2,
    "text": "Rolo said: \"All of Bean, Honey and me are the same: all honest, or all liars.\"",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     5,
     13
    ],
    "clue": {
     "cats": [
      0,
      5,
      10,
      13
     ],
     "table": "8fc="
    }
   },
   {
    "name": "Pepper",
    "color": "siamese",
    "row": 2,
    "column": 3,
    "text": "Mango is the only honest cat among Mango, Quill and me.",
    "hidden": false,
    "secret": null,
    "mentions": [
     9,
     12
    ],
    "clue": {
     "cats": [
      9,
      11,
      12
     ],
     "table": "jA=="
    }
   },
   {
    "name": "Quill",
    "color": "calico",
    "row": 3,
    "column": 0,
    "text": "Rolo is the only liar among my neighbors.",
    "hidden": false,
    "secret": null,
    "mentions": [
     8,
     13
    ],
    "clue": {
     "cats": [
      8,
      12,
      13
     ],
     "table": "nA=="
    }
   },
   {
    "name": "Rolo",
    "color": "black",
    "row": 3,
    "column": 1,
    "text": "*chirps at a bird outside*",
    "hidden": true,
    "secret": "All of Bean, Honey and me are the same: all honest, or all liars.",
    "mentions": [],
    "clue": null
   },
   {
    "name": "Saffron",
    "color": "black",
    "row": 3,
    "column": 2,
    "text": "All of Cricket, Fudge and me are the same: all honest, or all liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     1,
     4
    ],
    "clue": {
     "cats": [
      1,
      4,
      14
     ],
     "table": "cQ=="
    }
   },
   {
    "name": "Truffle",
    "color": "white",
    "row": 3,
    "column": 3,
    "text": "Oreo and Quill are both liars. Grrr.",
    "hidden": false,
    "secret": null,
    "mentions": [
     10,
     12
    ],
    "clue": {
     "cats": [
      10,
      12,
      15
     ],
     "table": "eA=="
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
   false,
   false,
   false,
   false,
   false,
   true,
   false,
   true,
   true,
   true
  ]
 },
 {
  "rows": 4,
  "cols": 4,
  "seed": 40022,
  "level": "medium",
  "given": 11,
  "cats": [
   {
    "name": "Ash",
    "color": "ginger",
    "row": 0,
    "column": 0,
    "text": "At least one of these is true: Fudge is a liar, or Noodle is honest.",
    "hidden": false,
    "secret": null,
    "mentions": [
     4,
     11
    ],
    "clue": {
     "cats": [
      0,
      4,
      11
     ],
     "table": "ZQ=="
    }
   },
   {
    "name": "Bean",
    "color": "white",
    "row": 0,
    "column": 1,
    "text": "Among the tabby cats, at least one is honest and at least one is a liar.",
    "hidden": false,
    "secret": null,
    "mentions": [
     6,
     13
    ],
    "clue": {
     "cats": [
      1,
      6,
      13
     ],
     "table": "lg=="
    }
   },
   {
    "name": "Cricket",
    "color": "grey",
    "row": 0,
    "column": 2,
    "text": "At least one of these is true: Vanilla is a liar, or all of the cats in column 4 are liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     3,
     7,
     11,
     14,
     15
    ],
    "clue": {
     "cats": [
      2,
      3,
      7,
      11,
      14,
      15
     ],
     "table": "qqpVVapqVVU="
    }
   },
   {
    "name": "Ember",
    "color": "grey",
    "row": 0,
    "column": 3,
    "text": "Inky is the only honest cat among my neighbors. Mew.",
    "hidden": false,
    "secret": null,
    "mentions": [
     2,
     7
    ],
    "clue": {
     "cats": [
      2,
      3,
      7
     ],
     "table": "xg=="
    }
   },
   {
    "name": "Fudge",
    "color": "grey",
    "row": 1,
    "column": 0,
    "text": "Exactly one of the cats in my row is a liar.",
    "hidden": false,
    "secret": null,
    "mentions": [
     5,
     6,
     7
    ],
    "clue": {
     "cats": [
      4,
      5,
      6,
      7
     ],
     "table": "vKs="
    }
   },
   {
    "name": "Gizmo",
    "color": "tuxedo",
    "row": 1,
    "column": 1,
    "text": "At least one of Noodle and me is a liar.",
    "hidden": false,
    "secret": null,
    "mentions": [
     11
    ],
    "clue": {
     "cats": [
      5,
      11
     ],
     "table": "BA=="
    }
   },
   {
    "name": "Honey",
    "color": "tabby",
    "row": 1,
    "column": 2,
    "text": "Fudge is honest, but Ember is a liar.",
    "hidden": false,
    "secret": null,
    "mentions": [
     3,
     4
    ],
    "clue": {
     "cats": [
      3,
      4,
      6
     ],
     "table": "0g=="
    }
   },
   {
    "name": "Inky",
    "color": "tuxedo",
    "row": 1,
    "column": 3,
    "text": "At least one of these is true: Mochi is a liar, or all of the cats below me are liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     10,
     11,
     15
    ],
    "clue": {
     "cats": [
      7,
      10,
      11,
      15
     ],
     "table": "ZlY="
    }
   },
   {
    "name": "Kismet",
    "color": "siamese",
    "row": 2,
    "column": 0,
    "text": "Bean and Inky are both honest, or both liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     1,
     7
    ],
    "clue": {
     "cats": [
      1,
      7,
      8
     ],
     "table": "aQ=="
    }
   },
   {
    "name": "Loki",
    "color": "siamese",
    "row": 2,
    "column": 1,
    "text": "All of the cats in row 4 are honest.",
    "hidden": false,
    "secret": null,
    "mentions": [
     12,
     13,
     14,
     15
    ],
    "clue": {
     "cats": [
      9,
      12,
      13,
      14,
      15
     ],
     "table": "qaqqqg=="
    }
   },
   {
    "name": "Mochi",
    "color": "siamese",
    "row": 2,
    "column": 2,
    "text": "Meow. Fudge is the only liar among the grey cats.",
    "hidden": false,
    "secret": null,
    "mentions": [
     2,
     3,
     4,
     11
    ],
    "clue": {
     "cats": [
      2,
      3,
      4,
      10,
      11
     ],
     "table": "EO8A/w=="
    }
   },
   {
    "name": "Noodle",
    "color": "grey",
    "row": 2,
    "column": 3,
    "text": "At least one of these is true: Loki is a liar, or all of my neighbors are liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     7,
     9,
     10,
     15
    ],
    "clue": {
     "cats": [
      7,
      9,
      10,
      11,
      15
     ],
     "table": "zDPsEw=="
    }
   },
   {
    "name": "Olive",
    "color": "white",
    "row": 3,
    "column": 0,
    "text": "Fudge is the only liar among the cats above me.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     4,
     8
    ],
    "clue": {
     "cats": [
      0,
      4,
      8,
      12
     ],
     "table": "BPs="
    }
   },
   {
    "name": "Sushi",
    "color": "tabby",
    "row": 3,
    "column": 1,
    "text": "All of Olive, Waffles and me are honest.",
    "hidden": false,
    "secret": null,
    "mentions": [
     12,
     15
    ],
    "clue": {
     "cats": [
      12,
      13,
      15
     ],
     "table": "zQ=="
    }
   },
   {
    "name": "Vanilla",
    "color": "white",
    "row": 3,
    "column": 2,
    "text": "Loki and Noodle are opposites: one is honest, the other is a liar.",
    "hidden": false,
    "secret": null,
    "mentions": [
     9,
     11
    ],
    "clue": {
     "cats": [
      9,
      11,
      14
     ],
     "table": "lg=="
    }
   },
   {
    "name": "Waffles",
    "color": "ginger",
    "row": 3,
    "column": 3,
    "text": "At least one of these is true: Loki is honest, or all of the corner cats are honest. Mew.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     3,
     9,
     12
    ],
    "clue": {
     "cats": [
      0,
      3,
      9,
      12,
      15
     ],
     "table": "Hw/w8A=="
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
   false,
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
  "rows": 4,
  "cols": 4,
  "seed": 40026,
  "level": "medium",
  "given": 13,
  "cats": [
   {
    "name": "Apricot",
    "color": "black",
    "row": 0,
    "column": 0,
    "text": "Exactly one of the cats in row 3 is a liar.",
    "hidden": false,
    "secret": null,
    "mentions": [
     8,
     9,
     10,
     11
    ],
    "clue": {
     "cats": [
      0,
      8,
      9,
      10,
      11
     ],
     "table": "lqmpqg=="
    }
   },
   {
    "name": "Biscuit",
    "color": "black",
    "row": 0,
    "column": 1,
    "text": "Coco told me: \"Dumpling and Goose are both liars.\"",
    "hidden": false,
    "secret": null,
    "mentions": [
     2,
     3,
     6
    ],
    "clue": {
     "cats": [
      1,
      2,
      3,
      6
     ],
     "table": "7r4="
    }
   },
   {
    "name": "Coco",
    "color": "tuxedo",
    "row": 0,
    "column": 2,
    "text": "*chirps at a bird outside*",
    "hidden": true,
    "secret": "At least one of these is true: Quincy is a liar, or all of Felix, Juniper and me are liars.",
    "mentions": [],
    "clue": null
   },
   {
    "name": "Dumpling",
    "color": "black",
    "row": 0,
    "column": 3,
    "text": "At least one of Echo and Luna is a liar.",
    "hidden": false,
    "secret": null,
    "mentions": [
     4,
     11
    ],
    "clue": {
     "cats": [
      3,
      4,
      11
     ],
     "table": "Vg=="
    }
   },
   {
    "name": "Echo",
    "color": "tabby",
    "row": 1,
    "column": 0,
    "text": "All of the cats in row 4 are honest.",
    "hidden": false,
    "secret": null,
    "mentions": [
     12,
     13,
     14,
     15
    ],
    "clue": {
     "cats": [
      4,
      12,
      13,
      14,
      15
     ],
     "table": "qaqqqg=="
    }
   },
   {
    "name": "Felix",
    "color": "white",
    "row": 1,
    "column": 1,
    "text": "Exactly one of the cats in column 1 is a liar.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     4,
     8,
     12
    ],
    "clue": {
     "cats": [
      0,
      4,
      5,
      8,
      12
     ],
     "table": "luHh8A=="
    }
   },
   {
    "name": "Goose",
    "color": "siamese",
    "row": 1,
    "column": 2,
    "text": "At least one of these is true: Kismet is a liar, or all of my neighbors are honest. Mrow.",
    "hidden": false,
    "secret": null,
    "mentions": [
     2,
     5,
     7,
     10
    ],
    "clue": {
     "cats": [
      2,
      5,
      6,
      7,
      10
     ],
     "table": "4fAPDw=="
    }
   },
   {
    "name": "Hazel",
    "color": "white",
    "row": 1,
    "column": 3,
    "text": "At least one of these is true: Juniper is honest, or all of the cats in column 3 are honest.",
    "hidden": false,
    "secret": null,
    "mentions": [
     2,
     6,
     9,
     10,
     14
    ],
    "clue": {
     "cats": [
      2,
      6,
      7,
      9,
      10,
      14
     ],
     "table": "D+EP8A/wD/A="
    }
   },
   {
    "name": "Iggy",
    "color": "tuxedo",
    "row": 2,
    "column": 0,
    "text": "Apricot and Felix are both liars. Pfft!",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     5
    ],
    "clue": {
     "cats": [
      0,
      5,
      8
     ],
     "table": "eA=="
    }
   },
   {
    "name": "Juniper",
    "color": "tabby",
    "row": 2,
    "column": 1,
    "text": "All of the tuxedo cats are liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     2,
     8
    ],
    "clue": {
     "cats": [
      2,
      8,
      9
     ],
     "table": "eA=="
    }
   },
   {
    "name": "Kismet",
    "color": "tabby",
    "row": 2,
    "column": 2,
    "text": "Goose is the only liar among Goose, Pepper and me.",
    "hidden": false,
    "secret": null,
    "mentions": [
     6,
     13
    ],
    "clue": {
     "cats": [
      6,
      10,
      13
     ],
     "table": "zg=="
    }
   },
   {
    "name": "Luna",
    "color": "white",
    "row": 2,
    "column": 3,
    "text": "Mew. Goose is the only liar among the siamese cats.",
    "hidden": false,
    "secret": null,
    "mentions": [
     6,
     12,
     15
    ],
    "clue": {
     "cats": [
      6,
      11,
      12,
      15
     ],
     "table": "xsw="
    }
   },
   {
    "name": "Marble",
    "color": "siamese",
    "row": 3,
    "column": 0,
    "text": "Iggy is the only liar among the cats above me.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     4,
     8
    ],
    "clue": {
     "cats": [
      0,
      4,
      8,
      12
     ],
     "table": "EO8="
    }
   },
   {
    "name": "Pepper",
    "color": "black",
    "row": 3,
    "column": 1,
    "text": "Echo and Marble are both honest.",
    "hidden": false,
    "secret": null,
    "mentions": [
     4,
     12
    ],
    "clue": {
     "cats": [
      4,
      12,
      13
     ],
     "table": "4Q=="
    }
   },
   {
    "name": "Quincy",
    "color": "white",
    "row": 3,
    "column": 2,
    "text": "At least one of these is true: I'm a liar, or Pepper is honest.",
    "hidden": false,
    "secret": null,
    "mentions": [
     13
    ],
    "clue": {
     "cats": [
      13,
      14
     ],
     "table": "AQ=="
    }
   },
   {
    "name": "Sprout",
    "color": "siamese",
    "row": 3,
    "column": 3,
    "text": "Mrow. At least one of these is true: Dumpling is honest, or all of the tuxedo cats are liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     2,
     3,
     8
    ],
    "clue": {
     "cats": [
      2,
      3,
      8,
      15
     ],
     "table": "s0w="
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
   false,
   true,
   false,
   false,
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
  "seed": 5006,
  "level": "hard",
  "given": null,
  "cats": [
   {
    "name": "Apricot",
    "color": "grey",
    "row": 0,
    "column": 0,
    "text": "Mrow. Cricket is the only honest cat among the grey cats.",
    "hidden": false,
    "secret": null,
    "mentions": [
     2,
     14
    ],
    "clue": {
     "cats": [
      0,
      2,
      14
     ],
     "table": "ig=="
    }
   },
   {
    "name": "Biscuit",
    "color": "white",
    "row": 0,
    "column": 1,
    "text": "Rusty is honest, but Dumpling is a liar. Meow.",
    "hidden": false,
    "secret": null,
    "mentions": [
     3,
     14
    ],
    "clue": {
     "cats": [
      1,
      3,
      14
     ],
     "table": "pg=="
    }
   },
   {
    "name": "Cricket",
    "color": "grey",
    "row": 0,
    "column": 2,
    "text": "Among the cats on the edges, at least one is honest and at least one is a liar.",
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
     "table": "Dg8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PD48="
    }
   },
   {
    "name": "Dumpling",
    "color": "black",
    "row": 0,
    "column": 3,
    "text": "Felix said: \"Among the cats in column 4, at least one is honest and at least one is a liar.\"",
    "hidden": false,
    "secret": null,
    "mentions": [
     5,
     7,
     11,
     15
    ],
    "clue": {
     "cats": [
      3,
      5,
      7,
      11,
      15
     ],
     "table": "vru7uw=="
    }
   },
   {
    "name": "Espresso",
    "color": "calico",
    "row": 1,
    "column": 0,
    "text": "At least one of these is true: Cricket is honest, or all of the black cats are honest.",
    "hidden": false,
    "secret": null,
    "mentions": [
     2,
     3,
     5
    ],
    "clue": {
     "cats": [
      2,
      3,
      4,
      5
     ],
     "table": "h6U="
    }
   },
   {
    "name": "Felix",
    "color": "black",
    "row": 1,
    "column": 1,
    "text": "Mrrp? Mew mew mrrrow!",
    "hidden": true,
    "secret": "Among the cats in column 4, at least one is honest and at least one is a liar.",
    "mentions": [],
    "clue": null
   },
   {
    "name": "Goose",
    "color": "white",
    "row": 1,
    "column": 2,
    "text": "Dumpling and Rusty are both honest, or both liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     3,
     14
    ],
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
    "name": "Hazel",
    "color": "white",
    "row": 1,
    "column": 3,
    "text": "Mrrp? Mew mew mrrrow!",
    "hidden": true,
    "secret": "At least one of these is true: Oreo is honest, or all of the corner cats are honest.",
    "mentions": [],
    "clue": null
   },
   {
    "name": "Kettle",
    "color": "ginger",
    "row": 2,
    "column": 0,
    "text": "At least one of Felix, Goose and me is a liar.",
    "hidden": false,
    "secret": null,
    "mentions": [
     5,
     6
    ],
    "clue": {
     "cats": [
      5,
      6,
      8
     ],
     "table": "Dg=="
    }
   },
   {
    "name": "Loki",
    "color": "tabby",
    "row": 2,
    "column": 1,
    "text": "Hazel said: \"At least one of these is true: Rusty is a liar, or all of Goose, Oreo and me are honest.\"",
    "hidden": false,
    "secret": null,
    "mentions": [
     6,
     7,
     11,
     14
    ],
    "clue": {
     "cats": [
      6,
      7,
      9,
      11,
      14
     ],
     "table": "/fzz8w=="
    }
   },
   {
    "name": "Mango",
    "color": "tabby",
    "row": 2,
    "column": 2,
    "text": "All of Oreo, Ursa and me are the same: all honest, or all liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     11,
     15
    ],
    "clue": {
     "cats": [
      10,
      11,
      15
     ],
     "table": "Kw=="
    }
   },
   {
    "name": "Oreo",
    "color": "tabby",
    "row": 2,
    "column": 3,
    "text": "Quill is the only honest cat among the cats in column 2.",
    "hidden": false,
    "secret": null,
    "mentions": [
     1,
     5,
     9,
     13
    ],
    "clue": {
     "cats": [
      1,
      5,
      9,
      11,
      13
     ],
     "table": "gH8A/w=="
    }
   },
   {
    "name": "Pepper",
    "color": "calico",
    "row": 3,
    "column": 0,
    "text": "Espresso and Ursa are both honest.",
    "hidden": false,
    "secret": null,
    "mentions": [
     4,
     15
    ],
    "clue": {
     "cats": [
      4,
      12,
      15
     ],
     "table": "yQ=="
    }
   },
   {
    "name": "Quill",
    "color": "tabby",
    "row": 3,
    "column": 1,
    "text": "Biscuit and Felix are both liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     1,
     5
    ],
    "clue": {
     "cats": [
      1,
      5,
      13
     ],
     "table": "eA=="
    }
   },
   {
    "name": "Rusty",
    "color": "grey",
    "row": 3,
    "column": 2,
    "text": "Prrrt! Quill and I are both honest.",
    "hidden": false,
    "secret": null,
    "mentions": [
     13
    ],
    "clue": {
     "cats": [
      13,
      14
     ],
     "table": "DQ=="
    }
   },
   {
    "name": "Ursa",
    "color": "ginger",
    "row": 3,
    "column": 3,
    "text": "Goose is the only honest cat among the cats in the middle.",
    "hidden": false,
    "secret": null,
    "mentions": [
     5,
     6,
     9,
     10
    ],
    "clue": {
     "cats": [
      5,
      6,
      9,
      10,
      15
     ],
     "table": "ACD/3w=="
    }
   }
  ],
  "liars": [
   true,
   true,
   false,
   false,
   false,
   true,
   false,
   false,
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
  "seed": 5050,
  "level": "hard",
  "given": null,
  "cats": [
   {
    "name": "Bagel",
    "color": "ginger",
    "row": 0,
    "column": 0,
    "text": "Quill is the only liar among the corner cats. Mrow.",
    "hidden": false,
    "secret": null,
    "mentions": [
     3,
     12,
     15
    ],
    "clue": {
     "cats": [
      0,
      3,
      12,
      15
     ],
     "table": "uqo="
    }
   },
   {
    "name": "Dumpling",
    "color": "black",
    "row": 0,
    "column": 1,
    "text": "Saffron is honest, but Tater is a liar.",
    "hidden": false,
    "secret": null,
    "mentions": [
     14,
     15
    ],
    "clue": {
     "cats": [
      1,
      14,
      15
     ],
     "table": "mg=="
    }
   },
   {
    "name": "Ember",
    "color": "ginger",
    "row": 0,
    "column": 2,
    "text": "At least one of Mango and Rusty is honest.",
    "hidden": false,
    "secret": null,
    "mentions": [
     8,
     13
    ],
    "clue": {
     "cats": [
      2,
      8,
      13
     ],
     "table": "lQ=="
    }
   },
   {
    "name": "Felix",
    "color": "grey",
    "row": 0,
    "column": 3,
    "text": "Quill is the only liar among the cats in column 1.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     4,
     8,
     12
    ],
    "clue": {
     "cats": [
      0,
      3,
      4,
      8,
      12
     ],
     "table": "zMzJzA=="
    }
   },
   {
    "name": "Goose",
    "color": "siamese",
    "row": 1,
    "column": 0,
    "text": "Exactly 2 of the cats in the middle are liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     5,
     6,
     9,
     10
    ],
    "clue": {
     "cats": [
      4,
      5,
      6,
      9,
      10
     ],
     "table": "apaWqQ=="
    }
   },
   {
    "name": "Hobbes",
    "color": "black",
    "row": 1,
    "column": 1,
    "text": "Meow. I'm the only liar among the black cats.",
    "hidden": false,
    "secret": null,
    "mentions": [
     1,
     8,
     14
    ],
    "clue": {
     "cats": [
      1,
      5,
      8,
      14
     ],
     "table": "yMw="
    }
   },
   {
    "name": "Iggy",
    "color": "grey",
    "row": 1,
    "column": 2,
    "text": "Among the siamese cats, at least one is honest and at least one is a liar.",
    "hidden": false,
    "secret": null,
    "mentions": [
     4,
     7,
     12
    ],
    "clue": {
     "cats": [
      4,
      6,
      7,
      12
     ],
     "table": "NpM="
    }
   },
   {
    "name": "Luna",
    "color": "siamese",
    "row": 1,
    "column": 3,
    "text": "At least one of these is true: Bagel is honest, or all of Goose, Hobbes and me are liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     4,
     5
    ],
    "clue": {
     "cats": [
      0,
      4,
      5,
      7
     ],
     "table": "VSo="
    }
   },
   {
    "name": "Mango",
    "color": "black",
    "row": 2,
    "column": 0,
    "text": "Mrow. Iggy is honest, but Saffron is a liar.",
    "hidden": false,
    "secret": null,
    "mentions": [
     6,
     14
    ],
    "clue": {
     "cats": [
      6,
      8,
      14
     ],
     "table": "nA=="
    }
   },
   {
    "name": "Noodle",
    "color": "calico",
    "row": 2,
    "column": 1,
    "text": "I'm the only honest cat among Dumpling, Otis and me.",
    "hidden": false,
    "secret": null,
    "mentions": [
     1,
     10
    ],
    "clue": {
     "cats": [
      1,
      9,
      10
     ],
     "table": "7A=="
    }
   },
   {
    "name": "Otis",
    "color": "calico",
    "row": 2,
    "column": 2,
    "text": "Luna and Paprika are opposites: one is honest, the other is a liar.",
    "hidden": false,
    "secret": null,
    "mentions": [
     7,
     11
    ],
    "clue": {
     "cats": [
      7,
      10,
      11
     ],
     "table": "lg=="
    }
   },
   {
    "name": "Paprika",
    "color": "calico",
    "row": 2,
    "column": 3,
    "text": "At least one of these is true: I'm a liar, or Felix is honest.",
    "hidden": false,
    "secret": null,
    "mentions": [
     3
    ],
    "clue": {
     "cats": [
      3,
      11
     ],
     "table": "AQ=="
    }
   },
   {
    "name": "Quill",
    "color": "siamese",
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
    "name": "Rusty",
    "color": "ginger",
    "row": 3,
    "column": 1,
    "text": "Among the cats above me, at least one is honest and at least one is a liar.",
    "hidden": false,
    "secret": null,
    "mentions": [
     1,
     5,
     9
    ],
    "clue": {
     "cats": [
      1,
      5,
      9,
      13
     ],
     "table": "foE="
    }
   },
   {
    "name": "Saffron",
    "color": "black",
    "row": 3,
    "column": 2,
    "text": "At least one of these is true: Mango is a liar, or all of the cats in row 3 are honest.",
    "hidden": false,
    "secret": null,
    "mentions": [
     8,
     9,
     10,
     11
    ],
    "clue": {
     "cats": [
      8,
      9,
      10,
      11,
      14
     ],
     "table": "q6pUVQ=="
    }
   },
   {
    "name": "Tater",
    "color": "grey",
    "row": 3,
    "column": 3,
    "text": "Among the cats to my left, at least one is honest and at least one is a liar.",
    "hidden": false,
    "secret": null,
    "mentions": [
     12,
     13,
     14
    ],
    "clue": {
     "cats": [
      12,
      13,
      14,
      15
     ],
     "table": "foE="
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
   true,
   false,
   true,
   false,
   true,
   false
  ]
 },
 {
  "rows": 4,
  "cols": 4,
  "seed": 50002,
  "level": "hard",
  "given": null,
  "cats": [
   {
    "name": "Angus",
    "color": "grey",
    "row": 0,
    "column": 0,
    "text": "I'm the only liar of all the cats.",
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
     8,
     9,
     10,
     11,
     12,
     13,
     14,
     15
    ],
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
     "table": "qKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqo="
    }
   },
   {
    "name": "Bagel",
    "color": "black",
    "row": 0,
    "column": 1,
    "text": "Coco and Pickles are both honest, or both liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     2,
     14
    ],
    "clue": {
     "cats": [
      1,
      2,
      14
     ],
     "table": "aQ=="
    }
   },
   {
    "name": "Coco",
    "color": "grey",
    "row": 0,
    "column": 2,
    "text": "All of the cats to my left are liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     1
    ],
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
    "name": "Dumpling",
    "color": "grey",
    "row": 0,
    "column": 3,
    "text": "I smell a rat. At least one of the corner cats is a liar.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     12,
     15
    ],
    "clue": {
     "cats": [
      0,
      3,
      12,
      15
     ],
     "table": "MjM="
    }
   },
   {
    "name": "Ember",
    "color": "ginger",
    "row": 1,
    "column": 0,
    "text": "Mrow. Among Angus, Kiwi and me, at least one is honest and at least one is a liar.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     10
    ],
    "clue": {
     "cats": [
      0,
      4,
      10
     ],
     "table": "sg=="
    }
   },
   {
    "name": "Fig",
    "color": "calico",
    "row": 1,
    "column": 1,
    "text": "Exactly 2 of the cats in column 1 are liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     4,
     8,
     12
    ],
    "clue": {
     "cats": [
      0,
      4,
      5,
      8,
      12
     ],
     "table": "eJaW4Q=="
    }
   },
   {
    "name": "Gnocchi",
    "color": "ginger",
    "row": 1,
    "column": 2,
    "text": "At least one of these is true: Loki is honest, or all of the cats below me are liars. Mrow.",
    "hidden": false,
    "secret": null,
    "mentions": [
     10,
     11,
     14
    ],
    "clue": {
     "cats": [
      6,
      10,
      11,
      14
     ],
     "table": "pWU="
    }
   },
   {
    "name": "Hobbes",
    "color": "tabby",
    "row": 1,
    "column": 3,
    "text": "Among Dumpling, Kiwi and me, at least one is honest and at least one is a liar.",
    "hidden": false,
    "secret": null,
    "mentions": [
     3,
     10
    ],
    "clue": {
     "cats": [
      3,
      7,
      10
     ],
     "table": "sg=="
    }
   },
   {
    "name": "Iggy",
    "color": "calico",
    "row": 2,
    "column": 0,
    "text": "Angus is the only liar among the cats in my column.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     4,
     12
    ],
    "clue": {
     "cats": [
      0,
      4,
      8,
      12
     ],
     "table": "8vA="
    }
   },
   {
    "name": "Jasper",
    "color": "calico",
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
    "name": "Kiwi",
    "color": "grey",
    "row": 2,
    "column": 2,
    "text": "At least one of these is true: Iggy is a liar, or all the cats are honest.",
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
     11,
     12,
     13,
     14,
     15
    ],
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
     "table": "AQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//////////////////////////////////////////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/////////////////////////////////////////////////////////////////////////////////////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//////////////////////////////////////////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//////////////////////////////////////////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP////////////////////////////////////////////////////////////////////////////////////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP//////////////////////////////////////////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP//////////////////////////////////////////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/////////////////////////////////////////////////////////////////////////////////////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//////////////////////////////////////////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//////////////////////////////////////////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/////////////////////////////////////////////////////////////////////////////////////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//////////////////////////////////////////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//////////////////////////////////////////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP////////////////////////////////////////////////////////////////////////////////////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP//////////////////////////////////////////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP//////////////////////////////////////////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/////////////////////////////////////////////////////////////////////////////////////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//////////////////////////////////////////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//////////////////////////////////////////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/////////////////////////////////////////////////////////////////////////////////////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//////////////////////////////////////////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//////////////////////////////////////////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP////////////////////////////////////////////////////////////////////////////////////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP//////////////////////////////////////////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP//////////////////////////////////////////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/////////////////////////////////////////////////////////////////////////////////////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//////////////////////////////////////////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//////////////////////////////////////////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/////////////////////////////////////////////////////////////////////////////////////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//////////////////////////////////////////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//////////////////////////////////////////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP////////////////////////////////////////////////////////////////////////////////////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP//////////////////////////////////////////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP//////////////////////////////////////////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/////////////////////////////////////////////////////////////////////////////////////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//////////////////////////////////////////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//////////////////////////////////////////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/////////////////////////////////////////////////////////////////////////////////////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//////////////////////////////////////////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//////////////////////////////////////////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP////////////////////////////////////////////////////////////////////////////////////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP//////////////////////////////////////////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP//////////////////////////////////////////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/////////////////////////////////////////////////////////////////////////////////////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//////////////////////////////////////////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//////////////////////////////////////////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/////////////////////////////////////////////////////////////////////////////////////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//////////////////////////////////////////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//////////////////////////////////////////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP////////////////////////////////////////////////////////////////////////////////////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP//////////////////////////////////////////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP//////////////////////////////////////////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/////////////////////////////////////////////////////////////////////////////////////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//////////////////////////////////////////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//////////////////////////////////////////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/////////////////////////////////////////////////////////////////////////////////////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//////////////////////////////////////////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//////////////////////////////////////////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP////////////////////////////////////////////////////////////////////////////////////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP//////////////////////////////////////////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP//////////////////////////////////////////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/////////////////////////////////////////////////////////////////////////////////////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//////////////////////////////////////////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//////////////////////////////////////////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/////////////////////////////////////////////////////////////////////////////////////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//////////////////////////////////////////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//////////////////////////////////////////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP////////////////////////////////////////////////////////////////////////////////////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP//////////////////////////////////////////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP//////////////////////////////////////////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/////////////////////////////////////////////////////////////////////////////////////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//////////////////////////////////////////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//////////////////////////////////////////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/////////////////////////////////////////////////////////////////////////////////////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//////////////////////////////////////////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//////////////////////////////////////////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP////////////////////////////////////////////////////////////////////////////////////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP//////////////////////////////////////////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP//////////////////////////////////////////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/////////////////////////////////////////////////////////////////////////////////////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//////////////////////////////////////////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//////////////////////////////////////////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/////////////////////////////////////////////////////////////////////////////////////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//////////////////////////////////////////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//////////////////////////////////////////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP////////////////////////////////////////////////////////////////////////////////////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP//////////////////////////////////////////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP//////////////////////////////////////////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/////////////////////////////////////////////////////////////////////////////////////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//////////////////////////////////////////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//////////////////////////////////////////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/////////////////////////////////////////////////////////////////////////////////////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//////////////////////////////////////////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//////////////////////////////////////////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP////////////////////////////////////////////////////////////////////////////////////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP//////////////////////////////////////////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA="
    }
   },
   {
    "name": "Loki",
    "color": "calico",
    "row": 2,
    "column": 3,
    "text": "Hobbes and Kiwi are opposites: one is honest, the other is a liar.",
    "hidden": false,
    "secret": null,
    "mentions": [
     7,
     10
    ],
    "clue": {
     "cats": [
      7,
      10,
      11
     ],
     "table": "lg=="
    }
   },
   {
    "name": "Mochi",
    "color": "tabby",
    "row": 3,
    "column": 0,
    "text": "At least one of these is true: Bagel is a liar, or all of the ginger cats are liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     1,
     4,
     6,
     13,
     14
    ],
    "clue": {
     "cats": [
      1,
      4,
      6,
      12,
      13,
      14
     ],
     "table": "qlWqVapV6hU="
    }
   },
   {
    "name": "Olive",
    "color": "ginger",
    "row": 3,
    "column": 1,
    "text": "At least one of these is true: Bagel is a liar, or Coco is honest. Mew.",
    "hidden": false,
    "secret": null,
    "mentions": [
     1,
     2
    ],
    "clue": {
     "cats": [
      1,
      2,
      13
     ],
     "table": "Sw=="
    }
   },
   {
    "name": "Pickles",
    "color": "ginger",
    "row": 3,
    "column": 2,
    "text": "Ember and I are both liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     4
    ],
    "clue": {
     "cats": [
      4,
      14
     ],
     "table": "BA=="
    }
   },
   {
    "name": "Quincy",
    "color": "black",
    "row": 3,
    "column": 3,
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
     8,
     9,
     10,
     11,
     12,
     13,
     14
    ],
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
     "table": "/v///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIA="
    }
   }
  ],
  "liars": [
   true,
   true,
   false,
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
   true,
   false
  ]
 },
 {
  "rows": 4,
  "cols": 4,
  "seed": 60012,
  "level": "hard",
  "given": null,
  "cats": [
   {
    "name": "Apricot",
    "color": "ginger",
    "row": 0,
    "column": 0,
    "text": "At least one of these is true: Hobbes is honest, or all of the cats in my column are honest.",
    "hidden": false,
    "secret": null,
    "mentions": [
     4,
     5,
     8,
     12
    ],
    "clue": {
     "cats": [
      0,
      4,
      5,
      8,
      12
     ],
     "table": "taWlpQ=="
    }
   },
   {
    "name": "Biscuit",
    "color": "calico",
    "row": 0,
    "column": 1,
    "text": "I smell a rat. At least one of the cats in my row is a liar.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     2,
     3
    ],
    "clue": {
     "cats": [
      0,
      1,
      2,
      3
     ],
     "table": "MjM="
    }
   },
   {
    "name": "Coco",
    "color": "white",
    "row": 0,
    "column": 2,
    "text": "At least one of these is true: I'm a liar, or Paprika is honest.",
    "hidden": false,
    "secret": null,
    "mentions": [
     12
    ],
    "clue": {
     "cats": [
      2,
      12
     ],
     "table": "AQ=="
    }
   },
   {
    "name": "Doodle",
    "color": "siamese",
    "row": 0,
    "column": 3,
    "text": "Nyaa... mrrp. Mew.",
    "hidden": true,
    "secret": "Jasper is the only liar among my neighbors.",
    "mentions": [],
    "clue": null
   },
   {
    "name": "Goose",
    "color": "tuxedo",
    "row": 1,
    "column": 0,
    "text": "Paprika is honest, fur real.",
    "hidden": false,
    "secret": null,
    "mentions": [
     12
    ],
    "clue": {
     "cats": [
      4,
      12
     ],
     "table": "CQ=="
    }
   },
   {
    "name": "Hobbes",
    "color": "tuxedo",
    "row": 1,
    "column": 1,
    "text": "Biscuit is the only honest cat among the cats in my column.",
    "hidden": false,
    "secret": null,
    "mentions": [
     1,
     9,
     13
    ],
    "clue": {
     "cats": [
      1,
      5,
      9,
      13
     ],
     "table": "zIw="
    }
   },
   {
    "name": "Iggy",
    "color": "siamese",
    "row": 1,
    "column": 2,
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
     "table": "/v////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAAD//////////wAAAAAAAAAA//////////8AAAAAAAAAAP//////////AAAAAAAAAIA="
    }
   },
   {
    "name": "Jasper",
    "color": "ginger",
    "row": 1,
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
    "clue": {
     "cats": [
      0,
      3,
      7,
      12,
      15
     ],
     "table": "4fDweA=="
    }
   },
   {
    "name": "Kismet",
    "color": "ginger",
    "row": 2,
    "column": 0,
    "text": "Among my neighbors, at least one is honest and at least one is a liar. Mrow.",
    "hidden": false,
    "secret": null,
    "mentions": [
     4,
     9,
     12
    ],
    "clue": {
     "cats": [
      4,
      8,
      9,
      12
     ],
     "table": "NpM="
    }
   },
   {
    "name": "Lentil",
    "color": "siamese",
    "row": 2,
    "column": 1,
    "text": "Hobbes and Sprout are opposites: one is honest, the other is a liar.",
    "hidden": false,
    "secret": null,
    "mentions": [
     5,
     14
    ],
    "clue": {
     "cats": [
      5,
      9,
      14
     ],
     "table": "lg=="
    }
   },
   {
    "name": "Mango",
    "color": "calico",
    "row": 2,
    "column": 2,
    "text": "Among the corner cats, at least one is honest and at least one is a liar.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     3,
     12,
     15
    ],
    "clue": {
     "cats": [
      0,
      3,
      10,
      12,
      15
     ],
     "table": "Hg8Phw=="
    }
   },
   {
    "name": "Nimbus",
    "color": "tuxedo",
    "row": 2,
    "column": 3,
    "text": "Hobbes is the only liar among the cats in the middle. Mew.",
    "hidden": false,
    "secret": null,
    "mentions": [
     5,
     6,
     9,
     10
    ],
    "clue": {
     "cats": [
      5,
      6,
      9,
      10,
      11
     ],
     "table": "AgD9/w=="
    }
   },
   {
    "name": "Paprika",
    "color": "white",
    "row": 3,
    "column": 0,
    "text": "Doodle said: \"Jasper is the only liar among my neighbors.\"",
    "hidden": false,
    "secret": null,
    "mentions": [
     2,
     3,
     7
    ],
    "clue": {
     "cats": [
      2,
      3,
      7,
      12
     ],
     "table": "nP8="
    }
   },
   {
    "name": "Queenie",
    "color": "white",
    "row": 3,
    "column": 1,
    "text": "Iggy and Jasper are both liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     6,
     7
    ],
    "clue": {
     "cats": [
      6,
      7,
      13
     ],
     "table": "eA=="
    }
   },
   {
    "name": "Sprout",
    "color": "siamese",
    "row": 3,
    "column": 2,
    "text": "Mrow. Among the cats in row 1, at least one is honest and at least one is a liar.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     1,
     2,
     3
    ],
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
    "name": "Tater",
    "color": "tuxedo",
    "row": 3,
    "column": 3,
    "text": "At least one of Iggy and Queenie is honest.",
    "hidden": false,
    "secret": null,
    "mentions": [
     6,
     13
    ],
    "clue": {
     "cats": [
      6,
      13,
      15
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
   false,
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
   false
  ]
 },
 {
  "rows": 4,
  "cols": 4,
  "seed": 70003,
  "level": "hard",
  "given": null,
  "cats": [
   {
    "name": "Coco",
    "color": "tuxedo",
    "row": 0,
    "column": 0,
    "text": "Gnocchi and Ravioli are both liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     3,
     10
    ],
    "clue": {
     "cats": [
      0,
      3,
      10
     ],
     "table": "ag=="
    }
   },
   {
    "name": "Dusty",
    "color": "white",
    "row": 0,
    "column": 1,
    "text": "At least one of Fudge and Quill is a liar.",
    "hidden": false,
    "secret": null,
    "mentions": [
     2,
     9
    ],
    "clue": {
     "cats": [
      1,
      2,
      9
     ],
     "table": "Vg=="
    }
   },
   {
    "name": "Fudge",
    "color": "white",
    "row": 0,
    "column": 2,
    "text": "Exactly 3 of the white cats are liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     1,
     9,
     13
    ],
    "clue": {
     "cats": [
      1,
      2,
      9,
      13
     ],
     "table": "TKQ="
    }
   },
   {
    "name": "Gnocchi",
    "color": "grey",
    "row": 0,
    "column": 3,
    "text": "At least one of these is true: Fudge is honest, or all of the cats in row 3 are honest.",
    "hidden": false,
    "secret": null,
    "mentions": [
     2,
     8,
     9,
     10,
     11
    ],
    "clue": {
     "cats": [
      2,
      3,
      8,
      9,
      10,
      11
     ],
     "table": "k5mZmZmZmZk="
    }
   },
   {
    "name": "Honey",
    "color": "black",
    "row": 1,
    "column": 0,
    "text": "Nyaa... mrrp. Mew.",
    "hidden": true,
    "secret": "At least one of the grey cats is a liar.",
    "mentions": [],
    "clue": null
   },
   {
    "name": "Jasper",
    "color": "siamese",
    "row": 1,
    "column": 1,
    "text": "All of the cats in column 1 are honest. Mrrp!",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     4,
     8,
     12
    ],
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
    "name": "Lentil",
    "color": "black",
    "row": 1,
    "column": 2,
    "text": "At least one of these is true: Honey is a liar, or all of the cats in column 1 are honest.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     4,
     8,
     12
    ],
    "clue": {
     "cats": [
      0,
      4,
      6,
      8,
      12
     ],
     "table": "LTw8PA=="
    }
   },
   {
    "name": "Noodle",
    "color": "grey",
    "row": 1,
    "column": 3,
    "text": "At least one of the corner cats is a liar.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     3,
     12,
     15
    ],
    "clue": {
     "cats": [
      0,
      3,
      7,
      12,
      15
     ],
     "table": "Hg8PDw=="
    }
   },
   {
    "name": "Paprika",
    "color": "black",
    "row": 2,
    "column": 0,
    "text": "At least one of these is true: I'm a liar, or Zucchini is honest.",
    "hidden": false,
    "secret": null,
    "mentions": [
     15
    ],
    "clue": {
     "cats": [
      8,
      15
     ],
     "table": "AQ=="
    }
   },
   {
    "name": "Quill",
    "color": "white",
    "row": 2,
    "column": 1,
    "text": "Ursa is the only honest cat among Dusty, Ursa and me.",
    "hidden": false,
    "secret": null,
    "mentions": [
     1,
     13
    ],
    "clue": {
     "cats": [
      1,
      9,
      13
     ],
     "table": "xA=="
    }
   },
   {
    "name": "Ravioli",
    "color": "siamese",
    "row": 2,
    "column": 2,
    "text": "All of the cats above me are liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     2,
     6
    ],
    "clue": {
     "cats": [
      2,
      6,
      10
     ],
     "table": "eA=="
    }
   },
   {
    "name": "Saffron",
    "color": "tuxedo",
    "row": 2,
    "column": 3,
    "text": "Honey said: \"Dusty and Saffron are both liars.\"",
    "hidden": false,
    "secret": null,
    "mentions": [
     1,
     4
    ],
    "clue": {
     "cats": [
      1,
      4,
      11
     ],
     "table": "/A=="
    }
   },
   {
    "name": "Tofu",
    "color": "siamese",
    "row": 3,
    "column": 0,
    "text": "At least one of these is true: Coco is honest, or all of Dusty, Gnocchi and me are liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     1,
     3
    ],
    "clue": {
     "cats": [
      0,
      1,
      3,
      12
     ],
     "table": "VSo="
    }
   },
   {
    "name": "Ursa",
    "color": "white",
    "row": 3,
    "column": 1,
    "text": "I smell a rat. At least one of the cats in my column is a liar.",
    "hidden": false,
    "secret": null,
    "mentions": [
     1,
     5,
     9
    ],
    "clue": {
     "cats": [
      1,
      5,
      9,
      13
     ],
     "table": "/gA="
    }
   },
   {
    "name": "Yoshi",
    "color": "grey",
    "row": 3,
    "column": 2,
    "text": "At least one of these is true: Jasper is a liar, or all of the cats to my left are honest.",
    "hidden": false,
    "secret": null,
    "mentions": [
     5,
     12,
     13
    ],
    "clue": {
     "cats": [
      5,
      12,
      13,
      14
     ],
     "table": "q1Q="
    }
   },
   {
    "name": "Zucchini",
    "color": "siamese",
    "row": 3,
    "column": 3,
    "text": "Jasper is honest, but Fudge is a liar.",
    "hidden": false,
    "secret": null,
    "mentions": [
     2,
     5
    ],
    "clue": {
     "cats": [
      2,
      5,
      15
     ],
     "table": "0g=="
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
   false,
   true,
   true,
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
  "seed": 30005,
  "level": "tricky",
  "given": null,
  "cats": [
   {
    "name": "Bean",
    "color": "calico",
    "row": 0,
    "column": 0,
    "text": "*chirps at a bird outside*",
    "hidden": true,
    "secret": "All of my neighbors are honest.",
    "mentions": [],
    "clue": null
   },
   {
    "name": "Doodle",
    "color": "white",
    "row": 0,
    "column": 1,
    "text": "Meow. At least one of these is true: Echo is honest, or all of the cats in my column are liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     2,
     5,
     9,
     13
    ],
    "clue": {
     "cats": [
      1,
      2,
      5,
      9,
      13
     ],
     "table": "mZmZGQ=="
    }
   },
   {
    "name": "Echo",
    "color": "grey",
    "row": 0,
    "column": 2,
    "text": "Meow. I smell a rat. At least one of the cats to my left is a liar.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     1
    ],
    "clue": {
     "cats": [
      0,
      1,
      2
     ],
     "table": "Hg=="
    }
   },
   {
    "name": "Fig",
    "color": "black",
    "row": 0,
    "column": 3,
    "text": "Mew. At least one of these is true: Bean is a liar, or all the cats are honest.",
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
     "table": "q1WqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlU="
    }
   },
   {
    "name": "Gnocchi",
    "color": "grey",
    "row": 1,
    "column": 0,
    "text": "All of the cats in my column are liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     8,
     12
    ],
    "clue": {
     "cats": [
      0,
      4,
      8,
      12
     ],
     "table": "zEw="
    }
   },
   {
    "name": "Honey",
    "color": "calico",
    "row": 1,
    "column": 1,
    "text": "Marble and Pickles are both honest. Prrrt!",
    "hidden": false,
    "secret": null,
    "mentions": [
     10,
     12
    ],
    "clue": {
     "cats": [
      5,
      10,
      12
     ],
     "table": "qQ=="
    }
   },
   {
    "name": "Inky",
    "color": "white",
    "row": 1,
    "column": 2,
    "text": "Exactly 3 of the cats in my column are liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     2,
     10,
     14
    ],
    "clue": {
     "cats": [
      2,
      6,
      10,
      14
     ],
     "table": "TKQ="
    }
   },
   {
    "name": "Jellybean",
    "color": "white",
    "row": 1,
    "column": 3,
    "text": "Pickles and Sushi are both honest.",
    "hidden": false,
    "secret": null,
    "mentions": [
     12,
     14
    ],
    "clue": {
     "cats": [
      7,
      12,
      14
     ],
     "table": "qQ=="
    }
   },
   {
    "name": "Kettle",
    "color": "ginger",
    "row": 2,
    "column": 0,
    "text": "All of the cats in the middle are liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     5,
     6,
     9,
     10
    ],
    "clue": {
     "cats": [
      5,
      6,
      8,
      9,
      10
     ],
     "table": "8PDweA=="
    }
   },
   {
    "name": "Loki",
    "color": "ginger",
    "row": 2,
    "column": 1,
    "text": "Fig is the only honest cat among the black cats. Mrow.",
    "hidden": false,
    "secret": null,
    "mentions": [
     3,
     13
    ],
    "clue": {
     "cats": [
      3,
      9,
      13
     ],
     "table": "nA=="
    }
   },
   {
    "name": "Marble",
    "color": "grey",
    "row": 2,
    "column": 2,
    "text": "Bean told me: \"All of my neighbors are honest.\"",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     1,
     4
    ],
    "clue": {
     "cats": [
      0,
      1,
      4,
      10
     ],
     "table": "qf8="
    }
   },
   {
    "name": "Noodle",
    "color": "grey",
    "row": 2,
    "column": 3,
    "text": "All of Fig, Honey and me are the same: all honest, or all liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     3,
     5
    ],
    "clue": {
     "cats": [
      3,
      5,
      11
     ],
     "table": "cQ=="
    }
   },
   {
    "name": "Pickles",
    "color": "white",
    "row": 3,
    "column": 0,
    "text": "Jellybean and Sushi are both honest.",
    "hidden": false,
    "secret": null,
    "mentions": [
     7,
     14
    ],
    "clue": {
     "cats": [
      7,
      12,
      14
     ],
     "table": "yQ=="
    }
   },
   {
    "name": "Ravioli",
    "color": "black",
    "row": 3,
    "column": 1,
    "text": "Exactly 2 of Doodle, Noodle and me are liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     1,
     11
    ],
    "clue": {
     "cats": [
      1,
      11,
      13
     ],
     "table": "mA=="
    }
   },
   {
    "name": "Sushi",
    "color": "ginger",
    "row": 3,
    "column": 2,
    "text": "Exactly one of the cats above me is a liar. Mrow.",
    "hidden": false,
    "secret": null,
    "mentions": [
     2,
     6,
     10
    ],
    "clue": {
     "cats": [
      2,
      6,
      10,
      14
     ],
     "table": "Fuk="
    }
   },
   {
    "name": "Tofu",
    "color": "calico",
    "row": 3,
    "column": 3,
    "text": "Among the cats in column 2, at least one is honest and at least one is a liar. Mew.",
    "hidden": false,
    "secret": null,
    "mentions": [
     1,
     5,
     9,
     13
    ],
    "clue": {
     "cats": [
      1,
      5,
      9,
      13,
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
   false,
   true,
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
   false
  ]
 },
 {
  "rows": 4,
  "cols": 4,
  "seed": 30010,
  "level": "tricky",
  "given": null,
  "cats": [
   {
    "name": "Angus",
    "color": "tuxedo",
    "row": 0,
    "column": 0,
    "text": "Juniper said: \"At least one of Fig and Lentil is honest.\"",
    "hidden": false,
    "secret": null,
    "mentions": [
     5,
     9,
     11
    ],
    "clue": {
     "cats": [
      0,
      5,
      9,
      11
     ],
     "table": "r+s="
    }
   },
   {
    "name": "Biscuit",
    "color": "tabby",
    "row": 0,
    "column": 1,
    "text": "Clover and Fig are opposites: one is honest, the other is a liar.",
    "hidden": false,
    "secret": null,
    "mentions": [
     2,
     5
    ],
    "clue": {
     "cats": [
      1,
      2,
      5
     ],
     "table": "lg=="
    }
   },
   {
    "name": "Clover",
    "color": "tabby",
    "row": 0,
    "column": 2,
    "text": "At least one of these is true: Paprika is a liar, or all of the cats in my row are honest.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     1,
     3,
     15
    ],
    "clue": {
     "cats": [
      0,
      1,
      2,
      3,
      15
     ],
     "table": "8fAPDw=="
    }
   },
   {
    "name": "Dusty",
    "color": "ginger",
    "row": 0,
    "column": 3,
    "text": "I'm the only honest cat among the ginger cats.",
    "hidden": false,
    "secret": null,
    "mentions": [
     5,
     9
    ],
    "clue": {
     "cats": [
      3,
      5,
      9
     ],
     "table": "6g=="
    }
   },
   {
    "name": "Ember",
    "color": "tuxedo",
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
    "color": "ginger",
    "row": 1,
    "column": 1,
    "text": "Prrrt! All of the grey cats are honest.",
    "hidden": false,
    "secret": null,
    "mentions": [
     11,
     14
    ],
    "clue": {
     "cats": [
      5,
      11,
      14
     ],
     "table": "qQ=="
    }
   },
   {
    "name": "Gnocchi",
    "color": "siamese",
    "row": 1,
    "column": 2,
    "text": "At least 2 of the cats in row 1 are liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     1,
     2,
     3
    ],
    "clue": {
     "cats": [
      0,
      1,
      2,
      3,
      6
     ],
     "table": "6P4XAQ=="
    }
   },
   {
    "name": "Honey",
    "color": "siamese",
    "row": 1,
    "column": 3,
    "text": "At least one of these is true: Olive is a liar, or all of the cats in column 3 are honest.",
    "hidden": false,
    "secret": null,
    "mentions": [
     2,
     6,
     10,
     14
    ],
    "clue": {
     "cats": [
      2,
      6,
      7,
      10,
      14
     ],
     "table": "4fAPDw=="
    }
   },
   {
    "name": "Iggy",
    "color": "siamese",
    "row": 2,
    "column": 0,
    "text": "*incomprehensible meowing*",
    "hidden": true,
    "secret": "Exactly 2 of the corner cats are liars.",
    "mentions": [],
    "clue": null
   },
   {
    "name": "Juniper",
    "color": "ginger",
    "row": 2,
    "column": 1,
    "text": "Mrrp? Mew mew mrrrow!",
    "hidden": true,
    "secret": "At least one of Fig and Lentil is honest.",
    "mentions": [],
    "clue": null
   },
   {
    "name": "Kiwi",
    "color": "tabby",
    "row": 2,
    "column": 2,
    "text": "Paprika is the only honest cat among the tabby cats. Mew.",
    "hidden": false,
    "secret": null,
    "mentions": [
     1,
     2,
     15
    ],
    "clue": {
     "cats": [
      1,
      2,
      10,
      15
     ],
     "table": "cPA="
    }
   },
   {
    "name": "Lentil",
    "color": "grey",
    "row": 2,
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
    "clue": {
     "cats": [
      2,
      6,
      10,
      11,
      14
     ],
     "table": "/gF/gA=="
    }
   },
   {
    "name": "Mochi",
    "color": "white",
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
    "name": "Nimbus",
    "color": "white",
    "row": 3,
    "column": 1,
    "text": "Gnocchi is the only honest cat among the siamese cats.",
    "hidden": false,
    "secret": null,
    "mentions": [
     6,
     7,
     8
    ],
    "clue": {
     "cats": [
      6,
      7,
      8,
      13
     ],
     "table": "QL8="
    }
   },
   {
    "name": "Olive",
    "color": "grey",
    "row": 3,
    "column": 2,
    "text": "At least one of these is true: Honey is honest, or all of the cats in column 2 are honest. Mrow.",
    "hidden": false,
    "secret": null,
    "mentions": [
     1,
     5,
     7,
     9,
     13
    ],
    "clue": {
     "cats": [
      1,
      5,
      7,
      9,
      13,
      14
     ],
     "table": "Hw8PD+Dw8PA="
    }
   },
   {
    "name": "Paprika",
    "color": "tabby",
    "row": 3,
    "column": 3,
    "text": "Iggy said: \"Exactly 2 of the corner cats are liars.\" Mew.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     3,
     8,
     12
    ],
    "clue": {
     "cats": [
      0,
      3,
      8,
      12,
      15
     ],
     "table": "eJb//w=="
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
   true,
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
  "seed": 30011,
  "level": "tricky",
  "given": null,
  "cats": [
   {
    "name": "Ash",
    "color": "tabby",
    "row": 0,
    "column": 0,
    "text": "I'm the only honest cat among Marble, Nimbus and me.",
    "hidden": false,
    "secret": null,
    "mentions": [
     9,
     10
    ],
    "clue": {
     "cats": [
      0,
      9,
      10
     ],
     "table": "6g=="
    }
   },
   {
    "name": "Bean",
    "color": "ginger",
    "row": 0,
    "column": 1,
    "text": "Nimbus said: \"At least one of these is true: Kiwi is a liar, or all of the cats in my column are honest.\"",
    "hidden": false,
    "secret": null,
    "mentions": [
     2,
     6,
     7,
     10,
     14
    ],
    "clue": {
     "cats": [
      1,
      2,
      6,
      7,
      10,
      14
     ],
     "table": "q///qqr//6o="
    }
   },
   {
    "name": "Dusty",
    "color": "grey",
    "row": 0,
    "column": 2,
    "text": "At least one of Bean and Kiwi is a liar. Mrow.",
    "hidden": false,
    "secret": null,
    "mentions": [
     1,
     7
    ],
    "clue": {
     "cats": [
      1,
      2,
      7
     ],
     "table": "Ng=="
    }
   },
   {
    "name": "Espresso",
    "color": "ginger",
    "row": 0,
    "column": 3,
    "text": "Nimbus is a liar.",
    "hidden": false,
    "secret": null,
    "mentions": [
     10
    ],
    "clue": {
     "cats": [
      3,
      10
     ],
     "table": "Bg=="
    }
   },
   {
    "name": "Fig",
    "color": "white",
    "row": 1,
    "column": 0,
    "text": "Exactly 2 of the cats on the edges are liars.",
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
     "table": "aBbp/hYB/v8WAf7/AQD//xYB/v8BAP//AQD//wAA//8WAf7/AQD//wEA//8AAP//AQD//wAA//8AAP//AAD//xYB/v8BAP//AQD//wAA//8BAP//AAD//wAA//8AAP//AQD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8WAf7/AQD//wEA//8AAP//AQD//wAA//8AAP//AAD//wEA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AQD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//xYB/v8BAP//AQD//wAA//8BAP//AAD//wAA//8AAP//AQD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8BAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AQD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8="
    }
   },
   {
    "name": "Hobbes",
    "color": "white",
    "row": 1,
    "column": 1,
    "text": "Saffron is honest, but Jasper is a liar.",
    "hidden": false,
    "secret": null,
    "mentions": [
     6,
     14
    ],
    "clue": {
     "cats": [
      5,
      6,
      14
     ],
     "table": "pg=="
    }
   },
   {
    "name": "Jasper",
    "color": "tabby",
    "row": 1,
    "column": 2,
    "text": "Dusty and Saffron are both honest, or both liars. Meow.",
    "hidden": false,
    "secret": null,
    "mentions": [
     2,
     14
    ],
    "clue": {
     "cats": [
      2,
      6,
      14
     ],
     "table": "aQ=="
    }
   },
   {
    "name": "Kiwi",
    "color": "tuxedo",
    "row": 1,
    "column": 3,
    "text": "At least one of Marble and Saffron is honest.",
    "hidden": false,
    "secret": null,
    "mentions": [
     9,
     14
    ],
    "clue": {
     "cats": [
      7,
      9,
      14
     ],
     "table": "lQ=="
    }
   },
   {
    "name": "Lentil",
    "color": "grey",
    "row": 2,
    "column": 0,
    "text": "Fig and I are both liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     4
    ],
    "clue": {
     "cats": [
      4,
      8
     ],
     "table": "BA=="
    }
   },
   {
    "name": "Marble",
    "color": "ginger",
    "row": 2,
    "column": 1,
    "text": "Mew. Ursa is the only liar among the cats in row 4.",
    "hidden": false,
    "secret": null,
    "mentions": [
     12,
     13,
     14,
     15
    ],
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
    "name": "Nimbus",
    "color": "ginger",
    "row": 2,
    "column": 2,
    "text": "Mrrrow mrrp mew.",
    "hidden": true,
    "secret": "At least one of these is true: Kiwi is a liar, or all of the cats in my column are honest.",
    "mentions": [],
    "clue": null
   },
   {
    "name": "Oreo",
    "color": "tuxedo",
    "row": 2,
    "column": 3,
    "text": "*chirps at a bird outside*",
    "hidden": true,
    "secret": "Exactly one of Bean, Nimbus and me is a liar.",
    "mentions": [],
    "clue": null
   },
   {
    "name": "Paprika",
    "color": "white",
    "row": 3,
    "column": 0,
    "text": "At least one of these is true: I'm a liar, or Espresso is honest.",
    "hidden": false,
    "secret": null,
    "mentions": [
     3
    ],
    "clue": {
     "cats": [
      3,
      12
     ],
     "table": "AQ=="
    }
   },
   {
    "name": "Rusty",
    "color": "grey",
    "row": 3,
    "column": 1,
    "text": "Oreo said: \"Exactly one of Bean, Nimbus and me is a liar.\"",
    "hidden": false,
    "secret": null,
    "mentions": [
     1,
     10,
     11
    ],
    "clue": {
     "cats": [
      1,
      10,
      11,
      13
     ],
     "table": "5v8="
    }
   },
   {
    "name": "Saffron",
    "color": "tabby",
    "row": 3,
    "column": 2,
    "text": "At least one of these is true: Fig is honest, or all of the cats in the middle are liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     4,
     5,
     6,
     9,
     10
    ],
    "clue": {
     "cats": [
      4,
      5,
      6,
      9,
      10,
      14
     ],
     "table": "VVVV1aqqqio="
    }
   },
   {
    "name": "Ursa",
    "color": "white",
    "row": 3,
    "column": 3,
    "text": "All of my neighbors are the same: all honest, or all liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     11,
     14
    ],
    "clue": {
     "cats": [
      11,
      14,
      15
     ],
     "table": "aQ=="
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
   true,
   false,
   true,
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
  "seed": 30015,
  "level": "tricky",
  "given": null,
  "cats": [
   {
    "name": "Ash",
    "color": "black",
    "row": 0,
    "column": 0,
    "text": "Meow. At least one of Dusty and Felix is a liar.",
    "hidden": false,
    "secret": null,
    "mentions": [
     2,
     4
    ],
    "clue": {
     "cats": [
      0,
      2,
      4
     ],
     "table": "Vg=="
    }
   },
   {
    "name": "Coco",
    "color": "tabby",
    "row": 0,
    "column": 1,
    "text": "Ash is the only honest cat among my neighbors.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     2,
     5
    ],
    "clue": {
     "cats": [
      0,
      1,
      2,
      5
     ],
     "table": "zJw="
    }
   },
   {
    "name": "Dusty",
    "color": "grey",
    "row": 0,
    "column": 2,
    "text": "Mew. Among my neighbors, at least one is honest and at least one is a liar.",
    "hidden": false,
    "secret": null,
    "mentions": [
     1,
     3,
     6
    ],
    "clue": {
     "cats": [
      1,
      2,
      3,
      6
     ],
     "table": "NpM="
    }
   },
   {
    "name": "Espresso",
    "color": "black",
    "row": 0,
    "column": 3,
    "text": "Nugget is the only liar among the cats in column 1. Mrow.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     4,
     8,
     12
    ],
    "clue": {
     "cats": [
      0,
      3,
      4,
      8,
      12
     ],
     "table": "zMzJzA=="
    }
   },
   {
    "name": "Felix",
    "color": "tuxedo",
    "row": 1,
    "column": 0,
    "text": "I'm the only honest cat among Ash, Kismet and me.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     9
    ],
    "clue": {
     "cats": [
      0,
      4,
      9
     ],
     "table": "7A=="
    }
   },
   {
    "name": "Gizmo",
    "color": "calico",
    "row": 1,
    "column": 1,
    "text": "At least one of these is true: Hazel is a liar, or all of the cats in row 4 are liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     6,
     12,
     13,
     14,
     15
    ],
    "clue": {
     "cats": [
      5,
      6,
      12,
      13,
      14,
      15
     ],
     "table": "ZmZmZmZmZlY="
    }
   },
   {
    "name": "Hazel",
    "color": "grey",
    "row": 1,
    "column": 2,
    "text": "Gizmo is the only liar among the cats to my left.",
    "hidden": false,
    "secret": null,
    "mentions": [
     4,
     5
    ],
    "clue": {
     "cats": [
      4,
      5,
      6
     ],
     "table": "tA=="
    }
   },
   {
    "name": "Iggy",
    "color": "black",
    "row": 1,
    "column": 3,
    "text": "I'm the only honest cat among Coco, Espresso and me.",
    "hidden": false,
    "secret": null,
    "mentions": [
     1,
     3
    ],
    "clue": {
     "cats": [
      1,
      3,
      7
     ],
     "table": "+A=="
    }
   },
   {
    "name": "Jasper",
    "color": "black",
    "row": 2,
    "column": 0,
    "text": "Among Hazel, Kismet and me, at least one is honest and at least one is a liar. Mew.",
    "hidden": false,
    "secret": null,
    "mentions": [
     6,
     9
    ],
    "clue": {
     "cats": [
      6,
      8,
      9
     ],
     "table": "sg=="
    }
   },
   {
    "name": "Kismet",
    "color": "grey",
    "row": 2,
    "column": 1,
    "text": "At least one of Lentil and Udon is a liar.",
    "hidden": false,
    "secret": null,
    "mentions": [
     10,
     15
    ],
    "clue": {
     "cats": [
      9,
      10,
      15
     ],
     "table": "Vg=="
    }
   },
   {
    "name": "Lentil",
    "color": "tabby",
    "row": 2,
    "column": 2,
    "text": "Coco and Kismet are both liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     1,
     9
    ],
    "clue": {
     "cats": [
      1,
      9,
      10
     ],
     "table": "eA=="
    }
   },
   {
    "name": "Marble",
    "color": "grey",
    "row": 2,
    "column": 3,
    "text": "Exactly one of the tabby cats is a liar.",
    "hidden": false,
    "secret": null,
    "mentions": [
     1,
     10,
     12,
     14
    ],
    "clue": {
     "cats": [
      1,
      10,
      11,
      12,
      14
     ],
     "table": "luHh8A=="
    }
   },
   {
    "name": "Nugget",
    "color": "tabby",
    "row": 3,
    "column": 0,
    "text": "All of Iggy, Lentil and me are the same: all honest, or all liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     7,
     10
    ],
    "clue": {
     "cats": [
      7,
      10,
      12
     ],
     "table": "cQ=="
    }
   },
   {
    "name": "Olive",
    "color": "tuxedo",
    "row": 3,
    "column": 1,
    "text": "Mew. Kismet is the only liar among my neighbors.",
    "hidden": false,
    "secret": null,
    "mentions": [
     9,
     12,
     14
    ],
    "clue": {
     "cats": [
      9,
      12,
      13,
      14
     ],
     "table": "0vA="
    }
   },
   {
    "name": "Saffron",
    "color": "tabby",
    "row": 3,
    "column": 2,
    "text": "Kismet is the only liar among the grey cats.",
    "hidden": false,
    "secret": null,
    "mentions": [
     2,
     6,
     9,
     11
    ],
    "clue": {
     "cats": [
      2,
      6,
      9,
      11,
      14
     ],
     "table": "EADv/w=="
    }
   },
   {
    "name": "Udon",
    "color": "calico",
    "row": 3,
    "column": 3,
    "text": "Marble and I are both honest, or both liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     11
    ],
    "clue": {
     "cats": [
      11,
      15
     ],
     "table": "BQ=="
    }
   }
  ],
  "liars": [
   true,
   true,
   false,
   true,
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
    "color": "calico",
    "row": 0,
    "column": 0,
    "text": "Pickles is honest, fur real.",
    "hidden": false,
    "secret": null,
    "mentions": [
     15
    ],
    "clue": {
     "cats": [
      0,
      15
     ],
     "table": "CQ=="
    }
   },
   {
    "name": "Bagel",
    "color": "grey",
    "row": 0,
    "column": 1,
    "text": "All of the cats in the middle are the same: all honest, or all liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     5,
     6,
     9,
     10
    ],
    "clue": {
     "cats": [
      1,
      5,
      6,
      9,
      10
     ],
     "table": "qaqqag=="
    }
   },
   {
    "name": "Clover",
    "color": "grey",
    "row": 0,
    "column": 2,
    "text": "At least one of the cats in my column is a liar.",
    "hidden": false,
    "secret": null,
    "mentions": [
     6,
     10,
     14
    ],
    "clue": {
     "cats": [
      2,
      6,
      10,
      14
     ],
     "table": "VFU="
    }
   },
   {
    "name": "Dumpling",
    "color": "tuxedo",
    "row": 0,
    "column": 3,
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
     8,
     9,
     10,
     11,
     12,
     13,
     14,
     15
    ],
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
     "table": "/gD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/4A="
    }
   },
   {
    "name": "Espresso",
    "color": "grey",
    "row": 1,
    "column": 0,
    "text": "*incomprehensible meowing*",
    "hidden": true,
    "secret": "Pickles is the only honest cat among the tabby cats.",
    "mentions": [],
    "clue": null
   },
   {
    "name": "Felix",
    "color": "calico",
    "row": 1,
    "column": 1,
    "text": "All of the cats in column 4 are honest.",
    "hidden": false,
    "secret": null,
    "mentions": [
     3,
     7,
     11,
     15
    ],
    "clue": {
     "cats": [
      3,
      5,
      7,
      11,
      15
     ],
     "table": "yczMzA=="
    }
   },
   {
    "name": "Goose",
    "color": "calico",
    "row": 1,
    "column": 2,
    "text": "All of the cats below me are the same: all honest, or all liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     10,
     14
    ],
    "clue": {
     "cats": [
      6,
      10,
      14
     ],
     "table": "aQ=="
    }
   },
   {
    "name": "Hazel",
    "color": "tuxedo",
    "row": 1,
    "column": 3,
    "text": "Mrow. Goose is the only liar among my neighbors.",
    "hidden": false,
    "secret": null,
    "mentions": [
     3,
     6,
     11
    ],
    "clue": {
     "cats": [
      3,
      6,
      7,
      11
     ],
     "table": "tPA="
    }
   },
   {
    "name": "Iggy",
    "color": "black",
    "row": 2,
    "column": 0,
    "text": "Nimbus is the only liar among the black cats.",
    "hidden": false,
    "secret": null,
    "mentions": [
     11,
     13
    ],
    "clue": {
     "cats": [
      8,
      11,
      13
     ],
     "table": "ug=="
    }
   },
   {
    "name": "Jellybean",
    "color": "grey",
    "row": 2,
    "column": 1,
    "text": "At least one of Dumpling and Goose is a liar.",
    "hidden": false,
    "secret": null,
    "mentions": [
     3,
     6
    ],
    "clue": {
     "cats": [
      3,
      6,
      9
     ],
     "table": "Hg=="
    }
   },
   {
    "name": "Kettle",
    "color": "calico",
    "row": 2,
    "column": 2,
    "text": "Among the cats in my column, at least one is honest and at least one is a liar. Meow.",
    "hidden": false,
    "secret": null,
    "mentions": [
     2,
     6,
     14
    ],
    "clue": {
     "cats": [
      2,
      6,
      10,
      14
     ],
     "table": "Do8="
    }
   },
   {
    "name": "Lentil",
    "color": "black",
    "row": 2,
    "column": 3,
    "text": "At least one of the cats to my left is a liar.",
    "hidden": false,
    "secret": null,
    "mentions": [
     8,
     9,
     10
    ],
    "clue": {
     "cats": [
      8,
      9,
      10,
      11
     ],
     "table": "/gE="
    }
   },
   {
    "name": "Mango",
    "color": "tabby",
    "row": 3,
    "column": 0,
    "text": "At least one of these is true: Clover is a liar, or Goose is honest.",
    "hidden": false,
    "secret": null,
    "mentions": [
     2,
     6
    ],
    "clue": {
     "cats": [
      2,
      6,
      12
     ],
     "table": "Sw=="
    }
   },
   {
    "name": "Nimbus",
    "color": "black",
    "row": 3,
    "column": 1,
    "text": "All of the tuxedo cats are the same: all honest, or all liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     3,
     7
    ],
    "clue": {
     "cats": [
      3,
      7,
      13
     ],
     "table": "aQ=="
    }
   },
   {
    "name": "Olive",
    "color": "tabby",
    "row": 3,
    "column": 2,
    "text": "Mrow. At least 2 of the calico cats are liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     5,
     6,
     10
    ],
    "clue": {
     "cats": [
      0,
      5,
      6,
      10,
      14
     ],
     "table": "6P4XAQ=="
    }
   },
   {
    "name": "Pickles",
    "color": "tabby",
    "row": 3,
    "column": 3,
    "text": "Espresso told me: \"Pickles is the only honest cat among the tabby cats.\" Mrow.",
    "hidden": false,
    "secret": null,
    "mentions": [
     4,
     12,
     14
    ],
    "clue": {
     "cats": [
      4,
      12,
      14,
      15
     ],
     "table": "av8="
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
   true,
   false,
   false,
   false,
   true,
   false,
   true,
   false
  ]
 }
];
