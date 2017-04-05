import { connect } from 'react-redux'
import Summary from '../components/Summary'

const mapStateToProps = state => {
  return state
}

const mapDispatchToProps = dispatch => {
}

const CurrentSummary = connect(mapStateToProps)(Summary)

export default CurrentSummary