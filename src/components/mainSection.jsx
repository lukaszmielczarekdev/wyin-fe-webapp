import React, { Component } from "react";
import Synchronizer from "./synchronizer";
import HistoryData from "./historyData";
import "./mainSection.css";

class MainSection extends Component {
  state = {};
  handleContent = (toSend) => {
    this.setState({ description: toSend });
  };

  render() {
    return (
      <div className="grid grid-num-of-col">
        <div className="grid column-left">
          <div className="grid column-left-content-container">
            <div className="clock-container">
              <h2 id="clock" className="clock">
                {new Date()
                  .toLocaleTimeString('en-GB', {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
              </h2>
            </div>
            <div className="description-container-left display-description">
              <HistoryData displayContent={this.state.description} />
            </div>
            <Synchronizer sendContent={this.handleContent} />
          </div>
        </div>
        <div className="grid column-right display-switch">
          <div className="grid column-right-content-container">
            <div className="empty"></div>
            <div className="description-container-right">
              <HistoryData displayContent={this.state.description} />
            </div>
            <div className="empty"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default MainSection;
