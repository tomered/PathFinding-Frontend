import { Box } from "@mui/material";
import React, { useEffect } from "react";
import AppTile from "../AppTile/AppTile";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { changeGraphSize } from "../../redux/slices/pathFinding.slice";

interface IAppGridProps {
  gridWidth: number;
  gridHeight: number;
}

const AppGrid = ({ gridHeight, gridWidth }: IAppGridProps) => {
  const dispatch = useAppDispatch();
  const graph = useAppSelector((state) => state.pathFinding.graph);
  useEffect(() => {
    if (!graph) {
      dispatch(changeGraphSize({ width: gridWidth, height: gridHeight }));
    }
  }, []);
  return (
    <Box>
      {Array(gridHeight)
        .fill(true)
        .map((item, i) => (
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            {Array(gridWidth)
              .fill(true)
              .map((item, j) => (
                <AppTile position={{ i, j }} />
              ))}
          </Box>
        ))}
    </Box>
  );
};

export default AppGrid;
