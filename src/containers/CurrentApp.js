import { connect } from 'react-redux'
import App from '../components/App'
import { fetchData } from '../actions/api'

const mapStateToProps = (state, ownProps) => {
  return {
    senderId: ownProps.params.senderId
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