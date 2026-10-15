from statements.count_liars import CountLiars
from statements.pair import PairStatement
from statements.quote import Quote
from statements.only import Only
from statements.all_same import AllSame

# Every statement type the generator can pick from. Add new types here.
ALL_STATEMENTS = [CountLiars, PairStatement, Quote, Only, AllSame]
