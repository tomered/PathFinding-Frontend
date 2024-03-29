import { Box, Card, Typography } from "@mui/material";
import React from "react";
import { Position } from "../../types/position";
import { Tiles } from "../../constants/tiles";
import { useGetAllPathFindingsQuery } from "../../redux/rtk/pathFinding";
import AppGraphImage from "../AppGraphImage/AppGraphImage";
import { useAppDispatch } from "../../redux/hooks";
import { setGraph } from "../../redux/slices/pathFinding.slice";
import { useNavigate } from "react-router-dom";

interface IAppHistoryBlockProps {
  graph?: Tiles[][];
  path: Position[];
  visitedList: Position[];
  algorithm: String;
  time: number;
  searchedTiles: number;
  pathSize: number;
}

const AppHistoryBlock = ({
  path,
  visitedList,
  algorithm,
  time,
  pathSize,
  searchedTiles,
  graph,
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
      }}
      onClick={() => {
        onClick();
        navigate("/");
      }}
    >
      {/* <Box sx={{ height: "100%", width: "60%" }}>Picture</Box> */}
      <AppGraphImage />
      <Box
        sx={{
          height: "100%",
          width: "40%",
        }}
      >
        <Typography sx={{ color: "black" }}>Algorithm: {algorithm}</Typography>
        <Typography sx={{ color: "black" }}>Time: {time}</Typography>
        <Typography sx={{ color: "black" }}>
          Number Of Searched Tiles: {searchedTiles}
        </Typography>
        <Typography sx={{ color: "black" }}>Path Size: {pathSize}</Typography>
      </Box>
    </Card>
  );
};

export default AppHistoryBlock;
