import { Tiles } from "./tiles";
export const COLORS = {
  STARTING_TILE: "green",
  ENDING_TILE: "red",
  BLOCK_TILE: "grey",
  EMPTY_TILE: "white",
  PATH_TILE: "yellow",
  SCREEN_LAYOUT_BGC: "white",
};

export const TILE_COLORS: Record<Tiles, string> = {
  [Tiles.STARTING_TILE]: COLORS.STARTING_TILE,
  [Tiles.ENDING_TILE]: COLORS.ENDING_TILE,
  [Tiles.BLOCK_TILE]: COLORS.BLOCK_TILE,
  [Tiles.EMPTY_TILE]: COLORS.EMPTY_TILE,
  [Tiles.PATH_TILE]: COLORS.PATH_TILE,
};
