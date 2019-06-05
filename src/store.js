// import { createStore, applyMiddleware, combineReducers } from "redux";

// import promise from "redux-promise-middleware";
// import reducer from "./ducks/reducer";

// const rootReducer = combineReducers({ reducer });

// const store = createStore(rootReducer, applyMiddleware(promise));

// export default store;

import { createStore, combineReducers, applyMiddleware } from "redux";

import promise from "redux-promise-middleware";
import reducer from "./ducks/reducer";

const rootReducer = combineReducers({ reducer });

const store = createStore(rootReducer, applyMiddleware(promise));

export default store;
