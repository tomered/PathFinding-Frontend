import * as React from "react";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import Typography from "@mui/material/Typography";
import ContentCut from "@mui/icons-material/ContentCut";
import ContentCopy from "@mui/icons-material/ContentCopy";
import ContentPaste from "@mui/icons-material/ContentPaste";
import Cloud from "@mui/icons-material/Cloud";
import AppTile from "../AppTile/AppTile";
import { COLORS } from "../../constants/colors";
import { Tiles } from "../../constants/tiles";
import { useDispatch } from "react-redux";
import { setSelectedTileType } from "../../redux/slices/pathFinding.slice";
import AppMenuItem from "./AppMenuItem";

export default function AppMenu() {
  const dispatch = useDispatch();
  const handleSelectTileType = (tileType: Tiles) => {
    dispatch(setSelectedTileType(tileType));
  };
  return (
    <Paper
      sx={{
        width: 320,
        maxWidth: "100%",
        position: "absolute",
        top: 0,
        left: 0,
      }}
    >
      <MenuList>
        <AppMenuItem tileType={Tiles.STARTING_TILE} />
        <AppMenuItem tileType={Tiles.ENDING_TILE} />
        <AppMenuItem tileType={Tiles.BLOCK_TILE} />
      </MenuList>
    </Paper>
  );
}
