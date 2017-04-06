import { combineReducers } from 'redux'
import status from './status'
import user from './user'
import days from './days'
import summary from './summary'

export default combineReducers({
  status,
  user,
  days,
  summary
})