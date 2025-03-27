import { useState, useEffect } from 'react';
import { formatUserInfo } from '../js/services/formatService';

const BASE_URL = '/api';

const useFetchUserInfo = (userId) => {
    const [userInfo, setUserInfo] = useState(null);

    useEffect(() => {
        if (!userId) return;

        const fetchData = async () => {
            try {
                const response = await fetch(`${BASE_URL}/user/${userId}`);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const rawData = await response.json();
                const formattedData = formatUserInfo(rawData.data); // Formate les données
                setUserInfo(formattedData);
            } catch (error) {
                console.error('Erreur lors de la récupération des informations utilisateur :', error);
            }
        };

        fetchData();
    }, [userId]);

    return userInfo;
};

export default useFetchUserInfo;