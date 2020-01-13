import { combineReducers, applyMiddleware, createStore } from "redux"
import { createLogger } from "redux-logger"

import reducer from "./utilities/Student"
const rootReducer = combineReducers({ reducer })

const logger = createLogger({ collapsed: true })
const store = createStore(rootReducer)

export default store
