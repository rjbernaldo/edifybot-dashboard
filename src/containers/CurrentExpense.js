import { connect } from 'react-redux'
import Expense from '../components/Expense'

const mapStateToProps = (state, ownProps) => {
  return {
    item: ownProps.expense.item,
    category: ownProps.expense.category ? '#' + ownProps.expense.category : undefined,
    pAmount: pAmount(state.user.currency_symbol, ownProps.expense.amount)
  }
}

const CurrentExpense = connect(mapStateToProps)(Expense)

export default CurrentExpense

function pAmount(symbol, amount) {
  return (symbol || '$') + (parseFloat(amount)).toFixed(2)
}