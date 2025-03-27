import React from "react";
import Error from "../components/error";
import { calculateEndAngle } from "../utils/chartUtils";

/**
 * @description Page d'erreur
 * @returns {JSX.Element} Page d'erreur
 */
const ErrorPage = () => {
  const value = 50; // Example value
  const endAngle = calculateEndAngle(value);

  return (
    <div className="errorPage">
      <Error message="La page que vous recherchez est introuvable." />
    </div>
  );
};

export default ErrorPage;