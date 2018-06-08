import React from "react";
import Logo from "../assets/svg/logo.svg";
import { Link } from "react-router-dom";

const Navbar = () => (
  <nav>
    <Link to="/" className="logo">
      <img src={Logo} alt="logo" title="Sports By Orilliance" />
    </Link>
    <div className="arrow">
      <i className="fas fa-angle-right fa-3x icon-white" />
    </div>
    <Link to="/privacy-policy" className="social">
      <i className="fas fa-file-alt fa-2x icon-white" />
    </Link>
  </nav>
);

export default Navbar;
