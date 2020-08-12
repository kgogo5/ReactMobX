import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "mobx-react";
import App from "./App";
import { Reset } from "styled-reset";
import "./assets/font.css";
import CounterStore from "./store/counter";

const counter = new CounterStore();

ReactDOM.render(
  <Provider counter={counter}>
    <Reset />
    <App />
  </Provider>,
  document.getElementById("root")
);
