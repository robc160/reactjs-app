import React, { Component } from 'react';
import Main from '../Main';
import logo from '../../logo.png';
import './App.css';
import './index.css';
import 'whatwg-fetch';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <Main />
        <Series />
      </div>
    );
  }
}

export default App;
