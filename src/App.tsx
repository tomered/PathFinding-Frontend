import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

import AppTile from "./Components/AppTile/AppTile";
import { Box } from "@mui/material";
import AppGrid from "./Components/Grid/AppGrid";
import AppMenu from "./Components/AppMenu/AppMenu";
import { Route, Routes } from "react-router-dom";
import BuildGraph from "./pages/BuildGraphPage";
import Compare from "./pages/ComparePage";
import HistoryPage from "./pages/HistoryPage";

function App() {
  return (
    // <>
    //   <AppGrid />
    //   <AppMenu />
    // </>
    <Routes>
      <Route path="/" element={<BuildGraph />}></Route>
      <Route path="/compare" element={<Compare />}></Route>
      <Route path="/history" element={<HistoryPage />}></Route>
    </Routes>
  );
}

export default App;
