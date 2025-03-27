import { useState, useEffect } from "react";
import { BASE_URL } from "../constants/api";
import { handleApiError } from "../utils/errorHandler";

/**
 * Hook générique pour effectuer des appels API.
 * @param {string} endpoint - Endpoint de l'API.
 * @param {function} formatter - Fonction pour formater les données.
 * @param {Array} dependencies - Dépendances pour déclencher l'effet.
 * @returns {any} - Données formatées ou null en cas d'erreur.
 */
const useApiFetch = (endpoint, formatter, dependencies = []) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    if (!endpoint) return;

    const fetchData = async () => {
      try {
        const response = await fetch(`${BASE_URL}/${endpoint}`);
        if (!response.ok) {
          throw new Error(`Erreur HTTP : ${response.status}`);
        }
        const rawData = await response.json();
        const formattedData = formatter ? formatter(rawData.data) : rawData.data;
        setData(formattedData);
      } catch (error) {
        handleApiError(error, endpoint);
      }
    };

    fetchData();
  }, dependencies);

  return data;
};

export default useApiFetch;
