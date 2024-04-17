import React from 'react';
import { TextInput } from '@canva/app-ui-kit';

import { Component } from 'src/models/coponent.model';

import styles from './TextInput.css';

const TextInputComponent = ({ component }: { component: Component }) => {
    return (
        <div className={styles.container}>
            <TextInput placeholder={component.placeholder} type={'text'} />
        </div>
    );
};

export default TextInputComponent;
