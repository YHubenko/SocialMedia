import React from "react";
import style from "./Theme.module.css";
import sun from "../../../assets/header/theme/sun.png";
import moon from "../../../assets/header/theme/moon.png";
import chosen from "../../../assets/header/theme/chosen.png";

const Theme = () => {
    return (
        <div className={style.wrapper}>
            <img src={sun} alt="" className={style.sun}/>
            <img src={moon} alt="" className={style.moon}/>
            <div className={style.chosen}></div>
        </div>
    )
}

export default Theme;