import * as Engine from "./lib/WarChestGameEngine.dart.js";
import WarChestGameMove from "./WarChestGameMove.js";
import WarChestGameState from "./WarChestGameState.js";

export default class WarChestGameEngine {
  static initialize(
    blueUnitList: Array<string>,
    redUnitList: Array<string>
  ): Object {
    const initialGameState = Engine.methodChannel([
      "initialize",
      JSON.stringify(blueUnitList),
      JSON.stringify(redUnitList),
    ]);
    return JSON.parse(initialGameState);
  }

  static getAvailableMoves(state: WarChestGameState) {
    const listedActions = Engine.methodChannel([
      "list_up_actions",
      JSON.stringify(state.snapshot),
      "",
    ]);
    return JSON.parse(listedActions);
  }

  static makeMove(state: WarChestGameState, move: WarChestGameMove): Object {
    const afterExecutedGameState = Engine.methodChannel([
      "execute_action",
      JSON.stringify(state.snapshot),
      JSON.stringify(move.value),
    ]);
    const nextGameState = Engine.methodChannel([
      "forward_to_next_state",
      afterExecutedGameState,
    ]);
    return JSON.parse(nextGameState);
  }

  static encodeGameState(state: WarChestGameState): number[] {
    const encoded = Engine.methodChannel([
      "encode_game_state",
      JSON.stringify(state.snapshot),
    ]);
    return JSON.parse(encoded);
  }

  static selectBestActionByRuleBase(
    state: WarChestGameState,
    moves: WarChestGameMove[]
  ): Object {
    const encoded = Engine.methodChannel([
      "choice_cpu_action",
      JSON.stringify(state.snapshot),
      JSON.stringify(
        moves.map((element) => {
          return element.value;
        })
      ),
    ]);
    return JSON.parse(encoded);
  }
}
