export enum Tiles {
  STARTING_TILE = "STARTING_TILE",
  ENDING_TILE = "ENDING_TILE",
  BLOCK_TILE = "BLOCK_TILE",
}

export const TilesToMenuLabel: Record<Tiles, string> = {
  STARTING_TILE: "Start",
  ENDING_TILE: "End",
  BLOCK_TILE: "Block",
};
