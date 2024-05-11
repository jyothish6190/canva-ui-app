import React from 'react';
import { ArrowLeftIcon, Button, Title } from '@canva/app-ui-kit';

import styles from './Header.css';

type HeaderType = {
    header: string;
    onClick(): void;
};

export const Header = ({ header, onClick }: HeaderType) => {
    return (
        <div className={styles.container}>
            <Button
                variant="tertiary"
                icon={ArrowLeftIcon}
                ariaLabel="Go back"
                onClick={onClick}
            />

            <Title size="small">{header}</Title>
        </div>
    );
};
