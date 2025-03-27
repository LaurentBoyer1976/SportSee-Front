import useFetchData from './useFetchData';
import { formatUserPerformance } from '../js/services/formatService';

const useFetchUserPerformance = (userId) => {
    const url = userId ? `/api/user/${userId}/performance` : null;
    return useFetchData(url, formatUserPerformance, [userId]);
};

export default useFetchUserPerformance;