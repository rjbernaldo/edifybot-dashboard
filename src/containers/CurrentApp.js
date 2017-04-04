import { connect } from 'react-redux'
import App from '../components/App'

const mapStateToProps = (state, ownProps) => {
  return {
    senderId: ownProps.params.senderId
  }
}

const mapDispatchToProps = (dispatch) => {
}

const CurrentApp = connect(mapStateToProps)(App)

export default CurrentApp