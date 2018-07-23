// @flow strict

import React from 'react';

type CounterProps = {|
  +value: number,
  +onIncrement: () => void,
  +onDecrement: () => void,
|}

const Counter = ({value, onIncrement, onDecrement}: CounterProps) => {
  return (
    <React.Fragment>
      <button onClick={onIncrement}>Increment</button>
      <button onClick={onDecrement}>Decrement</button>
      <div>{value}</div>
    </React.Fragment>
  )
}

export default Counter

