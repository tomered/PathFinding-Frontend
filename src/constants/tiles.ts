export enum Tiles {
  STARTING_TILE = "STARTING_TILE",
  ENDING_TILE = "ENDING_TILE",
  BLOCK_TILE = "BLOCK_TILE",
  EMPTY_TILE = "EMPTY_TILE",
  PATH_TILE = "PATH_TILE",
}

export const TilesToMenuLabel: Record<Tiles, string> = {
  STARTING_TILE: "Start",
  ENDING_TILE: "End",
  BLOCK_TILE: "Block",
  EMPTY_TILE: "Empty",
  PATH_TILE: "path",
};

export const TileSize = 30;
