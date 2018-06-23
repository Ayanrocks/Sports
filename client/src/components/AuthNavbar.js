import React from "react";
import Logo from "../assets/svg/logo.svg";
import { Link } from "react-router-dom";

const AuthNavbar = () => (
  <nav className="auth-navbar">
    <Link to="/" className="logo">
      <img src={Logo} alt="logo" title="Sports By Orilliance" />
    </Link>
    <div className="nav__link">
      <div className="nav-item active-tab">Dashboard</div>
      <div className="nav-item">Activity</div>
      <div className="nav-item">My Team</div>
      <div className="nav-item">Matches</div>
      <div className="nav-item">Profile</div>
    </div>
    <div className="share">
      <div className="facebook-share">
      </div>
    </div>
  </nav>
);

export default AuthNavbar;
