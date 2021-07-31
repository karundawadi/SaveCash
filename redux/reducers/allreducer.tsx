import { combineReducers } from "redux";
import {changeUserInfo} from './user_information';

export default combineReducers({userDetails : changeUserInfo});