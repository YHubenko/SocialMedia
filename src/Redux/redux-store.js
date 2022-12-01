import postsReducer from "./postsReducer";
import {combineReducers, createStore} from "redux";
import friendsReducer from "./friendsReducer";

let reducers = combineReducers({
    postsPage: postsReducer,
    friendsPage: friendsReducer,
});

let store = createStore(reducers);

export default store;