import { GET_PROFILE_DATA } from "../actions/type";

const initialState = {};
export default (state = initialState, action) => {
    switch (action.type) {
        case GET_PROFILE_DATA:
            return {
                ...state,
                profile: action.payload
            };
        default:
            return state;
    }
};
