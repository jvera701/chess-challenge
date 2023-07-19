import React from "react";
import "./App.css";
import Square from "./components/square/square.jsx";
import Chessboard from "./components/chessboard/chessboard";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Chessboard />
      </header>
    </div>
  );
}

export default App;
