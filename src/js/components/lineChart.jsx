import {
  LineChart as RechartsLineChart,
  Line,
  XAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import PropTypes from "prop-types";
import "../../styles/scss/components/lineChart.scss";

const LineChart = ({ data }) => {
  // Conversion des numéros des jours en lettres
  const daysOfWeek = ["L", "M", "M", "J", "V", "S", "D"];
  const processedData = data.map((item) => ({
    ...item,
    day: daysOfWeek[item.day - 1], // Convertit le numéro du jour en lettre
  }));

  // Légende personnalisée
  const CustomLegend = () => {
    return <p style={{ color: "#FFFFFF", fontSize: "16px", fontWeight: "bold", margin: 0, opacity: 0.6, maxWidth: "150px"}}>Durée moyenne des sessions</p>;
  };

  // Tooltip personnalisé
  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div
          style={{
            backgroundColor: "#FFFFFF",
            color: "#000",
            padding: "10px",
            borderRadius: "5px",
            fontSize: "12px",
            zIndex: 10,
          }}
        >
          <p style={{ margin: 0 }}>{`${payload[0].value} min`}</p>
        </div>
      );
    }
    return null;
  };

  CustomTooltip.propTypes = {
    active: PropTypes.bool,
    payload: PropTypes.arrayOf(
      PropTypes.shape({
        value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      })
    ),
  };

  return (
    <div className="chartContainer__lineChart">
      <ResponsiveContainer
        className="lineChart"
        width="100%"
        height="100%"
        minHeight={300}
        minWidth={250}
      >
        {/* Graphique linéaire */}
        <RechartsLineChart
          data={processedData}
          margin={{
            top: 50,
            right: 20,
            left: 20,
            bottom: 20,
          }}
        >
          {/* Définition du dégradé */}
          <defs>
            <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="0">
              <stop offset="79.27%" stopColor="#FFFFFF" />
              <stop offset="17.73%" stopColor="rgba(255, 255, 255, 0.403191)" />
            </linearGradient>
          </defs>

          {/* Légende */}
          <Legend verticalAlign="top" content={<CustomLegend />} />

          {/* Tooltip */}
          <Tooltip content={<CustomTooltip />} />

          {/* Axe X */}
          <XAxis
            dataKey="day"
            tickLine={false}
            axisLine={false}
            tick={{ fill: "#FFFFFF", fontSize: 12, opacity: 0.6 }}
          />

          {/* Ligne avec le dégradé */}
          <Line
            type="monotone"
            dataKey="sessionLength"
            stroke="url(#lineGradient)" // Utilisation du dégradé
            strokeWidth={2}
            dot={false}
            activeDot={{ r: 8 }}
          />
        </RechartsLineChart>
      </ResponsiveContainer>
    </div>
  );
};

LineChart.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      day: PropTypes.number.isRequired, // Numéro du jour (1 pour lundi, 2 pour mardi, etc.)
      sessionLength: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default LineChart;
