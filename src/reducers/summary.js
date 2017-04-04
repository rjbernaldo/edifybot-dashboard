import { SET_SUMMARY } from '../actions/summary'

const initialState = {}

export default function (state = initialState, action) {
  switch(action.type) {
    case SET_SUMMARY:
      return Object.assign({}, state, action.summary)
    default:
      return state
  }
}