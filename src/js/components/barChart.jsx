import React from "react";
import BaseChart from "./baseChart";

const BarChart = ({ data }) => {
  return (
    <BaseChart
      type="bar"
      data={data}
      config={{
        bars: [
          { dataKey: "calories", fill: "#8884d8" },
          { dataKey: "kilogram", fill: "#82ca9d" },
        ],
      }}
    />
  );
};

export default BarChart;