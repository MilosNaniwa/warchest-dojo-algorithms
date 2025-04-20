import GameStateInterface from "../interface/GameStateInterface";

export default class Sum21GameState implements GameStateInterface {
  totalScore: number;
  currentPlayer: number;
  winner: number;

  constructor(
    currentPlayer: number = Math.floor(Math.random() * 2),
    totalScore: number = 0,
    winner: number = -1
  ) {
    this.totalScore = totalScore;
    this.currentPlayer = currentPlayer;
    this.winner = winner;
  }

  clone(): Sum21GameState {
    return new Sum21GameState(this.currentPlayer, this.totalScore);
  }
}
