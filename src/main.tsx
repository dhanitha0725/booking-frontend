import React from "react";
import ReactDOM from "react-dom/client";
import { CssVarsProvider } from "@mui/joy/styles";
import { ThemeProvider } from "@mui/material/styles";
import App from "./App";
import { muiTheme, joyTheme } from "./utils/theme";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={muiTheme}>
      <CssVarsProvider theme={joyTheme}>
        <App />
      </CssVarsProvider>
    </ThemeProvider>
  </React.StrictMode>
);
