import React, { useEffect, useState } from "react";
import { getUserActivity, getUserAverageSessions, getUserPerformance } from "../services/indexService";
import BarChart from "./BarChart";
import LineChart from "./LineChart";
import RadarChart from "./RadarChart";
import RadialChart from "./RadialChart";

const ChartsLayout = ({ userId }) => {
  const [activity, setActivity] = useState([]);
  const [averageSessions, setAverageSessions] = useState([]);
  const [performance, setPerformance] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const activityData = await getUserActivity(userId);
        const averageSessionsData = await getUserAverageSessions(userId);
        const performanceData = await getUserPerformance(userId);

        setActivity(activityData);
        setAverageSessions(averageSessionsData);
        setPerformance(performanceData);
      } catch (error) {
        console.error("Error fetching chart data:", error);
      }
    };

    fetchData();
  }, [userId]);

  if (!activity.length || !averageSessions.length || !performance) {
    return <div>Loading charts...</div>;
  }

  return (
    <div className="chartsLayout">
      <BarChart data={activity} />
      <LineChart data={averageSessions} />
      <RadarChart data={performance} />
      <RadialChart data={performance} />
    </div>
  );
};

export default ChartsLayout;