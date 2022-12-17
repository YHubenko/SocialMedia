import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../../Redux/postsReducer";
import Posts from "./Posts";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        posts: state.postsPage.posts,
        newPostText: state.postsPage.newPostText
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText: (text) => {
            let action = updateNewPostTextActionCreator(text);
            dispatch(action);
        },
        addPost: () => {
            dispatch(addPostActionCreator());
        }
    }
}

const PostsContainer = connect(mapStateToProps, mapDispatchToProps) (Posts)

export default PostsContainer;