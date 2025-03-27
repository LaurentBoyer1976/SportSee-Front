
import { RadialBarChart, RadialBar, ResponsiveContainer } from "recharts";
import PropTypes from "prop-types";

/**
 * @description Composant RadialChart pour afficher un graphique radial.
 * @param {Array} data - Données à afficher (doit contenir un objet avec une clé `value`).
 * @returns {JSX.Element} - Composant graphique radial.
 */
const RadialChart = ({ data }) => {
  if (!data || data.length === 0 || data[0].value === null || isNaN(data[0].value)) {

    return <div>Aucune donnée disponible</div>;
  }

  const value = data[0].value;

  // Calculer l'angle de fin en fonction du score (x%)
  const endAngle = 90 + (360 * value) / 100; // Départ à 90° et progression selon le score

  return (
    <ResponsiveContainer width="100%" height={300}>
      <RadialBarChart
        cx="50%"
        cy="50%"
        innerRadius="70%"
        outerRadius="90%"
        barSize={10}
        data={data}
        startAngle={90} // Départ à gauche de l'axe vertical
        endAngle={endAngle} // Angle calculé en fonction du score
      >
        <RadialBar
          minAngle={15}
          clockWise
          dataKey="value"
          fill="#8884d8"
          background={{ fill: "#eee" }}
        />
        {/* Texte au centre du graphique */}
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dominantBaseline="middle"
          style={{ fontSize: "24px", fontWeight: "bold" }}
        >
          {`${value}%`}
        </text>
        <text
          x="50%"
          y="60%"
          textAnchor="middle"
          dominantBaseline="middle"
          style={{ fontSize: "16px", fill: "#555" }}
        >
          de votre objectif
        </text>
      </RadialBarChart>
    </ResponsiveContainer>
  );
};
RadialChart.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default RadialChart;
