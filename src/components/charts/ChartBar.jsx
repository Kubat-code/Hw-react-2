import React from "react";
import "./ChartBar.css";
export const ChartBar = ({ label, maxmumPrice, currentPrice }) => {
  const fillHeight = (100 * currentPrice) / maxmumPrice;
  return (
    <div className="chart-containe">
      <div className="chart-inner">
        <div style={{ height: `${fillHeight}%` }} className="chart-bar"></div>
      </div>
      <p className="chart-label">{label}</p>
    </div>
  );
};
