import React, { Component } from "react";
import "./footer.css";

class Footer extends Component {
  renderVersion() {
    return (
      <h2>&nbsp;version: {process.env.REACT_APP_VERSION}</h2>
    );
  }

  render() {
    return (
      <div className="footer">
        <h2>Copyright &copy; 2021 WYIN</h2>
        {process.env.REACT_APP_VERSION && this.renderVersion()}
      </div>
    );
  }
};

export default Footer;
