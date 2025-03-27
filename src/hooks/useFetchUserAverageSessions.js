import { useState, useEffect } from 'react';
import { formatUserAverageSessions } from '../js/services/formatService';

const useFetchUserAverageSessions = (userId) => {
    const [averageSessions, setAverageSessions] = useState(null);

    useEffect(() => {
        if (!userId) return;

        const fetchAverageSessions = async () => {
            try {
                const response = await fetch(`/api/user/${userId}/average-sessions`);
                if (!response.ok) {
                    throw new Error(`Erreur HTTP : ${response.status}`);
                }
                const rawData = await response.json();
                const formattedData = formatUserAverageSessions(rawData.data); // Formate les données
                setAverageSessions(formattedData);
            } catch (error) {
                console.error('Erreur lors de la récupération des sessions moyennes :', error);
            }
        };

        fetchAverageSessions();
    }, [userId]);

    return averageSessions;
};

export default useFetchUserAverageSessions;