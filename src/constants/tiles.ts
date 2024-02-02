export enum Tiles {
  STARTING_TILE = "STARTING_TILE",
  ENDING_TILE = "ENDING_TILE",
  BLOCK_TILE = "BLOCK_TILE",
  EMPTY_TILE = "EMPTY_TILE",
  PATH_TILE = "PATH_TILE",
  VISITED_LIST_TILE = "VISITED_LIST_TILE",
}

export const TilesToMenuLabel: Record<Tiles, string> = {
  STARTING_TILE: "Start",
  ENDING_TILE: "End",
  BLOCK_TILE: "Block",
  EMPTY_TILE: "Empty",
  PATH_TILE: "path",
  VISITED_LIST_TILE: "visited",
};

export const TileSize = 30;
