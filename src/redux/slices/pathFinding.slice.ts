import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Tiles } from "../../constants/tiles";
import { findTileInGraph } from "../../utils/utils";

interface IPathFindingState {
  selectedTileType: Tiles | null;
  graph: Tiles[][] | null;
}

const initialState: IPathFindingState = {
  selectedTileType: null,
  graph: null,
};

export const pathFindingSlice = createSlice({
  name: "pathFinding",
  initialState,
  reducers: {
    setSelectedTileType: (state, action: PayloadAction<Tiles>) => {
      state.selectedTileType = action.payload;
    },
    changeGraphSize: (state, action: PayloadAction<number>) => {
      state.graph = Array.from({ length: action.payload }, () =>
        Array(action.payload).fill(Tiles.EMPTY_TILE)
      );
    },
    setGraphTile: (
      state,
      action: PayloadAction<{ i: number; j: number; tileType: Tiles }>
    ) => {
      if (state.graph) {
        if (action.payload.tileType === Tiles.STARTING_TILE) {
          const foundPosition = findTileInGraph(
            state.graph,
            Tiles.STARTING_TILE
          );
          if (foundPosition) {
            state.graph[foundPosition.i][foundPosition.j] = Tiles.EMPTY_TILE;
          }
        }
        if (action.payload.tileType === Tiles.ENDING_TILE) {
          const foundPosition = findTileInGraph(state.graph, Tiles.ENDING_TILE);
          if (foundPosition) {
            state.graph[foundPosition.i][foundPosition.j] = Tiles.EMPTY_TILE;
          }
        }
        state.graph[action.payload.i][action.payload.j] =
          action.payload.tileType;
      }
    },
  },
});

export const { setSelectedTileType, changeGraphSize, setGraphTile } =
  pathFindingSlice.actions;

export default pathFindingSlice.reducer;
