import style from './Search.module.css';
import {ReactComponent as SearchBtn} from './img/search.svg';

export const Search = () => {
    return (
        <form className={style.form}>
            <input className={style.search} type='search'/>
            <button className={style.button}>
                <SearchBtn className={style.svg} />
            </button>
        </form>
    );
};
