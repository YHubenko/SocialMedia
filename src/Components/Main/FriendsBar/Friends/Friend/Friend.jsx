import React from "react";
import style from "./Friend.module.css";
import avatar from "../../../../../assets/main/posts/avatar.png";
import {NavLink} from "react-router-dom";

const Friend = (props) => {
    return (
        <NavLink to={props.path}>
            <div className={style.wrapper}>
                <img src={avatar} alt="" className={style.avatar}/>
                <p className={style.nickname}>{props.username}</p>
            </div>
        </NavLink>
    )
}

export default Friend;