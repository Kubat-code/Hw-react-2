import React from "react";
import "./Button.css";
const Button = ({ children, type, onClick, ...rest }) => {
  return (
    <button type={type} onClick={onClick} {...rest}>
      {children}
    </button>
  );
};
export default Button;
