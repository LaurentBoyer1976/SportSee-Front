import PropTypes from "prop-types";

/**
 * @description Composant d'erreur générique
 * @param {Object} props - Les props du composant
 * @param {string} props.message - Message d'erreur à afficher
 * @returns {JSX.Element} Composant d'erreur
 */
const Error = ({ message = "Une erreur est survenue." }) => {
  return (
    <div className="error">
      <h1>Erreur</h1>
      <p>{message}</p>
    </div>
  );
};

Error.propTypes = {
  message: PropTypes.string,
};

export default Error;
