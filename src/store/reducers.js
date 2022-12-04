import { combineReducers } from "redux";
import todoReducer from "./todo/reducer";
import userReducer from "./user/reducer";

const reducers = combineReducers({
  todoReducer,
  userReducer,
});

export default reducers;
