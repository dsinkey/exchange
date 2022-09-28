import { ThemeProvider } from "@emotion/react";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { theme } from "./theme";
import ExchangeProvider from "./state/ExchangesContextProvider";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider theme={theme}>
    <ExchangeProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ExchangeProvider>
  </ThemeProvider>
);
