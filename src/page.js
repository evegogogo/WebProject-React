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
import Cookies from 'js-cookie';
import "./style/App.css";
import About from "./about";
import Contact from "./contact";
import FAQS from "./faqs";
import Join from "./join";
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
    Cookies.remove('token');
    Cookies.remove('id');
    Cookies.remove('tokenExpiration');
    this.setState({ token: null, id: null })
  }

  componentDidMount() {
    const token = Cookies.get('token');
        const id = Cookies.get('id');
        const tokenExpiration = Cookies.get('tokenExpiration');
        if (token) {
            this.login(
                token,
                id,
                tokenExpiration
            );
        }
  }

  render() {
    return (
      <ApolloProvider client={client}>
        <div className="main_page">
          <AuthConext.Provider value={{token: this.state.token, id: this.state.id, login: this.login, logout: this.logout }}>
            <NavBar />
            <div className="App">
              <Switch>
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
                <Route path="/faqs" component={FAQS} />
                <Route path="/join" component={Join} />
                <Route path="/recipes" component={Recipes} />
                {this.state.token && <Route path="/foods" component={Foods} />}
                <Route path="/exercises/:id" component={exerciseDetails} />
                {this.state.token && <Route path="/exercises" render={(props) => <Exercises sortBy="newest" {...props} />} />}
                {this.state.token && <Route path="/alarm" component={Alarm} />}
                {this.state.token && <Route path="/history" component={History} />}
                <Route path="/agreement" component={Agreement} />
                <Route path="/home" component={Home} />
                {!this.state.token && <Route path="/authPage" component={authPage} />}
                <Route path="/notfound" component={NotFound} />
                {!this.state.token && <Redirect to="/authPage" exact />}
                <Redirect to="/home" />
              </Switch>
            </div>
            <Footer />
          </AuthConext.Provider>
        </div>       
      </ApolloProvider>
    );
  }
}

export default Page; // withAuthenticationRequired(Page);
