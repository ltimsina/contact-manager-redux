import { combineReducers } from "redux";
import contactReducer from "./contactReducer";
//index.js just holds the code to combine reducers

export default combineReducers({
  contact: contactReducer
});
