from statements.count_liars import CountLiars
from statements.pair import PairStatement
from statements.quote import Quote
from statements.only import Only
from statements.all_same import AllSame
from statements.if_then import IfThen
from statements.hearsay import Hearsay

# Every statement type the generator can pick from. Add new types here.
ALL_STATEMENTS = [CountLiars, PairStatement, Quote, Only, AllSame, IfThen]

# Hearsay isn't in the list on purpose: it needs a hidden cat, so the generator adds it separately
