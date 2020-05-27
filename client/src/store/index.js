// Import
import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import thunk from "redux-thunk";


// Store
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const initialeState = {};

const middleware = [thunk];

const reducer = combineReducers({
    // TODO
});

const enhancers = composeEnhancers(
    applyMiddleware(
        ...middleware
    ),
);

const store = createStore(
    reducer,
    enhancers,
);

export default store;