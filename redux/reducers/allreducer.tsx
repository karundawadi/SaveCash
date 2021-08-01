import { combineReducers } from "redux";
import {changeUserInfo} from './user_information';
import { changeUserBalance } from "./users_balances";

export default combineReducers({
    userDetails : changeUserInfo,
    userBalances : changeUserBalance
});