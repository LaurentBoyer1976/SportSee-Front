const BASE_URL = "http://localhost:3000/user";

/**
 * Fonction générique pour effectuer un appel API.
 * @param {string} endpoint - Endpoint de l'API.
 * @returns {Promise<Object>} - Données brutes de l'API.
 */
const fetchApiData = async (endpoint) => {
  try {
    const response = await fetch(`${BASE_URL}/${endpoint}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch data from ${endpoint}`);
    }
    const data = await response.json();

    return data;
  } catch (error) {
    console.error(`Error fetching data from ${endpoint}:`, error);
    throw error;
  }
};

/**
 * Récupère les informations principales d'un utilisateur.
 * @param {number} userId - ID de l'utilisateur.
 */
export const fetchUserInfo = (userId) => fetchApiData(`${userId}`);

/**
 * Récupère l'activité quotidienne d'un utilisateur.
 * @param {number} userId - ID de l'utilisateur.
 */
export const fetchUserActivity = (userId) => fetchApiData(`${userId}/activity`);

/**
 * Récupère les sessions moyennes d'un utilisateur.
 * @param {number} userId - ID de l'utilisateur.
 */
export const fetchUserAverageSessions = (userId) =>
  fetchApiData(`${userId}/average-sessions`);

/**
 * Récupère la performance d'un utilisateur.
 * @param {number} userId - ID de l'utilisateur.
 */
export const fetchUserPerformance = (userId) =>
  fetchApiData(`${userId}/performance`);