import React from 'react';
import { TextInput } from '@canva/app-ui-kit';

import { Component } from 'src/models/component.model';

import styles from './TextInput.css';

type PropType = {
    component: Component;
    isProperty: boolean;
};

const TextInputComponent = ({ component, isProperty }: PropType) => {
    if (isProperty) {
        return <TextInput placeholder={component.placeholder} type={'text'} />;
    }
    return (
        <div className={styles.container}>
            <TextInput placeholder={component.placeholder} type={'text'} />
        </div>
    );
};

export default TextInputComponent;
