import * as ActionTypes from "./ActionTypes";

export const Search = (state = {
    results: [],
    err: null,
    isLoading: false
}, action) => {
    switch (action.type) {
        case ActionTypes.SEARCH_LOADING:
            return { ...state, results: [], err: null, isLoading: true };
        case ActionTypes.ADD_SEARCH:
            return { ...state, results: action.payload, err: null, isLoading: false };
        case ActionTypes.SEARCH_FAILED:
            return { ...state, results: [], err: action.payload, isLoading: false };
        default:
            return state;
    }
}