import { useNavigate } from 'react-router-dom';

const useNavigation = () => {
    const navigate = useNavigate();

    const goToLogin = () => navigate('/login');
    const goToProfile = () => navigate('/');

    return { goToLogin, goToProfile };
};

export default useNavigation;