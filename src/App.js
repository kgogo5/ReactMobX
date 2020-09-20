import React, { Component } from "react";
import SuperMarket from "./Components/SuperMarket";
import DevTools from "mobx-react-devtools";

class App extends Component {
  render() {
    return (
      <div className="App">
        <SuperMarket />
      </div>
    );
  }
}

export default App;
