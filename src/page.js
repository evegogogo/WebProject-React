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
// import registration from './registration';
import authPage from "./authPage";
import AuthConext from './context/auth-context';
import "./style/App.css";
// import { withAuthenticationRequired } from '@auth0/auth0-react';

const client = new ApolloClient({
  uri: 'https://crazyfitapi.herokuapp.com/graphql'
  // uri: 'http://localhost:5000/graphql'
});

class Page extends Component {

  state = {
    token: null,
    id: null,
  }

  login = (token, id, tokenExpiration) => {
    this.setState({ token: token, id: id })
  }

  logout = () => {
    this.setState({ token: null, id: null })
  }

  render() {
    return (
      <ApolloProvider client={client}>
        <div className="main_page">
          <AuthConext.Provider value={{token: this.state.token, id: this.state.id, login: this.login, logout: this.logout }}>
            <NavBar />
            <div className="App">
              <Switch>
                {!this.state.token && <Redirect from="/" to="/authPage" exact />}
                <Route path="/recipes" component={Recipes} />
                {this.state.token &&<Route path="/foods" component={Foods} />}
                <Route path="/exercises/:id" component={exerciseDetails} />
                {this.state.token && <Route path="/exercises" render={(props) => <Exercises sortBy="newest" {...props} />} />}
                {this.state.token && <Route path="/alarm" component={Alarm} />}
                {this.state.token && <Route path="/history" component={History} />}
                <Route path="/agreement" component={Agreement} />
                <Route path="/home" component={Home} />
                {!this.state.token &&<Route path="/authPage" component={authPage} />}
                <Route path="/notfound" component={NotFound} />
                <Redirect to="/home" />
              </Switch>
            </div>
          </AuthConext.Provider>
        </div>
        <Footer />
      </ApolloProvider>
    );
  }
}

export default Page; // withAuthenticationRequired(Page);
