import React from "react";
import {
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import AccountStorageComponent  from "./AccountStorageComponent/AccountStorageComponent";
import InvoiceComponent  from "./InvoiceComponent/InvoiceComponent";
import WineColloection from './WineColloectionComponent/WineColloectionComponent';

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
            </Switch>


        </>
    )
};

export default Home;
