import React from "react";
import ScreenLayout from "../layout/ScreenLayout";
import AppNavBar from "../Components/AppNavBar/AppNavBar";
import { Box } from "@mui/material";

const HistoryPage = () => {
  return (
    <ScreenLayout navBar={<AppNavBar />}>
      <Box sx={{ bgcolor: "red" }}> HistoryPage </Box>
    </ScreenLayout>
  );
};

export default HistoryPage;
