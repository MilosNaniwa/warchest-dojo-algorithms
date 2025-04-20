import GameInterface from "../game/interface/GameInterface";
import GameStateInterface from "../game/interface/GameStateInterface";
import GameMoveInterface from "../game/interface/GameMoveInterface";

async function randomAlgorithm(
  game: GameInterface,
  state: GameStateInterface
): Promise<{ move: GameMoveInterface }> {
  const availableMoves = game.getAvailableMoves(state);
  const randomIndex = Math.floor(Math.random() * availableMoves.length);
  return { move: availableMoves[randomIndex] };
}

export default randomAlgorithm;
