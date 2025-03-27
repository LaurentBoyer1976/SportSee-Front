import React from "react";
import BarChart from "./../components/barChart.jsx";
import LineChart from "./../components/lineChart.jsx";
import RadarChart from "./../components/radarChart.jsx";
import RadialChart from "./../components/radialChart.jsx";
import useFetchUserActivity from "../../hooks/useFetchUserActivity";
import useFetchUserAverageSessions from "../../hooks/useFetchUserAverageSessions";
import useFetchUserPerformance from "../../hooks/useFetchUserPerformance";
import useFetchUserInfo from "../../hooks/useFetchUserInfo";

const ChartsLayout = ({ userId }) => {
  const activity = useFetchUserActivity(userId);
  const averageSessions = useFetchUserAverageSessions(userId);
  const performance = useFetchUserPerformance(userId);
  const userInfo = useFetchUserInfo(userId); // Récupère les informations utilisateur, y compris le score

  // Ajout de logs pour déboguer les données
  console.log("Activity data:", activity);
  console.log("Average sessions data:", averageSessions);
  console.log("Performance data:", performance);
  console.log("User info data:", userInfo);

  if (!activity || !averageSessions || !performance || !userInfo || userInfo.score == null) {
    console.error("ChartsLayout: Les données sont manquantes ou invalides.");
    return <div>Chargement des graphiques...</div>;
  }

  const formattedScore = [{ name: "Score", value: userInfo.score }]; // Utilise le score depuis userInfo

  return (
    <div className="chartsLayout">
      <BarChart data={activity.sessions} />
      <div
        className="charts__container"
        style={{ display: "flex", width: "100%", minHeight: "400px", height: "100%" }}
      >
        <LineChart data={averageSessions.sessions} />
        <RadarChart data={performance.data} />
        <RadialChart data={formattedScore} />
      </div>
    </div>
  );
};

export default ChartsLayout;