import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Position } from "../../types/position";
import { Tiles } from "../../constants/tiles";
import { CompareResponseType } from "../../types/responses";

export const pathFindingApi = createApi({
  reducerPath: "pathFindingRTK",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000" }),
  tagTypes: ["history"],
  endpoints: (builder) => ({
    getAllPathFindings: builder.query<
      {
        graph: Tiles[][];
        visitedList: Position[][];
        path: Position[];
        algorithm: String;
        time: number;
        searchedTiles: number;
        pathSize: number;
      }[],
      void
    >({
      query: () => ({
        url: "/solve-graph/get-all",
        method: "GET",
      }),
      transformResponse: (response: any) => {
        console.log(response);
        return response.pathFindings;
      },
      providesTags: ["history"],
    }),
    postPathFinding: builder.mutation<
      Position[],
      { graph: Tiles[][]; algorithm: string }
    >({
      query: (arg: { graph: Tiles[][]; algorithm: string }) => ({
        url: "/solve-graph",
        method: "POST",
        body: { graph: arg.graph, algorithm: arg.algorithm },
      }),
      invalidatesTags: ["history"],
    }),
    postPathFindingCompare: builder.mutation<CompareResponseType, { graph: Tiles[][] }>({
      query: (arg: { graph: Tiles[][] }) => ({
        url: "/compare",
        method: "POST",
        body: { graph: arg.graph },
      }),
      invalidatesTags: ["history"],
    }),
  }),
});

export const {
  usePostPathFindingMutation,
  useGetAllPathFindingsQuery,
  usePostPathFindingCompareMutation,
} = pathFindingApi;
