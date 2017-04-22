import { LOADING, ERROR, SUCCESS } from '../actions/status'

const initialState = {
  fetchData: true
}

export default function (state = initialState, action) {
  switch(action.type) {
    case LOADING:
      return Object.assign({}, state, { fetchData: false, loading: true, message: 'Loading' })
    case ERROR:
      return Object.assign({}, state, { fetchData: false, loading: false, error: true, message: action.err })
    case SUCCESS:
      return Object.assign({}, state, { fetchData: false, loading: false })
    default:
      return state
  }
}