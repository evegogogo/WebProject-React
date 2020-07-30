import React from "react";
import { Link } from 'react-router-dom';


const NavBar = () => {
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/recipes">Recipes</Link>
      </li>
      <li>
        <Link to="/exercises">Exercises</Link>
      </li>
      <li>
        <Link to="/alarm">Alarm</Link>
      </li>
      <li>
        <Link to="/dashboard">Dashboard</Link>
      </li>
      <li>
        <Link to="/users">Users</Link>
      </li>
    </ul>
  );
};

export default NavBar;
