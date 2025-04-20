import GameStateInterface from "../interface/GameStateInterface";
import WarChestGameEngine from "./WarChestGameEngine";

const ALL_UNITS = [
  "sword",
  "crossbow",
  "knight",
  "archer",
  "cavalry",
  "light_cavalry",
  "lancer",
  "pike",
  "mercenary",
  "ensign",
  "marshall",
  "berserker",
  "warrior_priest",
  "footman",
  "scout",
  "royal_guard",
];

// シャッフル関数
const shuffle = <T>(array: T[]): T[] => {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};

// 全ユニットをシャッフル
const shuffled = shuffle(ALL_UNITS);

// 先頭8種を選択
const selected = shuffled.slice(0, 8);

const blueRoyal = "blue_royal";
const redRoyal = "red_royal";
const blueUnitList = [blueRoyal, ...selected.slice(0, 4)];
const redUnitList = [redRoyal, ...selected.slice(4, 8)];

export default class WarChestGameState implements GameStateInterface {
  snapshot: Object;
  currentPlayer: number;
  winner: number;

  constructor(
    currentPlayer: number | undefined,
    snapshot: Object | undefined,
    winner: number = -1
  ) {
    this.snapshot = snapshot ?? this.initGameState();
    this.currentPlayer =
      currentPlayer ?? this.snapshot["turn"] === "red" ? 0 : 1;
    this.winner = winner;
  }

  clone(): WarChestGameState {
    return new WarChestGameState(this.currentPlayer, this.snapshot);
  }

  private initGameState() {
    return WarChestGameEngine.initialize(blueUnitList, redUnitList);
  }
}
