import PropTypes from "prop-types";
import UserKeyData from "./userKeyData";
import useKeyData from "../../hooks/useKeyData";

// Import des icônes
import CaloriesIcon from "../../assets/icons/calories-icon.svg";
import ProteinIcon from "../../assets/icons/protein-icon.svg";
import CarbsIcon from "../../assets/icons/carbs-icon.svg";
import FatIcon from "../../assets/icons/fat-icon.svg";

/**
 * @description Composant pour afficher les données clés de l'utilisateur
 * @param {number} userId - ID de l'utilisateur
 * @returns {JSX.Element} - Composant UserKeyData
 */

const KeyDataCard = ({ userId }) => {
  const keyData = useKeyData(userId);

  if (!keyData) {
    return <div>Chargement des données clés...</div>;
  }

  // Mappage des clés de l'API vers celles utilisées dans les icônes et labels
  const mappedKeyData = {
    calorieCount: keyData.calories,
    proteinCount: keyData.protein,
    carbohydrateCount: keyData.carbs,
    lipidCount: keyData.fat,
  };

  const icons = {
    calorieCount: CaloriesIcon,
    proteinCount: ProteinIcon,
    carbohydrateCount: CarbsIcon,
    lipidCount: FatIcon,
  };

  const labels = {
    calorieCount: "Calories",
    proteinCount: "Protéines",
    carbohydrateCount: "Glucides",
    lipidCount: "Lipides",
  };

  return (
    <div className="keyDataCard">
      {Object.entries(mappedKeyData).map(([key, value]) => (
        <UserKeyData
          key={key}
          icon={icons[key]} // Associe l'icône correcte
          text={labels[key]} // Utilise le texte correspondant
          value={value}
          unit={key === "calorieCount" ? "Kcal" : "g"}
        />
      ))}
    </div>
  );
};

KeyDataCard.propTypes = {
  userId: PropTypes.number.isRequired,
};

export default KeyDataCard;
