import React from 'react';

import styles from './CardTitle.css';

type PropType = {
    title: string;
    onClick?: () => void;
};

const CardTitle = ({ title, onClick }: PropType) => {
    return (
        <label className={styles.title} onClick={onClick}>
            {title}
        </label>
    );
};

export default CardTitle;
