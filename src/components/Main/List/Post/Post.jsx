import style from './Post.module.css';
import notphoto from './img/notphoto.jpg';
import PropTypes from 'prop-types';

import { Time } from './Time/Time';
import { Rating } from './Rating/Rating';
import { Delete } from './Delete/Delete';
import { Content } from './Content/Content';

export const Post = ({postData}) => {
    const {title, author, ups, date} = postData;
    return (
        <li className={style.post}>
            <Delete />
            <img className={style.img} src={notphoto} alt={title} />

            <Content title={title} author={author} />

            <Rating ups={ups} />

            <Time date={date} />
        </li>
    );
};

Post.propTypes = {
    postData: PropTypes.object,
};

