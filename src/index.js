import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { GlobalStyles } from "./global-styles/global-styles";
import reportWebVitals from "./reportWebVitals";
import { DataContext } from "./context/context";

ReactDOM.render(
  <>
    <DataContext>
      <GlobalStyles />
      <App />
    </DataContext>
  </>,
  document.getElementById("root")
);

reportWebVitals();
