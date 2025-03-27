import useFetchData from './useFetchData';
import { formatUserPerformance } from '../js/services/formatService';

const useFetchUserPerformance = (userId) => {
    const url = userId ? `/api/user/${userId}/performance` : null;
    const data = useFetchData(url, formatUserPerformance, [userId]);
    return data;
};

export default useFetchUserPerformance;