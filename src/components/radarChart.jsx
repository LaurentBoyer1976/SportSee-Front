import React from "react";
import Error from "../components/error";
import { calculateMaxValue } from "../utils/chartUtils";

/**
 * @description Page d'erreur
 * @returns {JSX.Element} Page d'erreur
 */
const ErrorPage = () => {
  const data = []; // Replace with actual data
  const maxValue = calculateMaxValue(data, "value");

  return (
    <div className="errorPage">
      <Error message="La page que vous recherchez est introuvable." />
    </div>
  );
};

export default ErrorPage;