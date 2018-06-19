import { SHOW_AUTH_LOGIN, SHOW_AUTH_SIGNUP } from "../actions/type";

const initialState = {
  show: 'null'
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SHOW_AUTH_LOGIN:
      return {
        show: 'login'
      };
    case SHOW_AUTH_SIGNUP:
      return {
        show: 'signup'
      };
    default:
      return state;
  }
};
