import { connect } from 'react-redux';
import Expense from '../components/Expense';
import { showModal, hideModal } from '../actions/modal';

const mapStateToProps = (state, ownProps) => ({
  expense: ownProps.expense,
  pCategory: ownProps.expense.category ? '#' + ownProps.expense.category : undefined,
  pAmount: pAmount(state.user.currency_symbol, ownProps.expense.amount),
});

const mapDispatchToProps = dispatch => ({
  showModal: (expense) => {
    dispatch(showModal(expense));
  },
});

const CurrentExpense = connect(mapStateToProps, mapDispatchToProps)(Expense);

export default CurrentExpense;

function pAmount(symbol, amount) {
  return (symbol || '$') + (parseFloat(amount)).toFixed(2);
}
