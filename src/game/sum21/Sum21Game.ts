import GameInterface from "../interface/GameInterface";
import GameMoveInterface from "../interface/GameMoveInterface";
import GameStateInterface from "../interface/GameStateInterface";
import Sum21GameMove from "./Sum21GameMove";
import Sum21GameState from "./Sum21GameState";

const MAX_SCORE = 21;
const AVAILABLE_NUMBERS = [1, 2, 3];

export default class Sum21Game implements GameInterface {
  initialState: Sum21GameState;

  constructor(initialStateParams?: {
    currentPlayer?: number;
    totalScore?: number;
    winner?: number;
  }) {
    this.initialState = new Sum21GameState(
      initialStateParams?.currentPlayer,
      initialStateParams?.totalScore,
      initialStateParams?.winner
    );
  }

  sortMovesByRuleBase(
    state: GameStateInterface,
    moves: GameMoveInterface[]
  ): GameMoveInterface[] {
    throw new Error("Method not implemented.");
  }

  isConsecutiveAction(
    currentState: Sum21GameState,
    nextState: Sum21GameState
  ): boolean {
    return currentState.currentPlayer === nextState.currentPlayer;
  }

  async loadMlModel(): Promise<void> {
    throw new Error("Method not implemented.");
  }

  async showCurrentState(state: Sum21GameState): Promise<void> {
    console.log(state.totalScore);
  }

  getInitialState(): Sum21GameState {
    return this.initialState;
  }

  getAvailableMoves(_state: Sum21GameState): Sum21GameMove[] {
    return AVAILABLE_NUMBERS.map((element) => {
      return new Sum21GameMove(element);
    });
  }

  makeMove(state: Sum21GameState, move: Sum21GameMove): Sum21GameState {
    const newState = state.clone();
    newState.totalScore += move.value;

    if (newState.totalScore === MAX_SCORE) {
      newState.winner = newState.currentPlayer;
    }
    if (newState.totalScore > MAX_SCORE) {
      newState.winner = (newState.currentPlayer + 1) % 2;
    }

    if (newState.totalScore === 10) {
      return newState;
    }

    newState.currentPlayer = (newState.currentPlayer + 1) % 2;

    return newState;
  }

  isGameOver(state: Sum21GameState): boolean {
    return state.totalScore >= MAX_SCORE;
  }

  async evaluateState(state: Sum21GameState): Promise<number> {
    // 勝敗がついている状態
    if (state.winner >= 0) {
      return state.winner === 0 ? 100 : -100;
    }

    // 現在のプレイヤー視点での相対評価
    const scoreDiff = MAX_SCORE - state.totalScore;
    return state.currentPlayer === 0 ? scoreDiff : -scoreDiff;
  }

  isNextPlayerMaximizing(state: Sum21GameState): boolean {
    return state.currentPlayer === 0; // プレイヤー0が最大化プレイヤー
  }

  getWinner(state: Sum21GameState): number {
    return state.winner;
  }
}
