import GameInterface from "../interface/GameInterface";
import WarChestGameEngine from "./WarChestGameEngine";
import WarChestGameMove from "./WarChestGameMove";
import WarChestGameState from "./WarChestGameState";
import { InferenceSession, Tensor } from "onnxruntime-node";
import path from "path";
import { detectPhase } from "./WarChestTools";

export default class WarChestGame implements GameInterface {
  initialState: WarChestGameState;
  session;

  constructor(initialStateParams?: {
    currentPlayer?: number;
    snapshot?: number;
  }) {
    this.initialState = new WarChestGameState(
      initialStateParams?.currentPlayer,
      initialStateParams?.snapshot
    );
  }

  async loadMlModel(): Promise<void> {
    await this.loadModel();
  }

  async showCurrentState(state: WarChestGameState): Promise<void> {
    console.log(state.snapshot["text_log"]);
  }

  getInitialState(): WarChestGameState {
    return this.initialState;
  }

  getAvailableMoves(state: WarChestGameState): WarChestGameMove[] {
    const moveList = WarChestGameEngine.getAvailableMoves(state).map(
      (element: Object) => {
        return new WarChestGameMove(element);
      }
    );

    return moveList;
  }

  sortMovesByRuleBase(
    state: WarChestGameState,
    moveList: WarChestGameMove[]
  ): WarChestGameMove[] {
    const sortedMoves: WarChestGameMove[] = [];

    const sortWidth = (() => {
      const phase = detectPhase(state);
      if (phase === 0) {
        return 9;
      }
      if (phase === 1) {
        return 6;
      }
      return 3;
    })();

    while (moveList.length > 0) {
      if (sortedMoves.length >= sortWidth) break;

      const chosenMoveValue = WarChestGameEngine.selectBestActionByRuleBase(
        state,
        moveList
      );
      const chosenMoveIndex = moveList.findIndex(
        (move) => JSON.stringify(move.value) === JSON.stringify(chosenMoveValue)
      );

      if (chosenMoveIndex !== -1) {
        const chosenMove = moveList.splice(chosenMoveIndex, 1)[0];
        sortedMoves.push(chosenMove);
      } else {
        break; // 万が一一致しない場合はループを終了
      }
    }

    return sortedMoves;
  }

  makeMove(
    state: WarChestGameState,
    move: WarChestGameMove
  ): WarChestGameState {
    const newState = state.clone();
    newState.snapshot = WarChestGameEngine.makeMove(newState, move);
    newState.currentPlayer = newState.snapshot["turn"] === "red" ? 0 : 1;
    if (newState.snapshot["has_game_finished"]) {
      newState.winner = newState.snapshot["winner"] === "red" ? 0 : 1;
    }
    return newState;
  }

  isGameOver(state: WarChestGameState): boolean {
    return state.snapshot["has_game_finished"];
  }

  private async loadModel() {
    try {
      const modelPath = path.join(
        __dirname,
        "../../../ml-model/binary_classifier_20250122_152706.onnx"
      );
      console.log("Loading model from:", modelPath);
      this.session = await InferenceSession.create(modelPath);
      console.log("Model loaded successfully.");
    } catch (error) {
      console.error("Error loading model:", error);
      throw error;
    }
  }

  async evaluateState(state: WarChestGameState): Promise<number> {
    const redControl =
      state.snapshot["control_points_state"].filter((e) => {
        return e["dominated_by"] === "red";
      }).length * 3;
    const blueControl =
      state.snapshot["control_points_state"].filter((e) => {
        return e["dominated_by"] === "blue";
      }).length * 3;
    const redUnit = Array.from(
      new Set(
        state.snapshot["units_state"]
          .filter((e) => {
            return e["team"] === "red" && e["layer"] === "board";
          })
          .map((e) => {
            return e["location"];
          })
      )
    ).length;
    const blueUnit = Array.from(
      new Set(
        state.snapshot["units_state"]
          .filter((e) => {
            return e["team"] === "blue" && e["layer"] === "board";
          })
          .map((e) => {
            return e["location"];
          })
      )
    ).length;

    const redBonus = redControl === 18 ? 100 : 0;
    const blueBonus = blueControl === 18 ? 100 : 0;

    return redControl - blueControl + redUnit - blueUnit + redBonus - blueBonus;
  }

  async evaluateWinningProbability(state: WarChestGameState): Promise<number> {
    const inputData = [WarChestGameEngine.encodeGameState(state)];

    // 入力データをテンソルに変換
    const inputTensor = new Tensor(
      "float32",
      new Float32Array(inputData.flat()),
      [inputData.length, inputData[0].length]
    );

    // フィードを設定
    const feeds = { input: inputTensor };

    // 推論の実行
    const results = await this.session.run(feeds);

    // 確率テンソルを取得
    const outputData = results.output.data;

    // 確率をパーセンテージに変換して出力形式を調整
    const value = (outputData[0] as number) * 100;

    return 100 - value;
  }

  isNextPlayerMaximizing(state: WarChestGameState): boolean {
    return state.currentPlayer === 0;
  }

  isConsecutiveAction(
    currentState: WarChestGameState,
    nextState: WarChestGameState
  ): boolean {
    return currentState.currentPlayer === nextState.currentPlayer;
  }

  getWinner(state: WarChestGameState): number {
    if (state.snapshot["winner"] === "red") {
      return 0;
    }
    if (state.snapshot["winner"] === "blue") {
      return 1;
    }
    return -1; // ゲーム続行中または引き分け
  }
}
