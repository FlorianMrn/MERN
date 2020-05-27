// Import npm
import axios from 'axios';

// Import actions
import { GET_ERRORS, USER_LOADING, SET_CURRENT_USER} from './reducers/authReducer';

const authMiddleware = (store) => (next) => (action) => {
  
  switch (action.type) {
    case GET_ERRORS:
     
       default:
          next(action);
  }
};

export default authMiddleware;