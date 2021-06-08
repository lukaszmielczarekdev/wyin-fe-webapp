import React, { Component } from "react";
import api from "../utils/api"
import "./synchronizer.css";

class Synchronizer extends Component {
  state = {
    CLOCK_ID: "clock",
    errorBody: "There was an error",
  };

  render() {
    return (
      <div className="synchronizer-container">
        <button
          className="btn--synchronizer btn--mechanism"
          onClick={() => {
            this.setView();
            this.props.showModal();
          }}
        >
          Sprawdzam
        </button>
      </div>
    );
  }

  setView = async () => {
    const clockElement = document.getElementById(this.state.CLOCK_ID);

    try {
      const content = await api.getHistoryEvents(
        clockElement.textContent.trim()
      );
      this.props.sendContent(content);
    } catch (err) {
      console.error(err);
      this.props.sendContent({ data: this.state.errorBody });
    }
  };
}
export default Synchronizer;
