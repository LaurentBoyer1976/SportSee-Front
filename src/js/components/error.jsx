import React from "react";

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

export default Error;
