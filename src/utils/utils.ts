import { Tiles } from "../constants/tiles";

export const findTileInGraph = (
  graph: Tiles[][],
  key: Tiles
): { i: number; j: number } | null => {
  for (let k = 0; k < graph.length; k++) {
    for (let s = 0; s < graph.length; s++) {
      if (graph[k][s] === key) {
        return { i: k, j: s };
      }
    }
  }
  return null;
};
