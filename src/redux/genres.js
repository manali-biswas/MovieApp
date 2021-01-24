import * as ActionTypes from "./ActionTypes";

export const Genres = (state = {
    results: [],
    loading: false,
    err: null
}, action) => {
    switch (action.type) {
        case ActionTypes.GENRES_LOADING:
            return {...state, results:[],loading: true, err: null}
        case ActionTypes.GENRES_FAILED:
            return { ...state, results: [], loading: false, err: action.payload }
        case ActionTypes.ADD_GENRES:
            return{...state,results:action.payload,loading:false,err:null}
        default:
            return state;
    }
}