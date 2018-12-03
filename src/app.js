import React, { Component } from "react";
import logo from "./sailci.svg";
import "./app.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Hello, #TechHubTuesday!</p>
          <a
            className="App-link"
            href="https://sail.ci/docs"
            target="_blank"
            rel="noopener noreferrer">
            Learn Sail CI
          </a>
        </header>
      </div>
    );
  }
}

export default App;
