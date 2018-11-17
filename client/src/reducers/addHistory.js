import { ADD_HISTORY, REMOVE_HISTORY } from "../actions/type";

const initialState = {
  path: ["/"]
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
        path: [...state.path].splice(state.path.length - 1, 1)

      };
    default:
      return state;
  }
};
