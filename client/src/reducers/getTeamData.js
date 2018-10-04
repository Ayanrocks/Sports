import { GET_TEAM_DATA } from "../actions/type";

const initialState = {};
export default (state = initialState, action) => {
    switch (action.type) {
        case GET_TEAM_DATA:
            return {
                ...state,
                teams: action.payload
            };
        default:
            return state;
    }
};
