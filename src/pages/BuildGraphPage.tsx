import React from "react";
import ScreenLayout from "../layout/ScreenLayout";
import { Box } from "@mui/material";
import AppNavBar from "../Components/AppNavBar/AppNavBar";
import AppGrid from "../Components/Grid/AppGrid";
import { TileSize } from "../constants/tiles";
import AppMenu from "../Components/AppMenu/AppMenu";

const BuildGraphPage = () => {
  const screenWidthSize = Math.floor(window.innerWidth / TileSize);
  const screenHeightSize = Math.floor(window.innerHeight / TileSize / 1.5);

  return (
    <ScreenLayout navBar={<AppNavBar />}>
      <Box sx={{ color: "black" }}>
        <AppGrid gridWidth={screenWidthSize} gridHeight={screenHeightSize} />
        <AppMenu />
      </Box>
    </ScreenLayout>
  );
};

export default BuildGraphPage;
