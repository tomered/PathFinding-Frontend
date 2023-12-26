import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import AppTile from "./Components/AppTile/AppTile";
import { Box } from "@mui/material";
import AppGrid from "./Components/Grid/AppGrid";
import AppMenu from "./Components/AppMenu/AppMenu";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <AppGrid />
      <AppMenu />
    </>
  );
}

export default App;
