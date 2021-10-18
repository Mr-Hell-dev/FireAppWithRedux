import { combineReducers } from 'redux';
import LoginWithEmailPasswordReducer from './LoginByEmailPassword';
import LogoutReducer from './LogoutReducer';
const rootReducer = combineReducers({
    LoginWithEmailPasswordReducer,
    LogoutReducer,
});
export default rootReducer;
