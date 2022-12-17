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
import User1 from "./Components/Main/Users/User1";
import User2 from "./Components/Main/Users/User2";
import User3 from "./Components/Main/Users/User3";
import User4 from "./Components/Main/Users/User4";
import User5 from "./Components/Main/Users/User5";
import User6 from "./Components/Main/Users/User6";

function App(props) {
    return (
        <div className="App">
            <Sidebar/>
            <div>
                <Header/>
                <Main>
                    <Routes>
                        <Route path={"/SocialMedia/"} element={<Home/>}/>
                        <Route path={"/SocialMedia/friends"} element={<Friends/>}/>
                        <Route path={"/SocialMedia/liked"} element={<LikedPosts/>}/>
                        <Route path={"/SocialMedia/activity"} element={<Activity/>}/>
                        <Route path={"/SocialMedia/settings"} element={<Settings/>}/>
                        <Route path={"/SocialMedia/profile"} element={<Profile/>}/>
                        <Route path={"/SocialMedia/User1"} element={<User1/>}/>
                        <Route path={"/SocialMedia/User2"} element={<User2/>}/>
                        <Route path={"/SocialMedia/User3"} element={<User3/>}/>
                        <Route path={"/SocialMedia/User4"} element={<User4/>}/>
                        <Route path={"/SocialMedia/User5"} element={<User5/>}/>
                        <Route path={"/SocialMedia/User6"} element={<User6/>}/>
                    </Routes>
                    <FriendsBar/>
                </Main>
            </div>
        </div>
    );
}

export default App;
