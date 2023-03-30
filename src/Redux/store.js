import {
    legacy_createStore,
    applyMiddleware,
    combineReducers,
    compose,
  } from "redux";
  
  
  import thunk from "redux-thunk";
  import {carReducer} from "../Redux/reducer.js"
  import {authReducer} from "./AuthReducer/reducer.js"
  
  const rootReducer = combineReducers({
    carReducer,
    authReducer
  });
  
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  export const store = legacy_createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
  );