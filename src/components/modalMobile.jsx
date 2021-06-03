/* eslint-disable react/jsx-no-target-blank */
import React, { Component } from "react";
import prev from "../images/prev.svg";
import next from "../images/next.svg";
import random from "../images/random.svg";
import close from "../images/close.svg";
import "./modalMobile.css";

class ModalMobile extends Component {
  onClose = () => {
    this.props.onClose && this.props.onClose();
  };

  render() {
    if (!this.props.showModalStatus) {
      return null;
    }

    return (
      <section className="modal-mobile-window centered">
        <input
          className="btn--responsive-mobile btn--close-mobile"
          type="image"
          name="close"
          src={close}
          alt="<---"
          onClick={() => {
            this.onClose();
          }}
        />
        <div className="modal-year-container">
          <h2 id="clock" className="modal-mobile-clock">
            {new Date()
              .toLocaleTimeString("en-GB", {
                hour: "2-digit",
                minute: "2-digit",
              })
              .split(":")}
          </h2>
        </div>
        <div className="modal-content-container">
          <article className="text-mobile">
            {this.props.displayContent}
            <p className="source">
              {
                <a
                  className="source-link text-mobile"
                  href={`https://pl.wikipedia.org/wiki/${new Date()
                    .toLocaleTimeString("en-GB", {
                      hour: "2-digit",
                      minute: "2-digit",
                    })
                    .split(":")
                    .join("")}`}
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
            className="btn--responsive-mobile"
            type="image"
            name="prev"
            src={prev}
            alt="<---"
          />
          <input
            className="btn--responsive-mobile"
            type="image"
            name="random"
            src={random}
            alt="random event"
          />
          <input
            className="btn--responsive-mobile"
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

export default ModalMobile;
