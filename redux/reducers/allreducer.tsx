import { combineReducers } from "redux";
import {changeUserInfo} from './user_information';
import {monthlyBalance} from './user_monthly_reducer';
import {yearlyBalance} from './user_overall_reducer';
import { allTransactions } from "./user_transactions";

export default combineReducers({
    userDetails : changeUserInfo,
    monthlyBalance: monthlyBalance,
    yearlyBalance : yearlyBalance,
    allTransactions: allTransactions
});