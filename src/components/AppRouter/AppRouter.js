import React from 'react';

import {Route, Redirect, Switch} from "react-router-dom";
import {About, PostIdPage, Posts} from "../../pages";

const AppRouter = () => {


    return (
            <Switch>
                <Route path={"/about"}>
                    <About/>
                </Route>
                <Route path={"/posts"}>
                    <Posts/>
                </Route>
                <Route path={"/posts/:id"}>
                    <PostIdPage/>
                </Route>
                <Redirect to={"/posts"}/>
            </Switch>
    );
};


export {AppRouter};