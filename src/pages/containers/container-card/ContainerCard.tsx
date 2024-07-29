import React from 'react';
import { Box, Rows } from '@canva/app-ui-kit';

import styles from './ContainerCard.css';

import { Container } from 'src/models/containers.model';

import ContainerItem from '../container-item/ContainerItem';
import CardTitle from 'src/components/card-title/CardTitle';

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
            <CardTitle title={container.label}></CardTitle>
        </Rows>
    );
};

export default ContainerCard;
