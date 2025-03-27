/**
 * Récupère l'ID de l'utilisateur depuis les données brutes
 * @param {Object} data - Données brutes
 * @returns {number} - ID de l'utilisateur
 */
const getUserId = (data) => data.id || data.userId;

/**
 * Fonction générique pour formater les données utilisateur.
 * @param {Object} data - Données brutes.
 * @param {Function} formatter - Fonction de formatage spécifique.
 * @returns {Object} - Données formatées.
 */
const formatData = (data, formatter) => formatter(data);

/**
 * Standardise les informations principales d'un utilisateur
 * @param {Object} data - Données brutes de l'utilisateur
 * @returns {Object} - Données utilisateur standardisées
 */
export const formatUserInfo = (data) =>
  formatData(data, (rawData) => {
    const formattedData = {
      userId: rawData.id || rawData.userId,
      userInfo: {
        firstName: rawData.userInfos?.firstName || "Inconnu",
        lastName: rawData.userInfos?.lastName || "Inconnu",
        age: rawData.userInfos?.age || 0,
      },
      score: (rawData.todayScore || rawData.score || 0) * 100, // Multiplie par 100 pour obtenir un pourcentage
      keyData: {
        calories: rawData.keyData?.calorieCount || 0,
        protein: rawData.keyData?.proteinCount || 0,
        carbs: rawData.keyData?.carbohydrateCount || 0,
        fat: rawData.keyData?.lipidCount || 0,
      },
    };

    return formattedData;
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
