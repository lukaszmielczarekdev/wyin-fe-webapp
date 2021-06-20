/* eslint-disable react/prefer-stateless-function */
import React from "react";
import { Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import MainSection from "./mainSection";
import NavBar from "./navBar";
import Footer from "./footer";
import About from "./about";
import "react-toastify/dist/ReactToastify.css";
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
      <ToastContainer
        position="bottom-center"
        autoClose={3000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
      />
      <Footer />
    </div>
  );
}
