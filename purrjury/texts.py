"""Sentences for statements. Placeholders:
    {name}  a single cat's name
    {area}  the area text, e.g. "my neighbors", "the tabby cats", "the cats in the grid"
    {n}     the number of liars
    {h}     the number of honest cats (size of the area minus n)
    {a} {b}            the two cats in a pair statement
    {quoted} {target}  the quoted cat and the cat the quote is about
    {opposite} {then}  the types in an IfThen statement
    {quote}            what a hidden cat supposedly said
Every sentence keeps the logic words plain (liar / honest / exactly / at least),
the cat talk is only decoration around them.
No negative wordings (not, none, can't, at most, ...): when a liar says one, the player
would have to un-negate twice.
"""

# --- One specific cat (area of size 1) ---

LIAR_TEXTS = [
    "{name} is lying through their whiskers.",
    "{name} is a liar. That cat's a fur-aud.",
    "{name} is lying like a lion.",
    "I'm not kitten you, {name} is a liar.",
    "Hiss. {name} is a liar through and through.",
]

HONEST_TEXTS = [
    "{name} is pawsitively honest.",
    "You can trust {name}. That's a purr-fact.",
    "{name} always tells the truth, no kitten.",
    "{name} is honest, fur real.",
    "{name} is as honest as they come. Purr.",
]


# --- Counting in an area (area of size 2 or more) ---

# exactly 0
NONE_TEXTS = [
    "All of {area} are honest.",
    "Mrrp! All of {area} are honest, I'd bet my nine lives on it.",
    "Every one of {area} is honest. Purr.",
    "*sniffs around* All of {area} are honest.",
    "All of {area} are honest. Purrfectly so.",
    "Every single one of {area} can be trusted. Mrrp.",
]

# exactly all of them
ALL_TEXTS = [
    "All of {area} are liars.",
    "Hiss! Every single one of {area} is a liar.",
    "All of {area} are liars. Every whisker in the bunch is crooked.",
    "Meow. All of {area} are liars, every last one.",
    "Every one of {area} is a liar. Hiss!",
    "Each and every one of {area} is a liar. Meow.",
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
    "There's at least one liar among {area}.",
    "Hiss. There's a liar among {area}, maybe more.",
]

# at least n, with n of 2 or more (but not all)
AT_LEAST_N_TEXTS = [
    "At least {n} of {area} are liars.",
    "Mrrrow! At least {n} of {area} are liars.",
    "At least {n} of {area} are liars. Fur real.",
    "*arches back* At least {n} of {area} are liars.",
    "There are at least {n} liars among {area}.",
    "Meow. {n} or more of {area} are liars.",
]


# --- Two cats (PairStatement) ---
# {a} and {b} are cat names. The _ME_ lists are used when the speaker is a: only {b}, the speaker is "I"/"me".

PAIR_SAME_TEXTS = [
    "{a} and {b} are both honest, or both liars.",
    "Meow. {a} and {b} are the same: both honest, or both liars.",
    "{a} and {b} are from the same litter: both honest, or both liars.",
    "*purrs* {a} and {b} are both truth-tellers or both fibbers.",
    "If {a} is lying, so is {b}. If {a} is honest, so is {b}.",
    "{a} and {b} are on the same side: both honest, or both liars.",
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
    "Hiss. {a} and {b} are opposites: exactly one of them is a liar.",
]

PAIR_DIFFERENT_ME_TEXTS = [
    "Exactly one of {b} and me is a liar.",
    "{b} and I are opposites: one is honest, the other is a liar.",
    "Mrrp. Whatever I am, {b} is the opposite.",
]

PAIR_AT_LEAST_ONE_LIAR_TEXTS = [
    "At least one of {a} and {b} is a liar.",
    "Hiss. One of {a} and {b} is a liar, maybe both.",
    "Mrrp. At least one of {a} and {b} is a liar. Maybe both.",
    "*narrows eyes* At least one of {a} and {b} is a liar.",
]

PAIR_AT_LEAST_ONE_LIAR_ME_TEXTS = [
    "At least one of {b} and me is a liar.",
    "Hiss. One of {b} and me is a liar, maybe both.",
    "Meow. At least one of {b} and me is a liar. Maybe both.",
]

PAIR_AT_LEAST_ONE_HONEST_TEXTS = [
    "At least one of {a} and {b} is honest.",
    "Mrrp. One of {a} and {b} is honest, maybe both.",
    "Purr. You can trust at least one of {a} and {b}.",
    "*kneads paws* At least one of {a} and {b} is honest.",
]

PAIR_AT_LEAST_ONE_HONEST_ME_TEXTS = [
    "At least one of {b} and me is honest.",
    "Mrrp. One of {b} and me is honest, maybe both.",
    "Purr. You can trust at least one of {b} and me.",
]

PAIR_BOTH_LIARS_TEXTS = [
    "{a} and {b} are both liars.",
    "Hiss! {a} and {b} are liars, both of them.",
    "{a} and {b}? Liars, the pair of them.",
    "*arches back* {a} and {b} are both liars.",
]

PAIR_BOTH_LIARS_ME_TEXTS = [
    "{b} and I are both liars.",
    "Meow. {b} and I are liars, both of us.",
    "{b} and I? Liars, both of us.",
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

# "If a is honest, then b is honest" is written as "Either a is a liar, or b is honest (or both)",
# same thing, but much easier to work with when the speaker turns out to be a liar
PAIR_IF_A_HONEST_THEN_B_TEXTS = [
    "Either {a} is a liar, or {b} is honest (or both).",
    "Mrrp. Either {a} is a liar, or {b} is honest. Maybe both.",
    "*twitches whiskers* Either {a} is a liar, or {b} is honest, or both.",
    "Either {a} is a liar, or {b} is honest. Could be both.",
]

PAIR_IF_A_HONEST_THEN_B_ME_TEXTS = [
    "Either I'm a liar, or {b} is honest (or both).",
    "Meow. Either I'm a liar, or {b} is honest. Maybe both.",
    "*tilts head* Either I'm a liar, or {b} is honest, or both.",
]

PAIR_A_HONEST_B_LIAR_TEXTS = [
    "{a} is honest, but {b} is a liar.",
    "Trust {a} over {b}: {a} is honest and {b} is a liar.",
    "*flicks tail* {a} is honest. {b} is a liar.",
    "Purr for {a}, hiss for {b}: {a} is honest, {b} is a liar.",
]

PAIR_A_HONEST_B_LIAR_ME_TEXTS = [
    "I'm honest, but {b} is a liar.",
    "Trust me over {b}: I'm honest and {b} is a liar.",
    "Hiss. I'm honest, {b} is the liar here.",
]


# --- Quotes (Quote) ---
# {quoted} is the cat being quoted, {target} is the cat the quote is about.
# "self": the speaker quotes itself. "about_me": the quote is about the speaker.
# "about_themselves": the quoted cat talks about itself.

QUOTE_SELF_LIAR_TEXTS = [
    "If you asked me, I'd say {target} is a liar.",
    "Mrrp. If you asked me, I'd say {target} is a liar.",
    "Ask me, and I'd tell you {target} is a liar.",
    "*licks paw* If you asked me about {target}, I'd say liar.",
]

QUOTE_SELF_HONEST_TEXTS = [
    "If you asked me, I'd say {target} is honest.",
    "Purr. If you asked me, I'd say {target} is honest.",
    "Ask me, and I'd tell you {target} is honest.",
    "*slow blinks* If you asked me about {target}, I'd say honest.",
]

QUOTE_ABOUT_ME_LIAR_TEXTS = [
    "{quoted} would say I'm a liar.",
    "Hiss. {quoted} would call me a liar.",
    "If you asked {quoted}, they'd say I'm a liar.",
    "*flattens ears* {quoted} would tell you I'm a liar.",
]

QUOTE_ABOUT_ME_HONEST_TEXTS = [
    "{quoted} would say I'm honest.",
    "Purr. {quoted} would tell you I'm honest.",
    "If you asked {quoted}, they'd say I'm honest.",
    "*rubs against your leg* {quoted} would say I'm honest.",
]

QUOTE_ABOUT_THEMSELVES_LIAR_TEXTS = [
    "{quoted} would say they're a liar.",
    "If you asked {quoted}, they'd call themselves a liar.",
    "Mrow. {quoted} would claim to be a liar.",
    "*snickers* {quoted} would tell you they're a liar.",
]

QUOTE_ABOUT_THEMSELVES_HONEST_TEXTS = [
    "{quoted} would say they're honest.",
    "If you asked {quoted}, they'd say they're honest.",
    "Meow. {quoted} would claim to be honest.",
    "*yawns* {quoted} would tell you they're honest.",
]


# --- The only one in an area (Only) ---
# {name} is the cat, {area} is the area text. The _ME_ lists are used when the speaker is that cat.

ONLY_ME_LIAR_TEXTS = [
    "I'm the only liar among {area}.",
    "Hiss. Among {area}, I'm the only liar.",
    "*grins* I'm the only liar among {area}. Everyone else is honest.",
]

ONLY_ME_HONEST_TEXTS = [
    "I'm the only honest cat among {area}.",
    "Purr. Among {area}, I'm the only one who's honest.",
    "*sighs* I'm the only honest cat among {area}. The rest are liars.",
]

ONLY_LIAR_TEXTS = [
    "{name} is the only liar among {area}.",
    "Mrrp. Among {area}, only {name} is a liar.",
    "*points a paw at {name}* The only liar among {area}.",
    "Everyone among {area} is honest, except {name}, who is a liar.",
]

ONLY_HONEST_TEXTS = [
    "{name} is the only honest cat among {area}.",
    "Meow. Among {area}, only {name} is honest.",
    "*nods at {name}* The only honest cat among {area}.",
    "Everyone among {area} is a liar, except {name}, who is honest.",
]


# --- Whole area the same type or not (AllSame) ---
# {area} is the area text.

ALL_SAME_TEXTS = [
    "All of {area} are the same: all honest, or all liars.",
    "*purrs* All of {area} are from the same litter: all honest, or all liars.",
    "Mrrp. Whatever one of {area} is, the rest are too.",
    "Same story for all of {area}: all honest, or all liars.",
]

MIXED_TEXTS = [
    "Among {area}, there are both honest cats and liars.",
    "Hiss. Among {area} you'll find both: at least one liar and at least one honest cat.",
    "*swishes tail* Among {area}, there's at least one liar and at least one honest cat.",
    "There's a mix among {area}: some honest, some liars.",
]


# --- If a cat is something, a whole area is something (IfThen) ---
# "If A, then B" is written as "Either not A, or B (or both)", it's the same thing but easier to read.
# {name} is the cat, {opposite} is the opposite of the "if" part ("honest" or "a liar"),
# {area} is the area text, {then} is "honest" or "liars".

IF_THEN_TEXTS = [
    "Either {name} is {opposite}, or all of {area} are {then} (or both).",
    "Mrrp. Either {name} is {opposite}, or all of {area} are {then}. Maybe both.",
    "*thinks hard* Either {name} is {opposite}, or all of {area} are {then}, or both.",
    "Mark my whiskers: either {name} is {opposite}, or all of {area} are {then}. Maybe both.",
]


# --- Areas that cover every cat ---
# The normal texts would say "exactly 5 of the cats in the grid", so these get their own wording.
# Same placeholders as the normal lists they replace.

# CountLiars
EVERYONE_NONE_TEXTS = [
    "Every single cat is honest.",
    "Mrrp! All the cats are honest, I'd bet my nine lives on it.",
    "*sniffs around* Every cat here is honest.",
]

EVERYONE_ALL_TEXTS = [
    "Every single cat is a liar.",
    "Hiss! All the cats are liars, every last one.",
    "*narrows eyes* Every cat here is a liar.",
]

EVERYONE_EXACTLY_ONE_TEXTS = [
    "There's exactly one liar in total.",
    "Mrow. There's exactly one liar in total.",
    "Only one bad kitty: there's exactly one liar in total.",
    "Purr. Every cat can be trusted, except exactly one.",
]

EVERYONE_EXACTLY_N_TEXTS = [
    "There are exactly {n} liars in total.",
    "Meow meow. There are exactly {n} liars in total.",
    "I counted with my paws: there are exactly {n} liars in total.",
    "Mrrp. Exactly {h} cats can be trusted in total, the rest are liars.",
]

EVERYONE_AT_LEAST_ONE_TEXTS = [
    "There's at least one liar in total.",
    "I smell a rat. There's at least one liar out there.",
    "*narrows eyes* At least one cat is a liar.",
]

EVERYONE_AT_LEAST_N_TEXTS = [
    "There are at least {n} liars in total.",
    "Mrrrow! There are at least {n} liars in total.",
    "*arches back* At least {n} cats are liars, maybe more.",
]

# Only
EVERYONE_ONLY_ME_LIAR_TEXTS = [
    "I'm the only liar of all the cats.",
    "Hiss. Out of all the cats, I'm the only liar.",
    "*grins* I'm the only liar. Every other cat is honest.",
]

EVERYONE_ONLY_ME_HONEST_TEXTS = [
    "I'm the only honest cat of them all.",
    "Purr. Out of all the cats, I'm the only honest one.",
    "*sighs* I'm the only honest cat. Every other cat is a liar.",
]

EVERYONE_ONLY_LIAR_TEXTS = [
    "{name} is the only liar of all the cats.",
    "Mrrp. Out of all the cats, only {name} is a liar.",
    "Every cat is honest, except {name}, who is a liar.",
]

EVERYONE_ONLY_HONEST_TEXTS = [
    "{name} is the only honest cat of them all.",
    "Meow. Out of all the cats, only {name} is honest.",
    "Every cat is a liar, except {name}, who is honest.",
]

# AllSame
EVERYONE_ALL_SAME_TEXTS = [
    "All the cats are the same: all honest, or all liars.",
    "*purrs* We're all from the same litter: every cat is honest, or every cat is a liar.",
    "Mrrp. Whatever one cat is, every cat is.",
]

EVERYONE_MIXED_TEXTS = [
    "There are both honest cats and liars around.",
    "Hiss. Out of all the cats, at least one is a liar and at least one is honest.",
    "*swishes tail* It's a mix out there: some cats are honest, some are liars.",
]

# IfThen
EVERYONE_IF_THEN_TEXTS = [
    "Either {name} is {opposite}, or all the cats are {then} (or both).",
    "Mrrp. Either {name} is {opposite}, or all the cats are {then}. Maybe both.",
    "*thinks hard* Either {name} is {opposite}, or all the cats are {then}, or both.",
]


# --- Hidden cats and what other cats heard them say (Hearsay) ---
# A hidden cat only meows, its real statement is only known through another cat.
# {name} is the hidden cat, {quote} is the statement it supposedly said, in its own words.

GIBBERISH_TEXTS = [
    "Mrrrow mrrp mew.",
    "Mrrp? Mew mew mrrrow!",
    "*incomprehensible meowing*",
    "Nyaa... mrrp. Mew.",
    "*chirps at a bird outside*",
]

HEARSAY_TEXTS = [
    'I heard {name} say: "{quote}"',
    '{name} told me: "{quote}"',
    '*leans in* {name} whispered to me: "{quote}"',
    'I speak {name}. Translated, they said: "{quote}"',
    'Mrrp. What {name} meant was: "{quote}"',
]
