import * as ActionTypes from "./ActionTypes";

export const Discover = (state = {
    loading: false,
    err: null,
    results:[]
}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_DISCOVER:
            return { ...state, results: action.payload, err: null, loading: false };
        case ActionTypes.DISCOVER_LOADING:
            return { ...state, results: [], err: null, loading: true };
        case ActionTypes.DISCOVER_FAILED:
            return { ...state, results: [], err: action.payload, loading: false };    
        default:
            return state;
    }
}