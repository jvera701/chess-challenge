import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Square from "./components/square/square.jsx";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Square isWhite={true} />
        <Square isWhite={false} />
      </header>
    </div>
  );
}

export default App;
