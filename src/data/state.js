import homeReducer from "./homeReducer";

let store = {
    _state: {
        homePage: {
            posts: [
                {id: 0, username: "User1", message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur excepturi iste nesciunt sed, sint tempora?", likesAmount: 15},
                {id: 1, username: "User2", message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur excepturi iste nesciunt sed, sint tempora?", likesAmount: 23},
                {id: 2, username: "User3", message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur excepturi iste nesciunt sed, sint tempora?", likesAmount: 4},
                {id: 3, username: "User4", message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur excepturi iste nesciunt sed, sint tempora?", likesAmount: 5},
                {id: 4, username: "User5", message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur excepturi iste nesciunt sed, sint tempora?", likesAmount: 32},
                {id: 5, username: "User6", message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur excepturi iste nesciunt sed, sint tempora?", likesAmount: 64},
            ],
            newPostText: 'new post text',
        },
        friendsPage: {
            friends: [
                {id: 0, username: "User1", path: "/SocialMedia/User1"},
                {id: 1, username: "User2", path: "/SocialMedia/User2"},
                {id: 2, username: "User3", path: "/SocialMedia/User3"},
                {id: 3, username: "User4", path: "/SocialMedia/User4"},
                {id: 4, username: "User5", path: "/SocialMedia/User5"},
                {id: 5, username: "User6", path: "/SocialMedia/User6"},
            ]
        }
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