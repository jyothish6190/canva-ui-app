import React from 'react';
import { MultilineInput } from '@canva/app-ui-kit';

import styles from './MultiInput.css';

import { Component } from 'src/models/coponent.model';

const MultiInputComponent = ({ component }: { component: Component }) => {
    return (
        <div className={styles.multiLineContainer}>
            <div className={styles.multiLineInnerContainer}>
                <MultilineInput placeholder={component.name} autoGrow />
            </div>
        </div>
    );
};

export default MultiInputComponent;
