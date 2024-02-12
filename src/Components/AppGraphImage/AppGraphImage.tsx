import React from "react";
import { Tiles } from "../../constants/tiles";
import { Position } from "../../types/position";
import { Box } from "@mui/material";

interface IAppGraphImage {
  graph?: Tiles[][];
  visitedList?: Position[][];
  path?: Position[];
}

const AppGraphImage = ({ graph, visitedList, path }: IAppGraphImage) => {
  const a = graph;
  return <Box sx={{ bgcolor: "cyan", width: "200px", height: "100px" }}></Box>;
};

export default AppGraphImage;
