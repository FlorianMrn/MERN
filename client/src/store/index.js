// Import
import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import authMiddleware from './middleware';


// Store
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducer = combineReducers({
    // TODO
});

const enhancers = composeEnhancers(
    applyMiddleware(
        authMiddleware
    ),
);

const store = createStore(
    reducer,
    enhancers,
);

export default store;