import React from "react";
import Navbar from "./Navbar";
import {Link} from 'react-router-dom';
const Home = props => (
  <header className="home">
    <Navbar />
    <div className="home-title">
      <h2 className="home-title__heading">
        Everything about Sports is just a <br /> click away
      </h2>
      <Link to="/auth" className="home-title__button">
        <span className="button__text">Get Started </span>
        <i className="fas fa-arrow-right material-icons"></i>
      </Link>
    </div>

    <div className="auth-buttons">
      <Link to="/auth" className="login">
        Login
      </Link>
      <Link to="/auth" className="signup">
        Sign Up
      </Link>
    </div>
  </header>
);

export default Home;
