import React from 'react';

import {Route, Redirect, Switch} from "react-router-dom";
import {About, PostIdPage, Posts} from "../../pages";

const AppRouter = () => {


    return (
        <Switch>
            <Route path={"/about"}>
                <About/>
            </Route>
            <Route exact path={"/posts"}>
                <Posts/>
            </Route>
            <Route exact path={"/posts/:id"}>
                <PostIdPage/>
            </Route>
            <Redirect to={"/posts"}/>
        </Switch>
    );
};


export {AppRouter};