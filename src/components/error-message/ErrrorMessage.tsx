import React from 'react';

import styles from './ErrrorMessage.css';

type PropType = {
    errorMessage: string;
};
const ErrrorMessage = ({ errorMessage }: PropType) => {
    return (
        <div className={styles.container}>
            <p className={styles['error-message']}>{errorMessage}</p>
        </div>
    );
};

export default ErrrorMessage;
