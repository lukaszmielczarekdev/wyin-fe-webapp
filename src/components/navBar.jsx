import React, { useState, useEffect, useRef } from "react";
import "./navBar.css";
import { NavLink } from "react-router-dom";

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

  const handleClick = () => setIsOpen(!isOpen);

  return (
    <div id="navbar-wrapper" ref={ref}>
      <div id="navbar-items" className="text-center">
        <i></i>
        <div>
          <NavLink
            className="navbar-link"
            onClick={() => setIsOpen(false)}
            to="/"
          >
            <h1 className="nav-logo">WHAT YEAR IS NOW?</h1>
          </NavLink>
        </div>
        <ul className={isOpen ? "nav-menu active" : "nav-menu"}>
          <li className="nav-links menu">
            <NavLink
              onClick={() => setIsOpen(false)}
              className="navbar-link"
              to="/about"
            >
              O nas
            </NavLink>
          </li>
        </ul>
        <i
          onClick={handleClick}
          className={
            isOpen ? "menu-icon fas fa-times" : "menu-icon fas fa-bars"
          }
        ></i>
      </div>
    </div>
  );
};

export default NavBar;
