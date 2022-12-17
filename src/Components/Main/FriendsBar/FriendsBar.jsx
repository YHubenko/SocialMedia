import React from "react";
import style from "./FriendsBar.module.css";
import FriendsContainer from "./Friends/FriendsContainer";

const FriendsBar = () => {
    return (
        <div className={style.wrapper}>
            <FriendsContainer/>
        </div>
    )
}

export default FriendsBar;