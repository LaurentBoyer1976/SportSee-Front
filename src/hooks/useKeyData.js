import useFetchData from './useFetchData';
import { formatUserInfo } from '../js/services/formatService';

const useKeyData = (userId) => {
    const url = userId ? `/api/user/${userId}` : null;
    return useFetchData(url, (data) => formatUserInfo(data).keyData, [userId]);
};

export default useKeyData;