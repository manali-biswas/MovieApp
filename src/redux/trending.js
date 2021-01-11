import * as ActionTypes from "./ActionTypes";

export const Trending = (state = {
    isLoading: false,
    err: null,
    results: []
    
}, action) => {
    switch (action.type) {
        case ActionTypes.CHOICE_LOADING:
            return { ...state, isLoading: true, err: null, results: [] }
        case ActionTypes.ADD_RESULT:
            return { ...state, isLoading: false, err: null, results: action.payload }
        case ActionTypes.CHOICE_FAILED:
            return {...state, isLoading: false, err: action.payload, results: []}
        default:
            return state;
    }
}