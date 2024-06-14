import React, { useEffect, useState } from 'react';

import { LoadingIndicator } from '@canva/app-ui-kit';

import { Component } from 'src/models/component.model';
import { LoadingIndicatorFieldNames } from 'src/constants/component-configs/LoadingIndicatorConfig';
import styles from './LoadingIndicatorComponent.css';

type LoadingIndicatorType = {
    component: Component;
    isProperty: boolean;
};
const LoadingIndicatorComponent = ({
    component,
    isProperty,
}: LoadingIndicatorType) => {
    const [indicatorSize, setIndicatorSize] = useState<
        'small' | 'medium' | 'large'
    >('small');

    useEffect(() => {
        component.fields?.forEach((field: Component) => {
            if (field.name === LoadingIndicatorFieldNames.SIZE) {
                setIndicatorSize(field.value ? field.value : 'small');
            }
        });
    }, [component]);
    if (isProperty) {
        return (
            <div className={styles['loading-indicator-component']}>
                <LoadingIndicator size={indicatorSize} />
            </div>
        );
    } else {
        return <LoadingIndicator size="large" />;
    }
};
export default LoadingIndicatorComponent;
