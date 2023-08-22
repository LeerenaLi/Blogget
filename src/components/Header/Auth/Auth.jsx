import style from './Auth.module.css';
import PropTypes from 'prop-types';
import {ReactComponent as LoginIcon} from './img/login.svg';
import {urlAuth} from '../../../api/auth';
import {Text} from '../../../UI/Text';
import { useContext, useState } from 'react';
import { tokenContext } from '../../../context/tokenContext';
import { authContext } from '../../../context/authContext';


export const Auth = () => {
    const {delToken} = useContext(tokenContext);
    const [logout, setLogout] = useState(false);
    const {auth, clearAuth} = useContext(authContext);

    const toggleBtn = () => {
        setLogout(!logout);
    };

    const clearToken = () => {
        delToken('');
        clearAuth();
    };

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

