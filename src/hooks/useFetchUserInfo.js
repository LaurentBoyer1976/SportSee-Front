import useFetchData from './useFetchData';
import { formatUserInfo } from '../js/services/formatService';

const useFetchUserInfo = (userId) => {
    const url = userId ? `/api/user/${userId}` : null;
    const data = useFetchData(url, formatUserInfo, [userId]);
    return data;
};

export default useFetchUserInfo;