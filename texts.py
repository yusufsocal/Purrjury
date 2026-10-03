"""Sentences for statements. Placeholders:
    {name}  a single cat's name
    {area}  the area text, e.g. "my neighbors", "the tabby cats", "us"
    {n}     the number of liars
    {h}     the number of honest cats (size of the area minus n)
Every sentence keeps the logic words plain (liar / honest / exactly / at least),
the cat talk is only decoration around them.
"""

# --- One specific cat (area of size 1) ---

LIAR_TEXTS = [
    "{name} is lying through their whiskers.",
    "Don't trust {name}. That cat's a fur-aud.",
    "{name} is lying like a lion.",
    "I'm not kitten you, {name} is a liar.",
    "Hiss. Don't believe a word {name} says, that cat is not honest.",
]

HONEST_TEXTS = [
    "{name} is pawsitively honest.",
    "You can trust {name}. That's a purr-fact.",
    "{name} always tells the truth, no kitten.",
    "{name} is honest, fur real.",
    "{name} is no liar. Purr.",
]


# --- Counting in an area (area of size 2 or more) ---

# exactly 0
NONE_TEXTS = [
    "None of {area} are liars.",
    "Mrrp! None of {area} are liars, I'd bet my nine lives on it.",
    "Not a single liar among {area}. Purr.",
    "*sniffs around* None of {area} are liars.",
    "All of {area} are honest. Purrfectly so.",
    "Every single one of {area} can be trusted. Mrrp.",
]

# exactly all of them
ALL_TEXTS = [
    "All of {area} are liars.",
    "Hiss! Every single one of {area} is a liar.",
    "All of {area} are liars. Not one honest whisker in the bunch.",
    "Meow. All of {area} are liars, every last one.",
    "None of {area} are honest. Hiss!",
    "Not one of {area} can be trusted. Meow.",
]

# exactly 1 (but not all)
EXACTLY_ONE_TEXTS = [
    "Exactly one of {area} is a liar.",
    "Mrow. Exactly one of {area} is a liar.",
    "*twitches tail* Exactly one of {area} is a liar.",
    "Only one bad kitty: exactly one of {area} is a liar.",
    "All but one of {area} are honest.",
    "Purr. All of {area} can be trusted, except exactly one.",
]

# exactly n, with n of 2 or more (but not all)
EXACTLY_N_TEXTS = [
    "Exactly {n} of {area} are liars.",
    "Meow meow. Exactly {n} of {area} are liars.",
    "I counted with my paws: exactly {n} of {area} are liars.",
    "*flicks ears* Exactly {n} of {area} are liars.",
    "Exactly {h} of {area} can be trusted.",
    "Mrrp. Exactly {h} of {area} can be trusted, the rest are liars.",
]

# at least 1
AT_LEAST_ONE_TEXTS = [
    "At least one of {area} is a liar.",
    "Purr... at least one of {area} is a liar.",
    "I smell a rat. At least one of {area} is a liar.",
    "*narrows eyes* At least one of {area} is a liar.",
    "Not all of {area} are honest.",
    "Hiss. Not every one of {area} can be trusted.",
]

# at least n, with n of 2 or more (but not all)
AT_LEAST_N_TEXTS = [
    "At least {n} of {area} are liars.",
    "Mrrrow! At least {n} of {area} are liars.",
    "At least {n} of {area} are liars. Fur real.",
    "*arches back* At least {n} of {area} are liars.",
    "At most {h} of {area} can be trusted.",
    "Meow. No more than {h} of {area} can be trusted.",
]


# --- Two cats compared (SameType) ---

SAME_TYPE_TEXTS = [
    "{name1} and {name2} are both honest, or both liars.",
    "Meow. {name1} and {name2} are the same: both honest, or both liars.",
    "{name1} and {name2} are from the same litter: both honest, or both liars.",
    "*purrs* {name1} and {name2} are both truth-tellers or both fibbers.",
    "If {name1} is lying, so is {name2}. If {name1} is honest, so is {name2}.",
    "{name1} and {name2} are on the same side, honest or not.",
    "Whatever {name1} is, {name2} is too.",
]
