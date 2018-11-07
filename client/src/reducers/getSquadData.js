import { GET_SQUAD_DATA } from "../actions/type";

const initialState = {};
export default (state = initialState, action) => {
    switch (action.type) {
        case GET_SQUAD_DATA:
            return {
                ...state,
                squad: action.payload
            };
        default:
            return state;
    }
};
