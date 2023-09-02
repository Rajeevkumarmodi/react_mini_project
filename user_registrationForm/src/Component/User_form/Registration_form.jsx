import React from "react";
import style from "./form.module.css";
import Input_field from "../Input/Input_field";

import { VscAccount } from "react-icons/vsc";
import { RiMailAddLine } from "react-icons/ri";
import { RiPhoneFill } from "react-icons/ri";
import { RiLockPasswordFill } from "react-icons/ri";

function Registration_form() {
  function submitForm(e) {
    alert("You are Register 👍");
    // e.preventDefault();
  }

  return (
    <>
      <div className={style.form_container}>
        <h2 className={style.form_heading}>Registration Form</h2>
        <form onSubmit={submitForm}>
          <div className={style.form_input}>
            <Input_field
              pName="Enter Your Name"
              icon={<VscAccount />}
              Name="name"
              type="text"
            />
            <Input_field
              pName="Enter Your Mobile Number"
              icon={<RiPhoneFill />}
              Name="number"
              type="number"
            />
            <Input_field
              pName="Enter Your Email"
              icon={<RiMailAddLine />}
              Name="email"
              type="email"
            />
            <Input_field
              pName="Creat Password"
              icon={<RiLockPasswordFill />}
              Name="password"
              type="password"
            />
            <Input_field
              pName="Confirm Password"
              icon={<RiLockPasswordFill />}
              Name="cPassword"
              type="text"
            />
            <div className={style.form_checkbox}>
              <input type="checkbox" required />
              <p>I Accept all term & condition</p>
            </div>
          </div>

          <button className={style.registerBtn}>Register Now</button>
          <p className={style.already}>
            Already have account?{" "}
            <span className={style.loginText}>Login Now</span>
          </p>
        </form>
      </div>
    </>
  );
}

export default Registration_form;
