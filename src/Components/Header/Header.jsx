import React from "react";
import style from "./Header.module.css";
import Search from "./Search/Search";
import Theme from "./Theme/Theme";
import Notifications from "./Notifications/Notifications";
import Profile from "./Profile/Profile";

const Header = (props) => {
    return (
        <header className={style.wrapper}>
            <Search/>
            <div className={style.rightBlock}>
                <Theme/>
                <Notifications/>
                <Profile/>
            </div>
        </header>
    )
}

export default Header;