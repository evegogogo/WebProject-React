import React, { Component } from "react";
import { Route, Switch, Redirect } from 'react-router-dom'
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import NavBar from "./navbar";
import Recipes from "./recipes";
import Exercises from "./exercises";
import Foods from "./foods";
import Home from "./home";
import History from "./history";
import Alarm from './alarm'
import exerciseDetails from "./exerciseDetails";
// import foodDetails from "./foodDetails";
import NotFound from "./notFound";

import Agreement from "./components/agreement";
import Footer from "./footer";
import registration from './registration';
import "./style/App.css";
import LoginButton from "./components/loginAuth";
import { withAuthenticationRequired } from '@auth0/auth0-react';

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql'
});

class Page extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="main_page">
          <NavBar />
          <div className="App">
            <Switch>
              <Route path="/recipes" component={Recipes} />
              <Route path="/foods" component={Foods} />
              <Route path="/exercises/:id" component={exerciseDetails} />
              <Route path="/exercises" render={(props) => <Exercises sortBy="newest" {...props} />} />
              <Route path="/alarm" component={Alarm} />
              <Route path="/history" component={History} />
              <Route path="/agreement" component={Agreement} />
              <Route path="/home" component={Home} />
              <Route path="/notfound" component={NotFound} />
              <Redirect to="/home" />
            </Switch>
          </div>
          <LoginButton />
        </div>
        <Footer />
      </ApolloProvider>
    );
  }
}

export default withAuthenticationRequired(Page);
