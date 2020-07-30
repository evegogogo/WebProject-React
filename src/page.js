import React, { Component } from "react";
import { Route } from 'react-router-dom'
import NavBar from "./navbar";
import Foods from "./foods";
import Exercises from "./exercises";
import Home from "./home";
import Dashboard from "./dashboard";
import Alarm from './alarm'
// import foodDetails from "./foodDetails";
// import NotFound from "./notFound";
import "./App.css";

class Page extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="content">
            <Route path="/foods" component={Foods} />
            <Route path="/exercises" component={Exercises} />
            <Route path="/alarm" component={Alarm} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/" component={Home} />
        </div>
      </div>
    );
  }
}

export default Page;
