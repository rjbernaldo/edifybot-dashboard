import React, { Component } from 'react'

const Modal = ({ modal, hideModal, saveData, deleteData }) => {
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
            <input type="text" className="form-control" defaultValue={ modal.item }
              onChange={ e => { modal.item = e.target.value } }></input>
            <br/>
            <div className="input-group">
              <span className="input-group-addon">$</span>
              <input type="text" className="form-control" defaultValue={ modal.amount }
              onChange={ e => { modal.amount = e.target.value } }></input>
            </div>
            <br/>
            <div className="input-group">
              <span className="input-group-addon">#</span>
              <input type="text" className="form-control" defaultValue={ modal.category }
              onChange={ e => { modal.category = e.target.value } }></input>
            </div>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-danger" onClick={ () => { deleteData(modal) } }>Delete</button>
            <button type="button" className="btn btn-primary" onClick={ () => { saveData(modal) } }>Save</button>
          </div>
        </div>
      </div>
    </div>  
  )
}

export default Modal