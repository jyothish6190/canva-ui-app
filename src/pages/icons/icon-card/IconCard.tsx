import React from 'react';
import { Box, Rows, Text } from '@canva/app-ui-kit';

import styles from './IconCard.css';

import { Icon } from 'src/models/icons.model';

import IconItem from '../icon-item/IconItem';
import CardTitle from 'src/components/card-title/CardTitle';

type IconCardType = {
    icon: Icon;
};

const IconCard = ({ icon }: IconCardType) => {
    return (
        <Rows spacing="0.5u">
            <Box
                id={icon.value}
                display="flex"
                background="neutralLow"
                borderRadius="standard"
                className={styles.card}
                justifyContent="center"
                alignItems="center"
            >
                <IconItem icon={icon} />
            </Box>
            <Text
                alignment="start"
                capitalization="default"
                size="small"
                variant="bold"
                lineClamp={1}
            >
                {icon.label}
            </Text>
        </Rows>
    );
};

export default IconCard;
