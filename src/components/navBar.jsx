import React from "react";
import "./navBar.css";
import menu from "../images/menu.png";
import { Link } from "react-router-dom";

const NavBar = () => {
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
        <Link to="/home/about">
          <button className="btn btn--primary">O nas</button>
        </Link>
        <Link to="/home/share">
          <button className="btn btn--secondary">Udostępniam</button>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
