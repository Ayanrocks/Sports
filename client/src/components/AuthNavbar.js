import React from "react";
import Logo from "../assets/svg/logo.svg";
import { Link } from "react-router-dom";
import createHistory from "history/createBrowserHistory";

const history = createHistory();

class AuthNavbar extends React.Component {
  constructor(props) {
    super(props);

    this.activeTab = this.activeTab.bind(this);

    this.state = {
      active: "Dashboard"
    };
  }

  activeTab(e) {
    this.setState({ active: e.target.value });
    history.push("/");
  }

  render() {
    return (
      <nav className="auth-navbar">
        <Link to="/" className="logo">
          <img src={Logo} alt="logo" title="Sports By Orilliance" />
        </Link>
        <div className="nav__link">
          <button
            onClick={this.activeTab}
            value="Dashboard"
            className={
              this.state.active === "Dashboard"
                ? "nav-item active-tab"
                : "nav-item"
            }
          >
            Dashboard
          </button>
          <Link to="/search"
            onClick={this.activeTab}
            value="Search"
            className={
              this.state.active === "Search"
                ? "nav-item active-tab"
                : "nav-item"
            }
          >
            Search
          </Link>
          <button
            onClick={this.activeTab}
            value="My Teams"
            className={
              this.state.active === "My Teams"
                ? "nav-item active-tab"
                : "nav-item"
            }
          >
            My Teams
          </button>
          <button
            onClick={this.activeTab}
            value="News"
            className={
              this.state.active === "News" ? "nav-item active-tab" : "nav-item"
            }
          >
            News
          </button>
          <button
            onClick={this.activeTab}
            value="Profile"
            className={
              this.state.active === "Profile"
                ? "nav-item active-tab"
                : "nav-item"
            }
          >
            Profile
          </button>
        </div>
        <div className="logout">
          <div className="logout__btn" />
        </div>
      </nav>
    );
  }
}

export default AuthNavbar;
