import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Tiles } from "../../constants/tiles";
import { findTileInGraph } from "../../utils/utils";
import { Position } from "../../types/position";

interface IPathFindingState {
  selectedTileType: Tiles | null;
  graph: Tiles[][] | null;
  path: Position[] | null;
  startingPosition: Position | null;
  endingPosition: Position | null;
}

const initialState: IPathFindingState = {
  selectedTileType: null,
  graph: null,
  path: null,
  startingPosition: null,
  endingPosition: null,
};

export const pathFindingSlice = createSlice({
  name: "pathFinding",
  initialState,
  reducers: {
    setPath: (state, action: PayloadAction<Position[]>) => {
      state.path = action.payload;
    },
    setSelectedTileType: (state, action: PayloadAction<Tiles>) => {
      state.selectedTileType = action.payload;
    },
    changeGraphSize: (
      state,
      action: PayloadAction<{ width: number; height: number }>
    ) => {
      state.graph = Array.from({ length: action.payload.height }, () =>
        Array(action.payload.width).fill(Tiles.EMPTY_TILE)
      );
    },
    setGraphTile: (
      state,
      action: PayloadAction<{ i: number; j: number; tileType: Tiles }>
    ) => {
      if (state.graph) {
        if (action.payload.tileType === Tiles.STARTING_TILE) {
          if (state.startingPosition === null) {
            state.startingPosition = {
              i: action.payload.i,
              j: action.payload.j,
            };
          } else {
            state.graph[state.startingPosition.i][state.startingPosition.j] =
              Tiles.EMPTY_TILE;
            state.startingPosition = {
              i: action.payload.i,
              j: action.payload.j,
            };
          }
        }
        if (action.payload.tileType === Tiles.ENDING_TILE) {
          if (state.endingPosition === null) {
            state.endingPosition = {
              i: action.payload.i,
              j: action.payload.j,
            };
          } else {
            state.graph[state.endingPosition.i][state.endingPosition.j] =
              Tiles.EMPTY_TILE;
            state.endingPosition = {
              i: action.payload.i,
              j: action.payload.j,
            };
          }
        }
        state.graph[action.payload.i][action.payload.j] =
          action.payload.tileType;
      }
    },
  },
});

export const { setSelectedTileType, changeGraphSize, setGraphTile, setPath } =
  pathFindingSlice.actions;

export default pathFindingSlice.reducer;
