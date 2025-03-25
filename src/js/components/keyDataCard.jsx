import React, { useEffect, useState } from "react";
import { getUserInfo } from "../services/indexService";
import UserKeyData from "./userKeyData";

const KeyDataCard = ({ userId }) => {
  const [keyData, setKeyData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userInfo = await getUserInfo(userId);
        setKeyData([
          { icon: "calories-icon.svg", text: "Calories", value: userInfo.keyData.calories, unit: "Kcal" },
          { icon: "protein-icon.svg", text: "Protéines", value: userInfo.keyData.protein, unit: "g" },
          { icon: "carbs-icon.svg", text: "Glucides", value: userInfo.keyData.carbs, unit: "g" },
          { icon: "fat-icon.svg", text: "Lipides", value: userInfo.keyData.fat, unit: "g" },
        ]);
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