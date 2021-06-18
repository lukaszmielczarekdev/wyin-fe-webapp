import React, { useState, useEffect, useRef } from "react";
import "./navBar.css";
import menu from "../images/menu.svg";
import { Link } from "react-router-dom";

const NavBar = () => {
  const ref = useRef();
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    const checkIfClickedOutsideList = (e) => {
      if (isOpen && ref.current && !ref.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", checkIfClickedOutsideList);
    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutsideList);
    };
  }, [isOpen]);

  return (
    <nav className="nav-grid" ref={ref}>
      <div className="nav-left"></div>
      <div className="nav-central">
        <Link
          className="navbar-link logo"
          onClick={() => setIsOpen(false)}
          to="/"
        >
          <h1>WHAT YEAR IS NOW?</h1>
        </Link>
      </div>
      <div className="nav-right navcolumn-show">
        <img
          className="icon icon-hide"
          src={menu}
          alt="menu"
          onClick={() => setIsOpen(!isOpen)}
        />
      </div>
      {isOpen && (
        <div className="collapsible navcolumn-show">
          {/* <Link
            className="navbar-link"
            to="/share"
            onClick={() => setIsOpen(false)}
          >
            Udostępniam
          </Link> */}
          <Link
            className="navbar-link"
            to="/about"
            onClick={() => setIsOpen(false)}
          >
            O nas
          </Link>
        </div>
      )}
      <div className="nav-right navcolumn-hide">
        <Link to="/about">
          <button className="btn btn--primary">O nas</button>
        </Link>
        {/* <Link to="/share">
          <button className="btn btn--secondary">Udostępniam</button>
        </Link> */}
      </div>
    </nav>
  );
};

export default NavBar;
