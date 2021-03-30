import React, { Component } from "react";

class ApiReqButton extends Component {
  render() {
    return (
      <button id="submit" onClick={this.props.handleSetView}>
        Submit
      </button>
    );
  }
}
export default ApiReqButton;
