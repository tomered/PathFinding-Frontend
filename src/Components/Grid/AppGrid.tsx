import { Box } from "@mui/material";
import React from "react";
import AppTile from "../AppTile/AppTile";

interface IAppGridProps {
  gridSize?: number;
}

const AppGrid = ({ gridSize = 10 }: IAppGridProps) => {
  return (
    <Box>
      {Array(gridSize)
        .fill(true)
        .map((item, index) => (
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            {Array(gridSize)
              .fill(true)
              .map((item, index) => (
                <AppTile />
              ))}
          </Box>
        ))}
    </Box>
  );
};

export default AppGrid;
