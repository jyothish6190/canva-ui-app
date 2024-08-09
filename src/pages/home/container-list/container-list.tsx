import React from 'react';

import { Box, Text } from '@canva/app-ui-kit';
import ComponentCard from 'assets/containers/component-card.svg';
import ImageWithAuth from 'src/components/image-with-auth/ImageWithAuth';

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
                <ImageWithAuth
                    imageUrl={'/assets/containers/component-card.svg'}
                />
            </div>
            <Text
                alignment="start"
                capitalization="default"
                size="small"
                variant="bold"
                lineClamp={1}
            >
                Templates and containers
            </Text>
        </Box>
    );
};

export default ContainerList;
