import React, { useEffect, useState } from "react";
import { getUserActivity, getUserAverageSessions, getUserPerformance } from "../services/indexService";
import BarChart from "./../components/barChart.jsx";
import LineChart from "./../components/lineChart.jsx";
import RadarChart from "./../components/radarChart.jsx";
import RadialChart from "./../components/radialChart.jsx";


const ChartsLayout = ({ userId }) => {
  const [activity, setActivity] = useState([]);
  const [averageSessions, setAverageSessions] = useState([]);
  const [performance, setPerformance] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const activityData = await getUserActivity(userId);
        const averageSessionsData = await getUserAverageSessions(userId);
        const performanceData = await getUserPerformance(userId);

        console.log("Performance.data:", performanceData);

        setActivity(activityData.sessions); // Assurez-vous de passer les sessions
        setAverageSessions(averageSessionsData.sessions); // Assurez-vous de passer les sessions
        setPerformance(performanceData); // Passez l'objet complet
        console.log("Performance Data:", performance.data);
      } catch (error) {
        console.error("Error fetching chart data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [userId]);

  if (isLoading) {
    return <div>Loading charts...</div>;
  }

  return (
    <div className="chartsLayout">
      <BarChart data={activity} />
      <div className="charts__container" style={{ display: "flex", width: "100%", minHeight: "400px", height: "100%" }}> 
          <LineChart data={averageSessions} />
          <RadarChart data={performance.data} />
          <RadialChart data={performance} />
      </div>
      
    </div>
  );
};

export default ChartsLayout;