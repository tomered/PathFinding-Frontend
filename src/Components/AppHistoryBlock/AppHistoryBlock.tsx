import { Box, Card, Typography } from "@mui/material";
import React from "react";
import { Position } from "../../types/position";
import { Tiles } from "../../constants/tiles";
import { useGetAllPathFindingsQuery } from "../../redux/rtk/pathFinding";
import AppGraphImage from "../AppGraphImage/AppGraphImage";
import { useAppDispatch } from "../../redux/hooks";
import { setGraph } from "../../redux/slices/pathFinding.slice";
import { useNavigate } from "react-router-dom";
import { COLORS } from "../../constants/colors";
import { image } from "html2canvas/dist/types/css/types/image";

interface IAppHistoryBlockProps {
  graph?: Tiles[][];
  path: Position[];
  visitedList: Position[];
  algorithm: String;
  time: string;
  searchedTiles: number;
  pathSize: number;
  image: any;
}

const AppHistoryBlock = ({
  path,
  visitedList,
  algorithm,
  time,
  pathSize,
  searchedTiles,
  graph,
  image,
}: IAppHistoryBlockProps) => {
  const dispatch = useAppDispatch();
  const onClick = () => {
    console.log("graph from onclick", graph);
    if (graph) {
      dispatch(setGraph(graph));
    }
  };
  const navigate = useNavigate();

  return (
    <Card
      sx={{
        width: "45vw",
        height: "40vh",
        display: "flex",

        flexDirection: "row",
        bgcolor: "#d4effa",
      }}
      onClick={() => {
        onClick();
        navigate("/");
      }}
    >
      {/* <Box sx={{ height: "100%", width: "60%" }}>Picture</Box> */}
      <AppGraphImage image={image} />
      <Box
        sx={{
          height: "100%",
          width: "40%",
        }}
      >
        <Typography
          sx={{
            color: COLORS.HISTORY_PAGE_COLOR,
            width: "100%",
            padding: 1,
            fontSize: 25,
          }}
        >
          Algorithm: {algorithm}
        </Typography>
        <Typography
          sx={{
            color: COLORS.HISTORY_PAGE_COLOR,
            width: "100%",
            padding: 1,
            fontSize: 25,
          }}
        >
          Time: {time}
        </Typography>
        <Typography
          sx={{
            color: COLORS.HISTORY_PAGE_COLOR,
            width: "100%",
            padding: 1,
            fontSize: 25,
          }}
        >
          Number Of Searched Tiles: {searchedTiles}
        </Typography>
        <Typography
          sx={{
            color: COLORS.HISTORY_PAGE_COLOR,
            width: "100%",
            padding: 1,
            fontSize: 25,
          }}
        >
          Path Size: {pathSize}
        </Typography>
      </Box>
    </Card>
  );
};

export default AppHistoryBlock;
