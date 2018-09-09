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
    // window.location.href =  "/" + e.target.value;
  }

  render() {
    return (
      <nav className="auth-navbar">
        <Link to="/" className="logo">
          <img src={Logo} alt="logo" title="Sports By Orilliance" />
        </Link>
        <div className="nav__link">
          <NavLink
            to="/dashboard"
            // onClick={this.activeTab}
            // value="dashboard"
            className='nav-item'
            // className={
            //   this.state.active === "dashboard"
            //     ? "nav-item active-tab"
            //     : "nav-item"
            // }
          >
            Dashboard
          </NavLink>
          <NavLink
            to="/search"
            // onClick={this.activeTab}
            // value="search"
            className='nav-item'
            // className={
            //   this.state.active === "search"
            //     ? "nav-item active-tab"
            //     : "nav-item"
            // }
          >
            Search
          </NavLink>
          <NavLink
            to="/myteams"
            // onClick={this.activeTab}
            value="myteams"
            // className={
            //   this.state.active === "myteams"
            //     ? "nav-item active-tab"
            //     : "nav-item"
            // }
            className='nav-item'
          >
            My Teams
          </NavLink>
          <NavLink
          to='/news'
            // onClick={this.activeTab}
            // value="news"
            // className={
            //   this.state.active === "news" ? "nav-item active-tab" : "nav-item"
            // }
            className='nav-item'
          >
            News
          </NavLink>
          <NavLink
            to='/profile'
            // onClick={this.activeTab}
            // value="profile"
            // className={
            //   this.state.active === "profile"
            //     ? "nav-item active-tab"
            //     : "nav-item"
            // }
          className='nav-item'
          >
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
