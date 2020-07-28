import React from 'react';
import {
  Navbar, Nav, NavItem, NavDropdown,
  MenuItem, Glyphicon,
  Grid, Col,
} from 'react-bootstrap';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import { LinkContainer } from 'react-router-bootstrap';

import Contents from './Contents.jsx';
import SignInNavItem from './SignInNavItem.jsx';
import Search from './Search.jsx';
import UserContext from './UserContext.js';
import graphQLFetch from './graphQLFetch.js';
import store from './store.js';

function NavBar({ user, onUserChange }) {
  return (
    <Navbar fluid>
      <Navbar.Header>
        <Navbar.Brand>Crazy Fit</Navbar.Brand>
      </Navbar.Header>
      <Nav>
        <LinkContainer exact to="/">
          <NavItem>Home</NavItem>
        </LinkContainer>
        <LinkContainer to="/food">
          <NavItem>Food</NavItem>
        </LinkContainer>
        <LinkContainer to="/exercise">
          <NavItem>Exercise</NavItem>
        </LinkContainer>
        <LinkContainer to="/timer">
          <NavItem>Timer</NavItem>
        </LinkContainer>
        <LinkContainer to="/progress">
          <NavItem>Progress</NavItem>
        </LinkContainer>
        <LinkContainer to="/file">
          <NavItem>File</NavItem>
        </LinkContainer>
      </Nav>

      <Nav pullRight>
        <IssueAddNavItem user={user} />
        <SignInNavItem user={user} onUserChange={onUserChange} />
        <NavDropdown
          id="user-dropdown"
          title={<Glyphicon glyph="option-vertical" />}
          noCaret
        >
          <LinkContainer to="/about">
            <MenuItem>About</MenuItem>
          </LinkContainer>
        </NavDropdown>
      </Nav>
    </Navbar>
  );
}

function Footer() {
  return (
    <MDBFooter color="blue" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="title">Crazy Fit</h5>
            <p>
                We'd like to hear from you.
            </p>
          </MDBCol>
          <MDBCol md="6">
            <ul>
              <li className="contact">
                <a href="contact">Contact Us</a>
              </li>
              <li className="about">
                <a href="about">About Us</a>
              </li>
              <li className="faqs">
                <a href="faqs">FAQS</a>
              </li>
              <li className="join">
                <a href="join">Join Our Teams</a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="https://www.CrazyFit.com"> CrazyFit.com </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default class Page extends React.Component {
  static async fetchData(cookie) {
    const query = `query { user {
      signedIn givenName
    }}`;
    const data = await graphQLFetch(query, null, null, cookie);
    return data;
  }

  constructor(props) {
    super(props);
    const user = store.userData ? store.userData.user : null;
    delete store.userData;
    this.state = { user };

    this.onUserChange = this.onUserChange.bind(this);
  }

  async componentDidMount() {
    const { user } = this.state;
    if (user == null) {
      const data = await Page.fetchData();
      this.setState({ user: data.user });
    }
  }

  onUserChange(user) {
    this.setState({ user });
  }

  render() {
    const { user } = this.state;
    if (user == null) return null;
    return (
      <div>
        <NavBar user={user} onUserChange={this.onUserChange} />
        <Grid fluid>
          <UserContext.Provider value={user}>
            <Contents />
          </UserContext.Provider>
        </Grid>
        <Footer />
      </div>
    );
  }
}
