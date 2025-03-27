import useFetchData from './useFetchData';
import { formatUserAverageSessions } from '../js/services/formatService';

/**
 * @description Hook to fetch user average sessions
 * @param {number} userId - The user ID
 * @returns {Array} - Formatted data or null in case of error
 */

const useFetchUserAverageSessions = (userId) => {
    const url = userId ? `/api/user/${userId}/average-sessions` : null;
    return useFetchData(url, formatUserAverageSessions, [userId]);
};

export default useFetchUserAverageSessions;