import { combineReducers } from "redux";
import rootReducer from "./rootReducer";
import signupReducer from "./signupReducer";

const signupReducers: any = combineReducers({
  signup: signupReducer,
  root: rootReducer,
});

export default signupReducers;
