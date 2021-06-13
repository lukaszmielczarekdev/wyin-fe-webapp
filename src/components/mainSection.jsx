import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Synchronizer from "./synchronizer";
import Emitter from "../utils/emitter";
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

  componentDidMount() {
    Emitter.on("SEND_CONTENT", (toSend) => {
      this.setState({ ...toSend });
    });
  }

  componentWillUnmount() {
    Emitter.removeListener("SEND_CONTENT");
  }

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
          <Synchronizer showModal={this.showModal} />
        </div>
        <div className="main-content-container-desktop desktop-element">
          <div className="main-content-container-desktop-left">
            <h2 className="clock">
              <Clock />
            </h2>
            <Synchronizer showModal={this.showModal} />
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
          displayYear={this.state.year}
          displayCategory={this.state.category}
          source={this.state.source}
          onClose={this.showModal}
          showModalStatus={this.state.modalStatus}
          selectedYear={this.state.year}
        />
      </section>
    );
  }
}

export default MainSection;
