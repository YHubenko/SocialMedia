import React from "react";
import style from "./Search.module.css";
import magnifier from "../../../assets/header/search/magnifier.png";

const Search = (props) => {
    return (
        <div className={style.wrapper}>
            <img src={magnifier} alt="" className={style.magnifier}/>
            <input className={style.input} placeholder={"Search"}/>
        </div>
    )
}

export default Search;