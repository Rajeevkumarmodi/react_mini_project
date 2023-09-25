import React, { useState } from "react";
import "./calculator.css";

function Calculator() {
  const [inputValue, setInputValue] = useState("");
  const [dotPresent, setDotPresent] = useState(false);

  function btnValue(btnValue) {
    setInputValue(inputValue.concat(btnValue));

    if (btnValue === "=") {
      setInputValue(eval(inputValue).toString());

      const result = eval(inputValue);
    } else if (btnValue === "AC") {
      setInputValue("");
    } else if (btnValue === "DC") {
      const a = inputValue;
      const b = a.slice(0, a.length - 1);
      setInputValue(b);
    } else if (btnValue == ".") {
      setDotPresent(true);
    }
  }

  const changeHandler = (e) => {};

  return (
    <div className="calculator-container">
      <input
        className="inputBox"
        onChange={changeHandler}
        value={inputValue}
        type="text"
        disabled
      />
      <div className="allButtons">
        <button
          className="btns bg-white"
          onClick={() => {
            btnValue("AC");
          }}
        >
          AC
        </button>
        <button
          className="btns bg-white"
          onClick={() => {
            btnValue("DC");
          }}
        >
          DC
        </button>
        <button
          className="btns bg-white"
          disabled={dotPresent}
          onClick={() => {
            btnValue(".");
          }}
        >
          .
        </button>
        <button
          className="btns bg-orange"
          onClick={() => {
            btnValue("/");
          }}
        >
          ÷
        </button>
        <button
          className="btns"
          onClick={() => {
            btnValue("7");
          }}
        >
          7
        </button>
        <button
          className="btns"
          onClick={() => {
            btnValue("8");
          }}
        >
          8
        </button>
        <button
          className="btns"
          onClick={() => {
            btnValue("9");
          }}
        >
          9
        </button>
        <button
          className="btns bg-orange"
          onClick={() => {
            btnValue("*");
          }}
        >
          x
        </button>
        <button
          className="btns"
          onClick={() => {
            btnValue("4");
          }}
        >
          4
        </button>
        <button
          className="btns"
          onClick={() => {
            btnValue("5");
          }}
        >
          5
        </button>
        <button
          className="btns"
          onClick={() => {
            btnValue("6");
          }}
        >
          6
        </button>
        <button
          className="btns bg-orange"
          onClick={() => {
            btnValue("-");
          }}
        >
          -
        </button>
        <button
          className="btns"
          onClick={() => {
            btnValue("1");
          }}
        >
          1
        </button>
        <button
          className="btns"
          onClick={() => {
            btnValue("2");
          }}
        >
          2
        </button>
        <button
          className="btns"
          onClick={() => {
            btnValue("3");
          }}
        >
          3
        </button>
        <button
          className="btns bg-orange"
          onClick={() => {
            btnValue("+");
          }}
        >
          +
        </button>
        <button
          className="btns"
          onClick={() => {
            btnValue("00");
          }}
        >
          00
        </button>
        <button
          className="btns"
          onClick={() => {
            btnValue("0");
          }}
        >
          0
        </button>
        <button
          className="btns equal"
          onClick={() => {
            btnValue("=");
          }}
        >
          =
        </button>
      </div>
    </div>
  );
}

export default Calculator;
