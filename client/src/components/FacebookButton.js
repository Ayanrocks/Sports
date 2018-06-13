import React from "react";

const FacebookButton = props => (
  <button className={props.show ? props.className : "hide"}>
    <i className="fab fa-facebook-f" />
    <h2>{props.text}</h2>
  </button>
);

export default FacebookButton;
