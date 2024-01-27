import { Tiles } from "../constants/tiles";
import { Position } from "../types/position";

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

export const isSamePosition = (
  position1: Position | undefined | null,
  position2: Position | undefined | null
) => {
  if (position1 && position2) {
    if (position1.i === position2.i && position1.j === position2.j) {
      return true;
    }
  }
  return false;
};

export const delay = (duration: number) =>
  new Promise((resolve) => setTimeout(resolve, duration));
