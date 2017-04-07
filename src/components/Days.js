import React, { Component } from 'react'
import CurrentDay from '../containers/CurrentDay'

const Days = ({ days }) => {
  return (
    <div>
      { days.map((day, i) => <CurrentDay key={i} day={day} />) }
    </div>  
  )
}

export default Days