import { SET_DAYS } from '../actions/days'

const initialState = []

export default function (state = initialState, action) {
  switch(action.type) {
    case SET_DAYS:
      return action.days
    default:
      return state
  }
}