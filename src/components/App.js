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
      <NavBar />
      <main className="component-mobile">
        <Route path="/" component={MainSectionMobile} />
      </main>
      <main className="component-desktop">
        <Route path="/" component={MainSectionDesktop} />
      </main>
      <Footer />
    </div>
  );
}
