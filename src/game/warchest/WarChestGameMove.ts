import GameMoveInterface from "../interface/GameMoveInterface";

export default class WarChestGameMove implements GameMoveInterface {
  value: Object;

  constructor(value: Object) {
    this.value = value;
  }

  toString(): string {
    return `${this.value["action_type"]}`;
  }
}
