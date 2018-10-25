import { GET_ONE_TEAM_DATA } from "../actions/type";

const initialState = {};
export default (state = initialState, action) => {
    switch (action.type) {
        case GET_ONE_TEAM_DATA:
            return {
                ...state,
                teamDetail: action.payload
            };
        default:
            return state;
    }
};
