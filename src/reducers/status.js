import { LOADING, ERROR, SUCCESS } from '../actions/status'

const initialState = {
  fetchData: true
}

export default function (state = initialState, action) {
  switch(action.type) {
    case LOADING:
      return { loading: true, message: 'Loading' }
    case ERROR:
      return { loading: false, error: true, message: action.err }
    case SUCCESS:
      return { loading: false }
    default:
      return state
  }
}