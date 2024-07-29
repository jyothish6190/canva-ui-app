import React from 'react';
import { Box, Rows, Text } from '@canva/app-ui-kit';

import styles from './ContainerCard.css';

import { Container } from 'src/models/containers.model';

import ContainerItem from '../container-item/ContainerItem';

type ContainerCardType = {
    container: Container;
};

const ContainerCard = ({ container }: ContainerCardType) => {
    return (
        <Rows spacing="0.5u">
            <Box
                id={container.value}
                display="flex"
                background="neutralLow"
                borderRadius="standard"
                className={styles.card}
                justifyContent="center"
                alignItems="center"
            >
                <ContainerItem container={container} />
            </Box>
            <Text
                alignment="start"
                capitalization="default"
                size="small"
                variant="bold"
                lineClamp={1}
            >
                {container.label}
            </Text>
        </Rows>
    );
};

export default ContainerCard;
