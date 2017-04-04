import { combineReducers } from 'redux'
import user from './user'
import days from './days'
import summary from './summary'

export default combineReducers({
  user,
  days,
  summary
})