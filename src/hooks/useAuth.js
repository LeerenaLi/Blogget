import { useContext, useEffect, useState } from 'react';
import { URL_API } from '../api/const';
import { tokenContext } from '../context/tokenContext';

export const useAuth = () => {
    const {token, delToken} = useContext(tokenContext);
    const [auth, setAuth] = useState({});

    useEffect(() => {
        if (!token) return;

        fetch(`${URL_API}/api/v1/me`, {
            headers: {
                Authorization: `bearer ${token}`,
            },
        })
            .then(response => {
                if (response.status === 401) {
                    throw new Error(`Ошибка сервера ${response.status}`);
                }
                return response.json();
            })
            .then(({name, icon_img: iconImg}) => {
                const img = iconImg.replace(/\?.*$/, '');
                setAuth({name, img});
            })
            .catch(err => {
                console.log(err);
                setAuth({});
                delToken();
            });
    }, [token]);

    const clearAuth = () => setAuth({});

    return [auth, clearAuth];
};
