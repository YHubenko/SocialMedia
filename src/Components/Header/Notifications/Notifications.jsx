import React from "react";
import style from "./Notifications.module.css";
import notification from "../../../assets/header/notifications/notification.png";

const Notifications = (props) => {
    return (
        <div className={style.wrapper}>
            <img src={notification} alt="" className={style.icon}/>
        </div>
    )
}

export default Notifications;