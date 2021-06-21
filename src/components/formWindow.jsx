import React, { Component } from "react";
import close from "../images/close.svg";
import "./formWindow.css";

class FormWindow extends Component {
  state = {};

  onCloseWindow = () => {
    this.props.status && this.props.onCloseWindow();
  };

  renderYearInput() {
    return (
      <React.Fragment>
        <div className="form-window-header">
          Podaj rok:
          <input
            className="form-btn-close"
            type="image"
            name="close"
            src={close}
            alt="x"
            onClick={() => {
              this.onCloseWindow();
            }}
          />
        </div>
        <div className="form-window-body">
          <form
            className="form-manual"
            id="submitYearForm"
            onSubmit={() => {
              this.props.setViewForManualYear();
              this.onCloseWindow();
            }}
          >
            <input
              autoFocus
              className="form-manual"
              type="number"
              min="0"
              max={String(new Date().getFullYear())}
              id="submitYearInput"
            />
          </form>
        </div>
        <div className="form-window-footer">
          <button className="btn-submit" form="submitYearForm">
            Sprawdzam
          </button>
        </div>
      </React.Fragment>
    );
  }

  render() {
    if (!this.props.status) {
      return false;
    }
    return (
      <div className="form-window-background">
        <section className="form-window">{this.renderYearInput()}</section>
      </div>
    );
  }
}

export default FormWindow;
