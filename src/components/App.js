// @flow strict

import React from 'react';
import '../App.css';
import CounterContainer from '../containers/CounterContainer'

const App = () => {
  return (
      <div className="App">
        <h1>Redux counter</h1>
        <CounterContainer/>
      </div>
  )
}

export default App