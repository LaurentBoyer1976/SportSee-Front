import { useState, useEffect } from 'react';

/**
 * Hook générique pour récupérer des données via une API.
 * @param {string} url - L'URL de l'API.
 * @param {function} formatter - Fonction pour formater les données récupérées.
 * @param {Array} dependencies - Dépendances pour déclencher l'effet.
 * @returns {any} - Les données formatées ou null en cas d'erreur.
 */
const useFetchData = (url, formatter, dependencies = []) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        if (!url) return;

        const fetchData = async () => {
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error(`Erreur HTTP : ${response.status}`);
                }
                const rawData = await response.json();
                const formattedData = formatter ? formatter(rawData.data) : rawData.data;
                setData(formattedData);
            } catch (error) {
                console.error(`Erreur lors de la récupération des données depuis ${url} :`, error);
            }
        };

        fetchData();
    }, dependencies);

    return data;
};

export default useFetchData;