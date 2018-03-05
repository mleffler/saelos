import { combineReducers } from 'redux';
import authReducer from '../modules/auth/store/reducer';
import contactReducer from '../modules/contacts/store/reducer';
import userReducer from '../modules/user/store/reducer';
import accountReducer from '../modules/accounts/store/reducer';
import opportunityReducer from '../modules/opportunities/store/reducer';
import reportReducer from '../modules/reports/store/reducer';
import workflowReducer from '../modules/workflows/store/reducer';

export default combineReducers({
  auth: authReducer,
  contactState: contactReducer,
  user: userReducer,
  accountState: accountReducer,
  opportunityState: opportunityReducer,
  reportState: reportReducer,
  workflowState: workflowReducer
});