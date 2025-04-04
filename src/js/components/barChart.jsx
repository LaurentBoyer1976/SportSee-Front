import {
  BarChart as RechartsBarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import PropTypes from "prop-types";
import "../../styles/scss/components/barChart.scss";
import "../../styles/scss/components/legend.scss";
/**
 * @description Composant pour afficher un graphique en barres avec deux axes Y (calories et kilogrammes).
 * @param {Array} data - Données à afficher.
 * @returns {JSX.Element} - Composant graphique en barres.
 */

const BarChart = ({ data }) => {
  // Transformation des données pour formater les dates
  const processedData = data.map((item) => {
    const date = new Date(item.day);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    return {
      ...item,
      day: `${day}/${month}`,
    };
  });

  const userTickCount = [...new Set(processedData.map((item) => item.kilogram))].sort((a, b) => a - b);
  const maxKilogram = Math.max(...userTickCount) + 1;
  const minKilogram = Math.min(...userTickCount) - 1;
  const userTicks = [...new Set([maxKilogram, minKilogram, ...userTickCount])].sort((a, b) => a - b);

  // Données pour la légende
  const legendData = [
    { color: "red", label: "Calories brûlées (kCal)" },
    { color: "black", label: "Poids (kg)" },
  ];

  return (
    <div className="chartContainer__barChart">
      {/* Légende dynamique */}
      <Legend data={legendData} />

      <ResponsiveContainer width="100%" height="100%"minWidth={200} minHeight={120}>
        <RechartsBarChart
          data={processedData}
          barGap={10}
          barCategoryGap="10%"
          barSize={7}
        >
          {/* Grille cartésienne */}
          <CartesianGrid strokeDasharray="3 3" vertical={false} />

          {/* Axe X */}
          <XAxis
            dataKey="day"
            tickLine={false}
            axisLine={{ stroke: "#c8c8c8" }}
            tickMargin={10}
            stroke="#9B9EAC"
          />

          {/* Axe Y pour les kilogrammes */}
          <YAxis
            yAxisId="right"
            orientation="right"
            domain={[minKilogram, maxKilogram]}
            ticks={userTicks}
            tickCount={userTicks.length}
            tickMargin={10}
            allowDecimals={false}
            tickFormatter={(value) => `${value}`}
            axisLine={false}
            tickLine={false}
            stroke="#9B9EAC"
          />

          {/* Axe Y pour les calories (masqué) */}
          <YAxis
            yAxisId="left"
            domain={[0, Math.max(...processedData.map((item) => item.calories)) + 50]}
            tickCount={5}
            hide
          />

          {/* Tooltip personnalisé */}
          <Tooltip
            content={<CustomTooltip />}
            cursor={{ fill: "rgba(196, 196, 196, 0.5)" }}
          />
          
          {/* Barres pour les kilogrammes */}
          <Bar
            yAxisId="right"
            dataKey="kilogram"
            fill="#282D30"
            radius={[3, 3, 0, 0]}
            name="Poids (kg)"
          />
          {/* Barres pour les calories */}
          <Bar
            yAxisId="left"
            dataKey="calories"
            fill="#E60000"
            radius={[3, 3, 0, 0]}
            name="Calories brûlées (kCal)"
          />

        
        </RechartsBarChart>
      </ResponsiveContainer>
    </div>
  );
};

BarChart.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      day: PropTypes.string.isRequired,
      kilogram: PropTypes.number.isRequired,
      calories: PropTypes.number.isRequired,
    })
  ).isRequired,
};
/**
 * @description Tooltip personnalisé pour afficher les valeurs des barres.
 */
const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const kilogramData = payload.find((p) => p.dataKey === "kilogram");
    const caloriesData = payload.find((p) => p.dataKey === "calories");

    return (
      <div
        style={{
          backgroundColor: "#E60000",
          color: "#FFFFFF",
          padding: "10px",
          borderRadius: "5px",
          fontSize: "12px",
          fontWeight: "bold",
        }}
      >
        <p style={{ margin: 0 }}>{`${kilogramData?.value || 0}kg`}</p>    
        <p style={{ margin: 0 }}>{`${caloriesData?.value || 0}kCal`}</p> 
      </div>
    );
  }

  return null;
};

CustomTooltip.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.array,
};

const Legend = ({ data }) => {
  return (
    <div className="legend">
      <h3 className="legend__title">Activité quotidienne</h3>
      <div className="legend__container">
        <ul className="legend__list">
          {data.map((item, index) => (
            <li key={index} className="legend__item">
              {/* Point coloré */}
              <span
                className="legend__color"
                style={{
                  backgroundColor: item.color, // Couleur dynamique
                  display: "inline-block",
                  width: "10px",
                  height: "10px",
                  borderRadius: "50%",
                  marginRight: "10px",
                }}
              ></span>
              {/* Texte de la légende */}
              <span className="legend__label">{item.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

Legend.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      color: PropTypes.string.isRequired, // Couleur du point
      label: PropTypes.string.isRequired, // Texte de la légende
    })
  ).isRequired,
};

export default BarChart;