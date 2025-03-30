// Info : Code for LineChart component
import BaseChart from "./baseChart";
import PropTypes from "prop-types";
/**
 * @description Line chart component
 * @param {Object} data - Line chart data
 * @returns {JSX.Element} - Line chart component
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
  data: PropTypes.arrayOf(
    PropTypes.shape({
      day: PropTypes.number.isRequired,
      sessionLength: PropTypes.number.isRequired,
      index: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default LineChart;
