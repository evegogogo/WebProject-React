import React from "react";
import { NavLink } from "react-router-dom";
import "./style/footer.css"

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="row">
        <div className="col">
          <NavLink className="footer_text" to="/contact">
            Contact Us
          </NavLink>
        </div>
        <div className="col">
          <NavLink className="footer_text" to="/about">
            About Us
          </NavLink>
        </div>
        <div className="col">
          <NavLink className="footer_text" to="/faqs">
            FAQS
          </NavLink>
        </div>
        <div className="col">
          <NavLink className="footer_text" to="/join">
            Join Us
          </NavLink>
        </div>
      </div>
      <div className="row footer_copy" >
        <p className="col">
          &copy; {new Date().getFullYear()} CrazyFit | All rights reserved
        </p>
      </div>
    </div>
  </footer>
);
  
  export default Footer;