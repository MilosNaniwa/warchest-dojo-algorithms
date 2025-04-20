import alphabeta from "../../src/algorithm/alphabeta";
import Sum21Game from "../../src/game/sum21/Sum21Game";
import Sum21GameState from "../../src/game/sum21/Sum21GameState";

describe("AlphaBeta アルゴリズム", () => {
  const game = new Sum21Game();
  const depth = 5; // ゲームの最大手数に基づいて適切な深さを設定

  it("最大化プレイヤーが最善手を見つけるべき", async () => {
    const state = new Sum21GameState(0, 0);
    const result = await alphabeta(
      game,
      state,
      depth,
      0,
      -Infinity,
      Infinity,
      true
    );
    expect(result).toHaveProperty("move");
    expect(result).toHaveProperty("value");
    expect(result.value).toBe(-8);
  });

  it("最小化プレイヤーが最善手を見つけるべき", async () => {
    const state = new Sum21GameState(1, 0);
    const result = await alphabeta(
      game,
      state,
      depth,
      0,
      -Infinity,
      Infinity,
      false
    );
    expect(result).toHaveProperty("move");
    expect(result).toHaveProperty("value");
    expect(result.value).toBeGreaterThanOrEqual(-1);
    expect(result.value).toBeLessThanOrEqual(14);
  });

  it("ゲームオーバー状態を正しく処理すべき (プレイヤー0が敗北)", async () => {
    const state = new Sum21GameState(1, 22, 1);
    const result = await alphabeta(
      game,
      state,
      depth,
      0,
      -Infinity,
      Infinity,
      false
    );
    expect(result.value).toBe(-100);
  });

  it("ゲームオーバー状態を正しく処理すべき (プレイヤー1が敗北)", async () => {
    const state = new Sum21GameState(0, 22, 0);
    const result = await alphabeta(
      game,
      state,
      depth,
      0,
      -Infinity,
      Infinity,
      true
    );
    expect(result.value).toBe(100);
  });

  it("ゲーム続行中の状態を正しく処理すべき", async () => {
    const state = new Sum21GameState(0, 10);
    const result = await alphabeta(
      game,
      state,
      depth,
      0,
      -Infinity,
      Infinity,
      true
    );
    expect(result.value).toBe(100);
  });

  it("最善手として王手を見つけるべき (プレイヤー0のターン)", async () => {
    const state = new Sum21GameState(0, 19);
    const result = await alphabeta(
      game,
      state,
      depth,
      0,
      -Infinity,
      Infinity,
      true
    );
    expect(result.value).toBe(100);
    expect(result.move?.value).toBe(2);
  });

  it("最善手として王手を回避する手を見つけるべき (プレイヤー0のターン)", async () => {
    const state = new Sum21GameState(0, 15);
    const result = await alphabeta(
      game,
      state,
      depth,
      0,
      -Infinity,
      Infinity,
      true
    );
    expect(result.value).toBe(100);
    expect(result.move?.value).toBe(2);
  });

  it("最善手として王手を見つけるべき (プレイヤー1のターン)", async () => {
    const state = new Sum21GameState(1, 18);
    const result = await alphabeta(
      game,
      state,
      depth,
      0,
      -Infinity,
      Infinity,
      false
    );
    expect(result.value).toBe(-100);
    expect(result.move?.value).toBe(3);
  });

  it("最善手として王手を回避する手を見つけるべき (プレイヤー1のターン)", async () => {
    const state = new Sum21GameState(1, 16);
    const result = await alphabeta(
      game,
      state,
      depth,
      0,
      -Infinity,
      Infinity,
      false
    );
    expect(result.move?.value).toBe(1);
    expect(result.value).toBe(-100);
  });

  it("深さを変えてアルゴリズムが正しく動作するかを確認する (深さ5)", async () => {
    const state = new Sum21GameState(0, 0);
    const result = await alphabeta(
      game,
      state,
      5, // 深さを5に設定
      0,
      -Infinity,
      Infinity,
      true
    );
    expect(result).toHaveProperty("move");
    expect(result).toHaveProperty("value");
    expect(result.value).toBe(-8);
  });

  it("深さを変えてアルゴリズムが正しく動作するかを確認する (深さ15)", async () => {
    const state = new Sum21GameState(0, 0);
    const result = await alphabeta(
      game,
      state,
      15, // 深さを15に設定
      0,
      -Infinity,
      Infinity,
      true
    );
    expect(result).toHaveProperty("move");
    expect(result).toHaveProperty("value");
    expect(result.value).toBe(100);
  });

  it("連続行動が正しく処理されるかを確認する (プレイヤー0が連続行動)", async () => {
    const state = new Sum21GameState(0, 9); // 次の行動で10に達する
    const result = await alphabeta(
      game,
      state,
      depth,
      0,
      -Infinity,
      Infinity,
      true
    );
    console.log(result);
    expect(result.move?.value).toBe(1);
    expect(result.value).toBe(100);
  });

  it("連続行動が正しく処理されるかを確認する (プレイヤー1が連続行動)", async () => {
    const state = new Sum21GameState(1, 9); // 次の行動で10に達する
    const result = await alphabeta(
      game,
      state,
      depth,
      0,
      -Infinity,
      Infinity,
      false
    );
    expect(result.move?.value).toBe(1);
    expect(result.value).toBe(-100);
  });
});
