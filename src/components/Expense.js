import React, { Component } from 'react'

const Expense = ({ item, category, pAmount }) => {
  return (
    <li className="media c-pad">
      <div className="media-body fs-xs">
        <h5 className="mt-2 mb-0">{ item }</h5>
        { category }
      </div>
      <div className="pull-xl-right fs-xxl fw-l">{ pAmount }</div>
    </li>
  )
}

export default Expense