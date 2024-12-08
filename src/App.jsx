import React, { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  const clearInput = () => {
    setInput("");
  };

  const calculateResult = () => {
    try {
      // Evaluate the input using the JavaScript `eval` function
      setInput(eval(input).toString());
    } catch (error) {
      setInput("Error");
    }
  };

  return (
    <div className="app">
      <div className="calculator">
        <h1 style={{ textDecoration: "underline" }}>Aws Calculator:</h1>
        <input
          type="text"
          value={input}
          readOnly
          className="calculator-screen"
        />
        <div className="calculator-buttons">
          {/* Numbers */}
          {["7", "8", "9", "4", "5", "6", "1", "2", "3", "0"].map((num) => (
            <button key={num} onClick={() => handleClick(num)}>
              {num}
            </button>
          ))}
          {/* Operators */}
          {["+", "-", "*", "/"].map((operator) => (
            <button
              key={operator}
              onClick={() => handleClick(operator)}
              style={{ backgroundColor: "#0b4fa9" }}
            >
              {operator}
            </button>
          ))}
          {/* Other Buttons */}
          <button onClick={clearInput}>C</button>
          <button onClick={() => handleClick(".")}>.</button>
          <button onClick={calculateResult}>Ans</button>
        </div>
      </div>
    </div>
  );
}

export default App;
