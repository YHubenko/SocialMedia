let initialState = {
    friends: [
        {id: 0, username: "User1", path: '/SocialMedia/User1'},
        {id: 1, username: "User2", path: '/SocialMedia/User2'},
        {id: 2, username: "User3", path: '/SocialMedia/User3'},
        {id: 3, username: "User4", path: '/SocialMedia/User4'},
        {id: 4, username: "User5", path: '/SocialMedia/User5'},
        {id: 5, username: "User6", path: '/SocialMedia/User6'},
    ]
};

const friendsReducer = (state = initialState, action) => {
    return state;
}

export default friendsReducer;