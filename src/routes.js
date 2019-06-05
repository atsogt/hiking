import React from "react";
import { Switch, Route } from "react-router-dom";
import { Auth } from "./Components/Auth/Auth";
import { Dashboard } from "./Components/Dashboard/Dashboard";
import { Form } from "./Components/Form/Form";
import { Post } from "./Components/Post/Post";
import { Login } from "./Components/Login/Login";
import Register from "./Components/Register/Register";

export default (
  <Switch>
    <Route path="/dashboard" component={Dashboard} />
    <Route path="/register" component={Register} />
    <Route path="/login" component={Login} />
    <Route path="/post/" component={Post} />
    <Route path="/new" component={Form} />
    <Route exact path="/" component={Auth} />
  </Switch>
);
