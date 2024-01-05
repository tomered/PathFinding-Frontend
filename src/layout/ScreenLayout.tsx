import { jsx } from "@emotion/react";
import { Box } from "@mui/material";
import React, { ReactNode } from "react";

interface ScreenLayoutProps {
  children?: ReactNode;
  navBar: ReactNode;
}
const ScreenLayout = ({ children, navBar }: ScreenLayoutProps) => {
  return (
    <Box
      sx={{
        bgcolor: "white",
        display: "flex",
        flex: 1,
        width: "100vw",
        height: "100vh",
        flexDirection: "column",
      }}
    >
      {navBar}
      {children}
    </Box>
  );
};

export default ScreenLayout;
