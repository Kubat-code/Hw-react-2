import React from "react";
import "./Expense-filter.css";
export const Expensefilter = ({ value, onChange }) => {
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__controls">
        <label htmlFor="filterID" className="expenses-filter__label">
          Фильтер по году
        </label>
        <select
          id="filterID"
          className="expense-filter-select"
          value={value}
          onChange={onChange}
        >
          <option value="2022">2022</option>
          <option value="2023">2023</option>
          <option value="2024">2024</option>
          <option value="2025">2025</option>
        </select>
      </div>
    </div>
  );
};
