import { Box } from "@mui/material";
import React, { useEffect } from "react";
import AppTile from "../AppTile/AppTile";
import { useAppDispatch } from "../../redux/hooks";
import { changeGraphSize } from "../../redux/slices/pathFinding.slice";

interface IAppGridProps {
  gridWidth: number;
  gridHeight: number;
}

const AppGrid = ({ gridHeight, gridWidth }: IAppGridProps) => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(changeGraphSize({ width: gridWidth, height: gridHeight }));
  }, []);
  console.log(gridHeight, gridWidth);
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
