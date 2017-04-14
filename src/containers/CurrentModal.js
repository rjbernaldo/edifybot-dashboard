import { connect } from 'react-redux'
import Modal from '../components/Modal'
import { hideModal } from '../actions/modal'
// import { saveData } from '../actions/api'

const mapStateToProps = state => {
  return {
    item: state.modal.item,
    category: state.modal.category,
    amount: state.modal.amount
  }
}

const mapDispatchToProps = dispatch => {
  return {
    hideModal: () => {
      dispatch(hideModal())
    }
    // saveModal: (data) => {
    //   dispatch(saveData(data))
    // }
  }
}

const CurrentModal = connect(mapStateToProps, mapDispatchToProps)(Modal)

export default CurrentModal