// Info : Code for LineChart component
import BaseChart from "./baseChart";
import PropTypes from "prop-types";
/**
 * @description Line chart component
 * @param {Object} data - Line chart data
 * @returns 
 */
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
LineChart.propTypes = {
  data: PropTypes.object.isRequired,
};

export default LineChart;
