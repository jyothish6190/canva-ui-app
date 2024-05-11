import React from 'react';

import styles from './ErrrorMessage.css';
import { Text } from '@canva/app-ui-kit';

type PropType = {
    errorMessage: string;
};
const ErrrorMessage = ({ errorMessage }: PropType) => {
    return (
        <div className={styles.container}>
            <Text tone="secondary" alignment="center">
                {errorMessage}
            </Text>
        </div>
    );
};

export default ErrrorMessage;
