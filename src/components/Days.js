import React, { Component } from 'react';
import CurrentDay from '../containers/CurrentDay';

const Days = ({ days }) => {
  if (days.length === 0) {
    return (
      <div className="text-center">No expenses recorded</div>
    );
  } else {
    return (
      <div>
        { days.map((day, i) => <CurrentDay key={i} day={day} />) }
      </div>  
    );
  }
};

export default Days;
