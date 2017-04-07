import { SET_USER } from '../actions/user'

const initialState = {}

export default function (state = initialState, action) {
  switch(action.type) {
    case SET_USER:
      return Object.assign({}, state, action.user)
    default:
      return state
  }
}