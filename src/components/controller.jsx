import React, { Component } from "react";
import Synchronizer from "./synchronizer";

class Controller extends Component {
  render() {
    return (
      <div className="Controller">
        <Synchronizer />
        <div id="separator">
          <hr></hr>
        </div>
      </div>
    );
  }
}

export default Controller;
