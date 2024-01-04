import counterReducer from "./counter";
import loggedReducero from "./isLogged";
import { combineReducers } from "redux";

const allReducers = combineReducers({
    counter: counterReducer,
    isLogged: loggedReducero
})

export default allReducers