import React, { useState } from "react";
import { ExpensesList } from "./ExpensesList";
import { Card } from "../UI/Card";
import { Expensefilter } from "../expense-filter/Expense-filter";
import { Charts } from "../charts/Charts";

export const Expenses = ({ array }) => {
  const [selectValue, setSelector] = useState("2025");
  const FilterExpense = array.filter(
    (item) => item.date.getFullYear().toString() === selectValue
  );
  return (
    <Card>
      <Expensefilter
        value={selectValue}
        onChange={(e) => setSelector(e.target.value)}
      />
      <Charts expenses={array} />
      <ExpensesList products={FilterExpense} />
    </Card>
  );
};
