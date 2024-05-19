import React from 'react';

import styles from './CardTitle.css';

type PropType = {
    title: string;
    onClick?: () => void;
    cursor?: string;
};

const CardTitle = ({ title, onClick, cursor }: PropType) => {
    return (
        <label
            className={styles.title}
            onClick={onClick}
            style={{ cursor: cursor }}
        >
            {title}
        </label>
    );
};

export default CardTitle;
