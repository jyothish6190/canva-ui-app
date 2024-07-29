import React from 'react';

import { Box } from '@canva/app-ui-kit';
import ComponentCard from 'assets/containers/component-card.svg';

import styles from './container-list.css';
import CardTitle from 'src/components/card-title/CardTitle';

type ContainerListType = {
    onClick: () => void;
};

const ContainerList = ({ onClick }: ContainerListType) => {
    return (
        <Box>
            <div
                className={styles.container}
                onClick={(e) => {
                    e.preventDefault();
                    onClick();
                }}
            >
                <img
                    src={ComponentCard}
                    alt="My SVG"
                    style={{ overflow: 'hidden' }}
                />
            </div>
            <CardTitle title="Templates and containers"></CardTitle>
        </Box>
    );
};

export default ContainerList;
