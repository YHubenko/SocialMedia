import React from "react";
import avatar from "../../../../../assets/main/posts/avatar.png";
import image from "../../../../../assets/main/posts/image.jpg";
import style from "./Post.module.css";
import {NavLink} from "react-router-dom";

const Post = (props) => {
    return (
        <div className={style.wrapper}>
            <NavLink to={props.path}>
                <div className={style.author}>
                    <img src={avatar} alt="" className={style.avatar}/>
                    <p className={style.username}>{props.username}</p>
                </div>
            </NavLink>
            <img src={image} alt="" className={style.image}/>
            <p>{props.message}</p>
            <button>Likes: {props.likes}</button>
        </div>
    )
}

export default Post;