import { LOADING, ERROR } from '../actions/status'

export default function (state = 'Fetching data', action) {
  switch(action.type) {
    case LOADING:
      return 'Fetching data'
    case ERROR:
      console.log('hasErrored:reducer', action.err)
      return action.err
    default:
      return state
  }
}