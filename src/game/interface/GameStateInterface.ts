export default interface GameStateInterface {
  clone(): GameStateInterface;
  currentPlayer: number;
  winner: number;
}
