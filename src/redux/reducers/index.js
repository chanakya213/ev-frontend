import { combineReducers } from "redux";
import UserReducer from "./user.reducer";
import ThemeReducer from "./theme.reducer";

export default combineReducers({
  user: UserReducer,
  theme: ThemeReducer,
});
