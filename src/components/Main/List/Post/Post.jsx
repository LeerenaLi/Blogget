import style from './Post.module.css';
import notphoto from './img/notphoto.jpg';
import PropTypes from 'prop-types';

import { Time } from './Time/Time';
import { Rating } from './Rating/Rating';
import { Delete } from './Delete/Delete';

export const Post = ({postData}) => {
    const {title, author, ups, date} = postData;
    return (
        <li className={style.post}>
            <Delete />
            <img className={style.img} src={notphoto} alt={title} />

            <div className={style.content}>
                <h2 className={style.title}>
                    <a className={style.linkPost} href='#post'>
                        {title}
                    </a>
                </h2>
                <a className={style.linkAuthor} href='#author'>{author}</a>
            </div>

            <Rating ups={ups} />

            <Time date={date} />
        </li>
    );
};

Post.propTypes = {
    postData: PropTypes.object,
};

