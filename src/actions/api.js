import { isLoading, hasErrored } from './status'
import { setUser } from './user'
import { setExpenses } from './expenses'

export function fetchData(senderId) {
  return dispatch => {
    dispatch(isLoading())
    
    return dispatch(fetchUser(senderId))
      .then(dispatch(fetchExpenses(senderId)))
  }
}

export function fetchUser(senderId) {
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

export function fetchExpenses(senderId) {
  return dispatch => {
    let url = `http://localhost:3000/users/${senderId}/expenses`
    
    return fetch(url)
      .then(res => res.json())
      .then(json => {
        dispatch(setExpenses(json)})
      })
      .catch(err => {
        dispatch(hasErrored(err))
      })
  }
}