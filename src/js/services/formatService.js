/**
 * Récupère l'ID de l'utilisateur depuis les données brutes
 * @param {Object} data - Données brutes
 * @returns {number} - ID de l'utilisateur
 */
const getUserId = (data) => data.id || data.userId;

/**
 * Standardise les informations principales d'un utilisateur
 * @param {Object} data - Données brutes de l'utilisateur
 * @returns {Object} - Données utilisateur standardisées
 */
export const formatUserInfo = (data) => ({
  userId: getUserId(data),
  userInfo: {
    firstName: data.userInfos?.firstName || "Inconnu",
    lastName: data.userInfos?.lastName || "Inconnu",
    age: data.userInfos?.age || 0,
  },
  score: data.todayScore || data.score || 0,
  keyData: {
    calories: data.keyData?.calorieCount || 0,
    protein: data.keyData?.proteinCount || 0,
    carbs: data.keyData?.carbohydrateCount || 0,
    fat: data.keyData?.lipidCount || 0,
  },
});

/**
 * Standardise l'activité quotidienne d'un utilisateur
 * @param {Object} data - Données brutes d'activité
 * @returns {Object} - Activité quotidienne standardisée
 */
export const formatUserActivity = (data) => ({
  userId: getUserId(data),
  sessions: data.sessions.map((session, index) => ({
    day: session.day,
    kilogram: session.kilogram,
    calories: session.calories,
    index: index,
  })),
});

/**
 * Standardise les sessions moyennes d'un utilisateur
 * @param {Object} data - Données brutes de sessions moyennes
 * @returns {Object} - Sessions moyennes standardisées
 */
export const formatUserAverageSessions = (data) => ({
  userId: getUserId(data),
  sessions: data.sessions.map((session, index) => ({
    day: session.day,
    sessionLength: session.sessionLength,
    index: index,
  })),
});

/**
 * Standardise la performance d'un utilisateur
 * @param {Object} data - Données brutes de performance
 * @returns {Object} - Performance utilisateur standardisée
 */
export const formatUserPerformance = (data) => ({
  userId: getUserId(data),
  kind: data.kind,
  data: data.data.map((item, index) => ({
    kindId: item.kind,
    kindName: data.kind[item.kind],
    value: item.value,
    index: index,
  })),
});