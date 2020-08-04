import React from "react";
import { Link, NavLink } from "react-router-dom";

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
          
        </div>
        <div className="navbar-nav navbar-right">
          <NavLink id="right-corner" className="nav-item nav-link " to="/registration">
            Account
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
