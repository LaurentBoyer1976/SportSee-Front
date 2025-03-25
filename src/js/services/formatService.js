/**
 * Standardise les informations principales d'un utilisateur
 * @param {Object} data - Données brutes de l'utilisateur
 * @returns {Object} - Données utilisateur standardisées
 */
export const formatUserInfo = (data) => ({
  id: data.id,
  firstName: data.userInfos?.firstName || "Inconnu",
  lastName: data.userInfos?.lastName || "Inconnu",
  age: data.userInfos?.age || 0,
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
 * @returns {Array} - Activité quotidienne standardisée
 */
export const formatUserActivity = (data) =>
  data.sessions.map((session) => ({
    day: session.day,
    kilogram: session.kilogram,
    calories: session.calories,
  }));

/**
 * Standardise les sessions moyennes d'un utilisateur
 * @param {Object} data - Données brutes de sessions moyennes
 * @returns {Array} - Sessions moyennes standardisées
 */
export const formatUserAverageSessions = (data) =>
  data.sessions.map((session) => ({
    day: session.day,
    sessionLength: session.sessionLength,
  }));

/**
 * Standardise la performance d'un utilisateur
 * @param {Object} data - Données brutes de performance
 * @returns {Object} - Performance utilisateur standardisée
 */
export const formatUserPerformance = (data) => ({
  kind: data.kind,
  data: data.data.map((item) => ({
    value: item.value,
    kind: data.kind[item.kind],
  })),
});