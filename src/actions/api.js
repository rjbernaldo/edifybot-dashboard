import { isLoading, hasErrored, isSuccess } from './status'
import { hideModal } from './modal'
import { setUser } from './user'
import { setExpenses, updateExpense, deleteExpense } from './expenses'
import { setSummary } from './summary'

const API_URL = process.env.API_URL

export function fetchData(senderId) {
  return dispatch => {
    if (senderId) {
      dispatch(isLoading())
      
      dispatch(fetchUser(senderId))
        .then(() => {
          return dispatch(fetchExpenses(senderId))
        })
        // .then(dispatch(fetchSummary()))
        .catch(err => {
          dispatch(hasErrored(`Error: Unknown`))
        })
    } else {
      dispatch(hasErrored('No sender id'))
    }
  }
}

export function saveData(data) {
  return (dispatch, getState) => {
    let { user } = getState()
    let url = `${API_URL}/users/${user.sender_id}/expenses/${data.id}`
    
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
    let url = `${API_URL}/users/${user.sender_id}/expenses/${data.id}`
    
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

function fetchUser(senderId) {
  return dispatch => {
    let url = `${API_URL}/users/${senderId}`
    
    return fetch(url)
      .then(res => res.json())
      .then(res => {
        dispatch(setUser(res))
      })
      .catch(err => {
        console.log(err)
        dispatch(hasErrored(`Invalid user "${senderId}"`))
      })
  }
}

function fetchExpenses(senderId) {
  return (dispatch, getState) => {
    let url = `${API_URL}/users/${senderId}/expenses`
    
    if (senderId)
      return fetch(url)
        .then(res => res.json())
        .then(res => {
          dispatch(setExpenses(res))
        })
        .then(() => {
          dispatch(isSuccess())
        })
        .catch(err => {
          console.log(err)
          dispatch(hasErrored(`Unknown error occured`))
        })
  }
}

function fetchSummary(senderId) {
  return dispatch => {
    let url = `${API_URL}/users/${senderId}/summary`
    
    let json = []
    dispatch(setSummary(json))
  }
}

