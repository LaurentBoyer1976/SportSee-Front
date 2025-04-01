import {
  RadarChart as RechartsRadarChart,
  PolarGrid,
  PolarAngleAxis,
  Radar,
  ResponsiveContainer,
} from "recharts";
import PropTypes from "prop-types";
import "../../styles/scss/components/radarChart.scss";

/**
 * @description Composant RadarChart
 * @param {Array} data - Les données à afficher dans le graphique radar
 * @returns {JSX.Element} - Le composant RadarChart
 */

const RadarChart = ({ data }) => {
  // Mapping des noms en français
  const kindNameMapping = {
    cardio: "Cardio",
    energy: "Énergie",
    endurance: "Endurance",
    strength: "Force",
    speed: "Vitesse",
    intensity: "Intensité",
  };

  // Ajouter les noms traduits aux données
  const translatedData = data.map((item) => ({
    ...item,
    kindName: kindNameMapping[item.kindName], // Traduire les noms
  }));

  // Ordre souhaité des labels
  const desiredOrder = ["Intensité", "Vitesse", "Force", "Endurance", "Énergie", "Cardio"];

  // Réorganiser les données selon l'ordre souhaité
  const sortedData = translatedData.sort(
    (a, b) => desiredOrder.indexOf(a.kindName) - desiredOrder.indexOf(b.kindName)
  );

  // Info: Fonction pour personnaliser les ticks.

  /**
   * @description Fonction pour personnaliser les ticks du graphique radar 
   * @param {Object} param0 - Paramètres de la fonction
   * @param {Object} param0.payload - Charge utile contenant les données
   * @param {number} param0.x - Position X du tick
   * @param {number} param0.y - Position Y du tick
   * @param {string} param0.textAnchor - Ancrage du texte
   * @returns {JSX.Element} - Élément texte personnalisé
   */
  const renderCustomTick = ({ payload, x, y, textAnchor }) => {
    const offsets = {
      Intensité: { offsetX: 0, offsetY: -7 },
      Endurance: { offsetX: 0, offsetY: 7 },
      Cardio: { offsetX: -7, offsetY: 0 },
      Énergie: { offsetX: -7, offsetY: 0 },
      Vitesse: { offsetX: 7, offsetY: 0 },
      Force: { offsetX: 7, offsetY: 0 },
    };

    const { offsetX = 0, offsetY = 0 } = offsets[payload.value] || {};

    return (
      <text
        x={x + offsetX}
        y={y + offsetY}
        textAnchor={textAnchor}
        dominantBaseline="central"
        style={{ fontSize: "12px", fill: "#fff" }}
      >
        {payload.value}
      </text>
    );
  };

  return (
    <div className="chartContainer__radarChart">
      <ResponsiveContainer
        className="radarChart"
        width="100%"
        height="100%"
        minHeight={300}
        minWidth={250}
      >
        <RechartsRadarChart cx="50%" cy="50%" outerRadius="70%" data={sortedData}>
          <PolarGrid />
          <PolarAngleAxis
            dataKey="kindName"
            stroke="#fff"
            tickLine={false}
            tick={renderCustomTick} // Utiliser la fonction personnalisée pour les ticks
          />
          <Radar
            name=""
            dataKey="value"
            stroke="#FF0101B2"
            fill="#FF0101B2"
            fillOpacity={0.7}
          />
        </RechartsRadarChart>
      </ResponsiveContainer>
    </div>
  );
};

RadarChart.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.number.isRequired,
      kindName: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default RadarChart;
