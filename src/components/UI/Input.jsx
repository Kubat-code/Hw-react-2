import React from "react";
import "./Input.css";
export const Input = ({ value, type, id, onChange, ...rest }) => {
  return (
    <input type={type} id={id} onChange={onChange} value={value} {...rest} />
  );
};
