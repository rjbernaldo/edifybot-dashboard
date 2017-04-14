import { SET_EXPENSES, UPDATE_EXPENSE, DELETE_EXPENSE } from '../actions/expenses'

const initialState = []

export default function (state = initialState, action) {
  switch(action.type) {
    case SET_EXPENSES:
      return action.expenses
    case UPDATE_EXPENSE:
      return state.map(e => {
        if (e.id === action.expense.id) {
          return action.expense
        } else {
          return e
        }
      })
    case DELETE_EXPENSE:
      let index = state.findIndex(x => x.id === action.expense.id)
      return [
        ...state.slice(0, index),
        ...state.slice(index + 1)
      ]
    default:
      return state
  }
}