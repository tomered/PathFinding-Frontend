import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const AppNavBar = () => {
  const navigate = useNavigate();
  return (
    <Box sx={{ bgcolor: "blue" }}>
      <AppBar sx={{ bgcolor: "#34495e", position: "static" }}>
        <Toolbar>
          <Typography
            sx={{
              color: "white",
              fontSize: "25px",
              fontWeight: "700",
              paddingRight: "15px",
            }}
          >
            Path Finding Visualizer
          </Typography>
          <Button
            variant="text"
            sx={{ color: "white" }}
            onClick={() => navigate("/")}
          >
            Build Graph
          </Button>
          <Button
            variant="text"
            sx={{ color: "white" }}
            onClick={() => navigate("/compare")}
          >
            Compare
          </Button>
          <Button
            variant="text"
            sx={{ color: "white" }}
            onClick={() => navigate("/history")}
          >
            History
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default AppNavBar;
