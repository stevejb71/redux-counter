// @flow strict

import { connect } from 'react-redux'
import type { State } from '../state'
import type { Action } from '../actions/counterActions'
import Counter from '../components/CounterComponent'

const mapDispatchToProps = (dispatch: Dispatch<Action>) => {
  return {
    onIncrement: () => dispatch({type: "INCREMENT"}),
    onDecrement: () => dispatch({type: "DECREMENT"}),
    onAmountUpdate: e => dispatch({type: "UPDATE-AMOUNT", amount: Number(e.target.value)}),
  }
}

const CounterContainer = connect(
  // State is the same shape as the props, so mapStateToProps is just identity.
  // The type annotation isn't needed by Flow, added for clarity.
  (s: State) => s,
  mapDispatchToProps
  )(Counter)

export default CounterContainer;