import useFetchData from './useFetchData';
import { formatUserPerformance } from '../js/services/formatService';

/**
 * @description Hook pour récupérer les performances d'un utilisateur
 * @param {number} userId - L'ID de l'utilisateur
 * @returns {Array} - Les données formatées ou null en cas d'erreur
 */

const useFetchUserPerformance = (userId) => {
    const url = userId ? `/api/user/${userId}/performance` : null;
    return useFetchData(url, formatUserPerformance, [userId]);
};

export default useFetchUserPerformance;