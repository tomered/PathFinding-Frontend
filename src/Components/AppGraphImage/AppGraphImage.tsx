import React from "react";
import { Tiles } from "../../constants/tiles";
import { Position } from "../../types/position";
import { Box } from "@mui/material";
import { useGetAllPathFindingsQuery } from "../../redux/rtk/pathFinding";
import { COLORS } from "../../constants/colors";

interface IAppGraphImage {
  graph?: Tiles[][];
  visitedList?: Position[][];
  path?: Position[];
  image: any;
}

const AppGraphImage = ({ graph, visitedList, path, image }: IAppGraphImage) => {
  return (
    <Box
      sx={{
        width: "200px",
        height: "100px",
        borderColor: COLORS.BORDER_BGC,
        border: 2,
      }}
    >
      {image}
    </Box>
  );
};

export default AppGraphImage;
