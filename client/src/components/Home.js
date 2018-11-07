import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

import Footer from './Footer';

const Home = () => (
  <div>
    <header className="home">
      <Navbar />
      <div className="home-title">
        <h2 className="home-title__heading">
          Everything about Sports is just a <br /> click away
        </h2>
        <Link to="/auth" className="home-title__button">
          <span className="button__text">Get Started </span>
          <i className="fas fa-arrow-right material-icons" />
        </Link>
      </div>

      <div className="auth-buttons">
        <div className="login-div">
          <Link to="/auth" className="login">
            Login
          </Link>
          <div className="dash" />
        </div>
        <div className="signup-div">
          <Link to="/auth" className="signup">
            Sign Up
          </Link>
        </div>
      </div>
    </header>
    <section className="about">
      <div className="container">
        <div className="row clearfix">
          <h2 className="heading">About Us</h2>
          <div className="content clearfix">
            <div className="left">
              <p className="left__content">
                We thrive to bring innovations to our users. So we thought the
                need of a sports site to get latest updates about everything
                related to sports. Introducing Orilliance presentation to play.
                Visit <a href="http://orilliance.com">orilliance.com</a> for
                more.
              </p>
            </div>
            <div className="right">
              <img
                src="https://img.freepik.com/free-vector/colored-silhouettes-of-runners_23-2147619177.jpg?size=338c&ext=jpg"
                alt="illustrations"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="open-source">
      <div className="container">
        <div className="row clearfix">
          <h2 className="heading">Fully Open Sourced</h2>
          <div className="content clearfix">
            <div className="left">
              <img
                src="https://image.shutterstock.com/image-vector/volunteers-charity-work-raised-helping-260nw-1061833856.jpg"
                alt="illustrations"
              />
            </div>
            <div className="right">
              <p className="right__content">
                Every part of Orilliance Sports is open sourced and is available
                to download. This is what makes orilliance sports standout from
                other sports sites. Fork this repo,then add your own
                contributions. Also feel free to experiment as we don't bite :P{" "}
                <br />
                <a href="https://github.com/Ayanrocks/Sports">Github link</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer/>
  </div>
);

export default Home;
