import React, { Component } from 'react'
import CurrentSummary from '../containers/CurrentSummary'
import CurrentDays from '../containers/CurrentDays'

const App = ({ senderId }) => {
  return (
    <div>
      <CurrentSummary />
      <CurrentDays />
    </div>
  )
}

export default App