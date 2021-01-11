import * as ActionTypes from "./ActionTypes";
import { baseUrl } from "../shared/baseUrl";
import axios from "axios";

export const isLoading = () => ({
    type: ActionTypes.CHOICE_LOADING
});

export const fetchMovies = () => (dispatch) => {
    dispatch(isLoading(true));

    return axios.get(baseUrl + "trending/movies/week", {
        params: {
            api_key: "0075ac9def7d3aecd8c4080563e3bcd2"
            }
        })
        .then(response => dispatch(addResult(response.data.results)))
        .catch(err => dispatch(choiceFailed(err.message)));
}

export const fetchTV = () => (dispatch) => {
    dispatch(isLoading(true));

    return axios.get(baseUrl + "trending/tv/week", {
        params: {
            api_key: "0075ac9def7d3aecd8c4080563e3bcd2"
            }
        })
        .then(response => dispatch(addResult(response.data.results)))
        .catch(err => dispatch(choiceFailed(err.message)));
}

export const fetchPerson = () => (dispatch) => {
    dispatch(isLoading(true));

    return axios.get(baseUrl + "trending/person/week", {
        params: {
            api_key: "0075ac9def7d3aecd8c4080563e3bcd2"
            }
        })
        .then(response => dispatch(addResult(response.data.results)))
        .catch(err => dispatch(choiceFailed(err.message)));
}

export const addResult = (results) => ({
    type: ActionTypes.ADD_RESULT,
    payload: results
})

export const choiceFailed = (err) => ({
    type: ActionTypes.CHOICE_FAILED,
    payload: err
})

export const searchLoading = () => ({
    type: ActionTypes.SEARCH_LOADING
})

export const addSearch = (result) => ({
    type: ActionTypes.ADD_SEARCH,
    payload: result
})

export const searchFailed = (err) => ({
    type: ActionTypes.SEARCH_FAILED,
    payload: err
})

export const getSearch = (search) => (dispatch) => {
    dispatch(searchLoading(true));
    axios.get(baseUrl + "search/movie", {
        params: {
            api_key: "0075ac9def7d3aecd8c4080563e3bcd2",
            query: search
    }})
        .then(response => { console.log(response.data.results); dispatch(addSearch(response.data.results)) })
        .catch(err => dispatch(searchFailed(err.message)));
}