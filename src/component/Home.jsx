import React from "react";
import {
    BrowserRouter as Router,
} from "react-router-dom";
import Header from "./Header/Header";
import Body from "./MainComponent/Body"


const Home = () => {
    return (
        <Router>
                <div>
                    <Header/>
                    <Body/>
                </div>
        </Router>
    )
};

export default Home;
