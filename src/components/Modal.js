import React, { Component } from 'react'

const Modal = ({ item, amount, category, hideModal }) => {
  return (
    <div className="modal show always-show">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Edit</h5>
            <button type="button" className="close" onClick={ hideModal }>
              <span>&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <input type="text" className="form-control" defaultValue={ item }></input>
            <br/>
            <div className="input-group">
              <span className="input-group-addon">$</span>
              <input type="text" className="form-control" defaultValue={ amount }></input>
            </div>
            <br/>
            <div className="input-group">
              <span className="input-group-addon">#</span>
              <input type="text" className="form-control" defaultValue={ category }></input>
            </div>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={ hideModal }>Close</button>
            <button type="button" className="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>  
  )
}

export default Modal