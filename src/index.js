import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "mobx-react";
import App from "./App";
import { Reset } from "styled-reset";
import "./assets/font.css";
import MarketStore from "./stores/market";

const market = new MarketStore();

ReactDOM.render(
  <Provider market={market}>
    <Reset />
    <App />
  </Provider>,
  document.getElementById("root")
);
