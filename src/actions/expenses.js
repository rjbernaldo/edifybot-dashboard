export const SET_EXPENSES = 'SET_EXPENSES'
export const UPDATE_EXPENSE = 'UPDATE_EXPENSE'
export const DELETE_EXPENSE = 'DELETE_EXPENSE'

export function setExpenses(expenses) {
  return {
    type: SET_EXPENSES,
    expenses
  }
}

export function updateExpense(expense) {
  return {
    type: UPDATE_EXPENSE,
    expense
  }
}

export function deleteExpense(expense) {
  return {
    type: DELETE_EXPENSE,
    expense
  }
}