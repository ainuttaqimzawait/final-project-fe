import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import productReducer from "./Product/reducers";
import thunk from "redux-thunk";
import detailReducer from "./DetailProduct/reducer";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let rootReducers = combineReducers({
    products: productReducer,
    detailItem: detailReducer
});

const store = createStore(rootReducers, composeEnhancer(applyMiddleware(thunk)));
export default store;