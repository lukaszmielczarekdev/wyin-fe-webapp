import React, { Component } from "react";
import { Route } from "react-router-dom";
import ModalDesktop from "./modalDesktop";
import Synchronizer from "./synchronizer";
import Clock from "./clock";
import Share from "./share";
import About from "./about";
import Intro from "./intro";
import "./mainSectionDesktop.css";

class MainSectionDesktop extends Component {
  state = {
    modalStatus: false,
  };

  showModal = () => {
    this.setState({
      modalStatus: !this.state.modalStatus,
    });
  };

  handleSendContent = (toSend) => {
    this.setState({ description: toSend });
  };

  render() {
    return (
      <div className="desktop-main-container">
        <div className="desktop-main-content-container">
          <div className="desktop-main-content-left">
            <h2 className="desktop-clock">
              <Clock />
            </h2>
            <Synchronizer
              showModal={this.showModal}
              sendContent={this.handleSendContent}
              className="btn-synchronizer"
            />
          </div>
          <div className="desktop-main-content-right">
            <ModalDesktop
              displayContent={this.state.description}
              onClose={this.showModal}
              showModalStatus={this.state.modalStatus}
            />
            <Route path="/home/share" component={Share} />
            <Route path="/home/about" component={About} />
            <Route path="/home" exact component={Intro} />
          </div>
        </div>
      </div>
    );
  }
}

export default MainSectionDesktop;