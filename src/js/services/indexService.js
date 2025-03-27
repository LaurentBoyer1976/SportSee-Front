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
export const getUserInfo = async (userId) => {
  const rawData = await fetchUserInfo(userId);
  if (!rawData || !rawData.data) {
    throw new Error("Invalid data format for user info");
  }
  return formatUserInfo(rawData.data);
};

export const getUserActivity = async (userId) => {
  const rawData = await fetchUserActivity(userId);
  if (!rawData || !rawData.data) {
    throw new Error("Invalid data format for user activity");
  }
  return formatUserActivity(rawData.data);
};

export const getUserAverageSessions = async (userId) => {
  const rawData = await fetchUserAverageSessions(userId);
  if (!rawData || !rawData.data) {
    throw new Error("Invalid data format for user average sessions");
  }
  return formatUserAverageSessions(rawData.data);
};

export const getUserPerformance = async (userId) => {
  const rawData = await fetchUserPerformance(userId);
  if (!rawData || !rawData.data) {
    throw new Error("Invalid data format for user performance");
  }
  return formatUserPerformance(rawData.data);
};