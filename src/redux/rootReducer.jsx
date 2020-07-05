import {combineReducers} from "redux";
import auth from "./authReducer";
import loginModal from "./loginModalReducer";

export default combineReducers({
    auth,
    loginModal
})