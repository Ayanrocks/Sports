import { GET_LEAGUE_DATA } from "../actions/type";

const initialState = {};
export default (state = initialState, action) => {
  switch (action.type) {
    case GET_LEAGUE_DATA:
      return {
        ...state,
        league: action.payload
      };
    default:
      return state;
  }
};
