import React from "react";
import style from "./Friends.module.css";
import {NavLink} from "react-router-dom";
import Friend from "./Friend/Friend";

const Friends = (props) => {
    let friendsElement = props.friends.map(friends => <Friend username={friends.username} path={friends.path}/>)
    return (
        <div>
            <div className={style.titleBlock}>
                <h1 className={style.title}>Friends</h1>
                <NavLink to={"/SocialMedia/friends"} className={style.link}>View all</NavLink>
            </div>
            <div className={style.friendsBlock}>
                {friendsElement}
            </div>
        </div>
    )
}

export default Friends;