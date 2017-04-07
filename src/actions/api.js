import { isLoading, hasErrored, isSuccess } from './status'
import { setUser } from './user'
import { setDays } from './days'
import { setSummary } from './summary'

export function fetchData(senderId) {
  return (dispatch, getState) => {
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

function fetchUser(senderId) {
  return dispatch => {
    let url = `http://localhost:3000/users/${senderId}`
    
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
    let url = `http://localhost:3000/users/${senderId}/expenses`
    
    if (senderId)
      return fetch(url)
        .then(res => res.json())
        .then(res => {
          dispatch(setDays(parseExpenses(res)))
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
    let url = `http://localhost:3000/users/${senderId}/summary`
    
    let json = []
    dispatch(setSummary(json))
  }
}

function parseExpenses(json) {
  var dayList = {}
  var days = []
  
  json.forEach((expense) => {
    let fDate = new Date(expense.created_at)
    let month = fDate.getMonth()
    let day = fDate.getDate()
    let year = fDate.getFullYear()
    let formattedDateName = `${month}-${day}-${year}`
    
    if (Array.isArray(dayList[formattedDateName])) {
      dayList[formattedDateName].push(expense)
    } else {
      dayList[formattedDateName] = [expense]
    }
  })
  
  for (var date in dayList) {
    days.push({
      date,
      expenses: dayList[date]
    })
  }
  
  return days
}