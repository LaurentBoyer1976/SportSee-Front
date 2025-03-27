import BaseChart from "./baseChart";
import PropTypes from "prop-types";

/**
 * @description Composant pour afficher un graphique en barres.
 * @param {Array} data - Données à aff
 * @returns {JSX.Element} - Composant graphique en barres.
 */

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