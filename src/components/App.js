/* eslint-disable react/prefer-stateless-function */
import React from "react";
import { Route } from "react-router-dom";
import MainSection from "./mainSection";
import NavBar from "./navBar";
import Footer from "./footer";
import "./App.css";

export default function App() {
  return (
    <div className="app-container">
      <NavBar />
      <main>
        <Route path="/" component={MainSection} />
      </main>
      <Footer />
    </div>
  );
}
