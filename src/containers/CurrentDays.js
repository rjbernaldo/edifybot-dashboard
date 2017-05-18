import { connect } from 'react-redux';
import Days from '../components/Days';

const mapStateToProps = state => ({
  days: parseExpenses(state.expenses),
});

const CurrentDays = connect(mapStateToProps)(Days);

export default CurrentDays;

function parseExpenses(json) {
  const dayList = {};
  const days = [];

  json.forEach((expense) => {
    const fDate = new Date(expense.created_at);
    const month = fDate.getMonth();
    const day = fDate.getDate();
    const year = fDate.getFullYear();
    const formattedDateName = `${month}-${day}-${year}`;

    if (Array.isArray(dayList[formattedDateName])) {
      dayList[formattedDateName].push(expense);
    } else {
      dayList[formattedDateName] = [expense];
    }
  });

  for (const date in dayList) {
    days.push({
      date,
      expenses: dayList[date],
    });
  }

  return days;
}
