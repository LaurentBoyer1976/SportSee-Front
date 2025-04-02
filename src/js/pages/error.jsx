import { useEffect } from "react";
import Error from "../components/error";
import "../../styles/scss/pages/errorPage.scss";

/**
 * @description Page d'erreur
 * @returns {JSX.Element} Page d'erreur
 */
const ErrorPage = () => {
  useEffect(() => {
    // Ajoute la classe "error-page" à l'élément #root
    const rootElement = document.getElementById("root");
    if (rootElement) {
      rootElement.classList.add("error-page");
    }

    // Nettoie la classe lorsque le composant est démonté
    return () => {
      if (rootElement) {
        rootElement.classList.remove("error-page");
      }
    };
  }, []);

  return (
    <div className="errorPage">
      <Error message="La page que vous recherchez est introuvable." />
    </div>
  );
};

export default ErrorPage;
