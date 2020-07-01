import React from "react";
import {
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import Account from "./Account/Account";
import WineColloection from './WineColloectionComponent/WineColloectionComponent';
import ProductPage from './ProductPageComponent/ProductPageComponent';

const Home = () => {
    return (

        <>
            <Switch>
                <Route exact path="/">
                    <Redirect to="/account" />
                </Route>
                <Route path="/account">
                    <Account />
                </Route>
                <Route path="/wine">
                    <WineColloection/>
                </Route>
                <Route path="/product">
                    <ProductPage/>
                </Route>
            </Switch>


        </>
    )
};

export default Home;
