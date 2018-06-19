import { combineReducers } from "redux";
import visibilityReducer from "./visibilityReducer";

export default () => combineReducers({
  visibility: visibilityReducer
});
