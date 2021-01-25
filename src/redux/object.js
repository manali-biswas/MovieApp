import * as ActionTypes from "./ActionTypes";

export const Object = (state = {
    err: null,
    loading: false,
    result: null
}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_GET:
            return { ...state, result: action.payload, loading: false, err: null };
        case ActionTypes.GET_LOADING:
            return { ...state, result: null, loading: true, err: null };
        case ActionTypes.GET_FAILED:
            return { ...state, result: null, loading: false, err: action.payload };    
        default:
            return state;
    }
}