import React from "react";
import {
  RadarChart as RechartsRadarChart,
  PolarGrid,
  PolarAngleAxis,
  Radar,
  Legend,
  ResponsiveContainer,
  PolarRadiusAxis,
} from "recharts";

/**
 * @description Composant RadarChart
 * @param {Array} data - Les données à afficher dans le graphique radar 
 * @returns {JSX.Element} - Le composant RadarChart
 */

const RadarChart = ({ data }) => {


  const maxValue = Math.max(...data.map((item) => item.value)); // Trouvez la valeur maximale pour le domaine
 
  return (
    <ResponsiveContainer className="radarChart" width="100%" height= "100%" minHeight={200}>
      <RechartsRadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
        <PolarGrid />
        <PolarAngleAxis dataKey="kindName" /> {/* Utilisez `kindName` pour les labels */}
        <PolarRadiusAxis angle={360} domain={[0, maxValue]} /> {/* Ajustez le domaine si nécessaire */}
        <Radar name="Performance" dataKey="value" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
        <Legend />
      </RechartsRadarChart>
    </ResponsiveContainer>
  );
};

export default RadarChart;