import React, { Component } from "react";
import { Route, Switch, Redirect } from 'react-router-dom'
import NavBar from "./navbar";
import Recipes from "./recipes";
import Exercises from "./exercises";
import Home from "./home";
import Dashboard from "./dashboard";
import Alarm from './alarm'
import User from "./user";
import exerciseDetails from "./exerciseDetails";
// import foodDetails from "./foodDetails";
import NotFound from "./notFound";
import "./App.css";



class Page extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="content">
          <Switch>
            <Route path="/recipes" component={Recipes} />
            <Route path="/exercises/:id" component={exerciseDetails} />
            <Route path="/exercises" render={(props) => <Exercises sortBy="newest" {...props} />}/>
            <Route path="/alarm" component={Alarm} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/user" component={User} />
            <Route path="/notfound" component={NotFound} />
            <Route path="/" exact component={Home} />
            <Redirect to="/notfound" />
          </Switch>
        </div>
      </div>
    );
  }
}

export default Page;
