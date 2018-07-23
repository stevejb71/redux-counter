// @flow strict

import React from 'react';

type CounterProps = {|
  +count: number,
  +amount: number,  
  +onIncrement: () => void,
  +onDecrement: () => void,
  +onAmountUpdate: number => void,
|}

const Counter = ({count, amount, onIncrement, onDecrement, onAmountUpdate}: CounterProps) => {
  return (
    <React.Fragment>
      <button onClick={onIncrement}>Increment</button>
      <button onClick={onDecrement}>Decrement</button>
      <input type="text" value={amount} onChange={onAmountUpdate}/>
      <div>{count}</div>
    </React.Fragment>
  )
}

export default Counter

