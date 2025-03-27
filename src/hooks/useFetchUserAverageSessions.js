import useFetchData from './useFetchData';
import { formatUserAverageSessions } from '../js/services/formatService';

const useFetchUserAverageSessions = (userId) => {
    const url = userId ? `/api/user/${userId}/average-sessions` : null;
    const data = useFetchData(url, formatUserAverageSessions, [userId]);
    return data;
};

export default useFetchUserAverageSessions;