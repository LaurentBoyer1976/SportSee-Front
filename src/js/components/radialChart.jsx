import React from "react";
import { RadialBarChart, RadialBar, Legend } from "recharts";

const RadialChart = ({ data }) => {
  return (
    <RadialBarChart
      width={500}
      height={300}
      cx="50%"
      cy="50%"
      innerRadius="10%"
      outerRadius="80%"
      barSize={10}
      data={data}
    >
      <RadialBar
        minAngle={15}
        label={{ position: "insideStart", fill: "#fff" }}
        background
        clockWise
        dataKey="value"
      />
      <Legend iconSize={10} layout="vertical" verticalAlign="middle" align="right" />
    </RadialBarChart>
  );
};

export default RadialChart;