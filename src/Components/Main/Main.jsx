import React from "react";
import style from "./Main.module.css";

const Main = (props) => {
    return (
        <main className={style.wrapper}>
            {props.children}
        </main>
    )
}

export default Main;