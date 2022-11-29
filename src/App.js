import './App.css';
import Sidebar from "./Components/Sidebar/Sidebar";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import {Route, Routes} from "react-router-dom";
import FriendsBar from "./Components/Main/FriendsBar/FriendsBar";
import React from "react";
import Home from "./Components/Main/Home/Home";
import Friends from "./Components/Main/Friends/Friends";
import LikedPosts from "./Components/Main/LikedPosts/LikedPosts";
import Activity from "./Components/Main/Activity/Activity";
import Settings from "./Components/Main/Settings/Settings";
import Profile from "./Components/Main/Profile/Profile";

function App(props) {
    return (
        <div className="App">
            <Sidebar/>
            <div>
                <Header/>
                <Main>
                    <Routes>
                        <Route path={"/SocialMedia/"} element={<Home posts={props.state.homePage.posts} dispatch={props.dispatch}/>}/>
                        <Route path={"/SocialMedia/friends"} element={<Friends/>}/>
                        <Route path={"/SocialMedia/liked"} element={<LikedPosts/>}/>
                        <Route path={"/SocialMedia/activity"} element={<Activity/>}/>
                        <Route path={"/SocialMedia/settings"} element={<Settings/>}/>
                        <Route path={"/SocialMedia/profile"} element={<Profile/>}/>
                    </Routes>
                    <FriendsBar/>
                </Main>
            </div>
        </div>
    );
}

export default App;
