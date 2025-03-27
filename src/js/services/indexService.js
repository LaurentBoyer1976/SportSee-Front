// Import des fonctions d'appel API
import {
  fetchUserInfo,
  fetchUserActivity,
  fetchUserAverageSessions,
  fetchUserPerformance,
} from "./userService";

// Import des fonctions de formatage
import {
  formatUserInfo,
  formatUserActivity,
  formatUserAverageSessions,
  formatUserPerformance,
} from "./formatService";

// Export des fonctions combinées
/**
 * @description Récupère les informations d'un utilisateur
 * @param {number} userId - ID de l'utilisateur
 * @returns   {Object} - Informations de l'utilisateur
 */
export const getUserInfo = async (userId) => {
  const rawData = await fetchUserInfo(userId);
  if (!rawData || !rawData.data) {
    throw new Error("Invalid data format for user info");
  }
  return formatUserInfo(rawData.data);
};

/**
 * @description Récupère l'activité quotidienne d'un utilisateur
 * @param {number} userId - ID de l'utilisateur
 * @returns {Object} - Activité quotidienne
 */

export const getUserActivity = async (userId) => {
  const rawData = await fetchUserActivity(userId);
  if (!rawData || !rawData.data) {
    throw new Error("Invalid data format for user activity");
  }
  return formatUserActivity(rawData.data);
};

/**
 * @description Récupère les sessions moyennes d'un utilisateur
 * @param {number} userId - ID de l'utilisateur
 * @returns {Object} - Sessions moyennes
 */

export const getUserAverageSessions = async (userId) => {
  const rawData = await fetchUserAverageSessions(userId);
  if (!rawData || !rawData.data) {
    throw new Error("Invalid data format for user average sessions");
  }
  return formatUserAverageSessions(rawData.data);
};

/**
 * @description Récupère les performances d'un utilisateur
 * @param {number} userId - ID de l'utilisateur
 * @returns {Object} - Performances de l'utilisateur
 */

export const getUserPerformance = async (userId) => {
  const rawData = await fetchUserPerformance(userId);
  if (!rawData || !rawData.data) {
    throw new Error("Invalid data format for user performance");
  }
  return formatUserPerformance(rawData.data);
};