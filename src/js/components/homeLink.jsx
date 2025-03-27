import { useNavigate } from "react-router-dom";
import home from "./../../assets/logos/SportSeeLogo.svg";

/**
 * @description HomeLink component
 * @returns {JSX.Element} HomeLink component
 */
const HomeLink = () => {
  const navigate = useNavigate();

  /**
   * Gère la déconnexion de l'utilisateur.
   */
  const handleLogout = () => {
    localStorage.clear(); // Vide complètement le localStorage
    navigate("/login", { replace: true }); // Redirige vers la page de connexion
  };

  return (
    <button className="homeLinkLogo" onClick={handleLogout}>
      <img src={home} alt="Déconnexion" />
    </button>
  );
};

export default HomeLink;