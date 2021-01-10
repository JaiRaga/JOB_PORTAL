import { combineReducers } from "redux";
import candidate from "./reducers/candidate"

const rootReducer = combineReducers({
  candidate
});

export default rootReducer;
