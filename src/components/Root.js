import React from 'react'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory } from 'react-router'
import InitializedApp from '../containers/InitializedApp'

const Root = () => {
  return (
    <Provider store={ store }>
      <Router history={ browserHistory }>
        <Route path="/(:senderId)" component={ InitializedApp } />
      </Router>
    </Provider>
  )
}