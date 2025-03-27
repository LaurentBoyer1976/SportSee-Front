import React from 'react';
import LoginWithNavigate from '../components/login';

/**
 * @description Login page
 * @returns {JSX.Element} Login page
 */
const LoginPage = ({ onLogin }) => {
    return (
        <div className="loginPage">
            <h1>Connexion</h1>
            <LoginWithNavigate onLogin={onLogin} />
        </div>
    );
};

export default LoginPage;