import React from "react";
import { Link, NavLink } from "react-router-dom";
import AuthContext from './context/auth-context';

// import LoginButton from "./components/loginAuth";
// import authPage from "./authPage";

const NavBar = () => {
  return (
    <AuthContext.Consumer>
      {(context) => {
        return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">
          CrazyFit
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <NavLink className="nav-item nav-link" to="/recipes">
              Recipes
            </NavLink>
            {context.token && <NavLink className="nav-item nav-link" to="/foods">
              Foods
            </NavLink>}
            {context.token && <NavLink className="nav-item nav-link" to="/exercises">
              Exercises
            </NavLink>}
            {context.token && <NavLink className="nav-item nav-link" to="/alarm">
              Alarm
            </NavLink>}
            {context.token && <NavLink className="nav-item nav-link" to="/history">
              History
            </NavLink>}
            {context.token ? <button onClick={context.logout}>Logout</button> : <NavLink className="nav-item nav-link" to="/authPage">
              Login
            </NavLink>}
          </div>
          {/* <LoginButton /> */}
        </div>
      </nav>
        )
      }}
      
    </AuthContext.Consumer>
  );
};

export default NavBar;
