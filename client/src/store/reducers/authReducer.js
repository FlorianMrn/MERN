// Import
const isEmpty = require("is-empty");

// Initial State
const initialState = {
  isAuthenticated: false,
  user: {},
  loading: false
};

// Actions types
export const GET_ERRORS = "GET_ERRORS";
export const USER_LOADING = "USER_LOADING";
export const SET_CURRENT_USER = "SET_CURRENT_USER";

// Reducer
const authReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case SET_CURRENT_USER:
            return {
              ...state,
              isAuthenticated: !isEmpty(action.payload),
              user: action.payload
            };
        case USER_LOADING:
            return {
              ...state,
              loading: true
            };
        case GET_ERRORS:
            return action.payload;
        default:
        return state;
    }
};

// Action creators
export const getErrors = err => ({
    type: GET_ERRORS,
    payload: err.response.data
});
  


  