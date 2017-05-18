import { combineReducers } from 'redux';
import status from './status';
import user from './user';
import expenses from './expenses';
import summary from './summary';
import modal from './modal';

export default combineReducers({
  status,
  user,
  expenses,
  summary,
  modal,
});
