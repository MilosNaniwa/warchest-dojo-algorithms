// WarChestTools.ts
import WarChestGameState from "./WarChestGameState";

export const detectPhase = (state: WarChestGameState): number => {
  const turn = state.snapshot["snapshot_id"];
  const redControl = state.snapshot["control_points_state"].filter(
    (e) => e["dominated_by"] === "red"
  ).length;
  const blueControl = state.snapshot["control_points_state"].filter(
    (e) => e["dominated_by"] === "blue"
  ).length;

  if (turn > 17 && (redControl >= 3 || blueControl >= 3)) return 1;
  if (redControl >= 5 || blueControl >= 5) return 2;
  return 0;
};

// 追加可能なユーティリティ関数
export const calculateControlAdvantage = (state: WarChestGameState): number => {
  const red = state.snapshot["control_points_state"].filter(
    (e) => e["dominated_by"] === "red"
  ).length;
  const blue = state.snapshot["control_points_state"].filter(
    (e) => e["dominated_by"] === "blue"
  ).length;
  return red - blue;
};

export const getUnitDeploymentMetrics = (state: WarChestGameState) => {
  const units = state.snapshot["units_state"];
  return {
    red: units.filter((u) => u.team === "red" && u.layer === "board").length,
    blue: units.filter((u) => u.team === "blue" && u.layer === "board").length,
  };
};
