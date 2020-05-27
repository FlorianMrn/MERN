// Import
import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import thunk from "redux-thunk";
import reducers from './reducers/index';

// Store
const composeEnhancers = compose;

const initialeState = {};

const middleware = [thunk];

const reducer = reducers;

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