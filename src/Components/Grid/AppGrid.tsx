import { Box } from "@mui/material";
import React, { useEffect } from "react";
import AppTile from "../AppTile/AppTile";
import { useAppDispatch } from "../../redux/hooks";
import { changeGraphSize } from "../../redux/slices/pathFinding.slice";

interface IAppGridProps {
  gridSize?: number;
}

const AppGrid = ({ gridSize = 10 }: IAppGridProps) => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(changeGraphSize(gridSize));
  }, []);

  return (
    <Box>
      {Array(gridSize)
        .fill(true)
        .map((item, i) => (
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            {Array(gridSize)
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
