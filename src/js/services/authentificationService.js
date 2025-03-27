const BASE_URL = "http://localhost:3000/user";

/**
 * Authentifie un utilisateur avec son prénom et son ID.
 * @param {string} firstName - Prénom de l'utilisateur.
 * @param {number} userId - ID de l'utilisateur.
 * @returns {Promise<boolean>} - Retourne `true` si l'utilisateur est authentifié, sinon `false`.
 */
export const authenticateUser = async (firstName, userId) => {
  try {
    const response = await fetch(`${BASE_URL}/${userId}`);
    if (!response.ok) {
      throw new Error("Failed to fetch user data");
    }
    const data = await response.json();
    return data?.data?.userInfos?.firstName === firstName;
  } catch (error) {
    console.error("Authentication error:", error);
    return false;
  }
};