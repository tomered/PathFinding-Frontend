import { Position } from "./position";

export type CompareResponseType = {
  [key in Algorithms]: AlgorithmResponse;
};

export interface AlgorithmResponse {
  path: Position[];
  visitedList: Position[][];
  time: number;
}

export type Algorithms =
  | "bfs"
  | "dfs"
  | "bidirectional_search"
  | "a_star_search";
