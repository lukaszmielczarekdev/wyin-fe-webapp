import React, { Component } from "react";

class Clock extends Component {
  state = {};

  componentDidMount() {
    this.currentTime = setInterval(() => this.updateClock(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.currentTime);
  }

  updateClock() {
    this.setState({
      currentTime: new Date().toLocaleTimeString("en-GB", {
        hour: "2-digit",
        minute: "2-digit",
      }),
    });
  }
  render() {
    return <div id="clock">{this.state.currentTime}</div>;
  }
}
export default Clock;
