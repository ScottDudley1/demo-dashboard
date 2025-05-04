import { combineReducers } from 'redux';
import accountReducer from './accountReducer';
import customizationReducer from './customizationReducer';
import snackbarReducer from './snackbarReducer';

const rootReducer = combineReducers({
  account: accountReducer,
  customization: customizationReducer,
  snackbar: snackbarReducer
});

export default rootReducer;

