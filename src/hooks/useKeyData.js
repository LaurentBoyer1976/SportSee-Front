import useFetchData from "./useFetchData";
import { formatUserInfo } from "../js/services/formatService";

/**
 * @description Hook pour récupérer les données clés d'un utilisateur
 * @param {userId} userId - L'ID de l'utilisateur
 * @returns {Object} - Les données formatées ou null en cas d'erreur
 */

const useKeyData = (userId) => {
  const url = userId ? `/api/user/${userId}` : null;
  return useFetchData(url, (data) => formatUserInfo(data).keyData, [userId]);
};

export default useKeyData;
