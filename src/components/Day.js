import React, { Component } from 'react'

const Day = ({ pDate, pAmount }) => {
  return (
    <ul className="list-unstyled">
      <li className="media c-pad day-header">
        <div className="media-body">{ pDate }</div>
        <div className="pull-xl-right">{ pAmount } total</div>
      </li>
      
      <li className="media c-pad">
        <div className="media-body fs-xs">
          <h5 className="mt-2 mb-0">burger</h5>
          #food
        </div>
        <div className="pull-xl-right fs-xxl fw-l">$25.00</div>
      </li>
    </ul>
  )
}

export default Day