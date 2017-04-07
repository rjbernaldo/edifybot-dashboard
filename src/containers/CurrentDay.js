import { connect } from 'react-redux'
import Day from '../components/Day'

const mapStateToProps = (state, ownProps) => {
  return {
    pDate: pDate(ownProps.day.date),
    pAmount: pAmount(state.user.currency_symbol, cTotal(ownProps.day.expenses))
  }
}

const CurrentDay = connect(mapStateToProps)(Day)

export default CurrentDay

function pDate(date) {
  let cDate = new Date()
  let isToday = `${cDate.getMonth()}-${cDate.getDate()}-${cDate.getFullYear()}` === date
  
  let uDate = date.split('-')
  let month = uDate[0]
  let day = uDate[1]
  let year = uDate[2]
  
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']
  
  let currentDate = `${months[month]} ${day}`
  
  return isToday ? 'Today' : currentDate
}

function pAmount(symbol, amount) {
  return symbol || '$' + (amount).toFixed(2)
}

function cTotal(expenses) {
  return expenses.reduce((cur, e) => cur + parseFloat(e.amount), 0)
}