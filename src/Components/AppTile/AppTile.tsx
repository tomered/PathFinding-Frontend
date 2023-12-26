import { Box } from "@mui/material";
import React, { useState } from "react";
import { useAppSelector } from "../../redux/hooks";
import { COLORS } from "../../constants/colors";

interface IAppTileProps {
  size?: number | string;
  color?: string;
  disabled?: boolean;
}
const AppTile = ({
  size = 15,
  color = "white",
  disabled = false,
}: IAppTileProps) => {
  const tileType = useAppSelector(
    (state) => state.pathFinding.selectedTileType
  );
  const [tileBG, setTileBG] = useState<string>(color);
  const handleClick = () => {
    if (!disabled && tileType) {
      setTileBG(COLORS[tileType]);
    }
  };
  return (
    <Box
      sx={{
        width: size,
        height: size,
        borderColor: "black",
        border: 3,
        bgcolor: tileBG,
      }}
      onClick={handleClick}
    />
  );
};

export default AppTile;
