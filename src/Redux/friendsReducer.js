let initialState = {
    friends: [
        {id: 0, username: "User1", path: `/SocialMedia/${this.username}`},
        {id: 1, username: "User2", path: `/SocialMedia/${this.username}`},
        {id: 2, username: "User3", path: `/SocialMedia/${this.username}`},
        {id: 3, username: "User4", path: `/SocialMedia/${this.username}`},
        {id: 4, username: "User5", path: `/SocialMedia/${this.username}`},
        {id: 5, username: "User6", path: `/SocialMedia/${this.username}`},
    ]
};

const friendsReducer = (state = initialState, action) => {
    return state;
}

export default friendsReducer;