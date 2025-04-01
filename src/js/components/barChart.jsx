import {
  BarChart as RechartsBarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import PropTypes from "prop-types";
import "../../styles/scss/components/barChart.scss";
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

  return (
    <div className="chartContainer__barChart">
      <ResponsiveContainer width="100%" minWidth={700} height={300}>
        <RechartsBarChart data={processedData} barGap={8} barCategoryGap="20%" barSize={7}>
          {/* Grille cartésienne */}
          <CartesianGrid strokeDasharray="3 3" vertical={false} />

          {/* Axe X */}
          <XAxis
            dataKey="day"
            tickLine={false}
            axisLine={{ stroke: "#c8c8c8" }}
            tickMargin={10}
            scale="point"
            padding={{ left: 16, right: 12 }}
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

          {/* Légende personnalisée */}
          <Legend
            content={<CustomLegend />}
            wrapperStyle={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
            }}
          />

          {/* Tooltip personnalisé */}
          <Tooltip
            content={<CustomTooltip />}
            cursor={{ fill: "rgba(196, 196, 196, 0.5)" }}
          />

          {/* Barres pour les calories */}
          <Bar
            yAxisId="left"
            dataKey="calories"
            fill="#E60000"
            radius={[3, 3, 0, 0]}
            name="Calories brûlées (kCal)"
          />

          {/* Barres pour les kilogrammes */}
          <Bar
            yAxisId="right"
            dataKey="kilogram"
            fill="#282D30"
            radius={[3, 3, 0, 0]}
            name="Poids (kg)"
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
 * @description Légende personnalisée avec un titre.
 */
const CustomLegend = ({ payload }) => {
  return (
    <div style={{ 
      display: "flex",
      flexDirection: "row",
      width: "100%",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "20px" }}>
      {/* Titre du graphique */}
      <p style={{ margin: 0, fontWeight: 500, fontSize: 15, color: "#20253A" }}>Activité quotidienne</p>
      {/* Éléments de la légende */}
      <ul style={{ display: "flex", listStyleType: "none", padding: 0, margin: "10px 0 0 0" }}>
        {payload.map((entry, index) => (
          <li key={`item-${index}`} style={{ display: "flex", alignItems: "center", marginBottom: 5 }}>
            <div
              style={{
                width: 10,
                height: 10,
                backgroundColor: entry.color,
                borderRadius: "50%",
                marginRight: 10,
              }}
            ></div>
            <span style={{ color: "#74798C", fontSize: 14 }}>
              {entry.dataKey === "kilogram" ? "Poids (kg)" : "Calories brûlées (kCal)"}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

CustomLegend.propTypes = {
  payload: PropTypes.array,
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

export default BarChart;