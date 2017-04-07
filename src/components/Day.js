import React, { Component } from 'react'
import CurrentExpense from '../containers/CurrentExpense'

const Day = ({ pDate, pAmount, expenses }) => {
  return (
    <ul className="list-unstyled">
      <li className="media c-pad day-header">
        <div className="media-body">{ pDate }</div>
        <div className="pull-xl-right">{ pAmount } total</div>
      </li>
      { expenses.map((expense, i) => <CurrentExpense key={i} expense={expense} />) }
    </ul>
  )
}

export default Day