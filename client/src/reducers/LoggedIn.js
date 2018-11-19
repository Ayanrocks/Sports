import { IS_LOGGED_IN } from "../actions/type";

const initialState = {};
export default (state = initialState, action) => {
  switch (action.type) {
    case IS_LOGGED_IN:
      return {
        ...state,
        isLoggedIn: action.payload
      };
    default:
      return state;
  }
};
