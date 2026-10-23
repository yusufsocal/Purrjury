// Made by export.py, don't edit by hand
const PUZZLES = [
 {
  "rows": 3,
  "cols": 3,
  "seed": 100,
  "level": "easy",
  "given": 5,
  "cats": [
   {
    "name": "Ash",
    "color": "siamese",
    "row": 0,
    "column": 0,
    "text": "*purrs* Gizmo and Loki are both truth-tellers or both fibbers.",
    "hidden": false,
    "secret": null,
    "mentions": [
     5,
     8
    ],
    "clue": {
     "cats": [
      0,
      5,
      8
     ],
     "table": "aQ=="
    }
   },
   {
    "name": "Bagel",
    "color": "grey",
    "row": 0,
    "column": 1,
    "text": "*thinks hard* Either Ash is a liar, or all of the cats below me are honest, or both.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     4,
     7
    ],
    "clue": {
     "cats": [
      0,
      1,
      4,
      7
     ],
     "table": "Y2Y="
    }
   },
   {
    "name": "Cricket",
    "color": "grey",
    "row": 0,
    "column": 2,
    "text": "Everyone among the cats in column 2 is honest, except Espresso, who is a liar.",
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
      2,
      4,
      7
     ],
     "table": "nMw="
    }
   },
   {
    "name": "Dumpling",
    "color": "calico",
    "row": 1,
    "column": 0,
    "text": "*swishes tail* Among my neighbors, there's at least one liar and at least one honest cat.",
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
    "name": "Espresso",
    "color": "ginger",
    "row": 1,
    "column": 1,
    "text": "*points a paw at Jellybean* The only liar among Dumpling, Jellybean and me.",
    "hidden": false,
    "secret": null,
    "mentions": [
     3,
     7
    ],
    "clue": {
     "cats": [
      3,
      4,
      7
     ],
     "table": "3A=="
    }
   },
   {
    "name": "Gizmo",
    "color": "calico",
    "row": 1,
    "column": 2,
    "text": "All of the calico cats are liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     3
    ],
    "clue": {
     "cats": [
      3,
      5
     ],
     "table": "BA=="
    }
   },
   {
    "name": "Iggy",
    "color": "ginger",
    "row": 2,
    "column": 0,
    "text": "*flicks ears* Exactly 2 of the cats in row 2 are liars.",
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
      6
     ],
     "table": "aJc="
    }
   },
   {
    "name": "Jellybean",
    "color": "grey",
    "row": 2,
    "column": 1,
    "text": "Mrrp. One of Cricket and Loki is honest, maybe both.",
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
     "table": "kw=="
    }
   },
   {
    "name": "Loki",
    "color": "siamese",
    "row": 2,
    "column": 2,
    "text": "At least one of the calico cats is a liar.",
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
      8
     ],
     "table": "Hg=="
    }
   }
  ],
  "liars": [
   true,
   false,
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
  "seed": 104,
  "level": "easy",
  "given": 8,
  "cats": [
   {
    "name": "Apricot",
    "color": "tabby",
    "row": 0,
    "column": 0,
    "text": "Mrrp. Either Lentil is a liar, or all of my neighbors are honest. Maybe both.",
    "hidden": false,
    "secret": null,
    "mentions": [
     1,
     3,
     8
    ],
    "clue": {
     "cats": [
      0,
      1,
      3,
      8
     ],
     "table": "qVU="
    }
   },
   {
    "name": "Dusty",
    "color": "siamese",
    "row": 0,
    "column": 1,
    "text": "Mrrrow mrrp mew.",
    "hidden": true,
    "secret": "Meow. Among the cats on the edges, only Jellybean is honest.",
    "mentions": [],
    "clue": null
   },
   {
    "name": "Espresso",
    "color": "tuxedo",
    "row": 0,
    "column": 2,
    "text": "*thinks hard* Either Jellybean is a liar, or all of the cats on the edges are liars, or both.",
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
     "table": "8PDw8PDw8PAPDw8PDw8PD/Dw8PDw8PDwDw8PDw8PDw8="
    }
   },
   {
    "name": "Felix",
    "color": "tuxedo",
    "row": 1,
    "column": 0,
    "text": "All of the cats to my right are the same: all honest, or all liars.",
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
     "table": "aQ=="
    }
   },
   {
    "name": "Goose",
    "color": "siamese",
    "row": 1,
    "column": 1,
    "text": "I speak Dusty. Translated, they said: \"Meow. Among the cats on the edges, only Jellybean is honest.\"",
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
     "table": "zMz//8zM///MzP//zMz//8zM///MzP//zMz//8zM///MzP//zMz//8zM///MTP//zMz//8zM///MzP//zMz//w=="
    }
   },
   {
    "name": "Hazel",
    "color": "tuxedo",
    "row": 1,
    "column": 2,
    "text": "Mrrp. Either Apricot is honest, or all of the cats in my row are liars. Maybe both.",
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
     "table": "VSo="
    }
   },
   {
    "name": "Indigo",
    "color": "tuxedo",
    "row": 2,
    "column": 0,
    "text": "Mrrp. Whatever one of the cats in row 2 is, the rest are too.",
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
      6
     ],
     "table": "gX4="
    }
   },
   {
    "name": "Jellybean",
    "color": "tabby",
    "row": 2,
    "column": 1,
    "text": "Among the cats in row 2, there are both honest cats and liars.",
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
     "table": "foE="
    }
   },
   {
    "name": "Lentil",
    "color": "siamese",
    "row": 2,
    "column": 2,
    "text": "Everyone among the cats in my column is a liar, except Hazel, who is honest.",
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
     "table": "0A=="
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
   false,
   true,
   true
  ]
 },
 {
  "rows": 3,
  "cols": 3,
  "seed": 116,
  "level": "easy",
  "given": 2,
  "cats": [
   {
    "name": "Angus",
    "color": "siamese",
    "row": 0,
    "column": 0,
    "text": "Everyone among the cats in row 3 is a liar, except Hobbes, who is honest.",
    "hidden": false,
    "secret": null,
    "mentions": [
     6,
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
     "table": "qpo="
    }
   },
   {
    "name": "Bagel",
    "color": "white",
    "row": 0,
    "column": 1,
    "text": "Meow. All of the cats in row 2 are liars, every last one.",
    "hidden": false,
    "secret": null,
    "mentions": [
     3,
     4,
     5
    ],
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
    "name": "Doodle",
    "color": "tabby",
    "row": 0,
    "column": 2,
    "text": "Either I'm a liar, or Fudge is honest (or both).",
    "hidden": false,
    "secret": null,
    "mentions": [
     4
    ],
    "clue": {
     "cats": [
      2,
      4
     ],
     "table": "AQ=="
    }
   },
   {
    "name": "Espresso",
    "color": "white",
    "row": 1,
    "column": 0,
    "text": "Hiss. Among the cats in column 2 you'll find both: at least one liar and at least one honest cat.",
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
      3,
      4,
      7
     ],
     "table": "NpM="
    }
   },
   {
    "name": "Fudge",
    "color": "siamese",
    "row": 1,
    "column": 1,
    "text": "All of Espresso, Gnocchi and me are the same: all honest, or all liars.",
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
     "table": "TQ=="
    }
   },
   {
    "name": "Gnocchi",
    "color": "siamese",
    "row": 1,
    "column": 2,
    "text": "Mark my whiskers: either Angus is honest, or all of the cats on the edges are liars. Maybe both.",
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
     "table": "VVWqqlVVqqpVVaqqVVWqqlVVqqpVVaqqVVWqqlVVqio="
    }
   },
   {
    "name": "Hobbes",
    "color": "tabby",
    "row": 2,
    "column": 0,
    "text": "*thinks hard* Either Inky is a liar, or all of the cats in row 1 are honest, or both.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     1,
     2,
     7
    ],
    "clue": {
     "cats": [
      0,
      1,
      2,
      6,
      7
     ],
     "table": "Af7/AA=="
    }
   },
   {
    "name": "Inky",
    "color": "tabby",
    "row": 2,
    "column": 1,
    "text": "Mrrp. One of Kismet and me is honest, maybe both.",
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
     "table": "DQ=="
    }
   },
   {
    "name": "Kismet",
    "color": "siamese",
    "row": 2,
    "column": 2,
    "text": "Each and every one of the cats to my left is a liar. Meow.",
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
     "table": "eA=="
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
   false,
   true,
   true
  ]
 },
 {
  "rows": 3,
  "cols": 3,
  "seed": 123,
  "level": "easy",
  "given": 3,
  "cats": [
   {
    "name": "Biscuit",
    "color": "white",
    "row": 0,
    "column": 0,
    "text": "Nyaa... mrrp. Mew.",
    "hidden": true,
    "secret": "*sighs* I'm the only honest cat among the white cats. The rest are liars.",
    "mentions": [],
    "clue": null
   },
   {
    "name": "Coco",
    "color": "white",
    "row": 0,
    "column": 1,
    "text": "Mrrrow! At least 2 of the cats in my column are liars.",
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
     "table": "Qg=="
    }
   },
   {
    "name": "Fig",
    "color": "black",
    "row": 0,
    "column": 2,
    "text": "Either Paprika is honest, or all of the cats on the edges are liars (or both).",
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
     "table": "Dw8PDw8PDw/w8PDw8PDw8A8PDw8PDw8P8PDw8PDw8HA="
    }
   },
   {
    "name": "Indigo",
    "color": "grey",
    "row": 1,
    "column": 0,
    "text": "Meow. All of the grey cats are liars, every last one.",
    "hidden": false,
    "secret": null,
    "mentions": [
     6
    ],
    "clue": {
     "cats": [
      3,
      6
     ],
     "table": "Ag=="
    }
   },
   {
    "name": "Loki",
    "color": "black",
    "row": 1,
    "column": 1,
    "text": "Hiss. Among the corner cats you'll find both: at least one liar and at least one honest cat.",
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
     "table": "Hg8Phw=="
    }
   },
   {
    "name": "Mango",
    "color": "white",
    "row": 1,
    "column": 2,
    "text": "Mrrp. Among the cats to my left, only Indigo is a liar.",
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
    "name": "Noodle",
    "color": "grey",
    "row": 2,
    "column": 0,
    "text": "Biscuit is the only liar among the corner cats.",
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
     "table": "8vA="
    }
   },
   {
    "name": "Paprika",
    "color": "black",
    "row": 2,
    "column": 1,
    "text": "I speak Biscuit. Translated, they said: \"*sighs* I'm the only honest cat among the white cats. The rest are liars.\"",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     1,
     5,
     8
    ],
    "clue": {
     "cats": [
      0,
      1,
      5,
      7,
      8
     ],
     "table": "qv/q/w=="
    }
   },
   {
    "name": "Queenie",
    "color": "white",
    "row": 2,
    "column": 2,
    "text": "*sniffs around* All of the cats to my left are honest.",
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
     "table": "4Q=="
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
   false,
   false,
   false
  ]
 },
 {
  "rows": 3,
  "cols": 3,
  "seed": 130,
  "level": "easy",
  "given": 2,
  "cats": [
   {
    "name": "Ash",
    "color": "calico",
    "row": 0,
    "column": 0,
    "text": "*purrs* All of Jasper, Kettle and me are from the same litter: all honest, or all liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     7,
     8
    ],
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
    "name": "Bean",
    "color": "grey",
    "row": 0,
    "column": 1,
    "text": "Mrrp. Whatever one of Dusty, Gnocchi and me is, the rest are too.",
    "hidden": false,
    "secret": null,
    "mentions": [
     3,
     5
    ],
    "clue": {
     "cats": [
      1,
      3,
      5
     ],
     "table": "Kw=="
    }
   },
   {
    "name": "Coco",
    "color": "calico",
    "row": 0,
    "column": 2,
    "text": "All of the cats in my row are liars. Every whisker in the bunch is crooked.",
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
     "table": "cA=="
    }
   },
   {
    "name": "Dusty",
    "color": "black",
    "row": 1,
    "column": 0,
    "text": "Mark my whiskers: either Ash is honest, or all of the cats on the edges are honest. Maybe both.",
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
     "table": "VapVqlWqVapVqlWqVapVqlWqVapVqlWqVapVqlWqVao="
    }
   },
   {
    "name": "Espresso",
    "color": "black",
    "row": 1,
    "column": 1,
    "text": "Mrrp. Either Bean is a liar, or all of Bean, Jasper and me are liars. Maybe both.",
    "hidden": false,
    "secret": null,
    "mentions": [
     1,
     7
    ],
    "clue": {
     "cats": [
      1,
      4,
      7
     ],
     "table": "Zg=="
    }
   },
   {
    "name": "Gnocchi",
    "color": "grey",
    "row": 1,
    "column": 2,
    "text": "*purrs* All of the cats on the edges are from the same litter: all honest, or all liars.",
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
     "table": "AQD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA/38="
    }
   },
   {
    "name": "Indigo",
    "color": "black",
    "row": 2,
    "column": 0,
    "text": "Mrow. Exactly one of Bean, Espresso and me is a liar.",
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
     "table": "5g=="
    }
   },
   {
    "name": "Jasper",
    "color": "grey",
    "row": 2,
    "column": 1,
    "text": "Indigo is pawsitively honest.",
    "hidden": false,
    "secret": null,
    "mentions": [
     6
    ],
    "clue": {
     "cats": [
      6,
      7
     ],
     "table": "CQ=="
    }
   },
   {
    "name": "Kettle",
    "color": "black",
    "row": 2,
    "column": 2,
    "text": "Jasper is the only honest cat among my neighbors.",
    "hidden": false,
    "secret": null,
    "mentions": [
     5,
     7
    ],
    "clue": {
     "cats": [
      5,
      7,
      8
     ],
     "table": "0g=="
    }
   }
  ],
  "liars": [
   false,
   true,
   true,
   false,
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
  "seed": 107,
  "level": "medium",
  "given": null,
  "cats": [
   {
    "name": "Angus",
    "color": "black",
    "row": 0,
    "column": 0,
    "text": "Among the cats in column 2, there are both honest cats and liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     1,
     4,
     7
    ],
    "clue": {
     "cats": [
      0,
      1,
      4,
      7
     ],
     "table": "VpU="
    }
   },
   {
    "name": "Bean",
    "color": "tuxedo",
    "row": 0,
    "column": 1,
    "text": "I'm the only liar of all the cats.",
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
     "table": "yMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzA=="
    }
   },
   {
    "name": "Coco",
    "color": "black",
    "row": 0,
    "column": 2,
    "text": "Either Bean is a liar, or Gizmo is honest (or both).",
    "hidden": false,
    "secret": null,
    "mentions": [
     1,
     6
    ],
    "clue": {
     "cats": [
      1,
      2,
      6
     ],
     "table": "Yw=="
    }
   },
   {
    "name": "Doodle",
    "color": "white",
    "row": 1,
    "column": 0,
    "text": "Mrrp. Among the corner cats, only Gizmo is a liar.",
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
    "name": "Espresso",
    "color": "black",
    "row": 1,
    "column": 1,
    "text": "There's a mix among the cats in column 3: some honest, some liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     2,
     5,
     8
    ],
    "clue": {
     "cats": [
      2,
      4,
      5,
      8
     ],
     "table": "NpM="
    }
   },
   {
    "name": "Fig",
    "color": "tuxedo",
    "row": 1,
    "column": 2,
    "text": "Hiss. There's a liar among the cats in my column, maybe more.",
    "hidden": false,
    "secret": null,
    "mentions": [
     2,
     8
    ],
    "clue": {
     "cats": [
      2,
      5,
      8
     ],
     "table": "Mg=="
    }
   },
   {
    "name": "Gizmo",
    "color": "tuxedo",
    "row": 2,
    "column": 0,
    "text": "Mrow. Exactly one of the cats in row 1 is a liar.",
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
      6
     ],
     "table": "Fuk="
    }
   },
   {
    "name": "Iggy",
    "color": "black",
    "row": 2,
    "column": 1,
    "text": "*thinks hard* Either Espresso is honest, or all of the cats above me are honest, or both.",
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
     "table": "ww=="
    }
   },
   {
    "name": "Kettle",
    "color": "white",
    "row": 2,
    "column": 2,
    "text": "Iggy is the only liar among the cats to my left.",
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
     "table": "tA=="
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
   false,
   false,
   true
  ]
 },
 {
  "rows": 3,
  "cols": 3,
  "seed": 117,
  "level": "medium",
  "given": null,
  "cats": [
   {
    "name": "Ash",
    "color": "grey",
    "row": 0,
    "column": 0,
    "text": "Mrrp. Among the cats in row 3, only Jasper is a liar.",
    "hidden": false,
    "secret": null,
    "mentions": [
     6,
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
     "table": "pqo="
    }
   },
   {
    "name": "Clover",
    "color": "ginger",
    "row": 0,
    "column": 1,
    "text": "All of the cats below me are the same: all honest, or all liars.",
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
     "table": "aQ=="
    }
   },
   {
    "name": "Doodle",
    "color": "grey",
    "row": 0,
    "column": 2,
    "text": "There's a mix among the cats on the edges: some honest, some liars.",
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
     "table": "Dg8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PD48="
    }
   },
   {
    "name": "Ember",
    "color": "ginger",
    "row": 1,
    "column": 0,
    "text": "*swishes tail* Among the cats in row 3, there's at least one liar and at least one honest cat.",
    "hidden": false,
    "secret": null,
    "mentions": [
     6,
     7,
     8
    ],
    "clue": {
     "cats": [
      3,
      6,
      7,
      8
     ],
     "table": "VpU="
    }
   },
   {
    "name": "Gnocchi",
    "color": "grey",
    "row": 1,
    "column": 1,
    "text": "Everyone among the siamese cats is honest, except Marble, who is a liar.",
    "hidden": false,
    "secret": null,
    "mentions": [
     6,
     8
    ],
    "clue": {
     "cats": [
      4,
      6,
      8
     ],
     "table": "mg=="
    }
   },
   {
    "name": "Honey",
    "color": "ginger",
    "row": 1,
    "column": 2,
    "text": "*grins* I'm the only liar among the cats in my column. Everyone else is honest.",
    "hidden": false,
    "secret": null,
    "mentions": [
     2,
     8
    ],
    "clue": {
     "cats": [
      2,
      5,
      8
     ],
     "table": "yA=="
    }
   },
   {
    "name": "Jasper",
    "color": "siamese",
    "row": 2,
    "column": 0,
    "text": "Mark my whiskers: either Marble is a liar, or all of my neighbors are liars. Maybe both.",
    "hidden": false,
    "secret": null,
    "mentions": [
     3,
     7,
     8
    ],
    "clue": {
     "cats": [
      3,
      6,
      7,
      8
     ],
     "table": "bDM="
    }
   },
   {
    "name": "Lentil",
    "color": "ginger",
    "row": 2,
    "column": 1,
    "text": "All of the cats in my column are honest. Purrfectly so.",
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
     "table": "8Q=="
    }
   },
   {
    "name": "Marble",
    "color": "siamese",
    "row": 2,
    "column": 2,
    "text": "All of Honey, Lentil and me are liars. Every whisker in the bunch is crooked.",
    "hidden": false,
    "secret": null,
    "mentions": [
     5,
     7
    ],
    "clue": {
     "cats": [
      5,
      7,
      8
     ],
     "table": "cA=="
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
   false,
   true
  ]
 },
 {
  "rows": 3,
  "cols": 3,
  "seed": 204,
  "level": "medium",
  "given": null,
  "cats": [
   {
    "name": "Ash",
    "color": "calico",
    "row": 0,
    "column": 0,
    "text": "*flicks tail* Bagel is honest. Gizmo is a liar.",
    "hidden": false,
    "secret": null,
    "mentions": [
     1,
     6
    ],
    "clue": {
     "cats": [
      0,
      1,
      6
     ],
     "table": "mg=="
    }
   },
   {
    "name": "Bagel",
    "color": "siamese",
    "row": 0,
    "column": 1,
    "text": "*points a paw at Ash* The only liar among the cats in my row.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     2
    ],
    "clue": {
     "cats": [
      0,
      1,
      2
     ],
     "table": "zg=="
    }
   },
   {
    "name": "Cricket",
    "color": "siamese",
    "row": 0,
    "column": 2,
    "text": "Espresso is a liar. That cat's a fur-aud.",
    "hidden": false,
    "secret": null,
    "mentions": [
     4
    ],
    "clue": {
     "cats": [
      2,
      4
     ],
     "table": "Bg=="
    }
   },
   {
    "name": "Doodle",
    "color": "white",
    "row": 1,
    "column": 0,
    "text": "Mrrp? Mew mew mrrrow!",
    "hidden": true,
    "secret": "Hiss. One of Espresso and me is a liar, maybe both.",
    "mentions": [],
    "clue": null
   },
   {
    "name": "Espresso",
    "color": "grey",
    "row": 1,
    "column": 1,
    "text": "All of the cats in my row are liars. Every whisker in the bunch is crooked.",
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
    "name": "Fudge",
    "color": "grey",
    "row": 1,
    "column": 2,
    "text": "Everyone among my neighbors is honest, except Espresso, who is a liar.",
    "hidden": false,
    "secret": null,
    "mentions": [
     2,
     4,
     8
    ],
    "clue": {
     "cats": [
      2,
      4,
      5,
      8
     ],
     "table": "tPA="
    }
   },
   {
    "name": "Gizmo",
    "color": "white",
    "row": 2,
    "column": 0,
    "text": "Same story for all of the cats in column 3: all honest, or all liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     2,
     5,
     8
    ],
    "clue": {
     "cats": [
      2,
      5,
      6,
      8
     ],
     "table": "4Xg="
    }
   },
   {
    "name": "Hobbes",
    "color": "white",
    "row": 2,
    "column": 1,
    "text": "Each and every one of the cats in my column is a liar. Meow.",
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
     "table": "cA=="
    }
   },
   {
    "name": "Juniper",
    "color": "calico",
    "row": 2,
    "column": 2,
    "text": "I speak Doodle. Translated, they said: \"Hiss. One of Espresso and me is a liar, maybe both.\"",
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
      8
     ],
     "table": "9A=="
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
   false
  ]
 },
 {
  "rows": 3,
  "cols": 3,
  "seed": 213,
  "level": "medium",
  "given": null,
  "cats": [
   {
    "name": "Biscuit",
    "color": "siamese",
    "row": 0,
    "column": 0,
    "text": "At least one of Hobbes and Iggy is a liar.",
    "hidden": false,
    "secret": null,
    "mentions": [
     5,
     6
    ],
    "clue": {
     "cats": [
      0,
      5,
      6
     ],
     "table": "Vg=="
    }
   },
   {
    "name": "Dumpling",
    "color": "siamese",
    "row": 0,
    "column": 1,
    "text": "Among the tuxedo cats, there are both honest cats and liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     2,
     3,
     6,
     8
    ],
    "clue": {
     "cats": [
      1,
      2,
      3,
      6,
      8
     ],
     "table": "VlVVlQ=="
    }
   },
   {
    "name": "Ember",
    "color": "tuxedo",
    "row": 0,
    "column": 2,
    "text": "Gnocchi and Lentil are both honest, fur real.",
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
     "table": "qQ=="
    }
   },
   {
    "name": "Felix",
    "color": "tuxedo",
    "row": 1,
    "column": 0,
    "text": "*sniffs around* All of my neighbors are honest.",
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
     "table": "ycw="
    }
   },
   {
    "name": "Gnocchi",
    "color": "white",
    "row": 1,
    "column": 1,
    "text": "Mrrp. At least one of Biscuit and Hobbes is a liar. Maybe both.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     5
    ],
    "clue": {
     "cats": [
      0,
      4,
      5
     ],
     "table": "Ng=="
    }
   },
   {
    "name": "Hobbes",
    "color": "siamese",
    "row": 1,
    "column": 2,
    "text": "Everyone among the cats in my column is a liar, except Ember, who is honest.",
    "hidden": false,
    "secret": null,
    "mentions": [
     2,
     8
    ],
    "clue": {
     "cats": [
      2,
      5,
      8
     ],
     "table": "jA=="
    }
   },
   {
    "name": "Iggy",
    "color": "tuxedo",
    "row": 2,
    "column": 0,
    "text": "Meow. At least one of Ember and me is a liar. Maybe both.",
    "hidden": false,
    "secret": null,
    "mentions": [
     2
    ],
    "clue": {
     "cats": [
      2,
      6
     ],
     "table": "Ag=="
    }
   },
   {
    "name": "Kismet",
    "color": "white",
    "row": 2,
    "column": 1,
    "text": "There's a mix among my neighbors: some honest, some liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     4,
     6,
     8
    ],
    "clue": {
     "cats": [
      4,
      6,
      7,
      8
     ],
     "table": "Hoc="
    }
   },
   {
    "name": "Lentil",
    "color": "tuxedo",
    "row": 2,
    "column": 2,
    "text": "I'm the only liar among the cats in my column.",
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
     "table": "4A=="
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
   false,
   true
  ]
 },
 {
  "rows": 3,
  "cols": 3,
  "seed": 252,
  "level": "medium",
  "given": null,
  "cats": [
   {
    "name": "Apricot",
    "color": "tuxedo",
    "row": 0,
    "column": 0,
    "text": "Mrrp? Mew mew mrrrow!",
    "hidden": true,
    "secret": "All of the cats in my row are honest. Purrfectly so.",
    "mentions": [],
    "clue": null
   },
   {
    "name": "Biscuit",
    "color": "tuxedo",
    "row": 0,
    "column": 1,
    "text": "Among the cats in row 2, there are both honest cats and liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     3,
     4,
     5
    ],
    "clue": {
     "cats": [
      1,
      3,
      4,
      5
     ],
     "table": "VpU="
    }
   },
   {
    "name": "Clover",
    "color": "tuxedo",
    "row": 0,
    "column": 2,
    "text": "Fig is honest, but Biscuit is a liar.",
    "hidden": false,
    "secret": null,
    "mentions": [
     1,
     4
    ],
    "clue": {
     "cats": [
      1,
      2,
      4
     ],
     "table": "xg=="
    }
   },
   {
    "name": "Espresso",
    "color": "black",
    "row": 1,
    "column": 0,
    "text": "Mrrp. What Apricot meant was: \"All of the cats in my row are honest. Purrfectly so.\"",
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
     "table": "q/8="
    }
   },
   {
    "name": "Fig",
    "color": "ginger",
    "row": 1,
    "column": 1,
    "text": "There's a mix among the cats in my column: some honest, some liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     1,
     7
    ],
    "clue": {
     "cats": [
      1,
      4,
      7
     ],
     "table": "sg=="
    }
   },
   {
    "name": "Goose",
    "color": "black",
    "row": 1,
    "column": 2,
    "text": "Hiss. One of Biscuit and me is a liar, maybe both.",
    "hidden": false,
    "secret": null,
    "mentions": [
     1
    ],
    "clue": {
     "cats": [
      1,
      5
     ],
     "table": "Ag=="
    }
   },
   {
    "name": "Kismet",
    "color": "tuxedo",
    "row": 2,
    "column": 0,
    "text": "Purr... at least one of the tuxedo cats is a liar.",
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
      6
     ],
     "table": "/gA="
    }
   },
   {
    "name": "Lentil",
    "color": "black",
    "row": 2,
    "column": 1,
    "text": "Mark my whiskers: either Mochi is a liar, or all of the black cats are liars. Maybe both.",
    "hidden": false,
    "secret": null,
    "mentions": [
     3,
     5,
     8
    ],
    "clue": {
     "cats": [
      3,
      5,
      7,
      8
     ],
     "table": "cA8="
    }
   },
   {
    "name": "Mochi",
    "color": "ginger",
    "row": 2,
    "column": 2,
    "text": "Hiss. Among the cats in my row you'll find both: at least one liar and at least one honest cat.",
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
  "rows": 3,
  "cols": 3,
  "seed": 103,
  "level": "hard",
  "given": null,
  "cats": [
   {
    "name": "Apricot",
    "color": "siamese",
    "row": 0,
    "column": 0,
    "text": "*incomprehensible meowing*",
    "hidden": true,
    "secret": "Hiss. One of Luna and Nimbus is a liar, maybe both.",
    "mentions": [],
    "clue": null
   },
   {
    "name": "Bean",
    "color": "tuxedo",
    "row": 0,
    "column": 1,
    "text": "Purr. Among the cats in my row, I'm the only one who's honest.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     2
    ],
    "clue": {
     "cats": [
      0,
      1,
      2
     ],
     "table": "7A=="
    }
   },
   {
    "name": "Clover",
    "color": "siamese",
    "row": 0,
    "column": 2,
    "text": "Either Dusty is a liar, or all of the corner cats are honest (or both).",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     3,
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
     "table": "PTw8PA=="
    }
   },
   {
    "name": "Dusty",
    "color": "ginger",
    "row": 1,
    "column": 0,
    "text": "All of the cats to my right are honest.",
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
     "table": "qQ=="
    }
   },
   {
    "name": "Fig",
    "color": "ginger",
    "row": 1,
    "column": 1,
    "text": "*points a paw at Inky* The only liar among Bean, Inky and me.",
    "hidden": false,
    "secret": null,
    "mentions": [
     1,
     6
    ],
    "clue": {
     "cats": [
      1,
      4,
      6
     ],
     "table": "3A=="
    }
   },
   {
    "name": "Goose",
    "color": "tuxedo",
    "row": 1,
    "column": 2,
    "text": "I speak Apricot. Translated, they said: \"Hiss. One of Luna and Nimbus is a liar, maybe both.\"",
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
      5,
      7,
      8
     ],
     "table": "3t0="
    }
   },
   {
    "name": "Inky",
    "color": "siamese",
    "row": 2,
    "column": 0,
    "text": "*nods at Clover* The only honest cat among Clover, Nimbus and me.",
    "hidden": false,
    "secret": null,
    "mentions": [
     2,
     8
    ],
    "clue": {
     "cats": [
      2,
      6,
      8
     ],
     "table": "jA=="
    }
   },
   {
    "name": "Luna",
    "color": "tuxedo",
    "row": 2,
    "column": 1,
    "text": "*thinks hard* Either Dusty is honest, or all of the corner cats are honest, or both.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     2,
     3,
     6,
     8
    ],
    "clue": {
     "cats": [
      0,
      2,
      3,
      6,
      7,
      8
     ],
     "table": "Hw/g8A8P8PA="
    }
   },
   {
    "name": "Nimbus",
    "color": "ginger",
    "row": 2,
    "column": 2,
    "text": "Dusty is honest, but Clover is a liar.",
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
      8
     ],
     "table": "0g=="
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
  "seed": 105,
  "level": "hard",
  "given": null,
  "cats": [
   {
    "name": "Angus",
    "color": "grey",
    "row": 0,
    "column": 0,
    "text": "Mrrp. Either Dumpling is a liar, or all of the cats in my column are liars. Maybe both.",
    "hidden": false,
    "secret": null,
    "mentions": [
     3,
     6
    ],
    "clue": {
     "cats": [
      0,
      3,
      6
     ],
     "table": "Zg=="
    }
   },
   {
    "name": "Bean",
    "color": "ginger",
    "row": 0,
    "column": 1,
    "text": "Exactly 2 of Angus, Honey and me are liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     6
    ],
    "clue": {
     "cats": [
      0,
      1,
      6
     ],
     "table": "pA=="
    }
   },
   {
    "name": "Cricket",
    "color": "grey",
    "row": 0,
    "column": 2,
    "text": "Among the cats to my left, there are both honest cats and liars.",
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
     "table": "lg=="
    }
   },
   {
    "name": "Dumpling",
    "color": "ginger",
    "row": 1,
    "column": 0,
    "text": "*nods at Espresso* The only honest cat among my neighbors.",
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
     "table": "zMY="
    }
   },
   {
    "name": "Espresso",
    "color": "grey",
    "row": 1,
    "column": 1,
    "text": "*purrs* All of Bean, Dumpling and me are from the same litter: all honest, or all liars.",
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
      4
     ],
     "table": "cQ=="
    }
   },
   {
    "name": "Fig",
    "color": "tabby",
    "row": 1,
    "column": 2,
    "text": "Among the cats in column 1, there are both honest cats and liars.",
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
     "table": "Hoc="
    }
   },
   {
    "name": "Honey",
    "color": "tabby",
    "row": 2,
    "column": 0,
    "text": "Hiss. Among the cats in row 2 you'll find both: at least one liar and at least one honest cat.",
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
      6
     ],
     "table": "foE="
    }
   },
   {
    "name": "Inky",
    "color": "tabby",
    "row": 2,
    "column": 1,
    "text": "Mrrp. Either Fig is honest, or all of Bean, Honey and me are liars. Maybe both.",
    "hidden": false,
    "secret": null,
    "mentions": [
     1,
     5,
     6
    ],
    "clue": {
     "cats": [
      1,
      5,
      6,
      7
     ],
     "table": "M0w="
    }
   },
   {
    "name": "Juniper",
    "color": "tabby",
    "row": 2,
    "column": 2,
    "text": "Purr. Among the cats in my column, I'm the only one who's honest.",
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
     "table": "+A=="
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
   true,
   false,
   true
  ]
 },
 {
  "rows": 3,
  "cols": 3,
  "seed": 110,
  "level": "hard",
  "given": null,
  "cats": [
   {
    "name": "Angus",
    "color": "white",
    "row": 0,
    "column": 0,
    "text": "Bean and Cricket are opposites: one is honest, the other is a liar.",
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
    "color": "black",
    "row": 0,
    "column": 1,
    "text": "Goose is honest, but Juniper is a liar.",
    "hidden": false,
    "secret": null,
    "mentions": [
     6,
     8
    ],
    "clue": {
     "cats": [
      1,
      6,
      8
     ],
     "table": "mg=="
    }
   },
   {
    "name": "Cricket",
    "color": "white",
    "row": 0,
    "column": 2,
    "text": "I'm the only liar among the white cats.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     3,
     5
    ],
    "clue": {
     "cats": [
      0,
      2,
      3,
      5
     ],
     "table": "yMw="
    }
   },
   {
    "name": "Dumpling",
    "color": "white",
    "row": 1,
    "column": 0,
    "text": "Mark my whiskers: either Honey is a liar, or all of the cats in my row are liars. Maybe both.",
    "hidden": false,
    "secret": null,
    "mentions": [
     4,
     5,
     7
    ],
    "clue": {
     "cats": [
      3,
      4,
      5,
      7
     ],
     "table": "KlU="
    }
   },
   {
    "name": "Echo",
    "color": "calico",
    "row": 1,
    "column": 1,
    "text": "Only one bad kitty: exactly one of my neighbors is a liar.",
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
     "table": "luHh8A=="
    }
   },
   {
    "name": "Fudge",
    "color": "white",
    "row": 1,
    "column": 2,
    "text": "Juniper is the only liar among the calico cats.",
    "hidden": false,
    "secret": null,
    "mentions": [
     4,
     7,
     8
    ],
    "clue": {
     "cats": [
      4,
      5,
      7,
      8
     ],
     "table": "zMk="
    }
   },
   {
    "name": "Goose",
    "color": "black",
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
    "name": "Honey",
    "color": "calico",
    "row": 2,
    "column": 1,
    "text": "*arches back* At least 3 cats are liars, maybe more.",
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
     "table": "gOjo/uj+/v/o/v7//v///xcBAQABAAAAAQAAAAAAAADo/v7//v////7/////////AQAAAAAAAAAAAAAAAAAAAA=="
    }
   },
   {
    "name": "Juniper",
    "color": "calico",
    "row": 2,
    "column": 2,
    "text": "Hiss. Among the cats in my column, I'm the only liar.",
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
     "table": "4A=="
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
  "seed": 113,
  "level": "hard",
  "given": null,
  "cats": [
   {
    "name": "Angus",
    "color": "calico",
    "row": 0,
    "column": 0,
    "text": "Mrrp. One of Fudge and me is honest, maybe both.",
    "hidden": false,
    "secret": null,
    "mentions": [
     4
    ],
    "clue": {
     "cats": [
      0,
      4
     ],
     "table": "DQ=="
    }
   },
   {
    "name": "Bagel",
    "color": "calico",
    "row": 0,
    "column": 1,
    "text": "Mrrp. Either Kismet is honest, or all of the corner cats are liars. Maybe both.",
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
      1,
      2,
      6,
      8
     ],
     "table": "MzPMbA=="
    }
   },
   {
    "name": "Doodle",
    "color": "ginger",
    "row": 0,
    "column": 2,
    "text": "All but one of the cats in my row are honest.",
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
     "table": "5g=="
    }
   },
   {
    "name": "Ember",
    "color": "ginger",
    "row": 1,
    "column": 0,
    "text": "*swishes tail* Among the tuxedo cats, there's at least one liar and at least one honest cat.",
    "hidden": false,
    "secret": null,
    "mentions": [
     6,
     7
    ],
    "clue": {
     "cats": [
      3,
      6,
      7
     ],
     "table": "lg=="
    }
   },
   {
    "name": "Fudge",
    "color": "ginger",
    "row": 1,
    "column": 1,
    "text": "Either Angus is honest, or all of Doodle, Gnocchi and me are liars (or both).",
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
      2,
      4,
      5
     ],
     "table": "pSU="
    }
   },
   {
    "name": "Gnocchi",
    "color": "ginger",
    "row": 1,
    "column": 2,
    "text": "Fudge is the only liar among my neighbors.",
    "hidden": false,
    "secret": null,
    "mentions": [
     2,
     4,
     8
    ],
    "clue": {
     "cats": [
      2,
      4,
      5,
      8
     ],
     "table": "tPA="
    }
   },
   {
    "name": "Hazel",
    "color": "tuxedo",
    "row": 2,
    "column": 0,
    "text": "Either Iggy is a liar, or all of the cats above me are honest (or both).",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     3,
     7
    ],
    "clue": {
     "cats": [
      0,
      3,
      6,
      7
     ],
     "table": "4Q8="
    }
   },
   {
    "name": "Iggy",
    "color": "tuxedo",
    "row": 2,
    "column": 1,
    "text": "I'm not kitten you, Fudge is a liar.",
    "hidden": false,
    "secret": null,
    "mentions": [
     4
    ],
    "clue": {
     "cats": [
      4,
      7
     ],
     "table": "Bg=="
    }
   },
   {
    "name": "Kismet",
    "color": "calico",
    "row": 2,
    "column": 2,
    "text": "Either Ember is honest, or all of the ginger cats are honest (or both).",
    "hidden": false,
    "secret": null,
    "mentions": [
     2,
     3,
     4,
     5
    ],
    "clue": {
     "cats": [
      2,
      3,
      4,
      5,
      8
     ],
     "table": "MzPMzA=="
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
  "seed": 114,
  "level": "hard",
  "given": null,
  "cats": [
   {
    "name": "Angus",
    "color": "tabby",
    "row": 0,
    "column": 0,
    "text": "*thinks hard* Either Inky is honest, or all of the cats in row 3 are honest, or both.",
    "hidden": false,
    "secret": null,
    "mentions": [
     6,
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
     "table": "paU="
    }
   },
   {
    "name": "Bagel",
    "color": "grey",
    "row": 0,
    "column": 1,
    "text": "Purr. All of Echo, Honey and me can be trusted, except exactly one.",
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
     "table": "vA=="
    }
   },
   {
    "name": "Dusty",
    "color": "grey",
    "row": 0,
    "column": 2,
    "text": "Everyone among the cats to my left is honest, except Angus, who is a liar.",
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
     "table": "0g=="
    }
   },
   {
    "name": "Echo",
    "color": "grey",
    "row": 1,
    "column": 0,
    "text": "*thinks hard* Either Gnocchi is honest, or all the cats are liars, or both.",
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
     "table": "/wD/AAD/AP//AP8AAP8A//8A/wAA/wD//wD/AAD/AP//AP8AAP8A//8A/wAA/wD//wD/AAD/AP//AP8AAP8Afw=="
    }
   },
   {
    "name": "Fudge",
    "color": "tabby",
    "row": 1,
    "column": 1,
    "text": "Mrrp. Whatever one of Bagel, Gnocchi and me is, the rest are too.",
    "hidden": false,
    "secret": null,
    "mentions": [
     1,
     5
    ],
    "clue": {
     "cats": [
      1,
      4,
      5
     ],
     "table": "TQ=="
    }
   },
   {
    "name": "Gnocchi",
    "color": "tabby",
    "row": 1,
    "column": 2,
    "text": "Same story for all of the cats in my row: all honest, or all liars.",
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
     "table": "cQ=="
    }
   },
   {
    "name": "Honey",
    "color": "tuxedo",
    "row": 2,
    "column": 0,
    "text": "I'm not kitten you, Fudge is a liar.",
    "hidden": false,
    "secret": null,
    "mentions": [
     4
    ],
    "clue": {
     "cats": [
      4,
      6
     ],
     "table": "Bg=="
    }
   },
   {
    "name": "Inky",
    "color": "tuxedo",
    "row": 2,
    "column": 1,
    "text": "All of the cats above me are liars. Every whisker in the bunch is crooked.",
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
     "table": "eA=="
    }
   },
   {
    "name": "Jasper",
    "color": "tuxedo",
    "row": 2,
    "column": 2,
    "text": "Purr. All of the cats in row 1 can be trusted, except exactly one.",
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
     "table": "Fuk="
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
   true,
   true,
   false
  ]
 },
 {
  "rows": 4,
  "cols": 4,
  "seed": 1013,
  "level": "medium",
  "given": 7,
  "cats": [
   {
    "name": "Apricot",
    "color": "calico",
    "row": 0,
    "column": 0,
    "text": "Meow. Among the grey cats, only Bean is honest.",
    "hidden": false,
    "secret": null,
    "mentions": [
     1,
     3,
     9,
     12
    ],
    "clue": {
     "cats": [
      0,
      1,
      3,
      9,
      12
     ],
     "table": "qqqqmg=="
    }
   },
   {
    "name": "Bean",
    "color": "grey",
    "row": 0,
    "column": 1,
    "text": "*thinks hard* Either Nugget is honest, or all of the cats in column 3 are liars, or both.",
    "hidden": false,
    "secret": null,
    "mentions": [
     2,
     6,
     10,
     12,
     14
    ],
    "clue": {
     "cats": [
      1,
      2,
      6,
      10,
      12,
      14
     ],
     "table": "VVWqqlVVqmo="
    }
   },
   {
    "name": "Clover",
    "color": "siamese",
    "row": 0,
    "column": 2,
    "text": "Purr. You can trust Espresso and Hazel, both of them.",
    "hidden": false,
    "secret": null,
    "mentions": [
     4,
     7
    ],
    "clue": {
     "cats": [
      2,
      4,
      7
     ],
     "table": "qQ=="
    }
   },
   {
    "name": "Dusty",
    "color": "grey",
    "row": 0,
    "column": 3,
    "text": "There's a mix among the calico cats: some honest, some liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     6,
     11,
     14
    ],
    "clue": {
     "cats": [
      0,
      3,
      6,
      11,
      14
     ],
     "table": "NjMzkw=="
    }
   },
   {
    "name": "Espresso",
    "color": "ginger",
    "row": 1,
    "column": 0,
    "text": "Either Apricot is a liar, or all of the cats in row 1 are honest (or both).",
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
      4
     ],
     "table": "q6pUVQ=="
    }
   },
   {
    "name": "Fig",
    "color": "siamese",
    "row": 1,
    "column": 1,
    "text": "At least 2 of the calico cats are liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     6,
     11,
     14
    ],
    "clue": {
     "cats": [
      0,
      5,
      6,
      11,
      14
     ],
     "table": "bDY2Mw=="
    }
   },
   {
    "name": "Gnocchi",
    "color": "calico",
    "row": 1,
    "column": 2,
    "text": "*twitches whiskers* Either Fig is a liar, or Kettle is honest, or both.",
    "hidden": false,
    "secret": null,
    "mentions": [
     5,
     10
    ],
    "clue": {
     "cats": [
      5,
      6,
      10
     ],
     "table": "Yw=="
    }
   },
   {
    "name": "Hazel",
    "color": "tabby",
    "row": 1,
    "column": 3,
    "text": "Purr... at least one of Espresso, Gnocchi and me is a liar.",
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
      7
     ],
     "table": "Dg=="
    }
   },
   {
    "name": "Iggy",
    "color": "tabby",
    "row": 2,
    "column": 0,
    "text": "Either Hazel is honest, or all of the cats above me are liars (or both).",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     4,
     7
    ],
    "clue": {
     "cats": [
      0,
      4,
      7,
      8
     ],
     "table": "j3A="
    }
   },
   {
    "name": "Jellybean",
    "color": "grey",
    "row": 2,
    "column": 1,
    "text": "*kneads paws* At least one of Clover and Pickles is honest.",
    "hidden": false,
    "secret": null,
    "mentions": [
     2,
     14
    ],
    "clue": {
     "cats": [
      2,
      9,
      14
     ],
     "table": "kw=="
    }
   },
   {
    "name": "Kettle",
    "color": "ginger",
    "row": 2,
    "column": 2,
    "text": "*swishes tail* Among the grey cats, there's at least one liar and at least one honest cat.",
    "hidden": false,
    "secret": null,
    "mentions": [
     1,
     3,
     9,
     12
    ],
    "clue": {
     "cats": [
      1,
      3,
      9,
      10,
      12
     ],
     "table": "/gF/gA=="
    }
   },
   {
    "name": "Loki",
    "color": "calico",
    "row": 2,
    "column": 3,
    "text": "Purr... at least one of the cats in row 1 is a liar.",
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
      11
     ],
     "table": "/v8BAA=="
    }
   },
   {
    "name": "Nugget",
    "color": "grey",
    "row": 3,
    "column": 0,
    "text": "Among the cats in my column, there are both honest cats and liars.",
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
     "table": "/oA="
    }
   },
   {
    "name": "Otis",
    "color": "ginger",
    "row": 3,
    "column": 1,
    "text": "Loki is the only liar among the cats in column 4.",
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
      7,
      11,
      13,
      15
     ],
     "table": "EO8A/w=="
    }
   },
   {
    "name": "Pickles",
    "color": "calico",
    "row": 3,
    "column": 2,
    "text": "*kneads paws* At least one of Apricot and Gnocchi is honest.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     6
    ],
    "clue": {
     "cats": [
      0,
      6,
      14
     ],
     "table": "hw=="
    }
   },
   {
    "name": "Quill",
    "color": "ginger",
    "row": 3,
    "column": 3,
    "text": "Purr. You can trust at least one of Espresso and Otis.",
    "hidden": false,
    "secret": null,
    "mentions": [
     4,
     13
    ],
    "clue": {
     "cats": [
      4,
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
   false,
   true,
   false,
   false,
   false,
   true,
   false,
   false,
   true,
   true,
   false
  ]
 },
 {
  "rows": 4,
  "cols": 4,
  "seed": 1028,
  "level": "medium",
  "given": 3,
  "cats": [
   {
    "name": "Ash",
    "color": "tuxedo",
    "row": 0,
    "column": 0,
    "text": "Oreo is the only honest cat among the cats below me.",
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
     "table": "aqo="
    }
   },
   {
    "name": "Dumpling",
    "color": "siamese",
    "row": 0,
    "column": 1,
    "text": "Mrrp. Either Nimbus is a liar, or all of Ash, Nimbus and me are honest. Maybe both.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     11
    ],
    "clue": {
     "cats": [
      0,
      1,
      11
     ],
     "table": "PQ=="
    }
   },
   {
    "name": "Echo",
    "color": "grey",
    "row": 0,
    "column": 2,
    "text": "*points a paw at Mango* The only liar among the cats in the middle.",
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
      2,
      5,
      6,
      9,
      10
     ],
     "table": "qqqpqg=="
    }
   },
   {
    "name": "Felix",
    "color": "grey",
    "row": 0,
    "column": 3,
    "text": "Every one of the grey cats is a liar. Hiss!",
    "hidden": false,
    "secret": null,
    "mentions": [
     2
    ],
    "clue": {
     "cats": [
      2,
      3
     ],
     "table": "BA=="
    }
   },
   {
    "name": "Goose",
    "color": "black",
    "row": 1,
    "column": 0,
    "text": "Purr. You can trust at least one of Dumpling and me.",
    "hidden": false,
    "secret": null,
    "mentions": [
     1
    ],
    "clue": {
     "cats": [
      1,
      4
     ],
     "table": "Cw=="
    }
   },
   {
    "name": "Honey",
    "color": "tuxedo",
    "row": 1,
    "column": 1,
    "text": "There's a mix among the cats in column 3: some honest, some liars.",
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
      5,
      6,
      10,
      14
     ],
     "table": "NjMzkw=="
    }
   },
   {
    "name": "Iggy",
    "color": "tuxedo",
    "row": 1,
    "column": 2,
    "text": "I speak Kettle. Translated, they said: \"Juniper is lying like a lion.\"",
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
     "table": "vg=="
    }
   },
   {
    "name": "Juniper",
    "color": "black",
    "row": 1,
    "column": 3,
    "text": "Hiss. Among Goose, Honey and me you'll find both: at least one liar and at least one honest cat.",
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
      7
     ],
     "table": "jg=="
    }
   },
   {
    "name": "Kettle",
    "color": "black",
    "row": 2,
    "column": 0,
    "text": "Mrrp? Mew mew mrrrow!",
    "hidden": true,
    "secret": "Juniper is lying like a lion.",
    "mentions": [],
    "clue": null
   },
   {
    "name": "Luna",
    "color": "ginger",
    "row": 2,
    "column": 1,
    "text": "All of the tuxedo cats are the same: all honest, or all liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     5,
     6,
     12
    ],
    "clue": {
     "cats": [
      0,
      5,
      6,
      9,
      12
     ],
     "table": "Af6Afw=="
    }
   },
   {
    "name": "Mango",
    "color": "siamese",
    "row": 2,
    "column": 2,
    "text": "Meow. All of the cats in column 2 are liars, every last one.",
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
      10,
      13
     ],
     "table": "AP+Afw=="
    }
   },
   {
    "name": "Nimbus",
    "color": "calico",
    "row": 2,
    "column": 3,
    "text": "Hiss. Among the cats above me you'll find both: at least one liar and at least one honest cat.",
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
      11
     ],
     "table": "lg=="
    }
   },
   {
    "name": "Oreo",
    "color": "tuxedo",
    "row": 3,
    "column": 0,
    "text": "*twitches whiskers* Either Pickles is a liar, or Queenie is honest, or both.",
    "hidden": false,
    "secret": null,
    "mentions": [
     13,
     14
    ],
    "clue": {
     "cats": [
      12,
      13,
      14
     ],
     "table": "ZQ=="
    }
   },
   {
    "name": "Pickles",
    "color": "ginger",
    "row": 3,
    "column": 1,
    "text": "All of the cats to my right are honest. Purrfectly so.",
    "hidden": false,
    "secret": null,
    "mentions": [
     14,
     15
    ],
    "clue": {
     "cats": [
      13,
      14,
      15
     ],
     "table": "qQ=="
    }
   },
   {
    "name": "Queenie",
    "color": "black",
    "row": 3,
    "column": 2,
    "text": "Mrrp. Among the cats in row 2, only Goose is a liar.",
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
      4,
      5,
      6,
      7,
      14
     ],
     "table": "AgD9/w=="
    }
   },
   {
    "name": "Truffle",
    "color": "calico",
    "row": 3,
    "column": 3,
    "text": "Either Oreo is honest, or all of Ash, Mango and me are liars (or both).",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     10,
     12
    ],
    "clue": {
     "cats": [
      0,
      10,
      12,
      15
     ],
     "table": "D3A="
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
  "seed": 1045,
  "level": "medium",
  "given": 3,
  "cats": [
   {
    "name": "Apricot",
    "color": "white",
    "row": 0,
    "column": 0,
    "text": "*leans in* Hobbes whispered to me: \"Mrrp. Whatever one of Echo, Jellybean and me is, the rest are too.\"",
    "hidden": false,
    "secret": null,
    "mentions": [
     3,
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
     "table": "+7o="
    }
   },
   {
    "name": "Cricket",
    "color": "calico",
    "row": 0,
    "column": 1,
    "text": "Mrrp. At least one of Dusty and Rusty is a liar. Maybe both.",
    "hidden": false,
    "secret": null,
    "mentions": [
     2,
     12
    ],
    "clue": {
     "cats": [
      1,
      2,
      12
     ],
     "table": "Vg=="
    }
   },
   {
    "name": "Dusty",
    "color": "ginger",
    "row": 0,
    "column": 2,
    "text": "Meow meow. Exactly 2 of the cats in my row are liars.",
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
     "table": "mOY="
    }
   },
   {
    "name": "Echo",
    "color": "grey",
    "row": 0,
    "column": 3,
    "text": "Pepper is the only liar among the cats in my column.",
    "hidden": false,
    "secret": null,
    "mentions": [
     7,
     11,
     15
    ],
    "clue": {
     "cats": [
      3,
      7,
      11,
      15
     ],
     "table": "uqo="
    }
   },
   {
    "name": "Hobbes",
    "color": "tabby",
    "row": 1,
    "column": 0,
    "text": "Mrrp? Mew mew mrrrow!",
    "hidden": true,
    "secret": "Mrrp. Either Nugget is a liar, or all of the cats in my column are honest. Maybe both.",
    "mentions": [],
    "clue": null
   },
   {
    "name": "Inky",
    "color": "tabby",
    "row": 1,
    "column": 1,
    "text": "Same story for all of the cats to my right: all honest, or all liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     6,
     7
    ],
    "clue": {
     "cats": [
      5,
      6,
      7
     ],
     "table": "aQ=="
    }
   },
   {
    "name": "Jellybean",
    "color": "white",
    "row": 1,
    "column": 2,
    "text": "*thinks hard* Either Sprout is honest, or all of the white cats are liars, or both.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     8,
     13
    ],
    "clue": {
     "cats": [
      0,
      6,
      8,
      13
     ],
     "table": "M0w="
    }
   },
   {
    "name": "Kismet",
    "color": "black",
    "row": 1,
    "column": 3,
    "text": "Hiss. Among the cats to my left you'll find both: at least one liar and at least one honest cat.",
    "hidden": false,
    "secret": null,
    "mentions": [
     4,
     5,
     6
    ],
    "clue": {
     "cats": [
      4,
      5,
      6,
      7
     ],
     "table": "foE="
    }
   },
   {
    "name": "Loki",
    "color": "white",
    "row": 2,
    "column": 0,
    "text": "Each and every one of the calico cats is a liar. Meow.",
    "hidden": false,
    "secret": null,
    "mentions": [
     1,
     15
    ],
    "clue": {
     "cats": [
      1,
      8,
      15
     ],
     "table": "bA=="
    }
   },
   {
    "name": "Mochi",
    "color": "tabby",
    "row": 2,
    "column": 1,
    "text": "There's a mix among the cats above me: some honest, some liars.",
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
      9
     ],
     "table": "lg=="
    }
   },
   {
    "name": "Nugget",
    "color": "ginger",
    "row": 2,
    "column": 2,
    "text": "*nods at Rusty* The only honest cat among the cats in column 1.",
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
      8,
      10,
      12
     ],
     "table": "gH8A/w=="
    }
   },
   {
    "name": "Pepper",
    "color": "black",
    "row": 2,
    "column": 3,
    "text": "Cricket and Jellybean are both honest, fur real.",
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
      11
     ],
     "table": "4Q=="
    }
   },
   {
    "name": "Rusty",
    "color": "grey",
    "row": 3,
    "column": 0,
    "text": "Same story for all of the grey cats: all honest, or all liars.",
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
     "table": "BQ=="
    }
   },
   {
    "name": "Sprout",
    "color": "white",
    "row": 3,
    "column": 1,
    "text": "Either Waffles is honest, or all of the tabby cats are liars (or both).",
    "hidden": false,
    "secret": null,
    "mentions": [
     4,
     5,
     9,
     15
    ],
    "clue": {
     "cats": [
      4,
      5,
      9,
      13,
      15
     ],
     "table": "/wCAfw=="
    }
   },
   {
    "name": "Vanilla",
    "color": "ginger",
    "row": 3,
    "column": 2,
    "text": "Loki and Pepper? Liars, the pair of them.",
    "hidden": false,
    "secret": null,
    "mentions": [
     8,
     11
    ],
    "clue": {
     "cats": [
      8,
      11,
      14
     ],
     "table": "eA=="
    }
   },
   {
    "name": "Waffles",
    "color": "calico",
    "row": 3,
    "column": 3,
    "text": "I'm the only honest cat among Hobbes, Loki and me.",
    "hidden": false,
    "secret": null,
    "mentions": [
     4,
     8
    ],
    "clue": {
     "cats": [
      4,
      8,
      15
     ],
     "table": "+A=="
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
   false,
   false,
   true,
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
  "seed": 50035,
  "level": "medium",
  "given": 2,
  "cats": [
   {
    "name": "Cricket",
    "color": "tabby",
    "row": 0,
    "column": 0,
    "text": "Mrrp. Either Gizmo is a liar, or Ember is honest. Maybe both.",
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
     "table": "WQ=="
    }
   },
   {
    "name": "Doodle",
    "color": "ginger",
    "row": 0,
    "column": 1,
    "text": "*thinks hard* Either Tofu is honest, or all of the black cats are liars, or both.",
    "hidden": false,
    "secret": null,
    "mentions": [
     6,
     8,
     14
    ],
    "clue": {
     "cats": [
      1,
      6,
      8,
      14
     ],
     "table": "VWo="
    }
   },
   {
    "name": "Ember",
    "color": "tuxedo",
    "row": 0,
    "column": 2,
    "text": "Kettle and I are both liars.",
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
     "table": "Ag=="
    }
   },
   {
    "name": "Fig",
    "color": "calico",
    "row": 0,
    "column": 3,
    "text": "Mark my whiskers: either Lentil is honest, or all of Kettle, Otis and me are honest. Maybe both.",
    "hidden": false,
    "secret": null,
    "mentions": [
     7,
     8,
     10
    ],
    "clue": {
     "cats": [
      3,
      7,
      8,
      10
     ],
     "table": "taU="
    }
   },
   {
    "name": "Gizmo",
    "color": "white",
    "row": 1,
    "column": 0,
    "text": "Everyone among the ginger cats is honest, except Sushi, who is a liar.",
    "hidden": false,
    "secret": null,
    "mentions": [
     1,
     11,
     13
    ],
    "clue": {
     "cats": [
      1,
      4,
      11,
      13
     ],
     "table": "zMk="
    }
   },
   {
    "name": "Honey",
    "color": "calico",
    "row": 1,
    "column": 1,
    "text": "Mrrp. Either Gizmo is honest, or all of the cats in column 3 are liars. Maybe both.",
    "hidden": false,
    "secret": null,
    "mentions": [
     2,
     4,
     6,
     10,
     14
    ],
    "clue": {
     "cats": [
      2,
      4,
      5,
      6,
      10,
      14
     ],
     "table": "w8PDw8PDw0s="
    }
   },
   {
    "name": "Jasper",
    "color": "black",
    "row": 1,
    "column": 2,
    "text": "*arches back* Ember and Ravioli are both liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     2,
     12
    ],
    "clue": {
     "cats": [
      2,
      6,
      12
     ],
     "table": "bA=="
    }
   },
   {
    "name": "Kettle",
    "color": "tuxedo",
    "row": 1,
    "column": 3,
    "text": "*flicks ears* Exactly 2 of the cats in row 4 are liars.",
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
     "table": "apaWqQ=="
    }
   },
   {
    "name": "Lentil",
    "color": "black",
    "row": 2,
    "column": 0,
    "text": "Hiss. Among the cats in my column you'll find both: at least one liar and at least one honest cat.",
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
     "table": "Do8="
    }
   },
   {
    "name": "Nimbus",
    "color": "calico",
    "row": 2,
    "column": 1,
    "text": "*thinks hard* Either Paprika is a liar, or all of the cats to my right are liars, or both.",
    "hidden": false,
    "secret": null,
    "mentions": [
     10,
     11
    ],
    "clue": {
     "cats": [
      9,
      10,
      11
     ],
     "table": "Wg=="
    }
   },
   {
    "name": "Otis",
    "color": "white",
    "row": 2,
    "column": 2,
    "text": "Meow. 2 or more of Cricket, Ember and me are liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     2
    ],
    "clue": {
     "cats": [
      0,
      2,
      10
     ],
     "table": "GA=="
    }
   },
   {
    "name": "Paprika",
    "color": "ginger",
    "row": 2,
    "column": 3,
    "text": "*nods at Kettle* The only honest cat among the tuxedo cats.",
    "hidden": false,
    "secret": null,
    "mentions": [
     2,
     7
    ],
    "clue": {
     "cats": [
      2,
      7,
      11
     ],
     "table": "0g=="
    }
   },
   {
    "name": "Ravioli",
    "color": "grey",
    "row": 3,
    "column": 0,
    "text": "Mrrp. Either Otis is a liar, or all of the cats in row 1 are honest. Maybe both.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     1,
     2,
     3,
     10
    ],
    "clue": {
     "cats": [
      0,
      1,
      2,
      3,
      10,
      12
     ],
     "table": "AQD///7/AAA="
    }
   },
   {
    "name": "Sushi",
    "color": "ginger",
    "row": 3,
    "column": 1,
    "text": "At least one of Nimbus and Ravioli is honest.",
    "hidden": false,
    "secret": null,
    "mentions": [
     9,
     12
    ],
    "clue": {
     "cats": [
      9,
      12,
      13
     ],
     "table": "hw=="
    }
   },
   {
    "name": "Tofu",
    "color": "tabby",
    "row": 3,
    "column": 2,
    "text": "Exactly one of Nimbus and Paprika is a liar.",
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
    "name": "Umber",
    "color": "grey",
    "row": 3,
    "column": 3,
    "text": "I counted with my paws: exactly 2 of the cats in row 1 are liars.",
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
      15
     ],
     "table": "aBaX6Q=="
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
  "seed": 70020,
  "level": "medium",
  "given": 7,
  "cats": [
   {
    "name": "Bean",
    "color": "grey",
    "row": 0,
    "column": 0,
    "text": "Mrrp. What Felix meant was: \"Exactly one of Goose and Honey is a liar.\"",
    "hidden": false,
    "secret": null,
    "mentions": [
     4,
     5,
     6
    ],
    "clue": {
     "cats": [
      0,
      4,
      5,
      6
     ],
     "table": "vus="
    }
   },
   {
    "name": "Coco",
    "color": "black",
    "row": 0,
    "column": 1,
    "text": "Either Otis is a liar, or all the cats are liars (or both).",
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
     "table": "zMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMwzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzM8zMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzPMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzDMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMwzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzM8zMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzPMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzDMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMwzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzM8zMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzM="
    }
   },
   {
    "name": "Doodle",
    "color": "calico",
    "row": 0,
    "column": 2,
    "text": "I heard Loki say: \"Mark my whiskers: either Quill is a liar, or all of Doodle, Saffron and me are honest. Maybe both.\"",
    "hidden": false,
    "secret": null,
    "mentions": [
     10,
     14,
     15
    ],
    "clue": {
     "cats": [
      2,
      10,
      14,
      15
     ],
     "table": "v74="
    }
   },
   {
    "name": "Ember",
    "color": "grey",
    "row": 0,
    "column": 3,
    "text": "Mrrp! All of the calico cats are honest, I'd bet my nine lives on it.",
    "hidden": false,
    "secret": null,
    "mentions": [
     2,
     5
    ],
    "clue": {
     "cats": [
      2,
      3,
      5
     ],
     "table": "yQ=="
    }
   },
   {
    "name": "Felix",
    "color": "tuxedo",
    "row": 1,
    "column": 0,
    "text": "*chirps at a bird outside*",
    "hidden": true,
    "secret": "Hiss. Among Coco, Indigo and me you'll find both: at least one liar and at least one honest cat.",
    "mentions": [],
    "clue": null
   },
   {
    "name": "Goose",
    "color": "calico",
    "row": 1,
    "column": 1,
    "text": "Bean is the only liar among Bean, Jellybean and me.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     8
    ],
    "clue": {
     "cats": [
      0,
      5,
      8
     ],
     "table": "zg=="
    }
   },
   {
    "name": "Honey",
    "color": "ginger",
    "row": 1,
    "column": 2,
    "text": "Mrrp. Either Bean is honest, or all of the cats on the edges are liars. Maybe both.",
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
     "table": "VVVVVaqqqqpVVVVVqqqqqlVVVVWqqqqqVVVVVaqqqqpVVVVVqqqqqlVVVVWqqqqqVVVVVaqqqqpVVVVVqqqqqlVVVVWqqqqqVVVVVaqqqqpVVVVVqqqqqlVVVVWqqqqqVVVVVaqqqqpVVVVVqqqqqlVVVVWqqqqqVVVVVaqqqqpVVVVVqqqqqlVVVVWqqqqqVVVVVaqqqqpVVVVVqqqqqlVVVVWqqqqqVVVVVaqqqqpVVVVVqqqqqlVVVVWqqqqqVVVVVaqqqqpVVVVVqqqqqlVVVVWqqqqqVVVVVaqqqqpVVVVVqqqqqlVVVVWqqqqqVVVVVaqqqqpVVVVVqqqqqlVVVVWqqqqqVVVVVaqqqqpVVVVVqqqqqlVVVVWqqqqqVVVVVaqqqqpVVVVVqqqqqlVVVVWqqqqqVVVVVaqqqqpVVVVVqqqqqlVVVVWqqqqqVVVVVaqqqqpVVVVVqqqqqlVVVVWqqqqqVVVVVaqqqqpVVVVVqqqqqlVVVVWqqqqqVVVVVaqqqqpVVVVVqqqqqlVVVVWqqqqqVVVVVaqqqqpVVVVVqqqqqlVVVVWqqqqqVVVVVaqqqqpVVVVVqqqqqlVVVVWqqqqqVVVVVaqqqqpVVVVVqqqqqlVVVVWqqqqqVVVVVaqqqqpVVVVVqqqqqlVVVVWqqqqqVVVVVaqqqqpVVVVVqqqqqlVVVVWqqqqqVVVVVaqqqqpVVVVVqqqqqlVVVVWqqqqqVVVVVaqqqqpVVVVVqqqqqlVVVVWqqqqqVVVVVaqqqqpVVVVVqqqqqlVVVVWqqqqqVVVVVaqqqqpVVVVVqqqqqlVVVVWqqqqqVVVVVaqqqqpVVVVVqqqqqlVVVVWqqqqqVVVVVaqqqqpVVVVVqqqqqlVVVVWqqqqqVVVVVaqqqqpVVVVVqqqqqlVVVVWqqqqqVVVVVaqqqqpVVVVVqqqqqlVVVVWqqqqqVVVVVaqqqqpVVVVVqqqqqlVVVVWqqqqqVVVVVaqqqqpVVVVVqqqqqlVVVVWqqqqqVVVVVaqqqqpVVVVVqqqqqlVVVVWqqqqqVVVVVaqqqqpVVVVVqqqqqlVVVVWqqqqqVVVVVaqqqqpVVVVVqqqqqlVVVVWqqqqqVVVVVaqqqqpVVVVVqqqqqlVVVVWqqqqqVVVVVaqqqqpVVVVVqqqqqlVVVVWqqqqqVVVVVaqqqqpVVVVVqqqqqlVVVVWqqqqqVVVVVaqqqqpVVVVVqqqqqlVVVVWqqqqqVVVVVaqqqqpVVVVVqqqqqlVVVVWqqqqqVVVVVaqqqqpVVVVVqqqqqlVVVVWqqqqqVVVVVaqqqqpVVVVVqqqqqlVVVVWqqqqqVVVVVaqqqqpVVVXVqqqqKg=="
    }
   },
   {
    "name": "Indigo",
    "color": "grey",
    "row": 1,
    "column": 3,
    "text": "Meow. Goose and I are liars, both of us.",
    "hidden": false,
    "secret": null,
    "mentions": [
     5
    ],
    "clue": {
     "cats": [
      5,
      7
     ],
     "table": "BA=="
    }
   },
   {
    "name": "Jellybean",
    "color": "tuxedo",
    "row": 2,
    "column": 0,
    "text": "Mrrp! All of my neighbors are honest, I'd bet my nine lives on it.",
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
     "table": "ycw="
    }
   },
   {
    "name": "Kiwi",
    "color": "black",
    "row": 2,
    "column": 1,
    "text": "Everyone among Indigo, Jellybean and me is honest, except Indigo, who is a liar.",
    "hidden": false,
    "secret": null,
    "mentions": [
     7,
     8
    ],
    "clue": {
     "cats": [
      7,
      8,
      9
     ],
     "table": "8g=="
    }
   },
   {
    "name": "Loki",
    "color": "tuxedo",
    "row": 2,
    "column": 2,
    "text": "Mrrrow mrrp mew.",
    "hidden": true,
    "secret": "Mark my whiskers: either Quill is a liar, or all of Doodle, Saffron and me are honest. Maybe both.",
    "mentions": [],
    "clue": null
   },
   {
    "name": "Mochi",
    "color": "black",
    "row": 2,
    "column": 3,
    "text": "Everyone among the cats in my column is honest, except Indigo, who is a liar.",
    "hidden": false,
    "secret": null,
    "mentions": [
     3,
     7,
     15
    ],
    "clue": {
     "cats": [
      3,
      7,
      11,
      15
     ],
     "table": "9PA="
    }
   },
   {
    "name": "Otis",
    "color": "tuxedo",
    "row": 3,
    "column": 0,
    "text": "*sniffs around* All of the cats to my right are honest.",
    "hidden": false,
    "secret": null,
    "mentions": [
     13,
     14,
     15
    ],
    "clue": {
     "cats": [
      12,
      13,
      14,
      15
     ],
     "table": "qao="
    }
   },
   {
    "name": "Paprika",
    "color": "ginger",
    "row": 3,
    "column": 1,
    "text": "All but one of the black cats are honest.",
    "hidden": false,
    "secret": null,
    "mentions": [
     1,
     9,
     11,
     15
    ],
    "clue": {
     "cats": [
      1,
      9,
      11,
      13,
      15
     ],
     "table": "FukB/g=="
    }
   },
   {
    "name": "Quill",
    "color": "ginger",
    "row": 3,
    "column": 2,
    "text": "There's a mix among my neighbors: some honest, some liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     10,
     13,
     15
    ],
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
    "name": "Saffron",
    "color": "black",
    "row": 3,
    "column": 3,
    "text": "Hiss. Among the cats in column 2 you'll find both: at least one liar and at least one honest cat.",
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
   true,
   false,
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
   false
  ]
 },
 {
  "rows": 4,
  "cols": 4,
  "seed": 1002,
  "level": "hard",
  "given": null,
  "cats": [
   {
    "name": "Angus",
    "color": "grey",
    "row": 0,
    "column": 0,
    "text": "Mrrp. Among the cats in my row, only Dusty is a liar.",
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
     "table": "qqs="
    }
   },
   {
    "name": "Biscuit",
    "color": "white",
    "row": 0,
    "column": 1,
    "text": "I heard Indigo say: \"*points a paw at Dusty* The only liar among the corner cats.\"",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     3,
     8,
     12,
     15
    ],
    "clue": {
     "cats": [
      0,
      1,
      3,
      8,
      12,
      15
     ],
     "table": "3O/M/8z/zP8="
    }
   },
   {
    "name": "Coco",
    "color": "black",
    "row": 0,
    "column": 2,
    "text": "Mrrrow mrrp mew.",
    "hidden": true,
    "secret": "*flicks tail* Lentil is honest. Dusty is a liar.",
    "mentions": [],
    "clue": null
   },
   {
    "name": "Dusty",
    "color": "black",
    "row": 0,
    "column": 3,
    "text": "*nods at Indigo* The only honest cat among Indigo, Quill and me.",
    "hidden": false,
    "secret": null,
    "mentions": [
     8,
     15
    ],
    "clue": {
     "cats": [
      3,
      8,
      15
     ],
     "table": "ig=="
    }
   },
   {
    "name": "Ember",
    "color": "white",
    "row": 1,
    "column": 0,
    "text": "Mark my whiskers: either Fig is a liar, or all of the cats in my row are liars. Maybe both.",
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
     "table": "ZmY="
    }
   },
   {
    "name": "Fig",
    "color": "grey",
    "row": 1,
    "column": 1,
    "text": "Purr for Biscuit, hiss for Quill: Biscuit is honest, Quill is a liar.",
    "hidden": false,
    "secret": null,
    "mentions": [
     1,
     15
    ],
    "clue": {
     "cats": [
      1,
      5,
      15
     ],
     "table": "nA=="
    }
   },
   {
    "name": "Gnocchi",
    "color": "siamese",
    "row": 1,
    "column": 2,
    "text": "There's a mix among the tabby cats: some honest, some liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     7,
     13,
     14
    ],
    "clue": {
     "cats": [
      6,
      7,
      13,
      14
     ],
     "table": "VpU="
    }
   },
   {
    "name": "Hobbes",
    "color": "tabby",
    "row": 1,
    "column": 3,
    "text": "All but one of the white cats are honest.",
    "hidden": false,
    "secret": null,
    "mentions": [
     1,
     4,
     9
    ],
    "clue": {
     "cats": [
      1,
      4,
      7,
      9
     ],
     "table": "luE="
    }
   },
   {
    "name": "Indigo",
    "color": "siamese",
    "row": 2,
    "column": 0,
    "text": "*chirps at a bird outside*",
    "hidden": true,
    "secret": "*points a paw at Dusty* The only liar among the corner cats.",
    "mentions": [],
    "clue": null
   },
   {
    "name": "Jasper",
    "color": "white",
    "row": 2,
    "column": 1,
    "text": "Every one of Ember, Lentil and me is a liar. Hiss!",
    "hidden": false,
    "secret": null,
    "mentions": [
     4,
     10
    ],
    "clue": {
     "cats": [
      4,
      9,
      10
     ],
     "table": "TA=="
    }
   },
   {
    "name": "Lentil",
    "color": "grey",
    "row": 2,
    "column": 2,
    "text": "Hiss. Among Fig, Otis and me you'll find both: at least one liar and at least one honest cat.",
    "hidden": false,
    "secret": null,
    "mentions": [
     5,
     13
    ],
    "clue": {
     "cats": [
      5,
      10,
      13
     ],
     "table": "sg=="
    }
   },
   {
    "name": "Marble",
    "color": "black",
    "row": 2,
    "column": 3,
    "text": "All of my neighbors are honest. Purrfectly so.",
    "hidden": false,
    "secret": null,
    "mentions": [
     7,
     10,
     15
    ],
    "clue": {
     "cats": [
      7,
      10,
      11,
      15
     ],
     "table": "4fA="
    }
   },
   {
    "name": "Noodle",
    "color": "siamese",
    "row": 3,
    "column": 0,
    "text": "Everyone among the cats to my right is a liar, except Quill, who is honest.",
    "hidden": false,
    "secret": null,
    "mentions": [
     13,
     14,
     15
    ],
    "clue": {
     "cats": [
      12,
      13,
      14,
      15
     ],
     "table": "aqo="
    }
   },
   {
    "name": "Otis",
    "color": "tabby",
    "row": 3,
    "column": 1,
    "text": "Same story for all of Indigo, Jasper and me: all honest, or all liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     8,
     9
    ],
    "clue": {
     "cats": [
      8,
      9,
      13
     ],
     "table": "cQ=="
    }
   },
   {
    "name": "Pickles",
    "color": "tabby",
    "row": 3,
    "column": 2,
    "text": "*leans in* Coco whispered to me: \"Meow. Biscuit and Lentil are the same: both honest, or both liars.\"",
    "hidden": false,
    "secret": null,
    "mentions": [
     1,
     2,
     10
    ],
    "clue": {
     "cats": [
      1,
      2,
      10,
      14
     ],
     "table": "af8="
    }
   },
   {
    "name": "Quill",
    "color": "black",
    "row": 3,
    "column": 3,
    "text": "All of Hobbes, Lentil and me are the same: all honest, or all liars.",
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
      15
     ],
     "table": "cQ=="
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
   false,
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
  "rows": 4,
  "cols": 4,
  "seed": 1005,
  "level": "hard",
  "given": null,
  "cats": [
   {
    "name": "Angus",
    "color": "ginger",
    "row": 0,
    "column": 0,
    "text": "Either Udon is a liar, or all of Gnocchi, Udon and me are honest (or both).",
    "hidden": false,
    "secret": null,
    "mentions": [
     3,
     15
    ],
    "clue": {
     "cats": [
      0,
      3,
      15
     ],
     "table": "Ww=="
    }
   },
   {
    "name": "Cricket",
    "color": "black",
    "row": 0,
    "column": 1,
    "text": "I counted with my paws: exactly 2 of the corner cats are liars.",
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
      1,
      3,
      12,
      15
     ],
     "table": "bJaWyQ=="
    }
   },
   {
    "name": "Dusty",
    "color": "tuxedo",
    "row": 0,
    "column": 2,
    "text": "Among Gnocchi, Mochi and me, there are both honest cats and liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     3,
     9
    ],
    "clue": {
     "cats": [
      2,
      3,
      9
     ],
     "table": "1A=="
    }
   },
   {
    "name": "Gnocchi",
    "color": "tuxedo",
    "row": 0,
    "column": 3,
    "text": "*purrs* All of the cats in my row are from the same litter: all honest, or all liars.",
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
     "table": "AX8="
    }
   },
   {
    "name": "Hobbes",
    "color": "black",
    "row": 1,
    "column": 0,
    "text": "Sprout and I are both liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     13
    ],
    "clue": {
     "cats": [
      4,
      13
     ],
     "table": "Ag=="
    }
   },
   {
    "name": "Iggy",
    "color": "tuxedo",
    "row": 1,
    "column": 1,
    "text": "*swishes tail* Among the cats in row 3, there's at least one liar and at least one honest cat.",
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
      5,
      8,
      9,
      10,
      11
     ],
     "table": "VlVVlQ=="
    }
   },
   {
    "name": "Jellybean",
    "color": "white",
    "row": 1,
    "column": 2,
    "text": "Gnocchi and Nugget are both liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     3,
     10
    ],
    "clue": {
     "cats": [
      3,
      6,
      10
     ],
     "table": "bA=="
    }
   },
   {
    "name": "Kiwi",
    "color": "siamese",
    "row": 1,
    "column": 3,
    "text": "Among Cricket, Tater and me, there are both honest cats and liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     1,
     14
    ],
    "clue": {
     "cats": [
      1,
      7,
      14
     ],
     "table": "sg=="
    }
   },
   {
    "name": "Loki",
    "color": "ginger",
    "row": 2,
    "column": 0,
    "text": "*chirps at a bird outside*",
    "hidden": true,
    "secret": "All but one of the tuxedo cats are honest.",
    "mentions": [],
    "clue": null
   },
   {
    "name": "Mochi",
    "color": "siamese",
    "row": 2,
    "column": 1,
    "text": "Mrrp. What Udon meant was: \"Either Nugget is a liar, or all of the cats above me are liars (or both).\"",
    "hidden": false,
    "secret": null,
    "mentions": [
     3,
     7,
     10,
     11,
     15
    ],
    "clue": {
     "cats": [
      3,
      7,
      9,
      10,
      11,
      15
     ],
     "table": "8P/4///w9/A="
    }
   },
   {
    "name": "Nugget",
    "color": "white",
    "row": 2,
    "column": 2,
    "text": "Meow. All of Angus, Queenie and me are liars, every last one.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     12
    ],
    "clue": {
     "cats": [
      0,
      10,
      12
     ],
     "table": "TA=="
    }
   },
   {
    "name": "Olive",
    "color": "black",
    "row": 2,
    "column": 3,
    "text": "Nugget is the only liar among my neighbors.",
    "hidden": false,
    "secret": null,
    "mentions": [
     7,
     10,
     15
    ],
    "clue": {
     "cats": [
      7,
      10,
      11,
      15
     ],
     "table": "tPA="
    }
   },
   {
    "name": "Queenie",
    "color": "tuxedo",
    "row": 3,
    "column": 0,
    "text": "Mrrp. Among Angus, Cricket and me, only Angus is a liar.",
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
      12
     ],
     "table": "8g=="
    }
   },
   {
    "name": "Sprout",
    "color": "white",
    "row": 3,
    "column": 1,
    "text": "Mrrp. Among the cats in row 3, only Nugget is a liar.",
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
      13
     ],
     "table": "EADv/w=="
    }
   },
   {
    "name": "Tater",
    "color": "black",
    "row": 3,
    "column": 2,
    "text": "*leans in* Loki whispered to me: \"Hiss! Every single one of the cats to my right is a liar.\"",
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
     "table": "qmr//w=="
    }
   },
   {
    "name": "Udon",
    "color": "white",
    "row": 3,
    "column": 3,
    "text": "Mrrrow mrrp mew.",
    "hidden": true,
    "secret": "Either Nugget is a liar, or all of the cats above me are liars (or both).",
    "mentions": [],
    "clue": null
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
  "seed": 1006,
  "level": "hard",
  "given": null,
  "cats": [
   {
    "name": "Angus",
    "color": "white",
    "row": 0,
    "column": 0,
    "text": "Rusty is a liar. That cat's a fur-aud.",
    "hidden": false,
    "secret": null,
    "mentions": [
     13
    ],
    "clue": {
     "cats": [
      0,
      13
     ],
     "table": "Bg=="
    }
   },
   {
    "name": "Biscuit",
    "color": "black",
    "row": 0,
    "column": 1,
    "text": "Only one bad kitty: exactly one of the tabby cats is a liar.",
    "hidden": false,
    "secret": null,
    "mentions": [
     3,
     5,
     9,
     14
    ],
    "clue": {
     "cats": [
      1,
      3,
      5,
      9,
      14
     ],
     "table": "lqmpqg=="
    }
   },
   {
    "name": "Dumpling",
    "color": "ginger",
    "row": 0,
    "column": 2,
    "text": "Mark my whiskers: either Hobbes is a liar, or all of the cats in the middle are liars. Maybe both.",
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
      2,
      5,
      6,
      9,
      10
     ],
     "table": "ZmZmZg=="
    }
   },
   {
    "name": "Echo",
    "color": "tabby",
    "row": 0,
    "column": 3,
    "text": "Exactly 4 of the cats on the edges are liars.",
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
     "table": "AH+Al4CXaOmAl2jpaOkW/oCXaOlo6Rb+aOkW/hb+Af+Al2jpaOkW/mjpFv4W/gH/aOkW/hb+Af8W/gH/Af8A/4CXaOlo6Rb+aOkW/hb+Af9o6Rb+Fv4B/xb+Af8B/wD/aOkW/hb+Af8W/gH/Af8A/xb+Af8B/wD/Af8A/wD/AP+Al2jpaOkW/mjpFv4W/gH/aOkW/hb+Af8W/gH/Af8A/2jpFv4W/gH/Fv4B/wH/AP8W/gH/Af8A/wH/AP8A/wD/aOkW/hb+Af8W/gH/Af8A/xb+Af8B/wD/Af8A/wD/AP8W/gH/Af8A/wH/AP8A/wD/Af8A/wD/AP8A/wD/AP8A/4CXaOlo6Rb+aOkW/hb+Af9o6Rb+Fv4B/xb+Af8B/wD/aOkW/hb+Af8W/gH/Af8A/xb+Af8B/wD/Af8A/wD/AP9o6Rb+Fv4B/xb+Af8B/wD/Fv4B/wH/AP8B/wD/AP8A/xb+Af8B/wD/Af8A/wD/AP8B/wD/AP8A/wD/AP8A/wD/aOkW/hb+Af8W/gH/Af8A/xb+Af8B/wD/Af8A/wD/AP8W/gH/Af8A/wH/AP8A/wD/Af8A/wD/AP8A/wD/AP8A/xb+Af8B/wD/Af8A/wD/AP8B/wD/AP8A/wD/AP8A/wD/Af8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8="
    }
   },
   {
    "name": "Felix",
    "color": "calico",
    "row": 1,
    "column": 0,
    "text": "Either Loki is a liar, or all the cats are liars (or both).",
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
     "table": "AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA/////wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAAAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP////8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAAAAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD/////AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAAAAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA/////wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAAAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP////8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAAAAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD/////AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAAAAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA/////wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAAAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP////8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAAAAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD/////AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAAAAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA/////wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAAAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP////8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAAAAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD/////AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAAAAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA/////wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAAAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP////8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAAAAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD/////AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAAAAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA/////wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAAAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP////8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAAAAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD/////AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAAAAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA/////wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAAAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP////8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAAAAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD/////AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAAAAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA/////wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAAAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP////8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAAAAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD/////AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAAAAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA/////wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAAAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP////8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAAAAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD/////AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAAAAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA/////wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAAAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP////8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAAAAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD/////AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAAAAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA/////wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAAAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP////8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAAAAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD/////AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAAAAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA/////wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAAAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP////8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAAAAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD/////AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAAAAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA/////wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAAAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP////8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAAAAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD/////AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAAAAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA/////wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAAAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP////8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAAAAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD/////AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAAAAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA/////wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAAAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP////8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAAAAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD/////AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAAAAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA/////wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAAAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP////8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAAAAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD/////AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAAAAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA/////wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAAAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP////8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAAAAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD/////AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAAAAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA/////wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAAAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP////8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAAAAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD/////AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAAAAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA/////wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAAAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP////8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAAAAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD/////AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAAAAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA/////wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAAAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP////8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAAAAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD/////AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAAAAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA/////wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAAAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP////8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAAAAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD/////AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAAAAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA/////wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAAAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP////8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAAAAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD/////AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAAAAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA/////wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAAAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP////8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAAAAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD/////AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAAAAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA/////wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAAAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP////8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAAAAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD/////AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAAAAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA/////wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAAAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP////8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAAAAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD/////AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAAAAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA/////wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAAAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP////8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAAAAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD/////AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAAAAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA/////wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAAAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP////8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAAAAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD/////AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAAAAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA/////wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAAAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP////8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAAAAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD/////AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAAAAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA/////wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAAAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP////8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAAAAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD/////AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAAAAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA/////wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAAAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP////8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAAAAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD/////AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAAAAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA/////wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAAAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP////8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAAAAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD/////AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAAAAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA/////wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAAAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP////8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAAAAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD/////AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAAAAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA/////wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAAAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP////8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAAAAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD/////AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAAAAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA/////wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAAAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP////8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAAAAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD/////AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAAAAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA/////wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAAAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP////8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAAAAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD/////AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAAAAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA/////wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAAAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP////8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAAAAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD/////AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAAAAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA/////wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAAAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP////8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAAAAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD/////AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAAAAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA/////wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAAAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP////8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAAAAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD/////AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAAAAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA/////wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAAAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP////8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAAAAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD/////AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAAAAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA/////wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAAAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP////8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAAAAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD/////AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAAAAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA/////wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAAAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP////8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAAAAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD/////AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAAAAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA/////wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAAAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP////8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAAAAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD/////AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAAAAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA/////wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAAAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP////8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAA="
    }
   },
   {
    "name": "Hobbes",
    "color": "tabby",
    "row": 1,
    "column": 1,
    "text": "Mango is the only liar among the cats below me.",
    "hidden": false,
    "secret": null,
    "mentions": [
     9,
     13
    ],
    "clue": {
     "cats": [
      5,
      9,
      13
     ],
     "table": "pg=="
    }
   },
   {
    "name": "Jasper",
    "color": "white",
    "row": 1,
    "column": 2,
    "text": "Mrrp. Either Loki is honest, or all of the black cats are honest. Maybe both.",
    "hidden": false,
    "secret": null,
    "mentions": [
     1,
     7,
     8,
     13
    ],
    "clue": {
     "cats": [
      1,
      6,
      7,
      8,
      13
     ],
     "table": "M8kzzA=="
    }
   },
   {
    "name": "Kiwi",
    "color": "black",
    "row": 1,
    "column": 3,
    "text": "*purrs* All of the cats in row 3 are from the same litter: all honest, or all liars.",
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
      7,
      8,
      9,
      10,
      11
     ],
     "table": "qaqqag=="
    }
   },
   {
    "name": "Loki",
    "color": "ginger",
    "row": 2,
    "column": 0,
    "text": "Mrrp. One of Echo and Saffron is honest, maybe both.",
    "hidden": false,
    "secret": null,
    "mentions": [
     3,
     14
    ],
    "clue": {
     "cats": [
      3,
      8,
      14
     ],
     "table": "kw=="
    }
   },
   {
    "name": "Mango",
    "color": "tabby",
    "row": 2,
    "column": 1,
    "text": "Mrrp? Mew mew mrrrow!",
    "hidden": true,
    "secret": "Hiss. Among the cats above me you'll find both: at least one liar and at least one honest cat.",
    "mentions": [],
    "clue": null
   },
   {
    "name": "Noodle",
    "color": "calico",
    "row": 2,
    "column": 2,
    "text": "Either Echo is a liar, or Dumpling is honest (or both).",
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
      10
     ],
     "table": "LQ=="
    }
   },
   {
    "name": "Otis",
    "color": "ginger",
    "row": 2,
    "column": 3,
    "text": "Mrrp. What Mango meant was: \"Hiss. Among the cats above me you'll find both: at least one liar and at least one honest cat.\"",
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
      11
     ],
     "table": "lv8="
    }
   },
   {
    "name": "Quill",
    "color": "white",
    "row": 3,
    "column": 0,
    "text": "Hiss! Every single one of Felix, Kiwi and me is a liar.",
    "hidden": false,
    "secret": null,
    "mentions": [
     4,
     7
    ],
    "clue": {
     "cats": [
      4,
      7,
      12
     ],
     "table": "cA=="
    }
   },
   {
    "name": "Rusty",
    "color": "black",
    "row": 3,
    "column": 1,
    "text": "Either I'm a liar, or Echo is honest (or both).",
    "hidden": false,
    "secret": null,
    "mentions": [
     3
    ],
    "clue": {
     "cats": [
      3,
      13
     ],
     "table": "AQ=="
    }
   },
   {
    "name": "Saffron",
    "color": "tabby",
    "row": 3,
    "column": 2,
    "text": "Hiss. Ursa is a liar through and through.",
    "hidden": false,
    "secret": null,
    "mentions": [
     15
    ],
    "clue": {
     "cats": [
      14,
      15
     ],
     "table": "Bg=="
    }
   },
   {
    "name": "Ursa",
    "color": "calico",
    "row": 3,
    "column": 3,
    "text": "There's at least one liar among my neighbors.",
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
     "table": "Hg=="
    }
   }
  ],
  "liars": [
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
   false,
   false,
   true,
   false,
   false,
   true
  ]
 },
 {
  "rows": 4,
  "cols": 4,
  "seed": 50003,
  "level": "hard",
  "given": null,
  "cats": [
   {
    "name": "Angus",
    "color": "tuxedo",
    "row": 0,
    "column": 0,
    "text": "*chirps at a bird outside*",
    "hidden": true,
    "secret": "Same story for all of the cats in the middle: all honest, or all liars.",
    "mentions": [],
    "clue": null
   },
   {
    "name": "Biscuit",
    "color": "white",
    "row": 0,
    "column": 1,
    "text": "Mark my whiskers: either Echo is a liar, or all of the cats to my right are liars. Maybe both.",
    "hidden": false,
    "secret": null,
    "mentions": [
     2,
     3,
     4
    ],
    "clue": {
     "cats": [
      1,
      2,
      3,
      4
     ],
     "table": "alU="
    }
   },
   {
    "name": "Cricket",
    "color": "white",
    "row": 0,
    "column": 2,
    "text": "Mrrp? Mew mew mrrrow!",
    "hidden": true,
    "secret": "*flicks ears* Exactly 2 of Dumpling, Marble and me are liars.",
    "mentions": [],
    "clue": null
   },
   {
    "name": "Dumpling",
    "color": "tabby",
    "row": 0,
    "column": 3,
    "text": "Meow. All of Angus, Hazel and me are liars, every last one.",
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
     "table": "TA=="
    }
   },
   {
    "name": "Echo",
    "color": "ginger",
    "row": 1,
    "column": 0,
    "text": "Mrrp. Either Dumpling is honest, or all of the cats in my row are liars. Maybe both.",
    "hidden": false,
    "secret": null,
    "mentions": [
     3,
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
     "table": "mZmZGQ=="
    }
   },
   {
    "name": "Fudge",
    "color": "siamese",
    "row": 1,
    "column": 1,
    "text": "Every one of Hazel, Nimbus and me is honest. Purr.",
    "hidden": false,
    "secret": null,
    "mentions": [
     6,
     12
    ],
    "clue": {
     "cats": [
      5,
      6,
      12
     ],
     "table": "qw=="
    }
   },
   {
    "name": "Hazel",
    "color": "tuxedo",
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
    "name": "Inky",
    "color": "tuxedo",
    "row": 1,
    "column": 3,
    "text": "Either Angus is a liar, or all of the cats in the middle are honest (or both).",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     5,
     6,
     9,
     10
    ],
    "clue": {
     "cats": [
      0,
      5,
      6,
      7,
      9,
      10
     ],
     "table": "q1SqVapVqlU="
    }
   },
   {
    "name": "Juniper",
    "color": "ginger",
    "row": 2,
    "column": 0,
    "text": "Same story for all of the cats above me: all honest, or all liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     4
    ],
    "clue": {
     "cats": [
      0,
      4,
      8
     ],
     "table": "aQ=="
    }
   },
   {
    "name": "Kismet",
    "color": "tabby",
    "row": 2,
    "column": 1,
    "text": "At least 2 of the cats in my column are liars. Fur real.",
    "hidden": false,
    "secret": null,
    "mentions": [
     1,
     5,
     13
    ],
    "clue": {
     "cats": [
      1,
      5,
      9,
      13
     ],
     "table": "GA4="
    }
   },
   {
    "name": "Lentil",
    "color": "siamese",
    "row": 2,
    "column": 2,
    "text": "*leans in* Angus whispered to me: \"Same story for all of the cats in the middle: all honest, or all liars.\"",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     5,
     6,
     9
    ],
    "clue": {
     "cats": [
      0,
      5,
      6,
      9,
      10
     ],
     "table": "qar//w=="
    }
   },
   {
    "name": "Marble",
    "color": "ginger",
    "row": 2,
    "column": 3,
    "text": "*thinks hard* Either Pepper is a liar, or all of the ginger cats are liars, or both.",
    "hidden": false,
    "secret": null,
    "mentions": [
     4,
     8,
     14
    ],
    "clue": {
     "cats": [
      4,
      8,
      11,
      14
     ],
     "table": "cA8="
    }
   },
   {
    "name": "Nimbus",
    "color": "siamese",
    "row": 3,
    "column": 0,
    "text": "Mrrp. Exactly 11 cats can be trusted in total, the rest are liars.",
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
     "table": "AAAAgACAgGgAgIBogGhoFgCAgGiAaGgWgGhoFmgWFgEAgIBogGhoFoBoaBZoFhYBgGhoFmgWFgFoFhYBFgEBAACAgGiAaGgWgGhoFmgWFgGAaGgWaBYWAWgWFgEWAQEAgGhoFmgWFgFoFhYBFgEBAGgWFgEWAQEAFgEBAAEAAAAAgIBogGhoFoBoaBZoFhYBgGhoFmgWFgFoFhYBFgEBAIBoaBZoFhYBaBYWARYBAQBoFhYBFgEBABYBAQABAAAAgGhoFmgWFgFoFhYBFgEBAGgWFgEWAQEAFgEBAAEAAABoFhYBFgEBABYBAQABAAAAFgEBAAEAAAABAAAAAAAAAACAgGiAaGgWgGhoFmgWFgGAaGgWaBYWAWgWFgEWAQEAgGhoFmgWFgFoFhYBFgEBAGgWFgEWAQEAFgEBAAEAAACAaGgWaBYWAWgWFgEWAQEAaBYWARYBAQAWAQEAAQAAAGgWFgEWAQEAFgEBAAEAAAAWAQEAAQAAAAEAAAAAAAAAgGhoFmgWFgFoFhYBFgEBAGgWFgEWAQEAFgEBAAEAAABoFhYBFgEBABYBAQABAAAAFgEBAAEAAAABAAAAAAAAAGgWFgEWAQEAFgEBAAEAAAAWAQEAAQAAAAEAAAAAAAAAFgEBAAEAAAABAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAD/f3+Xf5eX6X+Xl+mX6en+f5eX6Zfp6f6X6en+6f7+/3+Xl+mX6en+l+np/un+/v+X6en+6f7+/+n+/v/+////f5eX6Zfp6f6X6en+6f7+/5fp6f7p/v7/6f7+//7///+X6en+6f7+/+n+/v/+////6f7+//7////+/////////3+Xl+mX6en+l+np/un+/v+X6en+6f7+/+n+/v/+////l+np/un+/v/p/v7//v///+n+/v/+/////v////////+X6en+6f7+/+n+/v/+////6f7+//7////+/////////+n+/v/+/////v/////////+////////////////////f5eX6Zfp6f6X6en+6f7+/5fp6f7p/v7/6f7+//7///+X6en+6f7+/+n+/v/+////6f7+//7////+/////////5fp6f7p/v7/6f7+//7////p/v7//v////7/////////6f7+//7////+//////////7///////////////////+X6en+6f7+/+n+/v/+////6f7+//7////+/////////+n+/v/+/////v/////////+////////////////////6f7+//7////+//////////7////////////////////+/////////////////////////////////////////wCAgGiAaGgWgGhoFmgWFgGAaGgWaBYWAWgWFgEWAQEAgGhoFmgWFgFoFhYBFgEBAGgWFgEWAQEAFgEBAAEAAACAaGgWaBYWAWgWFgEWAQEAaBYWARYBAQAWAQEAAQAAAGgWFgEWAQEAFgEBAAEAAAAWAQEAAQAAAAEAAAAAAAAAgGhoFmgWFgFoFhYBFgEBAGgWFgEWAQEAFgEBAAEAAABoFhYBFgEBABYBAQABAAAAFgEBAAEAAAABAAAAAAAAAGgWFgEWAQEAFgEBAAEAAAAWAQEAAQAAAAEAAAAAAAAAFgEBAAEAAAABAAAAAAAAAAEAAAAAAAAAAAAAAAAAAACAaGgWaBYWAWgWFgEWAQEAaBYWARYBAQAWAQEAAQAAAGgWFgEWAQEAFgEBAAEAAAAWAQEAAQAAAAEAAAAAAAAAaBYWARYBAQAWAQEAAQAAABYBAQABAAAAAQAAAAAAAAAWAQEAAQAAAAEAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAGgWFgEWAQEAFgEBAAEAAAAWAQEAAQAAAAEAAAAAAAAAFgEBAAEAAAABAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAWAQEAAQAAAAEAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf5eX6Zfp6f6X6en+6f7+/5fp6f7p/v7/6f7+//7///+X6en+6f7+/+n+/v/+////6f7+//7////+/////////5fp6f7p/v7/6f7+//7////p/v7//v////7/////////6f7+//7////+//////////7///////////////////+X6en+6f7+/+n+/v/+////6f7+//7////+/////////+n+/v/+/////v/////////+////////////////////6f7+//7////+//////////7////////////////////+/////////////////////////////////////////5fp6f7p/v7/6f7+//7////p/v7//v////7/////////6f7+//7////+//////////7////////////////////p/v7//v////7//////////v////////////////////7/////////////////////////////////////////6f7+//7////+//////////7////////////////////+//////////////////////////////////////////7///////////////////////////////////////////////////////////////////////////////////8AgIBogGhoFoBoaBZoFhYBgGhoFmgWFgFoFhYBFgEBAIBoaBZoFhYBaBYWARYBAQBoFhYBFgEBABYBAQABAAAAgGhoFmgWFgFoFhYBFgEBAGgWFgEWAQEAFgEBAAEAAABoFhYBFgEBABYBAQABAAAAFgEBAAEAAAABAAAAAAAAAIBoaBZoFhYBaBYWARYBAQBoFhYBFgEBABYBAQABAAAAaBYWARYBAQAWAQEAAQAAABYBAQABAAAAAQAAAAAAAABoFhYBFgEBABYBAQABAAAAFgEBAAEAAAABAAAAAAAAABYBAQABAAAAAQAAAAAAAAABAAAAAAAAAAAAAAAAAAAAgGhoFmgWFgFoFhYBFgEBAGgWFgEWAQEAFgEBAAEAAABoFhYBFgEBABYBAQABAAAAFgEBAAEAAAABAAAAAAAAAGgWFgEWAQEAFgEBAAEAAAAWAQEAAQAAAAEAAAAAAAAAFgEBAAEAAAABAAAAAAAAAAEAAAAAAAAAAAAAAAAAAABoFhYBFgEBABYBAQABAAAAFgEBAAEAAAABAAAAAAAAABYBAQABAAAAAQAAAAAAAAABAAAAAAAAAAAAAAAAAAAAFgEBAAEAAAABAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH+Xl+mX6en+l+np/un+/v+X6en+6f7+/+n+/v/+////l+np/un+/v/p/v7//v///+n+/v/+/////v////////+X6en+6f7+/+n+/v/+////6f7+//7////+/////////+n+/v/+/////v/////////+////////////////////l+np/un+/v/p/v7//v///+n+/v/+/////v/////////p/v7//v////7//////////v///////////////////+n+/v/+/////v/////////+/////////////////////v////////////////////////////////////////+X6en+6f7+/+n+/v/+////6f7+//7////+/////////+n+/v/+/////v/////////+////////////////////6f7+//7////+//////////7////////////////////+/////////////////////////////////////////+n+/v/+/////v/////////+/////////////////////v/////////////////////////////////////////+////////////////////////////////////////////////////////////////////////////////////gGhoFmgWFgFoFhYBFgEBAGgWFgEWAQEAFgEBAAEAAABoFhYBFgEBABYBAQABAAAAFgEBAAEAAAABAAAAAAAAAGgWFgEWAQEAFgEBAAEAAAAWAQEAAQAAAAEAAAAAAAAAFgEBAAEAAAABAAAAAAAAAAEAAAAAAAAAAAAAAAAAAABoFhYBFgEBABYBAQABAAAAFgEBAAEAAAABAAAAAAAAABYBAQABAAAAAQAAAAAAAAABAAAAAAAAAAAAAAAAAAAAFgEBAAEAAAABAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGgWFgEWAQEAFgEBAAEAAAAWAQEAAQAAAAEAAAAAAAAAFgEBAAEAAAABAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAWAQEAAQAAAAEAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFgEBAAEAAAABAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACX6en+6f7+/+n+/v/+////6f7+//7////+/////////+n+/v/+/////v/////////+////////////////////6f7+//7////+//////////7////////////////////+/////////////////////////////////////////+n+/v/+/////v/////////+/////////////////////v/////////////////////////////////////////+////////////////////////////////////////////////////////////////////////////////////6f7+//7////+//////////7////////////////////+//////////////////////////////////////////7////////////////////////////////////////////////////////////////////////////////////+/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wCAgGiAaGgWgGhoFmgWFgGAaGgWaBYWAWgWFgEWAQEAgGhoFmgWFgFoFhYBFgEBAGgWFgEWAQEAFgEBAAEAAACAaGgWaBYWAWgWFgEWAQEAaBYWARYBAQAWAQEAAQAAAGgWFgEWAQEAFgEBAAEAAAAWAQEAAQAAAAEAAAAAAAAAgGhoFmgWFgFoFhYBFgEBAGgWFgEWAQEAFgEBAAEAAABoFhYBFgEBABYBAQABAAAAFgEBAAEAAAABAAAAAAAAAGgWFgEWAQEAFgEBAAEAAAAWAQEAAQAAAAEAAAAAAAAAFgEBAAEAAAABAAAAAAAAAAEAAAAAAAAAAAAAAAAAAACAaGgWaBYWAWgWFgEWAQEAaBYWARYBAQAWAQEAAQAAAGgWFgEWAQEAFgEBAAEAAAAWAQEAAQAAAAEAAAAAAAAAaBYWARYBAQAWAQEAAQAAABYBAQABAAAAAQAAAAAAAAAWAQEAAQAAAAEAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAGgWFgEWAQEAFgEBAAEAAAAWAQEAAQAAAAEAAAAAAAAAFgEBAAEAAAABAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAWAQEAAQAAAAEAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf5eX6Zfp6f6X6en+6f7+/5fp6f7p/v7/6f7+//7///+X6en+6f7+/+n+/v/+////6f7+//7////+/////////5fp6f7p/v7/6f7+//7////p/v7//v////7/////////6f7+//7////+//////////7///////////////////+X6en+6f7+/+n+/v/+////6f7+//7////+/////////+n+/v/+/////v/////////+////////////////////6f7+//7////+//////////7////////////////////+/////////////////////////////////////////5fp6f7p/v7/6f7+//7////p/v7//v////7/////////6f7+//7////+//////////7////////////////////p/v7//v////7//////////v////////////////////7/////////////////////////////////////////6f7+//7////+//////////7////////////////////+//////////////////////////////////////////7///////////////////////////////////////////////////////////////////////////////////+AaGgWaBYWAWgWFgEWAQEAaBYWARYBAQAWAQEAAQAAAGgWFgEWAQEAFgEBAAEAAAAWAQEAAQAAAAEAAAAAAAAAaBYWARYBAQAWAQEAAQAAABYBAQABAAAAAQAAAAAAAAAWAQEAAQAAAAEAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAGgWFgEWAQEAFgEBAAEAAAAWAQEAAQAAAAEAAAAAAAAAFgEBAAEAAAABAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAWAQEAAQAAAAEAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAaBYWARYBAQAWAQEAAQAAABYBAQABAAAAAQAAAAAAAAAWAQEAAQAAAAEAAAAAAAAAAQAAAAAAAAAAAAAAAAAAABYBAQABAAAAAQAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAWAQEAAQAAAAEAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJfp6f7p/v7/6f7+//7////p/v7//v////7/////////6f7+//7////+//////////7////////////////////p/v7//v////7//////////v////////////////////7/////////////////////////////////////////6f7+//7////+//////////7////////////////////+//////////////////////////////////////////7////////////////////////////////////////////////////////////////////////////////////p/v7//v////7//////////v////////////////////7//////////////////////////////////////////v////////////////////////////////////////////////////////////////////////////////////7/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////gGhoFmgWFgFoFhYBFgEBAGgWFgEWAQEAFgEBAAEAAABoFhYBFgEBABYBAQABAAAAFgEBAAEAAAABAAAAAAAAAGgWFgEWAQEAFgEBAAEAAAAWAQEAAQAAAAEAAAAAAAAAFgEBAAEAAAABAAAAAAAAAAEAAAAAAAAAAAAAAAAAAABoFhYBFgEBABYBAQABAAAAFgEBAAEAAAABAAAAAAAAABYBAQABAAAAAQAAAAAAAAABAAAAAAAAAAAAAAAAAAAAFgEBAAEAAAABAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGgWFgEWAQEAFgEBAAEAAAAWAQEAAQAAAAEAAAAAAAAAFgEBAAEAAAABAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAWAQEAAQAAAAEAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFgEBAAEAAAABAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACX6en+6f7+/+n+/v/+////6f7+//7////+/////////+n+/v/+/////v/////////+////////////////////6f7+//7////+//////////7////////////////////+/////////////////////////////////////////+n+/v/+/////v/////////+/////////////////////v/////////////////////////////////////////+////////////////////////////////////////////////////////////////////////////////////6f7+//7////+//////////7////////////////////+//////////////////////////////////////////7////////////////////////////////////////////////////////////////////////////////////+/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////2gWFgEWAQEAFgEBAAEAAAAWAQEAAQAAAAEAAAAAAAAAFgEBAAEAAAABAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAWAQEAAQAAAAEAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFgEBAAEAAAABAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAWAQEAAQAAAAEAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA6f7+//7////+//////////7////////////////////+//////////////////////////////////////////7////////////////////////////////////////////////////////////////////////////////////+//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////7///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8="
    }
   },
   {
    "name": "Olive",
    "color": "white",
    "row": 3,
    "column": 1,
    "text": "Hiss. Among the corner cats you'll find both: at least one liar and at least one honest cat.",
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
      12,
      13,
      15
     ],
     "table": "/gF/gA=="
    }
   },
   {
    "name": "Pepper",
    "color": "tuxedo",
    "row": 3,
    "column": 2,
    "text": "Mrrp. What Cricket meant was: \"*flicks ears* Exactly 2 of Dumpling, Marble and me are liars.\"",
    "hidden": false,
    "secret": null,
    "mentions": [
     2,
     3,
     11
    ],
    "clue": {
     "cats": [
      2,
      3,
      11,
      14
     ],
     "table": "wv8="
    }
   },
   {
    "name": "Tofu",
    "color": "white",
    "row": 3,
    "column": 3,
    "text": "There's at least one liar among the corner cats.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     3,
     12
    ],
    "clue": {
     "cats": [
      0,
      3,
      12,
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
   true,
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
   false
  ]
 },
 {
  "rows": 4,
  "cols": 4,
  "seed": 70023,
  "level": "hard",
  "given": null,
  "cats": [
   {
    "name": "Ash",
    "color": "white",
    "row": 0,
    "column": 0,
    "text": "Exactly one of Pepper and me is a liar.",
    "hidden": false,
    "secret": null,
    "mentions": [
     9
    ],
    "clue": {
     "cats": [
      0,
      9
     ],
     "table": "DA=="
    }
   },
   {
    "name": "Coco",
    "color": "ginger",
    "row": 0,
    "column": 1,
    "text": "*thinks hard* Either Pepper is honest, or all of the cats on the edges are honest, or both.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     2,
     3,
     4,
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
      7,
      8,
      9,
      11,
      12,
      13,
      14,
      15
     ],
     "table": "MzMzMzMzMzMzMzMzMzMzM83MzMzMzMzMzMzMzMzMzMwzMzMzMzMzMzMzMzMzMzMzzMzMzMzMzMzMzMzMzMzMzDMzMzMzMzMzMzMzMzMzMzPMzMzMzMzMzMzMzMzMzMzMMzMzMzMzMzMzMzMzMzMzM8zMzMzMzMzMzMzMzMzMzMwzMzMzMzMzMzMzMzMzMzMzzMzMzMzMzMzMzMzMzMzMzDMzMzMzMzMzMzMzMzMzMzPMzMzMzMzMzMzMzMzMzMzMMzMzMzMzMzMzMzMzMzMzM8zMzMzMzMzMzMzMzMzMzMwzMzMzMzMzMzMzMzMzMzMzzMzMzMzMzMzMzMzMzMzMzDMzMzMzMzMzMzMzMzMzMzPMzMzMzMzMzMzMzMzMzMzMMzMzMzMzMzMzMzMzMzMzM8zMzMzMzMzMzMzMzMzMzMwzMzMzMzMzMzMzMzMzMzMzzMzMzMzMzMzMzMzMzMzMzDMzMzMzMzMzMzMzMzMzMzPMzMzMzMzMzMzMzMzMzMzMMzMzMzMzMzMzMzMzMzMzM8zMzMzMzMzMzMzMzMzMzMwzMzMzMzMzMzMzMzMzMzMzzMzMzMzMzMzMzMzMzMzMzDMzMzMzMzMzMzMzMzMzMzPMzMzMzMzMzMzMzMzMzMzMMzMzMzMzMzMzMzMzMzMzM8zMzMzMzMzMzMzMzMzMzMwzMzMzMzMzMzMzMzMzMzMzzMzMzMzMzMzMzMzMzMzMzDMzMzMzMzMzMzMzMzMzMzPMzMzMzMzMzMzMzMzMzMzMMzMzMzMzMzMzMzMzMzMzM8zMzMzMzMzMzMzMzMzMzMwzMzMzMzMzMzMzMzMzMzMzzMzMzMzMzMzMzMzMzMzMzDMzMzMzMzMzMzMzMzMzMzPMzMzMzMzMzMzMzMzMzMzMMzMzMzMzMzMzMzMzMzMzM8zMzMzMzMzMzMzMzMzMzMwzMzMzMzMzMzMzMzMzMzMzzMzMzMzMzMzMzMzMzMzMzDMzMzMzMzMzMzMzMzMzMzPMzMzMzMzMzMzMzMzMzMzMMzMzMzMzMzMzMzMzMzMzM8zMzMzMzMzMzMzMzMzMzMwzMzMzMzMzMzMzMzMzMzMzzMzMzMzMzMzMzMzMzMzMzDMzMzMzMzMzMzMzMzMzMzPMzMzMzMzMzMzMzMzMzMzMMzMzMzMzMzMzMzMzMzMzM8zMzMzMzMzMzMzMzMzMzMwzMzMzMzMzMzMzMzMzMzMzzMzMzMzMzMzMzMzMzMzMzDMzMzMzMzMzMzMzMzMzMzPMzMzMzMzMzMzMzMzMzMzMMzMzMzMzMzMzMzMzMzMzM8zMzMzMzMzMzMzMzMzMzMwzMzMzMzMzMzMzMzMzMzMzzMzMzMzMzMzMzMzMzMzMzA=="
    }
   },
   {
    "name": "Dusty",
    "color": "grey",
    "row": 0,
    "column": 2,
    "text": "I speak Pepper. Translated, they said: \"Either Indigo is a liar, or all of the cats to my right are liars (or both).\"",
    "hidden": false,
    "secret": null,
    "mentions": [
     5,
     9,
     10,
     11
    ],
    "clue": {
     "cats": [
      2,
      5,
      9,
      10,
      11
     ],
     "table": "vr6+rw=="
    }
   },
   {
    "name": "Goose",
    "color": "black",
    "row": 0,
    "column": 3,
    "text": "*points a paw at Coco* The only liar among the cats in my row.",
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
     "table": "BP8="
    }
   },
   {
    "name": "Hobbes",
    "color": "siamese",
    "row": 1,
    "column": 0,
    "text": "*points a paw at Jasper* The only liar among the cats to my right.",
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
     "table": "mqo="
    }
   },
   {
    "name": "Indigo",
    "color": "black",
    "row": 1,
    "column": 1,
    "text": "Purr... at least one of the black cats is a liar.",
    "hidden": false,
    "secret": null,
    "mentions": [
     3,
     11,
     14
    ],
    "clue": {
     "cats": [
      3,
      5,
      11,
      14
     ],
     "table": "MjM="
    }
   },
   {
    "name": "Jasper",
    "color": "white",
    "row": 1,
    "column": 2,
    "text": "Mark my whiskers: either Saffron is a liar, or all of the cats in row 3 are honest. Maybe both.",
    "hidden": false,
    "secret": null,
    "mentions": [
     8,
     9,
     10,
     11,
     12
    ],
    "clue": {
     "cats": [
      6,
      8,
      9,
      10,
      11,
      12
     ],
     "table": "qaqqqlVVVVU="
    }
   },
   {
    "name": "Kismet",
    "color": "grey",
    "row": 1,
    "column": 3,
    "text": "Mrrp. Either Jasper is a liar, or all of the cats in column 1 are liars. Maybe both.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     4,
     6,
     8,
     12
    ],
    "clue": {
     "cats": [
      0,
      4,
      6,
      7,
      8,
      12
     ],
     "table": "8A/wD/AP+Ac="
    }
   },
   {
    "name": "Lentil",
    "color": "white",
    "row": 2,
    "column": 0,
    "text": "Everyone among the cats in column 3 is a liar, except Dusty, who is honest.",
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
      8,
      10,
      14
     ],
     "table": "8PDwtA=="
    }
   },
   {
    "name": "Pepper",
    "color": "siamese",
    "row": 2,
    "column": 1,
    "text": "*incomprehensible meowing*",
    "hidden": true,
    "secret": "Either Indigo is a liar, or all of the cats to my right are liars (or both).",
    "mentions": [],
    "clue": null
   },
   {
    "name": "Queenie",
    "color": "white",
    "row": 2,
    "column": 2,
    "text": "All of Goose, Vinny and me are honest. Purrfectly so.",
    "hidden": false,
    "secret": null,
    "mentions": [
     3,
     15
    ],
    "clue": {
     "cats": [
      3,
      10,
      15
     ],
     "table": "zQ=="
    }
   },
   {
    "name": "Ravioli",
    "color": "black",
    "row": 2,
    "column": 3,
    "text": "Mark my whiskers: either Lentil is honest, or all of the cats in the middle are honest. Maybe both.",
    "hidden": false,
    "secret": null,
    "mentions": [
     5,
     6,
     8,
     9,
     10
    ],
    "clue": {
     "cats": [
      5,
      6,
      8,
      9,
      10,
      11
     ],
     "table": "Hw8PD+Dw8PA="
    }
   },
   {
    "name": "Saffron",
    "color": "siamese",
    "row": 3,
    "column": 0,
    "text": "Mrrp. Among the cats to my right, only Udon is a liar.",
    "hidden": false,
    "secret": null,
    "mentions": [
     13,
     14,
     15
    ],
    "clue": {
     "cats": [
      12,
      13,
      14,
      15
     ],
     "table": "mqo="
    }
   },
   {
    "name": "Truffle",
    "color": "ginger",
    "row": 3,
    "column": 1,
    "text": "Either Jasper is a liar, or Dusty is honest (or both).",
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
      13
     ],
     "table": "LQ=="
    }
   },
   {
    "name": "Udon",
    "color": "black",
    "row": 3,
    "column": 2,
    "text": "Mrrp. Whatever one of Lentil, Pepper and me is, the rest are too.",
    "hidden": false,
    "secret": null,
    "mentions": [
     8,
     9
    ],
    "clue": {
     "cats": [
      8,
      9,
      14
     ],
     "table": "cQ=="
    }
   },
   {
    "name": "Vinny",
    "color": "siamese",
    "row": 3,
    "column": 3,
    "text": "Mrrp. Either Queenie is honest, or all of Goose, Saffron and me are honest. Maybe both.",
    "hidden": false,
    "secret": null,
    "mentions": [
     3,
     10,
     12
    ],
    "clue": {
     "cats": [
      3,
      10,
      12,
      15
     ],
     "table": "N8w="
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
   false,
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
  "seed": 1001,
  "level": "tricky",
  "given": null,
  "cats": [
   {
    "name": "Ash",
    "color": "grey",
    "row": 0,
    "column": 0,
    "text": "Among the black cats, there are both honest cats and liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     8,
     9
    ],
    "clue": {
     "cats": [
      0,
      8,
      9
     ],
     "table": "lg=="
    }
   },
   {
    "name": "Coco",
    "color": "tabby",
    "row": 0,
    "column": 1,
    "text": "Mrrp. Among the grey cats, only Iggy is a liar.",
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
     "table": "nA=="
    }
   },
   {
    "name": "Dusty",
    "color": "calico",
    "row": 0,
    "column": 2,
    "text": "Either Jellybean is honest, or all of Fudge, Kettle and me are honest (or both).",
    "hidden": false,
    "secret": null,
    "mentions": [
     4,
     8,
     9
    ],
    "clue": {
     "cats": [
      2,
      4,
      8,
      9
     ],
     "table": "taU="
    }
   },
   {
    "name": "Ember",
    "color": "tuxedo",
    "row": 0,
    "column": 3,
    "text": "Mrow. Exactly one of the corner cats is a liar.",
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
     "table": "2s0="
    }
   },
   {
    "name": "Fudge",
    "color": "tuxedo",
    "row": 1,
    "column": 0,
    "text": "I heard Mochi say: \"There's a mix among the cats in row 2: some honest, some liars.\"",
    "hidden": false,
    "secret": null,
    "mentions": [
     5,
     6,
     7,
     10
    ],
    "clue": {
     "cats": [
      4,
      5,
      6,
      7,
      10
     ],
     "table": "/v+rqg=="
    }
   },
   {
    "name": "Gnocchi",
    "color": "tabby",
    "row": 1,
    "column": 1,
    "text": "Jellybean and Kettle are both honest, fur real.",
    "hidden": false,
    "secret": null,
    "mentions": [
     8,
     9
    ],
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
    "name": "Hobbes",
    "color": "calico",
    "row": 1,
    "column": 2,
    "text": "Meow. Among the tuxedo cats, only Fudge is honest.",
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
    "name": "Iggy",
    "color": "grey",
    "row": 1,
    "column": 3,
    "text": "*purrs* All of the cats in my column are from the same litter: all honest, or all liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     3,
     11,
     15
    ],
    "clue": {
     "cats": [
      3,
      7,
      11,
      15
     ],
     "table": "zUw="
    }
   },
   {
    "name": "Jellybean",
    "color": "black",
    "row": 2,
    "column": 0,
    "text": "Every one of the cats in the middle is honest. Purr.",
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
     "table": "4fDw8A=="
    }
   },
   {
    "name": "Kettle",
    "color": "black",
    "row": 2,
    "column": 1,
    "text": "Everyone among the cats in my column is honest, except Coco, who is a liar.",
    "hidden": false,
    "secret": null,
    "mentions": [
     1,
     5,
     13
    ],
    "clue": {
     "cats": [
      1,
      5,
      9,
      13
     ],
     "table": "8vA="
    }
   },
   {
    "name": "Mochi",
    "color": "calico",
    "row": 2,
    "column": 2,
    "text": "*chirps at a bird outside*",
    "hidden": true,
    "secret": "There's a mix among the cats in row 2: some honest, some liars.",
    "mentions": [],
    "clue": null
   },
   {
    "name": "Noodle",
    "color": "tabby",
    "row": 2,
    "column": 3,
    "text": "Same story for all of Dusty, Olive and me: all honest, or all liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     2,
     12
    ],
    "clue": {
     "cats": [
      2,
      11,
      12
     ],
     "table": "TQ=="
    }
   },
   {
    "name": "Olive",
    "color": "siamese",
    "row": 3,
    "column": 0,
    "text": "*thinks hard* Either Iggy is a liar, or all of the calico cats are honest, or both.",
    "hidden": false,
    "secret": null,
    "mentions": [
     2,
     6,
     7,
     10
    ],
    "clue": {
     "cats": [
      2,
      6,
      7,
      10,
      12
     ],
     "table": "8fAODw=="
    }
   },
   {
    "name": "Pickles",
    "color": "white",
    "row": 3,
    "column": 1,
    "text": "*purrs* All of the white cats are from the same litter: all honest, or all liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     15
    ],
    "clue": {
     "cats": [
      13,
      15
     ],
     "table": "Aw=="
    }
   },
   {
    "name": "Queenie",
    "color": "siamese",
    "row": 3,
    "column": 2,
    "text": "Mrrp. Either Sushi is a liar, or all of Kettle, Olive and me are liars. Maybe both.",
    "hidden": false,
    "secret": null,
    "mentions": [
     9,
     12,
     15
    ],
    "clue": {
     "cats": [
      9,
      12,
      14,
      15
     ],
     "table": "cA8="
    }
   },
   {
    "name": "Sushi",
    "color": "white",
    "row": 3,
    "column": 3,
    "text": "Noodle is pawsitively honest.",
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
     "table": "CQ=="
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
   false,
   true,
   false,
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
  "seed": 1008,
  "level": "tricky",
  "given": null,
  "cats": [
   {
    "name": "Apricot",
    "color": "black",
    "row": 0,
    "column": 0,
    "text": "Hazel is as honest as they come. Purr.",
    "hidden": false,
    "secret": null,
    "mentions": [
     6
    ],
    "clue": {
     "cats": [
      0,
      6
     ],
     "table": "CQ=="
    }
   },
   {
    "name": "Bagel",
    "color": "ginger",
    "row": 0,
    "column": 1,
    "text": "*points a paw at Coco* The only liar among Apricot, Coco and me.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     2
    ],
    "clue": {
     "cats": [
      0,
      1,
      2
     ],
     "table": "3A=="
    }
   },
   {
    "name": "Coco",
    "color": "calico",
    "row": 0,
    "column": 2,
    "text": "Inky is honest, fur real.",
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
     "table": "CQ=="
    }
   },
   {
    "name": "Echo",
    "color": "white",
    "row": 0,
    "column": 3,
    "text": "Mrrp. Either Bagel is a liar, or all of the corner cats are liars. Maybe both.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     1,
     12,
     15
    ],
    "clue": {
     "cats": [
      0,
      1,
      3,
      12,
      15
     ],
     "table": "PDw8HA=="
    }
   },
   {
    "name": "Felix",
    "color": "ginger",
    "row": 1,
    "column": 0,
    "text": "Every one of my neighbors is honest. Purr.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     5,
     8
    ],
    "clue": {
     "cats": [
      0,
      4,
      5,
      8
     ],
     "table": "ycw="
    }
   },
   {
    "name": "Gnocchi",
    "color": "white",
    "row": 1,
    "column": 1,
    "text": "Bagel is the only liar among my neighbors.",
    "hidden": false,
    "secret": null,
    "mentions": [
     1,
     4,
     6,
     9
    ],
    "clue": {
     "cats": [
      1,
      4,
      5,
      6,
      9
     ],
     "table": "0vDw8A=="
    }
   },
   {
    "name": "Hazel",
    "color": "grey",
    "row": 1,
    "column": 2,
    "text": "*thinks hard* Either Apricot is a liar, or all of the cats in my row are honest, or both.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     4,
     5,
     7
    ],
    "clue": {
     "cats": [
      0,
      4,
      5,
      6,
      7
     ],
     "table": "q1WqVQ=="
    }
   },
   {
    "name": "Inky",
    "color": "white",
    "row": 1,
    "column": 3,
    "text": "Hiss. Among the cats in column 3 you'll find both: at least one liar and at least one honest cat.",
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
     "table": "Hg8Phw=="
    }
   },
   {
    "name": "Jasper",
    "color": "grey",
    "row": 2,
    "column": 0,
    "text": "Mrrp! All of the cats in row 2 are honest, I'd bet my nine lives on it.",
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
      4,
      5,
      6,
      7,
      8
     ],
     "table": "AQD+/w=="
    }
   },
   {
    "name": "Oreo",
    "color": "ginger",
    "row": 2,
    "column": 1,
    "text": "Either Echo is honest, or all the cats are liars (or both).",
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
     "table": "/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AAD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP//AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8AAP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A//8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wAA/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD//wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AAD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP//AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8AAP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A//8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wAA/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD//wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AAD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP//AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8AAP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A//8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wAA/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD//wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AAD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP//AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8AAP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A//8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wAA/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD//wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AAD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP//AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8AAP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A//8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wAA/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD//wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AAD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP//AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8AAP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A//8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wAA/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD//wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AAD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP//AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8AAP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A//8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wAA/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD//wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AAD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP//AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8AAP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A//8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wAA/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD//wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AAD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP//AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8AAP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A//8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wAA/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD//wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AAD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP//AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8AAP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A//8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wAA/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD//wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AAD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP//AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8AAP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A//8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wAA/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD//wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AAD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP//AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8AAP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A//8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wAA/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD//wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AAD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP//AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8AAP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A//8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wAA/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD//wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AAD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP//AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8AAP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A//8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wAA/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD//wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AAD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP//AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8AAP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A//8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wAA/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD//wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AAD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP//AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8AAP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A//8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wAA/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD//wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AAD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP//AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8AAP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A//8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wAA/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD//wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AAD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP//AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8AAP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A//8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wAA/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD//wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AAD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP//AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8AAP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A//8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wAA/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD//wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AAD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP//AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8AAP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A//8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wAA/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD//wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AAD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP//AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8AAP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A//8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wAA/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD//wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AAD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AH8="
    }
   },
   {
    "name": "Rolo",
    "color": "white",
    "row": 2,
    "column": 2,
    "text": "Either Whiskers is a liar, or Gnocchi is honest (or both).",
    "hidden": false,
    "secret": null,
    "mentions": [
     5,
     15
    ],
    "clue": {
     "cats": [
      5,
      10,
      15
     ],
     "table": "OQ=="
    }
   },
   {
    "name": "Sushi",
    "color": "calico",
    "row": 2,
    "column": 3,
    "text": "Mrrp. Either Hazel is a liar, or all of the black cats are liars. Maybe both.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     6,
     15
    ],
    "clue": {
     "cats": [
      0,
      6,
      11,
      15
     ],
     "table": "PB4="
    }
   },
   {
    "name": "Tofu",
    "color": "calico",
    "row": 3,
    "column": 0,
    "text": "Meow. Among my neighbors, only Jasper is honest.",
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
    "name": "Umber",
    "color": "grey",
    "row": 3,
    "column": 1,
    "text": "Among the cats in row 2, there are both honest cats and liars.",
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
      4,
      5,
      6,
      7,
      13
     ],
     "table": "/n8BgA=="
    }
   },
   {
    "name": "Velvet",
    "color": "calico",
    "row": 3,
    "column": 2,
    "text": "*nods at Oreo* The only honest cat among the ginger cats.",
    "hidden": false,
    "secret": null,
    "mentions": [
     1,
     4,
     9
    ],
    "clue": {
     "cats": [
      1,
      4,
      9,
      14
     ],
     "table": "CPc="
    }
   },
   {
    "name": "Whiskers",
    "color": "black",
    "row": 3,
    "column": 3,
    "text": "All of Inky, Velvet and me are liars. Every whisker in the bunch is crooked.",
    "hidden": false,
    "secret": null,
    "mentions": [
     7,
     14
    ],
    "clue": {
     "cats": [
      7,
      14,
      15
     ],
     "table": "cA=="
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
  "seed": 1010,
  "level": "tricky",
  "given": null,
  "cats": [
   {
    "name": "Apricot",
    "color": "tabby",
    "row": 0,
    "column": 0,
    "text": "Mrrp. Either Clover is a liar, or Ember is honest. Maybe both.",
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
     "table": "ZQ=="
    }
   },
   {
    "name": "Biscuit",
    "color": "grey",
    "row": 0,
    "column": 1,
    "text": "I speak Clover. Translated, they said: \"Apricot is the only liar among the corner cats.\"",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     2,
     3,
     12,
     15
    ],
    "clue": {
     "cats": [
      0,
      1,
      2,
      3,
      12,
      15
     ],
     "table": "3vz8/Pz8/Pw="
    }
   },
   {
    "name": "Clover",
    "color": "grey",
    "row": 0,
    "column": 2,
    "text": "*chirps at a bird outside*",
    "hidden": true,
    "secret": "Apricot is the only liar among the corner cats.",
    "mentions": [],
    "clue": null
   },
   {
    "name": "Dumpling",
    "color": "calico",
    "row": 0,
    "column": 3,
    "text": "All of the cats below me are honest.",
    "hidden": false,
    "secret": null,
    "mentions": [
     7,
     11,
     15
    ],
    "clue": {
     "cats": [
      3,
      7,
      11,
      15
     ],
     "table": "qao="
    }
   },
   {
    "name": "Ember",
    "color": "calico",
    "row": 1,
    "column": 0,
    "text": "*twitches whiskers* Either Dumpling is a liar, or Apricot is honest, or both.",
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
      4
     ],
     "table": "LQ=="
    }
   },
   {
    "name": "Felix",
    "color": "tuxedo",
    "row": 1,
    "column": 1,
    "text": "*swishes tail* Among Apricot, Gizmo and me, there's at least one liar and at least one honest cat.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     6
    ],
    "clue": {
     "cats": [
      0,
      5,
      6
     ],
     "table": "sg=="
    }
   },
   {
    "name": "Gizmo",
    "color": "calico",
    "row": 1,
    "column": 2,
    "text": "*thinks hard* Either Hobbes is honest, or all of the grey cats are liars, or both.",
    "hidden": false,
    "secret": null,
    "mentions": [
     1,
     2,
     7,
     14,
     15
    ],
    "clue": {
     "cats": [
      1,
      2,
      6,
      7,
      14,
      15
     ],
     "table": "D/AP8A/wD3g="
    }
   },
   {
    "name": "Hobbes",
    "color": "tuxedo",
    "row": 1,
    "column": 3,
    "text": "*thinks hard* Either Ember is honest, or all of Biscuit, Clover and me are honest, or both.",
    "hidden": false,
    "secret": null,
    "mentions": [
     1,
     2,
     4
    ],
    "clue": {
     "cats": [
      1,
      2,
      4,
      7
     ],
     "table": "H/A="
    }
   },
   {
    "name": "Iggy",
    "color": "tuxedo",
    "row": 2,
    "column": 0,
    "text": "Trust Ember over Apricot: Ember is honest and Apricot is a liar.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     4
    ],
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
    "name": "Jellybean",
    "color": "tabby",
    "row": 2,
    "column": 1,
    "text": "Mrrp. Whatever one of the cats in my row is, the rest are too.",
    "hidden": false,
    "secret": null,
    "mentions": [
     8,
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
     "table": "zUw="
    }
   },
   {
    "name": "Nugget",
    "color": "tabby",
    "row": 2,
    "column": 2,
    "text": "*flicks ears* Exactly 3 of the cats in column 1 are liars.",
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
      8,
      10,
      12
     ],
     "table": "gH9olw=="
    }
   },
   {
    "name": "Olive",
    "color": "white",
    "row": 2,
    "column": 3,
    "text": "Meow. Among the cats to my left, only Nugget is honest.",
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
     "table": "CPc="
    }
   },
   {
    "name": "Pickles",
    "color": "white",
    "row": 3,
    "column": 0,
    "text": "There's a mix among Gizmo, Rolo and me: some honest, some liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     6,
     14
    ],
    "clue": {
     "cats": [
      6,
      12,
      14
     ],
     "table": "sg=="
    }
   },
   {
    "name": "Quill",
    "color": "calico",
    "row": 3,
    "column": 1,
    "text": "Rolo is the only liar among the cats to my right.",
    "hidden": false,
    "secret": null,
    "mentions": [
     14,
     15
    ],
    "clue": {
     "cats": [
      13,
      14,
      15
     ],
     "table": "pg=="
    }
   },
   {
    "name": "Rolo",
    "color": "grey",
    "row": 3,
    "column": 2,
    "text": "Mrrp. Either Sprout is a liar, or all of Dumpling, Pickles and me are liars. Maybe both.",
    "hidden": false,
    "secret": null,
    "mentions": [
     3,
     12,
     15
    ],
    "clue": {
     "cats": [
      3,
      12,
      14,
      15
     ],
     "table": "cA8="
    }
   },
   {
    "name": "Sprout",
    "color": "grey",
    "row": 3,
    "column": 3,
    "text": "*sighs* I'm the only honest cat among Jellybean, Rolo and me. The rest are liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     9,
     14
    ],
    "clue": {
     "cats": [
      9,
      14,
      15
     ],
     "table": "+A=="
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
   false,
   true,
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
  "seed": 50001,
  "level": "tricky",
  "given": null,
  "cats": [
   {
    "name": "Bean",
    "color": "calico",
    "row": 0,
    "column": 0,
    "text": "Meow. Among my neighbors, only Cricket is honest.",
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
     "table": "mg=="
    }
   },
   {
    "name": "Cricket",
    "color": "grey",
    "row": 0,
    "column": 1,
    "text": "All of the cats to my right are honest. Purrfectly so.",
    "hidden": false,
    "secret": null,
    "mentions": [
     2,
     3
    ],
    "clue": {
     "cats": [
      1,
      2,
      3
     ],
     "table": "qQ=="
    }
   },
   {
    "name": "Dumpling",
    "color": "calico",
    "row": 0,
    "column": 2,
    "text": "Mark my whiskers: either Ursa is a liar, or all of the cats in my row are honest. Maybe both.",
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
    "name": "Felix",
    "color": "calico",
    "row": 0,
    "column": 3,
    "text": "Everyone among Goose, Quincy and me is honest, except Goose, who is a liar.",
    "hidden": false,
    "secret": null,
    "mentions": [
     4,
     12
    ],
    "clue": {
     "cats": [
      3,
      4,
      12
     ],
     "table": "rg=="
    }
   },
   {
    "name": "Goose",
    "color": "black",
    "row": 1,
    "column": 0,
    "text": "Hiss. Among the cats on the edges, I'm the only liar.",
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
     "table": "AAD+/wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8="
    }
   },
   {
    "name": "Hobbes",
    "color": "grey",
    "row": 1,
    "column": 1,
    "text": "I'm the only liar of all the cats.",
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
     "table": "AAAAAP7///8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8="
    }
   },
   {
    "name": "Juniper",
    "color": "siamese",
    "row": 1,
    "column": 2,
    "text": "Among the calico cats, there are both honest cats and liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     2,
     3,
     15
    ],
    "clue": {
     "cats": [
      0,
      2,
      3,
      6,
      15
     ],
     "table": "/gF/gA=="
    }
   },
   {
    "name": "Kettle",
    "color": "black",
    "row": 1,
    "column": 3,
    "text": "Hiss! Hobbes and Juniper are liars, both of them.",
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
      7
     ],
     "table": "eA=="
    }
   },
   {
    "name": "Luna",
    "color": "black",
    "row": 2,
    "column": 0,
    "text": "*arches back* Goose and Hobbes are both liars.",
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
      8
     ],
     "table": "eA=="
    }
   },
   {
    "name": "Mango",
    "color": "siamese",
    "row": 2,
    "column": 1,
    "text": "Exactly 1 of the grey cats can be trusted.",
    "hidden": false,
    "secret": null,
    "mentions": [
     1,
     5,
     14
    ],
    "clue": {
     "cats": [
      1,
      5,
      9,
      14
     ],
     "table": "eJY="
    }
   },
   {
    "name": "Noodle",
    "color": "siamese",
    "row": 2,
    "column": 2,
    "text": "Mrrp. Whatever one of the cats in row 4 is, the rest are too.",
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
      10,
      12,
      13,
      14,
      15
     ],
     "table": "qaqqag=="
    }
   },
   {
    "name": "Paprika",
    "color": "white",
    "row": 2,
    "column": 3,
    "text": "Mark my whiskers: either Cricket is honest, or all of Felix, Luna and me are honest. Maybe both.",
    "hidden": false,
    "secret": null,
    "mentions": [
     1,
     3,
     8
    ],
    "clue": {
     "cats": [
      1,
      3,
      8,
      11
     ],
     "table": "V6o="
    }
   },
   {
    "name": "Quincy",
    "color": "white",
    "row": 3,
    "column": 0,
    "text": "*nods at Cricket* The only honest cat among the grey cats.",
    "hidden": false,
    "secret": null,
    "mentions": [
     1,
     5,
     14
    ],
    "clue": {
     "cats": [
      1,
      5,
      12,
      14
     ],
     "table": "8LQ="
    }
   },
   {
    "name": "Ravioli",
    "color": "black",
    "row": 3,
    "column": 1,
    "text": "*narrows eyes* At least one of Goose and Noodle is a liar.",
    "hidden": false,
    "secret": null,
    "mentions": [
     4,
     10
    ],
    "clue": {
     "cats": [
      4,
      10,
      13
     ],
     "table": "Hg=="
    }
   },
   {
    "name": "Tater",
    "color": "grey",
    "row": 3,
    "column": 2,
    "text": "Mark my whiskers: either Noodle is honest, or all of Hobbes, Ursa and me are liars. Maybe both.",
    "hidden": false,
    "secret": null,
    "mentions": [
     5,
     10,
     15
    ],
    "clue": {
     "cats": [
      5,
      10,
      14,
      15
     ],
     "table": "w0M="
    }
   },
   {
    "name": "Ursa",
    "color": "calico",
    "row": 3,
    "column": 3,
    "text": "*twitches tail* Exactly one of the black cats is a liar.",
    "hidden": false,
    "secret": null,
    "mentions": [
     4,
     7,
     8,
     13
    ],
    "clue": {
     "cats": [
      4,
      7,
      8,
      13,
      15
     ],
     "table": "FgHp/g=="
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
  "seed": 70000,
  "level": "tricky",
  "given": null,
  "cats": [
   {
    "name": "Ash",
    "color": "black",
    "row": 0,
    "column": 0,
    "text": "*thinks hard* Either Honey is a liar, or all of the cats in my column are honest, or both.",
    "hidden": false,
    "secret": null,
    "mentions": [
     4,
     7,
     8,
     12
    ],
    "clue": {
     "cats": [
      0,
      4,
      7,
      8,
      12
     ],
     "table": "W1paWg=="
    }
   },
   {
    "name": "Biscuit",
    "color": "grey",
    "row": 0,
    "column": 1,
    "text": "I'm the only honest cat among Jellybean, Lentil and me.",
    "hidden": false,
    "secret": null,
    "mentions": [
     9,
     11
    ],
    "clue": {
     "cats": [
      1,
      9,
      11
     ],
     "table": "6g=="
    }
   },
   {
    "name": "Cricket",
    "color": "calico",
    "row": 0,
    "column": 2,
    "text": "Mrrp. Whatever one of Espresso, Noodle and me is, the rest are too.",
    "hidden": false,
    "secret": null,
    "mentions": [
     4,
     13
    ],
    "clue": {
     "cats": [
      2,
      4,
      13
     ],
     "table": "Kw=="
    }
   },
   {
    "name": "Dumpling",
    "color": "siamese",
    "row": 0,
    "column": 3,
    "text": "Mrrp. At least one of Biscuit and Lentil is a liar. Maybe both.",
    "hidden": false,
    "secret": null,
    "mentions": [
     1,
     11
    ],
    "clue": {
     "cats": [
      1,
      3,
      11
     ],
     "table": "Ng=="
    }
   },
   {
    "name": "Espresso",
    "color": "white",
    "row": 1,
    "column": 0,
    "text": "Same story for all of the cats in row 1: all honest, or all liars.",
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
      4
     ],
     "table": "AYD+fw=="
    }
   },
   {
    "name": "Fudge",
    "color": "tuxedo",
    "row": 1,
    "column": 1,
    "text": "Purr. All of the cats in column 4 can be trusted, except exactly one.",
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
     "table": "lsnJzA=="
    }
   },
   {
    "name": "Gizmo",
    "color": "tuxedo",
    "row": 1,
    "column": 2,
    "text": "Mrrp. Among the cats in column 2, only Jellybean is a liar.",
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
      6,
      9,
      13
     ],
     "table": "8OHw8A=="
    }
   },
   {
    "name": "Honey",
    "color": "white",
    "row": 1,
    "column": 3,
    "text": "Either Kiwi is a liar, or Noodle is honest. Could be both.",
    "hidden": false,
    "secret": null,
    "mentions": [
     10,
     13
    ],
    "clue": {
     "cats": [
      7,
      10,
      13
     ],
     "table": "ZQ=="
    }
   },
   {
    "name": "Iggy",
    "color": "siamese",
    "row": 2,
    "column": 0,
    "text": "*thinks hard* Either Ash is a liar, or all of the cats in row 2 are honest, or both.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     4,
     5,
     6,
     7
    ],
    "clue": {
     "cats": [
      0,
      4,
      5,
      6,
      7,
      8
     ],
     "table": "q6qqqlRVVVU="
    }
   },
   {
    "name": "Jellybean",
    "color": "tuxedo",
    "row": 2,
    "column": 1,
    "text": "Same story for all of Ash, Gizmo and me: all honest, or all liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     6
    ],
    "clue": {
     "cats": [
      0,
      6,
      9
     ],
     "table": "cQ=="
    }
   },
   {
    "name": "Kiwi",
    "color": "calico",
    "row": 2,
    "column": 2,
    "text": "Lentil is the only liar among Lentil, Noodle and me.",
    "hidden": false,
    "secret": null,
    "mentions": [
     11,
     13
    ],
    "clue": {
     "cats": [
      10,
      11,
      13
     ],
     "table": "rg=="
    }
   },
   {
    "name": "Lentil",
    "color": "black",
    "row": 2,
    "column": 3,
    "text": "Either Biscuit is a liar, or all of Honey, Marble and me are honest (or both).",
    "hidden": false,
    "secret": null,
    "mentions": [
     1,
     7,
     12
    ],
    "clue": {
     "cats": [
      1,
      7,
      11,
      12
     ],
     "table": "W1o="
    }
   },
   {
    "name": "Marble",
    "color": "siamese",
    "row": 3,
    "column": 0,
    "text": "Whatever Fudge is, Quill is too.",
    "hidden": false,
    "secret": null,
    "mentions": [
     5,
     15
    ],
    "clue": {
     "cats": [
      5,
      12,
      15
     ],
     "table": "aQ=="
    }
   },
   {
    "name": "Noodle",
    "color": "grey",
    "row": 3,
    "column": 1,
    "text": "Among the cats in column 3, there are both honest cats and liars.",
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
      13,
      14
     ],
     "table": "/gF/gA=="
    }
   },
   {
    "name": "Oreo",
    "color": "siamese",
    "row": 3,
    "column": 2,
    "text": "Mark my whiskers: either Quill is a liar, or all of my neighbors are honest. Maybe both.",
    "hidden": false,
    "secret": null,
    "mentions": [
     10,
     13,
     15
    ],
    "clue": {
     "cats": [
      10,
      13,
      14,
      15
     ],
     "table": "4Q8="
    }
   },
   {
    "name": "Quill",
    "color": "calico",
    "row": 3,
    "column": 3,
    "text": "All but one of my neighbors are honest.",
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
     "table": "lg=="
    }
   }
  ],
  "liars": [
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
   true,
   false,
   false,
   false,
   false
  ]
 }
];
