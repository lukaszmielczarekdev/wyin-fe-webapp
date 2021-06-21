import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Synchronizer from "./synchronizer";
import Emitter from "../utils/emitter";
import disableScroll from "disable-scroll";
import Modal from "./modal";
import Clock from "./clock";
import Share from "./share";
import About from "./about";
import Intro from "./intro";
import "./mainSection.css";

class MainSection extends Component {
  state = {
    modalStatus: false,
    zeroYear: {
      content:
        "Rok zerowy nie występuje w powszechnie stosowanym do numeracji lat kalendarzu gregoriańskim i w jego poprzedniku, kalendarzu juliańskim. W tym systemie po roku 1 p.n.e. następuje rok 1 n.e. Jednak rok zerowy istnieje w astronomicznej numeracji lat (gdzie pokrywa się z rokiem 1 p.n.e. według kalendarza juliańskiego) i w ISO 8601:2004 (gdzie pokrywa się z rokiem 1 p.n.e. według kalendarza gregoriańskiego), a także w większości buddyjskich i hinduskich kalendarzy.",
      link: "https://pl.wikipedia.org/wiki/Rok_zerowy",
    },
    errorBody:
      "Niestety wygląda na to, że w Wikipedii jeszcze nie ma informacji o tym roku. Spróbuj wylosować lub wybrać nowe wydarzenie.",
  };

  showModal = () => {
    disableScroll.on();
    this.setState({
      modalStatus: !this.state.modalStatus,
    });
  };

  componentDidMount() {
    Emitter.on("SEND_CONTENT", (toSend) => {
      if (toSend.code && toSend.code !== "NF002") {
        this.setState({
          data: this.state.errorBody,
          year: toSend.year,
          category: false,
          source: false,
          error: true,
        });
      } else if (toSend.code && toSend.code === "NF002") {
        this.setState({
          data: this.state.zeroYear.content,
          source: this.state.zeroYear.link,
          year: 0,
          error: true,
          category: false,
        });
      } else if (!toSend.code) {
        this.setState({ ...toSend, error: false });
      }
      if (toSend.connectionProblem) {
        this.setState({ data: "There was an error" });
      }
    });
  }

  componentWillUnmount() {
    Emitter.off("SEND_CONTENT");
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
          error={this.state.error}
        />
      </section>
    );
  }
}

export default MainSection;
