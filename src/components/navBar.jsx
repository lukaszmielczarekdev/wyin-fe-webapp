import React, { Component } from "react";
import "./navBar.css";
import menu from "../images/menu.png";

class NavBar extends Component {
  render() {
    return (
      <div className="nav-grid">
        <div className="nav-left"></div>
        <div className="nav-central">
          <h1>WHAT YEAR IS NOW?</h1>
        </div>
        <div className="nav-right navcolumn-show">
          <img className="icon icon-hide" src={menu} alt="menu" />
        </div>
        <div className="nav-right navcolumn-hide">
          <button className="btn btn--primary">About Us</button>
          <button className="btn btn--secondary">Share</button>
        </div>
      </div>
    );
  }
}

export default NavBar;
