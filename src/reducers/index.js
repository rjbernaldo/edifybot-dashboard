import { combineReducers } from 'redux'
import status from './status'
import user from './user'
import days from './days'
import summary from './summary'
import modal from './modal'

export default combineReducers({
  status,
  user,
  days,
  summary,
  modal
})