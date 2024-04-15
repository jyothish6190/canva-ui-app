import React from 'react';
import { ArrowLeftIcon } from '@canva/app-ui-kit';

import styles from './Header.css';

type HeaderType = {
    header: string;
    onClick(): void;
};

export const Header = ({ header, onClick }: HeaderType) => {
    return (
        <div className={styles.container}>
            <button className={styles['back-button']} onClick={onClick}>
                <ArrowLeftIcon />
            </button>

            <span className={styles.header}>{header}</span>
        </div>
    );
};
