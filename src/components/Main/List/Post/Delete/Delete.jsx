import style from './Delete.module.css';
import {ReactComponent as DeleteBtn} from './img/delete.svg';

export const Delete = () => {
    return (
        <button className={style.delete}>
            <DeleteBtn />
        </button>
    );
};
