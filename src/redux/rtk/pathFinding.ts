import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Position } from "../../types/position";
import { Tiles } from "../../constants/tiles";

export const pathFindingApi = createApi({
  reducerPath: "pathFindingRTK",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000" }),
  endpoints: (builder) => ({
    postPathFinding: builder.mutation<Position[], Tiles[][]>({
      query: (graph: Tiles[][]) => ({
        url: "/basic-path-finding",
        method: "POST",
        body: { graph },
      }),
    }),
  }),
});

export const { usePostPathFindingMutation } = pathFindingApi;
