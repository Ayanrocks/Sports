import React from "react";

const FacebookButton = props => (
  <a href="/auth/facebook" className={props.className}>
    <i className="fab fa-facebook-f" />
    <h2>{props.text}</h2>
  </a>
);

export default FacebookButton;
