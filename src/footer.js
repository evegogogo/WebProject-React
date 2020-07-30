import React from "react";
import { NavLink } from "react-router-dom";
import "./style/footer.css"

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="row">
        <div className="col">
          <NavLink className="nav-item nav-link" to="/contact">
            Contact Us
          </NavLink>
        </div>
        <div className="col">
          <NavLink className="nav-item nav-link" to="/about">
            About Us
          </NavLink>
        </div>
        <div className="col">
          <NavLink className="nav-item nav-link" to="/faqs">
            FAQS
          </NavLink>
        </div>
        <div className="col">
          <NavLink className="nav-item nav-link" to="/join">
            Join Our Team
          </NavLink>
        </div>
      </div>
      <hr />
      <div className="row">
        <p className="col">
          &copy; {new Date().getFullYear()} CrazyFit | All rights reserved
        </p>
      </div>
    </div>
  </footer>
);
  
  export default Footer;