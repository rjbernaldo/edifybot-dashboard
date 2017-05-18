import React, { Component } from 'react';

const Expense = ({ expense, pCategory, pAmount, showModal }) => {
  return (
    <li className="media c-pad" onClick={() => { showModal(expense); }}>
      <div className="media-body fs-xs">
        <h5 className="mt-2 mb-0">{ expense.item }</h5>
        { pCategory }
      </div>
      <div className="pull-xl-right fs-xxl fw-l">{ pAmount }</div>
    </li>
  );
};

export default Expense;
