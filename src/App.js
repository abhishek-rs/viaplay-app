import React, { Component } from 'react';
import logo from './img/logo.png';
import MoviesComponent from './components/MoviesComponent';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <div className="App-intro">
          <MoviesComponent />
        </div>
      </div>
    );
  }
}

export default App;
