import { BigInt } from "@graphprotocol/graph-ts"
import {
  Contract,
  Burn,
  Deposit,
  EmergencyWithdraw,
  NewRound,
  OwnershipTransferred,
  Withdraw
} from "../generated/Contract/Contract"
import { BurnToken, DepositToken, EmergencyWithdrawToken, NewRoundToken, WithdrawToken } from "../generated/schema"


export function handleBurn(event: Burn): void {
  let burn = BurnToken.load(event.params.amount.toHex())
  if (burn == null) {
    burn = new BurnToken(event.params.amount.toHex())
    burn.count = BigInt.fromI32(0)
  }

  burn.count = burn.count + BigInt.fromI32(1)
  burn.amount = event.params.amount
  burn.initiator = event.params.initiator
  burn.lpToken = event.params.lpToken
  burn.save()
}

export function handleDeposit(event: Deposit): void {
  let deposit = DepositToken.load(event.params.amount.toHex())
  if (deposit == null) {
    deposit = new DepositToken(event.params.amount.toHex())
    deposit.count = BigInt.fromI32(0)
  }

  deposit.count = deposit.count + BigInt.fromI32(1)
  deposit.amount = event.params.amount
  deposit.user = event.params.user
  deposit.lpToken = event.params.lpToken
  deposit.save()
}

export function handleEmergencyWithdraw(event: EmergencyWithdraw): void {
  let emergencyWithdraw = EmergencyWithdrawToken.load(event.params.amount.toHex())
  if (emergencyWithdraw == null) {
    emergencyWithdraw = new EmergencyWithdrawToken(event.params.amount.toHex())
    emergencyWithdraw.count = BigInt.fromI32(0)
  }

  emergencyWithdraw.count = emergencyWithdraw.count + BigInt.fromI32(1)
  emergencyWithdraw.amount = event.params.amount
  emergencyWithdraw.user = event.params.user
  emergencyWithdraw.lpToken = event.params.lpToken
  emergencyWithdraw.save()
  }

 
export function handleNewRound(event: NewRound): void {
  let newRound = NewRoundToken.load(event.params.number.toHex())
  if (newRound == null) {
    newRound = new NewRoundToken(event.params.number.toHex())
    newRound.count = BigInt.fromI32(0)
  }

  newRound.count = newRound.count + BigInt.fromI32(1)
  newRound.number = event.params.number
  newRound.prevTotalAllocPoint = event.params.prevTotalAllocPoint
  newRound.endBlock = event.params.endBlock
  newRound.save()
}


export function handleOwnershipTransferred(event: OwnershipTransferred): void {}

export function handleWithdraw(event: Withdraw): void {
  let withdraw = WithdrawToken.load(event.params.amount.toHex())
  if (withdraw == null) {
    withdraw = new WithdrawToken(event.params.amount.toHex())
    withdraw.count = BigInt.fromI32(0)
  }

  withdraw.count = withdraw.count + BigInt.fromI32(1)
  withdraw.amount = event.params.amount
  withdraw.user = event.params.user
  withdraw.lpToken = event.params.lpToken
  withdraw.save()
}
