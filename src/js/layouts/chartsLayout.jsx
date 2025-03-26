import React, { useEffect, useState } from "react";
import { getUserInfo, getUserActivity, getUserAverageSessions, getUserPerformance } from "../services/indexService";
import BarChart from "./../components/barChart.jsx";
import LineChart from "./../components/lineChart.jsx";
import RadarChart from "./../components/radarChart.jsx";
import RadialChart from "./../components/radialChart.jsx";

const ChartsLayout = ({ userId }) => {
  const [score, setScore] = useState(null);
  const [activity, setActivity] = useState([]);
  const [averageSessions, setAverageSessions] = useState([]);
  const [performance, setPerformance] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const scoreData = await getUserInfo(userId);
        const activityData = await getUserActivity(userId);
        const averageSessionsData = await getUserAverageSessions(userId);
        const performanceData = await getUserPerformance(userId);

        console.log("Score Data:", scoreData.score);
        setScore(scoreData.score); // Passez le score brut
        setActivity(activityData.sessions);
        setAverageSessions(averageSessionsData.sessions);
        setPerformance(performanceData);
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

  // Reformatez le score pour RadialChart
  const formattedScore = [{ name: "Score", value: score * 100 }];

  return (
    <div className="chartsLayout">
      <BarChart data={activity} />
      <div className="charts__container" style={{ display: "flex", width: "100%", minHeight: "400px", height: "100%" }}>
        <LineChart data={averageSessions} />
        <RadarChart data={performance.data} />
        <RadialChart data={formattedScore} /> {/* Passez le score formaté */}
      </div>
    </div>
  );
};

export default ChartsLayout;