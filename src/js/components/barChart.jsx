import BaseChart from "./baseChart";
import PropTypes from "prop-types";

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

BarChart.propTypes = {
  data: PropTypes.array.isRequired,
};

export default BarChart;