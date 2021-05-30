/* eslint-disable react/prefer-stateless-function */
import React from "react";
import MainSectionDesktop from "./mainSectionDesktop";
import MainSectionMobile from "./mainSectionMobile";
import { Route } from "react-router-dom";
import NavBar from "./navBar";
import Footer from "./footer";
import "./App.css";

export default function App() {
  return (
    <div className="app-container">
      <div>
        <NavBar />
      </div>
      <div className="component-mobile">
        <Route path="/" component={MainSectionMobile} />
      </div>
      <div className="component-desktop">
        <Route path="/" component={MainSectionDesktop} />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
