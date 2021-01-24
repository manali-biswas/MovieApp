import { createStore, combineReducers, applyMiddleware } from "redux";
import { Trending } from "./trending";
import { Search } from "./search";
import { Genres } from "./genres";
import { Discover } from "./discover";
import thunk from "redux-thunk";
import { createForms } from "react-redux-form";
import { Filter } from "./forms";

export const configureStore = () => {
    const store = createStore(
        combineReducers({
            trending: Trending,
            search: Search,
            genres: Genres,
            discover: Discover,
            ...createForms({
                filter: Filter
            })
        }),
        applyMiddleware(thunk)
    );

    return store;
}