# Equalizer Subgraph

[Equalizer](https://equalizer.fi/) Equalizer, is an AMM DEX with equal and self-adjusting governance token distribution. It aims to achieve an equal and efficient governance token distribution mechanism.



This subgraph dynamically tracks any made data on deposits, withdrawals, exchange rounds, emergency withdrawal of funds, as well as token burning.from the Equalizer.fi exchange.


## Queries

Below are a few ways to show how to query the equalizer-subgraph for data. The queries show most of the information that is queryable.

## Key Entity Overviews

#### Equalizer

Contains basic information about the exchange on the exchange, how many tokens are burned, deposit and withdrawal of tokens.

#### Burn
Contains data about the burning of tokens, namely: id, count, initiator, amount, lpToken.

#### Deopsit, Withdraw
Contains data on deposits and withdrawals of tokens, namely: id, counter, user, quantity

#### EmergencyWithdraw
Data on emergency withdrawal of funds.

#### NewRound
Contains data about the exchange round, namely: id, counter, number, amount, prevTotalAllocPoint, endBlock.

#### Request example:
{
   depositTokens (first: 5) {
     id
     count
     user
     amount
     lpToken
   }
}

