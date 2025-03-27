import React from "react";
import BaseChart from "./baseChart";

const LineChart = ({ data }) => {
  return (
    <BaseChart
      type="line"
      data={data}
      config={{
        lines: [{ dataKey: "sessionLength", stroke: "#8884d8" }],
      }}
    />
  );
};

export default LineChart;