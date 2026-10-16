from purrjury.statements.count_liars import CountLiars
from purrjury.statements.pair import PairStatement
from purrjury.statements.quote import Quote
from purrjury.statements.only import Only
from purrjury.statements.all_same import AllSame
from purrjury.statements.if_then import IfThen
from purrjury.statements.hearsay import Hearsay

# Every statement type the generator can pick from. Add new types here.
ALL_STATEMENTS = [CountLiars, PairStatement, Quote, Only, AllSame, IfThen]

# Hearsay isn't in the list on purpose: it needs a hidden cat, so the generator adds it separately
