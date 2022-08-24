import React from "react";
import "./ButtonBorder.scss";

export default function ButtonBorder(props) {
  const { white, small } = props;

  return (
    <div
      className={`button-border ${white ? "white" : ""} ${
        small ? "small" : ""
      }`}
    >
      <h4>{props.text}</h4>
      <span className="top"></span>
      <span className="left"></span>
      <span className="bottom"></span>
      <span className="right"></span>
    </div>
  );
}
