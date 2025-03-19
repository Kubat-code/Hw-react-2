import React from "react";
import "./FormInput.css";
import { Input } from "./Input";
export const FormInput = ({ value, inputType, lableText, id, onChange }) => {
  return (
    <div className="form-input">
      <label htmlFor={id}>{lableText}</label>
      <Input type={inputType} id={id} value={value} onChange={onChange} />
    </div>
  );
};
