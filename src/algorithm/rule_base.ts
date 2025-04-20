import GameInterface from "../game/interface/GameInterface";
import GameStateInterface from "../game/interface/GameStateInterface";
import GameMoveInterface from "../game/interface/GameMoveInterface";

async function ruleBaseAlgorithm(
  game: GameInterface,
  state: GameStateInterface
): Promise<{ move: GameMoveInterface }> {
  const availableMoves = game.getAvailableMoves(state);
  const sortedMoves = game.sortMovesByRuleBase(state, availableMoves);
  return { move: sortedMoves[0] };
}

export default ruleBaseAlgorithm;
