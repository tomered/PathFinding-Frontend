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
    if (position) {
      const isPositionInPath = path?.some((element) => {
        if (element.i == position.i && element.j == position.j) {
          return true;
        }

        return false;
      });
      if (isPositionInPath) {
        return COLORS.PATH_TILE;
      }
    }
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
