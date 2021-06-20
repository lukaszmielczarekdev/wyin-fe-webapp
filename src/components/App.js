/* eslint-disable react/prefer-stateless-function */
import React from "react";
import { Route, Switch } from "react-router-dom";
import MainSection from "./mainSection";
import NavBar from "./navBar";
import Footer from "./footer";
import About from "./about";
import "./App.css";

export default function App() {
  return (
    <div className="app-container">
      <NavBar />
      <main>
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/" component={MainSection} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}
