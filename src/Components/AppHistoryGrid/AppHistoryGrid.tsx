import { Box, Grid } from "@mui/material";
import React from "react";
import AppHistoryBlock from "../AppHistoryBlock/AppHistoryBlock";
import { useAppSelector } from "../../redux/hooks";
import { useGetAllPathFindingsQuery } from "../../redux/rtk/pathFinding";
import { createImage, formatMillisecondsToString } from "../../utils/utils";

const AppHistoryGrid = () => {
  const path = useAppSelector((state) => state.pathFinding.path);
  const visitedList = useAppSelector((state) => state.pathFinding.visitedList);

  const { data } = useGetAllPathFindingsQuery();

  return (
    <Box sx={{ width: "100vw", overflowX: "hidden" }}>
      <Grid
        container
        rowSpacing={2}
        columns={2}
        sx={{
          margin: 0,
          padding: 0,

          maxWidth: "100vw",
        }}
      >
        {data != undefined &&
          data.map((_, index: number) => (
            <>
              <Grid
                item
                xs={1}
                key={index}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <AppHistoryBlock
                  algorithm={data[index].algorithm}
                  path={path}
                  visitedList={visitedList}
                  pathSize={data[index].pathSize}
                  searchedTiles={data[index].searchedTiles}
                  time={formatMillisecondsToString(data[index].time)}
                  graph={data[index].graph}
                  image={
                    <img
                      style={{ width: "200px", height: "100px" }}
                      src={data[index].imageString}
                    />
                  }
                />
              </Grid>
            </>
          ))}
      </Grid>
    </Box>
  );
};

export default AppHistoryGrid;
