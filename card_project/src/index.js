import React from "react";
import ReactDom from "react-dom";
import Cards from "./App";
import cardDetails from "./cardDetails";

import "./index.css";

const heading = {
  fontSize: "25px",
  textAlign: "center",
  backgroundColor: "gray",
  padding: "10px",
  marginBlock: "10px",
  color: "white",
};

ReactDom.render(
  <>
    <h2 style={heading}>Product Cards </h2>

    <div className="cards">
      {cardDetails.map((val) => {
        return (
          <Cards imgSrc={val.pImage} pName={val.pName} price={val.price} />
        );
      })}
    </div>
  </>,
  document.getElementById("root")
);
