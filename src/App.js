// @flow strict

import React from 'react';
import './App.css';
import CounterContainer from './containers/CounterContainer'

// Presentational component
const App = () => {
  return (
      <div className="App">
        <h1>Redux counter</h1>
        <CounterContainer/>
      </div>
  )
}

export default App