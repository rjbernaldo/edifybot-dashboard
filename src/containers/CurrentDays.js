import { connect } from 'react-redux'
import Days from '../components/Days'

const mapStateToProps = state => {
  return {
    days: parseExpenses(state.expenses)
  }
}

const CurrentDays = connect(mapStateToProps)(Days)

export default CurrentDays

function parseExpenses(json) {
  var dayList = {}
  var days = []
  
  json.forEach((expense) => {
    let fDate = new Date(expense.created_at)
    let month = fDate.getMonth()
    let day = fDate.getDate()
    let year = fDate.getFullYear()
    let formattedDateName = `${month}-${day}-${year}`
    
    if (Array.isArray(dayList[formattedDateName])) {
      dayList[formattedDateName].push(expense)
    } else {
      dayList[formattedDateName] = [expense]
    }
  })
  
  for (var date in dayList) {
    days.push({
      date,
      expenses: dayList[date]
    })
  }
  
  return days
}