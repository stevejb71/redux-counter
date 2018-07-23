// @flow strict

export type State = {|
  +count: number,
  +amount: number,
|}

export const initialState: State = {count: 0, amount: 1}

