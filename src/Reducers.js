// @flow strict

import type { Action } from './Actions'
import type { State } from './State'
import { initialState } from './State'

export const rootReducer = (state: State = initialState, action: Action) => {
  switch(action.type) {
    case "INCREMENT":
      return {value: state.value + 1}
    case "DECREMENT":
      return {value: state.value - 1}
    default:
      // cast to empty fails in flow if not all types are handled.
      // eslint-disable-next-line
      (action: empty)
      return state;
  }
}