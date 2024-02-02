import { Box } from "@mui/material";
import React from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { COLORS, TILE_COLORS } from "../../constants/colors";
import { setGraphTile } from "../../redux/slices/pathFinding.slice";
import { Position } from "../../types/position";
import { TileSize, Tiles } from "../../constants/tiles";
import { isSamePosition } from "../../utils/utils";

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
  const dispatch = useAppDispatch();
  const tileType = useAppSelector(
    (state) => state.pathFinding.selectedTileType
  );
  const graph = useAppSelector((state) => state.pathFinding.graph);
  const path = useAppSelector((state) => state.pathFinding.path);
  const visitedList = useAppSelector((state) => state.pathFinding.visitedList);
  const startingPosition = useAppSelector(
    (state) => state.pathFinding.startingPosition
  );
  const endingPosition = useAppSelector(
    (state) => state.pathFinding.endingPosition
  );

  const handleClick = () => {
    if (!disabled && tileType && position) {
      dispatch(setGraphTile({ i: position.i, j: position.j, tileType }));
    }
  };

  const handlePressedDrag = (event: React.MouseEvent) => {
    const isLeftButtonPressed = event.buttons & 1;

    if (isLeftButtonPressed && !disabled && tileType && position) {
      dispatch(setGraphTile({ i: position.i, j: position.j, tileType }));
    }
  };

  const getBGColor = () => {
    try {
      if (!isSamePosition(position, startingPosition) && position) {
        const isPositionInPath = path?.some((element) =>
          isSamePosition(element, position)
        );
        const isPositionInVisitedList = visitedList?.some((element) => {
          if (
            isSamePosition(element, position) &&
            !isSamePosition(position, startingPosition) &&
            !isSamePosition(position, endingPosition)
          ) {
            return true;
          }
          return false;
        });

        if (isPositionInPath) {
          return TILE_COLORS.PATH_TILE;
        }

        if (isPositionInVisitedList) {
          return COLORS.VISITED_LIST_TILE;
        }
      }

      return graph && position
        ? TILE_COLORS[graph[position.i][position.j]]
        : color;
    } catch (err) {
      console.log(err);
    }
  };

  const bgcolor = getBGColor();

  const border = 1;

  let visitedColor = COLORS.VISITED_LIST_TILE;

  return (
    <>
      <Box
        sx={{
          position: "relative",
          width: size - border,
          height: size - border,
          borderColor: COLORS.BORDER_BGC,
          border: border,
          bgcolor: bgcolor,
          display: "flex",

          "&::after": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            bgcolor: COLORS.VISITED.END, // Initial color is set to purple
            opacity: bgcolor === visitedColor ? 1 : 0, // Initial opacity for smooth transition
            transition:
              bgcolor === COLORS.EMPTY_TILE
                ? "0s visibility"
                : "opacity 2s ease-in-out",
          },
        }}
        onClick={handleClick}
        onMouseEnter={handlePressedDrag}
      >
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            "&::after": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              bgcolor: COLORS.VISITED.START, // Initial color is set to purple
              opacity: bgcolor !== visitedColor ? 0 : 1, // Initial opacity for smooth transition
              transition:
                bgcolor === COLORS.EMPTY_TILE
                  ? "0s visibility"
                  : "opacity 1s ease-in-out",
            },
          }}
        ></Box>
      </Box>
    </>
  );
};

export default AppTile;
