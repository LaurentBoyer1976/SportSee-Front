import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import logo from "../../assets/logos/SportSeeLogo.svg";
import "../../styles/scss/components/error.scss";

/**
 * @description Composant d'erreur générique
 * @param {Object} props - Les props du composant
 * @param {string} props.message - Message d'erreur à afficher
 * @returns {JSX.Element} Composant d'erreur
 */
const Error = ({ message = "Une erreur est survenue." }) => {
  return (
    <div className="error">
      <img src={logo} alt="SportSee Logo" className="error__logo" />
      <h1>Oups! la page est introuvable! Page erreur 404! </h1>
      <p>{message}</p>
      <Link to="/" className="error__link">Retour à l'accueil</Link>
    </div>
  );
};

Error.propTypes = {
  message: PropTypes.string,
};

export default Error;
