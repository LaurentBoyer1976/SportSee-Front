const BASE_URL = "http://localhost:3000/user";

/**
 * Récupère les informations principales d'un utilisateur
 * @param {number} userId - ID de l'utilisateur
 * @returns {Promise<Object>} - Données utilisateur brutes
 */
export const fetchUserInfo = async (userId) => {
  try {
    const response = await fetch(`${BASE_URL}/${userId}`);
    if (!response.ok) {
      throw new Error("Failed to fetch user info");
    }
    return response.json();
  } catch (error) {
    console.error("Error fetching user info:", error);
    throw error;
  }
};

/**
 * Récupère l'activité quotidienne d'un utilisateur
 * @param {number} userId - ID de l'utilisateur
 * @returns {Promise<Object>} - Activité quotidienne brute
 */
export const fetchUserActivity = async (userId) => {
  try {
    const response = await fetch(`${BASE_URL}/${userId}/activity`);
    if (!response.ok) {
      throw new Error("Failed to fetch user activity");
    }
    return response.json();
  } catch (error) {
    console.error("Error fetching user activity:", error);
    throw error;
  }
};

/**
 * Récupère les sessions moyennes d'un utilisateur
 * @param {number} userId - ID de l'utilisateur
 * @returns {Promise<Object>} - Sessions moyennes brutes
 */
export const fetchUserAverageSessions = async (userId) => {
  try {
    const response = await fetch(`${BASE_URL}/${userId}/average-sessions`);
    if (!response.ok) {
      throw new Error("Failed to fetch user average sessions");
    }
    return response.json();
  } catch (error) {
    console.error("Error fetching user average sessions:", error);
    throw error;
  }
};

/**
 * Récupère la performance d'un utilisateur
 * @param {number} userId - ID de l'utilisateur
 * @returns {Promise<Object>} - Performance brute
 */
export const fetchUserPerformance = async (userId) => {
  try {
    const response = await fetch(`${BASE_URL}/${userId}/performance`);
    if (!response.ok) {
      throw new Error("Failed to fetch user performance");
    }
    return response.json();
  } catch (error) {
    console.error("Error fetching user performance:", error);
    throw error;
  }
};