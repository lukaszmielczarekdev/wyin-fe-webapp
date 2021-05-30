import React, { Component } from "react";
import { Route } from "react-router-dom";
import Synchronizer from "./synchronizer";
import ModalMobile from "./modalMobile";
import Clock from "./clock";
import Share from "./share";
import About from "./about";
import Intro from "./intro";
import "./mainSectionMobile.css";

class MainSectionMobile extends Component {
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
      <div className="grid main-container-mobile">
        <div className="grid main-container-content">
          <div className="clock-container">
            <h2 className="clock">
              <Clock />
            </h2>
          </div>
          <div className="description-container-mobile">
            <ModalMobile
              displayContent={this.state.description}
              onClose={this.showModal}
              showModalStatus={this.state.modalStatus}
            />
            <Route path="/share" component={Share} />
            <Route path="/about" component={About} />
            <Route path="/" exact component={Intro} />
          </div>
          <Synchronizer
            sendContent={this.handleSendContent}
            showModal={this.showModal}
          />
        </div>
      </div>
    );
  }
}

export default MainSectionMobile;
