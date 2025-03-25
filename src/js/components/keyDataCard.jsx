import React, { useEffect, useState } from 'react';
import UserKeyData from './userKeyData.jsx';
import KcalIcon from '../../assets/icons/calories-icon.svg';
import ProteinIcon from '../../assets/icons/protein-icon.svg';
import FatIcon from '../../assets/icons/fat-icon.svg';
import CarbsIcon from '../../assets/icons/carbs-icon.svg';

// Les icônes associées aux types de données
const keyDataIcons = {
  calories: KcalIcon,
  protein: ProteinIcon,
  carbs: CarbsIcon,
  fat: FatIcon,
};

const KeyDataCard = ({ userId }) => {
  const [keyData, setKeyData] = useState([]);

  // Simuler une récupération de données utilisateur
  useEffect(() => {
    const fetchKeyData = async () => {
      // Remplacez cette partie par un appel API 
      const response = await fetch(`/api/user/${userId}/key-data`);
      const data = await response.json();

      // Exemple de données reçues
      const formattedData = [
        { icon: keyDataIcons.calories, text: 'Calories', value: data.calories, unit: 'Kcal' },
        { icon: keyDataIcons.protein, text: 'Protéines', value: data.protein, unit: 'g' },
        { icon: keyDataIcons.carbs, text: 'Glucides', value: data.carbs, unit: 'g' },
        { icon: keyDataIcons.fat, text: 'Lipides', value: data.fat, unit: 'g' },
      ];

      setKeyData(formattedData);
    };

    fetchKeyData();
  }, [userId]);

  return (
    <figure className="keyDataCard">
      <div className="keyDataCard__container">
        {keyData.map((data, index) => (
          <UserKeyData
            key={index}
            icon={data.icon}
            text={data.text}
            value={data.value}
            unit={data.unit}
          />
        ))}
      </div>
    </figure>
  );
};

export default KeyDataCard;