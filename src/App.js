import React, { Component } from 'react';
import './App.css';
//Custom componet "Intro"
//Custom componets capitalized per standard.
const Intro = (props) => (
          <p className="App-intro">
            Our first functional componet.
          </p>
      );

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">TV Series List</h1>
        </header>
        <Intro />
      </div>
    );
  }
}

export default App;
