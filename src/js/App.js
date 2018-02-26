import React, { Component } from 'react';
import logo from '../imgs/logo.svg';
import '../css/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">{this.props.text}</h1>
        </header>
        <p className="App-intro">
         {this.props.children}
        </p>
      </div>
    );
  }
}

export default App;
