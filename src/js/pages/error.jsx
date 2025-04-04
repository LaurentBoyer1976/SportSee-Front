import  { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/scss/pages/errorPage.scss";

/**
 * @description Page d'erreur
 * @returns {JSX.Element} - Composant de la page d'erreur
 */
const ErrorPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("user"); // Vérifie si un utilisateur est connecté
    if (user) {
      const { userId } = JSON.parse(user); // Récupère l'ID utilisateur depuis le localStorage
      navigate(`/profile/${userId}`); // Redirige vers la page utilisateur
    } else {
      navigate("/login"); // Redirige vers la page de connexion
    }
  }, [navigate]);

  return (
    <div className="errorPage">
      <h1>Erreur 404</h1>
      <p>La page que vous recherchez n'existe pas.</p>
    </div>
  );
};

export default ErrorPage;
