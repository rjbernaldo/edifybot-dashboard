import { connect } from 'react-redux';
import Day from '../components/Day';

const mapStateToProps = (state, ownProps) => ({
  pDate: pDate(ownProps.day.date),
  pAmount: pAmount(state.user.currency_symbol, cTotal(ownProps.day.expenses)),
  expenses: ownProps.day.expenses,
});

const CurrentDay = connect(mapStateToProps)(Day);

export default CurrentDay;

function pDate(date) {
  const cDate = new Date();
  const isToday = `${cDate.getMonth()}-${cDate.getDate()}-${cDate.getFullYear()}` === date;

  const uDate = date.split('-');
  const month = uDate[0];
  const day = uDate[1];
  const year = uDate[2];

  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];

  const currentDate = `${months[month]} ${day}`;

  return isToday ? 'Today' : currentDate;
}

function pAmount(symbol, amount) {
  return (symbol || '$') + (parseFloat(amount)).toFixed(2);
}

function cTotal(expenses) {
  return expenses.reduce((cur, e) => cur + parseFloat(e.amount), 0);
}
