import React from 'react';

import styles from './Title.css';

type PropType = {
    title: string;
    onClick?: () => void;
};

const Title = ({ title, onClick }: PropType) => {
    return (
        <label className={styles.title} onClick={onClick}>
            {title}
        </label>
    );
};

export default Title;
