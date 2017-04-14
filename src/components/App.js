import React, { Component } from 'react'
import CurrentSummary from '../containers/CurrentSummary'
import CurrentDays from '../containers/CurrentDays'
import CurrentModal from '../containers/CurrentModal'

const App = ({ fetchData, senderId, showModal, status }) => {
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
        { showModal ? <CurrentModal /> : <span /> }
      </div>
    )
  }
}

export default App