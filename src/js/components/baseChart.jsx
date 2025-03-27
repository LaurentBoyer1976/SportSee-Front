import {
  BarChart as RechartsBarChart,
  LineChart as RechartsLineChart,
  Bar,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import PropTypes from "prop-types";

/**
 * Composant générique pour afficher différents types de graphiques.
 * @param {string} type - Type de graphique ("bar" ou "line").
 * @param {Array} data - Données à afficher.
 * @param {Object} config - Configuration spécifique au graphique.
 * @returns {JSX.Element} - Composant graphique.
 */
const BaseChart = ({ type, data, config }) => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      {type === "bar" ? (
        <RechartsBarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          {config.bars.map((bar, index) => (
            <Bar key={index} dataKey={bar.dataKey} fill={bar.fill} />
          ))}
        </RechartsBarChart>
      ) : type === "line" ? (
        <RechartsLineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          {config.lines.map((line, index) => (
            <Line
              key={index}
              type="monotone"
              dataKey={line.dataKey}
              stroke={line.stroke}
            />
          ))}
        </RechartsLineChart>
      ) : null}
    </ResponsiveContainer>
  );
};

BaseChart.propTypes = {
  type: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
  config: PropTypes.shape({
    bars: PropTypes.array,
    lines: PropTypes.array,
  }).isRequired,
};

export default BaseChart;
