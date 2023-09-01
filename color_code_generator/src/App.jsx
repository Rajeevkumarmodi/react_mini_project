import { useState } from "react";
import "./App.css";
import Color_code_generator from "./componants/Color_code_generator";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Color_code_generator />
    </>
  );
}

export default App;
