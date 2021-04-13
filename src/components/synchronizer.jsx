import React, { Component } from "react";
import "./synchronizer.css";

class Synchronizer extends Component {
  state = {
    API_PROTOCOL: "http",
    API_DOMAIN: "localhost",
    API_PORT: 8080,
    // VIEW_ID: "view",
    TIME_ID: "time",
    errorBody: "There was an error",
  };

  render() {
    return (
      <div className="synchronizer-container">
        <button className="btn btn--mechanism" onClick={this.setView}>
          Check it out
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
    const endpoint = "/history/events";
    const qs = this.getQueryString(params);
    const url = qs.length > 0 ? `${endpoint}?${qs}` : endpoint;
    const base = `${this.state.API_PROTOCOL}://${this.state.API_DOMAIN}:${this.state.API_PORT}`;

    const uri = new URL(url, base);
    const response = await fetch(uri);

    this.throwOnErrorStatusCode(response.status);
    return response.json();
  };

  setView = async () => {
    // const view = document.getElementById(this.state.VIEW_ID);
    const param = document.getElementById(this.state.TIME_ID);

    try {
      const content = await this.getHistoryEvents(param.value);
      // view.innerHTML = content.data;
      this.props.sendContent(content.data);
    } catch (err) {
      // console.log(err);
      // view.innerHTML = this.state.errorBody;
      this.props.sendContent(this.state.errorBody);
    }
  };
}
export default Synchronizer;
