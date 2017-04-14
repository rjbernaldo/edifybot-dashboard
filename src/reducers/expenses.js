import { SET_EXPENSES, UPDATE_EXPENSE } from '../actions/expenses'

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
    default:
      return state
  }
}