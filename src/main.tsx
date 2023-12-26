import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./redux/store.ts";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Box>
          <Routes>
            <Route path="/*" element={<App />} />
          </Routes>
        </Box>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
