import React from "react";
import style from "./Home.module.css";
import PostsContainer from "./Posts/PostsContainer";

const Home = () => {
    return (
        <div className={style.wrapper}>
            <PostsContainer/>
        </div>
    )
}

export default Home;