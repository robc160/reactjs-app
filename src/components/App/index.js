import React, { Component } from 'react';
import Intro from '../Intro';
import Series from '../../containers/Series';
import logo from '../../logo.png';
import './App.css';
import './custom.css';
import 'whatwg-fetch';

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <Intro message="Here you can find all of your most loved series" />
        <Series />
      </div>
    );
  }
}

export default App;
