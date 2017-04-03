import React, { Component } from 'react'
import CurrentGraph from '../containers/CurrentGraph'
import CurrentExpenses from '../containers/CurrentExpenses'

const App = (state, dispatch) => {
  return (
    <div>
      <CurrentGraph />
      <CurrentExpenses />
    </div>
  )
}

export default App


  <div>
    <ul className="list-unstyled">
      <li className="media c-pad day-header">
        <div className="media-body">Today</div>
        <div className="pull-xl-right">$75.00 total</div>
      </li>
      
      <li className="media c-pad">
        <div className="media-body fs-xs">
          <h5 className="mt-2 mb-0">burger</h5>
          #food
        </div>
        <div className="pull-xl-right fs-xxl fw-l">$25.00</div>
      </li>
    </ul>
  </div>,