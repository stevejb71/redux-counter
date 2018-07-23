// @flow strict

export type IncrementAction = {|
  type: "INCREMENT",
|}

export type DecrementAction = {|
  type: "DECREMENT",
|}

export type UpdateAmountAction = {|
  type: "UPDATE-AMOUNT",
  amount: number,
|}

export type Action = 
| IncrementAction
| DecrementAction
| UpdateAmountAction