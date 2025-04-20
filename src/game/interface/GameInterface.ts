import GameMoveInterface from "./GameMoveInterface";
import GameStateInterface from "./GameStateInterface";

export default interface GameInterface {
  loadMlModel(): Promise<void>;
  getInitialState(): GameStateInterface;
  showCurrentState(state: GameStateInterface): Promise<void>;
  getAvailableMoves(state: GameStateInterface): GameMoveInterface[];
  sortMovesByRuleBase(
    state: GameStateInterface,
    moves: GameMoveInterface[]
  ): GameMoveInterface[];
  makeMove(
    state: GameStateInterface,
    move: GameMoveInterface
  ): GameStateInterface;
  isGameOver(state: GameStateInterface): boolean;
  evaluateState(state: GameStateInterface): Promise<number>;
  isNextPlayerMaximizing(state: GameStateInterface): boolean;
  isConsecutiveAction(
    currentState: GameStateInterface,
    nextState: GameStateInterface
  ): boolean;
  getWinner(state: GameStateInterface): number;
}
