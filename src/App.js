// @flow strict

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

type State = {
  +value: number
}

class App extends Component<State> {
  render() {
    return (
      <div className="App">
        <h1>Redux counter</h1>
        <button>increment</button>
        <button>decrement</button>
        <div>0</div>
      </div>
    );
  }
}

export default App;
