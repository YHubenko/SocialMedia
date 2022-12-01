import React from "react";
import style from "./FriendsBar.module.css";
import Friends from "./Friends/Friends";

const FriendsBar = (props) => {
    return (
        <div className={style.wrapper}>
            <Friends friends={props.friends}/>
        </div>
    )
}

export default FriendsBar;