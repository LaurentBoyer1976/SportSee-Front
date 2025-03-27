import { useState, useEffect } from 'react';
import { formatUserPerformance } from '../js/services/formatService';

const useFetchUserPerformance = (userId) => {
    const [performance, setPerformance] = useState(null);

    useEffect(() => {
        if (!userId) return;

        const fetchPerformance = async () => {
            try {
                const response = await fetch(`/api/user/${userId}/performance`);
                if (!response.ok) {
                    throw new Error(`Erreur HTTP : ${response.status}`);
                }
                const rawData = await response.json();
                const formattedData = formatUserPerformance(rawData.data); // Formate les données
                setPerformance(formattedData);
            } catch (error) {
                console.error('Erreur lors de la récupération des performances utilisateur :', error);
            }
        };

        fetchPerformance();
    }, [userId]);

    return performance;
};

export default useFetchUserPerformance;