const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState =  {
    posts: [
        {id: 0, username: "User1", message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur excepturi iste nesciunt sed, sint tempora?", likeCount: '15', path: '/SocialMedia/User1'},
        {id: 1, username: "User2", message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur excepturi iste nesciunt sed, sint tempora?", likeCount: '23', path: '/SocialMedia/User2'},
        {id: 2, username: "User3", message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur excepturi iste nesciunt sed, sint tempora?", likeCount: '4', path: '/SocialMedia/User3'},
        {id: 3, username: "User4", message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur excepturi iste nesciunt sed, sint tempora?", likeCount: '5', path: '/SocialMedia/User4'},
        {id: 4, username: "User5", message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur excepturi iste nesciunt sed, sint tempora?", likeCount: '32', path: '/SocialMedia/User5'},
        {id: 5, username: "User6", message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur excepturi iste nesciunt sed, sint tempora?", likeCount: '64', path: '/SocialMedia/User6'}
    ],
    newPostText: 'new post text'
}

const postsReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: state.posts.length,
                message: state.newPostText,
                username: 'Me',
                likeCount: '0',
                path: '/SocialMedia/Me'
            };
            state.posts.push(newPost);
            state.newPostText = '';
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }
}
export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
}
export const updateNewPostTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    }
}

export default postsReducer;