import { createStore, combineReducers, applyMiddleware } from "redux";
import { Trending } from "./trending";
import { Search } from "./search";
import { Genres } from "./genres";
import { Discover } from "./discover";
import { Detail } from "./object";
import thunk from "redux-thunk";

export const configureStore = () => {
    const store = createStore(
        combineReducers({
            trending: Trending,
            search: Search,
            genres: Genres,
            discover: Discover,
            object: Detail
        }),
        applyMiddleware(thunk)
    );

    return store;
}