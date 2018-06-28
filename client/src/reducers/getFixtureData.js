import { GET_FIXTURE_DATA } from "../actions/type";

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_FIXTURE_DATA:
      return {
        ...state,
        fixture: action.payload
      };

    default:
      return state;
  }
};
