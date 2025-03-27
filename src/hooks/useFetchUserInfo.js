import useFetchData from './useFetchData';
import { formatUserInfo } from '../js/services/formatService';

const useFetchUserInfo = (userId) => {
    const url = userId ? `/api/user/${userId}` : null;
    const data = useFetchData(url, formatUserInfo, [userId]);

    // Ajout de logs pour vérifier les données utilisateur
    console.log("useFetchUserInfo - formatted data:", data);

    return data;
};

export default useFetchUserInfo;