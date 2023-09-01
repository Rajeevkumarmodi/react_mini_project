import React, { useState, useRef } from "react";
import "./color_code.css";

function generateColorCode() {
  let code = "0123456789abcdef";
  let colorCode = "#";
  for (let i = 0; i < 6; i++) {
    let indexVal = code[Math.floor(Math.random() * 16)];
    colorCode += indexVal;
  }
  return colorCode;
}

function Color_code_generator() {
  const codeRef = useRef("#000000");
  const [colorCode, setColorCode] = useState("#000000");
  const [bgColor, setBgColor] = useState("#000000");
  const [isCopy, setIsCopy] = useState(false);

  function generateColor() {
    const colorCodeVal = generateColorCode();
    setColorCode(colorCodeVal);
    setBgColor(colorCodeVal);
    setIsCopy(false);
  }

  const resetVal = () => {
    setBgColor("#000000");
    setColorCode("#000000");
  };

  const copyCode = () => {
    codeRef.current?.select();
    window.navigator.clipboard.writeText(colorCode);
    setIsCopy(true);
  };

  return (
    <div className="color_code_generator">
      <h2>Color Code Generator</h2>
      <div
        className="color_box"
        style={{ backgroundColor: `${bgColor}` }}
      ></div>
      <input className="code" type="text" value={colorCode} ref={codeRef} />
      <div className="buttons">
        <button onClick={generateColor} className="generateBtn btn">
          Generate
        </button>
        <button onClick={resetVal} className="resetBtn btn">
          Reset
        </button>
        <button onClick={copyCode} className="copyBtn btn">
          {isCopy ? "Copyed" : "Copy"}
        </button>
      </div>
    </div>
  );
}

export default Color_code_generator;
