import React, { useEffect, useState } from "react";
import { getUserPerformance } from "../services/indexService.js";
import {
  RadarChart as RechartsRadarChart,
  PolarGrid,
  PolarAngleAxis,
  Radar,
  Legend,
  ResponsiveContainer,
  PolarRadiusAxis,
} from "recharts";

const RadarChart = ({ userId }) => {
  const [keyData, setKeyData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userPerformance = await getUserPerformance(userId);
        console.log("userPerformance:", userPerformance);

        if (!userPerformance || !userPerformance.data) {
          console.error("Performance data is missing or undefined");
          return;
        }

        // Map des noms des catégories
        const kindMapping = userPerformance.kind;

        // Formatez les données pour le graphique
        const formattedData = userPerformance.data.map((item) => ({
          subject: kindMapping[item.kind], // Associe le nom de la catégorie
          value: item.value, // Valeur associée
        }));

        setKeyData(formattedData);
      } catch (error) {
        console.error("Error fetching user performance data:", error);
      }
    };

    fetchData();
  }, [userId]);

  return (
    <ResponsiveContainer className="radarChart" width="100%" height="100%">
      <RechartsRadarChart cx="50%" cy="50%" outerRadius="80%" data={keyData}>
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" />
        <PolarRadiusAxis domain={[0, 150]} /> {/* Ajustez le domaine si nécessaire */}
        <Radar name="Performance" dataKey="value" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
        <Legend />
      </RechartsRadarChart>
    </ResponsiveContainer>
  );
};

export default RadarChart;