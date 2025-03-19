import React from "react";
import "./ExpenseDate.css";
export const ExpenseDate = ({ date }) => {
  const year = date.getFullYear();
  const month = date.toLocaleString("ru-Us", { month: "long" });
  const day = date.toLocaleString("ru-Us", { day: "2-digit" });
  return (
    <div className="expense-date">
      <div className="expense-month">{month} </div>
      <div className="expense-year">{year}</div>
      <div className="expense-day">{day}</div>
    </div>
  );
};
