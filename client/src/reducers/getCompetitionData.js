import {GET_COMPETITION_DATA} from '../actions/type'

const initialState = {};

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_COMPETITION_DATA:
            return {
                ...state,
                current: action.payload
            };
        default:
            return state;
    }
};
