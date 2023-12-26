import { Tiles } from "./tiles";

export const COLORS: Record<Tiles, string> = {
  [Tiles.STARTING_TILE]: "green",
  [Tiles.ENDING_TILE]: "red",
  [Tiles.BLOCK_TILE]: "grey",
  [Tiles.EMPTY_TILE]: "white",
};
