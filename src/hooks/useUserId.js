import { useState, useEffect } from "react";

/**
 * @description Récupère l'ID de l'utilisateur connecté depuis le localStorage.
 * @returns {string|null} - L'ID de l'utilisateur ou `null` s'il n'est pas connecté.
 */
const getUserId = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  return user ? user.userId : null;
};

const useUserId = () => {
  const [userId, setUserId] = useState(getUserId());

  useEffect(() => {
    const handleStorageChange = () => {
      const newUserId = getUserId();
      setUserId(newUserId);
    };

    window.addEventListener("storage", handleStorageChange);
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  const updateUserId = () => {
    const newUserId = getUserId();
    setUserId(newUserId);
  };

  return [userId, updateUserId];
};

export default useUserId;
