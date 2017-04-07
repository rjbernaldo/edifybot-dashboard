import { connect } from 'react-redux'
import Days from '../components/Days'

const mapStateToProps = state => {
  return {
    days: state.days
  }
}

const mapDispatchToProps = dispatch => {
}

const CurrentDays = connect(mapStateToProps)(Days)

export default CurrentDays