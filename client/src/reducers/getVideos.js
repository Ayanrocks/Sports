import { GET_VIDEO_DATA } from "../actions/type";

const initialState = {};
export default (state = initialState, action) => {
    switch (action.type) {
        case GET_VIDEO_DATA:
            return {
                ...state,
                videos: action.payload
            };
        default:
            return state;
    }
};
