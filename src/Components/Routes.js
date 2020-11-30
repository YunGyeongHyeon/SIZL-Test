import React from "react";
import { Route, Switch } from "react-router-dom";
import Board from "./MainPage/Board";
import CreatePost from "./Routes/CreatePost";
import WatchPost from "./Routes/WatchPost";
import UpdatePost from "./Routes/UpdatePost";

export default () => {
    return (
        <Switch>
            <Route exact path="/" component={Board} />
            <Route path="/post/:id" component={WatchPost} />
            <Route path="/createPost" component={CreatePost} />
            <Route path="/updatePost/:id" component={UpdatePost} />
        </Switch>
    );
}