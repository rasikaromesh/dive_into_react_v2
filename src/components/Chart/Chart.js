import React from "react";

import ChartBar from "./ChartBar";

import "./Chart.css";

const Chart = (props) => {
  const maxValue = Math.max(
    ...props.dataPoints.map((dataPoint) => dataPoint.value)
  );
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          value={dataPoint.value}
          lable={dataPoint.lable}
          maxValue={maxValue}
          key={dataPoint.lable}
        />
      ))}
    </div>
  );
};

export default Chart;
