import React, { Component } from "react";
import "./App.css";
import IdBox from "./components/IdBox";
import { bw, hq, sw, cm } from "./images";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header" />
        <div>
          <h1> Meet the team</h1>
          <div className="ids">
            <IdBox
              image={bw}
              firstName="Natasha"
              name="Romanoff"
              activity="Spy"
              funct="Tactician"
              gender="Female"
            />
            <IdBox
              image={hq}
              firstName="Harley"
              name="Quinn"
              activity="Ehhh nothing"
              funct="Psych"
              gender="Female"
            />
            <IdBox
              image={sw}
              firstName="Wanda"
              name="Maximoff"
              activity="Magic"
              funct="Witch"
              gender="Female"
            />
            <IdBox
              image={cm}
              firstName="Carol"
              name="Danvers"
              activity="Pilot"
              funct="Space Explorer"
              gender="Female"
            />
          </div>
        </div>
        <footer className="App-footer" />
      </div>
    );
  }
}

export default App;
