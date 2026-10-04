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


# --- Two cats (PairStatement) ---
# {a} and {b} are cat names. The _ME_ lists are used when the speaker is a: only {b}, the speaker is "I"/"me".

PAIR_SAME_TEXTS = [
    "{a} and {b} are both honest, or both liars.",
    "Meow. {a} and {b} are the same: both honest, or both liars.",
    "{a} and {b} are from the same litter: both honest, or both liars.",
    "*purrs* {a} and {b} are both truth-tellers or both fibbers.",
    "If {a} is lying, so is {b}. If {a} is honest, so is {b}.",
    "{a} and {b} are on the same side, honest or not.",
    "Whatever {a} is, {b} is too.",
]

PAIR_SAME_ME_TEXTS = [
    "{b} and I are both honest, or both liars.",
    "Meow. {b} and I are the same: both honest, or both liars.",
    "{b} and I are from the same litter: both honest, or both liars.",
    "Whatever I am, {b} is too.",
]

PAIR_DIFFERENT_TEXTS = [
    "Exactly one of {a} and {b} is a liar.",
    "{a} and {b} are opposites: one is honest, the other is a liar.",
    "*swishes tail* One of {a} and {b} is honest, the other is a liar.",
    "Hiss. {a} and {b} are not the same: exactly one of them is a liar.",
]

PAIR_DIFFERENT_ME_TEXTS = [
    "Exactly one of {b} and me is a liar.",
    "{b} and I are opposites: one is honest, the other is a liar.",
    "Mrrp. Whatever I am, {b} is the opposite.",
]

PAIR_AT_LEAST_ONE_LIAR_TEXTS = [
    "At least one of {a} and {b} is a liar.",
    "{a} and {b} are not both honest.",
    "Mrrp. {a} and {b} can't both be trusted.",
    "*narrows eyes* At least one of {a} and {b} is a liar.",
]

PAIR_AT_LEAST_ONE_LIAR_ME_TEXTS = [
    "At least one of {b} and me is a liar.",
    "{b} and I are not both honest.",
    "Meow. {b} and I can't both be trusted.",
]

PAIR_AT_LEAST_ONE_HONEST_TEXTS = [
    "At least one of {a} and {b} is honest.",
    "{a} and {b} are not both liars.",
    "Purr. You can trust at least one of {a} and {b}.",
    "*kneads paws* At least one of {a} and {b} is honest.",
]

PAIR_AT_LEAST_ONE_HONEST_ME_TEXTS = [
    "At least one of {b} and me is honest.",
    "{b} and I are not both liars.",
    "Purr. You can trust at least one of {b} and me.",
]

PAIR_BOTH_LIARS_TEXTS = [
    "{a} and {b} are both liars.",
    "Hiss! {a} and {b} are liars, both of them.",
    "Don't trust {a} or {b}. Both are liars.",
    "*arches back* {a} and {b} are both liars.",
]

PAIR_BOTH_LIARS_ME_TEXTS = [
    "{b} and I are both liars.",
    "Meow. {b} and I are liars, both of us.",
    "Don't trust {b} or me. We are both liars.",
]

PAIR_BOTH_HONEST_TEXTS = [
    "{a} and {b} are both honest.",
    "Purr. You can trust {a} and {b}, both of them.",
    "{a} and {b} are both honest, fur real.",
    "*slow blinks* {a} and {b} are both honest.",
]

PAIR_BOTH_HONEST_ME_TEXTS = [
    "{b} and I are both honest.",
    "Purr. {b} and I are honest, both of us.",
    "You can trust {b} and me. We are both honest.",
]

PAIR_IF_A_HONEST_THEN_B_TEXTS = [
    "If {a} is honest, then {b} is honest too.",
    "Mrrp. If {a} tells the truth, so does {b}.",
    "Either {a} is a liar, or {b} is honest.",
    "{b} can only be a liar if {a} is a liar too.",
]

PAIR_IF_A_HONEST_THEN_B_ME_TEXTS = [
    "If I'm honest, then {b} is honest too.",
    "Meow. If I tell the truth, so does {b}.",
    "Either I'm a liar, or {b} is honest.",
]

PAIR_A_HONEST_B_LIAR_TEXTS = [
    "{a} is honest, but {b} is a liar.",
    "Trust {a}, not {b}. {a} is honest and {b} is a liar.",
    "*flicks tail* {a} is honest. {b} is a liar.",
    "Purr for {a}, hiss for {b}: {a} is honest, {b} is a liar.",
]

PAIR_A_HONEST_B_LIAR_ME_TEXTS = [
    "I'm honest, but {b} is a liar.",
    "Trust me, not {b}. I'm honest and {b} is a liar.",
    "Hiss. Unlike me, {b} is a liar.",
]
