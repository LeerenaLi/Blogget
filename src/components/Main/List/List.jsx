import { useContext } from 'react';
import style from './List.module.css';
import Post from './Post';
import { postContext } from '../../../context/postContext';

export const List = () => {
    const {posts} = useContext(postContext);
    if (posts && posts.length > 0) {
        return (
            <ul className={style.list}>
                {posts.map(post => (
                    <Post key={post.id} postData={post}/>
                ))}
            </ul>
        );
    }

    return (
        <p className={style.list}>
            Войдите в свой аккаунт
        </p>
    );
};
