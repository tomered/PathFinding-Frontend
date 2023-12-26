import { configureStore } from "@reduxjs/toolkit";
import pathFindingReducer from "./slices/pathFinding.slice";

export const store = configureStore({
  reducer: { pathFinding: pathFindingReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
