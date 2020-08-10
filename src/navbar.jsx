import React from "react";
import { Link, NavLink } from "react-router-dom";
// import LoginButton from "./components/loginAuth";
// import authPage from "./authPage";

const NavBar = () => {
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
          <NavLink className="nav-item nav-link" to="/foods">
            Foods
          </NavLink>
          <NavLink className="nav-item nav-link" to="/exercises">
            Exercises
          </NavLink>
          <NavLink className="nav-item nav-link" to="/alarm">
            Alarm
          </NavLink>
          <NavLink className="nav-item nav-link" to="/history">
            History
          </NavLink>
          <NavLink className="nav-item nav-link" to="/authPage">
            User
          </NavLink>
        </div>
        {/* <LoginButton /> */}

      </div>
    </nav>
  );
};

export default NavBar;
