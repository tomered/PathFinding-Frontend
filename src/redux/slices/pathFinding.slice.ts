import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Tiles } from "../../constants/tiles";
import { findTileInGraph, isSamePosition } from "../../utils/utils";
import { Position } from "../../types/position";
import { CompareResponseType } from "../../types/responses";

interface IPathFindingState {
  selectedTileType: Tiles | null;
  graph: Tiles[][] | null;
  path: Position[];
  visitedList: Position[];
  startingPosition: Position | null;
  endingPosition: Position | null;
  algorithm: string;
  solution: CompareResponseType | null;
}

const initialState: IPathFindingState = {
  selectedTileType: null,
  graph: null,
  path: [],
  visitedList: [],
  startingPosition: null,
  endingPosition: null,
  algorithm: "bfs",
  solution: null,
};

export const pathFindingSlice = createSlice({
  name: "pathFinding",
  initialState,
  reducers: {
    clearGraph: (state) => {
      state.graph = Array.from({ length: state.graph?.length || 1 }, () =>
        Array.from(
          { length: state.graph?.[0].length || 1 },
          () => Tiles.EMPTY_TILE
        )
      );
      state.path = [];
      state.visitedList = [];
      state.endingPosition = null;
      state.startingPosition = null;
      state.selectedTileType = null;
    },
    setGraph: (state, action: PayloadAction<Tiles[][]>) => {
      state.graph = action.payload;
    },
    setCompareGraph: (state, action: PayloadAction<CompareResponseType>) => {
      state.solution = action.payload;
    },
    setPathPosition: (state, action: PayloadAction<Position>) => {
      state.path?.push(action.payload);
    },
    setAlgorithm: (state, action) => {
      state.algorithm = action.payload;
    },
    setVisitedPosition: (state, action: PayloadAction<Position[]>) => {
      state.visitedList = [...state.visitedList, ...action.payload];
    },
    clearSolution: (state) => {
      state.visitedList = [];
      state.path = [];
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

export const {
  setSelectedTileType,
  changeGraphSize,
  setGraphTile,
  setPathPosition,
  setVisitedPosition,
  clearSolution,
  clearGraph,
  setAlgorithm,
  setGraph,
  setCompareGraph
} = pathFindingSlice.actions;

export default pathFindingSlice.reducer;
