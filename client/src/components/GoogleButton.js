import React from "react";

const GoogleButton = props => (
  <a href="/auth/google" className={props.className}>
    <i className="fab fa-google" />
    <h2>{props.text}</h2>
  </a>
);

export default GoogleButton;
