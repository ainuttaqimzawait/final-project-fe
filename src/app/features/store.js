import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import productReducer from "./Product/reducers";
import thunk from "redux-thunk";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let rootReducers = combineReducers({
    products: productReducer
});

const store = createStore(rootReducers, composeEnhancer(applyMiddleware(thunk)));
export default store;