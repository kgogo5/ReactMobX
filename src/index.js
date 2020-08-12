import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Reset } from "styled-reset";
import "./assets/font.css";

import { Provider } from "mobx-react"; // MobX 에서 사용하는 Provider

ReactDOM.render(
  <Provider>
    <Reset />
    <App />
  </Provider>,
  document.getElementById("root")
);
