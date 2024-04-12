import React from 'react';
import { Rows, Grid, Box, Text, Title } from '@canva/app-ui-kit'; // Import components
import styles from 'styles/components.css';

export default function TwoCardComponent({ title1, title2, box1, box2 }) {
    return (
        <Grid alignX="stretch" alignY="stretch" columns={2} spacing="1u">
            <Box
                display="flex"
                background="neutralLow"
                borderRadius="standard"
                className={styles.square}
                justifyContent="center"
                alignItems="center"
            >
                {box1}
            </Box>
            <Box
                display="flex"
                background="neutralLow"
                borderRadius="standard"
                className={styles.square}
                justifyContent="center"
                alignItems="center"
            >
                {box2}
            </Box>
            <label className={styles.title}>{title1}</label>{' '}
            <label className={styles.title}>{title2}</label>{' '}
        </Grid>
    );
}
