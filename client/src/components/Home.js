import React from "react";
import Navbar from "./Navbar";
const Home = props => (
  <header className="home">
    <Navbar />
    <div className="home-title">
      <h2 className="home-title__heading">
        Everything about Sports is just a <br /> click away
      </h2>
      <button className="home-title__button">
        <span className="button__text">Get Started</span>
        <i className="material-icons md-24">arrow_forward</i>
      </button>
    </div>
  </header>
);

export default Home;
