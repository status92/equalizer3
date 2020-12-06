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
import { ExampleEntity } from "../generated/schema"

export function handleBurn(event: Burn): void {
  // Entities can be loaded from the store using a string ID; this ID
  // needs to be unique across all entities of the same type
  let entity = ExampleEntity.load(event.transaction.from.toHex())

  // Entities only exist after they have been saved to the store;
  // `null` checks allow to create entities on demand
  if (entity == null) {
    entity = new ExampleEntity(event.transaction.from.toHex())

    // Entity fields can be set using simple assignments
    entity.count = BigInt.fromI32(0)
  }

  // BigInt and BigDecimal math are supported
  entity.count = entity.count + BigInt.fromI32(1)

  // Entity fields can be set based on event parameters
  entity.initiator = event.params.initiator
  entity.lpToken = event.params.lpToken

  // Entities can be written to the store with `.save()`
  entity.save()

  // Note: If a handler doesn't require existing field values, it is faster
  // _not_ to load the entity from the store. Instead, create it fresh with
  // `new Entity(...)`, set the fields that should be updated and save the
  // entity back to the store. Fields that were not set or unset remain
  // unchanged, allowing for partial updates to be applied.

  // It is also possible to access smart contracts from mappings. For
  // example, the contract that has emitted the event can be connected to
  // with:
  //
  // let contract = Contract.bind(event.address)
  //
  // The following functions can then be called on this contract to access
  // state variables and other data:
  //
  // - contract.allocAdjustBlocks(...)
  // - contract.allocPointDecayNumerator(...)
  // - contract.blocksInGenesisEpoch(...)
  // - contract.burnEqualEfficiency(...)
  // - contract.devaddr(...)
  // - contract.equal(...)
  // - contract.factory(...)
  // - contract.genesisEqualPerBlock(...)
  // - contract.getAPY(...)
  // - contract.getCurrentRoundAllocPoint(...)
  // - contract.getEqualBlockReward(...)
  // - contract.getLastRoundAllocPoint(...)
  // - contract.getPool(...)
  // - contract.getPoolAllocPoint(...)
  // - contract.getPoolAndUserInfo(...)
  // - contract.getPoolUserInfo(...)
  // - contract.getRoundLengthAndLastEndBlock(...)
  // - contract.getUserInfoAmount(...)
  // - contract.owner(...)
  // - contract.pendingEqual(...)
  // - contract.poolInfo(...)
  // - contract.rounds(...)
  // - contract.startBlock(...)
}

export function handleDeposit(event: Deposit): void {}

export function handleEmergencyWithdraw(event: EmergencyWithdraw): void {}

export function handleNewRound(event: NewRound): void {}

export function handleOwnershipTransferred(event: OwnershipTransferred): void {}

export function handleWithdraw(event: Withdraw): void {}
