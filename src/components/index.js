import React from 'react'
import ReactDOM from 'react-dom'
import Root from './Root'

import reducers from '../reducers'
import thunkMiddleware from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'

const store = createStore(reducers, applyMiddleware(thunkMiddleware))

ReactDOM.render(
  <Root store={ store }/>,
  document.getElementById('app')
)