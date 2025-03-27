import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './src/js/layouts/layout.jsx';
import Profile from './src/js/pages/profile.jsx';
import LoginPage from './src/js/pages/loginPage.jsx';

/**
 * Récupère l'ID de l'utilisateur connecté depuis le localStorage.
 * @returns {string|null} - L'ID de l'utilisateur ou `null` s'il n'est pas connecté.
 */
const getUserId = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    return user ? user.userId : null;
};

const AppRouter = () => {
    const [userId, setUserId] = useState(getUserId());

    useEffect(() => {
        const handleStorageChange = () => {
            const newUserId = getUserId();
            console.log("Mise à jour de userId dans Router :", newUserId);
            setUserId(newUserId);
        };

        window.addEventListener('storage', handleStorageChange);
        return () => {
            window.removeEventListener('storage', handleStorageChange);
        };
    }, []);

    const updateUserId = () => {
        const newUserId = getUserId();
        console.log("Forçage de la mise à jour de userId :", newUserId);
        setUserId(newUserId);
    };

    console.log("User ID dans Router :", userId);

    return (
        <Router>
            <Routes>
                <Route path="/login" element={<LoginPage onLogin={updateUserId} />} />
                <Route path="/" element={<Layout />}>
                    <Route index element={<Profile userId={userId} />} />
                </Route>
            </Routes>
        </Router>
    );
};

export default AppRouter;