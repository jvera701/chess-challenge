import React from "react";
import "./square.styles.css";

export default function Square(props) {
  const { isWhite } = props;
  return (
    <div
      className={`square ${isWhite ? "white-background" : "black-background"}`}
    ></div>
  );
}
