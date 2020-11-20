import {combineReducers} from 'redux';
import commonReducer from './commonReducer';
import authReducer from './authReducer';
import userReducer from './userReducer';

export default combineReducers({
  common: commonReducer,
  auth: authReducer,
  user: userReducer,
});