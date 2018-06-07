import React from "react";
import Logo from "../assets/svg/logo.svg";

const Navbar = () => (
  <nav>
    <div className="logo">
      <img src={Logo} alt="logo" />
    </div>
    <div className="arrow">
      <i class="material-icons icon-white">arrow_forward_ios</i>
    </div>
    <div className="social">
      <i class="material-icons icon-white">thumb_up_alt</i>
    </div>
  </nav>
);

export default Navbar;
