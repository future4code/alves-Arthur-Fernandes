import { ThemeProvider } from "@mui/material";
import React from "react";
import GlobalState from "./Global/GlobalState";
import { themeIn } from "./Constants/theme";
import Router from "./Routes/Router";
import Header from "./Components/Header";

function App() {
  return (
    <div>
      <GlobalState>
        <ThemeProvider theme={themeIn}>
          <Router />
        </ThemeProvider>
      </GlobalState>
    </div>
  );
}

export default App;
