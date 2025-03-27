import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './src/js/layouts/layout.jsx';
import Profile from './src/js/pages/profile.jsx';
import LoginPage from './src/js/pages/loginPage.jsx'; // Import de la page de connexion

/**
 * Récupère l'ID de l'utilisateur connecté depuis le localStorage.
 * @returns {number|null} - L'ID de l'utilisateur ou `null` s'il n'est pas connecté.
 */
const getUserId = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    return user ? user.userId : null;
};

const AppRouter = () => {
    const userId = getUserId(); // Récupère l'ID de l'utilisateur connecté
console.log(userId);
    return (
        <Router>
            <Routes>
                {/* Route pour la page de connexion */}
                <Route path="/login" element={<LoginPage />} />

                {/* Route protégée avec Layout */}
                <Route path="/" element={<Layout />}>
                    <Route index element={<Profile userId={userId} />} /> {/* Passe l'ID utilisateur */}
                </Route>
            </Routes>
        </Router>
    );
};

export default AppRouter;

