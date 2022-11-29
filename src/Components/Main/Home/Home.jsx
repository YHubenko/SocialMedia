import React from "react";
import style from "./Home.module.css";
import Posts from "./Posts/Posts";

const Home = (props) => {
    return (
        <div className={style.wrapper}>
            <Posts posts={props.posts} dispatch={props.dispatch}/>
        </div>
    )
}

export default Home;