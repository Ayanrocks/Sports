import React from "react";

const GoogleButton = props => (
  <button className={props.className}>
    <i className="fab fa-google" />
    <h2>{props.text}</h2>
  </button>
);

export default GoogleButton;
