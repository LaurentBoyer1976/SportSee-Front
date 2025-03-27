import useFetchData from "./useFetchData";
import { formatUserInfo } from "../js/services/formatService";

/**
 * @description Hook to fetch user info
 * @param {number} userId - The user ID
 * @returns {Object} - Formatted data or null in case of error
 */

const useFetchUserInfo = (userId) => {
  const url = userId ? `/api/user/${userId}` : null;
  const data = useFetchData(url, formatUserInfo, [userId]);

  // Ajout de logs pour vérifier les données utilisateur
  console.log("useFetchUserInfo - formatted data:", data);

  return data;
};

export default useFetchUserInfo;
