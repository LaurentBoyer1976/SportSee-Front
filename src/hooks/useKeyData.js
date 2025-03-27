import { useState, useEffect } from 'react';
import { formatUserInfo } from '../js/services/formatService';

const useKeyData = (userId) => {
    const [keyData, setKeyData] = useState(null);

    useEffect(() => {
        if (!userId) return;

        const fetchKeyData = async () => {
            try {
                const response = await fetch(`/api/user/${userId}`);
                if (!response.ok) {
                    throw new Error(`Erreur HTTP : ${response.status}`);
                }
                const rawData = await response.json();
                const formattedData = formatUserInfo(rawData.data); // Formate les données
                setKeyData(formattedData.keyData); // Extrait uniquement les données clés
            } catch (error) {
                console.error('Erreur lors de la récupération des données clés :', error);
            }
        };

        fetchKeyData();
    }, [userId]);

    return keyData;
};

export default useKeyData;