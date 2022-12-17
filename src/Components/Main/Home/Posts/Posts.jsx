import React from "react";
import style from "./Posts.module.css";
import Post from "./Post/Post";
import plus from "../../../../assets/main/posts/plus.png";

const Posts = (props) => {
    console.log(props)
    let postElement = props.posts.map(post => <Post username={post.username} message={post.message} likes={post.likesAmount} path={post.path}/>)
    let newPostElement = React.createRef();
    let addPost = () => {
        props.addPost();
    }
    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }
    return (
        <div className={style.wrapper}>
            <div className={style.addNewPostBlock}>
                <img src={plus} alt="" className={style.plus} onClick={addPost}/>
                <textarea onChange={onPostChange} ref={newPostElement} className={style.input} placeholder={"New post"}></textarea>
            </div>
            {postElement}
        </div>
    )
}

export default Posts;