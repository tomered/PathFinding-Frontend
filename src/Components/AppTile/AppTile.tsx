import { Box } from "@mui/material";
import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { COLORS } from "../../constants/colors";
import { setGraphTile } from "../../redux/slices/pathFinding.slice";

interface IAppTileProps {
  size?: number | string;
  color?: string;
  disabled?: boolean;
  position?: { i: number; j: number };
}
const AppTile = ({
  size = 15,
  color = "white",
  disabled = false,
  position,
}: IAppTileProps) => {
  const dispatch = useAppDispatch();
  const tileType = useAppSelector(
    (state) => state.pathFinding.selectedTileType
  );
  const graph = useAppSelector((state) => state.pathFinding.graph);

  const handleClick = () => {
    if (!disabled && tileType && position) {
      dispatch(setGraphTile({ i: position.i, j: position.j, tileType }));
    }
  };
  const bgcolor =
    graph && position ? COLORS[graph[position.i][position.j]] : color;
  return (
    <Box
      sx={{
        width: size,
        height: size,
        borderColor: "black",
        border: 3,
        bgcolor,
      }}
      onClick={handleClick}
    />
  );
};

export default AppTile;
