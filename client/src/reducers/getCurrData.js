import { GET_CURR_DATA } from "../actions/type";

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_CURR_DATA:
      return {
        ...state,
        current: action.payload
      };
    default:
      return state;
  }
};
