/* eslint-disable react/prefer-stateless-function */
import React, { Component } from "react";
import "./App.css";
import HistoryData from "./historyData";
import Controller from "./controller";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Controller />
        <HistoryData />
      </React.Fragment>
    );
  }
}

export default App;
