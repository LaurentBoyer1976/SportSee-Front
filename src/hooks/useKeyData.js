import useFetchData from './useFetchData';
import { formatUserInfo } from '../js/services/formatService';

const useKeyData = (userId) => {
    const url = userId ? `/api/user/${userId}` : null;
    const data = useFetchData(url, (data) => formatUserInfo(data).keyData, [userId]);
    return data;
};

export default useKeyData;