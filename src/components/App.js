import React, { Component } from 'react'
import CurrentSummary from '../containers/CurrentSummary'
import CurrentDays from '../containers/CurrentDays'

const App = ({ fetchData, senderId, status }) => {
  if (status.fetchData) fetchData(senderId)
  
  if (status.error || status.loading) {
    return (
      <div className="text-center">{ status.message }</div>
    )
  } else {
    return (
      <div>
        <CurrentSummary />
        <CurrentDays />
      </div>
    )
  }
}

export default App