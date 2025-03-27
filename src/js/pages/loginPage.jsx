import React from 'react';
import LoginWithNavigate from '../components/login';

/**
 * @description Login page
 * @returns {JSX.Element} Login page
 */
const LoginPage = () => {
    return (
        <div className="loginPage">
            <h1>Connexion</h1>
            <LoginWithNavigate />
        </div>
    );
};

export default LoginPage;