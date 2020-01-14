import { combineReducers, applyMiddleware, createStore } from "redux";
import { createLogger } from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";

import studentReducer from "./utilities/Student";
import campusesReducer from "./utilities/Campuses";

const rootReducer = combineReducers({ studentReducer, campusesReducer });

const logger = createLogger({ collapsed: true });
const middleware = composeWithDevTools(applyMiddleware(logger));
const store = createStore(rootReducer, middleware);

export default store;
