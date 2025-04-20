import alphabeta from "./algorithm/alphabeta";
import randomAlgorithm from "./algorithm/random";
import ruleBaseAlgorithm from "./algorithm/rule_base";
import GameInterface from "./game/interface/GameInterface";
import * as readline from "readline/promises";
import WarChestGame from "./game/warchest/WarChestGame";
import WarChestGameState from "./game/warchest/WarChestGameState";
import { detectPhase } from "./game/warchest/WarChestTools";

let NUM_GAMES = 1;
const MAX_DEPTHS = 3;
const GAMES = [{ name: "WarChest", gameClass: WarChestGame }];

/**
 * プレイするゲームの数をユーザーに入力させる関数
 * @returns ユーザーが入力したゲーム数 (デフォルトは1)
 */
async function getNumberOfGames(): Promise<number> {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  const answer = await rl.question(
    `Enter the number of games to play (default is 1): `
  );

  rl.close();

  const numGames = parseInt(answer);
  if (isNaN(numGames) || numGames <= 0) {
    console.log("Invalid input. Using default value of 1 game.");
    return 1;
  }

  return numGames;
}

/**
 * プレイヤーにアルゴリズムを選択させる関数
 * 選択肢は数字で表示され、デフォルトはRuleBase
 * @param player プレイヤー番号
 * @returns 選択されたアルゴリズム
 */
async function selectAlgorithm(player: number): Promise<any> {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  const options = [
    { name: "alphabeta", value: alphabeta },
    { name: "random", value: randomAlgorithm },
    { name: "rulebase", value: ruleBaseAlgorithm },
  ];

  const answer = await rl.question(
    `Player ${player}, choose an algorithm:\n` +
      options
        .map((option, index) => `${index + 1}. ${option.name}`)
        .join("\n") +
      "\n" +
      `Enter the number of your choice: `
  );

  rl.close();

  const choice = parseInt(answer);
  if (isNaN(choice) || choice < 1 || choice > options.length) {
    console.log("Invalid choice. Using rulebase.");
    return ruleBaseAlgorithm;
  }

  return options[choice - 1].value;
}

/**
 * ゲームをプレイする関数
 * @param gameInstance ゲームのインスタンス
 * @param player1Algorithm プレイヤー1のアルゴリズム
 * @param player2Algorithm プレイヤー2のアルゴリズム
 * @returns 勝者 (0: プレイヤー1, 1: プレイヤー2)
 */
async function playGame(
  gameInstance: GameInterface,
  player1Algorithm: any,
  player2Algorithm: any
) {
  let state = gameInstance.getInitialState();

  gameInstance.showCurrentState(state);

  while (!gameInstance.isGameOver(state)) {
    const currentAlgorithm =
      state.currentPlayer === 0 ? player1Algorithm : player2Algorithm;

    // 思考時間の計測を開始
    const startTime = performance.now();

    const depth = (() => {
      const phase = detectPhase(state as WarChestGameState);
      if (phase === 0) {
        return 9;
      }
      if (phase === 1) {
        return 6;
      }
      return 3;
    })();

    const { move: bestMove } = await currentAlgorithm(
      gameInstance,
      state,
      depth
    );

    // 思考時間の計測を終了
    const endTime = performance.now();
    const elapsedTime = endTime - startTime;

    console.log(`思考時間: ${elapsedTime.toFixed(2)}ms`);

    if (bestMove === null) {
      console.log(state);
      console.log(bestMove);
      console.log(state.currentPlayer);
      throw new Error("bestMove is null.");
    }

    state = gameInstance.makeMove(state, bestMove);
    await gameInstance.showCurrentState(state);
  }

  return gameInstance.getWinner(state);
}

/**
 * メイン関数
 * ゲームの実行と結果の表示を行う
 */
async function main() {
  NUM_GAMES = await getNumberOfGames();

  for (const { name, gameClass } of GAMES) {
    console.log(`\n--- Game: ${name} ---\n`);

    const player1Algorithm = await selectAlgorithm(1);
    const player2Algorithm = await selectAlgorithm(2);

    console.log(`Player 1 Algorithm: ${player1Algorithm.name}`);
    console.log(`Player 2 Algorithm: ${player2Algorithm.name}`);

    let algorithmWins: Record<number, number> = { 0: 0, 1: 0 };

    for (let i = 0; i < NUM_GAMES; i++) {
      const gameInstance = new gameClass();
      if (player1Algorithm === alphabeta || player2Algorithm === alphabeta) {
        await gameInstance.loadMlModel();
      }
      const winner = await playGame(
        gameInstance,
        player1Algorithm,
        player2Algorithm
      );
      algorithmWins[winner]++;
    }

    console.log(`Depth ${MAX_DEPTHS}:`);
    console.log(`  Player 1 wins: ${algorithmWins[0]}`);
    console.log(`  Player 2 wins: ${algorithmWins[1]}`);
    console.log("--------------------");
  }
}

main();
