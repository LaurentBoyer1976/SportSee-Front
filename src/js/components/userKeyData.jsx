import PropTypes from "prop-types";
/**
 * @description Composant pour afficher les données clés de l'utilisateur.
 * @param {Object} param0 - Les données à afficher.
 * @param {string} param0.icon - L'icône à afficher.
 * @param {string} param0.text - Le texte à afficher.
 * @param {number} param0.value - La valeur à afficher.
 * @param {string} param0.unit - L'unité de la valeur à afficher.
 * @returns {JSX.Element} Composant UserKeyData
 */

const UserKeyData = ({ icon, text, value, unit }) => {
  return (
    <figcaption className="userKeyData">
      <img src={icon} alt={`${text} icon`} className="userKeyData__icon" />
      <div className="userKeyData__info">
        <span className="userKeyData__value">
          {value}
          {unit}
        </span>
        <span className="userKeyData__text">{text}</span>
      </div>
    </figcaption>
  );
};

UserKeyData.propTypes = {
  icon: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  unit: PropTypes.string.isRequired,
};

export default UserKeyData;
