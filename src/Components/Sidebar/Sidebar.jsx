import React from "react";
import style from "./Sidebar.module.css";
import logo from "../../assets/sidebar/logo.png";
import homeActive from "../../assets/sidebar/home-active.png";
import activity from "../../assets/sidebar/activity.png";
import heart from "../../assets/sidebar/heart.png";
import settings from "../../assets/sidebar/setting.png";
import {NavLink} from "react-router-dom";


const Sidebar = (props) => {
    return (
        <div className={style.wrapper}>
            <NavLink to={"/SocialMedia/"}><img src={logo} alt="" className={style.logo}/></NavLink>
            <div className={style.buttons}>
                <NavLink to={"/SocialMedia/"}><img src={homeActive} alt="" className={style.btn}/></NavLink>
                <NavLink to={"/SocialMedia/activity"}><img src={activity} alt="" className={style.btn}/></NavLink>
                <NavLink to={"/SocialMedia/liked"}><img src={heart} alt="" className={style.btn}/></NavLink>
            </div>
            <NavLink to={"/SocialMedia/settings"}><img src={settings} alt="" className={style.setting}/></NavLink>
        </div>
)
}

export default Sidebar;