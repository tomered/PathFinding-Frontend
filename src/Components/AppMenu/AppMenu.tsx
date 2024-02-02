import { Box } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import { COLORS } from "../../constants/colors";
import { Tiles } from "../../constants/tiles";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { usePostPathFindingMutation } from "../../redux/rtk/pathFinding";
import {
  clearGraph,
  setPathPosition,
  setVisitedPosition,
  clearSolution,
} from "../../redux/slices/pathFinding.slice";
import AppMenuItem from "./AppMenuItem";
import { delay } from "../../utils/utils";
import { Position } from "../../types/position";

export default function AppMenu() {
  const dispatch = useAppDispatch();
  const graph = useAppSelector((state) => state.pathFinding.graph);
  const [solveGraph] = usePostPathFindingMutation();
  const sendGraphToServer = () => {
    if (graph) {
      dispatch(clearSolution());
      return solveGraph(graph).then(async (response: any) => {
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

  const setClearGraph = () => {
    dispatch(clearGraph());
  };
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
        <MenuItem onClick={sendGraphToServer}>
          <Typography>Solve</Typography>
        </MenuItem>
        <MenuItem onClick={setClearGraph}>
          <Typography>Clear</Typography>
        </MenuItem>
      </Box>
    </Box>
  );
}
