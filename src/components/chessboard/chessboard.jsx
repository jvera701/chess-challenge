import React from "react";
import "./chessboard.styles.css";
import Square from "../square/square";

export default function Chessboard() {
  const numberRows = 8;
  const numberColumns = 8;

  function getRow(isFirstWhite) {
    const squareRow = [];
    for (let i = 0; i < numberColumns; i++) {
      if (isFirstWhite) {
        squareRow.push(<Square isWhite={i % 2 === 0} />);
      } else {
        squareRow.push(<Square isWhite={i % 2 === 1} />);
      }
    }
    return squareRow;
  }

  function getBoard() {
    const arr = [];
    for (let i = 0; i < numberRows; i++) {
      arr.push(getRow(i % 2 === 0));
    }
    return arr;
  }

  return <div className="wrapper">{getBoard()}</div>;
}
