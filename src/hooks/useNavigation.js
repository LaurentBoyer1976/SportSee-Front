import { useNavigate } from 'react-router-dom';

/**
 * @description Hook to navigate to login and profile pages
 * @returns {Object} - Functions to navigate to login and profile pages
 */

const useNavigation = () => {
    const navigate = useNavigate();

    const goToLogin = () => navigate('/login');
    const goToProfile = () => navigate('/');

    return { goToLogin, goToProfile };
};

export default useNavigation;