import useFetchData from './useFetchData';
import { formatUserActivity } from '../js/services/formatService';

/**
 * @description Hook pour récupérer les activités d'un utilisateur
 * @param {number} userId - L'ID de l'utilisateur
 * @returns {Array} - Les données formatées ou null en cas d'erreur
 */


const useFetchUserActivity = (userId) => {
    const url = userId ? `/api/user/${userId}/activity` : null;
    const data = useFetchData(url, formatUserActivity, [userId]);

    // Ajout de logs pour vérifier les données
    console.log("useFetchUserActivity - raw data:", data);

    return data;
};

export default useFetchUserActivity;