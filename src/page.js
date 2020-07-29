import React, { Component } from "react";
import { Route } from 'react-router-dom';
import NavBar from "./navbar";
import Foods from "./foods";
import Exercises from "./exercises";
import Home from "./home";
 //import Dashboard from "./components/dashboard";


class Page extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="content">
            <Route path="/foods" component={Foods}/>
            <Route path="/exercises" component={Exercises}/>
            <Route path="/" component={Home}/>
        </div>
      </div>
    );
  }
}

export default Page;
