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

export const getMovieSearch = (search) => (dispatch) => {
    dispatch(searchLoading(true));
    axios.get(baseUrl + "search/movie", {
        params: {
            api_key: "0075ac9def7d3aecd8c4080563e3bcd2",
            query: search
    }})
        .then(response => { console.log(response.data.results); dispatch(addSearch(response.data.results)) })
        .catch(err => dispatch(searchFailed(err.message)));
}

export const getTVSearch = (search) => (dispatch) => {
    dispatch(searchLoading(true));
    axios.get(baseUrl + "search/tv", {
        params: {
            api_key: "0075ac9def7d3aecd8c4080563e3bcd2",
            query: search
    }})
        .then(response => { console.log(response.data.results); dispatch(addSearch(response.data.results)) })
        .catch(err => dispatch(searchFailed(err.message)));
}

export const getPersonSearch = (search) => (dispatch) => {
    dispatch(searchLoading(true));
    axios.get(baseUrl + "search/person", {
        params: {
            api_key: "0075ac9def7d3aecd8c4080563e3bcd2",
            query: search
    }})
        .then(response => dispatch(addSearch(response.data.results)))
        .catch(err => dispatch(searchFailed(err.message)));
}

export const changeSearchOption = () => ({
    type: ActionTypes.SEARCH_CHANGED
})

export const genresLoading = ()=> ({
    type: ActionTypes.GENRES_LOADING
})

export const genresFailed = (err)=> ({
    type: ActionTypes.GENRES_FAILED,
    payload: err
})

export const addGenres = (result)=> ({
    type: ActionTypes.ADD_GENRES,
    payload: result
})

export const fetchMovieGenres = () => (dispatch) => {
    dispatch(genresLoading(true));

    
    axios.get(baseUrl + "genre/movie/list", {
        params: {
            api_key: "0075ac9def7d3aecd8c4080563e3bcd2"
    }})
        .then(response => dispatch(addGenres(response.data.genres)) )
        .catch(err => dispatch(genresFailed(err.message)));
}

export const fetchTVGenres = () => (dispatch) => {
    dispatch(genresLoading(true));

    
    axios.get(baseUrl + "genre/tv/list", {
        params: {
            api_key: "0075ac9def7d3aecd8c4080563e3bcd2"
    }})
        .then(response => dispatch(addGenres(response.data.genres)) )
        .catch(err => dispatch(genresFailed(err.message)));
}

export const discoverLoading = () => ({
    type: ActionTypes.DISCOVER_LOADING
})

export const discoverFailed = (err) => ({
    type: ActionTypes.DISCOVER_FAILED,
    payload: err
})

export const addDiscover = (results) => ({
    type: ActionTypes.ADD_DISCOVER,
    payload: results
})

export const fetchDiscoverMovies = (with_genres, sort) => (dispatch) => {

    dispatch(discoverLoading(true));

    axios.get(baseUrl + "discover/movie", {
        params: {
            api_key: "0075ac9def7d3aecd8c4080563e3bcd2",
            with_genres: with_genres.join(),
            sort_by: sort
        }
    })
        .then(response => dispatch(addDiscover(response.data.results)))
        .catch(err => dispatch(discoverFailed(err.message)));
}

export const fetchDiscoverTV = (with_genres, sort) => (dispatch) => {

    dispatch(discoverLoading(true));

    axios.get(baseUrl + "discover/tv", {
        params: {
            api_key: "0075ac9def7d3aecd8c4080563e3bcd2",
            with_genres: with_genres.join(),
            sort_by: sort
        }
    })
        .then(response =>  dispatch(addDiscover(response.data.results)) )
        .catch(err => dispatch(discoverFailed(err.message)));
}