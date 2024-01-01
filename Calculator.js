import React, { useState } from "react";
import "./Calculator.scss"
const Number = ["C", "X", "=", " % ", "1", "2", "3", " / ", "4", "5", "6", " * ", "7", "8", "9", " + ", ".", "0", " - "];
export const CalculatorAPP = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("0");

  const handleClick = (value) => {
    if (value == "=") {
      try {
        setResult(eval(input));
      }
      catch (error) {
        setResult("Syntax Error")
      } 
    } else if (value == "C") {
      setInput("")
      setResult("0")
    }
    else if (value == "X") {
      let newInput = input.slice(0, -1)
      setInput(newInput)
    } else {
      setInput(input + value);
    }
  };

  return (
    <div className="calculator-container">
      <div className="calculator-top">
        <div className="top">{result}</div>
        <div className="bottom">{input}</div>
      </div>
      <div className="calculator-bottom">
        {Number.map((element, i) => {
          return (
            <div
              key={i}
              className="btn"
              style={{ width: element == 0 ? "50%" : null }}
              onClick={(event) => handleClick(event.target.innerHTML)}
            >
              {element}
            </div>
          );
        })}
      </div>
    </div >
  );
};
