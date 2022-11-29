import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../../data/homeReducer";
import style from "./Posts.module.css";
import Post from "./Post/Post";
import plus from "../../../../assets/main/posts/plus.png";

const Posts = (props) => {
    let postElement = props.posts.map(post => <Post username={post.username} message={post.message} likes={post.likesAmount}/>)
    let newPostElement = React.createRef();
    let addPost = () => {
        props.dispatch(addPostActionCreator());
    }
    let onPostChange = () => {
        let text = newPostElement.current.value;
        let action = updateNewPostTextActionCreator(text);
        props.dispatch(action);
    }
    return (
        <div className={style.wrapper}>
            <div className={style.addNewPostBlock}>
                <img src={plus} alt="" className={style.plus} onClick={addPost}/>
                <textarea onChange={onPostChange} value={props.newPostText} ref={newPostElement} className={style.input} placeholder={"Enter text"}></textarea>
            </div>
            {postElement}
        </div>
    )
}

export default Posts;