import React from "react";
function Hero() {
  return (
    <>
      <div className="hero">
        <div className="heroContant">
          <h2>YOUR FEET DESERVE THE BEST</h2>
          <p>
            YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
            SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
            SHOES.
          </p>
          <div className="buttons">
            <button className="shop">Shop Now</button>
            <button className="category">Category</button>
          </div>

          <h3 className="available">Also Available On</h3>
          <div className="brand">
            <img src="../images/flipkart.png" alt="" />
            <img src="../images/amazon.png" alt="" />
          </div>
        </div>
        <div className="heroImg">
          <img src="../images/shoe_image.png" alt="Shoe image" />
        </div>
      </div>
    </>
  );
}

export default Hero;
