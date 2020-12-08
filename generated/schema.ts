// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Address,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class ExampleEntity extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save ExampleEntity entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save ExampleEntity entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("ExampleEntity", id.toString(), this);
  }

  static load(id: string): ExampleEntity | null {
    return store.get("ExampleEntity", id) as ExampleEntity | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get count(): BigInt {
    let value = this.get("count");
    return value.toBigInt();
  }

  set count(value: BigInt) {
    this.set("count", Value.fromBigInt(value));
  }

  get initiator(): Bytes {
    let value = this.get("initiator");
    return value.toBytes();
  }

  set initiator(value: Bytes) {
    this.set("initiator", Value.fromBytes(value));
  }

  get lpToken(): Bytes {
    let value = this.get("lpToken");
    return value.toBytes();
  }

  set lpToken(value: Bytes) {
    this.set("lpToken", Value.fromBytes(value));
  }
}

export class ExampleBurn extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save ExampleBurn entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save ExampleBurn entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("ExampleBurn", id.toString(), this);
  }

  static load(id: string): ExampleBurn | null {
    return store.get("ExampleBurn", id) as ExampleBurn | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }
}
