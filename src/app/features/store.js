import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import productReducer from "./Product/reducers";
import thunk from "redux-thunk";

let rootReducers = combineReducers({
    product: productReducer
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducers, composeEnhancer(applyMiddleware(thunk)));
export default store;