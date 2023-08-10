import style from './Rating.module.css';
import PropTypes from 'prop-types';
import {Text} from '../../../../../UI/Text/Text';

export const Rating = ({ups}) => {
    return (
        <div className={style.rating}>
            <button className={style.up} aria-label='Повысить рейтинг' />
            <Text
                As='a'
                className={style.ups}
                color='grey66'
                size={12}
                tsize={16}
                fontWeight='bold'
            >
                {ups}
            </Text>
            <button className={style.down} aria-label='Понизить рейтинг' />
        </div>
    );
};

Rating.propTypes = {
    ups: PropTypes.number,
};

