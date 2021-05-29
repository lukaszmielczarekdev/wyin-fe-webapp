import React, { Component } from "react";
import "./synchronizer.css";

class Synchronizer extends Component {
  state = {
    CLOCK_ID: "clock",
    errorBody: "There was an error",
  };

  render() {
    return (
      <div className="synchronizer-container">
        <button
          className="btn--synchronizer btn--mechanism"
          onClick={() => {
            this.setView();
            this.props.showModal();
          }}
        >
          Sprawdzam
        </button>
      </div>
    );
  }

  getQueryString = (params) => {
    const queryStrings = Object.entries(params).map((p) => {
      const [key, value] = p;
      return `${key}=${encodeURIComponent(value)}`;
    });
    return queryStrings.join("&");
  };

  throwOnErrorStatusCode = (statusCode) => {
    if (statusCode >= 400) {
      throw new Error(`API responded with: ${statusCode}`);
    } else if (!statusCode) {
      throw new Error("Woops, there is no status code");
    }
  };

  getHistoryEvents = async (time) => {
    const params = { t: time };
    const endpoint = "/history/event";
    const qs = this.getQueryString(params);
    const url = qs.length > 0 ? `${endpoint}?${qs}` : endpoint;
    const base = process.env.REACT_APP_WYIN_BE_FEED_API;

    const uri = new URL(url, base);
    const response = await fetch(uri);

    this.throwOnErrorStatusCode(response.status);
    return response.json();
  };

  setView = async () => {
    const clockElement = document.getElementById(this.state.CLOCK_ID);

    try {
      const content = await this.getHistoryEvents(
        clockElement.textContent.trim()
      );
      this.props.sendContent(content.data);
    } catch (err) {
      console.error(err);
      this.props.sendContent(this.state.errorBody);
    }
  };
}
export default Synchronizer;
