import React from "react";
import { ExpenseItem } from "./ExpenseItem";

export const ExpensesList = ({ products = [] }) => {
  return (
    <ul>
      {products.map((item) => (
        <ExpenseItem key={item.id} {...item} />
      ))}
    </ul>
  );
};
