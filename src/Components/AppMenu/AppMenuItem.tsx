import { ListItemIcon, ListItemText, MenuItem } from "@mui/material";
import React from "react";
import { COLORS } from "../../constants/colors";
import AppTile from "../AppTile/AppTile";
import { Tiles, TilesToMenuLabel } from "../../constants/tiles";
import { setSelectedTileType } from "../../redux/slices/pathFinding.slice";
import { useAppDispatch } from "../../redux/hooks";

interface IAppMenuItemProps {
  tileType: Tiles;
}

const AppMenuItem = ({ tileType }: IAppMenuItemProps) => {
  const dispatch = useAppDispatch();
  const handleSelectTileType = (tileType: Tiles) => {
    dispatch(setSelectedTileType(tileType));
  };

  return (
    <MenuItem onClick={() => handleSelectTileType(tileType)}>
      <ListItemIcon>
        <AppTile disabled={true} color={COLORS[tileType]} />
      </ListItemIcon>
      <ListItemText>{TilesToMenuLabel[tileType]}</ListItemText>
    </MenuItem>
  );
};

export default AppMenuItem;
