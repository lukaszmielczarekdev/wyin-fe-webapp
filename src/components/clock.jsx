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
    return <React.Fragment id="clock">{this.state.currentTime}</React.Fragment>;
  }
}
export default Clock;
