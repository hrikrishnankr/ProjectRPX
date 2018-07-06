import { combineReducers } from 'redux';
import loginReducer from './scenes/Login/data/reducer';

export default combineReducers({
    loginReducer: loginReducer
})