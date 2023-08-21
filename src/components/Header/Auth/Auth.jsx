import style from './Auth.module.css';
import PropTypes from 'prop-types';
import {ReactComponent as LoginIcon} from './img/login.svg';
import {urlAuth} from '../../../api/auth';
import {Text} from '../../../UI/Text';
import { useEffect, useState } from 'react';
import { URL_API } from '../../../api/const';

export const Auth = ({token, delToken}) => {
    const [auth, setAuth] = useState({});

    const [logout, setLogout] = useState(false);
    const toggleBtn = () => {
        setLogout(!logout);
    };

    const clearToken = () => {
        delToken('');
        setAuth({});
    };

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
                clearToken();
            });
    }, [token]);

    return (
        <div className={style.container}>
            {auth.name ? (
                <>
                    <button
                        className={style.btn}
                        onClick={toggleBtn}
                    >
                        <img
                            className={style.img}
                            src={auth.img}
                            title={auth.name}
                            alt={`Аватар ${auth.name}`}
                        />
                        <Text className={style.name}>{auth.name}</Text>
                    </button>
                    {logout &&
                        <button
                            className={style.logout}
                            onClick={() => {
                                clearToken();
                                toggleBtn();
                            }}
                        >
                            <a href="/">Выйти</a>
                        </button>}
                </>
            ) : (
                <Text className={style.authLink} As='a' href={urlAuth}>
                    <LoginIcon className={style.svg} />
                </Text>
            )}
        </div>
    );
};

Auth.propTypes = {
    token: PropTypes.string,
    delToken: PropTypes.func,
};

