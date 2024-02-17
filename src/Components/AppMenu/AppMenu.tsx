import {
  Box,
  FormControl,
  InputLabel,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import { COLORS } from "../../constants/colors";
import { Tiles } from "../../constants/tiles";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  usePostPathFindingCompareMutation,
  usePostPathFindingMutation,
} from "../../redux/rtk/pathFinding";
import {
  clearGraph,
  setPathPosition,
  setVisitedPosition,
  clearSolution,
  setAlgorithm,
  setCompareGraph,
} from "../../redux/slices/pathFinding.slice";
import AppMenuItem from "./AppMenuItem";
import { delay } from "../../utils/utils";
import { Position } from "../../types/position";
import React from "react";
import { useNavigate } from "react-router-dom";
import { CompareResponseType } from "../../types/responses";

export default function AppMenu() {
  const dispatch = useAppDispatch();
  const graph = useAppSelector((state) => state.pathFinding.graph);
  const algorithm = useAppSelector((state) => state.pathFinding.algorithm);
  const [solveGraph] = usePostPathFindingMutation();
  const [compareGraph, { data }] = usePostPathFindingCompareMutation();
  const sendGraphToServer = () => {
    if (graph && algorithm) {
      dispatch(clearSolution());
      return solveGraph({ graph, algorithm }).then(async (response: any) => {
        // Return the visited tiles from the server by distance from the starting position
        for (let i = response.data.visitedList.length; i >= 0; i--) {
          delay(0).then(() =>
            dispatch(setVisitedPosition(response.data.visitedList[i]))
          );
        }
        for (let i = 0; i < response.data.path.length; i++) {
          await delay(0);
          dispatch(setPathPosition(response.data.path[i]));
        }
      });
    }
  };
  const sendCompareGraphToServer = () => {
    if (graph) {
      return compareGraph({ graph })
        .then((data) => {
          // @ts-ignore
          dispatch(setCompareGraph(data.data));
        })
        .catch(console.log);
    }
  };

  const setClearGraph = () => {
    dispatch(clearGraph());
  };

  const chooseAlgorithm = (event: SelectChangeEvent) => {
    dispatch(setAlgorithm(event.target.value as string));
  };
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        textAlign: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          width: { xs: "75", sm: "50%" },
          display: "flex",
          alignItems: "center",
          textAlign: "center",
          justifyContent: "center",
          borderColor: COLORS.BUILD_GRAPH_MENU_BORDER,
          border: 1,
          borderTopLeftRadius: 15,
          borderTopRightRadius: 15,
        }}
      >
        <AppMenuItem tileType={Tiles.STARTING_TILE} />
        <AppMenuItem tileType={Tiles.ENDING_TILE} />
        <AppMenuItem tileType={Tiles.BLOCK_TILE} />
        <AppMenuItem tileType={Tiles.EMPTY_TILE} />
        <FormControl fullWidth sx={{ margin: 1 }}>
          <InputLabel id="demo-simple-select-label">Algorithm</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={algorithm || "bfs"}
            label="Algorithm"
            onChange={chooseAlgorithm}
          >
            <MenuItem value={"bfs"}>BFS</MenuItem>
            <MenuItem value={"dfs"}>DFS</MenuItem>
            <MenuItem value={"bidirectional_search"}>
              Bidirectional Search
            </MenuItem>
            <MenuItem value={"a_star_search"}>A* Search</MenuItem>
          </Select>
        </FormControl>
        <MenuItem onClick={sendGraphToServer}>
          <Typography>Solve</Typography>
        </MenuItem>
        <MenuItem
          onClick={() => {
            sendCompareGraphToServer();
            navigate("/compare");
          }}
        >
          <Typography>Compare</Typography>
        </MenuItem>
        <MenuItem onClick={setClearGraph}>
          <Typography>Clear</Typography>
        </MenuItem>
      </Box>
    </Box>
  );
}
