import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Tiles } from "../../constants/tiles";

interface IPathFindingState {
  selectedTileType: Tiles | null;
}

const initialState: IPathFindingState = {
  selectedTileType: null,
};

export const pathFindingSlice = createSlice({
  name: "pathFinding",
  initialState,
  reducers: {
    setSelectedTileType: (state, action: PayloadAction<Tiles>) => {
      state.selectedTileType = action.payload;
    },
  },
});

export const { setSelectedTileType } = pathFindingSlice.actions;

export default pathFindingSlice.reducer;
