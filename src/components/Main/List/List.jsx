import style from './List.module.css';
import Post from './Post';

export const List = () => {
    const postsData = [
        {
            thumbnail: '',
            title: 'Title1',
            author: 'Nickname1',
            ups: 24,
            date: '2023-02-24T10:15:00.000Z',
            id: '256',
        },
        {
            thumbnail: '',
            title: 'Title2',
            author: 'Nickname2',
            ups: 58,
            date: '2023-02-21T09:35:00.000Z',
            id: '45',
        },
        {
            thumbnail: '',
            title: 'Title3',
            author: 'Nickname3',
            ups: 44,
            date: '2023-02-23T09:25:00.000Z',
            id: '584',
        },
        {
            thumbnail: '',
            title: 'Title4',
            author: 'Nickname4',
            ups: 125,
            date: '2023-02-25T08:45:00.000Z',
            id: '028',
        },
    ];

    return (
        <ul className={style.list}>
            {postsData.map((postData) => (
                <Post key={postData.id} postData={postData}/>
            ))}
        </ul>
    );
};
