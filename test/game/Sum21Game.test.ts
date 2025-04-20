import Sum21Game from "../../src/game/sum21/Sum21Game";
import Sum21GameMove from "../../src/game/sum21/Sum21GameMove";
import Sum21GameState from "../../src/game/sum21/Sum21GameState";

describe("Sum21Game", () => {
  describe("constructor", () => {
    it("デフォルトの初期状態を正しく設定すべき", () => {
      const game = new Sum21Game();
      const initialState = game.getInitialState();
      expect(initialState.currentPlayer).toBeGreaterThanOrEqual(0);
      expect(initialState.currentPlayer).toBeLessThanOrEqual(1);
      expect(initialState.totalScore).toBe(0);
    });

    it("カスタムの初期状態を正しく設定すべき", () => {
      const game = new Sum21Game({ currentPlayer: 1, totalScore: 10 });
      const initialState = game.getInitialState();
      expect(initialState.currentPlayer).toBe(1);
      expect(initialState.totalScore).toBe(10);
    });
  });

  describe("getAvailableMoves", () => {
    it("常に [1, 2, 3] を返すべき", () => {
      const game = new Sum21Game();
      const state = new Sum21GameState();
      expect(game.getAvailableMoves(state)).toEqual([
        new Sum21GameMove(1),
        new Sum21GameMove(2),
        new Sum21GameMove(3),
      ]);
    });
  });

  describe("makeMove", () => {
    it("正しく新しい状態を生成すべき", () => {
      const game = new Sum21Game();
      const initialState = new Sum21GameState(0, 5);
      const newState = game.makeMove(initialState, new Sum21GameMove(3));
      expect(newState.currentPlayer).toBe(1);
      expect(newState.totalScore).toBe(8);
    });
  });

  describe("isGameOver", () => {
    it("スコアが21未満の場合はfalseを返すべき", () => {
      const game = new Sum21Game();
      const state = new Sum21GameState(0, 20);
      expect(game.isGameOver(state)).toBe(false);
    });

    it("スコアが21以上の場合はtrueを返すべき", () => {
      const game = new Sum21Game();
      const state = new Sum21GameState(0, 21);
      expect(game.isGameOver(state)).toBe(true);
    });
  });

  describe("evaluateState", () => {
    it("ゲーム続行中は現在選択中の値を返すべき", async () => {
      const game = new Sum21Game();
      const state = new Sum21GameState(0, 15);
      expect(await game.evaluateState(state)).toBe(6);
    });

    it("プレイヤー0が勝利した場合は1を返すべき", async () => {
      const game = new Sum21Game();
      const state = new Sum21GameState(1, 21, 0);
      expect(await game.evaluateState(state)).toBe(100);
    });

    it("プレイヤー1が勝利した場合は-1を返すべき", async () => {
      const game = new Sum21Game();
      const state = new Sum21GameState(0, 21, 1);
      expect(await game.evaluateState(state)).toBe(-100);
    });

    it("プレイヤー0が負けた場合は-1を返すべき", async () => {
      const game = new Sum21Game();
      const state = new Sum21GameState(1, 22, 1);
      expect(await game.evaluateState(state)).toBe(-100);
    });

    it("プレイヤー1が負けた場合は-を返すべき", async () => {
      const game = new Sum21Game();
      const state = new Sum21GameState(0, 22, 0);
      expect(await game.evaluateState(state)).toBe(100);
    });
  });

  describe("isNextPlayerMaximizing", () => {
    it("現在のプレイヤーが0の場合はtrueを返すべき", () => {
      const game = new Sum21Game();
      const state = new Sum21GameState(0, 10);
      expect(game.isNextPlayerMaximizing(state)).toBe(true);
    });

    it("現在のプレイヤーが1の場合はfalseを返すべき", () => {
      const game = new Sum21Game();
      const state = new Sum21GameState(1, 10);
      expect(game.isNextPlayerMaximizing(state)).toBe(false);
    });
  });

  describe("getWinner", () => {
    it("ゲーム続行中は-1を返すべき", () => {
      const game = new Sum21Game();
      const state = new Sum21GameState(0, 15);
      expect(game.getWinner(state)).toBe(-1);
    });

    it("プレイヤー0が勝利した場合は0を返すべき", () => {
      const game = new Sum21Game();
      const state = new Sum21GameState(1, 21, 0);
      expect(game.getWinner(state)).toBe(0);
    });

    it("プレイヤー1が勝利した場合は1を返すべき", () => {
      const game = new Sum21Game();
      const state = new Sum21GameState(0, 21, 1);
      expect(game.getWinner(state)).toBe(1);
    });

    it("プレイヤー0が負けた場合は1を返すべき", () => {
      const game = new Sum21Game();
      const state = new Sum21GameState(1, 22, 1);
      expect(game.getWinner(state)).toBe(1);
    });

    it("プレイヤー1が負けた場合は0を返すべき", () => {
      const game = new Sum21Game();
      const state = new Sum21GameState(0, 22, 0);
      expect(game.getWinner(state)).toBe(0);
    });
  });
});
