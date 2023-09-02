import React, { useState } from "react";
import style from "./input_field.module.css";

function Input_field(props) {
  console.log(props);
  const propsName = props.Name;
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    email: "",
    password: "",
    cPassword: "",
  });

  const formHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setFormData({ ...formData, [name]: value });
  };

 
  return (
    <>
      <div className={style.all_input_field}>
        <h3 className={style.icons}>{props.icon}</h3>
        <input
          onChange={formHandler}
          className={style.input}
          type={props.type}
          placeholder={props.pName}
          value={formData.propsName}
          name={propsName}
          required
        />
      </div>
    </>
  );
}

export default Input_field;
