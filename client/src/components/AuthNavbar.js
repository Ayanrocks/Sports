import React from "react";
import Logo from "../assets/svg/logo.svg";
import { Link, NavLink } from "react-router-dom";

class AuthNavbar extends React.Component {
  constructor(props) {
    super(props);

    this.activeTab = this.activeTab.bind(this);
    this.url = window.location.href.split("/").pop();
    this.state = {
      active: this.url
    };
  }

  activeTab(e) {
    this.setState({ active: e.target.value });
    console.log(this.state);
  }

  render() {
    return (
      <nav className="auth-navbar">
        <Link to="/" className="logo">
          <img src={Logo} alt="logo" title="Sports By Orilliance" />
        </Link>
        <div className="nav__link">
          <NavLink to="/dashboard" className="nav-item">
            Dashboard
          </NavLink>
          <NavLink
            to="/search"
            // onClick={this.activeTab}

            className="nav-item"
          >
            Search
          </NavLink>
          <NavLink to="/myteams" value="myteams" className="nav-item">
            My Teams
          </NavLink>
          <NavLink to="/news" className="nav-item">
            News
          </NavLink>
          <NavLink to="/profile" className="nav-item">
            Profile
          </NavLink>
        </div>
        <div className="logout">
          <div className="logout__btn" />
        </div>
      </nav>
    );
  }
}

export default AuthNavbar;
