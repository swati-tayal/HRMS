import React from "react";
import { Link } from "react-router-dom";

import "./Button.css"

export const Button = (props) => {
  if (props.to) {
    return <Link className="button" to={props.to}>{props.children}</Link>;
  }

  return (
    <button className={`button ${props.className}`} 
    type={props.type}
    onClick={props.onClick}
    disabled={props.disabled}>
      {props.children}
    </button>
  );
};
