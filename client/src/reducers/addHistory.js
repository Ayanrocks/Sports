import { ADD_HISTORY, REMOVE_HISTORY } from "../actions/type";

const initialState = {
  path: [{ url: "/", name: "Dashboard" }]
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_HISTORY:
      return {
        ...state,
        path: [...state.path, action.payload]
      };
    case REMOVE_HISTORY:
      console.log(state.path);
      return {
        ...state,
        path: [...state.path].slice(0, -1)
      };
    default:
      return state;
  }
};
