// Made by export.py, don't edit by hand
const PUZZLES = [
 {
  "rows": 3,
  "cols": 3,
  "seed": 101,
  "level": "easy",
  "cats": [
   {
    "name": "Ash",
    "color": "siamese",
    "row": 0,
    "column": 0,
    "text": "Jasper is the only liar among Dumpling, Jasper and me.",
    "hidden": false,
    "secret": null,
    "mentions": [
     3,
     8
    ],
    "clue": {
     "cats": [
      0,
      3,
      8
     ],
     "table": "ug=="
    }
   },
   {
    "name": "Biscuit",
    "color": "siamese",
    "row": 0,
    "column": 1,
    "text": "There's a mix among the cats in row 2: some honest, some liars.",
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
    "name": "Coco",
    "color": "white",
    "row": 0,
    "column": 2,
    "text": "Only one bad kitty: exactly one of the cats in column 2 is a liar.",
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
     "table": "lsk="
    }
   },
   {
    "name": "Dumpling",
    "color": "white",
    "row": 1,
    "column": 0,
    "text": "Mrrp. Either Jasper is a liar, or all of the cats in row 3 are honest. Maybe both.",
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
     "table": "qVU="
    }
   },
   {
    "name": "Ember",
    "color": "siamese",
    "row": 1,
    "column": 1,
    "text": "*nods at Biscuit* The only honest cat among the siamese cats.",
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
      4
     ],
     "table": "0A=="
    }
   },
   {
    "name": "Fudge",
    "color": "white",
    "row": 1,
    "column": 2,
    "text": "Either Inky is honest, or all of Ash, Gnocchi and me are honest (or both).",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     6,
     7
    ],
    "clue": {
     "cats": [
      0,
      5,
      6,
      7
     ],
     "table": "M80="
    }
   },
   {
    "name": "Gnocchi",
    "color": "tabby",
    "row": 2,
    "column": 0,
    "text": "Hiss. I'm honest, Fudge is the liar here.",
    "hidden": false,
    "secret": null,
    "mentions": [
     5
    ],
    "clue": {
     "cats": [
      5,
      6
     ],
     "table": "Dg=="
    }
   },
   {
    "name": "Inky",
    "color": "tabby",
    "row": 2,
    "column": 1,
    "text": "*points a paw at Ember* The only liar among the siamese cats.",
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
     "table": "EO8="
    }
   },
   {
    "name": "Jasper",
    "color": "white",
    "row": 2,
    "column": 2,
    "text": "*nods at Inky* The only honest cat among the cats on the edges.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     1,
     2,
     3,
     5,
     6,
     7
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
     "table": "AAAAAAAAAAAAAAAAAAAAAP////////9///////////8="
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
  "rows": 3,
  "cols": 3,
  "seed": 102,
  "level": "easy",
  "cats": [
   {
    "name": "Biscuit",
    "color": "ginger",
    "row": 0,
    "column": 0,
    "text": "*purrs* All of the cats below me are from the same litter: all honest, or all liars.",
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
     "table": "aQ=="
    }
   },
   {
    "name": "Cricket",
    "color": "ginger",
    "row": 0,
    "column": 1,
    "text": "Mrrp. Either Fig is a liar, or all of the cats in column 3 are liars. Maybe both.",
    "hidden": false,
    "secret": null,
    "mentions": [
     2,
     4,
     5,
     8
    ],
    "clue": {
     "cats": [
      1,
      2,
      4,
      5,
      8
     ],
     "table": "WlpaVg=="
    }
   },
   {
    "name": "Doodle",
    "color": "tabby",
    "row": 0,
    "column": 2,
    "text": "Hiss. Among the cats in my row you'll find both: at least one liar and at least one honest cat.",
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
     "table": "jg=="
    }
   },
   {
    "name": "Ember",
    "color": "ginger",
    "row": 1,
    "column": 0,
    "text": "I speak Jasper. Translated, they said: \"All of Biscuit, Doodle and me are the same: all honest, or all liars.\"",
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
      3,
      8
     ],
     "table": "8fc="
    }
   },
   {
    "name": "Fig",
    "color": "black",
    "row": 1,
    "column": 1,
    "text": "Mrrp. Exactly 6 cats can be trusted in total, the rest are liars.",
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
     "table": "gGiX6WgW6f5oFun+FgH+/2gW6f4WAf7/FgH+/wEA//9oFun+FgH+/xYB/v8BAP//FgH+/wEA//8BAP//AAD//w=="
    }
   },
   {
    "name": "Gnocchi",
    "color": "calico",
    "row": 1,
    "column": 2,
    "text": "Meow. Either I'm a liar, or Hobbes is honest. Maybe both.",
    "hidden": false,
    "secret": null,
    "mentions": [
     6
    ],
    "clue": {
     "cats": [
      5,
      6
     ],
     "table": "AQ=="
    }
   },
   {
    "name": "Hobbes",
    "color": "black",
    "row": 2,
    "column": 0,
    "text": "Mrrp. Either Ember is honest, or all of Cricket, Iggy and me are honest. Maybe both.",
    "hidden": false,
    "secret": null,
    "mentions": [
     1,
     3,
     7
    ],
    "clue": {
     "cats": [
      1,
      3,
      6,
      7
     ],
     "table": "x8M="
    }
   },
   {
    "name": "Iggy",
    "color": "calico",
    "row": 2,
    "column": 1,
    "text": "Ask me, and I'd tell you Cricket is a liar.",
    "hidden": false,
    "secret": null,
    "mentions": [
     1
    ],
    "clue": {
     "cats": [
      1,
      7
     ],
     "table": "Cg=="
    }
   },
   {
    "name": "Jasper",
    "color": "tabby",
    "row": 2,
    "column": 2,
    "text": "*incomprehensible meowing*",
    "hidden": true,
    "secret": "All of Biscuit, Doodle and me are the same: all honest, or all liars.",
    "mentions": [],
    "clue": null
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
  "seed": 103,
  "level": "easy",
  "cats": [
   {
    "name": "Apricot",
    "color": "ginger",
    "row": 0,
    "column": 0,
    "text": "Mark my whiskers: either Kettle is a liar, or all of the cats in my column are honest. Maybe both.",
    "hidden": false,
    "secret": null,
    "mentions": [
     3,
     5,
     6
    ],
    "clue": {
     "cats": [
      0,
      3,
      5,
      6
     ],
     "table": "W1o="
    }
   },
   {
    "name": "Biscuit",
    "color": "calico",
    "row": 0,
    "column": 1,
    "text": "Jellybean is the only liar among my neighbors.",
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
    "name": "Fig",
    "color": "calico",
    "row": 0,
    "column": 2,
    "text": "Marble and Nimbus are from the same litter: both honest, or both liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     7,
     8
    ],
    "clue": {
     "cats": [
      2,
      7,
      8
     ],
     "table": "aQ=="
    }
   },
   {
    "name": "Goose",
    "color": "black",
    "row": 1,
    "column": 0,
    "text": "If you asked Loki, they'd say they're honest.",
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
     "table": "BQ=="
    }
   },
   {
    "name": "Jellybean",
    "color": "calico",
    "row": 1,
    "column": 1,
    "text": "Ask me, and I'd tell you Biscuit is honest.",
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
     "table": "BQ=="
    }
   },
   {
    "name": "Kettle",
    "color": "black",
    "row": 1,
    "column": 2,
    "text": "Mark my whiskers: either Apricot is honest, or all of the cats in my column are liars. Maybe both.",
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
      5,
      8
     ],
     "table": "pSU="
    }
   },
   {
    "name": "Loki",
    "color": "black",
    "row": 2,
    "column": 0,
    "text": "Hiss. Among my neighbors you'll find both: at least one liar and at least one honest cat.",
    "hidden": false,
    "secret": null,
    "mentions": [
     3,
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
    "name": "Marble",
    "color": "ginger",
    "row": 2,
    "column": 1,
    "text": "*purrs* All of the cats in my column are from the same litter: all honest, or all liars.",
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
     "table": "cQ=="
    }
   },
   {
    "name": "Nimbus",
    "color": "black",
    "row": 2,
    "column": 2,
    "text": "I'm the only honest cat among the cats in my column.",
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
   false,
   false,
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
  "rows": 3,
  "cols": 3,
  "seed": 104,
  "level": "easy",
  "cats": [
   {
    "name": "Angus",
    "color": "grey",
    "row": 0,
    "column": 0,
    "text": "*slow blinks* If you asked me about Dumpling, I'd say honest.",
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
     "table": "Aw=="
    }
   },
   {
    "name": "Bean",
    "color": "siamese",
    "row": 0,
    "column": 1,
    "text": "There's a mix among the tabby cats: some honest, some liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     2,
     8
    ],
    "clue": {
     "cats": [
      1,
      2,
      8
     ],
     "table": "lg=="
    }
   },
   {
    "name": "Cricket",
    "color": "tabby",
    "row": 0,
    "column": 2,
    "text": "Mrrp. Either Iggy is honest, or all of Goose, Iggy and me are liars. Maybe both.",
    "hidden": false,
    "secret": null,
    "mentions": [
     5,
     7
    ],
    "clue": {
     "cats": [
      2,
      5,
      7
     ],
     "table": "JQ=="
    }
   },
   {
    "name": "Dumpling",
    "color": "calico",
    "row": 1,
    "column": 0,
    "text": "Everyone among the corner cats is honest, except Cricket, who is a liar.",
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
     "table": "tPDw8A=="
    }
   },
   {
    "name": "Fig",
    "color": "siamese",
    "row": 1,
    "column": 1,
    "text": "*thinks hard* Either Iggy is honest, or all of the cats on the edges are liars, or both.",
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
     "table": "//8AAP//AAD//wAA//8AAAAA//8AAP//AAD//wAA/////wAA//8AAP//AAD//wAAAAD//wAA//8AAP//AID/fw=="
    }
   },
   {
    "name": "Goose",
    "color": "grey",
    "row": 1,
    "column": 2,
    "text": "Mrrp? Mew mew mrrrow!",
    "hidden": true,
    "secret": "Mrrp. If you asked me, I'd say Fig is a liar.",
    "mentions": [],
    "clue": null
   },
   {
    "name": "Honey",
    "color": "calico",
    "row": 2,
    "column": 0,
    "text": "I heard Goose say: \"Mrrp. If you asked me, I'd say Fig is a liar.\"",
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
     "table": "+g=="
    }
   },
   {
    "name": "Iggy",
    "color": "grey",
    "row": 2,
    "column": 1,
    "text": "Cricket would say I'm a liar.",
    "hidden": false,
    "secret": null,
    "mentions": [
     2
    ],
    "clue": {
     "cats": [
      2,
      7
     ],
     "table": "Cg=="
    }
   },
   {
    "name": "Jellybean",
    "color": "tabby",
    "row": 2,
    "column": 2,
    "text": "*swishes tail* Among Honey, Iggy and me, there's at least one liar and at least one honest cat.",
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
   false,
   false,
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
  "rows": 3,
  "cols": 3,
  "seed": 105,
  "level": "easy",
  "cats": [
   {
    "name": "Angus",
    "color": "black",
    "row": 0,
    "column": 0,
    "text": "Hiss. One of Dusty and Fig is a liar, maybe both.",
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
     "table": "Vg=="
    }
   },
   {
    "name": "Bean",
    "color": "grey",
    "row": 0,
    "column": 1,
    "text": "Hiss. Among the cats in my row you'll find both: at least one liar and at least one honest cat.",
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
     "table": "sg=="
    }
   },
   {
    "name": "Coco",
    "color": "black",
    "row": 0,
    "column": 2,
    "text": "Everyone among the cats in my column is a liar, except Fig, who is honest.",
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
     "table": "ig=="
    }
   },
   {
    "name": "Dusty",
    "color": "white",
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
    "name": "Ember",
    "color": "grey",
    "row": 1,
    "column": 1,
    "text": "Either Hazel is a liar, or all the cats are honest (or both).",
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
     "table": "AQD//wAA//8AAP//AAD/////AAD//wAA//8AAP//AAAAAP//AAD//wAA//8AAP////8AAP//AAD//wAA//8AAA=="
    }
   },
   {
    "name": "Fig",
    "color": "white",
    "row": 1,
    "column": 2,
    "text": "Mrrp. Either Angus is a liar, or all of the grey cats are honest. Maybe both.",
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
      5
     ],
     "table": "q1Q="
    }
   },
   {
    "name": "Gizmo",
    "color": "white",
    "row": 2,
    "column": 0,
    "text": "*swishes tail* Among the cats in column 3, there's at least one liar and at least one honest cat.",
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
     "table": "Hoc="
    }
   },
   {
    "name": "Hazel",
    "color": "white",
    "row": 2,
    "column": 1,
    "text": "All of Bean, Coco and me are liars.",
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
     "table": "cA=="
    }
   },
   {
    "name": "Inky",
    "color": "black",
    "row": 2,
    "column": 2,
    "text": "Purr. You can trust Bean and Gizmo, both of them.",
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
     "table": "4Q=="
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
   false
  ]
 },
 {
  "rows": 3,
  "cols": 3,
  "seed": 114,
  "level": "medium",
  "cats": [
   {
    "name": "Biscuit",
    "color": "tabby",
    "row": 0,
    "column": 0,
    "text": "Purr for Kettle, hiss for Fudge: Kettle is honest, Fudge is a liar.",
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
     "table": "pg=="
    }
   },
   {
    "name": "Cricket",
    "color": "calico",
    "row": 0,
    "column": 1,
    "text": "*twitches whiskers* Either Luna is a liar, or Marble is honest, or both.",
    "hidden": false,
    "secret": null,
    "mentions": [
     7,
     8
    ],
    "clue": {
     "cats": [
      1,
      7,
      8
     ],
     "table": "ZQ=="
    }
   },
   {
    "name": "Ember",
    "color": "white",
    "row": 0,
    "column": 2,
    "text": "Same story for all of the calico cats: all honest, or all liars.",
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
     "table": "aQ=="
    }
   },
   {
    "name": "Fudge",
    "color": "tuxedo",
    "row": 1,
    "column": 0,
    "text": "If you asked Biscuit, they'd say I'm honest.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0
    ],
    "clue": {
     "cats": [
      0,
      3
     ],
     "table": "BQ=="
    }
   },
   {
    "name": "Hazel",
    "color": "white",
    "row": 1,
    "column": 1,
    "text": "Mrrp. Either Biscuit is a liar, or all of the cats in column 3 are liars. Maybe both.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     2,
     5,
     8
    ],
    "clue": {
     "cats": [
      0,
      2,
      4,
      5,
      8
     ],
     "table": "WlpaHg=="
    }
   },
   {
    "name": "Jellybean",
    "color": "tuxedo",
    "row": 1,
    "column": 2,
    "text": "*thinks hard* Either Hazel is a liar, or all of the cats in my row are liars, or both.",
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
     "table": "PA=="
    }
   },
   {
    "name": "Kettle",
    "color": "calico",
    "row": 2,
    "column": 0,
    "text": "Mrrp. Among Cricket, Hazel and me, only Hazel is a liar.",
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
     "table": "9A=="
    }
   },
   {
    "name": "Luna",
    "color": "tabby",
    "row": 2,
    "column": 1,
    "text": "Hiss. Ember and Jellybean are opposites: exactly one of them is a liar.",
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
     "table": "lg=="
    }
   },
   {
    "name": "Marble",
    "color": "tuxedo",
    "row": 2,
    "column": 2,
    "text": "*swishes tail* Among the tabby cats, there's at least one liar and at least one honest cat.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     7
    ],
    "clue": {
     "cats": [
      0,
      7,
      8
     ],
     "table": "lg=="
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
  "seed": 124,
  "level": "medium",
  "cats": [
   {
    "name": "Angus",
    "color": "tabby",
    "row": 0,
    "column": 0,
    "text": "Mark my whiskers: either Gizmo is a liar, or all of the cats in column 3 are liars. Maybe both.",
    "hidden": false,
    "secret": null,
    "mentions": [
     2,
     3,
     5,
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
     "table": "WlpaVg=="
    }
   },
   {
    "name": "Coco",
    "color": "tabby",
    "row": 0,
    "column": 1,
    "text": "Mrrp. Whatever one of the cats in my column is, the rest are too.",
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
     "table": "Kw=="
    }
   },
   {
    "name": "Doodle",
    "color": "black",
    "row": 0,
    "column": 2,
    "text": "I heard Marble say: \"Mrrp. Whatever one of Luna, Noodle and me is, the rest are too.\"",
    "hidden": false,
    "secret": null,
    "mentions": [
     6,
     7,
     8
    ],
    "clue": {
     "cats": [
      2,
      6,
      7,
      8
     ],
     "table": "+7o="
    }
   },
   {
    "name": "Gizmo",
    "color": "calico",
    "row": 1,
    "column": 0,
    "text": "*sniffs around* Every cat here is honest.",
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
     "table": "Af8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/w=="
    }
   },
   {
    "name": "Inky",
    "color": "black",
    "row": 1,
    "column": 1,
    "text": "Only one bad kitty: exactly one of the cats in row 3 is a liar.",
    "hidden": false,
    "secret": null,
    "mentions": [
     6,
     7,
     8
    ],
    "clue": {
     "cats": [
      4,
      6,
      7,
      8
     ],
     "table": "lqk="
    }
   },
   {
    "name": "Kismet",
    "color": "grey",
    "row": 1,
    "column": 2,
    "text": "*thinks hard* Either Inky is honest, or all of the cats in my column are liars, or both.",
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
     "table": "w0M="
    }
   },
   {
    "name": "Luna",
    "color": "grey",
    "row": 2,
    "column": 0,
    "text": "Ask me, and I'd tell you Coco is honest.",
    "hidden": false,
    "secret": null,
    "mentions": [
     1
    ],
    "clue": {
     "cats": [
      1,
      6
     ],
     "table": "BQ=="
    }
   },
   {
    "name": "Marble",
    "color": "black",
    "row": 2,
    "column": 1,
    "text": "*incomprehensible meowing*",
    "hidden": true,
    "secret": "You can trust Luna. That's a purr-fact.",
    "mentions": [],
    "clue": null
   },
   {
    "name": "Noodle",
    "color": "calico",
    "row": 2,
    "column": 2,
    "text": "Mrrp. Among the cats above me, only Kismet is a liar.",
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
     "table": "tA=="
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
  "seed": 127,
  "level": "medium",
  "cats": [
   {
    "name": "Apricot",
    "color": "ginger",
    "row": 0,
    "column": 0,
    "text": "Mrrp. Whatever one of the cats in my column is, the rest are too.",
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
     "table": "Kw=="
    }
   },
   {
    "name": "Bean",
    "color": "ginger",
    "row": 0,
    "column": 1,
    "text": "All of Gnocchi, Lentil and me are honest. Purrfectly so.",
    "hidden": false,
    "secret": null,
    "mentions": [
     3,
     8
    ],
    "clue": {
     "cats": [
      1,
      3,
      8
     ],
     "table": "qw=="
    }
   },
   {
    "name": "Clover",
    "color": "white",
    "row": 0,
    "column": 2,
    "text": "I'm the only honest cat among Hazel, Kismet and me.",
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
     "table": "6g=="
    }
   },
   {
    "name": "Gnocchi",
    "color": "ginger",
    "row": 1,
    "column": 0,
    "text": "Indigo is the only liar among the cats in column 3.",
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
      3,
      5,
      8
     ],
     "table": "nMw="
    }
   },
   {
    "name": "Hazel",
    "color": "grey",
    "row": 1,
    "column": 1,
    "text": "At least one of Apricot and Gnocchi is a liar.",
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
     "table": "Hg=="
    }
   },
   {
    "name": "Indigo",
    "color": "white",
    "row": 1,
    "column": 2,
    "text": "If you asked Clover, they'd say I'm honest.",
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
    "name": "Jasper",
    "color": "grey",
    "row": 2,
    "column": 0,
    "text": "At least one of Hazel and Kismet is a liar.",
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
    "name": "Kismet",
    "color": "ginger",
    "row": 2,
    "column": 1,
    "text": "Exactly one of the cats in row 1 is a liar.",
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
      7
     ],
     "table": "Fuk="
    }
   },
   {
    "name": "Lentil",
    "color": "white",
    "row": 2,
    "column": 2,
    "text": "Mrrp. Either Apricot is honest, or all of the cats in row 2 are honest. Maybe both.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     3,
     4,
     5
    ],
    "clue": {
     "cats": [
      0,
      3,
      4,
      5,
      8
     ],
     "table": "V1Woqg=="
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
   true,
   false
  ]
 },
 {
  "rows": 3,
  "cols": 3,
  "seed": 132,
  "level": "medium",
  "cats": [
   {
    "name": "Angus",
    "color": "calico",
    "row": 0,
    "column": 0,
    "text": "Mark my whiskers: either Espresso is a liar, or all of the calico cats are honest. Maybe both.",
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
     "table": "Zw=="
    }
   },
   {
    "name": "Clover",
    "color": "siamese",
    "row": 0,
    "column": 1,
    "text": "I speak Juniper. Translated, they said: \"*swishes tail* Among the cats to my left, there's at least one liar and at least one honest cat.\"",
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
     "table": "vus="
    }
   },
   {
    "name": "Doodle",
    "color": "white",
    "row": 0,
    "column": 2,
    "text": "Inky would say I'm honest.",
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
     "table": "Aw=="
    }
   },
   {
    "name": "Espresso",
    "color": "tuxedo",
    "row": 1,
    "column": 0,
    "text": "I'm the only honest cat among the cats in my column.",
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
     "table": "7A=="
    }
   },
   {
    "name": "Fudge",
    "color": "tuxedo",
    "row": 1,
    "column": 1,
    "text": "Angus is the only liar among the cats in row 1.",
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
      4
     ],
     "table": "Av0="
    }
   },
   {
    "name": "Gizmo",
    "color": "calico",
    "row": 1,
    "column": 2,
    "text": "Mrrp. Whatever one cat is, every cat is.",
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
     "table": "AQAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA/////wAAAAD/////AAAAAP////8AAAAA////fw=="
    }
   },
   {
    "name": "Hazel",
    "color": "white",
    "row": 2,
    "column": 0,
    "text": "Purr. You can trust Gizmo and Juniper, both of them.",
    "hidden": false,
    "secret": null,
    "mentions": [
     5,
     8
    ],
    "clue": {
     "cats": [
      5,
      6,
      8
     ],
     "table": "yQ=="
    }
   },
   {
    "name": "Inky",
    "color": "siamese",
    "row": 2,
    "column": 1,
    "text": "*points a paw at Hazel* The only liar among my neighbors.",
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
     "table": "tPA="
    }
   },
   {
    "name": "Juniper",
    "color": "white",
    "row": 2,
    "column": 2,
    "text": "Nyaa... mrrp. Mew.",
    "hidden": true,
    "secret": "*swishes tail* Among the cats to my left, there's at least one liar and at least one honest cat.",
    "mentions": [],
    "clue": null
   }
  ],
  "liars": [
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
 },
 {
  "rows": 3,
  "cols": 3,
  "seed": 139,
  "level": "medium",
  "cats": [
   {
    "name": "Apricot",
    "color": "black",
    "row": 0,
    "column": 0,
    "text": "*slow blinks* If you asked me about Cricket, I'd say honest.",
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
     "table": "Aw=="
    }
   },
   {
    "name": "Cricket",
    "color": "grey",
    "row": 0,
    "column": 1,
    "text": "Apricot is the only liar among my neighbors.",
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
     "table": "xsw="
    }
   },
   {
    "name": "Dusty",
    "color": "tabby",
    "row": 0,
    "column": 2,
    "text": "Everyone among the cats in row 3 is honest, except Loki, who is a liar.",
    "hidden": false,
    "secret": null,
    "mentions": [
     6,
     7,
     8
    ],
    "clue": {
     "cats": [
      2,
      6,
      7,
      8
     ],
     "table": "qqk="
    }
   },
   {
    "name": "Espresso",
    "color": "tabby",
    "row": 1,
    "column": 0,
    "text": "There's a mix among the cats in my row: some honest, some liars.",
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
     "table": "1A=="
    }
   },
   {
    "name": "Fudge",
    "color": "tabby",
    "row": 1,
    "column": 1,
    "text": "Goose is the only liar among the grey cats.",
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
     "table": "nA=="
    }
   },
   {
    "name": "Goose",
    "color": "grey",
    "row": 1,
    "column": 2,
    "text": "Mrrp. Whatever one of Apricot, Espresso and me is, the rest are too.",
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
      5
     ],
     "table": "cQ=="
    }
   },
   {
    "name": "Hazel",
    "color": "black",
    "row": 2,
    "column": 0,
    "text": "There's at least one liar among the cats above me.",
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
     "table": "Hg=="
    }
   },
   {
    "name": "Inky",
    "color": "black",
    "row": 2,
    "column": 1,
    "text": "Mark my whiskers: either Cricket is honest, or all of my neighbors are honest. Maybe both.",
    "hidden": false,
    "secret": null,
    "mentions": [
     1,
     4,
     6,
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
     "table": "V6hVqg=="
    }
   },
   {
    "name": "Loki",
    "color": "black",
    "row": 2,
    "column": 2,
    "text": "*thinks hard* Either Apricot is honest, or all of the cats in my column are liars, or both.",
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
      5,
      8
     ],
     "table": "VSo="
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
  "seed": 100,
  "level": "hard",
  "cats": [
   {
    "name": "Apricot",
    "color": "black",
    "row": 0,
    "column": 0,
    "text": "*thinks hard* Either Hazel is honest, or all of the ginger cats are liars, or both.",
    "hidden": false,
    "secret": null,
    "mentions": [
     5,
     6,
     7
    ],
    "clue": {
     "cats": [
      0,
      5,
      6,
      7
     ],
     "table": "mVk="
    }
   },
   {
    "name": "Bagel",
    "color": "black",
    "row": 0,
    "column": 1,
    "text": "Mrrp. Either Gizmo is a liar, or all of my neighbors are honest. Maybe both.",
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
     "table": "yTM="
    }
   },
   {
    "name": "Coco",
    "color": "black",
    "row": 0,
    "column": 2,
    "text": "Mrrp? Mew mew mrrrow!",
    "hidden": true,
    "secret": "I'm the only honest cat among the cats in my column.",
    "mentions": [],
    "clue": null
   },
   {
    "name": "Doodle",
    "color": "black",
    "row": 1,
    "column": 0,
    "text": "I heard Coco say: \"I'm the only honest cat among the cats in my column.\"",
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
      3,
      5,
      8
     ],
     "table": "7v4="
    }
   },
   {
    "name": "Gizmo",
    "color": "calico",
    "row": 1,
    "column": 1,
    "text": "Same story for all of the cats in my row: all honest, or all liars.",
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
    "name": "Hazel",
    "color": "ginger",
    "row": 1,
    "column": 2,
    "text": "Hiss. Coco is a liar through and through.",
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
     "table": "Bg=="
    }
   },
   {
    "name": "Jasper",
    "color": "ginger",
    "row": 2,
    "column": 0,
    "text": "There's a mix among the cats in my row: some honest, some liars.",
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
     "table": "1A=="
    }
   },
   {
    "name": "Kismet",
    "color": "ginger",
    "row": 2,
    "column": 1,
    "text": "There's a mix among the cats in my column: some honest, some liars.",
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
     "table": "jg=="
    }
   },
   {
    "name": "Luna",
    "color": "calico",
    "row": 2,
    "column": 2,
    "text": "Gizmo is lying through their whiskers.",
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
     "table": "Bg=="
    }
   }
  ],
  "liars": [
   false,
   true,
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
  "seed": 106,
  "level": "hard",
  "cats": [
   {
    "name": "Ash",
    "color": "calico",
    "row": 0,
    "column": 0,
    "text": "At least 3 of the calico cats are liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     1,
     5,
     6
    ],
    "clue": {
     "cats": [
      0,
      1,
      5,
      6
     ],
     "table": "KkI="
    }
   },
   {
    "name": "Dumpling",
    "color": "calico",
    "row": 0,
    "column": 1,
    "text": "Ask me, and I'd tell you Pepper is honest.",
    "hidden": false,
    "secret": null,
    "mentions": [
     8
    ],
    "clue": {
     "cats": [
      1,
      8
     ],
     "table": "Aw=="
    }
   },
   {
    "name": "Ember",
    "color": "tuxedo",
    "row": 0,
    "column": 2,
    "text": "Meow. All of my neighbors are liars, every last one.",
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
     "table": "bA=="
    }
   },
   {
    "name": "Gizmo",
    "color": "white",
    "row": 1,
    "column": 0,
    "text": "Nyaa... mrrp. Mew.",
    "hidden": true,
    "secret": "Hiss. One of Ash and Pepper is a liar, maybe both.",
    "mentions": [],
    "clue": null
   },
   {
    "name": "Hazel",
    "color": "tuxedo",
    "row": 1,
    "column": 1,
    "text": "Mango would say I'm honest.",
    "hidden": false,
    "secret": null,
    "mentions": [
     7
    ],
    "clue": {
     "cats": [
      4,
      7
     ],
     "table": "Aw=="
    }
   },
   {
    "name": "Indigo",
    "color": "calico",
    "row": 1,
    "column": 2,
    "text": "Ember is lying like a lion.",
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
     "table": "Bg=="
    }
   },
   {
    "name": "Lentil",
    "color": "calico",
    "row": 2,
    "column": 0,
    "text": "*thinks hard* Either Ash is honest, or all of Ash, Mango and me are liars, or both.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     7
    ],
    "clue": {
     "cats": [
      0,
      6,
      7
     ],
     "table": "GQ=="
    }
   },
   {
    "name": "Mango",
    "color": "white",
    "row": 2,
    "column": 1,
    "text": "*swishes tail* Among the tuxedo cats, there's at least one liar and at least one honest cat.",
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
      7
     ],
     "table": "lg=="
    }
   },
   {
    "name": "Pepper",
    "color": "white",
    "row": 2,
    "column": 2,
    "text": "I heard Gizmo say: \"Hiss. One of Ash and Pepper is a liar, maybe both.\"",
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
      8
     ],
     "table": "9g=="
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
  "seed": 112,
  "level": "hard",
  "cats": [
   {
    "name": "Apricot",
    "color": "white",
    "row": 0,
    "column": 0,
    "text": "*thinks hard* Either Bagel is honest, or all of the cats in column 2 are honest, or both.",
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
     "table": "mZk="
    }
   },
   {
    "name": "Bagel",
    "color": "siamese",
    "row": 0,
    "column": 1,
    "text": "Mrrp. What Coco meant was: \"All of the siamese cats are the same: all honest, or all liars.\"",
    "hidden": false,
    "secret": null,
    "mentions": [
     2,
     4,
     5,
     7
    ],
    "clue": {
     "cats": [
      1,
      2,
      4,
      5,
      7
     ],
     "table": "6+7u7g=="
    }
   },
   {
    "name": "Coco",
    "color": "white",
    "row": 0,
    "column": 2,
    "text": "*incomprehensible meowing*",
    "hidden": true,
    "secret": "All of the siamese cats are the same: all honest, or all liars.",
    "mentions": [],
    "clue": null
   },
   {
    "name": "Dusty",
    "color": "ginger",
    "row": 1,
    "column": 0,
    "text": "*points a paw at Espresso* The only liar among the cats in my row.",
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
     "table": "rg=="
    }
   },
   {
    "name": "Espresso",
    "color": "siamese",
    "row": 1,
    "column": 1,
    "text": "Hiss. Out of all the cats, at least one is a liar and at least one is honest.",
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
     "table": "/v8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AgA=="
    }
   },
   {
    "name": "Gnocchi",
    "color": "siamese",
    "row": 1,
    "column": 2,
    "text": "If you asked Hobbes, they'd say I'm honest.",
    "hidden": false,
    "secret": null,
    "mentions": [
     6
    ],
    "clue": {
     "cats": [
      5,
      6
     ],
     "table": "Aw=="
    }
   },
   {
    "name": "Hobbes",
    "color": "ginger",
    "row": 2,
    "column": 0,
    "text": "Kiwi always tells the truth, no kitten.",
    "hidden": false,
    "secret": null,
    "mentions": [
     8
    ],
    "clue": {
     "cats": [
      6,
      8
     ],
     "table": "CQ=="
    }
   },
   {
    "name": "Indigo",
    "color": "siamese",
    "row": 2,
    "column": 1,
    "text": "Coco is the only liar among the white cats.",
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
      7
     ],
     "table": "tA=="
    }
   },
   {
    "name": "Kiwi",
    "color": "ginger",
    "row": 2,
    "column": 2,
    "text": "Either Apricot is honest, or all of my neighbors are honest (or both).",
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
      7,
      8
     ],
     "table": "V6g="
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
  "rows": 3,
  "cols": 3,
  "seed": 117,
  "level": "hard",
  "cats": [
   {
    "name": "Ash",
    "color": "ginger",
    "row": 0,
    "column": 0,
    "text": "Mrrp. Either Bagel is honest, or all the cats are liars. Maybe both.",
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
     "table": "mZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZGQ=="
    }
   },
   {
    "name": "Bagel",
    "color": "black",
    "row": 0,
    "column": 1,
    "text": "*purrs* All of Clover, Espresso and me are from the same litter: all honest, or all liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     2,
     4
    ],
    "clue": {
     "cats": [
      1,
      2,
      4
     ],
     "table": "Kw=="
    }
   },
   {
    "name": "Clover",
    "color": "grey",
    "row": 0,
    "column": 2,
    "text": "Mrrp. What Fig meant was: \"Mark my whiskers: either Ash is a liar, or all of Clover, Goose and me are honest. Maybe both.\"",
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
     "table": "394="
    }
   },
   {
    "name": "Dumpling",
    "color": "grey",
    "row": 1,
    "column": 0,
    "text": "At least one of Goose and Hazel is honest.",
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
     "table": "lQ=="
    }
   },
   {
    "name": "Espresso",
    "color": "ginger",
    "row": 1,
    "column": 1,
    "text": "*purrs* All of the ginger cats are from the same litter: all honest, or all liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     6
    ],
    "clue": {
     "cats": [
      0,
      4,
      6
     ],
     "table": "TQ=="
    }
   },
   {
    "name": "Fig",
    "color": "black",
    "row": 1,
    "column": 2,
    "text": "*chirps at a bird outside*",
    "hidden": true,
    "secret": "Mark my whiskers: either Ash is a liar, or all of Clover, Goose and me are honest. Maybe both.",
    "mentions": [],
    "clue": null
   },
   {
    "name": "Goose",
    "color": "ginger",
    "row": 2,
    "column": 0,
    "text": "Among the cats in my column, there are both honest cats and liars.",
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
     "table": "jg=="
    }
   },
   {
    "name": "Hazel",
    "color": "black",
    "row": 2,
    "column": 1,
    "text": "Mrrp. Whatever one of the cats in column 3 is, the rest are too.",
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
      7,
      8
     ],
     "table": "4Xg="
    }
   },
   {
    "name": "Indigo",
    "color": "grey",
    "row": 2,
    "column": 2,
    "text": "Bagel and Espresso are both liars.",
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
      8
     ],
     "table": "eA=="
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
   false
  ]
 },
 {
  "rows": 3,
  "cols": 3,
  "seed": 120,
  "level": "hard",
  "cats": [
   {
    "name": "Ash",
    "color": "ginger",
    "row": 0,
    "column": 0,
    "text": "Among the black cats, there are both honest cats and liars.",
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
     "table": "VpU="
    }
   },
   {
    "name": "Coco",
    "color": "black",
    "row": 0,
    "column": 1,
    "text": "*rubs against your leg* Doodle would say I'm honest.",
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
    "name": "Doodle",
    "color": "white",
    "row": 0,
    "column": 2,
    "text": "Nyaa... mrrp. Mew.",
    "hidden": true,
    "secret": "*thinks hard* Either Luna is honest, or all of the corner cats are liars, or both.",
    "mentions": [],
    "clue": null
   },
   {
    "name": "Felix",
    "color": "white",
    "row": 1,
    "column": 0,
    "text": "*narrows eyes* At least one of Doodle and Marble is a liar.",
    "hidden": false,
    "secret": null,
    "mentions": [
     2,
     8
    ],
    "clue": {
     "cats": [
      2,
      3,
      8
     ],
     "table": "Ng=="
    }
   },
   {
    "name": "Hobbes",
    "color": "black",
    "row": 1,
    "column": 1,
    "text": "Every one of Coco, Iggy and me is a liar. Hiss!",
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
     "table": "TA=="
    }
   },
   {
    "name": "Iggy",
    "color": "ginger",
    "row": 1,
    "column": 2,
    "text": "Coco is honest, but Juniper is a liar.",
    "hidden": false,
    "secret": null,
    "mentions": [
     1,
     6
    ],
    "clue": {
     "cats": [
      1,
      5,
      6
     ],
     "table": "nA=="
    }
   },
   {
    "name": "Juniper",
    "color": "black",
    "row": 2,
    "column": 0,
    "text": "Meow. Out of all the cats, only Marble is honest.",
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
     "table": "AAAAAAAAAAD//////////wAAAAAAAAAA/////////38AAAAAAAAAAP//////////AAAAAAAAAAD//////////w=="
    }
   },
   {
    "name": "Luna",
    "color": "ginger",
    "row": 2,
    "column": 1,
    "text": "Purr. If you asked me, I'd say Marble is honest.",
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
    "color": "ginger",
    "row": 2,
    "column": 2,
    "text": "Mrrp. What Doodle meant was: \"*thinks hard* Either Luna is honest, or all of the corner cats are liars, or both.\"",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     2,
     6,
     7
    ],
    "clue": {
     "cats": [
      0,
      2,
      6,
      7,
      8
     ],
     "table": "M8z//w=="
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
   true,
   false,
   false
  ]
 },
 {
  "rows": 4,
  "cols": 4,
  "seed": 1000,
  "level": "medium",
  "cats": [
   {
    "name": "Ash",
    "color": "white",
    "row": 0,
    "column": 0,
    "text": "*leans in* Nugget whispered to me: \"Exactly one of Mango and Quill is a liar.\"",
    "hidden": false,
    "secret": null,
    "mentions": [
     11,
     12,
     14
    ],
    "clue": {
     "cats": [
      0,
      11,
      12,
      14
     ],
     "table": "vus="
    }
   },
   {
    "name": "Biscuit",
    "color": "calico",
    "row": 0,
    "column": 1,
    "text": "*arches back* At least 3 of the cats in the middle are liars.",
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
     "table": "qmpqVg=="
    }
   },
   {
    "name": "Cricket",
    "color": "black",
    "row": 0,
    "column": 2,
    "text": "Purr. You can trust Jasper and Nugget, both of them.",
    "hidden": false,
    "secret": null,
    "mentions": [
     8,
     12
    ],
    "clue": {
     "cats": [
      2,
      8,
      12
     ],
     "table": "qQ=="
    }
   },
   {
    "name": "Doodle",
    "color": "white",
    "row": 0,
    "column": 3,
    "text": "All of the cats to my left are the same: all honest, or all liars.",
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
     "table": "gX4="
    }
   },
   {
    "name": "Ember",
    "color": "ginger",
    "row": 1,
    "column": 0,
    "text": "Purr. Among the ginger cats, I'm the only one who's honest.",
    "hidden": false,
    "secret": null,
    "mentions": [
     9,
     14
    ],
    "clue": {
     "cats": [
      4,
      9,
      14
     ],
     "table": "6g=="
    }
   },
   {
    "name": "Goose",
    "color": "grey",
    "row": 1,
    "column": 1,
    "text": "If you asked me, I'd say Honey is honest.",
    "hidden": false,
    "secret": null,
    "mentions": [
     6
    ],
    "clue": {
     "cats": [
      5,
      6
     ],
     "table": "Aw=="
    }
   },
   {
    "name": "Honey",
    "color": "white",
    "row": 1,
    "column": 2,
    "text": "Everyone among the black cats is honest, except Loki, who is a liar.",
    "hidden": false,
    "secret": null,
    "mentions": [
     2,
     10,
     15
    ],
    "clue": {
     "cats": [
      2,
      6,
      10,
      15
     ],
     "table": "nMw="
    }
   },
   {
    "name": "Inky",
    "color": "white",
    "row": 1,
    "column": 3,
    "text": "Either Ember is honest, or all the cats are liars (or both).",
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
     "table": "//8AAP//AAD//wAA//8AAAAA//8AAP//AAD//wAA/////wAA//8AAP//AAD//wAAAAD//wAA//8AAP//AAD/////AAD//wAA//8AAP//AAAAAP//AAD//wAA//8AAP////8AAP//AAD//wAA//8AAAAA//8AAP//AAD//wAA/////wAA//8AAP//AAD//wAAAAD//wAA//8AAP//AAD/////AAD//wAA//8AAP//AAAAAP//AAD//wAA//8AAP////8AAP//AAD//wAA//8AAAAA//8AAP//AAD//wAA/////wAA//8AAP//AAD//wAAAAD//wAA//8AAP//AAD/////AAD//wAA//8AAP//AAAAAP//AAD//wAA//8AAP////8AAP//AAD//wAA//8AAAAA//8AAP//AAD//wAA/////wAA//8AAP//AAD//wAAAAD//wAA//8AAP//AAD/////AAD//wAA//8AAP//AAAAAP//AAD//wAA//8AAP////8AAP//AAD//wAA//8AAAAA//8AAP//AAD//wAA/////wAA//8AAP//AAD//wAAAAD//wAA//8AAP//AAD/////AAD//wAA//8AAP//AAAAAP//AAD//wAA//8AAP////8AAP//AAD//wAA//8AAAAA//8AAP//AAD//wAA/////wAA//8AAP//AAD//wAAAAD//wAA//8AAP//AAD/////AAD//wAA//8AAP//AAAAAP//AAD//wAA//8AAP////8AAP//AAD//wAA//8AAAAA//8AAP//AAD//wAA/////wAA//8AAP//AAD//wAAAAD//wAA//8AAP//AAD/////AAD//wAA//8AAP//AAAAAP//AAD//wAA//8AAP////8AAP//AAD//wAA//8AAAAA//8AAP//AAD//wAA/////wAA//8AAP//AAD//wAAAAD//wAA//8AAP//AAD/////AAD//wAA//8AAP//AAAAAP//AAD//wAA//8AAP////8AAP//AAD//wAA//8AAAAA//8AAP//AAD//wAA/////wAA//8AAP//AAD//wAAAAD//wAA//8AAP//AAD/////AAD//wAA//8AAP//AAAAAP//AAD//wAA//8AAP////8AAP//AAD//wAA//8AAAAA//8AAP//AAD//wAA/////wAA//8AAP//AAD//wAAAAD//wAA//8AAP//AAD/////AAD//wAA//8AAP//AAAAAP//AAD//wAA//8AAP////8AAP//AAD//wAA//8AAAAA//8AAP//AAD//wAA/////wAA//8AAP//AAD//wAAAAD//wAA//8AAP//AAD/////AAD//wAA//8AAP//AAAAAP//AAD//wAA//8AAP////8AAP//AAD//wAA//8AAAAA//8AAP//AAD//wAA/////wAA//8AAP//AAD//wAAAAD//wAA//8AAP//AAD/////AAD//wAA//8AAP//AAAAAP//AAD//wAA//8AAP////8AAP//AAD//wAA//8AAAAA//8AAP//AAD//wAA/////wAA//8AAP//AAD//wAAAAD//wAA//8AAP//AAD/////AAD//wAA//8AAP//AAAAAP//AAD//wAA//8AAP////8AAP//AAD//wAA//8AAAAA//8AAP//AAD//wAA/////wAA//8AAP//AAD//wAAAAD//wAA//8AAP//AAD/////AAD//wAA//8AAP//AAAAAP//AAD//wAA//8AAP////8AAP//AAD//wAA//8AAAAA//8AAP//AAD//wAA/////wAA//8AAP//AAD//wAAAAD//wAA//8AAP//AAD/////AAD//wAA//8AAP//AAAAAP//AAD//wAA//8AAP////8AAP//AAD//wAA//8AAAAA//8AAP//AAD//wAA/////wAA//8AAP//AAD//wAAAAD//wAA//8AAP//AAD/////AAD//wAA//8AAP//AAAAAP//AAD//wAA//8AAP////8AAP//AAD//wAA//8AAAAA//8AAP//AAD//wAA/////wAA//8AAP//AAD//wAAAAD//wAA//8AAP//AAD/////AAD//wAA//8AAP//AAAAAP//AAD//wAA//8AAP////8AAP//AAD//wAA//8AAAAA//8AAP//AAD//wAA/////wAA//8AAP//AAD//wAAAAD//wAA//8AAP//AAD/////AAD//wAA//8AAP//AAAAAP//AAD//wAA//8AAP////8AAP//AAD//wAA//8AAAAA//8AAP//AAD//wAA/////wAA//8AAP//AAD//wAAAAD//wAA//8AAP//AAD/////AAD//wAA//8AAP//AAAAAP//AAD//wAA//8AAP////8AAP//AAD//wAA//8AAAAA//8AAP//AAD//wAA/////wAA//8AAP//AAD//wAAAAD//wAA//8AAP//AAD/////AAD//wAA//8AAP//AAAAAP//AAD//wAA//8AAP////8AAP//AAD//wAA//8AAAAA//8AAP//AAD//wAA/////wAA//8AAP//AAD//wAAAAD//wAA//8AAP//AAD/////AAD//wAA//8AAP//AAAAAP//AAD//wAA//8AAP////8AAP//AAD//wAA//8AAAAA//8AAP//AAD//wAA/////wAA//8AAP//AAD//wAAAAD//wAA//8AAP//AAD/////AAD//wAA//8AAP//AAAAAP//AAD//wAA//8AAP////8AAP//AAD//wAA//8AAAAA//8AAP//AAD//wAA/////wAA//8AAP//AAD//wAAAAD//wAA//8AAP//AAD/////AAD//wAA//8AAP//AAAAAP//AAD//wAA//8AAP////8AAP//AAD//wAA//8AAAAA//8AAP//AAD//wAA/////wAA//8AAP//AAD//wAAAAD//wAA//8AAP//AAD/////AAD//wAA//8AAP//AAAAAP//AAD//wAA//8AAP////8AAP//AAD//wAA//8AAAAA//8AAP//AAD//wAA/////wAA//8AAP//AAD//wAAAAD//wAA//8AAP//AAD/////AAD//wAA//8AAP//AAAAAP//AAD//wAA//8AAP////8AAP//AAD//wAA//8AAAAA//8AAP//AAD//wAA/////wAA//8AAP//AAD//wAAAAD//wAA//8AAP//AAD/////AAD//wAA//8AAP//AAAAAP//AAD//wAA//8AAP////8AAP//AAD//wAA//8AAAAA//8AAP//AAD//wAA/////wAA//8AAP//AAD//wAAAAD//wAA//8AAP//AAD/////AAD//wAA//8AAP//AAAAAP//AAD//wAA//8AAP////8AAP//AAD//wAA//8AAAAA//8AAP//AAD//wAA/////wAA//8AAP//AAD//wAAAAD//wAA//8AAP//AAD/////AAD//wAA//8AAP//AAAAAP//AAD//wAA//8AAP////8AAP//AAD//wAA//8AAAAA//8AAP//AAD//wAA/////wAA//8AAP//AAD//wAAAAD//wAA//8AAP//AAD/////AAD//wAA//8AAP//AAAAAP//AAD//wAA//8AAP////8AAP//AAD//wAA//8AAAAA//8AAP//AAD//wAA/////wAA//8AAP//AAD//wAAAAD//wAA//8AAP//AAD/////AAD//wAA//8AAP//AAAAAP//AAD//wAA//8AAP////8AAP//AAD//wAA//8AAAAA//8AAP//AAD//wAA/////wAA//8AAP//AAD//wAAAAD//wAA//8AAP//AAD/////AAD//wAA//8AAP//AAAAAP//AAD//wAA//8AAP////8AAP//AAD//wAA//8AAAAA//8AAP//AAD//wAA/////wAA//8AAP//AAD//wAAAAD//wAA//8AAP//AAD/////AAD//wAA//8AAP//AAAAAP//AAD//wAA//8AAP////8AAP//AAD//wAA//8AAAAA//8AAP//AAD//wAA/////wAA//8AAP//AAD//wAAAAD//wAA//8AAP//AAD/////AAD//wAA//8AAP//AAAAAP//AAD//wAA//8AAP////8AAP//AAD//wAA//8AAAAA//8AAP//AAD//wAA/////wAA//8AAP//AAD//wAAAAD//wAA//8AAP//AAD/////AAD//wAA//8AAP//AAAAAP//AAD//wAA//8AAP////8AAP//AAD//wAA//8AAAAA//8AAP//AAD//wAA/////wAA//8AAP//AAD//wAAAAD//wAA//8AAP//AAD/////AAD//wAA//8AAP//AAAAAP//AAD//wAA//8AAP////8AAP//AAD//wAA//8AAAAA//8AAP//AAD//wAA/////wAA//8AAP//AAD//wAAAAD//wAA//8AAP//AAD/////AAD//wAA//8AAP//AAAAAP//AAD//wAA//8AAP////8AAP//AAD//wAA//8AAAAA//8AAP//AAD//wAA/////wAA//8AAP//AAD//wAAAAD//wAA//8AAP//AAD/////AAD//wAA//8AAP//AAAAAP//AAD//wAA//8AAP////8AAP//AAD//wAA//8AAAAA//8AAP//AAD//wAA/////wAA//8AAP//AAD//wAAAAD//wAA//8AAP//AAD/////AAD//wAA//8AAP//AAAAAP//AAD//wAA//8AAP////8AAP//AAD//wAA//8AAAAA//8AAP//AAD//wAA/////wAA//8AAP//AAD//wAAAAD//wAA//8AAP//AAD/////AAD//wAA//8AAP//AAAAAP//AAD//wAA//8AAP////8AAP//AAD//wAA//8AAAAA//8AAP//AAD//wAA/////wAA//8AAP//AAD//wAAAAD//wAA//8AAP//AAD/////AAD//wAA//8AAP//AAAAAP//AAD//wAA//8AAP////8AAP//AAD//wAA//8AAAAA//8AAP//AAD//wAA/////wAA//8AAP//AAD//wAAAAD//wAA//8AAP//AAD/////AAD//wAA//8AAP//AAAAAP//AAD//wAA//8AAP////8AAP//AAD//wAA//8AAAAA//8AAP//AAD//wAA/////wAA//8AAP//AAD//wAAAAD//wAA//8AAP//AAD/////AAD//wAA//8AAP//AAAAAP//AAD//wAA//8AAP////8AAP//AAD//wAA//8AAAAA//8AAP//AAD//wAA/////wAA//8AAP//AAD//wAAAAD//wAA//8AAP//AAD/////AAD//wAA//8AAP//AAAAAP//AAD//wAA//8AAP////8AAP//AAD//wAA//8AAAAA//8AAP//AAD//wAA/////wAA//8AAP//AAD//wAAAAD//wAA//8AAP//AAD/////AAD//wAA//8AAP//AAAAAP//AAD//wAA//8AAP////8AAP//AAD//wAA//8AAAAA//8AAP//AAD//wAA/////wAA//8AAP//AAD//wAAAAD//wAA//8AAP//AAD/////AAD//wAA//8AAP//AAAAAP//AAD//wAA//8AAP////8AAP//AAD//wAA//8AAAAA//8AAP//AAD//wAA/////wAA//8AAP//AAD//wAAAAD//wAA//8AAP//AAD/////AAD//wAA//8AAP//AAAAAP//AAD//wAA//8AAP////8AAP//AAD//wAA//8AAAAA//8AAP//AAD//wAA/////wAA//8AAP//AAD//wAAAAD//wAA//8AAP//AAD/////AAD//wAA//8AAP//AAAAAP//AAD//wAA//8AAP////8AAP//AAD//wAA//8AAAAA//8AAP//AAD//wAA/////wAA//8AAP//AAD//wAAAAD//wAA//8AAP//AAD/////AAD//wAA//8AAP//AAAAAP//AAD//wAA//8AAP////8AAP//AAD//wAA//8AAAAA//8AAP//AAD//wAA/////wAA//8AAP//AAD//wAAAAD//wAA//8AAP//AAD/////AAD//wAA//8AAP//AAAAAP//AAD//wAA//8AAP////8AAP//AAD//wAA//8AAAAA//8AAP//AAD//wAA/////wAA//8AAP//AAD//wAAAAD//wAA//8AAP//AAD/////AAD//wAA//8AAP//AAAAAP//AAD//wAA//8AAP////8AAP//AAD//wAA//8AAAAA//8AAP//AAD//wAA/////wAA//8AAP//AAD//wAAAAD//wAA//8AAP//AAD/////AAD//wAA//8AAP//AAAAAP//AAD//wAA//8AAP////8AAP//AAD//wAA//8AAAAA//8AAP//AAD//wAA/////wAA//8AAP//AAD//wAAAAD//wAA//8AAP//AAD/////AAD//wAA//8AAP//AAAAAP//AAD//wAA//8AAP////8AAP//AAD//wAA//8AAAAA//8AAP//AAD//wAA/////wAA//8AAP//AAD//wAAAAD//wAA//8AAP//AAD/////AAD//wAA//8AAP//AAAAAP//AAD//wAA//8AAP////8AAP//AAD//wAA//8AAAAA//8AAP//AAD//wAA/////wAA//8AAP//AAD//wAAAAD//wAA//8AAP//AAD/////AAD//wAA//8AAP//AAAAAP//AAD//wAA//8AAP////8AAP//AAD//wAA//8AAAAA//8AAP//AAD//wAA/////wAA//8AAP//AAD//wAAAAD//wAA//8AAP//AAD/////AAD//wAA//8AAP//AAAAAP//AAD//wAA//8AAP////8AAP//AAD//wAA//8AAAAA//8AAP//AAD//wAA/////wAA//8AAP//AAD//wAAAAD//wAA//8AAP//AAD/////AAD//wAA//8AAP//AAAAAP//AAD//wAA//8AAP////8AAP//AAD//wAA//8AAAAA//8AAP//AAD//wAA/////wAA//8AAP//AAD//wAAAAD//wAA//8AAP//AAD/////AAD//wAA//8AAP//AAAAAP//AAD//wAA//8AAP////8AAP//AAD//wAA//8AAAAA//8AAP//AAD//wAA/////wAA//8AAP//AAD//wAAAAD//wAA//8AAP//AAD/////AAD//wAA//8AAP//AAAAAP//AAD//wAA//8AAP////8AAP//AAD//wAA//8AAAAA//8AAP//AAD//wAA/////wAA//8AAP//AAD//wAAAAD//wAA//8AAP//AAD/////AAD//wAA//8AAP//AAAAAP//AAD//wAA//8AAP////8AAP//AAD//wAA//8AAAAA//8AAP//AAD//wAA/////wAA//8AAP//AAD//wAAAAD//wAA//8AAP//AAD/////AAD//wAA//8AAP//AAAAAP//AAD//wAA//8AAP////8AAP//AAD//wAA//8AAAAA//8AAP//AAD//wAA/////wAA//8AAP//AAD//wAAAAD//wAA//8AAP//AAD/////AAD//wAA//8AAP//AAAAAP//AAD//wAA//8AAP////8AAP//AAD//wAA//8AAAAA//8AAP//AAD//wAA/////wAA//8AAP//AAD//wAAAAD//wAA//8AAP//AAD/////AAD//wAA//8AAP//AAAAAP//AAD//wAA//8AAP////8AAP//AAD//wAA//8AAAAA//8AAP//AAD//wAA/////wAA//8AAP//AAD//wAAAAD//wAA//8AAP//AAD/////AAD//wAA//8AAP//AAAAAP//AAD//wAA//8AAP////8AAP//AAD//wAA//8AAAAA//8AAP//AAD//wAA/////wAA//8AAP//AAD//wAAAAD//wAA//8AAP//AAD/////AAD//wAA//8AAP//AAAAAP//AAD//wAA//8AAP////8AAP//AAD//wAA//8AAAAA//8AAP//AAD//wAA/////wAA//8AAP//AAD//wAAAAD//wAA//8AAP//AAD/////AAD//wAA//8AAP//AAAAAP//AAD//wAA//8AAP////8AAP//AAD//wAA//8AAAAA//8AAP//AAD//wAA/////wAA//8AAP//AAD//wAAAAD//wAA//8AAP//AAD/////AAD//wAA//8AAP//AAAAAP//AAD//wAA//8AAP////8AAP//AAD//wAA//8AAAAA//8AAP//AAD//wAA/////wAA//8AAP//AAD//wAAAAD//wAA//8AAP//AAD/////AAD//wAA//8AAP//AAAAAP//AAD//wAA//8AAP////8AAP//AAD//wAA//8AAAAA//8AAP//AAD//wAA/////wAA//8AAP//AAD//wAAAAD//wAA//8AAP//AAD/////AAD//wAA//8AAP//AAAAAP//AAD//wAA//8AAP////8AAP//AAD//wAA//8AAAAA//8AAP//AAD//wAA/////wAA//8AAP//AAD//wAAAAD//wAA//8AAP//AAD/////AAD//wAA//8AAP//AAAAAP//AAD//wAA//8AAP////8AAP//AAD//wAA//8AAAAA//8AAP//AAD//wAA/////wAA//8AAP//AAD//wAAAAD//wAA//8AAP//AAD/////AAD//wAA//8AAP//AAAAAP//AAD//wAA//8AAP////8AAP//AAD//wAA//8AAAAA//8AAP//AAD//wAA/////wAA//8AAP//AAD//wAAAAD//wAA//8AAP//AAD/////AAD//wAA//8AAP//AAAAAP//AAD//wAA//8AAP////8AAP//AAD//wAA//8AAAAA//8AAP//AAD//wAA/////wAA//8AAP//AAD//wAAAAD//wAA//8AAP//AAD/////AAD//wAA//8AAP//AAAAAP//AAD//wAA//8AAP////8AAP//AAD//wAA//8AAAAA//8AAP//AAD//wAA/////wAA//8AAP//AAD//wAAAAD//wAA//8AAP//AAD/////AAD//wAA//8AAP//AAAAAP//AAD//wAA//8AAP////8AAP//AAD//wAA//8AAAAA//8AAP//AAD//wAA/////wAA//8AAP//AAD//wAAAAD//wAA//8AAP//AAD/////AAD//wAA//8AAP//AAAAAP//AAD//wAA//8AAP////8AAP//AAD//wAA//8AAAAA//8AAP//AAD//wAA/////wAA//8AAP//AAD//wAAAAD//wAA//8AAP//AAD/////AAD//wAA//8AAP//AAAAAP//AAD//wAA//8AAP////8AAP//AAD//wAA//8AAAAA//8AAP//AAD//wAA/////wAA//8AAP//AAD//wAAAAD//wAA//8AAP//AAD/////AAD//wAA//8AAP//AAAAAP//AAD//wAA//8AAP////8AAP//AAD//wAA//8AAAAA//8AAP//AAD//wAA/////wAA//8AAP//AAD//wAAAAD//wAA//8AAP//AAD/////AAD//wAA//8AAP//AAAAAP//AAD//wAA//8AAP////8AAP//AAD//wAA//8AAAAA//8AAP//AAD//wAA/////wAA//8AAP//AAD//wAAAAD//wAA//8AAP//AAD/////AAD//wAA//8AAP//AAAAAP//AAD//wAA//8AAP////8AAP//AAD//wAA//8AAAAA//8AAP//AAD//wAA/////wAA//8AAP//AAD//wAAAAD//wAA//8AAP//AAD/////AAD//wAA//8AAP//AAAAAP//AAD//wAA//8AAP////8AAP//AAD//wAA//8AAAAA//8AAP//AAD//wAA/////wAA//8AAP//AAD//wAAAAD//wAA//8AAP//AAD/////AAD//wAA//8AAP//AAAAAP//AAD//wAA//8AAP////8AAP//AAD//wAA//8AAAAA//8AAP//AAD//wAA/////wAA//8AAP//AAD//wAAAAD//wAA//8AAP//AAD/////AAD//wAA//8AAP//AAAAAP//AAD//wAA//8AAP////8AAP//AAD//wAA//8AAAAA//8AAP//AAD//wAA/////wAA//8AAP//AAD//wAAAAD//wAA//8AAP//AAD/////AAD//wAA//8AAP//AAAAAP//AAD//wAA//8AAP////8AAP//AAD//wAA//8AAAAA//8AAP//AAD//wAA/////wAA//8AAP//AAD//wAAAAD//wAA//8AAP//AAD/////AAD//wAA//8AAP//AAAAAP//AAD//wAA//8AAP////8AAP//AAD//wAA//8AAAAA//8AAP//AAD//wAA/////wAA//8AAP//AAD//wAAAAD//wAA//8AAP//AAD/////AAD//wAA//8AAP//AAAAAP//AAD//wAA//8AAP////8AAP//AAD//wAA//8AAAAA//8AAP//AAD//wAA/////wAA//8AAP//AAD//wAAAAD//wAA//8AAP//AAD/////AAD//wAA//8AAP//AAAAAP//AAD//wAA//8AAP////8AAP//AAD//wAA//8AAAAA//8AAP//AAD//wAA/38="
    }
   },
   {
    "name": "Jasper",
    "color": "grey",
    "row": 2,
    "column": 0,
    "text": "Mrrp. Whatever one of the cats in row 2 is, the rest are too.",
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
     "table": "AYD+fw=="
    }
   },
   {
    "name": "Kiwi",
    "color": "ginger",
    "row": 2,
    "column": 1,
    "text": "*swishes tail* One of Mango and Nugget is honest, the other is a liar.",
    "hidden": false,
    "secret": null,
    "mentions": [
     11,
     12
    ],
    "clue": {
     "cats": [
      9,
      11,
      12
     ],
     "table": "lg=="
    }
   },
   {
    "name": "Loki",
    "color": "black",
    "row": 2,
    "column": 2,
    "text": "Hiss. Doodle and Quill are opposites: exactly one of them is a liar.",
    "hidden": false,
    "secret": null,
    "mentions": [
     3,
     14
    ],
    "clue": {
     "cats": [
      3,
      10,
      14
     ],
     "table": "lg=="
    }
   },
   {
    "name": "Mango",
    "color": "grey",
    "row": 2,
    "column": 3,
    "text": "Same story for all of Ash, Ember and me: all honest, or all liars.",
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
      11
     ],
     "table": "cQ=="
    }
   },
   {
    "name": "Nugget",
    "color": "calico",
    "row": 3,
    "column": 0,
    "text": "*chirps at a bird outside*",
    "hidden": true,
    "secret": "Exactly one of Mango and Quill is a liar.",
    "mentions": [],
    "clue": null
   },
   {
    "name": "Pickles",
    "color": "calico",
    "row": 3,
    "column": 1,
    "text": "Nugget would say I'm honest.",
    "hidden": false,
    "secret": null,
    "mentions": [
     12
    ],
    "clue": {
     "cats": [
      12,
      13
     ],
     "table": "BQ=="
    }
   },
   {
    "name": "Quill",
    "color": "ginger",
    "row": 3,
    "column": 2,
    "text": "Mrrp. If you asked me, I'd say Doodle is a liar.",
    "hidden": false,
    "secret": null,
    "mentions": [
     3
    ],
    "clue": {
     "cats": [
      3,
      14
     ],
     "table": "Cg=="
    }
   },
   {
    "name": "Rolo",
    "color": "black",
    "row": 3,
    "column": 3,
    "text": "Exactly one of the cats to my left is a liar.",
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
     "table": "Fuk="
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
  "seed": 1002,
  "level": "medium",
  "cats": [
   {
    "name": "Biscuit",
    "color": "ginger",
    "row": 0,
    "column": 0,
    "text": "Hiss. Among the cats in row 4 you'll find both: at least one liar and at least one honest cat.",
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
      0,
      12,
      13,
      14,
      15
     ],
     "table": "VlVVlQ=="
    }
   },
   {
    "name": "Dumpling",
    "color": "ginger",
    "row": 0,
    "column": 1,
    "text": "Either Truffle is honest, or all of Mango, Udon and me are honest (or both).",
    "hidden": false,
    "secret": null,
    "mentions": [
     8,
     13,
     14
    ],
    "clue": {
     "cats": [
      1,
      8,
      13,
      14
     ],
     "table": "taU="
    }
   },
   {
    "name": "Echo",
    "color": "black",
    "row": 0,
    "column": 2,
    "text": "Every one of the black cats is honest. Purr.",
    "hidden": false,
    "secret": null,
    "mentions": [
     12,
     15
    ],
    "clue": {
     "cats": [
      2,
      12,
      15
     ],
     "table": "qw=="
    }
   },
   {
    "name": "Fig",
    "color": "tabby",
    "row": 0,
    "column": 3,
    "text": "Mark my whiskers: either Honey is a liar, or all of the cats in row 2 are liars. Maybe both.",
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
     "table": "WlpaWg=="
    }
   },
   {
    "name": "Gizmo",
    "color": "ginger",
    "row": 1,
    "column": 0,
    "text": "Hiss. Among the cats in my row you'll find both: at least one liar and at least one honest cat.",
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
     "table": "VNU="
    }
   },
   {
    "name": "Honey",
    "color": "tabby",
    "row": 1,
    "column": 1,
    "text": "All of Biscuit, Paprika and me are liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     11
    ],
    "clue": {
     "cats": [
      0,
      5,
      11
     ],
     "table": "TA=="
    }
   },
   {
    "name": "Jellybean",
    "color": "calico",
    "row": 1,
    "column": 2,
    "text": "*sniffs around* All of the cats in row 1 are honest.",
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
     "table": "AQD+/w=="
    }
   },
   {
    "name": "Loki",
    "color": "tuxedo",
    "row": 1,
    "column": 3,
    "text": "Fig and Vinny are opposites: one is honest, the other is a liar.",
    "hidden": false,
    "secret": null,
    "mentions": [
     3,
     15
    ],
    "clue": {
     "cats": [
      3,
      7,
      15
     ],
     "table": "lg=="
    }
   },
   {
    "name": "Mango",
    "color": "white",
    "row": 2,
    "column": 0,
    "text": "Honey would say I'm a liar.",
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
     "table": "Cg=="
    }
   },
   {
    "name": "Nugget",
    "color": "ginger",
    "row": 2,
    "column": 1,
    "text": "Mrrp. Whatever one of the corner cats is, the rest are too.",
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
      9,
      12,
      15
     ],
     "table": "4fDweA=="
    }
   },
   {
    "name": "Oreo",
    "color": "calico",
    "row": 2,
    "column": 2,
    "text": "*thinks hard* Either Gizmo is honest, or all of the cats in my row are honest, or both.",
    "hidden": false,
    "secret": null,
    "mentions": [
     4,
     8,
     9,
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
     "table": "V6pVqg=="
    }
   },
   {
    "name": "Paprika",
    "color": "white",
    "row": 2,
    "column": 3,
    "text": "Purr. If you asked me, I'd say Truffle is honest.",
    "hidden": false,
    "secret": null,
    "mentions": [
     13
    ],
    "clue": {
     "cats": [
      11,
      13
     ],
     "table": "Aw=="
    }
   },
   {
    "name": "Queenie",
    "color": "black",
    "row": 3,
    "column": 0,
    "text": "Among the cats above me, there are both honest cats and liars.",
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
    "name": "Truffle",
    "color": "white",
    "row": 3,
    "column": 1,
    "text": "Meow meow. Exactly 2 of the white cats are liars.",
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
      13
     ],
     "table": "mA=="
    }
   },
   {
    "name": "Udon",
    "color": "tuxedo",
    "row": 3,
    "column": 2,
    "text": "Either Queenie is a liar, or all of the cats on the edges are liars (or both).",
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
     "table": "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//////////////////////////////////////////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/////////////////////////////////////////////////////////////////////////////////////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//////////////////////////////////////////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//////////////////////////////////////////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP////////////////////////////////////////////////////////////////////////////////////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP//////////////////////////////////////////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA="
    }
   },
   {
    "name": "Vinny",
    "color": "black",
    "row": 3,
    "column": 3,
    "text": "If you asked Jellybean, they'd say I'm honest.",
    "hidden": false,
    "secret": null,
    "mentions": [
     6
    ],
    "clue": {
     "cats": [
      6,
      15
     ],
     "table": "BQ=="
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
   false,
   true,
   true,
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
  "rows": 4,
  "cols": 4,
  "seed": 1003,
  "level": "medium",
  "cats": [
   {
    "name": "Ash",
    "color": "ginger",
    "row": 0,
    "column": 0,
    "text": "*thinks hard* Either Jellybean is honest, or all of the cats in row 2 are liars, or both.",
    "hidden": false,
    "secret": null,
    "mentions": [
     4,
     5,
     6,
     7,
     8
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
     "table": "VVVVVaqqqmo="
    }
   },
   {
    "name": "Biscuit",
    "color": "siamese",
    "row": 0,
    "column": 1,
    "text": "Kiwi would say they're honest.",
    "hidden": false,
    "secret": null,
    "mentions": [
     9
    ],
    "clue": {
     "cats": [
      1,
      9
     ],
     "table": "BQ=="
    }
   },
   {
    "name": "Cricket",
    "color": "black",
    "row": 0,
    "column": 2,
    "text": "Mrrp. Among the cats in row 2, only Fudge is a liar.",
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
      2,
      4,
      5,
      6,
      7
     ],
     "table": "pqqqqg=="
    }
   },
   {
    "name": "Doodle",
    "color": "siamese",
    "row": 0,
    "column": 3,
    "text": "*rubs against your leg* Queenie would say I'm honest.",
    "hidden": false,
    "secret": null,
    "mentions": [
     14
    ],
    "clue": {
     "cats": [
      3,
      14
     ],
     "table": "Aw=="
    }
   },
   {
    "name": "Fudge",
    "color": "grey",
    "row": 1,
    "column": 0,
    "text": "Either Kiwi is a liar, or all of the cats in my column are honest (or both).",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     8,
     9,
     12
    ],
    "clue": {
     "cats": [
      0,
      4,
      8,
      9,
      12
     ],
     "table": "zTPMMw=="
    }
   },
   {
    "name": "Goose",
    "color": "tabby",
    "row": 1,
    "column": 1,
    "text": "If you asked me, I'd say Hazel is honest.",
    "hidden": false,
    "secret": null,
    "mentions": [
     6
    ],
    "clue": {
     "cats": [
      5,
      6
     ],
     "table": "Aw=="
    }
   },
   {
    "name": "Hazel",
    "color": "ginger",
    "row": 1,
    "column": 2,
    "text": "Same story for all of the cats in my column: all honest, or all liars.",
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
    "name": "Indigo",
    "color": "tabby",
    "row": 1,
    "column": 3,
    "text": "Mark my whiskers: either Ash is honest, or all of the cats in row 4 are honest. Maybe both.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     12,
     13,
     14,
     15
    ],
    "clue": {
     "cats": [
      0,
      7,
      12,
      13,
      14,
      15
     ],
     "table": "k5mZmZmZmZk="
    }
   },
   {
    "name": "Jellybean",
    "color": "siamese",
    "row": 2,
    "column": 0,
    "text": "All of the ginger cats are the same: all honest, or all liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     6,
     13,
     14
    ],
    "clue": {
     "cats": [
      0,
      6,
      8,
      13,
      14
     ],
     "table": "4fDweA=="
    }
   },
   {
    "name": "Kiwi",
    "color": "black",
    "row": 2,
    "column": 1,
    "text": "Mango is the only liar among the black cats.",
    "hidden": false,
    "secret": null,
    "mentions": [
     2,
     11
    ],
    "clue": {
     "cats": [
      2,
      9,
      11
     ],
     "table": "3A=="
    }
   },
   {
    "name": "Lentil",
    "color": "tabby",
    "row": 2,
    "column": 2,
    "text": "Doodle and Fudge are both liars.",
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
      10
     ],
     "table": "eA=="
    }
   },
   {
    "name": "Mango",
    "color": "black",
    "row": 2,
    "column": 3,
    "text": "Mrrp. Exactly 13 cats can be trusted in total, the rest are liars.",
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
     "table": "gGhoFmgWFgFoFhYBFgEBAGgWFgEWAQEAFgEBAAEAAABoFhYBFgEBABYBAQABAAAAFgEBAAEAAAABAAAAAAAAAGgWFgEWAQEAFgEBAAEAAAAWAQEAAQAAAAEAAAAAAAAAFgEBAAEAAAABAAAAAAAAAAEAAAAAAAAAAAAAAAAAAABoFhYBFgEBABYBAQABAAAAFgEBAAEAAAABAAAAAAAAABYBAQABAAAAAQAAAAAAAAABAAAAAAAAAAAAAAAAAAAAFgEBAAEAAAABAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJfp6f7p/v7/6f7+//7////p/v7//v////7/////////6f7+//7////+//////////7////////////////////p/v7//v////7//////////v////////////////////7/////////////////////////////////////////6f7+//7////+//////////7////////////////////+//////////////////////////////////////////7///////////////////////////////////////////////////////////////////////////////////9oFhYBFgEBABYBAQABAAAAFgEBAAEAAAABAAAAAAAAABYBAQABAAAAAQAAAAAAAAABAAAAAAAAAAAAAAAAAAAAFgEBAAEAAAABAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABYBAQABAAAAAQAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA6f7+//7////+//////////7////////////////////+//////////////////////////////////////////7////////////////////////////////////////////////////////////////////////////////////+/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////2gWFgEWAQEAFgEBAAEAAAAWAQEAAQAAAAEAAAAAAAAAFgEBAAEAAAABAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAWAQEAAQAAAAEAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFgEBAAEAAAABAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADp/v7//v////7//////////v////////////////////7//////////////////////////////////////////v////////////////////////////////////////////////////////////////////////////////////7/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////FgEBAAEAAAABAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP7///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////9oFhYBFgEBABYBAQABAAAAFgEBAAEAAAABAAAAAAAAABYBAQABAAAAAQAAAAAAAAABAAAAAAAAAAAAAAAAAAAAFgEBAAEAAAABAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABYBAQABAAAAAQAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA6f7+//7////+//////////7////////////////////+//////////////////////////////////////////7////////////////////////////////////////////////////////////////////////////////////+/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////xYBAQABAAAAAQAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD+////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////FgEBAAEAAAABAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP7///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////2gWFgEWAQEAFgEBAAEAAAAWAQEAAQAAAAEAAAAAAAAAFgEBAAEAAAABAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAWAQEAAQAAAAEAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFgEBAAEAAAABAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADp/v7//v////7//////////v////////////////////7//////////////////////////////////////////v////////////////////////////////////////////////////////////////////////////////////7/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////FgEBAAEAAAABAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP7///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8WAQEAAQAAAAEAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/v///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////FgEBAAEAAAABAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP7///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8="
    }
   },
   {
    "name": "Olive",
    "color": "siamese",
    "row": 3,
    "column": 0,
    "text": "Tofu would say they're a liar.",
    "hidden": false,
    "secret": null,
    "mentions": [
     15
    ],
    "clue": {
     "cats": [
      12,
      15
     ],
     "table": "Cg=="
    }
   },
   {
    "name": "Pepper",
    "color": "ginger",
    "row": 3,
    "column": 1,
    "text": "If you asked Doodle, they'd say I'm a liar.",
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
     "table": "Cg=="
    }
   },
   {
    "name": "Queenie",
    "color": "ginger",
    "row": 3,
    "column": 2,
    "text": "Mrrp. Among my neighbors, only Tofu is a liar.",
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
     "table": "8OE="
    }
   },
   {
    "name": "Tofu",
    "color": "grey",
    "row": 3,
    "column": 3,
    "text": "Either Doodle is honest, or all of my neighbors are honest (or both).",
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
      11,
      14,
      15
     ],
     "table": "V6g="
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
   false,
   false,
   false,
   false,
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
  "seed": 50000,
  "level": "medium",
  "cats": [
   {
    "name": "Angus",
    "color": "ginger",
    "row": 0,
    "column": 0,
    "text": "Biscuit and Otis are opposites: one is honest, the other is a liar.",
    "hidden": false,
    "secret": null,
    "mentions": [
     1,
     12
    ],
    "clue": {
     "cats": [
      0,
      1,
      12
     ],
     "table": "lg=="
    }
   },
   {
    "name": "Biscuit",
    "color": "grey",
    "row": 0,
    "column": 1,
    "text": "Quill is honest, but Espresso is a liar.",
    "hidden": false,
    "secret": null,
    "mentions": [
     4,
     13
    ],
    "clue": {
     "cats": [
      1,
      4,
      13
     ],
     "table": "pg=="
    }
   },
   {
    "name": "Cricket",
    "color": "ginger",
    "row": 0,
    "column": 2,
    "text": "*slow blinks* If you asked me about Indigo, I'd say honest.",
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
     "table": "Aw=="
    }
   },
   {
    "name": "Doodle",
    "color": "tabby",
    "row": 0,
    "column": 3,
    "text": "*chirps at a bird outside*",
    "hidden": true,
    "secret": "*thinks hard* Either Juniper is honest, or all of Hazel, Juniper and me are honest, or both.",
    "mentions": [],
    "clue": null
   },
   {
    "name": "Espresso",
    "color": "white",
    "row": 1,
    "column": 0,
    "text": "Mrrp. Either Doodle is a liar, or all of the cats in column 2 are honest. Maybe both.",
    "hidden": false,
    "secret": null,
    "mentions": [
     1,
     3,
     5,
     9,
     13
    ],
    "clue": {
     "cats": [
      1,
      3,
      4,
      5,
      9,
      13
     ],
     "table": "LTw8PDw8PDw="
    }
   },
   {
    "name": "Fig",
    "color": "white",
    "row": 1,
    "column": 1,
    "text": "*twitches tail* Exactly one of the white cats is a liar.",
    "hidden": false,
    "secret": null,
    "mentions": [
     4,
     7,
     15
    ],
    "clue": {
     "cats": [
      4,
      5,
      7,
      15
     ],
     "table": "2s0="
    }
   },
   {
    "name": "Hazel",
    "color": "tabby",
    "row": 1,
    "column": 2,
    "text": "Luna would say I'm honest.",
    "hidden": false,
    "secret": null,
    "mentions": [
     10
    ],
    "clue": {
     "cats": [
      6,
      10
     ],
     "table": "Aw=="
    }
   },
   {
    "name": "Indigo",
    "color": "white",
    "row": 1,
    "column": 3,
    "text": "Everyone among the cats to my left is a liar, except Fig, who is honest.",
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
     "table": "IN8="
    }
   },
   {
    "name": "Juniper",
    "color": "grey",
    "row": 2,
    "column": 0,
    "text": "Mrrp. Among the cats in my row, only Kiwi is a liar.",
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
     "table": "rqo="
    }
   },
   {
    "name": "Kiwi",
    "color": "ginger",
    "row": 2,
    "column": 1,
    "text": "If you asked me, I'd say Cricket is a liar.",
    "hidden": false,
    "secret": null,
    "mentions": [
     2
    ],
    "clue": {
     "cats": [
      2,
      9
     ],
     "table": "Cg=="
    }
   },
   {
    "name": "Luna",
    "color": "tabby",
    "row": 2,
    "column": 2,
    "text": "If you asked Quill, they'd say they're honest.",
    "hidden": false,
    "secret": null,
    "mentions": [
     13
    ],
    "clue": {
     "cats": [
      10,
      13
     ],
     "table": "BQ=="
    }
   },
   {
    "name": "Mochi",
    "color": "ginger",
    "row": 2,
    "column": 3,
    "text": "*swishes tail* Among Hazel, Luna and me, there's at least one liar and at least one honest cat.",
    "hidden": false,
    "secret": null,
    "mentions": [
     6,
     10
    ],
    "clue": {
     "cats": [
      6,
      10,
      11
     ],
     "table": "jg=="
    }
   },
   {
    "name": "Otis",
    "color": "siamese",
    "row": 3,
    "column": 0,
    "text": "Mrrp. Among Angus, Mochi and me, only Angus is a liar.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     11
    ],
    "clue": {
     "cats": [
      0,
      11,
      12
     ],
     "table": "8g=="
    }
   },
   {
    "name": "Quill",
    "color": "grey",
    "row": 3,
    "column": 1,
    "text": "Doodle told me: \"*thinks hard* Either Juniper is honest, or all of Hazel, Juniper and me are honest, or both.\"",
    "hidden": false,
    "secret": null,
    "mentions": [
     3,
     6,
     8
    ],
    "clue": {
     "cats": [
      3,
      6,
      8,
      13
     ],
     "table": "pf8="
    }
   },
   {
    "name": "Rolo",
    "color": "siamese",
    "row": 3,
    "column": 2,
    "text": "Everyone among Kiwi, Luna and me is honest, except Kiwi, who is a liar.",
    "hidden": false,
    "secret": null,
    "mentions": [
     9,
     10
    ],
    "clue": {
     "cats": [
      9,
      10,
      14
     ],
     "table": "8g=="
    }
   },
   {
    "name": "Sprout",
    "color": "white",
    "row": 3,
    "column": 3,
    "text": "All of the cats to my left are honest.",
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
     "table": "Af4="
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
   true,
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
  "seed": 50001,
  "level": "medium",
  "cats": [
   {
    "name": "Angus",
    "color": "calico",
    "row": 0,
    "column": 0,
    "text": "*purrs* All of the cats in my row are from the same litter: all honest, or all liars.",
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
     "table": "qyo="
    }
   },
   {
    "name": "Bean",
    "color": "calico",
    "row": 0,
    "column": 1,
    "text": "*swishes tail* Among the cats in column 3, there's at least one liar and at least one honest cat.",
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
      1,
      2,
      6,
      10,
      14
     ],
     "table": "VlVVlQ=="
    }
   },
   {
    "name": "Clover",
    "color": "ginger",
    "row": 0,
    "column": 2,
    "text": "Otis is the only honest cat among the cats below me.",
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
     "table": "qqY="
    }
   },
   {
    "name": "Felix",
    "color": "white",
    "row": 0,
    "column": 3,
    "text": "*rubs against your leg* Angus would say I'm honest.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0
    ],
    "clue": {
     "cats": [
      0,
      3
     ],
     "table": "BQ=="
    }
   },
   {
    "name": "Gnocchi",
    "color": "ginger",
    "row": 1,
    "column": 0,
    "text": "All of the cats in my row are liars. Every whisker in the bunch is crooked.",
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
     "table": "qio="
    }
   },
   {
    "name": "Honey",
    "color": "black",
    "row": 1,
    "column": 1,
    "text": "Purr. Among the black cats, I'm the only one who's honest.",
    "hidden": false,
    "secret": null,
    "mentions": [
     9
    ],
    "clue": {
     "cats": [
      5,
      9
     ],
     "table": "Dg=="
    }
   },
   {
    "name": "Jellybean",
    "color": "tuxedo",
    "row": 1,
    "column": 2,
    "text": "Mrrp. What Tofu meant was: \"*swishes tail* Among the calico cats, there's at least one liar and at least one honest cat.\"",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     1,
     10,
     12,
     13
    ],
    "clue": {
     "cats": [
      0,
      1,
      6,
      10,
      12,
      13
     ],
     "table": "/v//9/Hw8Pg="
    }
   },
   {
    "name": "Kettle",
    "color": "ginger",
    "row": 1,
    "column": 3,
    "text": "Every single one of Felix, Honey and me can be trusted. Mrrp.",
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
      7
     ],
     "table": "8Q=="
    }
   },
   {
    "name": "Marble",
    "color": "tuxedo",
    "row": 2,
    "column": 0,
    "text": "*sighs* I'm the only honest cat among the cats in my row. The rest are liars.",
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
     "table": "quo="
    }
   },
   {
    "name": "Nugget",
    "color": "black",
    "row": 2,
    "column": 1,
    "text": "*snickers* Clover would tell you they're a liar.",
    "hidden": false,
    "secret": null,
    "mentions": [
     2
    ],
    "clue": {
     "cats": [
      2,
      9
     ],
     "table": "DA=="
    }
   },
   {
    "name": "Otis",
    "color": "calico",
    "row": 2,
    "column": 2,
    "text": "Mrrp. Exactly 9 of the cats on the edges can be trusted, the rest are liars.",
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
      7,
      8,
      10,
      11,
      12,
      13,
      14,
      15
     ],
     "table": "gGhoFmgWFgFoFhYBFgEBAH+Xl+mX6en+l+np/un+/v9oFhYBFgEBABYBAQABAAAAl+np/un+/v/p/v7//v///2gWFgEWAQEAFgEBAAEAAACX6en+6f7+/+n+/v/+////FgEBAAEAAAABAAAAAAAAAOn+/v/+/////v////////9oFhYBFgEBABYBAQABAAAAl+np/un+/v/p/v7//v///xYBAQABAAAAAQAAAAAAAADp/v7//v////7/////////FgEBAAEAAAABAAAAAAAAAOn+/v/+/////v////////8BAAAAAAAAAAAAAAAAAAAA/v///////////////////2gWFgEWAQEAFgEBAAEAAACX6en+6f7+/+n+/v/+////FgEBAAEAAAABAAAAAAAAAOn+/v/+/////v////////8WAQEAAQAAAAEAAAAAAAAA6f7+//7////+/////////wEAAAAAAAAAAAAAAAAAAAD+////////////////////FgEBAAEAAAABAAAAAAAAAOn+/v/+/////v////////8BAAAAAAAAAAAAAAAAAAAA/v///////////////////wEAAAAAAAAAAAAAAAAAAAD+////////////////////AAAAAAAAAAAAAAAAAAAAAP////////////////////9oFhYBFgEBABYBAQABAAAAl+np/un+/v/p/v7//v///xYBAQABAAAAAQAAAAAAAADp/v7//v////7/////////FgEBAAEAAAABAAAAAAAAAOn+/v/+/////v////////8BAAAAAAAAAAAAAAAAAAAA/v///////////////////xYBAQABAAAAAQAAAAAAAADp/v7//v////7/////////AQAAAAAAAAAAAAAAAAAAAP7///////////////////8BAAAAAAAAAAAAAAAAAAAA/v///////////////////wAAAAAAAAAAAAAAAAAAAAD/////////////////////FgEBAAEAAAABAAAAAAAAAOn+/v/+/////v////////8BAAAAAAAAAAAAAAAAAAAA/v///////////////////wEAAAAAAAAAAAAAAAAAAAD+////////////////////AAAAAAAAAAAAAAAAAAAAAP////////////////////8BAAAAAAAAAAAAAAAAAAAA/v///////////////////wAAAAAAAAAAAAAAAAAAAAD/////////////////////AAAAAAAAAAAAAAAAAAAAAP////////////////////8AAAAAAAAAAAAAAAAAAAAA/////////////////////w=="
    }
   },
   {
    "name": "Rolo",
    "color": "white",
    "row": 2,
    "column": 3,
    "text": "Either Waffles is a liar, or all of Felix, Waffles and me are honest (or both).",
    "hidden": false,
    "secret": null,
    "mentions": [
     3,
     15
    ],
    "clue": {
     "cats": [
      3,
      11,
      15
     ],
     "table": "PQ=="
    }
   },
   {
    "name": "Sushi",
    "color": "calico",
    "row": 3,
    "column": 0,
    "text": "Gnocchi and Nugget are both liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     4,
     9
    ],
    "clue": {
     "cats": [
      4,
      9,
      12
     ],
     "table": "eA=="
    }
   },
   {
    "name": "Tofu",
    "color": "tuxedo",
    "row": 3,
    "column": 1,
    "text": "Mrrp? Mew mew mrrrow!",
    "hidden": true,
    "secret": "*swishes tail* Among the cats in my column, there's at least one liar and at least one honest cat.",
    "mentions": [],
    "clue": null
   },
   {
    "name": "Umber",
    "color": "tuxedo",
    "row": 3,
    "column": 2,
    "text": "Mark my whiskers: either Bean is a liar, or all of the cats in column 2 are liars. Maybe both.",
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
      14
     ],
     "table": "qqpVVQ=="
    }
   },
   {
    "name": "Waffles",
    "color": "ginger",
    "row": 3,
    "column": 3,
    "text": "Purr. Among Gnocchi, Jellybean and me, I'm the only one who's honest.",
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
      15
     ],
     "table": "+A=="
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
  "seed": 1004,
  "level": "hard",
  "cats": [
   {
    "name": "Bean",
    "color": "black",
    "row": 0,
    "column": 0,
    "text": "Mrrp. Either Olive is honest, or all of the cats on the edges are honest. Maybe both.",
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
     "table": "VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVWqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqlVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqpVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVaqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVWqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqlVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqpVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVaqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVWqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqlVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqo="
    }
   },
   {
    "name": "Cricket",
    "color": "grey",
    "row": 0,
    "column": 1,
    "text": "Mark my whiskers: either Hazel is a liar, or all of the cats to my right are liars. Maybe both.",
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
     "table": "alU="
    }
   },
   {
    "name": "Dusty",
    "color": "white",
    "row": 0,
    "column": 2,
    "text": "Noodle is the only liar of all the cats.",
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
     "table": "8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PHw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PA="
    }
   },
   {
    "name": "Espresso",
    "color": "white",
    "row": 0,
    "column": 3,
    "text": "Purr. Loki would tell you I'm honest.",
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
     "table": "Aw=="
    }
   },
   {
    "name": "Fig",
    "color": "grey",
    "row": 1,
    "column": 0,
    "text": "Mrrp. Whatever one of my neighbors is, the rest are too.",
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
     "table": "yWw="
    }
   },
   {
    "name": "Goose",
    "color": "tabby",
    "row": 1,
    "column": 1,
    "text": "Mrrp. What Iggy meant was: \"Mark my whiskers: either Loki is honest, or all of the ginger cats are liars. Maybe both.\"",
    "hidden": false,
    "secret": null,
    "mentions": [
     7,
     10,
     11,
     12
    ],
    "clue": {
     "cats": [
      5,
      7,
      10,
      11,
      12
     ],
     "table": "6+vruw=="
    }
   },
   {
    "name": "Hazel",
    "color": "tabby",
    "row": 1,
    "column": 2,
    "text": "Mrrp. Among the corner cats, only Sushi is a liar.",
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
      6,
      12,
      15
     ],
     "table": "8PDh8A=="
    }
   },
   {
    "name": "Iggy",
    "color": "white",
    "row": 1,
    "column": 3,
    "text": "Nyaa... mrrp. Mew.",
    "hidden": true,
    "secret": "Mark my whiskers: either Loki is honest, or all of the ginger cats are liars. Maybe both.",
    "mentions": [],
    "clue": null
   },
   {
    "name": "Juniper",
    "color": "black",
    "row": 2,
    "column": 0,
    "text": "Only one bad kitty: exactly one of the cats to my right is a liar.",
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
     "table": "lqk="
    }
   },
   {
    "name": "Kismet",
    "color": "white",
    "row": 2,
    "column": 1,
    "text": "Mrrp. Whatever one of the cats in the middle is, the rest are too.",
    "hidden": false,
    "secret": null,
    "mentions": [
     5,
     6,
     10
    ],
    "clue": {
     "cats": [
      5,
      6,
      9,
      10
     ],
     "table": "8XA="
    }
   },
   {
    "name": "Loki",
    "color": "ginger",
    "row": 2,
    "column": 2,
    "text": "*points a paw at Dusty* The only liar among the white cats.",
    "hidden": false,
    "secret": null,
    "mentions": [
     2,
     3,
     7,
     9
    ],
    "clue": {
     "cats": [
      2,
      3,
      7,
      9,
      10
     ],
     "table": "AgD9/w=="
    }
   },
   {
    "name": "Noodle",
    "color": "ginger",
    "row": 2,
    "column": 3,
    "text": "Mrrp. Either Dusty is a liar, or all of the cats in my column are honest. Maybe both.",
    "hidden": false,
    "secret": null,
    "mentions": [
     2,
     3,
     7,
     15
    ],
    "clue": {
     "cats": [
      2,
      3,
      7,
      11,
      15
     ],
     "table": "q1WqVQ=="
    }
   },
   {
    "name": "Olive",
    "color": "ginger",
    "row": 3,
    "column": 0,
    "text": "Mrrp. Among Noodle, Sushi and me, only Sushi is a liar.",
    "hidden": false,
    "secret": null,
    "mentions": [
     11,
     15
    ],
    "clue": {
     "cats": [
      11,
      12,
      15
     ],
     "table": "3A=="
    }
   },
   {
    "name": "Pepper",
    "color": "black",
    "row": 3,
    "column": 1,
    "text": "*thinks hard* Either Rolo is honest, or all of my neighbors are honest, or both.",
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
     "table": "D/A="
    }
   },
   {
    "name": "Rolo",
    "color": "tabby",
    "row": 3,
    "column": 2,
    "text": "Either Fig is a liar, or all of the ginger cats are liars (or both).",
    "hidden": false,
    "secret": null,
    "mentions": [
     4,
     10,
     11,
     12
    ],
    "clue": {
     "cats": [
      4,
      10,
      11,
      12,
      14
     ],
     "table": "qupVFQ=="
    }
   },
   {
    "name": "Sushi",
    "color": "black",
    "row": 3,
    "column": 3,
    "text": "Either Fig is honest, or all of the cats on the edges are honest (or both).",
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
     "table": "//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAAAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8="
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
  "seed": 1020,
  "level": "hard",
  "cats": [
   {
    "name": "Bean",
    "color": "tuxedo",
    "row": 0,
    "column": 0,
    "text": "Mrrp. Either Udon is a liar, or all the cats are honest. Maybe both.",
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
     "table": "q6qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqlVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVU="
    }
   },
   {
    "name": "Clover",
    "color": "calico",
    "row": 0,
    "column": 1,
    "text": "Every one of Kettle, Saffron and me is honest. Purr.",
    "hidden": false,
    "secret": null,
    "mentions": [
     7,
     13
    ],
    "clue": {
     "cats": [
      1,
      7,
      13
     ],
     "table": "qw=="
    }
   },
   {
    "name": "Dusty",
    "color": "grey",
    "row": 0,
    "column": 2,
    "text": "Same story for all of Clover, Gizmo and me: all honest, or all liars.",
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
     "table": "TQ=="
    }
   },
   {
    "name": "Echo",
    "color": "grey",
    "row": 0,
    "column": 3,
    "text": "Mrrp. Either Queenie is honest, or all of the cats on the edges are liars. Maybe both.",
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
     "table": "/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wAA/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A//8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8AAP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP//AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AAD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD//wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wAA/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A//8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8AAP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP//AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AAD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD//wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wAA/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A//8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8AAP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AH8="
    }
   },
   {
    "name": "Gizmo",
    "color": "siamese",
    "row": 1,
    "column": 0,
    "text": "Mrrp. Among the grey cats, only Dusty is a liar.",
    "hidden": false,
    "secret": null,
    "mentions": [
     2,
     3,
     6,
     14
    ],
    "clue": {
     "cats": [
      2,
      3,
      4,
      6,
      14
     ],
     "table": "0vDw8A=="
    }
   },
   {
    "name": "Inky",
    "color": "calico",
    "row": 1,
    "column": 1,
    "text": "*swishes tail* One of Dusty and Kettle is honest, the other is a liar.",
    "hidden": false,
    "secret": null,
    "mentions": [
     2,
     7
    ],
    "clue": {
     "cats": [
      2,
      5,
      7
     ],
     "table": "lg=="
    }
   },
   {
    "name": "Juniper",
    "color": "grey",
    "row": 1,
    "column": 2,
    "text": "I'm the only honest cat among Dusty, Udon and me.",
    "hidden": false,
    "secret": null,
    "mentions": [
     2,
     15
    ],
    "clue": {
     "cats": [
      2,
      6,
      15
     ],
     "table": "7A=="
    }
   },
   {
    "name": "Kettle",
    "color": "tuxedo",
    "row": 1,
    "column": 3,
    "text": "If you asked Mochi, they'd call themselves a liar.",
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
     "table": "Cg=="
    }
   },
   {
    "name": "Mochi",
    "color": "tuxedo",
    "row": 2,
    "column": 0,
    "text": "Mrrp! All of the cats to my right are honest, I'd bet my nine lives on it.",
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
    "name": "Nimbus",
    "color": "siamese",
    "row": 2,
    "column": 1,
    "text": "Hiss. Among the cats in the middle you'll find both: at least one liar and at least one honest cat.",
    "hidden": false,
    "secret": null,
    "mentions": [
     5,
     6,
     10
    ],
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
    "name": "Otis",
    "color": "ginger",
    "row": 2,
    "column": 2,
    "text": "Pickles told me: \"At least one of Kettle, Tofu and me is a liar.\"",
    "hidden": false,
    "secret": null,
    "mentions": [
     7,
     11,
     14
    ],
    "clue": {
     "cats": [
      7,
      10,
      11,
      14
     ],
     "table": "zs8="
    }
   },
   {
    "name": "Pickles",
    "color": "siamese",
    "row": 2,
    "column": 3,
    "text": "Nyaa... mrrp. Mew.",
    "hidden": true,
    "secret": "At least one of Kettle, Tofu and me is a liar.",
    "mentions": [],
    "clue": null
   },
   {
    "name": "Queenie",
    "color": "ginger",
    "row": 3,
    "column": 0,
    "text": "Kettle is the only liar among the tuxedo cats.",
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
      7,
      8,
      12
     ],
     "table": "BPs="
    }
   },
   {
    "name": "Saffron",
    "color": "siamese",
    "row": 3,
    "column": 1,
    "text": "Gizmo and Nimbus are both honest.",
    "hidden": false,
    "secret": null,
    "mentions": [
     4,
     9
    ],
    "clue": {
     "cats": [
      4,
      9,
      13
     ],
     "table": "4Q=="
    }
   },
   {
    "name": "Tofu",
    "color": "grey",
    "row": 3,
    "column": 2,
    "text": "Everyone among the ginger cats is honest, except Udon, who is a liar.",
    "hidden": false,
    "secret": null,
    "mentions": [
     10,
     12,
     15
    ],
    "clue": {
     "cats": [
      10,
      12,
      14,
      15
     ],
     "table": "8OE="
    }
   },
   {
    "name": "Udon",
    "color": "ginger",
    "row": 3,
    "column": 3,
    "text": "*sighs* I'm the only honest cat among the corner cats. The rest are liars.",
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
     "table": "gP8="
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
   true,
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
  "seed": 1039,
  "level": "hard",
  "cats": [
   {
    "name": "Angus",
    "color": "calico",
    "row": 0,
    "column": 0,
    "text": "Mrrp. Either Bagel is honest, or all of my neighbors are liars. Maybe both.",
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
     "table": "WQ=="
    }
   },
   {
    "name": "Bagel",
    "color": "black",
    "row": 0,
    "column": 1,
    "text": "*thinks hard* Either Queenie is a liar, or all of the calico cats are honest, or both.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     2,
     3,
     6,
     14
    ],
    "clue": {
     "cats": [
      0,
      1,
      2,
      3,
      6,
      14
     ],
     "table": "yczMzDMzMzM="
    }
   },
   {
    "name": "Coco",
    "color": "calico",
    "row": 0,
    "column": 2,
    "text": "*nods at Marble* The only honest cat among the cats in row 3.",
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
      2,
      8,
      9,
      10,
      11
     ],
     "table": "qmqqqg=="
    }
   },
   {
    "name": "Dumpling",
    "color": "calico",
    "row": 0,
    "column": 3,
    "text": "Purr. If you asked me, I'd say Honey is honest.",
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
    "name": "Echo",
    "color": "grey",
    "row": 1,
    "column": 0,
    "text": "Jellybean told me: \"Purr. Dumpling would tell you I'm honest.\"",
    "hidden": false,
    "secret": null,
    "mentions": [
     3,
     9
    ],
    "clue": {
     "cats": [
      3,
      4,
      9
     ],
     "table": "3Q=="
    }
   },
   {
    "name": "Felix",
    "color": "grey",
    "row": 1,
    "column": 1,
    "text": "*purrs* All of the corner cats are from the same litter: all honest, or all liars.",
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
      5,
      12,
      15
     ],
     "table": "4fDweA=="
    }
   },
   {
    "name": "Goose",
    "color": "calico",
    "row": 1,
    "column": 2,
    "text": "*kneads paws* At least one of Jellybean and Kismet is honest.",
    "hidden": false,
    "secret": null,
    "mentions": [
     9,
     10
    ],
    "clue": {
     "cats": [
      6,
      9,
      10
     ],
     "table": "lQ=="
    }
   },
   {
    "name": "Honey",
    "color": "white",
    "row": 1,
    "column": 3,
    "text": "*points a paw at Goose* The only liar among the cats to my left.",
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
     "table": "EO8="
    }
   },
   {
    "name": "Iggy",
    "color": "white",
    "row": 2,
    "column": 0,
    "text": "Same story for all of my neighbors: all honest, or all liars.",
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
     "table": "yWw="
    }
   },
   {
    "name": "Jellybean",
    "color": "ginger",
    "row": 2,
    "column": 1,
    "text": "Mrrp? Mew mew mrrrow!",
    "hidden": true,
    "secret": "Purr. Dumpling would tell you I'm honest.",
    "mentions": [],
    "clue": null
   },
   {
    "name": "Kismet",
    "color": "black",
    "row": 2,
    "column": 2,
    "text": "*purrs* All of the cats on the edges are from the same litter: all honest, or all liars.",
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
      7,
      8,
      10,
      11,
      12,
      13,
      14,
      15
     ],
     "table": "AQAAAAAAAAAAAAAAAAAAAP7///////////////////8AAAAAAAAAAAAAAAAAAAAA/////////////////////wAAAAAAAAAAAAAAAAAAAAD/////////////////////AAAAAAAAAAAAAAAAAAAAAP////////////////////8AAAAAAAAAAAAAAAAAAAAA/////////////////////wAAAAAAAAAAAAAAAAAAAAD/////////////////////AAAAAAAAAAAAAAAAAAAAAP////////////////////8AAAAAAAAAAAAAAAAAAAAA/////////////////////wAAAAAAAAAAAAAAAAAAAAD/////////////////////AAAAAAAAAAAAAAAAAAAAAP////////////////////8AAAAAAAAAAAAAAAAAAAAA/////////////////////wAAAAAAAAAAAAAAAAAAAAD/////////////////////AAAAAAAAAAAAAAAAAAAAAP////////////////////8AAAAAAAAAAAAAAAAAAAAA/////////////////////wAAAAAAAAAAAAAAAAAAAAD/////////////////////AAAAAAAAAAAAAAAAAAAAAP////////////////////8AAAAAAAAAAAAAAAAAAAAA/////////////////////wAAAAAAAAAAAAAAAAAAAAD/////////////////////AAAAAAAAAAAAAAAAAAAAAP////////////////////8AAAAAAAAAAAAAAAAAAAAA/////////////////////wAAAAAAAAAAAAAAAAAAAAD/////////////////////AAAAAAAAAAAAAAAAAAAAAP////////////////////8AAAAAAAAAAAAAAAAAAAAA/////////////////////wAAAAAAAAAAAAAAAAAAAAD/////////////////////AAAAAAAAAAAAAAAAAAAAAP////////////////////8AAAAAAAAAAAAAAAAAAAAA/////////////////////wAAAAAAAAAAAAAAAAAAAAD/////////////////////AAAAAAAAAAAAAAAAAAAAAP////////////////////8AAAAAAAAAAAAAAAAAAAAA/////////////////////wAAAAAAAAAAAAAAAAAAAAD/////////////////////AAAAAAAAAAAAAAAAAAAAAP////////////////////8AAAAAAAAAAAAAAAAAAACA////////////////////fw=="
    }
   },
   {
    "name": "Marble",
    "color": "black",
    "row": 2,
    "column": 3,
    "text": "There's a mix among the cats on the edges: some honest, some liars.",
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
     "table": "/v///////////////////wAAAAAAAAAAAAAAAAAAAAD/////////////////////AAAAAAAAAAAAAAAAAAAAAP////////////////////8AAAAAAAAAAAAAAAAAAAAA/////////////////////wAAAAAAAAAAAAAAAAAAAAD/////////////////////AAAAAAAAAAAAAAAAAAAAAP////////////////////8AAAAAAAAAAAAAAAAAAAAA/////////////////////wAAAAAAAAAAAAAAAAAAAAD/////////////////////AAAAAAAAAAAAAAAAAAAAAP////////////////////8AAAAAAAAAAAAAAAAAAAAA/////////////////////wAAAAAAAAAAAAAAAAAAAAD/////////////////////AAAAAAAAAAAAAAAAAAAAAP////////////////////8AAAAAAAAAAAAAAAAAAAAA/////////////////////wAAAAAAAAAAAAAAAAAAAAD/////////////////////AAAAAAAAAAAAAAAAAAAAAP////////////////////8AAAAAAAAAAAAAAAAAAAAA/////////////////////wAAAAAAAAAAAAAAAAAAAIA="
    }
   },
   {
    "name": "Otis",
    "color": "grey",
    "row": 3,
    "column": 0,
    "text": "*thinks hard* Either Coco is a liar, or all of the grey cats are honest, or both.",
    "hidden": false,
    "secret": null,
    "mentions": [
     2,
     4,
     5,
     13
    ],
    "clue": {
     "cats": [
      2,
      4,
      5,
      12,
      13
     ],
     "table": "q1WqVQ=="
    }
   },
   {
    "name": "Pickles",
    "color": "grey",
    "row": 3,
    "column": 1,
    "text": "Echo is honest, but Queenie is a liar.",
    "hidden": false,
    "secret": null,
    "mentions": [
     4,
     14
    ],
    "clue": {
     "cats": [
      4,
      13,
      14
     ],
     "table": "nA=="
    }
   },
   {
    "name": "Queenie",
    "color": "white",
    "row": 3,
    "column": 2,
    "text": "I counted with my paws: there are exactly 4 liars in total.",
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
     "table": "AICAaIBoaBaAaGgWaBYWAYBoaBZoFhYBaBYWARYBAQCAaGgWaBYWAWgWFgEWAQEAaBYWARYBAQAWAQEAAQAAAIBoaBZoFhYBaBYWARYBAQBoFhYBFgEBABYBAQABAAAAaBYWARYBAQAWAQEAAQAAABYBAQABAAAAAQAAAAAAAACAaGgWaBYWAWgWFgEWAQEAaBYWARYBAQAWAQEAAQAAAGgWFgEWAQEAFgEBAAEAAAAWAQEAAQAAAAEAAAAAAAAAaBYWARYBAQAWAQEAAQAAABYBAQABAAAAAQAAAAAAAAAWAQEAAQAAAAEAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAIBoaBZoFhYBaBYWARYBAQBoFhYBFgEBABYBAQABAAAAaBYWARYBAQAWAQEAAQAAABYBAQABAAAAAQAAAAAAAABoFhYBFgEBABYBAQABAAAAFgEBAAEAAAABAAAAAAAAABYBAQABAAAAAQAAAAAAAAABAAAAAAAAAAAAAAAAAAAAaBYWARYBAQAWAQEAAQAAABYBAQABAAAAAQAAAAAAAAAWAQEAAQAAAAEAAAAAAAAAAQAAAAAAAAAAAAAAAAAAABYBAQABAAAAAQAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAaGgWaBYWAWgWFgEWAQEAaBYWARYBAQAWAQEAAQAAAGgWFgEWAQEAFgEBAAEAAAAWAQEAAQAAAAEAAAAAAAAAaBYWARYBAQAWAQEAAQAAABYBAQABAAAAAQAAAAAAAAAWAQEAAQAAAAEAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAGgWFgEWAQEAFgEBAAEAAAAWAQEAAQAAAAEAAAAAAAAAFgEBAAEAAAABAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAWAQEAAQAAAAEAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAaBYWARYBAQAWAQEAAQAAABYBAQABAAAAAQAAAAAAAAAWAQEAAQAAAAEAAAAAAAAAAQAAAAAAAAAAAAAAAAAAABYBAQABAAAAAQAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAWAQEAAQAAAAEAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIBoaBZoFhYBaBYWARYBAQBoFhYBFgEBABYBAQABAAAAaBYWARYBAQAWAQEAAQAAABYBAQABAAAAAQAAAAAAAABoFhYBFgEBABYBAQABAAAAFgEBAAEAAAABAAAAAAAAABYBAQABAAAAAQAAAAAAAAABAAAAAAAAAAAAAAAAAAAAaBYWARYBAQAWAQEAAQAAABYBAQABAAAAAQAAAAAAAAAWAQEAAQAAAAEAAAAAAAAAAQAAAAAAAAAAAAAAAAAAABYBAQABAAAAAQAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABoFhYBFgEBABYBAQABAAAAFgEBAAEAAAABAAAAAAAAABYBAQABAAAAAQAAAAAAAAABAAAAAAAAAAAAAAAAAAAAFgEBAAEAAAABAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABYBAQABAAAAAQAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAaBYWARYBAQAWAQEAAQAAABYBAQABAAAAAQAAAAAAAAAWAQEAAQAAAAEAAAAAAAAAAQAAAAAAAAAAAAAAAAAAABYBAQABAAAAAQAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAWAQEAAQAAAAEAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABYBAQABAAAAAQAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB/l5fpl+np/pfp6f7p/v7/l+np/un+/v/p/v7//v///5fp6f7p/v7/6f7+//7////p/v7//v////7/////////l+np/un+/v/p/v7//v///+n+/v/+/////v/////////p/v7//v////7//////////v///////////////////5fp6f7p/v7/6f7+//7////p/v7//v////7/////////6f7+//7////+//////////7////////////////////p/v7//v////7//////////v////////////////////7/////////////////////////////////////////l+np/un+/v/p/v7//v///+n+/v/+/////v/////////p/v7//v////7//////////v///////////////////+n+/v/+/////v/////////+/////////////////////v/////////////////////////////////////////p/v7//v////7//////////v////////////////////7//////////////////////////////////////////v///////////////////////////////////////////////////////////////////////////////////5fp6f7p/v7/6f7+//7////p/v7//v////7/////////6f7+//7////+//////////7////////////////////p/v7//v////7//////////v////////////////////7/////////////////////////////////////////6f7+//7////+//////////7////////////////////+//////////////////////////////////////////7////////////////////////////////////////////////////////////////////////////////////p/v7//v////7//////////v////////////////////7//////////////////////////////////////////v////////////////////////////////////////////////////////////////////////////////////7/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////l+np/un+/v/p/v7//v///+n+/v/+/////v/////////p/v7//v////7//////////v///////////////////+n+/v/+/////v/////////+/////////////////////v/////////////////////////////////////////p/v7//v////7//////////v////////////////////7//////////////////////////////////////////v///////////////////////////////////////////////////////////////////////////////////+n+/v/+/////v/////////+/////////////////////v/////////////////////////////////////////+/////////////////////////////////////////////////////////////////////////////////////v/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////p/v7//v////7//////////v////////////////////7//////////////////////////////////////////v////////////////////////////////////////////////////////////////////////////////////7//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////v///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////4BoaBZoFhYBaBYWARYBAQBoFhYBFgEBABYBAQABAAAAaBYWARYBAQAWAQEAAQAAABYBAQABAAAAAQAAAAAAAABoFhYBFgEBABYBAQABAAAAFgEBAAEAAAABAAAAAAAAABYBAQABAAAAAQAAAAAAAAABAAAAAAAAAAAAAAAAAAAAaBYWARYBAQAWAQEAAQAAABYBAQABAAAAAQAAAAAAAAAWAQEAAQAAAAEAAAAAAAAAAQAAAAAAAAAAAAAAAAAAABYBAQABAAAAAQAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABoFhYBFgEBABYBAQABAAAAFgEBAAEAAAABAAAAAAAAABYBAQABAAAAAQAAAAAAAAABAAAAAAAAAAAAAAAAAAAAFgEBAAEAAAABAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABYBAQABAAAAAQAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAaBYWARYBAQAWAQEAAQAAABYBAQABAAAAAQAAAAAAAAAWAQEAAQAAAAEAAAAAAAAAAQAAAAAAAAAAAAAAAAAAABYBAQABAAAAAQAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAWAQEAAQAAAAEAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABYBAQABAAAAAQAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABoFhYBFgEBABYBAQABAAAAFgEBAAEAAAABAAAAAAAAABYBAQABAAAAAQAAAAAAAAABAAAAAAAAAAAAAAAAAAAAFgEBAAEAAAABAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABYBAQABAAAAAQAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFgEBAAEAAAABAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABYBAQABAAAAAQAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAl+np/un+/v/p/v7//v///+n+/v/+/////v/////////p/v7//v////7//////////v///////////////////+n+/v/+/////v/////////+/////////////////////v/////////////////////////////////////////p/v7//v////7//////////v////////////////////7//////////////////////////////////////////v///////////////////////////////////////////////////////////////////////////////////+n+/v/+/////v/////////+/////////////////////v/////////////////////////////////////////+/////////////////////////////////////////////////////////////////////////////////////v/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////p/v7//v////7//////////v////////////////////7//////////////////////////////////////////v////////////////////////////////////////////////////////////////////////////////////7//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////v///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////+n+/v/+/////v/////////+/////////////////////v/////////////////////////////////////////+/////////////////////////////////////////////////////////////////////////////////////v/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////+/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////v////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8="
    }
   },
   {
    "name": "Ravioli",
    "color": "ginger",
    "row": 3,
    "column": 3,
    "text": "*points a paw at Goose* The only liar among the cats in row 2.",
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
      15
     ],
     "table": "EADv/w=="
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
  "seed": 50025,
  "level": "hard",
  "cats": [
   {
    "name": "Ash",
    "color": "tuxedo",
    "row": 0,
    "column": 0,
    "text": "*leans in* Nimbus whispered to me: \"Mrrp. Either Cricket is honest, or all of the cats in the middle are liars. Maybe both.\"",
    "hidden": false,
    "secret": null,
    "mentions": [
     2,
     5,
     6,
     9,
     10,
     11
    ],
    "clue": {
     "cats": [
      0,
      2,
      5,
      6,
      9,
      10,
      11
     ],
     "table": "u7u7u7u7u/vu7u7u7u7urg=="
    }
   },
   {
    "name": "Bagel",
    "color": "tuxedo",
    "row": 0,
    "column": 1,
    "text": "*points a paw at Rolo* The only liar among the corner cats.",
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
     "table": "zMzJzA=="
    }
   },
   {
    "name": "Cricket",
    "color": "siamese",
    "row": 0,
    "column": 2,
    "text": "Jellybean and Loki are both liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     7,
     9
    ],
    "clue": {
     "cats": [
      2,
      7,
      9
     ],
     "table": "ag=="
    }
   },
   {
    "name": "Dumpling",
    "color": "black",
    "row": 0,
    "column": 3,
    "text": "*thinks hard* Either Nimbus is honest, or all of the cats to my left are liars, or both.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     1,
     2,
     11
    ],
    "clue": {
     "cats": [
      0,
      1,
      2,
      3,
      11
     ],
     "table": "/wCAfw=="
    }
   },
   {
    "name": "Espresso",
    "color": "ginger",
    "row": 1,
    "column": 0,
    "text": "Mango and Paprika are opposites: one is honest, the other is a liar.",
    "hidden": false,
    "secret": null,
    "mentions": [
     10,
     13
    ],
    "clue": {
     "cats": [
      4,
      10,
      13
     ],
     "table": "lg=="
    }
   },
   {
    "name": "Felix",
    "color": "siamese",
    "row": 1,
    "column": 1,
    "text": "Mrrp. At least one of Espresso and Oreo is a liar. Maybe both.",
    "hidden": false,
    "secret": null,
    "mentions": [
     4,
     12
    ],
    "clue": {
     "cats": [
      4,
      5,
      12
     ],
     "table": "Ng=="
    }
   },
   {
    "name": "Hazel",
    "color": "black",
    "row": 1,
    "column": 2,
    "text": "*points a paw at Jellybean* The only liar among my neighbors.",
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
     "table": "8OHw8A=="
    }
   },
   {
    "name": "Jellybean",
    "color": "ginger",
    "row": 1,
    "column": 3,
    "text": "Mrrp. Whatever one of the cats to my left is, the rest are too.",
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
     "table": "gX4="
    }
   },
   {
    "name": "Kettle",
    "color": "tabby",
    "row": 2,
    "column": 0,
    "text": "Either Bagel is a liar, or all of the cats in row 1 are liars (or both).",
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
      8
     ],
     "table": "zMwzMw=="
    }
   },
   {
    "name": "Loki",
    "color": "black",
    "row": 2,
    "column": 1,
    "text": "Ask me, and I'd tell you Quill is honest.",
    "hidden": false,
    "secret": null,
    "mentions": [
     14
    ],
    "clue": {
     "cats": [
      9,
      14
     ],
     "table": "Aw=="
    }
   },
   {
    "name": "Mango",
    "color": "ginger",
    "row": 2,
    "column": 2,
    "text": "I speak Oreo. Translated, they said: \"Among the cats to my right, there are both honest cats and liars.\"",
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
     "table": "vru76w=="
    }
   },
   {
    "name": "Nimbus",
    "color": "tabby",
    "row": 2,
    "column": 3,
    "text": "Mrrrow mrrp mew.",
    "hidden": true,
    "secret": "Mrrp. Either Cricket is honest, or all of the cats in the middle are liars. Maybe both.",
    "mentions": [],
    "clue": null
   },
   {
    "name": "Oreo",
    "color": "tabby",
    "row": 3,
    "column": 0,
    "text": "*incomprehensible meowing*",
    "hidden": true,
    "secret": "Among the cats to my right, there are both honest cats and liars.",
    "mentions": [],
    "clue": null
   },
   {
    "name": "Paprika",
    "color": "tabby",
    "row": 3,
    "column": 1,
    "text": "Loki is the only liar among the cats in the middle.",
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
      13
     ],
     "table": "EADv/w=="
    }
   },
   {
    "name": "Quill",
    "color": "tuxedo",
    "row": 3,
    "column": 2,
    "text": "Everyone among the cats in column 2 is honest, except Loki, who is a liar.",
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
      14
     ],
     "table": "EADv/w=="
    }
   },
   {
    "name": "Rolo",
    "color": "ginger",
    "row": 3,
    "column": 3,
    "text": "All of Hazel, Nimbus and me are honest. Purrfectly so.",
    "hidden": false,
    "secret": null,
    "mentions": [
     6,
     11
    ],
    "clue": {
     "cats": [
      6,
      11,
      15
     ],
     "table": "8Q=="
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
   true,
   true,
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
  "rows": 4,
  "cols": 4,
  "seed": 50034,
  "level": "hard",
  "cats": [
   {
    "name": "Angus",
    "color": "white",
    "row": 0,
    "column": 0,
    "text": "*purrs* All of Fig, Saffron and me are from the same litter: all honest, or all liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     4,
     15
    ],
    "clue": {
     "cats": [
      0,
      4,
      15
     ],
     "table": "Kw=="
    }
   },
   {
    "name": "Bagel",
    "color": "tuxedo",
    "row": 0,
    "column": 1,
    "text": "*points a paw at Marble* The only liar among the cats in the middle.",
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
     "table": "qqmqqg=="
    }
   },
   {
    "name": "Clover",
    "color": "siamese",
    "row": 0,
    "column": 2,
    "text": "*flicks ears* Exactly 3 of the cats in column 4 are liars.",
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
      2,
      3,
      7,
      11,
      15
     ],
     "table": "qmpqlg=="
    }
   },
   {
    "name": "Dumpling",
    "color": "tuxedo",
    "row": 0,
    "column": 3,
    "text": "Mrrp. What Kettle meant was: \"*slow blinks* If you asked me about Jasper, I'd say honest.\"",
    "hidden": false,
    "secret": null,
    "mentions": [
     7,
     8
    ],
    "clue": {
     "cats": [
      3,
      7,
      8
     ],
     "table": "uw=="
    }
   },
   {
    "name": "Fig",
    "color": "tuxedo",
    "row": 1,
    "column": 0,
    "text": "Mrrp. Exactly 2 of the cats in my column can be trusted, the rest are liars.",
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
     "table": "pNo="
    }
   },
   {
    "name": "Hazel",
    "color": "white",
    "row": 1,
    "column": 1,
    "text": "I heard Pepper say: \"I'm the only honest cat among Hazel, Inky and me.\"",
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
     "table": "+g=="
    }
   },
   {
    "name": "Inky",
    "color": "siamese",
    "row": 1,
    "column": 2,
    "text": "*points a paw at Clover* The only liar among the cats in row 1.",
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
     "table": "EADv/w=="
    }
   },
   {
    "name": "Jasper",
    "color": "calico",
    "row": 1,
    "column": 3,
    "text": "Everyone among the cats in column 3 is honest, except Clover, who is a liar.",
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
     "table": "0vDw8A=="
    }
   },
   {
    "name": "Kettle",
    "color": "calico",
    "row": 2,
    "column": 0,
    "text": "Nyaa... mrrp. Mew.",
    "hidden": true,
    "secret": "*slow blinks* If you asked me about Jasper, I'd say honest.",
    "mentions": [],
    "clue": null
   },
   {
    "name": "Marble",
    "color": "white",
    "row": 2,
    "column": 1,
    "text": "All of the cats in the middle are the same: all honest, or all liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     5,
     6,
     10
    ],
    "clue": {
     "cats": [
      5,
      6,
      9,
      10
     ],
     "table": "8XA="
    }
   },
   {
    "name": "Nimbus",
    "color": "tabby",
    "row": 2,
    "column": 2,
    "text": "Exactly one of the tabby cats is a liar.",
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
     "table": "vA=="
    }
   },
   {
    "name": "Oreo",
    "color": "tabby",
    "row": 2,
    "column": 3,
    "text": "Hiss. Dumpling and Nimbus are opposites: exactly one of them is a liar.",
    "hidden": false,
    "secret": null,
    "mentions": [
     3,
     10
    ],
    "clue": {
     "cats": [
      3,
      10,
      11
     ],
     "table": "lg=="
    }
   },
   {
    "name": "Pepper",
    "color": "tuxedo",
    "row": 3,
    "column": 0,
    "text": "Mrrrow mrrp mew.",
    "hidden": true,
    "secret": "I'm the only honest cat among Hazel, Inky and me.",
    "mentions": [],
    "clue": null
   },
   {
    "name": "Quill",
    "color": "calico",
    "row": 3,
    "column": 1,
    "text": "Everyone among the cats above me is honest, except Marble, who is a liar.",
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
     "table": "EO8="
    }
   },
   {
    "name": "Ravioli",
    "color": "siamese",
    "row": 3,
    "column": 2,
    "text": "You can trust Quill and me. We are both honest.",
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
    "name": "Saffron",
    "color": "tabby",
    "row": 3,
    "column": 3,
    "text": "Purr. If you asked me, I'd say Dumpling is honest.",
    "hidden": false,
    "secret": null,
    "mentions": [
     3
    ],
    "clue": {
     "cats": [
      3,
      15
     ],
     "table": "BQ=="
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
   true,
   false,
   false,
   false
  ]
 },
 {
  "rows": 4,
  "cols": 4,
  "seed": 1008,
  "level": "tricky",
  "cats": [
   {
    "name": "Clover",
    "color": "tabby",
    "row": 0,
    "column": 0,
    "text": "Meow. Among the ginger cats, only Waldo is honest.",
    "hidden": false,
    "secret": null,
    "mentions": [
     4,
     11,
     15
    ],
    "clue": {
     "cats": [
      0,
      4,
      11,
      15
     ],
     "table": "aqo="
    }
   },
   {
    "name": "Doodle",
    "color": "tabby",
    "row": 0,
    "column": 1,
    "text": "Meow meow. There are exactly 5 liars in total.",
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
     "table": "zMzMTMxMTKTMTEykTKSk2sxMTKRMpKTaTKSk2qTa2s3MTEykTKSk2kykpNqk2trNTKSk2qTa2s2k2trN2s3NzMxMTKRMpKTaTKSk2qTa2s1MpKTapNrazaTa2s3azc3MTKSk2qTa2s2k2trN2s3NzKTa2s3azc3M2s3NzM3MzMzMTEykTKSk2kykpNqk2trNTKSk2qTa2s2k2trN2s3NzEykpNqk2trNpNrazdrNzcyk2trN2s3NzNrNzczNzMzMTKSk2qTa2s2k2trN2s3NzKTa2s3azc3M2s3NzM3MzMyk2trN2s3NzNrNzczNzMzM2s3NzM3MzMzNzMzMzMzMzMxMTKRMpKTaTKSk2qTa2s1MpKTapNrazaTa2s3azc3MTKSk2qTa2s2k2trN2s3NzKTa2s3azc3M2s3NzM3MzMxMpKTapNrazaTa2s3azc3MpNrazdrNzczazc3MzczMzKTa2s3azc3M2s3NzM3MzMzazc3MzczMzM3MzMzMzMzMTKSk2qTa2s2k2trN2s3NzKTa2s3azc3M2s3NzM3MzMyk2trN2s3NzNrNzczNzMzM2s3NzM3MzMzNzMzMzMzMzKTa2s3azc3M2s3NzM3MzMzazc3MzczMzM3MzMzMzMzM2s3NzM3MzMzNzMzMzMzMzM3MzMzMzMzMzMzMzMzMzMzMTEykTKSk2kykpNqk2trNTKSk2qTa2s2k2trN2s3NzEykpNqk2trNpNrazdrNzcyk2trN2s3NzNrNzczNzMzMTKSk2qTa2s2k2trN2s3NzKTa2s3azc3M2s3NzM3MzMyk2trN2s3NzNrNzczNzMzM2s3NzM3MzMzNzMzMzMzMzEykpNqk2trNpNrazdrNzcyk2trN2s3NzNrNzczNzMzMpNrazdrNzczazc3MzczMzNrNzczNzMzMzczMzMzMzMyk2trN2s3NzNrNzczNzMzM2s3NzM3MzMzNzMzMzMzMzNrNzczNzMzMzczMzMzMzMzNzMzMzMzMzMzMzMzMzMzMTKSk2qTa2s2k2trN2s3NzKTa2s3azc3M2s3NzM3MzMyk2trN2s3NzNrNzczNzMzM2s3NzM3MzMzNzMzMzMzMzKTa2s3azc3M2s3NzM3MzMzazc3MzczMzM3MzMzMzMzM2s3NzM3MzMzNzMzMzMzMzM3MzMzMzMzMzMzMzMzMzMyk2trN2s3NzNrNzczNzMzM2s3NzM3MzMzNzMzMzMzMzNrNzczNzMzMzczMzMzMzMzNzMzMzMzMzMzMzMzMzMzM2s3NzM3MzMzNzMzMzMzMzM3MzMzMzMzMzMzMzMzMzMzNzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMxMTKRMpKTaTKSk2qTa2s1MpKTapNrazaTa2s3azc3MTKSk2qTa2s2k2trN2s3NzKTa2s3azc3M2s3NzM3MzMxMpKTapNrazaTa2s3azc3MpNrazdrNzczazc3MzczMzKTa2s3azc3M2s3NzM3MzMzazc3MzczMzM3MzMzMzMzMTKSk2qTa2s2k2trN2s3NzKTa2s3azc3M2s3NzM3MzMyk2trN2s3NzNrNzczNzMzM2s3NzM3MzMzNzMzMzMzMzKTa2s3azc3M2s3NzM3MzMzazc3MzczMzM3MzMzMzMzM2s3NzM3MzMzNzMzMzMzMzM3MzMzMzMzMzMzMzMzMzMxMpKTapNrazaTa2s3azc3MpNrazdrNzczazc3MzczMzKTa2s3azc3M2s3NzM3MzMzazc3MzczMzM3MzMzMzMzMpNrazdrNzczazc3MzczMzNrNzczNzMzMzczMzMzMzMzazc3MzczMzM3MzMzMzMzMzczMzMzMzMzMzMzMzMzMzKTa2s3azc3M2s3NzM3MzMzazc3MzczMzM3MzMzMzMzM2s3NzM3MzMzNzMzMzMzMzM3MzMzMzMzMzMzMzMzMzMzazc3MzczMzM3MzMzMzMzMzczMzMzMzMzMzMzMzMzMzM3MzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMTKSk2qTa2s2k2trN2s3NzKTa2s3azc3M2s3NzM3MzMyk2trN2s3NzNrNzczNzMzM2s3NzM3MzMzNzMzMzMzMzKTa2s3azc3M2s3NzM3MzMzazc3MzczMzM3MzMzMzMzM2s3NzM3MzMzNzMzMzMzMzM3MzMzMzMzMzMzMzMzMzMyk2trN2s3NzNrNzczNzMzM2s3NzM3MzMzNzMzMzMzMzNrNzczNzMzMzczMzMzMzMzNzMzMzMzMzMzMzMzMzMzM2s3NzM3MzMzNzMzMzMzMzM3MzMzMzMzMzMzMzMzMzMzNzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzKTa2s3azc3M2s3NzM3MzMzazc3MzczMzM3MzMzMzMzM2s3NzM3MzMzNzMzMzMzMzM3MzMzMzMzMzMzMzMzMzMzazc3MzczMzM3MzMzMzMzMzczMzMzMzMzMzMzMzMzMzM3MzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzM2s3NzM3MzMzNzMzMzMzMzM3MzMzMzMzMzMzMzMzMzMzNzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzM3MzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMTEykTKSk2kykpNqk2trNTKSk2qTa2s2k2trN2s3NzEykpNqk2trNpNrazdrNzcyk2trN2s3NzNrNzczNzMzMTKSk2qTa2s2k2trN2s3NzKTa2s3azc3M2s3NzM3MzMyk2trN2s3NzNrNzczNzMzM2s3NzM3MzMzNzMzMzMzMzEykpNqk2trNpNrazdrNzcyk2trN2s3NzNrNzczNzMzMpNrazdrNzczazc3MzczMzNrNzczNzMzMzczMzMzMzMyk2trN2s3NzNrNzczNzMzM2s3NzM3MzMzNzMzMzMzMzNrNzczNzMzMzczMzMzMzMzNzMzMzMzMzMzMzMzMzMzMTKSk2qTa2s2k2trN2s3NzKTa2s3azc3M2s3NzM3MzMyk2trN2s3NzNrNzczNzMzM2s3NzM3MzMzNzMzMzMzMzKTa2s3azc3M2s3NzM3MzMzazc3MzczMzM3MzMzMzMzM2s3NzM3MzMzNzMzMzMzMzM3MzMzMzMzMzMzMzMzMzMyk2trN2s3NzNrNzczNzMzM2s3NzM3MzMzNzMzMzMzMzNrNzczNzMzMzczMzMzMzMzNzMzMzMzMzMzMzMzMzMzM2s3NzM3MzMzNzMzMzMzMzM3MzMzMzMzMzMzMzMzMzMzNzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzEykpNqk2trNpNrazdrNzcyk2trN2s3NzNrNzczNzMzMpNrazdrNzczazc3MzczMzNrNzczNzMzMzczMzMzMzMyk2trN2s3NzNrNzczNzMzM2s3NzM3MzMzNzMzMzMzMzNrNzczNzMzMzczMzMzMzMzNzMzMzMzMzMzMzMzMzMzMpNrazdrNzczazc3MzczMzNrNzczNzMzMzczMzMzMzMzazc3MzczMzM3MzMzMzMzMzczMzMzMzMzMzMzMzMzMzNrNzczNzMzMzczMzMzMzMzNzMzMzMzMzMzMzMzMzMzMzczMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMyk2trN2s3NzNrNzczNzMzM2s3NzM3MzMzNzMzMzMzMzNrNzczNzMzMzczMzMzMzMzNzMzMzMzMzMzMzMzMzMzM2s3NzM3MzMzNzMzMzMzMzM3MzMzMzMzMzMzMzMzMzMzNzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzNrNzczNzMzMzczMzMzMzMzNzMzMzMzMzMzMzMzMzMzMzczMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzNzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMTKSk2qTa2s2k2trN2s3NzKTa2s3azc3M2s3NzM3MzMyk2trN2s3NzNrNzczNzMzM2s3NzM3MzMzNzMzMzMzMzKTa2s3azc3M2s3NzM3MzMzazc3MzczMzM3MzMzMzMzM2s3NzM3MzMzNzMzMzMzMzM3MzMzMzMzMzMzMzMzMzMyk2trN2s3NzNrNzczNzMzM2s3NzM3MzMzNzMzMzMzMzNrNzczNzMzMzczMzMzMzMzNzMzMzMzMzMzMzMzMzMzM2s3NzM3MzMzNzMzMzMzMzM3MzMzMzMzMzMzMzMzMzMzNzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzKTa2s3azc3M2s3NzM3MzMzazc3MzczMzM3MzMzMzMzM2s3NzM3MzMzNzMzMzMzMzM3MzMzMzMzMzMzMzMzMzMzazc3MzczMzM3MzMzMzMzMzczMzMzMzMzMzMzMzMzMzM3MzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzM2s3NzM3MzMzNzMzMzMzMzM3MzMzMzMzMzMzMzMzMzMzNzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzM3MzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMyk2trN2s3NzNrNzczNzMzM2s3NzM3MzMzNzMzMzMzMzNrNzczNzMzMzczMzMzMzMzNzMzMzMzMzMzMzMzMzMzM2s3NzM3MzMzNzMzMzMzMzM3MzMzMzMzMzMzMzMzMzMzNzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzNrNzczNzMzMzczMzMzMzMzNzMzMzMzMzMzMzMzMzMzMzczMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzNzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzM2s3NzM3MzMzNzMzMzMzMzM3MzMzMzMzMzMzMzMzMzMzNzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzM3MzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzNzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMxMTKRMpKTaTKSk2qTa2s1MpKTapNrazaTa2s3azc3MTKSk2qTa2s2k2trN2s3NzKTa2s3azc3M2s3NzM3MzMxMpKTapNrazaTa2s3azc3MpNrazdrNzczazc3MzczMzKTa2s3azc3M2s3NzM3MzMzazc3MzczMzM3MzMzMzMzMTKSk2qTa2s2k2trN2s3NzKTa2s3azc3M2s3NzM3MzMyk2trN2s3NzNrNzczNzMzM2s3NzM3MzMzNzMzMzMzMzKTa2s3azc3M2s3NzM3MzMzazc3MzczMzM3MzMzMzMzM2s3NzM3MzMzNzMzMzMzMzM3MzMzMzMzMzMzMzMzMzMxMpKTapNrazaTa2s3azc3MpNrazdrNzczazc3MzczMzKTa2s3azc3M2s3NzM3MzMzazc3MzczMzM3MzMzMzMzMpNrazdrNzczazc3MzczMzNrNzczNzMzMzczMzMzMzMzazc3MzczMzM3MzMzMzMzMzczMzMzMzMzMzMzMzMzMzKTa2s3azc3M2s3NzM3MzMzazc3MzczMzM3MzMzMzMzM2s3NzM3MzMzNzMzMzMzMzM3MzMzMzMzMzMzMzMzMzMzazc3MzczMzM3MzMzMzMzMzczMzMzMzMzMzMzMzMzMzM3MzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMTKSk2qTa2s2k2trN2s3NzKTa2s3azc3M2s3NzM3MzMyk2trN2s3NzNrNzczNzMzM2s3NzM3MzMzNzMzMzMzMzKTa2s3azc3M2s3NzM3MzMzazc3MzczMzM3MzMzMzMzM2s3NzM3MzMzNzMzMzMzMzM3MzMzMzMzMzMzMzMzMzMyk2trN2s3NzNrNzczNzMzM2s3NzM3MzMzNzMzMzMzMzNrNzczNzMzMzczMzMzMzMzNzMzMzMzMzMzMzMzMzMzM2s3NzM3MzMzNzMzMzMzMzM3MzMzMzMzMzMzMzMzMzMzNzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzKTa2s3azc3M2s3NzM3MzMzazc3MzczMzM3MzMzMzMzM2s3NzM3MzMzNzMzMzMzMzM3MzMzMzMzMzMzMzMzMzMzazc3MzczMzM3MzMzMzMzMzczMzMzMzMzMzMzMzMzMzM3MzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzM2s3NzM3MzMzNzMzMzMzMzM3MzMzMzMzMzMzMzMzMzMzNzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzM3MzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMxMpKTapNrazaTa2s3azc3MpNrazdrNzczazc3MzczMzKTa2s3azc3M2s3NzM3MzMzazc3MzczMzM3MzMzMzMzMpNrazdrNzczazc3MzczMzNrNzczNzMzMzczMzMzMzMzazc3MzczMzM3MzMzMzMzMzczMzMzMzMzMzMzMzMzMzKTa2s3azc3M2s3NzM3MzMzazc3MzczMzM3MzMzMzMzM2s3NzM3MzMzNzMzMzMzMzM3MzMzMzMzMzMzMzMzMzMzazc3MzczMzM3MzMzMzMzMzczMzMzMzMzMzMzMzMzMzM3MzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMpNrazdrNzczazc3MzczMzNrNzczNzMzMzczMzMzMzMzazc3MzczMzM3MzMzMzMzMzczMzMzMzMzMzMzMzMzMzNrNzczNzMzMzczMzMzMzMzNzMzMzMzMzMzMzMzMzMzMzczMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzazc3MzczMzM3MzMzMzMzMzczMzMzMzMzMzMzMzMzMzM3MzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzczMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzKTa2s3azc3M2s3NzM3MzMzazc3MzczMzM3MzMzMzMzM2s3NzM3MzMzNzMzMzMzMzM3MzMzMzMzMzMzMzMzMzMzazc3MzczMzM3MzMzMzMzMzczMzMzMzMzMzMzMzMzMzM3MzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzM2s3NzM3MzMzNzMzMzMzMzM3MzMzMzMzMzMzMzMzMzMzNzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzM3MzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzazc3MzczMzM3MzMzMzMzMzczMzMzMzMzMzMzMzMzMzM3MzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzczMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzM3MzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMTKSk2qTa2s2k2trN2s3NzKTa2s3azc3M2s3NzM3MzMyk2trN2s3NzNrNzczNzMzM2s3NzM3MzMzNzMzMzMzMzKTa2s3azc3M2s3NzM3MzMzazc3MzczMzM3MzMzMzMzM2s3NzM3MzMzNzMzMzMzMzM3MzMzMzMzMzMzMzMzMzMyk2trN2s3NzNrNzczNzMzM2s3NzM3MzMzNzMzMzMzMzNrNzczNzMzMzczMzMzMzMzNzMzMzMzMzMzMzMzMzMzM2s3NzM3MzMzNzMzMzMzMzM3MzMzMzMzMzMzMzMzMzMzNzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzKTa2s3azc3M2s3NzM3MzMzazc3MzczMzM3MzMzMzMzM2s3NzM3MzMzNzMzMzMzMzM3MzMzMzMzMzMzMzMzMzMzazc3MzczMzM3MzMzMzMzMzczMzMzMzMzMzMzMzMzMzM3MzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzM2s3NzM3MzMzNzMzMzMzMzM3MzMzMzMzMzMzMzMzMzMzNzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzM3MzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMyk2trN2s3NzNrNzczNzMzM2s3NzM3MzMzNzMzMzMzMzNrNzczNzMzMzczMzMzMzMzNzMzMzMzMzMzMzMzMzMzM2s3NzM3MzMzNzMzMzMzMzM3MzMzMzMzMzMzMzMzMzMzNzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzNrNzczNzMzMzczMzMzMzMzNzMzMzMzMzMzMzMzMzMzMzczMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzNzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzM2s3NzM3MzMzNzMzMzMzMzM3MzMzMzMzMzMzMzMzMzMzNzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzM3MzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzNzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzKTa2s3azc3M2s3NzM3MzMzazc3MzczMzM3MzMzMzMzM2s3NzM3MzMzNzMzMzMzMzM3MzMzMzMzMzMzMzMzMzMzazc3MzczMzM3MzMzMzMzMzczMzMzMzMzMzMzMzMzMzM3MzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzM2s3NzM3MzMzNzMzMzMzMzM3MzMzMzMzMzMzMzMzMzMzNzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzM3MzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzazc3MzczMzM3MzMzMzMzMzczMzMzMzMzMzMzMzMzMzM3MzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzczMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzM3MzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzM2s3NzM3MzMzNzMzMzMzMzM3MzMzMzMzMzMzMzMzMzMzNzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzM3MzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzNzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzM3MzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMw="
    }
   },
   {
    "name": "Echo",
    "color": "siamese",
    "row": 0,
    "column": 2,
    "text": "Purr. If you asked me, I'd say Clover is honest.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0
    ],
    "clue": {
     "cats": [
      0,
      2
     ],
     "table": "BQ=="
    }
   },
   {
    "name": "Felix",
    "color": "tuxedo",
    "row": 0,
    "column": 3,
    "text": "Nyaa... mrrp. Mew.",
    "hidden": true,
    "secret": "Same story for all of the grey cats: all honest, or all liars.",
    "mentions": [],
    "clue": null
   },
   {
    "name": "Honey",
    "color": "ginger",
    "row": 1,
    "column": 0,
    "text": "*narrows eyes* At least one of Doodle and Sprout is a liar.",
    "hidden": false,
    "secret": null,
    "mentions": [
     1,
     12
    ],
    "clue": {
     "cats": [
      1,
      4,
      12
     ],
     "table": "Ng=="
    }
   },
   {
    "name": "Jasper",
    "color": "grey",
    "row": 1,
    "column": 1,
    "text": "Pepper is the only honest cat among the cats in row 3.",
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
     "table": "qqpqqg=="
    }
   },
   {
    "name": "Kiwi",
    "color": "grey",
    "row": 1,
    "column": 2,
    "text": "*leans in* Noodle whispered to me: \"There's a mix among the cats above me: some honest, some liars.\"",
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
      6,
      9
     ],
     "table": "9vk="
    }
   },
   {
    "name": "Luna",
    "color": "tuxedo",
    "row": 1,
    "column": 3,
    "text": "Mrrp. Either Honey is honest, or all of the tuxedo cats are honest. Maybe both.",
    "hidden": false,
    "secret": null,
    "mentions": [
     3,
     4,
     9,
     14
    ],
    "clue": {
     "cats": [
      3,
      4,
      7,
      9,
      14
     ],
     "table": "x8PDww=="
    }
   },
   {
    "name": "Mochi",
    "color": "white",
    "row": 2,
    "column": 0,
    "text": "I'm the only honest cat among Kiwi, Rolo and me.",
    "hidden": false,
    "secret": null,
    "mentions": [
     6,
     11
    ],
    "clue": {
     "cats": [
      6,
      8,
      11
     ],
     "table": "7A=="
    }
   },
   {
    "name": "Noodle",
    "color": "tuxedo",
    "row": 2,
    "column": 1,
    "text": "*chirps at a bird outside*",
    "hidden": true,
    "secret": "There's a mix among the cats above me: some honest, some liars.",
    "mentions": [],
    "clue": null
   },
   {
    "name": "Pepper",
    "color": "white",
    "row": 2,
    "column": 2,
    "text": "All of the cats in row 4 are the same: all honest, or all liars.",
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
    "name": "Rolo",
    "color": "ginger",
    "row": 2,
    "column": 3,
    "text": "*nods at Waldo* The only honest cat among my neighbors.",
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
     "table": "ePA="
    }
   },
   {
    "name": "Sprout",
    "color": "siamese",
    "row": 3,
    "column": 0,
    "text": "I'm the only honest cat among Luna, Noodle and me.",
    "hidden": false,
    "secret": null,
    "mentions": [
     7,
     9
    ],
    "clue": {
     "cats": [
      7,
      9,
      12
     ],
     "table": "+A=="
    }
   },
   {
    "name": "Truffle",
    "color": "siamese",
    "row": 3,
    "column": 1,
    "text": "*rubs against your leg* Waldo would say I'm honest.",
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
    "name": "Vinny",
    "color": "tuxedo",
    "row": 3,
    "column": 2,
    "text": "Mrrp. What Felix meant was: \"Same story for all of the grey cats: all honest, or all liars.\"",
    "hidden": false,
    "secret": null,
    "mentions": [
     3,
     5,
     6
    ],
    "clue": {
     "cats": [
      3,
      5,
      6,
      14
     ],
     "table": "af8="
    }
   },
   {
    "name": "Waldo",
    "color": "ginger",
    "row": 3,
    "column": 3,
    "text": "Either Sprout is honest, or all of the corner cats are liars (or both).",
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
     "table": "D3A="
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
  "seed": 1027,
  "level": "tricky",
  "cats": [
   {
    "name": "Apricot",
    "color": "grey",
    "row": 0,
    "column": 0,
    "text": "Mrrp. Either Doodle is a liar, or all of the tabby cats are honest. Maybe both.",
    "hidden": false,
    "secret": null,
    "mentions": [
     1,
     3,
     10
    ],
    "clue": {
     "cats": [
      0,
      1,
      3,
      10
     ],
     "table": "ZWY="
    }
   },
   {
    "name": "Doodle",
    "color": "ginger",
    "row": 0,
    "column": 1,
    "text": "All of the grey cats are honest. Purrfectly so.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     12
    ],
    "clue": {
     "cats": [
      0,
      1,
      12
     ],
     "table": "yQ=="
    }
   },
   {
    "name": "Echo",
    "color": "ginger",
    "row": 0,
    "column": 2,
    "text": "Mrrp? Mew mew mrrrow!",
    "hidden": true,
    "secret": "*purrs* Pepper and Rusty are both truth-tellers or both fibbers.",
    "mentions": [],
    "clue": null
   },
   {
    "name": "Felix",
    "color": "tabby",
    "row": 0,
    "column": 3,
    "text": "Indigo told me: \"Umber is the only liar among the corner cats.\"",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     6,
     12,
     15
    ],
    "clue": {
     "cats": [
      0,
      3,
      6,
      12,
      15
     ],
     "table": "/Pzt/A=="
    }
   },
   {
    "name": "Goose",
    "color": "calico",
    "row": 1,
    "column": 0,
    "text": "Mrrp. Whatever one of Doodle, Kettle and me is, the rest are too.",
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
     "table": "TQ=="
    }
   },
   {
    "name": "Honey",
    "color": "black",
    "row": 1,
    "column": 1,
    "text": "I speak Echo. Translated, they said: \"*purrs* Pepper and Rusty are both truth-tellers or both fibbers.\"",
    "hidden": false,
    "secret": null,
    "mentions": [
     2,
     11,
     13
    ],
    "clue": {
     "cats": [
      2,
      5,
      11,
      13
     ],
     "table": "7d4="
    }
   },
   {
    "name": "Indigo",
    "color": "tuxedo",
    "row": 1,
    "column": 2,
    "text": "*chirps at a bird outside*",
    "hidden": true,
    "secret": "Umber is the only liar among the corner cats.",
    "mentions": [],
    "clue": null
   },
   {
    "name": "Kettle",
    "color": "calico",
    "row": 1,
    "column": 3,
    "text": "Noodle is the only honest cat among Noodle, Quincy and me.",
    "hidden": false,
    "secret": null,
    "mentions": [
     9,
     12
    ],
    "clue": {
     "cats": [
      7,
      9,
      12
     ],
     "table": "ig=="
    }
   },
   {
    "name": "Marble",
    "color": "black",
    "row": 2,
    "column": 0,
    "text": "Mrrp. Either Umber is a liar, or all of the cats in the middle are honest. Maybe both.",
    "hidden": false,
    "secret": null,
    "mentions": [
     5,
     6,
     9,
     10,
     15
    ],
    "clue": {
     "cats": [
      5,
      6,
      8,
      9,
      10,
      15
     ],
     "table": "4fDw8A8PDw8="
    }
   },
   {
    "name": "Noodle",
    "color": "black",
    "row": 2,
    "column": 1,
    "text": "You can trust Felix. That's a purr-fact.",
    "hidden": false,
    "secret": null,
    "mentions": [
     3
    ],
    "clue": {
     "cats": [
      3,
      9
     ],
     "table": "CQ=="
    }
   },
   {
    "name": "Olive",
    "color": "tabby",
    "row": 2,
    "column": 2,
    "text": "Only one bad kitty: exactly one of the cats in row 1 is a liar.",
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
      10
     ],
     "table": "FgHp/g=="
    }
   },
   {
    "name": "Pepper",
    "color": "tuxedo",
    "row": 2,
    "column": 3,
    "text": "Every cat is honest, except Marble, who is a liar.",
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
     "table": "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8="
    }
   },
   {
    "name": "Quincy",
    "color": "grey",
    "row": 3,
    "column": 0,
    "text": "Exactly one of the cats in my row is a liar.",
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
     "table": "vKs="
    }
   },
   {
    "name": "Rusty",
    "color": "calico",
    "row": 3,
    "column": 1,
    "text": "Trust Honey over Goose: Honey is honest and Goose is a liar.",
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
      13
     ],
     "table": "0g=="
    }
   },
   {
    "name": "Saffron",
    "color": "calico",
    "row": 3,
    "column": 2,
    "text": "Purr. You can trust at least one of Doodle and Kettle.",
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
      14
     ],
     "table": "hw=="
    }
   },
   {
    "name": "Umber",
    "color": "tuxedo",
    "row": 3,
    "column": 3,
    "text": "Ask me, and I'd tell you Marble is honest.",
    "hidden": false,
    "secret": null,
    "mentions": [
     8
    ],
    "clue": {
     "cats": [
      8,
      15
     ],
     "table": "BQ=="
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
  "seed": 1029,
  "level": "tricky",
  "cats": [
   {
    "name": "Apricot",
    "color": "calico",
    "row": 0,
    "column": 0,
    "text": "Bean would say I'm honest.",
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
     "table": "Aw=="
    }
   },
   {
    "name": "Bean",
    "color": "white",
    "row": 0,
    "column": 1,
    "text": "Mrrp? Mew mew mrrrow!",
    "hidden": true,
    "secret": "If you asked me, I'd say Kettle is honest.",
    "mentions": [],
    "clue": null
   },
   {
    "name": "Cricket",
    "color": "ginger",
    "row": 0,
    "column": 2,
    "text": "Bean is the only honest cat among the cats to my left.",
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
    "name": "Dumpling",
    "color": "tuxedo",
    "row": 0,
    "column": 3,
    "text": "Purr. If you asked me, I'd say Fig is honest.",
    "hidden": false,
    "secret": null,
    "mentions": [
     5
    ],
    "clue": {
     "cats": [
      3,
      5
     ],
     "table": "Aw=="
    }
   },
   {
    "name": "Espresso",
    "color": "siamese",
    "row": 1,
    "column": 0,
    "text": "Hiss. One of Bean and Dumpling is a liar, maybe both.",
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
     "table": "Hg=="
    }
   },
   {
    "name": "Fig",
    "color": "tuxedo",
    "row": 1,
    "column": 1,
    "text": "Mrrp. Whatever one of Bean, Goose and me is, the rest are too.",
    "hidden": false,
    "secret": null,
    "mentions": [
     1,
     6
    ],
    "clue": {
     "cats": [
      1,
      5,
      6
     ],
     "table": "TQ=="
    }
   },
   {
    "name": "Goose",
    "color": "grey",
    "row": 1,
    "column": 2,
    "text": "*narrows eyes* At least one of Apricot and Fig is a liar.",
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
      6
     ],
     "table": "Hg=="
    }
   },
   {
    "name": "Hazel",
    "color": "white",
    "row": 1,
    "column": 3,
    "text": "Mrrp. Among the calico cats, only Apricot is a liar.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     14
    ],
    "clue": {
     "cats": [
      0,
      7,
      14
     ],
     "table": "xg=="
    }
   },
   {
    "name": "Inky",
    "color": "siamese",
    "row": 2,
    "column": 0,
    "text": "*slow blinks* If you asked me about Espresso, I'd say honest.",
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
     "table": "BQ=="
    }
   },
   {
    "name": "Juniper",
    "color": "grey",
    "row": 2,
    "column": 1,
    "text": "At least one of Apricot and Pickles is a liar.",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     14
    ],
    "clue": {
     "cats": [
      0,
      9,
      14
     ],
     "table": "Ng=="
    }
   },
   {
    "name": "Kettle",
    "color": "white",
    "row": 2,
    "column": 2,
    "text": "*swishes tail* Among the tuxedo cats, there's at least one liar and at least one honest cat.",
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
      10
     ],
     "table": "lg=="
    }
   },
   {
    "name": "Lentil",
    "color": "ginger",
    "row": 2,
    "column": 3,
    "text": "*purrs* All of Inky, Marble and me are from the same litter: all honest, or all liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     8,
     12
    ],
    "clue": {
     "cats": [
      8,
      11,
      12
     ],
     "table": "TQ=="
    }
   },
   {
    "name": "Marble",
    "color": "grey",
    "row": 3,
    "column": 0,
    "text": "*twitches tail* Exactly one of my neighbors is a liar.",
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
     "table": "lg=="
    }
   },
   {
    "name": "Nimbus",
    "color": "ginger",
    "row": 3,
    "column": 1,
    "text": "I heard Bean say: \"Mrrp. Either Ravioli is honest, or all of the cats in row 3 are honest. Maybe both.\"",
    "hidden": false,
    "secret": null,
    "mentions": [
     1,
     8,
     9,
     10,
     11,
     15
    ],
    "clue": {
     "cats": [
      1,
      8,
      9,
      10,
      11,
      13,
      15
     ],
     "table": "VVVVVf////+pqqqq/////w=="
    }
   },
   {
    "name": "Pickles",
    "color": "calico",
    "row": 3,
    "column": 2,
    "text": "There's a mix among Lentil, Marble and me: some honest, some liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     11,
     12
    ],
    "clue": {
     "cats": [
      11,
      12,
      14
     ],
     "table": "jg=="
    }
   },
   {
    "name": "Ravioli",
    "color": "siamese",
    "row": 3,
    "column": 3,
    "text": "Hiss! Goose and Pickles are liars, both of them.",
    "hidden": false,
    "secret": null,
    "mentions": [
     6,
     14
    ],
    "clue": {
     "cats": [
      6,
      14,
      15
     ],
     "table": "eA=="
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
  "seed": 50007,
  "level": "tricky",
  "cats": [
   {
    "name": "Apricot",
    "color": "siamese",
    "row": 0,
    "column": 0,
    "text": "Purr. If you asked me, I'd say Ursa is honest.",
    "hidden": false,
    "secret": null,
    "mentions": [
     14
    ],
    "clue": {
     "cats": [
      0,
      14
     ],
     "table": "Aw=="
    }
   },
   {
    "name": "Bean",
    "color": "tuxedo",
    "row": 0,
    "column": 1,
    "text": "I heard Mango say: \"Vanilla is the only liar among the cats in row 4.\"",
    "hidden": false,
    "secret": null,
    "mentions": [
     9,
     12,
     13,
     14,
     15
    ],
    "clue": {
     "cats": [
      1,
      9,
      12,
      13,
      14,
      15
     ],
     "table": "7u7u7uvu7u4="
    }
   },
   {
    "name": "Cricket",
    "color": "black",
    "row": 0,
    "column": 2,
    "text": "Iggy told me: \"Exactly 2 of the cats in my row are liars.\"",
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
      2,
      4,
      5,
      6,
      7
     ],
     "table": "6r7r/g=="
    }
   },
   {
    "name": "Espresso",
    "color": "ginger",
    "row": 0,
    "column": 3,
    "text": "Nimbus and Ursa are both honest.",
    "hidden": false,
    "secret": null,
    "mentions": [
     10,
     14
    ],
    "clue": {
     "cats": [
      3,
      10,
      14
     ],
     "table": "qQ=="
    }
   },
   {
    "name": "Fudge",
    "color": "tuxedo",
    "row": 1,
    "column": 0,
    "text": "Ask me, and I'd tell you Hobbes is honest.",
    "hidden": false,
    "secret": null,
    "mentions": [
     6
    ],
    "clue": {
     "cats": [
      4,
      6
     ],
     "table": "Aw=="
    }
   },
   {
    "name": "Goose",
    "color": "calico",
    "row": 1,
    "column": 1,
    "text": "Purr. If you asked me, I'd say Ursa is honest.",
    "hidden": false,
    "secret": null,
    "mentions": [
     14
    ],
    "clue": {
     "cats": [
      5,
      14
     ],
     "table": "Aw=="
    }
   },
   {
    "name": "Hobbes",
    "color": "ginger",
    "row": 1,
    "column": 2,
    "text": "*thinks hard* Either Kettle is honest, or all of the cats to my left are liars, or both.",
    "hidden": false,
    "secret": null,
    "mentions": [
     4,
     5,
     8
    ],
    "clue": {
     "cats": [
      4,
      5,
      6,
      8
     ],
     "table": "D3g="
    }
   },
   {
    "name": "Iggy",
    "color": "tuxedo",
    "row": 1,
    "column": 3,
    "text": "Nyaa... mrrp. Mew.",
    "hidden": true,
    "secret": "Exactly 2 of the cats in my row are liars.",
    "mentions": [],
    "clue": null
   },
   {
    "name": "Kettle",
    "color": "calico",
    "row": 2,
    "column": 0,
    "text": "*points a paw at Nimbus* The only liar among Hobbes, Nimbus and me.",
    "hidden": false,
    "secret": null,
    "mentions": [
     6,
     10
    ],
    "clue": {
     "cats": [
      6,
      8,
      10
     ],
     "table": "3A=="
    }
   },
   {
    "name": "Mango",
    "color": "calico",
    "row": 2,
    "column": 1,
    "text": "Nyaa... mrrp. Mew.",
    "hidden": true,
    "secret": "Vanilla is the only liar among the cats in row 4.",
    "mentions": [],
    "clue": null
   },
   {
    "name": "Nimbus",
    "color": "black",
    "row": 2,
    "column": 2,
    "text": "All of the cats in my column are liars. Every whisker in the bunch is crooked.",
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
     "table": "8HA="
    }
   },
   {
    "name": "Quill",
    "color": "ginger",
    "row": 2,
    "column": 3,
    "text": "Either Apricot is honest, or all of the cats in my row are liars (or both).",
    "hidden": false,
    "secret": null,
    "mentions": [
     0,
     8,
     9,
     10
    ],
    "clue": {
     "cats": [
      0,
      8,
      9,
      10,
      11
     ],
     "table": "VVWqKg=="
    }
   },
   {
    "name": "Sushi",
    "color": "calico",
    "row": 3,
    "column": 0,
    "text": "*kneads paws* At least one of Cricket and Nimbus is honest.",
    "hidden": false,
    "secret": null,
    "mentions": [
     2,
     10
    ],
    "clue": {
     "cats": [
      2,
      10,
      12
     ],
     "table": "hw=="
    }
   },
   {
    "name": "Tater",
    "color": "tuxedo",
    "row": 3,
    "column": 1,
    "text": "*licks paw* If you asked me about Goose, I'd say liar.",
    "hidden": false,
    "secret": null,
    "mentions": [
     5
    ],
    "clue": {
     "cats": [
      5,
      13
     ],
     "table": "Cg=="
    }
   },
   {
    "name": "Ursa",
    "color": "siamese",
    "row": 3,
    "column": 2,
    "text": "Mrrp. Exactly 9 of the cats on the edges can be trusted, the rest are liars.",
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
     "table": "gGhoFmgWFgFoFhYBFgEBAGgWFgEWAQEAFgEBAAEAAABoFhYBFgEBABYBAQABAAAAFgEBAAEAAAABAAAAAAAAAGgWFgEWAQEAFgEBAAEAAAAWAQEAAQAAAAEAAAAAAAAAFgEBAAEAAAABAAAAAAAAAAEAAAAAAAAAAAAAAAAAAACX6en+6f7+/+n+/v/+////6f7+//7////+/////////+n+/v/+/////v/////////+////////////////////6f7+//7////+//////////7////////////////////+/////////////////////////////////////////2gWFgEWAQEAFgEBAAEAAAAWAQEAAQAAAAEAAAAAAAAAFgEBAAEAAAABAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAWAQEAAQAAAAEAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA6f7+//7////+//////////7////////////////////+//////////////////////////////////////////7///////////////////////////////////////////////////////////////////////////////////8="
    }
   },
   {
    "name": "Vanilla",
    "color": "ginger",
    "row": 3,
    "column": 3,
    "text": "Mrow. Cricket would claim to be a liar.",
    "hidden": false,
    "secret": null,
    "mentions": [
     2
    ],
    "clue": {
     "cats": [
      2,
      15
     ],
     "table": "DA=="
    }
   }
  ],
  "liars": [
   false,
   false,
   false,
   true,
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
  "seed": 50013,
  "level": "tricky",
  "cats": [
   {
    "name": "Angus",
    "color": "ginger",
    "row": 0,
    "column": 0,
    "text": "Everyone among the cats to my right is honest, except Doodle, who is a liar.",
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
     "table": "qqk="
    }
   },
   {
    "name": "Biscuit",
    "color": "ginger",
    "row": 0,
    "column": 1,
    "text": "There's a mix among Jasper, Oreo and me: some honest, some liars.",
    "hidden": false,
    "secret": null,
    "mentions": [
     9,
     14
    ],
    "clue": {
     "cats": [
      1,
      9,
      14
     ],
     "table": "1A=="
    }
   },
   {
    "name": "Cricket",
    "color": "black",
    "row": 0,
    "column": 2,
    "text": "*incomprehensible meowing*",
    "hidden": true,
    "secret": "Indigo and Loki are both honest, or both liars.",
    "mentions": [],
    "clue": null
   },
   {
    "name": "Doodle",
    "color": "black",
    "row": 0,
    "column": 3,
    "text": "At least 3 of the cats in row 2 are liars. Fur real.",
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
     "table": "qmpqVg=="
    }
   },
   {
    "name": "Espresso",
    "color": "grey",
    "row": 1,
    "column": 0,
    "text": "*thinks hard* Either Doodle is a liar, or all of the cats on the edges are honest, or both.",
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
     "table": "Af//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wA="
    }
   },
   {
    "name": "Felix",
    "color": "calico",
    "row": 1,
    "column": 1,
    "text": "*licks paw* If you asked me about Kettle, I'd say liar.",
    "hidden": false,
    "secret": null,
    "mentions": [
     10
    ],
    "clue": {
     "cats": [
      5,
      10
     ],
     "table": "DA=="
    }
   },
   {
    "name": "Gnocchi",
    "color": "white",
    "row": 1,
    "column": 2,
    "text": "Each and every one of the cats to my left is a liar. Meow.",
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
     "table": "eA=="
    }
   },
   {
    "name": "Honey",
    "color": "ginger",
    "row": 1,
    "column": 3,
    "text": "Mark my whiskers: either Gnocchi is honest, or all of Doodle, Kettle and me are honest. Maybe both.",
    "hidden": false,
    "secret": null,
    "mentions": [
     3,
     6,
     10
    ],
    "clue": {
     "cats": [
      3,
      6,
      7,
      10
     ],
     "table": "x8M="
    }
   },
   {
    "name": "Indigo",
    "color": "grey",
    "row": 2,
    "column": 0,
    "text": "Mango always tells the truth, no kitten.",
    "hidden": false,
    "secret": null,
    "mentions": [
     12
    ],
    "clue": {
     "cats": [
      8,
      12
     ],
     "table": "CQ=="
    }
   },
   {
    "name": "Jasper",
    "color": "white",
    "row": 2,
    "column": 1,
    "text": "Meow. Among the cats in my row, only Indigo is honest.",
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
     "table": "zIw="
    }
   },
   {
    "name": "Kettle",
    "color": "ginger",
    "row": 2,
    "column": 2,
    "text": "Same story for all of the cats to my left: all honest, or all liars.",
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
      10
     ],
     "table": "aQ=="
    }
   },
   {
    "name": "Loki",
    "color": "grey",
    "row": 2,
    "column": 3,
    "text": "Either Oreo is honest, or all of the cats to my left are liars (or both).",
    "hidden": false,
    "secret": null,
    "mentions": [
     8,
     9,
     10,
     14
    ],
    "clue": {
     "cats": [
      8,
      9,
      10,
      11,
      14
     ],
     "table": "/wCAfw=="
    }
   },
   {
    "name": "Mango",
    "color": "grey",
    "row": 3,
    "column": 0,
    "text": "Mrrp. Whatever one of the cats in my row is, the rest are too.",
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
     "table": "qyo="
    }
   },
   {
    "name": "Nimbus",
    "color": "calico",
    "row": 3,
    "column": 1,
    "text": "Hiss. Among the cats on the edges you'll find both: at least one liar and at least one honest cat.",
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
     "table": "/v///////////////////////////////////////////////////////////////////////////////////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/////////////////////////////////////////////////////////////////////////////////////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP////////////////////////////////////////////////////////////////////////////////////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/////////////////////////////////////////////////////////////////////////////////////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIA="
    }
   },
   {
    "name": "Oreo",
    "color": "calico",
    "row": 3,
    "column": 2,
    "text": "Cricket told me: \"Indigo and Loki are both honest, or both liars.\"",
    "hidden": false,
    "secret": null,
    "mentions": [
     2,
     8,
     11
    ],
    "clue": {
     "cats": [
      2,
      8,
      11,
      14
     ],
     "table": "af8="
    }
   },
   {
    "name": "Queenie",
    "color": "calico",
    "row": 3,
    "column": 3,
    "text": "Meow meow. Exactly 2 of the cats in row 2 are liars.",
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
      15
     ],
     "table": "aBaX6Q=="
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
   true,
   true,
   false,
   false,
   false,
   false,
   false
  ]
 }
];
