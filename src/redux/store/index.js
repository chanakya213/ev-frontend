import { legacy_createStore as createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import rootReducer from "../reducers";

const middlewares = [];

const store = createStore(
  rootReducer,
  undefined,
  composeWithDevTools(applyMiddleware(...middlewares))
);

export { store };
