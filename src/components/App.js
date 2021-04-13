/* eslint-disable react/prefer-stateless-function */
import React, { Component } from "react";
import MainSection from "./mainSection";
import NavBar from "./navBar";
import Footer from "./footer";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <div>
          <NavBar />
        </div>
        <div>
          <MainSection />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
