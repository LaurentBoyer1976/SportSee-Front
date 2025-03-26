import React from "react";
import { RadialBarChart, RadialBar } from "recharts";

const RadialChart = ({ data }) => {
  console.log("RadialChart data:", data); // Vérifiez que les données sont correctes

  // Récupérez la valeur (par exemple, 12 pour 12%)
  const value = data[0]?.value || 0;

  // Calculer l'angle de fin en fonction de la valeur
  const endAngle = 180 + (360 * value) / 100; // Convertit la valeur en angle (12% -> 180° + 43.2°)

  return (
    <RadialBarChart
      width={500}
      height={300}
      cx="50%"
      cy="50%"
      startAngle={180} // Départ à gauche (180°)
      endAngle={endAngle} // Fin en fonction de la valeur
      innerRadius="50%"
      outerRadius="80%"
      barSize={10}
      data={data} // Utilisez les données formatées
    >
      {/* Texte "Score" en haut à gauche */}
      <text
        x="10%" // Position horizontale en haut à gauche
        y="10%" // Position verticale en haut à gauche
        textAnchor="start" // Aligne le texte à gauche
        dominantBaseline="hanging" // Aligne le texte en haut
        style={{ fontSize: "16px", fontWeight: "bold", fill: "#000" }} // Style du texte
      >
        Score
      </text>

      <RadialBar
        minAngle={15} // Angle minimum pour éviter une barre trop fine
        background={{ fill: "#ddd" }} // Couleur de fond du cercle (gris clair)
        clockWise={true} // Sens horaire
        dataKey="value" // Utilisez la clé `value` pour les valeurs
        fill="#8884d8" // Couleur de la barre correspondant à la valeur
      />
      {/* Texte au centre du cercle */}
      <text
        x="50%" // Position horizontale au centre
        y="50%" // Position verticale au centre
        textAnchor="middle" // Centre le texte horizontalement
        dominantBaseline="middle" // Centre le texte verticalement
        style={{ fontSize: "24px", fontWeight: "bold", fill: "#000" }} // Style du texte
      >
        {`${value}%`}
      </text>
      <text
        x="50%" // Position horizontale au centre
        y="60%" // Position légèrement en dessous du premier texte
        textAnchor="middle" // Centre le texte horizontalement
        dominantBaseline="middle" // Centre le texte verticalement
        style={{ fontSize: "16px", fill: "#555" }} // Style du texte
      >
        de votre objectif
      </text>
    </RadialBarChart>
  );
};

export default RadialChart;