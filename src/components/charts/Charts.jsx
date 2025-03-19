import React from "react";
import "./Charts.css";
import { ChartBar } from "./ChartBar";
export const Charts = ({ expenses }) => {
  const maxmumPrice = 5000;
  const month = [
    {
      label: "Январь",
      currentPrice: 0,
    },
    {
      label: "Февраль",
      currentPrice: 0,
    },
    {
      label: "Март",
      currentPrice: 0,
    },
    {
      label: "Апрель",
      currentPrice: 0,
    },
    {
      label: "Май",
      currentPrice: 0,
    },
    {
      label: "Июнь",
      currentPrice: 0,
    },
    {
      label: "Июль",
      currentPrice: 0,
    },
    {
      label: "Август",
      currentPrice: 0,
    },
    {
      label: "Сентябрь",
      currentPrice: 0,
    },
    {
      label: "Октябрь",
      currentPrice: 0,
    },
    {
      label: "Ноябрь",
      currentPrice: 0,
    },
    {
      label: "Декобрь",
      currentPrice: 0,
    },
  ];
  expenses.forEach((i) => {
    const FilterExpense = i.date.getMonth();
    month[FilterExpense].currentPrice += i.amount;
  });
  return (
    <div className="chart">
      {month.map((i) => (
        <ChartBar key={i.label} {...i} maxmumPrice={maxmumPrice} />
      ))}
    </div>
  );
};
