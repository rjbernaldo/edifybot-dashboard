import { connect } from 'react-redux'
import Days from '../components/Days'

const mapStateToProps = state => {
  return state
}

const mapDispatchToProps = dispatch => {
}

const CurrentDays = connect(mapStateToProps)(Days)

export default CurrentDays