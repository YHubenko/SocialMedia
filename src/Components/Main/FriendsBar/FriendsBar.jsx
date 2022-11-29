import React from "react";
import style from "./FriendsBar.module.css";
import {NavLink} from "react-router-dom";

const FriendsBar = (props) => {
    return (
        <div className={style.wrapper}>
            <div className={style.titleBlock}>
                <h1 className={style.title}>Friends</h1>
                <NavLink to={"/SocialMedia/friends"} className={style.link}>View all</NavLink>
            </div>
        </div>
    )
}

export default FriendsBar;