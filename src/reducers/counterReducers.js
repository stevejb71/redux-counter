// @flow strict

import type { Action } from '../actions/counterActions'
import type { State } from '../state'
import { initialState } from '../state'

export const rootReducer = (state: State = initialState, action: Action) => {
  switch(action.type) {
    case "INCREMENT":
      return {...state, count: state.count + state.amount}
    case "DECREMENT":
      return {...state, count: state.count - state.amount}
    case "UPDATE-AMOUNT":
      return {...state, amount: action.amount}
    default:
      // cast to empty fails in flow if not all types are handled.
      // eslint-disable-next-line
      (action: empty)
      return state;
  }
}