import { connect } from 'react-redux'
import Modal from '../components/Modal'
import { hideModal } from '../actions/modal'
import { saveData, deleteData } from '../actions/api'

const mapStateToProps = state => {
  return {
    modal: state.modal
  }
}

const mapDispatchToProps = dispatch => {
  return {
    hideModal: () => {
      dispatch(hideModal())
    },
    saveData: (modal) => {
      dispatch(saveData(modal)).then(dispatch(hideModal()))
    },
    deleteData: (modal) => {
      dispatch(deleteData(modal)).then(dispatch(hideModal()))
    }
  }
}

const CurrentModal = connect(mapStateToProps, mapDispatchToProps)(Modal)

export default CurrentModal