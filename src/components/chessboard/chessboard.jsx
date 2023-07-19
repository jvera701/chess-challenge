import React from "react";
import "./chessboard.styles.css";
import Square from "../square/square";

export default function Chessboard() {
  const numberRows = 8;
  const numberColumns = 8;
  const columnsLabel = ["A", "B", "C", "D", "E", "F", "G", "H"];

  function getRow(isFirstWhite, putLabel) {
    const squareRow = [];
    const colorIndex = isFirstWhite ? 0 : 1;
    for (let i = 0; i < numberColumns; i++) {
      squareRow.push(
        <div>
          <Square isWhite={i % 2 === colorIndex} />
          {putLabel && columnsLabel[i]}
        </div>
      );
    }
    return squareRow;
  }

  function getBoard() {
    const arr = [];
    for (let i = 0; i < numberRows; i++) {
      arr.push(
        <>
          {numberRows - i}
          {getRow(i % 2 === 0, i === numberRows - 1)}
        </>
      );
    }
    return arr;
  }

  return <div className="wrapper">{getBoard()}</div>;
}
