import React from 'react';
import { Box, Rows } from '@canva/app-ui-kit';

import styles from './ComponentCard.css';
import ComponentItem from '../component-item/ComponentItem';
import { Component } from 'src/models/component.model';
import Title from 'src/components/title/Title';

type ComponentCardType = {
    component: Component;
};

const ComponentCard = ({ component }: ComponentCardType) => {
    return (
        <Rows spacing="0.5u">
            <Box
                display="flex"
                background="neutralLow"
                borderRadius="standard"
                className={styles.card}
                justifyContent="center"
                alignItems="center"
            >
                <ComponentItem component={component} isProperty={false} />
            </Box>
            <Title title={component.name}></Title>
        </Rows>
    );
};

export default ComponentCard;
