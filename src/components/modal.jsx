/* eslint-disable react/jsx-no-target-blank */
import React, { Component } from "react";
import api from "../utils/api";
import Emitter from "../utils/emitter";
import prev from "../images/prev.svg";
import next from "../images/next.svg";
import prev_inactive from "../images/prev_inactive.svg";
import next_inactive from "../images/next_inactive.svg";
import random from "../images/random.svg";
import close from "../images/close.svg";
import google_logo from "../images/google_logo.svg";
import clipboard from "../images/clipboard.svg";

import "./modal.css";

class Modal extends Component {
  state = {
    CLOCK_ID: "clock",
  };

  onClose = () => {
    this.props.onClose && this.props.onClose();
  };

  setViewForSynchronizer = async () => {
    const clockElement = document.getElementById(this.state.CLOCK_ID);
    await this.handleRequest(
      api.getHistoryEvents(clockElement.textContent.trim())
    );
  };

  setViewForRandom = async () => {
    await this.handleRequest(api.getHistoryRandomEvent());
  };

  setViewForYear = async (year) => {
    await this.handleRequest(api.getHistoryYearEvent(year));
  };

  handleRequest = async (requestPromise) => {
    try {
      const content = await requestPromise;
      Emitter.emit("SEND_CONTENT", content);
    } catch (err) {
      console.error(err);
      Emitter.emit("SEND_CONTENT", {
        code: true,
        connectionProblem: true,
        source: false,
      });
    }
  };

  selectedYearModeSelector = (mode) => {
    const selectedYear = this.props.selectedYear;
    if (mode === "prev") {
      return selectedYear - 1;
    } else if (mode === "next") {
      return selectedYear + 1;
    }
  };

  createGoogleSearchLink(content) {
    const base = "https://www.google.com/search?q=";
    return `${base}${encodeURIComponent(content)}`;
  }
  copyContentToClipboard = () => {
    navigator.clipboard.writeText(this.props.displayContent);
  };

  renderSource = () => {
    if (!this.props.error || this.props.source) {
      return (
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
      );
    }
  };

  renderCopyButton = () => {
    if (!this.props.error) {
      return (
        <img
          className="btn-search"
          src={clipboard}
          alt="copy to clipboard"
          onClick={() => {
            this.copyContentToClipboard();
          }}
        />
      );
    }
  };

  renderSearchButton = () => {
    if (!this.props.error) {
      return (
        <a
          href={this.createGoogleSearchLink(this.props.displayContent)}
          target="_blank"
        >
          <img className="btn-search" src={google_logo} alt="Google search" />
        </a>
      );
    }
  };

  renderPrevButton() {
    if (this.props.selectedYear <= 1)
      return (
        <input
          className="btn-nav"
          type="image"
          name="prev_inactive"
          src={prev_inactive}
          alt="<---"
        />
      );
    return (
      <input
        className="btn-nav"
        type="image"
        name="prev"
        src={prev}
        alt="<---"
        onClick={() => {
          this.setViewForYear(this.selectedYearModeSelector("prev"));
        }}
      />
    );
  }
  renderNextButton() {
    const year = new Date().getFullYear();
    if (this.props.selectedYear >= year)
      return (
        <input
          className="btn-nav"
          type="image"
          name="next_inactive"
          src={next_inactive}
          alt="--->"
        />
      );
    return (
      <input
        className="btn-nav"
        type="image"
        name="next"
        src={next}
        alt="<---"
        onClick={() => {
          this.setViewForYear(this.selectedYearModeSelector("next"));
        }}
      />
    );
  }

  componentDidMount() {
    Emitter.on("SYNCHRONIZE", this.setViewForSynchronizer);
  }

  componentWillUnmount() {
    Emitter.removeListener("SYNCHRONIZE");
  }

  render() {
    if (!this.props.showModalStatus) {
      return false;
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
          <h3 id="category" className="article-text category-name">
            {this.props.displayCategory}
          </h3>
          <article className="article-text">
            {this.props.displayContent}
            {this.renderSource()}
            {this.renderSearchButton()}
            {this.renderCopyButton()}
          </article>
        </div>
        <nav className="modal-nav-container">
          {this.renderPrevButton()}
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
          {this.renderNextButton()}
        </nav>
      </section>
    );
  }
}

export default Modal;
