import { useState, useEffect } from 'react';
import { formatUserActivity } from '../js/services/formatService';

const useFetchUserActivity = (userId) => {
    const [userActivity, setUserActivity] = useState(null);

    useEffect(() => {
        if (!userId) return;

        const fetchUserActivity = async () => {
            try {
                const response = await fetch(`/api/user/${userId}/activity`);
                if (!response.ok) {
                    throw new Error(`Erreur HTTP : ${response.status}`);
                }
                const rawData = await response.json();
                const formattedData = formatUserActivity(rawData.data); // Formate les données
                setUserActivity(formattedData);
            } catch (error) {
                console.error('Erreur lors de la récupération de l\'activité utilisateur :', error);
            }
        };

        fetchUserActivity();
    }, [userId]);

    return userActivity;
};

export default useFetchUserActivity;