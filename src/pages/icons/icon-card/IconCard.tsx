import React from 'react';
import { Box, Rows } from '@canva/app-ui-kit';

import styles from './IconCard.css';

import { Icon } from 'src/models/icons.model';

import IconItem from '../icon-item/IconItem';

type IconCardType = {
    icon: Icon;
};

const IconCard = ({ icon }: IconCardType) => {
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
                <IconItem icon={icon} />
            </Box>
            <label className={styles.title}>{icon.label}</label>
        </Rows>
    );
};

export default IconCard;
