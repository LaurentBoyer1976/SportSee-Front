import React from "react";
import { BarChart as RechartsBarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

const BarChart = ({ data }) => {
  return (
    <RechartsBarChart width={500} height={300} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="day" />
      <YAxis />
      <Tooltip />
      <Bar dataKey="calories" fill="#8884d8" />
      <Bar dataKey="kilogram" fill="#82ca9d" />
    </RechartsBarChart>
  );
};

export default BarChart;