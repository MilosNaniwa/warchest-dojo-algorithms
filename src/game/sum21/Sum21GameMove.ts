import GameMoveInterface from "../interface/GameMoveInterface";

export default class Sum21GameMove implements GameMoveInterface {
  value: number;

  constructor(value: number) {
    this.value = value;
  }

  toString(): string {
    return `${this.value} を加算`;
  }
}
