import homeReducer from "./homeReducer";

let store = {
    _state: {
        homePage: {
            posts: [
                {id: 0, username: "User1", message: "first post", likesAmount: 15},
                {id: 1, username: "User2", message: "second post", likesAmount: 23},
                {id: 2, username: "User3", message: "third post", likesAmount: 4},
                {id: 3, username: "User4", message: "fourth post", likesAmount: 5},
                {id: 4, username: "User5", message: "fifth post", likesAmount: 32},
                {id: 5, username: "User6", message: "sixth post", likesAmount: 64},
            ],
            newPostText: 'new post text',
        },
    },
    _callSubscriber() {
        console.log('state changed');
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        this._state.homePage = homeReducer(this._state.homePage, action);
        this._callSubscriber(this._state);
    }
}

window.state = store;
export default store;