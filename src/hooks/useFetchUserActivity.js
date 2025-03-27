import useFetchData from './useFetchData';
import { formatUserActivity } from '../js/services/formatService';

const useFetchUserActivity = (userId) => {
    const url = userId ? `/api/user/${userId}/activity` : null;
    const data = useFetchData(url, formatUserActivity, [userId]);

    // Ajout de logs pour vérifier les données
    console.log("useFetchUserActivity - raw data:", data);

    return data;
};

export default useFetchUserActivity;