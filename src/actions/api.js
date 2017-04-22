import { isLoading, hasErrored, isSuccess } from './status'
import { hideModal } from './modal'
import { setUser } from './user'
import { setExpenses, updateExpense, deleteExpense } from './expenses'
import { setSummary } from './summary'

const API_URL = process.env.API_URL

export function fetchData(accessKey) {
  return dispatch => {
    if (accessKey) {
      dispatch(isLoading())
      
      dispatch(fetchUser(accessKey))
        .then(() => dispatch(fetchExpenses()))
        .then(() => dispatch(isSuccess()))
        .catch(err => {
          console.log(err)
          dispatch(hasErrored(err.message))
        })
    } else {
      dispatch(hasErrored('No sender id'))
    }
  }
}

export function saveData(data) {
  return (dispatch, getState) => {
    let { user } = getState()
    let url = `${API_URL}/users/${user.access_key}/expenses/${data.id}`
    
    return fetch(url, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ expense: data })
    })
      .then(res => res.json())
      .then((expense) => {
        dispatch(updateExpense(expense))
      }).catch(err => {
        console.log(err)
        dispatch(hasErrored('Error: Unable to update expense'))
      })
  }
}

export function deleteData(data) {
  return (dispatch, getState) => {
    let { user } = getState()
    let url = `${API_URL}/users/${user.access_key}/expenses/${data.id}`
    
    return fetch(url, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ expense: data })
    })
      .then(res => res.json())
      .then((expense) => {
        dispatch(deleteExpense(expense))
      }).catch(err => {
        console.log(err)
        dispatch(hasErrored('Error: Unable to delete expense'))
      })
  }
}

function fetchUser(accessKey) {
  return dispatch => {
    let url = `${API_URL}/users/${accessKey}`
    
    return fetch(url)
      .then(res => res.json())
      .then(res => {
        if (res.error) throw new Error(res.error)
        
        dispatch(setUser(res))
      })
  }
}

function fetchExpenses() {
  return (dispatch, getState) => {
    let accessKey = getState().user.access_key
    let url = `${API_URL}/users/${accessKey}/expenses`
    
    if (accessKey) {
      return fetch(url)
        .then(res => res.json())
        .then(res => {
          if (res.error) throw new Error(res.error)
          
          dispatch(setExpenses(res))
        })
    }
  }
}