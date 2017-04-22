import { connect } from 'react-redux'
import App from '../components/App'
import { fetchData } from '../actions/api'

const mapStateToProps = (state, ownProps) => {
  return {
    accessKey: ownProps.params.accessKey,
    status: state.status,
    showModal: state.modal.visible
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchData: accessKey => {
      dispatch(fetchData(accessKey))
    }
  }
}

const CurrentApp = connect(mapStateToProps, mapDispatchToProps)(App)

export default CurrentApp