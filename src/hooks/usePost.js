import { useContext, useEffect, useState } from 'react';
import { URL_API } from '../api/const';
import { tokenContext } from '../context/tokenContext';

export const usePost = () => {
    const [posts, setPosts] = useState({});
    const {token} = useContext(tokenContext);

    useEffect(() => {
        if (!token) return;

        fetch(`${URL_API}/best`, {
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
            .then((postData) => {
                const data = postData.data.children.map(item => {
                    const {thumbnail, title, author, ups, created_utc: date, id} = item.data;

                    return {thumbnail, title, author, ups, date, id};
                });

                setPosts(data);
            })
            .catch(err => {
                console.log(err);
            });
    }, [token]);

    return [posts];
};
