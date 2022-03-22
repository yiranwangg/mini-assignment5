import counterReducer from "./countReducer";
import gridReducer from "./gridReducer";
import { combineReducers } from "redux";

const allreducers = combineReducers({
    counter: counterReducer,

    gridUpdate: gridReducer
})
export default allreducers