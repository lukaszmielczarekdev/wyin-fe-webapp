/* eslint-disable react/jsx-no-target-blank */
import React, { Component } from "react";
import api from "../utils/api"
import Emitter from "../utils/emitter";
import prev from "../images/prev.svg";
import next from "../images/next.svg";
import random from "../images/random.svg";
import close from "../images/close.svg";
import "./modal.css";

class Modal extends Component {
  state = {
    CLOCK_ID: "clock",
    errorBody: "There was an error",
  };

  onClose = () => {
    this.props.onClose && this.props.onClose();
  };

  setViewForSynchronizer = async () => {
    const clockElement = document.getElementById(this.state.CLOCK_ID);
    await this.handleRequest(api.getHistoryEvents(clockElement.textContent.trim()));
  };

  setViewForRandom = async () => {
    await this.handleRequest(api.getHistoryRandomEvent());
  };

  handleRequest = async (requestPromise) => {
    try {
      const content = await requestPromise;
      Emitter.emit('SEND_CONTENT', content);
    } catch (err) {
      console.error(err);
      Emitter.emit('SEND_CONTENT', { data: this.state.errorBody });
    }
  };

  componentDidMount() {
    Emitter.on('SYNCHRONIZE', this.setViewForSynchronizer);
  }

  componentWillUnmount() {
    Emitter.removeListener('SYNCHRONIZE');
  }

  render() {
    if (!this.props.showModalStatus) {
      return null;
    }

    return (
      <section className="modal-window">
        <input
          className="btn-nav btn-close"
          type="image"
          name="close"
          src={close}
          alt="<---"
          onClick={() => {
            this.onClose();
          }}
        />
        <div className="modal-year-container">
          <h2 id="clock" className="modal-clock">
            {this.props.displayYear}
          </h2>
        </div>
        <div className="modal-content-container">
          <article className="article-text">
            {this.props.displayContent}
            <p className="source">
              {
                <a
                  className="source-link source"
                  href={this.props.source}
                  target="_blank"
                >
                  źródło: Wikipedia
                </a>
              }
            </p>
          </article>
        </div>
        <nav className="modal-nav-container">
          <input
            className="btn-nav"
            type="image"
            name="prev"
            src={prev}
            alt="<---"
          />
          <input
            className="btn-nav"
            type="image"
            name="random"
            src={random}
            alt="random event"
            onClick={() => {
              this.setViewForRandom();
            }}
          />
          <input
            className="btn-nav"
            type="image"
            name="next"
            src={next}
            alt="--->"
          />
        </nav>
      </section>
    );
  }
}

export default Modal;
