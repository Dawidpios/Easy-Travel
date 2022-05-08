import { combineReducers } from "redux";
import { userLogReducer } from "./logReducer";

export const reducers = combineReducers({
    LogInOrOut : userLogReducer
}
)