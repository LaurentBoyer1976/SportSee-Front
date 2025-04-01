import {
  LineChart as RechartsLineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import PropTypes from "prop-types";

const LineChart = ({ data }) => {
  const maxValue = Math.ceil(Math.max(...data.map((item) => item.sessionLength || 0)));

  return (
    <ResponsiveContainer width="100%" height={300}>
      <RechartsLineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="day" />
        <YAxis
          domain={[0, maxValue]}
          tickCount={5}
          allowDecimals={false}
          tickFormatter={(value) => `${value} min`}
        />
        <Tooltip />
        <Line type="monotone" dataKey="sessionLength" stroke="#8884d8" />
      </RechartsLineChart>
    </ResponsiveContainer>
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
