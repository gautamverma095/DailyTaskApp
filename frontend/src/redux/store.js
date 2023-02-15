import { applyMiddleware, legacy_createStore, combineReducers, compose } from "redux";
import thunk from "redux-thunk"
import { loginReducer } from "./login/reducer";
import { taskReducer } from "./task/reducer";

// const ReactReduxDevTools =
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
  
const rootReducer = combineReducers({
    login: loginReducer,
    task:taskReducer
})
    
export const store = legacy_createStore(
    rootReducer,
    compose(applyMiddleware(thunk))
)

