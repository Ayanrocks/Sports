import React from "react";
import { Link } from "react-router-dom";

import Logo from "../assets/svg/logo.svg";

const Footer = () => (
  <section className="footer">
    <div className="container">
      <div className="row clearfix">
        <div className="content clearfix">
          <div className="left">
            <img src={Logo} alt="illustrations" />
            <h5>All rights Reserved.</h5>
          </div>
          <div className="right">
            <div className="right__content">
              <div className="links">
                <ul className="links__list">
                  <li className="links__list--item">
                    <Link to="/contact">Contact Us</Link>
                  </li>
                  <li className="links__list--item">
                    <Link to="">FAQ</Link>
                  </li>
                  <li className="links__list--item">
                    <Link to="">Terms and Conditions</Link>
                  </li>
                  <li className="links__list--item">
                    <Link to="">Privacy Policy</Link>
                  </li>
                  <li className="links__list--item">
                    <a href="https://github.com/Ayanrocks/Sports">Github</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="info">
          <h4>Designed And Developed By Orilliance inc.</h4>
        </div>
      </div>
    </div>
  </section>
);

export default Footer;
