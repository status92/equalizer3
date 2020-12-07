# Equalizer Subgraph

[Equalizer](https://equalizer.fi/) Equalizer, is an AMM DEX with equal and self-adjusting governance token distribution. It aims to achieve an equal and efficient governance token distribution mechanism.

Attention! This subgraph is under development. Any edits, improvements, corrections are welcome.

This subgraph dynamically tracks any made deposits, emergency withdraw, withdrawal, transfer of rights to the token from the Equalizer.fi exchange.

## Queries

Below are a few ways to show how to query the equalizer-subgraph for data. The queries show most of the information that is queryable.

## Key Entity Overviews

#### Equalizer

Contains basic information about the exchange on the exchange, how many tokens are burned, deposit and withdrawal of tokens.

#### Burn
Contains information about the tokens that were burned.

#### Deopsit, Withdraw, OwnershipTransferred 
Data on deposit and withdrawal of funds for exchange, as well as data confirming the transfer of rights to the token after the exchange.

#### EmergencyWithdraw
Data on emergency withdrawal of funds.

#### NewRound
Data on new exchanges.
