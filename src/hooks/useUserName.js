import { useState, useEffect } from 'react';

const useUserName = (userId) => {
    const [userName, setUserName] = useState('');

    useEffect(() => {
        if (!userId) return;

        const fetchUserName = async () => {
            // Simule une API pour récupérer le nom d'utilisateur
            const user = JSON.parse(localStorage.getItem('user'));
            setUserName(user?.name || '');
        };

        fetchUserName();
    }, [userId]);

    return userName;
};

export default useUserName;