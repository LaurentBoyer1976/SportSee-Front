import React, { useEffect, useState } from "react";
import { getUserInfo } from "../services/indexService";
import UserKeyData from "./userKeyData";

// Import des icônes
import CaloriesIcon from "../../assets/icons/calories-icon.svg";
import ProteinIcon from "../../assets/icons/protein-icon.svg";
import CarbsIcon from "../../assets/icons/carbs-icon.svg";
import FatIcon from "../../assets/icons/fat-icon.svg";

const KeyDataCard = ({ userId }) => {
  const [keyData, setKeyData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userInfo = await getUserInfo(userId);
       
        // Vérifiez si keyData existe
        if (!userInfo.keyData) {
          console.error("keyData is missing or undefined");
          return;
        }

        // Normalisez les clés pour correspondre au format attendu
        const normalizedKeyData = {
          calorieCount: userInfo.keyData.calories || userInfo.keyData.calorieCount,
          proteinCount: userInfo.keyData.protein || userInfo.keyData.proteinCount,
          carbohydrateCount: userInfo.keyData.carbs || userInfo.keyData.carbohydrateCount,
          lipidCount: userInfo.keyData.fat || userInfo.keyData.lipidCount,
        };

        // Itération sur les clés normalisées pour générer les données
        const formattedKeyData = Object.entries(normalizedKeyData).map(([key, value]) => {
          let icon, text, unit;

          // Associez les propriétés dynamiquement
          switch (key) {
            case "calorieCount":
              icon = CaloriesIcon;
              text = "Calories";
              unit = "Kcal";
              break;
            case "proteinCount":
              icon = ProteinIcon;
              text = "Protéines";
              unit = "g";
              break;
            case "carbohydrateCount":
              icon = CarbsIcon;
              text = "Glucides";
              unit = "g";
              break;
            case "lipidCount":
              icon = FatIcon;
              text = "Lipides";
              unit = "g";
              break;
            default:
              console.warn(`Unknown key: ${key}`);
              return null; // Ignorez les clés inconnues
          }

          return { icon, text, value, unit };
        });
        // Filtrez les valeurs nulles (au cas où une clé inconnue est ignorée)
        setKeyData(formattedKeyData.filter((data) => data !== null));
      } catch (error) {
        console.error("Error fetching key data:", error);
      }
    };

    fetchData();
  }, [userId]);
  return (
    <div className="keyDataCard">
      {keyData.map((data, index) => (
        <UserKeyData key={index} icon={data.icon} text={data.text} value={data.value} unit={data.unit} />
      ))}
    </div>
  );
};

export default KeyDataCard;