import { isLoading, hasErrored } from './status'
import { setUser } from './user'
import { setDays } from './days'
import { setSummary } from './summary'

export function fetchData(senderId) {
  return dispatch => {
    if (senderId) {
      dispatch(isLoading())
      
      return dispatch(fetchUser(senderId))
        .then(dispatch(fetchExpenses(senderId)))
        .then(dispatch(fetchSummary(senderId)))
    }
    
    return dispatch(hasErrored('No sender id'))
  }
}

function fetchUser(senderId) {
  return dispatch => {
    let url = `http://localhost:3000/users/${senderId}`
    
    return fetch(url)
      .then(res => res.json())
      .then(json => {
        dispatch(setUser(json))
      })
      .catch(err => {
        dispatch(hasErrored(err))
      })
      // .then((res) => {
      //   if (!res.ok) throw Error(res.statusText)
      //   
      //   return res
      // })
      // .then(res => res.json())
      // .then(json => dispatch(receiveUserData(json)))
      // .catch((err) => { console.log(err) })
  }
}

function fetchExpenses(senderId) {
  return dispatch => {
    let url = `http://localhost:3000/users/${senderId}/expenses`
    
    return fetch(url)
      .then(res => res.json())
      .then(json => {
        dispatch(setDays(parseExpenses(json)))
      })
      .catch(err => {
        dispatch(hasErrored(err))
      })
  }
}

function fetchSummary(senderId) {
  return dispatch => {
    let url = `http://localhost:3000/users/${senderId}/summary`
    
    let json = []
    dispatch(setSummary(json))
  }
}

function parseExpenses(json) {
  
}