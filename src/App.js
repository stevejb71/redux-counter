// @flow strict

import React from 'react';
import './App.css';
import { connect } from 'react-redux'
import type { Dispatch } from 'redux';
import type { Action } from './Actions'
import type { State } from './State'

const mapStateToCounterProps = ({value}: State) => {
  return {
    value: value,
  }
}

const mapDispatchToCounterProps = (dispatch: Dispatch<Action>) => {
  return {
    onIncrement: () => dispatch({type: "INCREMENT"}),
    onDecrement: () => dispatch({type: "DECREMENT"}),
  }
}

type CounterProps = {|
  +value: number,
  +onIncrement: () => void,
  +onDecrement: () => void,
|}

// Presentational component
const Counter = ({value, onIncrement, onDecrement}: CounterProps) => {
    return (
      <React.Fragment>
        <button onClick={onIncrement}>Increment</button>
        <button onClick={onDecrement}>Decrement</button>
        <div>{value}</div>
      </React.Fragment>
    )
}

// Container component
const CounterContainer = connect(
  mapStateToCounterProps,
  mapDispatchToCounterProps
  )(Counter)

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

