import React, { useState } from "react";

const DigitalClock = () => {
  const clock = () => {
    let date = new Date().toLocaleTimeString();
    return date;
  };

  const [cTime, updateTime] = useState(clock());
  setInterval(() => {
    updateTime(clock());
  }, 1000);
  return (
    <>
      <h1 style={{ color: "white" }}>Digital Clock</h1>

      <h1 style={{ color: "white" }}>{cTime}</h1>
    </>
  );
};

export default DigitalClock;
