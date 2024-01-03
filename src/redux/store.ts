import { configureStore } from "@reduxjs/toolkit";
import pathFindingReducer from "./slices/pathFinding.slice";
import { pathFindingApi } from "./rtk/pathFinding";

export const store = configureStore({
  reducer: {
    pathFinding: pathFindingReducer,
    [pathFindingApi.reducerPath]: pathFindingApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(pathFindingApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
