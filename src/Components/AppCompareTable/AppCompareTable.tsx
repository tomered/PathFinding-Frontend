import {
  Box,
  Paper,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React, { useEffect } from "react";
import AppHistoryBlock from "../AppHistoryBlock/AppHistoryBlock";
import { useAppSelector } from "../../redux/hooks";
import AppGraphImage from "../AppGraphImage/AppGraphImage";
import { styled } from "@mui/material/styles";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import { Tiles } from "../../constants/tiles";
import { usePostPathFindingCompareMutation } from "../../redux/rtk/pathFinding";
import { formatMillisecondsToString } from "../../utils/utils";
import { COLORS } from "../../constants/colors";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: COLORS.COMPARE_TABLE_BGC,
    color: COLORS.COMPARE_TABLE_COLOR,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

function createData(
  name: any,
  data: any[],
  fn?: (value: any, index: number, array: any[]) => string
) {
  return { name, data: fn ? data.map(fn) : data };
}

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const AppCompareTable = () => {
  const solution = useAppSelector((state) => state.pathFinding.solution);

  // const bfsTime = formatMillisecondsToString(solution?.bfs.time ?? 0);
  // const dfsTime = formatMillisecondsToString(solution?.dfs.time ?? 0);
  // const bidirectionalTime = formatMillisecondsToString(
  //   solution?.bidirectional_search.time ?? 0
  // );
  // const aStarTime = formatMillisecondsToString(
  //   solution?.a_star_search.time ?? 0
  // );
  const rows = [
    createData("Solution Graph", [
      <AppGraphImage
        image={
          <img
            style={{ width: "200px", height: "100px" }}
            src={solution?.bfs.imageString}
          />
        }
      />,
      <AppGraphImage
        image={
          <img
            style={{ width: "200px", height: "100px" }}
            src={solution?.dfs.imageString}
          />
        }
      />,
      <AppGraphImage
        image={
          <img
            style={{ width: "200px", height: "100px" }}
            src={solution?.bidirectional_search.imageString}
          />
        }
      />,
      <AppGraphImage
        image={
          <img
            style={{ width: "200px", height: "100px" }}
            src={solution?.a_star_search.imageString}
          />
        }
      />,
    ]),
    createData("Path Size", [
      solution?.bfs.path.length,
      solution?.dfs.path.length,
      solution?.bidirectional_search.path.length,
      solution?.a_star_search.path.length,
    ]),
    createData("Number Of Visited Tiles", [
      solution?.bfs.visitedList.flat().length,
      solution?.dfs.visitedList.flat().length,
      solution?.bidirectional_search.visitedList.flat().length,
      solution?.a_star_search.visitedList.flat().length,
    ]),
    createData(
      "Time",
      [
        solution?.bfs.time,
        solution?.dfs.time,
        solution?.bidirectional_search.time,
        solution?.a_star_search.time,
      ],
      formatMillisecondsToString
    ),
  ];

  return (
    <TableContainer
      component={Paper}
      sx={{
        height: "85%",
        display: "flex",
        width: "95vw",
        alignSelf: "center",
        marginTop: "10px",
      }}
    >
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">Compare</StyledTableCell>
            <StyledTableCell align="center">Bfs</StyledTableCell>
            <StyledTableCell align="center">Dfs</StyledTableCell>
            <StyledTableCell align="center">
              Bidirectional Search
            </StyledTableCell>
            <StyledTableCell align="center">A* Search</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              {row.data.map((element) => (
                <StyledTableCell align="center">{element}</StyledTableCell>
              ))}
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default AppCompareTable;
