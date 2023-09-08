import React from "react";
import "./index.css";

function Cards(props) {
  return (
    <>
      <div className="card">
        <img src={props.imgSrc} alt="" />
        <h2>{props.pName}</h2>
        <h3>{props.price}</h3>
        <button>Buy Now</button>
      </div>
    </>
  );
}

export default Cards;
