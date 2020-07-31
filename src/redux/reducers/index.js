import { combineReducers } from 'redux';

import authReducer from './authReducer';
import mainReducer from './mainReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  main: mainReducer,
});

export default rootReducer;
