import { Box } from "@mui/material";
import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { COLORS } from "../../constants/colors";
import { setGraphTile } from "../../redux/slices/pathFinding.slice";
import { Position } from "../../types/position";
import { usePostPathFindingMutation } from "../../redux/rtk/pathFinding";

interface IAppTileProps {
  size?: number | string;
  color?: string;
  disabled?: boolean;
  position?: Position;
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
  const path = useAppSelector((state) => state.pathFinding.path);

  const handleClick = () => {
    if (!disabled && tileType && position) {
      dispatch(setGraphTile({ i: position.i, j: position.j, tileType }));
    }
  };

  const getBGColor = () => {
    // Check if position exists
    if (position) {
      // Check if position is part of the path
      const isPositionInPath = path?.some((element) => {
        if (element.i == position.i && element.j == position.j) {
          return true;
        }

        return false;
      });
      // Return the path color
      if (isPositionInPath) {
        return COLORS.PATH_TILE;
      }
    }
    // Check if graph and position exists, if so return the position tile color, otherwise return empty tile color
    return graph && position ? COLORS[graph[position.i][position.j]] : color;
  };

  const bgcolor = getBGColor();
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
