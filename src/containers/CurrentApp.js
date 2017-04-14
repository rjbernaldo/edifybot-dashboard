import { connect } from 'react-redux'
import App from '../components/App'
import { fetchData } from '../actions/api'

const mapStateToProps = (state, ownProps) => {
  console.log(state.modal)
  return {
    senderId: ownProps.params.senderId,
    status: state.status,
    showModal: state.modal.visible
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchData: senderId => {
      dispatch(fetchData(senderId))
    }
  }
}

const CurrentApp = connect(mapStateToProps, mapDispatchToProps)(App)

export default CurrentApp