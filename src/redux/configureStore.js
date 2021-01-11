import { createStore, combineReducers, applyMiddleware } from "redux";
import { Trending } from "./trending";
import { Search } from "./search";
import thunk from "redux-thunk";

export const configureStore = () => {
    const store = createStore(
        combineReducers({
            trending: Trending,
            search: Search
        }),
        applyMiddleware(thunk)
    );

    return store;
}