import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './src/js/layouts/layout.jsx';
import Profile from './src/js/pages/profile.jsx';
import LoginPage from './src/js/pages/loginPage.jsx';
import useUserId from './src/hooks/useUserId';

const AppRouter = () => {
    const [userId, updateUserId] = useUserId();

    useEffect(() => {
        const handleStorageChange = () => {
            const newUserId = localStorage.getItem('user');
            console.log("Mise à jour de userId dans Router :", newUserId);
            updateUserId(); // Utilisation de la fonction du hook
        };

        window.addEventListener('storage', handleStorageChange);
        return () => {
            window.removeEventListener('storage', handleStorageChange);
        };
    }, [updateUserId]);

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