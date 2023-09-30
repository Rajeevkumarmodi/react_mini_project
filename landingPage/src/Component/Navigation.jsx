import React from "react";

// import a from "../../public/images/shoe_image.png"

function Navigation() {
  return (
    <>
      <nav>
        <div className="logo">
          <img src="../images/brand_logo.png" alt="logo" />
        </div>
        <ul>
          <li> MENU</li>
          <li> LOCATION</li>
          <li> ABOUT</li>
          <li> CONTACT</li>
        </ul>
        <button>Login</button>
      </nav>
    </>
  );
}

export default Navigation;
