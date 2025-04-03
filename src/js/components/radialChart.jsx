import { RadialBarChart, RadialBar, ResponsiveContainer } from "recharts";
import PropTypes from "prop-types";
import "../../styles/scss/components/radialChart.scss";

/**
 * @description Composant RadialChart pour afficher un graphique radial.
 * @param {Array} data - Données à afficher (doit contenir un objet avec une clé `value`).
 * @returns {JSX.Element} - Composant graphique radial.
 */
const RadialChart = ({ data }) => {
  if (
    !data ||
    data.length === 0 ||
    data[0].value === null ||
    isNaN(data[0].value)
  ) {
    return <div>Aucune donnée disponible</div>;
  }

  const value = data[0].value;

  // Calculer l'angle de fin en fonction du score (x%)
  const endAngle = 90 + (360 * value) / 100; // Départ à 90° et progression selon le score

  return (
    <div className="chartContainer__radialChart">
      <ResponsiveContainer 
        width="100%"
        height={150}
        minWidth={150}
      >
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
          {/* Titre "Score" en haut à gauche */}
          <text
            x="10%"
            y="10%"
            textAnchor="start"
            dominantBaseline="middle"
            style={{ fontSize: "15px", fontWeight: "500", fill: "#20253A" }}
          >
            Score
          </text>

          <RadialBar
            minAngle={15}
            clockWise
            dataKey="value"
            fill="#FF0000"
            background={{ fill: "#FBFBFB" }}
          />
          {/* Texte au centre du graphique */}
          <text
            x="50%"
            y="50%"
            textAnchor="middle"
            dominantBaseline="middle"
            style={{ fontSize: "26px", fontWeight: "700", fill: "#282D30" }}
          >
            {`${value}%`}
          </text>
          <text
            x="50%"
            y="60%"
            textAnchor="middle"
            dominantBaseline="middle"
            style={{ fontSize: "16px", fill: "#282D30" }}
          >
            de votre objectif
          </text>
        </RadialBarChart>
      </ResponsiveContainer>
    </div>
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
