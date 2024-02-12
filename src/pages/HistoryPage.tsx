import React from "react";
import ScreenLayout from "../layout/ScreenLayout";
import AppNavBar from "../Components/AppNavBar/AppNavBar";
import { Box } from "@mui/material";
import AppHistoryBlock from "../Components/AppHistoryBlock/AppHistoryBlock";
import { useAppSelector } from "../redux/hooks";
import AppHistoryGrid from "../Components/AppHistoryGrid/AppHistoryGrid";

const HistoryPage = () => {
  return (
    <ScreenLayout navBar={<AppNavBar />}>
      <AppHistoryGrid />
    </ScreenLayout>
  );
};

export default HistoryPage;
