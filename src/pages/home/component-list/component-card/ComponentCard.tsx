import React from 'react';
import { Box, Rows, Text } from '@canva/app-ui-kit';

import styles from './ComponentCard.css';
import ComponentItem from '../component-item/ComponentItem';
import { Component } from 'src/models/component.model';
import CardTitle from 'src/components/card-title/CardTitle';

type ComponentCardType = {
    component: Component;
};

const ComponentCard = ({ component }: ComponentCardType) => {
    return (
        <Rows spacing="0.5u">
            <Box
                display="flex"
                borderRadius="standard"
                className={styles.card}
                justifyContent="center"
                alignItems="center"
            >
                <div className={styles.item}>
                    <ComponentItem component={component} isProperty={false} />
                </div>
            </Box>
            <Text
                alignment="start"
                capitalization="default"
                size="small"
                variant="bold"
                lineClamp={1}
            >
                {component.name}
            </Text>
        </Rows>
    );
};

export default ComponentCard;
