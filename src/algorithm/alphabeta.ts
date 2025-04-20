import GameInterface from "../game/interface/GameInterface";
import GameMoveInterface from "../game/interface/GameMoveInterface";
import GameStateInterface from "../game/interface/GameStateInterface";

interface Result {
  value: number;
  move: GameMoveInterface | null;
}

export default async function alphabeta(
  game: GameInterface,
  state: GameStateInterface,
  depth: number,
  consecutiveActions: number = 0,
  alpha: number = -Infinity,
  beta: number = Infinity,
  maximizingPlayer: boolean = true
): Promise<Result> {
  // 終了条件のチェック
  if (
    game.isGameOver(state) ||
    shouldTerminateSearch(depth, consecutiveActions)
  ) {
    return { value: await game.evaluateState(state), move: null };
  }

  let bestValue = maximizingPlayer ? -Infinity : Infinity;
  let bestMove: GameMoveInterface | null = null;

  const availableMoves = game.getAvailableMoves(state);

  if (availableMoves.length === 0) {
    // 利用可能な手がない場合、現在の状態を評価して返す
    return { value: await game.evaluateState(state), move: null };
  }

  for (const move of availableMoves) {
    const newState = game.makeMove(state, move);
    const isConsecutive = game.isConsecutiveAction(state, newState);
    const newDepth = isConsecutive ? depth : depth - 1;
    const newConsecutiveActions = isConsecutive ? consecutiveActions + 1 : 0;

    const result = await alphabeta(
      game,
      newState,
      newDepth,
      newConsecutiveActions,
      alpha,
      beta,
      isConsecutive ? maximizingPlayer : !maximizingPlayer
    );

    if (maximizingPlayer) {
      if (result.value > bestValue) {
        bestValue = result.value;
        bestMove = move;
      }
      alpha = Math.max(alpha, bestValue);
    } else {
      if (result.value < bestValue) {
        bestValue = result.value;
        bestMove = move;
      }
      beta = Math.min(beta, bestValue);
    }

    // アルファ・ベータ枝刈り
    if (beta <= alpha) {
      break;
    }
  }

  return { value: bestValue, move: bestMove };
}

function shouldTerminateSearch(
  depth: number,
  consecutiveActions: number
): boolean {
  const MAX_CONSECUTIVE_ACTIONS = 5; // この値は適宜調整する
  return depth === 0 || consecutiveActions >= MAX_CONSECUTIVE_ACTIONS;
}
