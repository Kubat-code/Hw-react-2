import React from "react";
import { ExpenseDate } from "./ExpenseDate";
import "./ExpenseItem.css";
export const ExpenseItem = ({ title, amount, date }) => {
  return (
    <li className="expense-item">
      <div className="container-text_date">
        <ExpenseDate date={date} />
        <h2>{title}</h2>
      </div>
      <div className="expense-itemdescription">
        <div className="expense-itemprice">${amount}</div>
      </div>
    </li>
  );
};
