import React, { Component } from "react";
import Emitter from "../utils/emitter";
import "./synchronizer.css";

class Synchronizer extends Component {
  render() {
    return (
      <div className="synchronizer-container">
        <button
          className="btn--synchronizer btn--mechanism"
          onClick={() => {
            Emitter.emit('SYNCHRONIZE');
            this.props.showModal();
          }}
        >
          Sprawdzam
        </button>
      </div>
    );
  }
}
export default Synchronizer;
