import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Synchronizer from "./synchronizer";
import Modal from "./modal";
import Clock from "./clock";
import Share from "./share";
import About from "./about";
import Intro from "./intro";
import "./mainSection.css";

class MainSection extends Component {
  state = {
    modalStatus: false,
  };

  showModal = () => {
    this.setState({
      modalStatus: !this.state.modalStatus,
    });
  };

  handleSendContent = (toSend) => {
    this.setState({ ...toSend });
  };

  render() {
    return (
      <section className="main-container">
        <div className="main-content-container-mobile mobile-element">
          <div className="clock-container">
            <h2 className="clock">
              <Clock />
            </h2>
          </div>
          <div className="description-container">
            <Switch>
              <Route path="/share" component={Share} />
              <Route path="/about" component={About} />
              <Route path="/" component={Intro} />
            </Switch>
          </div>
          <Synchronizer
            sendContent={this.handleSendContent}
            showModal={this.showModal}
          />
        </div>
        <div className="main-content-container-desktop desktop-element">
          <div className="main-content-container-desktop-left">
            <h2 className="clock">
              <Clock />
            </h2>
            <Synchronizer
              showModal={this.showModal}
              sendContent={this.handleSendContent}
            />
          </div>
          <div className="description-container">
            <Switch>
              <Route path="/share" component={Share} />
              <Route path="/about" component={About} />
              <Route path="/" component={Intro} />
            </Switch>
          </div>
        </div>
        <Modal
          displayContent={this.state.data}
          source={this.state.source}
          onClose={this.showModal}
          showModalStatus={this.state.modalStatus}
        />
      </section>
    );
  }
}

export default MainSection;
