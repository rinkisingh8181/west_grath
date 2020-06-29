import React from "react";
import {
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import AccountStorageComponent  from "./AccountStorageComponent/AccountStorageComponent";
import InvoiceComponent  from "./InvoiceComponent/InvoiceComponent";
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
                    <AccountStorageComponent/>
                    <InvoiceComponent/>
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
