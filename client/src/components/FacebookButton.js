import React from "react";

const FacebookButton = props => (
  <button className={props.className}>
    <i className="fab fa-facebook-f" />
    <h2>{props.text}</h2>
  </button>
);

export default FacebookButton;
