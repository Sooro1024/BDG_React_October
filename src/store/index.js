import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";
import { networkProvider } from "../network";
import reducers from "./reducers";

const store = createStore(
  reducers,
  applyMiddleware(thunk.withExtraArgument({ networkProvider }), createLogger())
);

export default store;
