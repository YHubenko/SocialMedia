import React from "react";
import style from "./Profile.module.css";
import avatar from "../../../assets/header/profile/avatar.png";
import online from "../../../assets/header/profile/online.png";
import {NavLink} from "react-router-dom";

const Profile = (props) => {
    return (
        <div className={style.wrapper}>
            <div>
                <h1 className={style.name}>Adel</h1>
                <div className={style.statusBlock}>
                    <p className={style.status}>Online</p>
                    <img src={online} alt="" className={style.statusIcon}/>
                </div>
            </div>
            <NavLink to={"/SocialMedia/profile"}><img src={avatar} alt="" className={style.avatar}/></NavLink>
        </div>
    )
}

export default Profile;