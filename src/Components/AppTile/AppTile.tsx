import { Box } from "@mui/material";
import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { TILE_COLORS } from "../../constants/colors";
import { setGraphTile } from "../../redux/slices/pathFinding.slice";
import { Position } from "../../types/position";
import { usePostPathFindingMutation } from "../../redux/rtk/pathFinding";
import { TileSize } from "../../constants/tiles";
import useIsMouseDown from "../../hooks/isMouseDown";

interface IAppTileProps {
  size?: number;
  color?: string;
  disabled?: boolean;
  position?: Position;
}
const AppTile = ({
  size = TileSize,
  color = "white",
  disabled = false,
  position,
}: IAppTileProps) => {
  const isMouseDown = useIsMouseDown();
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
    try {
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
          return TILE_COLORS.PATH_TILE;
        }
      }
      // Check if graph and position exists, if so return the position tile color, otherwise return props color

      return graph && position
        ? TILE_COLORS[graph[position.i][position.j]]
        : color;
    } catch (err) {
      console.log(err);
    }
  };

  const bgcolor = getBGColor();
  const border = 1;
  return (
    <Box
      sx={{
        width: size - border,
        height: size - border,
        borderColor: "black",
        border: border,
        bgcolor,
      }}
      onClick={handleClick}
      onMouseEnter={isMouseDown ? handleClick : () => {}}
    />
  );
};

export default AppTile;
