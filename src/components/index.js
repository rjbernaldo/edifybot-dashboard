import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import thunk from 'redux-thunk';

import reducers from '../reducers';
import CurrentApp from '../containers/CurrentApp';

const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/(:accessKey)" component={CurrentApp} />
    </Router>
  </Provider>,
  document.getElementById('app'),
);
