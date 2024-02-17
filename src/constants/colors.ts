import { Tiles } from "./tiles";
export const COLORS = {
  STARTING_TILE: "green",
  ENDING_TILE: "red",
  BLOCK_TILE: "grey",
  EMPTY_TILE: "white",
  PATH_TILE: "yellow",
  VISITED_LIST_TILE: "transparent",
  SCREEN_LAYOUT_BGC: "white",
  BUILD_GRAPH_MENU_BORDER: "lightgray",
  VISITED: {
    START: "#a902bf",
    END: "#02bfb3",
  },
  NAVBAR_BGC: "#34495e",
  BORDER_BGC: "black",
  HISTORY_PAGE_COLOR: "black",
  COMPARE_TABLE_BGC: "#bdd8f2",
  COMPARE_TABLE_COLOR: "black",
};

export const TILE_COLORS: Record<Tiles, string> = {
  [Tiles.STARTING_TILE]: COLORS.STARTING_TILE,
  [Tiles.ENDING_TILE]: COLORS.ENDING_TILE,
  [Tiles.BLOCK_TILE]: COLORS.BLOCK_TILE,
  [Tiles.EMPTY_TILE]: COLORS.EMPTY_TILE,
  [Tiles.PATH_TILE]: COLORS.PATH_TILE,
  [Tiles.VISITED_LIST_TILE]: COLORS.VISITED_LIST_TILE,
};
