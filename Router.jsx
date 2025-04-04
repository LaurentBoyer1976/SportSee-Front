import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./src/js/layouts/layout.jsx";
import Profile from "./src/js/pages/profile.jsx";
import LoginPage from "./src/js/pages/loginPage.jsx";
import ErrorPage from "./src/js/pages/error.jsx";
import useUserId from "./src/hooks/useUserId";

const AppRouter = () => {
  const [userId, updateUserId] = useUserId();

  useEffect(() => {
    const handleStorageChange = () => {
      const newUserId = localStorage.getItem("user");
      updateUserId(); // Utilisation de la fonction du hook
    };

    window.addEventListener("storage", handleStorageChange);
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, [updateUserId]);

  return (
    <Router>
      <Routes>
        {/* Route pour la page de connexion */}
        <Route path="/login" element={<LoginPage onLogin={updateUserId} />} />

        {/* Route dynamique pour le profil avec l'ID utilisateur */}
        <Route path="/profile/:userId" element={<Layout />}>
          <Route index element={<Profile />} />
        </Route>

        {/* Route pour les erreurs */}
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
