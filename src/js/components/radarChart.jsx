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

  // Fonction pour personnaliser les ticks
  const renderCustomTick = ({ payload, x, y, textAnchor }) => {
    const offsets = {
      Intensité: { offsetX: 0, offsetY: -1 * window.innerHeight / 100 }, // Using vh for vertical offset
      Endurance: { offsetX: 0, offsetY: 1 * window.innerHeight / 100 }, // Using vh for vertical offset
      Cardio: { offsetX: 0.2* window.innerWidth / 100, offsetY: 0 }, // Using vw for horizontal offset
      Énergie: { offsetX: 0.2 * window.innerWidth / 100, offsetY: 0 }, // Using vw for horizontal offset
      Vitesse: { offsetX: -0.2 * window.innerWidth / 100, offsetY: 0 }, // Using vw for horizontal offset
      Force: { offsetX: 0 * window.innerWidth / 100, offsetY: 0 }, // Using vw for horizontal offset
    };

    const { offsetX = 0, offsetY = 0 } = offsets[payload.value] || {};

    const fontSize = window.innerWidth < 1200 ? "1.1vh" : "1.1vh"; // Adjust font size for resolutions below 1200px

    return (
      <text
        x={x + offsetX}
        y={y + offsetY}
        textAnchor={textAnchor}
        dominantBaseline="central"
        style={{
          fontSize: fontSize,
          fill: "#fff",
          whiteSpace: "pre-wrap", // Allow text wrapping
          overflow: "visible", // Ensure text is not clipped
        }}
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
        minHeight={150}
        minWidth={150}
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
